import { defaultMetadata } from "@/lib/seo";
import { Toaster } from "react-hot-toast";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsappSticky from "@/components/whatsappicon";
import ContactSticky from "@/components/contactstickyicon";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export const metadata = defaultMetadata;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

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
        
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            duration: 4000,

            style: {
              background: "#111827",
              color: "#fff",
              border: "1px solid rgba(255,121,0,.25)",
              borderRadius: "16px",
            },

            success: {
              iconTheme: {
                primary: "#ff7900",
                secondary: "#fff",
              },
            },

            error: {
              iconTheme: {
                primary: "#ef4444",
                secondary: "#fff",
              },
            },
          }}
        />
        
        <WhatsappSticky />
        <ContactSticky />
        <Footer/>

      </body>
    </html>
  );
}
