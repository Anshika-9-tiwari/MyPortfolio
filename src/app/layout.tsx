import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsappSticky from "@/components/whatsappicon";
import ContactSticky from "@/components/contactstickyicon";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Anshika Tiwari's Portfolio",
  icons: {
    icon: "/ATLogo1.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased`}
      >
        <Navbar/>
        {children}
        
        <WhatsappSticky />
        <ContactSticky />
        <Footer/>

      </body>
    </html>
  );
}
