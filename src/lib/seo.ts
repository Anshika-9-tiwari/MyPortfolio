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

  applicationName: siteConfig.name,

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
        alt: "UMAKAN Technologies - Web Development Company",
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
    icon: [
      {
        url: "/umakan-production-icons/favicon.ico",
      },
      {
        url: "/umakan-production-icons/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/umakan-production-icons/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],

    shortcut: "/umakan-production-icons/favicon.ico",

    apple: [
      {
        url: "/umakan-production-icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],

    other: [
      {
        rel: "icon",
        url: "/umakan-production-icons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/umakan-production-icons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },

  manifest: "/manifest.webmanifest",
};