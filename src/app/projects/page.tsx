import React from 'react';
import FeaturedProjectCard from '@/components/projects/FeaturedProjectCard';
import FeaturedProjects from '@/components/projects/FeaturedProjects';
import ProjectsHero from '@/components/projects/ProjectsHero';
import { featuredProjects } from '@/data/featuredProjects';
import MoreProjects from '@/components/projects/MoreProjects';
import DevelopmentProcess from '@/components/projects/DevelopmentProcess';
import ProjectsCTA from '@/components/projects/ProjectsCTA';
import Testimonials from '@/components/home/HomeTestimonials';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: "Our Portfolio",
  description:
    "Explore websites and web applications developed by UMAKAN Technologies across multiple industries and technologies.",
  path: "/projects",
});

export default function Projects() {
  return (
    <main >
      <ProjectsHero/>
      
      <FeaturedProjects/>

      {featuredProjects.map((project, index) => (
        <FeaturedProjectCard
          key={project.id}
          project={project}
          reverse={index % 2 !== 0}
        />
      ))}

      <MoreProjects/>
      <DevelopmentProcess/>
      <Testimonials/>
      <ProjectsCTA/>
    </main>
  );
}
