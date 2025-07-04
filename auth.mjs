import fetch from "node-fetch";
import fs from "fs";
import fetchCookie from "fetch-cookie";

import dotenv from "dotenv";
dotenv.config();
const fetchWithCookies = fetchCookie(fetch);
let token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQW51cmFnIENoYWtyYXZhcnR5IiwiZW1haWwiOiJhbnVyYWdxd2VydHkwOUBvdXRsb29rLmNvbSIsImRhdGUiOiIyMDI1LTA2LTI2IDA4OjA4OjM1In0.m4rkzQSQPiVAwNt14cK2xLHMS-dU36CDXgh_2V-RBPo"


const Auth_cred = async (token) => {
  try {
    // step-1 access-check GET/POST finished
    // step-2 look-around GET
    const endpoints = ["logic-it-out"];
    
    for (let ep of endpoints) {
      const response = await fetchWithCookies(
        `${process.env.API_URL_AUTH}${ep}`,
        {
          method: "POST",
          headers: {
            Authorization: `${token}`,
            Cookie: `auth_token=${token}`,
            "Content-Type": "application/json",
            Referer: "https://lucioai.com",
            "User-Agent": "mr_robot",
          },
        body: JSON.stringify({
          token:`eyJhbnN3ZXJzIjpbMTIsMjI1LDM2MF19.aF0VWw.45-6sJpCLg6iMC8XoXW5-bzXK6o`,
          answers:[12,225,360]
        })
        }
        
      );

      console.log(response);
      console.log(
        `For endpoint ${ep} --> Response status ${response.status} :${response.statusText}`
      );
      const data = await response.json();
      console.log(data)
    //   fs.writeFile("output_message.txt", JSON.stringify(data.message, null, 2), (err) => {
    //     if (err) {
    //       console.error("Error writing file:", err);
    //     } else {
    //       console.log("File written successfully.");
    //     }
    //   });
    }
  } catch (error) {
    console.log("Error occoured", error);
  } finally {
    console.log("Request finnished");
  }
};
// GET request passed
// {
// message: "Okay great, you've made it so far! For the next step, you need to get past our super secret API bouncer.\n" +
//   '\n' +
//   "They don't let people in at all unless you tell them that you're coming from lucioai.com and that you're actually mr_robot. You can send a POST request to this route to talk to the bouncer."
// }
// POST also passed

Auth_cred(token);
