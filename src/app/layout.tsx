

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import Header from "@/components/main/Header";
import PageTransition from "@/components/main/PageTransition";
import BracketTransition from "@/components/main/BracketTransition"
import {Toaster} from "react-hot-toast"
import ThemeSwitch from "@/components/theme-switch";




const inter = Inter({ subsets: ["latin"] });
const  JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight:["100","200","300","400","500","600","700","800"],
  variable:"--font-JetBrains_Mono"
})
export const metadata: Metadata = {
  title: 'Muazam Mughal | Full-Stack Engineer (Next.js, AI, Cloud)',
  description: 'Full-stack developer & AI engineer specializing in Next.js, generative AI, and cloud-native apps. Let\'s build the future.',
  icons: "/NewAvatar.png",
  alternates: {
    canonical: 'https://muazammughal.me',
  },
  openGraph: {
    title: 'Muazam Mughal | Next.js & AI Engineer',
    description: 'I build performant web apps and AI solutions. Hire me for your project!',
    url: 'https://muazammughal.me',
    type: 'website',
    images: [
      {
        url: '/social-preview.jpg', // Replace with your OpenGraph image
        width: 1200,
        height: 630,
        alt: 'Muazam Mughal - Full-Stack Engineer',
      }
    ],
    siteName: 'Muazam Mughal',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muazam Mughal | Next.js & AI Engineer',
    description: 'I build performant web apps and AI solutions. Hire me for your project!',
    images: ['/social-preview.jpg'], // Same as OpenGraph image
  },
  metadataBase: new URL('https://muazammughal.me'),
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    

<html lang="en">
         
      <body className={`${JetBrainsMono.variable} text-black font-bold dark:font-normal bg-white/10  dark:text-white  dark:bg-[#030014]  `}>
      <Toaster position="top-center"/>
      <ThemeSwitch/>
        <Header/>
       <BracketTransition/>
        <PageTransition>
        {children}
       
        </PageTransition>
       
        
        </body>
    </html>
  );
}
