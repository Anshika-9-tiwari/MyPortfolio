
import ContactForm from "@/components/contact/ContactForm";
import ContactHero from "@/components/contact/ContactHero";
import OfficeLocation from "@/components/contact/OfficeLocation";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact Us | UMAKAN Technologies",
  description:
    "Contact UMAKAN Technologies for custom website development, WordPress websites, eCommerce solutions, dashboards, and business web applications.",
  keywords: [
    "contact web development company",
    "website development services",
    "hire web developer",
    "WordPress development services",
    "hire WordPress developer",
    "dashboard development services",
    "custom web development",
    "UMAKAN Technologies contact",
  ],
  path: "https://www.umakantechnologies.in/contact",
});

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactForm />
      <OfficeLocation />
    </main>
  );
}
