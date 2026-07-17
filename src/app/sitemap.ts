import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  return [
    {
      url: siteConfig.url,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: `${siteConfig.url}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${siteConfig.url}/services`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${siteConfig.url}/projects`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${siteConfig.url}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${siteConfig.url}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.4,
    },

    {
      url: `${siteConfig.url}/terms-and-conditions`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];
}