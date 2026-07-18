import { siteConfig } from "@/lib/seo";

export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",

    // Business Name
    name: "UMAKAN Technologies",

    // Website
    url: siteConfig.url,

    // Logo
    logo: `${siteConfig.url}/umakan_logo.png`,

    // Business Image
    image: `${siteConfig.url}/og_image.png`,

    // Description
    description: siteConfig.description,

    // Email
    email: "mailto:contact@umakantechnologies.in",

    // Phone
    telephone: "+91-9540838797",

    // Address
    address: {
      "@type": "PostalAddress",
      streetAddress: "Mavi Mohalla, Tehkhand Village, Okhla Phase 1",
      addressLocality: "New Delhi",
      postalCode: "110020",
      addressRegion: "Delhi",
      addressCountry: "IN",
    },

    // Opening Hours
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

    // Founder
    founder: {
      "@type": "Person",
      name: "Anshika Tiwari",
    },

    // Country / Area Served
    areaServed: {
      "@type": "Country",
      name: "India",
    },

    // Contact Details
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9540838797",
      contactType: "customer service",
      email: "contact@umakantechnologies.in",
      availableLanguage: ["English", "Hindi"],
      areaServed: "IN",
    },
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