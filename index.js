import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();
// Setup for GET request
const getString = async (url) => {
  try {
    const response = await fetch(url);
    console.log(response)
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("error", error);
  } finally {
    console.log("Request finished");
  }
};


getString(process.env.API_URL);
