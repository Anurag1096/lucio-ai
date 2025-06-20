import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();

const Auth_cred = async (auth_token, token) => {
  try {
    const endpoints = ["access-check"];

    const payload = {
      name: "Anurag chakravarty",
      email: "anurag.011996@gmail.com",
      date: "2025-06-19 15:39:18",
    };

    for (let ep of endpoints) {
      const response = await fetch(`${process.env.API_URL_AUTH}${ep}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          Cookie: `auth_token=${auth_token}`,
          Referer: "https://lucioai.com",
          Origin: "https://lucioai.com",
          "Content-Type": "application/json",
        },
        
      });
      console.log(JSON.stringify(payload));
      console.log(response);
      console.log(
        `For endpoint ${ep} --> Response status ${response.status} :${response.statusText}`
      );
      const data = await response.json();
      console.log(data);
    }
  } catch (error) {
    console.log("Error occoured", error);
  } finally {
    console.log("Request finnished");
  }
};
let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQW51cmFnIGNoYWtyYXZhcnR5IiwiZW1haWwiOiJhbnVyYWcuMDExOTk2QGdtYWlsLmNvbSIsImRhdGUiOiIyMDI1LTA2LTE5IDE1OjM5OjE4In0.RTn1RqjYtu_t_jPzjP27zF3qBiWYi38L_ruDNjIF6Yg";
let auth_token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQW51cmFnIGNoYWtyYXZhcnR5IiwiZW1haWwiOiJhbnVyYWcuMDExOTk2QGdtYWlsLmNvbSIsImRhdGUiOiIyMDI1LTA2LTE5IDE1OjM5OjE4In0.RTn1RqjYtu_t_jPzjP27zF3qBiWYi38L_ruDNjIF6Yg";
if (token === auth_token) {
  console.log("match");
  Auth_cred(auth_token, token);
} else {
  console.log("does not match");
}
