import fetch from 'node-fetch'
import dotenv from 'dotenv';
dotenv.config();
const payload={
    name:"Anurag chakravarty",
    email:"anurag.011996@gmail.com"
}

const post_cred=async (payload)=>{
   try{
    const response= await fetch(process.env.API_URL,{
        method:"POST", headers: {
        "Content-Type": "application/json",
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
// 
// }

post_cred(payload);