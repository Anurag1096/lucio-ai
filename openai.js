import OpenAI from "openai";
import dotenv from "dotenv"

dotenv.config();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY2 });

export async function getAnswersFromGPT(questions) {
  const messages = [
    {
      role: "system",
      content:
        "You're a math assistant. Only return a JSON array of correct answers in order and with the correct answer_type.",
    },
    {
      role: "user",
      content: `Here are the questions:\n${JSON.stringify(questions)}`,
    },
  ];

  const chatCompletion = await openai.chat.completions.create({
    model: "gpt-4o", // or "gpt-3.5-turbo"
    messages,
  });

  let rawText = chatCompletion.choices[0].message.content;
  if (rawText.startsWith("```")) {
    rawText = rawText.replace(/^```(?:json)?\n?/, "").replace(/```$/, "");
  }
  let answerArray;

  try {
    answerArray = JSON.parse(rawText);
  } catch (err) {
    console.error("Failed to parse GPT response:", rawText);
    throw err;
  }

  return answerArray;
}