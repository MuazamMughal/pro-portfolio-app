"use client"
import React from 'react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,

} from "@/components/ui/select"
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { sendEmail } from '@/actions/sendEmail'
import toast from 'react-hot-toast'

import Link from 'next/link'

const info = [
  {
    icons: <FaPhoneAlt />,
    title: "Phone",
    description: <Button className='bg-transparent p-0 text-green-400 font-bold hover:text-green-500 hover:bg-transparent'><Link href='https://wa.me/+923034510773'>Contact Directly</Link></Button>
  },
  {
    icons: <FaEnvelope />,
    title: "Email Directly",
    description: <a className='underline' href='mailto:muazammughal11111@gmail.com'>"Muazammughal11111@gmail.com"</a>
  },
  {
    icons: <FaMapMarkedAlt />,
    title: "Adress",
    description: " W2 Global"
  },


]
const page = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1., duration: 0.5, ease: "easeOut" }
      }}
      className='container  '>
      <div className='flex flex-col item-center  gap-8 justify-center  xl:lg:flex-row '>
        {/* form */}
        <div className='xl:lg:pl-32 p-8 order-2  xl:lg:order-none'>
          <form 
          action={async(formData)=>{
            
           const {data,error} = await sendEmail(formData)
           if(error){
            toast.error
            return
           }
           toast.success("Email sent successfully")

          }} 
          className='flex flex-col gap-4 p-8 bg-slate-300 dark:text-white text-black/80  dark:bg-[#27272c] rounded-xl'>
            <h3 className=' text-2xl font-bold text-green-500'>Let's Conect</h3>
          <p className='text-lg'>
            Get in Connect regarding any query for further
          </p>
          <div>
            <Input type='email' 
            name='senderEmail'
            required
            maxLength={500}
            placeholder='Enter our Email'/>
           
          </div>
          {/* textarea */}
          <Textarea
          className='h-[150px]'
          name='message'
          placeholder='Type your message here'
          required
            maxLength={1000}
          />
          <Button type='submit'
          className=' text-lg font-light rounded-2xl   bg-green-600   hover:bg-green-800'>
                          Send
                        </Button>
                        
          </form>
        </div>
        {/* info */}
        <div className='flex-1 flex items-center justify-center xl:lg:justify-end order-1 
       xl:lg:order-none mb-  xl:lg:mb-0'>
<ul className='flex  xl:lg:px-32 p-6 flex-col gap-12'>
  {info.map((items , index )=>{
    return <li  className ="  flex items-center gap-6" key={index}>
<div className='w-[52px] h-[52px] bg-slate-300 dark:bg-[#27272c] text-green-500 rounded-md flex justify-center items-center'>
 <div className='text-[28px]'> {items.icons}</div>

</div>
<div className='flex-1'>
  <p>{items.title}</p>
  <h1 className=' font-bold text-green-400'>{items.description}</h1>
</div>
    </li>
  })}
</ul>
        </div>
      </div>

    </motion.section>
    
  )



  
}

export default page