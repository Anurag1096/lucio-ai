import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();
// Setup for GET request
const getString = async (url) => {
  try {
    const response = await fetch(url,{
    method:"GET",
        headers: {
          Cookie: `auth_token=${token}`,
      }
    });
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

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQW51cmFnIGNoYWtyYXZhcnR5IiwiZW1haWwiOiJhbnVyYWcuMDExOTk2QGdtYWlsLmNvbSIsImRhdGUiOiIyMDI1LTA2LTE5IDEwOjU1OjUxIn0.Rm2oC_bi5J1GkAd_1eO46L-52sfYmeTMpxDbsZ8DPeg";

getString(process.env.API_URL, token);
