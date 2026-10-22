

import type { Metadata } from "next";
import { Inter, Anton, Sacramento } from "next/font/google";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import Header from "@/components/main/Header";
import PageTransition from "@/components/main/PageTransition";
import BracketTransition from "@/components/main/BracketTransition"
import {Toaster} from "react-hot-toast"
import { siteConfig } from "@/lib/site"
import { personNode, websiteNode, primaryImageNode } from "@/lib/jsonld"
import JsonLd from "@/components/seo/JsonLd"




const inter = Inter({ subsets: ["latin"] });
const  JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight:["100","200","300","400","500","600","700","800"],
  variable:"--font-JetBrains_Mono"
})
const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
})
const sacramento = Sacramento({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-signature",
})
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: '/',
    type: 'website',
    siteName: siteConfig.name,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
  },
  icons: {
    icon: '/NewAvatar.png',
    shortcut: '/NewAvatar.png',
    apple: '/NewAvatar.png',
  },
  formatDetection: { email: false, address: false, telephone: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  // Set NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION in Vercel to the token from Google Search Console.
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const themeInitScript = `
    (function () {
      try {
        var stored = window.localStorage.getItem('theme');
        var theme = stored === 'light' || stored === 'dark'
          ? stored
          : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        if (theme === 'dark') document.documentElement.classList.add('dark');
      } catch (e) {}
    })();
  `

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <JsonLd nodes={[primaryImageNode(), personNode(), websiteNode()]} />
      </head>
      <body className={`${JetBrainsMono.variable} ${anton.variable} ${sacramento.variable} bg-background text-foreground`}>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-green-500 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        Skip to content
      </a>
      <Toaster position="top-center"/>
        <Header/>
       <BracketTransition/>
        <PageTransition>
        {children}

        </PageTransition>

        </body>
    </html>
  );
}
