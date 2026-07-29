import { siteConfig } from "@/lib/seo";

export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.url}/#business`,

        name: "UMAKAN Technologies",
        url: siteConfig.url,

        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.url}/umakan_logo.png`,
        },

        image: `${siteConfig.url}/og-image.png`,

        description: siteConfig.description,

        email: "info@umakantechnologies.in",

        telephone: "+91-9540838797",

        address: {
          "@type": "PostalAddress",
          streetAddress: "Mavi Mohalla, Tehkhand Village, Okhla Phase 1",
          addressLocality: "New Delhi",
          addressRegion: "Delhi",
          postalCode: "110020",
          addressCountry: "IN",
        },

        founder: {
          "@type": "Person",
          name: "Anshika Tiwari",
        },

        areaServed: {
          "@type": "Country",
          name: "India",
        },

        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-9540838797",
          contactType: "customer service",
          email: "info@umakantechnologies.in",
          availableLanguage: ["English", "Hindi"],
          areaServed: "IN",
        },

        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",

            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],

            opens: "09:00",
            closes: "19:00",
          },
        ],

        sameAs: [
          "https://www.linkedin.com/in/webdevanshika/",
          "https://github.com/Anshika-9-tiwari/",
        ],
      },

      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,

        url: siteConfig.url,

        name: "UMAKAN Technologies",

        description: siteConfig.description,

        publisher: {
          "@id": `${siteConfig.url}/#business`,
        },

        inLanguage: "en-IN",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}