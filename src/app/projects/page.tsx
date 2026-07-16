'use client';
import React from 'react';
import FeaturedProjectCard from '@/components/projects/FeaturedProjectCard';
import FeaturedProjects from '@/components/projects/FeaturedProjects';
import ProjectsHero from '@/components/projects/ProjectsHero';
import { featuredProjects } from '@/data/featuredProjects';
import MoreProjects from '@/components/projects/MoreProjects';
import DevelopmentProcess from '@/components/projects/DevelopmentProcess';
import ProjectsCTA from '@/components/projects/ProjectsCTA';
import Testimonials from '@/components/home/Testimonials';


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
