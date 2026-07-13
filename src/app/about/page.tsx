import AboutHero from "@/components/about/AboutHero";
import FounderStory from "@/components/about/FounderStory";
import MissionVision from "@/components/about/MissionVission";
import WhyUmakan from "@/components/about/WhyUmakan";
import CTA from "@/components/home/CTA";
import ProjectsCTA from "@/components/projects/ProjectsCTA";
import IndustriesWeServe from "@/components/services/IndustriesWeServe";

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