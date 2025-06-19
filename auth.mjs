import fetch from 'node-fetch'
import dotenv from 'dotenv';
dotenv.config();

const Auth_cred=async (token)=>{
   try{
    const endpoints = [
  "access-check",
  
];

const payload={
  "name": "Anurag chakravarty",
  "email": "anurag.011996@gmail.com",
  "date": "2025-06-19 10:55:51"
}

for( let ep of endpoints){
    const response= await fetch(`${process.env.API_URL_AUTH}${ep}`,{
        method:"POST", 
        headers: {
          Cookie: `auth_token=${token}`,
          "Content-type":"application/json",
      },
      body:JSON.stringify(payload)
    })
    console.log(response)
    console.log(`For endpoint ${ep} --> Response status ${response.status} :${response.statusText}`)
    const data=await response.json();
    console.log(data)
}
   }catch(error){
    console.log("Error occoured",error)
   }finally{
    console.log("Request finnished")
   }
}
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQW51cmFnIGNoYWtyYXZhcnR5IiwiZW1haWwiOiJhbnVyYWcuMDExOTk2QGdtYWlsLmNvbSIsImRhdGUiOiIyMDI1LTA2LTE5IDEwOjU1OjUxIn0.Rm2oC_bi5J1GkAd_1eO46L-52sfYmeTMpxDbsZ8DPeg";

Auth_cred(token);