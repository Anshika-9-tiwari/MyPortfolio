import React from "react";
import FeaturedProjectCard from "@/components/projects/FeaturedProjectCard";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import ProjectsHero from "@/components/projects/ProjectsHero";
import { featuredProjects } from "@/data/featuredProjects";
import MoreProjects from "@/components/projects/MoreProjects";
import DevelopmentProcess from "@/components/projects/DevelopmentProcess";
import ProjectsCTA from "@/components/projects/ProjectsCTA";
import Testimonials from "@/components/home/HomeTestimonials";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Web Development Projects | UMAKAN Technologies",
  description:
    "Explore UMAKAN Technologies' portfolio of custom websites, WordPress projects, business dashboards, and web applications built for growing businesses.",
  keywords: [
    "web development services",
    "website design projects",
    "custom web applications",
    "WordPress website projects",
    "business dashboard development",
    "IOT Dashboard development",
    "business web application development",
  ],
  path: "https://www.umakantechnologies.in/projects",
});

export default function Projects() {
  return (
    <main>
      <ProjectsHero />

      <FeaturedProjects />

      {featuredProjects.map((project, index) => (
        <FeaturedProjectCard
          key={project.id}
          project={project}
          reverse={index % 2 !== 0}
        />
      ))}

      <MoreProjects />
      <DevelopmentProcess />
      <Testimonials />
      <ProjectsCTA />
    </main>
  );
}