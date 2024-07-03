"use server"
import { error } from "console"
import {Resend} from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

const  validString = (value:unknown , maxlenght:number) => {
    if(!value || typeof value !== "string" || value.length > maxlenght)
        {
            return false
        }
        return true
}

export const sendEmail =async(formData :FormData) =>{
  
    const sender = formData.get("senderEmail")
    const message = formData.get("message")
console.log(sender, message)
    if(!validString(sender,500)){
        return{
            error:"Invalid sender email"
        }
    }
    if(!validString(message,5000)){
        return{
            error:"Invalid Message"
        }
    }
let data
try{
   data= await resend.emails.send({
        from: 'Portfolio Connect <onboarding@resend.dev>',
        to: 'muazammughal11111@gmail.com',
        subject: 'This is the msg from the protfoio Query Connect',
        html: ` ${sender}<br/>${message}<p>Get an email from portfolio  <strong>Connect</strong>!</p>"`,
        reply_to: sender as string, 
       

    })
}catch(error:unknown){
return{error}
    
}
return{
    data
}
    
}
