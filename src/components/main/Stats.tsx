"use client"
import React from 'react'
import CountUp from "react-countup"
interface stats{
  num: number;
  text:string
}

const stat = [
  {
    num:11,
    text:"Months of Experience"
  },
  {
    num:6,
    text:"Projects Completed"
  },
  {
    num:16,
    text:"Technologies Mastered "
  },
  {
    num:159,
    text:"Code Commits"
  },
]
const Stats = () => {
  return (
    <section>
      <div className='container mx-auto'>
        <div className='flex flex-wrap gap-6 mt-8  max-w-[80vm] mx-auto xl:mx-w-none'>
          {
            stat.map((stats:stats , index)=>{
              return(
                <div className='flex-1 flex gap-6 items-center justify-center xl:justify-start'
                 key={index}>
                  <CountUp
                  end ={stats.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl  text-green-400 font-bold"/>
                  <p className={`${stats.text.length < 10 ? "max-w-[60px] ": "max-w-[100px] font-bold  text-xl"}`}>
                    {stats.text}
                  </p>

                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  
  
  )
}
export default Stats