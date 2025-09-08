import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import WhatsappSticky from "@/components/whatsappicon";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Personal Portfolio",
  description: "Anshika Tiwari's Personal Portfolio",
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
        <Navbar />
        {children}
        <footer className="bg-gradient-to-r from-red-900 via-blue-900 to-red-900 text-white text-center py-4">
          <p>&copy; {new Date().getFullYear()} Anshika Tiwari. All rights reserved.</p>
        </footer>
        <WhatsappSticky />

      </body>
    </html>
  );
}
