import AboutHero from "@/components/about/AboutHero";
import FounderStory from "@/components/about/FounderStory";
import MissionVision from "@/components/about/MissionVission";
import WhyUmakan from "@/components/about/WhyUmakan";
import ProjectsCTA from "@/components/projects/ProjectsCTA";
import IndustriesWeServe from "@/components/services/IndustriesWeServe";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About Us",
  description:
    "Learn about UMAKAN Technologies, our mission, expertise, and how we help businesses grow through innovative web development solutions.",
  path: "/about",
});

export default function About() {
  return (
    <>
      <AboutHero />
      <FounderStory />
      <MissionVision />
      <IndustriesWeServe/>
      <WhyUmakan/>
      <ProjectsCTA/>
    </>
  );
}