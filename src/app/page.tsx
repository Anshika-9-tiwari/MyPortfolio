import CTA from "@/components/home/CTA";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Hero from "@/components/home/Hero";
import ProjectsFAQ from "@/components/home/ProjectsFAQ";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import TrustedStats from "@/components/home/TrustedState";
import WhyChooseUs from "@/components/home/WhyChooseMe";
import IndustriesWeServe from "@/components/services/IndustriesWeServe";

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