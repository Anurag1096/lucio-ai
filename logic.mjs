import fetch from "node-fetch";
import fetchCookie from "fetch-cookie";
import dotenv from "dotenv";
import {getGroqAnswers} from './groc.js'

dotenv.config();

const fetchWithCookies = fetchCookie(fetch);

//------------------------------------------------
//Get and Post request for calling lucio endpoint.
//------------------------------------------------
const Auth_cred = async () => {
  try {
    //-----------------------------------------------
    // Setting up the url.
    //------------------------------------------------
    const endpoint = "logic-it-out";
    const url = `${process.env.API_URL_AUTH}${endpoint}`;


    //------------------------------------------------
    // Step 1:Call to  'GET' for geting the questions and token
    //------------------------------------------------
    const getRes = await fetchWithCookies(url, {
      method: "GET",
      headers: {
        Authorization: process.env.TOKEN,
        Cookie: `auth_token=${process.env.TOKEN}`,
        Referer: "https://lucioai.com",
        "User-Agent": "mr_robot",
      },
    });
    //------------------------------------------------
    // 
    const getData = await getRes.json();
    const { token, questions } = getData;

    console.log("Fetched token:", token);
    console.log("Questions:", questions);

// Need to call Groq api to solve it in under 5 sec

    const answers = await getGroqAnswers(questions);


//--------------------------------------------------
if(!answers.includes(null)){
   console.log(answers)
}

//--------------------------------------------------

    // Step 2: POST the answers using the fetched token
    const postRes = await fetchWithCookies(url, {
      method: "POST",
      headers: {
        Authorization: process.env.TOKEN,
        Cookie: `auth_token=${process.env.TOKEN}`,
        "Content-Type": "application/json",
        Referer: "https://lucioai.com",
        "User-Agent": "mr_robot",
      },
      body: JSON.stringify({
        token: token,
        answers: answers,
      }),
    });

    console.log(`Response: ${postRes.status} - ${postRes.statusText}`);
    const postData = await postRes.json();
    console.log(postData);
  } catch (error) {
    console.error("Error occurred:", error);
  } finally {
    console.log("Request flow finished.");
  }
};

Auth_cred();
