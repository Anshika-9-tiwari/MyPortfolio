
import AboutHero from "@/components/about/AboutHero";
import FounderStory from "@/components/about/FounderStory";
import MissionVision from "@/components/about/MissionVission";
import WhyUmakan from "@/components/about/WhyUmakan";
import ProjectsCTA from "@/components/projects/ProjectsCTA";
import IndustriesWeServe from "@/components/services/IndustriesWeServe";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About Umakan | UMAKAN Technologies",
  description:
    "Discover UMAKAN Technologies, a web development company creating custom websites, WordPress solutions, eCommerce platforms, and business web applications.",
  keywords: [
    "about UMAKAN Technologies",
    "web development company",
    "custom web development services",
    "WordPress development company",
    "business web solutions",
  ],
  path: "https://www.umakantechnologies.in/about",
});

export default function About() {
  return (
    <>
      <AboutHero />
      <FounderStory />
      <MissionVision />
      <IndustriesWeServe />
      <WhyUmakan />
      <ProjectsCTA />
    </>
  );
}
