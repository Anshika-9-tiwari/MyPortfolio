
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
    "Explore our custom web development, WordPress, eCommerce, MERN Stack, and modern business website solutions.",
  path: "/services",
});

export default function Services() {
  return (
    <>
      <ServicesHero/>
      <ServicesSection/>
      <ServiceProcess/>
      <WhyPartner/>
      <ProjectsFAQ/>
      <CTA/>
    </>
  );
}