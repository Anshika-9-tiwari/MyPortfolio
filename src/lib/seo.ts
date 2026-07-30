import type { Metadata } from "next";

export const siteConfig = {
  name: "UMAKAN Technologies",

  title: "UMAKAN Technologies | Web Development Company",

  description:
    "UMAKAN Technologies builds modern custom websites, web applications, WordPress websites, eCommerce platforms, and scalable business solutions.",

  url: "https://www.umakantechnologies.in",

  ogImage: "/og-img.png",

  author: "Anshika Tiwari",

 keywords: [
  // Brand
  "UMAKAN Technologies",
  "UMAKAN",
  "UMAKAN Technologies India",

  // Core Services
  "Web Development Company",
  "Custom Website Development",
  "Website Development Services",
  "Web Application Development",
  "Business Website Development",
  "Corporate Website Development",
  "Professional Website Development",
  "Responsive Website Design",
  "Website Redesign Services",

  // Technologies
  "Next.js Development",
  "React.js Development",
  "Node.js Development",
  "Express.js Development",
  "Full Stack Development",
  "MERN Stack Development",
  "JavaScript Development",
  "TypeScript Development",
  "PostgreSQL Development",
  "REST API Development",

  // Business Solutions
  "Dashboard Development",
  "Admin Panel Development",
  "CRM Development",
  "ERP Development",
  "Lead Management System",
  "Attendance Management System",
  "Inventory Management System",
  "Business Automation Solutions",

  // Website Types
  "Portfolio Website Development",
  "Ecommerce Website Development",
  "Landing Page Development",
  "Company Website Development",
  "Startup Website Development",
  "Educational Website Development",

  // CMS
  "WordPress Development",
  "Custom WordPress Website",
  "WordPress Business Website",

  // Performance & SEO
  "SEO Friendly Website",
  "Fast Loading Website",
  "Mobile Responsive Website",
  "High Performance Website",
  "Secure Website Development",

  // Industries
  "Website for Startups",
  "Website for Small Business",
  "Enterprise Web Solutions",
  "Digital Transformation Services",

  // Location
  "Web Development Company India",
  "Website Development Company Delhi",
  "Web Development Company Delhi NCR",
  "Website Developer India",
  "Custom Software Company India",

  // Support
  "Website Maintenance",
  "Website Support",
  "Website Upgrade Services"
]
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