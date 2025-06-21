import fetch from 'node-fetch'
import dotenv from 'dotenv';
dotenv.config();
const payload={
    name:"Anurag Chakravarty",
    email:"anuragqwerty09@outlook.com"
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


post_cred(payload);