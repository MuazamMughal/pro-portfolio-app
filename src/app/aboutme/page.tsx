import Stats from '@/components/main/Stats'
import React from 'react'

const page = () => {
    return (
        <section className='h-full'>
            <div className='container mx-auto h-full '>
                <div className='text-center  text-black/70 dark:text-white text-lg xl:lg:pt-6 xl:lg:px-8 '>
                    <p><span className='text-2xl  text-green-400 font-bold'>Muazam Mughal, </span>
                        <br /><br />
                        After my Pre-Engineering degree, I decided to pursue my passion for <span className =" text-green-400  font-bold">Programming</span>
                        . I started graduation in Engineering Software <abbr  className =" text-green-400  font-bold "title="Bachelor in Science Software Engineer">BSSE</abbr>. At that, I started learning the basis of programming
                        first in <span className =" text-green-400  font-bold">GWBasic</span>, than <span className =" text-green-400  font-bold">C++</span>. Along with my Engineering, I enrolled in
                        boot camp and learned <span className =" text-green-400  font-bold">Full-Stack Web Development.</span></p>
                    <p>My core stack is <span className =" text-green-400  font-bold">Next.js</span>,<span className =" text-green-400  font-bold"> React.js</span>, <span className =" text-green-400  font-bold">Typescript</span> and <span className =" text-green-400  font-bold">
                        PostgreSQL as DB.</span> Along with multiple <span className =" text-green-400  font-bold"> Headless <abbr  title="Content management system">CMS</abbr></span> and <span className =" text-green-400  font-bold"> <abbr  title=" Object Relational Mapper">ORMs</abbr></span> such as
                        <span className =" text-green-400  font-bold"> Prisma</span> and <span className =" text-green-400  font-bold">Drizzle</span>.</p>
                    <p>
                        As an <span className =" text-green-400  font-bold">Learning Enthusiast</span>, I am currently learning <span className =" text-green-400  font-bold">Cutting Edge </span>
                         Technologies such as <span className =" text-green-400  font-bold"> Cloud Applied Generative AI Engineering (GenEng)</span> Stack included <span className =" text-green-400  font-bold">Python </span>,
                        <span className =" text-green-400  font-bold">OpenAI</span>, <span className =" text-green-400  font-bold">Containers</span>, <span className =" text-green-400  font-bold">Gemini</span>, <span className =" text-green-400  font-bold">PostgreSQl</span>, <span className =" text-green-400  font-bold">LangChain</span>, <span className =" text-green-400  font-bold">Pinecone</span> etc
                    </p>
                    
                    <p className='pt-2'>
                        My Favourate is to Learn and create solution for the problem. when I am not coding , I enjoy learning new things in tech or history and Playing Story video games.
                        I also have vast Experience & Learnings of <span className =" text-green-400  font-bold">Business</span> in furniture Manifacturing.

                    </p>
                </div>
                <div className='xl:lg:pt-12 xl:lg:px-12'>
                    <Stats />
                </div>

            </div>
        </section>

    )
}

export default page