import Groq from "groq-sdk";
import dotenv from "dotenv";
dotenv.config();

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function getGroqAnswers(questions) {
  const prompt = `Here are the questions:\n${JSON.stringify(questions)}\n\nReturn only a JSON array of answers in order.`;

  const chatCompletion = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You are a math assistant. Only return a JSON array of correct answers in order.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    model: "llama-3.3-70b-versatile", // or llama3-70b-8192
  });

  let content = chatCompletion.choices[0]?.message?.content?.trim();

  // Remove markdown-style code block if present
  if (content.startsWith("```")) {
    content = content.replace(/^```(?:json)?\n?/, "").replace(/```$/, "").trim();
  }

  try {
    return JSON.parse(content);
  } catch (err) {
    console.error("❌ Failed to parse Groq response:", content);
    throw err;
  }
}
