"use client"
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'

import { BsMoon, BsSun } from 'react-icons/bs'


type Theme = "light" | "dark" 


const ThemeSwitch = () => {


    const [darkmode , setDarkMode] = useState(true)


    // const toggleTheme  = () => {
    //     if (theme === "light") {
    //         setTheme("dark")
    //         window.localStorage.setItem("theme", "dark")
    //         document.documentElement.classList.add("dark")
    //     } else {
    //         setTheme("light")
    //         window.localStorage.setItem("theme", "light")
    //         document.documentElement.classList.add("light")
    //     } 
    // } 
    useEffect(() => {
        const theme = localStorage.getItem("theme") 

    if (theme === "dark") setDarkMode(true)

    }  , [])
    useEffect(() => {
        if(darkmode){
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme',"dark")
        }else{
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme',"light")
        }
    } , [darkmode])
     
        
          
        

  return (
    <Button className='fixed bottom-5 right-5 w-[3rem] h-[3rem] bg-opacity-10
     backdrop-blur-[0.5rem] border border-green-700 border-opacity-40 shadow-2xl
     rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105
     transition-all fornt-bold text-2xl text-green-700 '
     onClick={()=>setDarkMode(!darkmode)}>

        {darkmode ? <BsMoon />:<BsSun />}

    </Button>
  )
}

export default ThemeSwitch