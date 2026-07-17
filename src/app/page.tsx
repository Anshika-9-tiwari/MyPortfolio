import CTA from "@/components/home/CTA";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Hero from "@/components/home/Hero";
import ProjectsFAQ from "@/components/home/ProjectsFAQ";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/HomeTestimonials";
import TrustedStats from "@/components/home/TrustedState";
import WhyChooseUs from "@/components/home/WhyChooseMe";
import IndustriesWeServe from "@/components/services/IndustriesWeServe";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Web Development Company",
  description:
    "UMAKAN Technologies builds modern websites, custom web applications, WordPress websites, eCommerce platforms, and scalable business solutions.",
});

export default function Home() {
  return (
    <>
      <main className="overflow-hidden">
        <Hero />
        <TrustedStats />
        <Services />
        <FeaturedProjects />
        <IndustriesWeServe/>
        <WhyChooseUs />
        <Testimonials/>
        <ProjectsFAQ/>
        <CTA/>
      </main>
    </>
  );
}