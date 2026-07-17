import type { Metadata } from "next";
import { siteConfig } from "./seo";

type MetadataProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

export function createMetadata({
  title,
  description,
  path = "",
  image = siteConfig.ogImage,
}: MetadataProps): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,

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