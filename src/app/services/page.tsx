
import CTA from "@/components/home/CTA";
import ProjectsFAQ from "@/components/home/ProjectsFAQ";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServicesSection from "@/components/services/ServiceSection";
import ServicesHero from "@/components/services/ServicesHero";
import WhyPartner from "@/components/services/WhyPartner";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Website Development Services",
  description:
    "Explore UMAKAN Technologies' website development services, including custom websites, WordPress, eCommerce, dashboards, and business web applications.",
  keywords: [
    "website development services",
    "custom web development",
    "WordPress development services",
    "eCommerce website development",
    "dashboard development",
    "IOT Dashboard development",
    "business web application development",
  ],
  path: "https://www.umakantechnologies.in/services",
});

export default function Services() {
  return (
    <>
      <ServicesHero />
      <ServicesSection />
      <ServiceProcess />
      <WhyPartner />
      <ProjectsFAQ />
      <CTA />
    </>
  );
}
