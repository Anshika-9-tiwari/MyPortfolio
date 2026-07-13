
import CTA from "@/components/home/CTA";
import ProjectsFAQ from "@/components/home/ProjectsFAQ";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServicesSection from "@/components/services/ServiceSection";
import ServicesHero from "@/components/services/ServicesHero";
import WhyPartner from "@/components/services/WhyPartner";

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