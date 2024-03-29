
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AlignRight, X } from "lucide-react";
import Navbar from '@/app/(components)/Navbar';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Folder Chat",
  description: "Transform the way you collaborate with Folder.Chat – the ultimate platform that seamlessly integrates chat functionality with your internal documents and data sources. Elevate team communication by chatting directly within your files or connecting with data sources effortlessly. Experience a new era of productivity and collaboration with Folder.Chat's innovative approach to document interaction. Elevate your workflow today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="en">
      <head>
      <link rel="icon" type="image/svg+xml" href="/assets/favicon.svg" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t flex-wrap text-white border-[#555555]">
          <p className="text-xs">© 2024 Hexon Labs. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <a className="text-xs hover:underline underline-offset-4" href="https://www.hexonlabs.com/terms-conditions" target="_blank">
              Terms of Service
            </a>
            <a className="text-xs hover:underline underline-offset-4" href="https://www.hexonlabs.com/privacy-policy" target="_blank">
              Privacy
            </a>
          </nav>
          
        </footer>
      </body>
    </html>
  );
}
