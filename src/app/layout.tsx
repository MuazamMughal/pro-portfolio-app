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
  title: 'Muazam Mughal',
  description: 'Muazam Mughal professional portfolio web app',
   icons: "/NewAvatar.png"
}
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
