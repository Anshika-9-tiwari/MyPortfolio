import type { Metadata } from "next";

export const siteConfig = {
  name: "UMAKAN Technologies",

  title: "UMAKAN Technologies | Web Development Company",

  description:
    "UMAKAN Technologies builds modern custom websites, web applications, WordPress websites, eCommerce platforms, and scalable business solutions.",

  url: "https://anshika-tiwari.vercel.app",

  ogImage: "/og_image.png",

  author: "Anshika Tiwari",

  keywords: [
    "UMAKAN Technologies",
    "Web Development Company",
    "Website Development",
    "Next.js Development",
    "React Developer",
    "MERN Stack Developer",
    "Node.js",
    "Express.js",
    "WordPress Development",
    "Custom Website Development",
    "Business Website",
    "Portfolio Website",
    "Ecommerce Website",
    "SEO Friendly Website",
    "Digital Agency India",
    "Dashboard Development",
  ],
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.title,
    template: "%s | UMAKAN Technologies",
  },

  description: siteConfig.description,

  keywords: siteConfig.keywords,

  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.url,
    },
  ],

  creator: siteConfig.author,

  publisher: siteConfig.name,

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: siteConfig.title,

    description: siteConfig.description,

    url: siteConfig.url,

    siteName: siteConfig.name,

    locale: "en_US",

    type: "website",

    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: siteConfig.title,

    description: siteConfig.description,

    images: [siteConfig.ogImage],
  },

  icons: {
    icon: "/umakan_logo.png",

    apple: "/apple-touch-icon.png",
  },
};