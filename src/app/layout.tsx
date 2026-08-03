import { defaultMetadata } from "@/lib/seo";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "react-hot-toast";
import { Geist, PT_Serif, Poppins } from "next/font/google";
import "./globals.css";
import WhatsappSticky from "@/components/whatsappicon";
import ContactSticky from "@/components/contactstickyicon";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import StructuredData from "@/components/seo/StructuredData";

export const metadata = defaultMetadata;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-heading",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${ptSerif.variable} ${poppins.variable} antialiased`}
      >

        <StructuredData />
        
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

        <Analytics />
      </body>
    </html>
  );
}
