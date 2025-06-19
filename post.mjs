import fetch from 'node-fetch'
import dotenv from 'dotenv';
dotenv.config();
const payload={
    name:"Anurag chakravarty",
    email:"anurag.011996@gmail.com"
}

const post_cred=async (payload,token)=>{
   try{
    const response= await fetch(process.env.API_URL,{
        method:"POST", headers: {
        "Content-Type": "application/json",
        Cookie: `auth_token=${token}`,
        
      },
        body:JSON.stringify(payload)
    })
    console.log(response)

    const data=await response.json();
    console.log(data)
   }catch(error){
    console.log("Error occoured",error)
   }finally{
    console.log("Request finnished")
   }

}
// The following is the response from the "POST" method
// {
//   message: "Okay great, show out your arm and take the entry stamp. Also take this Authorization token, you'll need to show it to the bouncer as well to get in.",
//   token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQW51cmFnIGNoYWtyYXZhcnR5IiwiZW1haWwiOiJhbnVyYWcuMDExOTk2QGdtYWlsLmNvbSIsImRhdGUiOiIyMDI1LTA2LTE5IDA3OjM5OjAyIn0.QBdrdUJyVksngxTZoJbrLErknyPw6dWAAP6AGzdSigc'
// }
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQW51cmFnIGNoYWtyYXZhcnR5IiwiZW1haWwiOiJhbnVyYWcuMDExOTk2QGdtYWlsLmNvbSIsImRhdGUiOiIyMDI1LTA2LTE5IDEwOjU1OjUxIn0.Rm2oC_bi5J1GkAd_1eO46L-52sfYmeTMpxDbsZ8DPeg";

post_cred(payload,token);