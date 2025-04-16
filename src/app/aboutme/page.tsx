// import Stats from '@/components/main/Stats';

// const AboutPage = () => {
//   const highlight = (text: string) => (
//     <span className="text-green-400 font-bold">{text}</span>
//   );

//   const abbreviation = (title: string, text: string) => (
//     <abbr className="text-green-400 font-bold" title={title}>{text}</abbr>
//   );

//   return (
//     <section className="h-full">
//       <div className="container mx-auto h-full px-4">
//         {/* Main Content */}
//         <article className="text-center text-black/70 dark:text-white text-lg pt-6 lg:pt-8 lg:px-8  mx-auto">
//           <p>
//             <span className="text-2xl text-green-400 font-bold">Muazam Mughal, </span>
//             <br /><br />
//             After my Pre-Engineering degree, I decided to pursue my passion for {highlight("Programming")}. 
//             I started graduation in Engineering Software {abbreviation("Bachelor in Science Software Engineer", "BSSE")}. 
//             At that time, I began learning programming fundamentals first in {highlight("GWBasic")}, then {highlight("C++")}. 
//             Along with my Engineering, I enrolled in a boot camp and learned {highlight("Full-Stack Web Development")}.
//           </p>

//           <p className="mt-4">
//             My core stack is {highlight("Next.js")}, {highlight("React.js")}, {highlight("TypeScript")} and {highlight("PostgreSQL as DB")}. 
//             I'm experienced with multiple {abbreviation("Content management system", "Headless CMS")} and {abbreviation("Object Relational Mapper", "ORMs")} such as {highlight("Prisma")} and {highlight("Drizzle")}.
//           </p>

//           <p className="mt-4">
//             As an {highlight("Learning Enthusiast")}, I'm currently mastering {highlight("Cutting Edge")} technologies including {highlight("Cloud Applied Generative AI Engineering (GenEng)")} stack: {highlight("Python")}, {highlight("OpenAI")}, {highlight("Containers")}, {highlight("Gemini")}, {highlight("PostgreSQL")}, {highlight("LangChain")}, {highlight("Pinecone")} and more.
//           </p>
          
//           <p className="mt-4 pt-2">
//             My passion is learning and creating solutions. When not coding, I enjoy exploring tech innovations, studying history, and playing story-driven video games. 
//             I also bring extensive experience in {highlight("Business")} operations from furniture manufacturing.
//           </p>
//         </article>

//         {/* Stats Section */}
//         <div className="pt-8 lg:pt-12 lg:px-12">
//           <Stats />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutPage;

import Stats from '@/components/main/Stats';
import { Code, Cpu, Database, BrainCircuit } from 'lucide-react';
import Head from 'next/head';
import Link from 'next/link';

const AboutPage = () => {
  const techStack = [
    { icon: <Code size={20} />, category: "Web Development", items: ["Next.js", "React", "TypeScript", "TailwindCSS"] },
    { icon: <Database size={20} />, category: "Database", items: ["PostgreSQL", "Prisma", "DrizzleORM", "MongoDB"] },
    { icon: <Cpu size={20} />, category: "AI Engineering", items: ["Python", "LangChain", "OpenAI", "Gemini"] },
    { icon: <BrainCircuit size={20} />, category: "Emerging Tech", items: ["Agentic AI", "Vector DBs", "LLM Orchestration"] }
  ];

  return (
    <>
     <Head>
    <title>About – Muazam Mughal | Software Engineer| Full-Stack Web Developer | Next.js |JamStack & AI Engineer</title>
    <meta
      name="description"
      content="Discover the journey of Muazam Mughal, a full-stack engineer blending web development with AI innovation. Explore skills, stack, and current projects."
    />
    <meta name="robots" content="index, follow" />
    <meta property="og:title" content="About – Muazam Mughal | Software Engineer| Full-Stack Web Developer | Next.js |JamStack & AI Engineer" />
    <meta
      property="og:description"
      content="Explore Muazam Mughal’s engineering mindset, tech stack, and how he merges web architecture with AI systems."
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://muazammughal.me/aboutme" />
    <meta property="og:image" content="https://muazammughal.me/NewAvatar.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="About – Muazam Mughal | Full-Stack & AI Engineer" />
    <meta
      name="twitter:description"
      content="Get to know Muazam Mughal – a software engineer at the intersection of web and AI tech."
    />
    <meta name="twitter:image" content="https://muazammughal.me/NewAvatar.png" />
    <link rel="canonical" href="https://muazammughal.me/aboutme" />
  </Head>
    <section className="relative h-full overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10 opacity-10 dark:opacity-5">
        <div className="absolute top-0 left-20 w-64 h-64 bg-green-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-32 w-48 h-48 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-12 lg:py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-green-400">Building</span> The Future&apos;s
            <br />Digital Foundations
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300  mx-auto">
            Full-stack engineer specializing in Next.js applications and AI-powered solutions
          </p>
        </div>

        {/* Bio Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="w-8 h-1 bg-green-400 mr-4"></span>
              My Journey
            </h2>
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <p>
                My coding journey began with the raw simplicity of <span className="text-green-400 font-medium">GWBasic</span> and <span className="text-green-400 font-medium">C++</span>, where I first discovered the thrill of making computers solve problems.
              </p>
              <p>
                During my <span className="text-green-400 font-medium">Software Engineering degree</span>, I immersed myself in full-stack development, mastering modern frameworks while maintaining appreciation for foundational concepts.
              </p>
              <p>
                Today, I stand at the intersection of <span className="text-green-400 font-medium">web architecture</span> and <span className="text-green-400 font-medium">AI engineering</span>, building systems that leverage the best of both worlds.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="w-8 h-1 bg-green-400 mr-4"></span>
              My Approach
            </h2>
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <p>
                I build <span className="text-green-400 font-medium">scalable foundations</span> first - clean architecture, type safety, and robust data layers.
              </p>
              <p>
                Then layer in <span className="text-green-400 font-medium">intelligent capabilities</span> where they create real value - never as gimmicks.
              </p>
              <p>
                Every system is designed for <span className="text-green-400 font-medium">continuous evolution</span> as new technologies emerge.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack Visualization */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8 text-center">Technical Arsenal</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((stack) => (
              <div key={stack.category} className="bg-white dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4 text-green-400">
                  {stack.icon}
                  <h3 className="ml-2 font-semibold">{stack.category}</h3>
                </div>
                <ul className="space-y-2">
                  {stack.items.map((item) => (
                    <li key={item} className="flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Current Focus */}
        <div className="bg-gradient-to-r from-green-400/10 to-purple-500/10 p-8 rounded-2xl mb-20">
          <h2 className="text-3xl font-bold mb-6 text-center" >Current Focus</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-400">Agentic AI Systems</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Building autonomous AI agents that can plan, reason, and execute complex workflows - bridging the gap between LLMs and practical applications.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-400">Generative Interfaces</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Creating Next.js components that dynamically adapt using AI - imagine UIs that evolve based on user behavior and context.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link 
            href="/work" 
            className="inline-flex items-center px-6 py-3 bg-green-500 hover:bg-green-500 text-white rounded-full font-medium transition-colors"
          >
            See My Projects
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
<div className=' mb-20'>
  <Stats />
</div>
      
    </section>
    </>
  );
};

export default AboutPage;