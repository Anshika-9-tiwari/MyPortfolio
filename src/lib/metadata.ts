import type { Metadata } from "next";
import { siteConfig } from "./seo";

type MetadataProps = {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  image?: string;
};

export function createMetadata({
  title,
  description,
  keywords,
  path = "",
  image = siteConfig.ogImage,
}: MetadataProps): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    keywords,

    alternates: {
      canonical: path || "/",
    },

    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",

      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}