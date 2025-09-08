'use client';

import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'KP Automation Website',
    image: '/kpautomation.png',
    description:
      'A modern, responsive company website for KP Automation showcasing their industrial automation services.',
    link: 'https://www.kpautomation.co.in/',
  },
  {
    title: 'Velocity Automation Website',
    image: '/velocityautomation.png',
    description:
      'Website developed for Velocity Automation with an engaging UI, services showcase, and contact form integration.',
    link: 'https://www.velocityautomation.co.in/',
  },
  {
    title: 'Defect Management System ',
    image: '/dms.png',
    description:
      'A full-stack web app built to manage and organize company data efficiently with CRUD functionality.',
    link: 'https://github.com/Anshika-9-tiwari/DefectsManagementSystem',
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen px-6 py-15 md:px-20 bg-black text-white">
      <motion.h1
        className="text-4xl font-bold text-gray-100 mb-15"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h1>

      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-neutral rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/20 "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-5 space-y-3">
              <h2 className="text-xl font-semibold text-white">{project.title}</h2>
              <p className="text-gray-300 text-sm">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-primary hover:underline text-sm"
              >
                View Live
              </a>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/2 space-y-4 mx-auto mt-18"
      >
        <div className="text-center space-y-4 mt-12">
          <h2 className="text-3xl font-semibold text-white">I'm available for full-time roles & freelance projects.</h2>
          <p className="text-gray-400">
            I thrive on crafting dynamic web applications, and <br />
            <strong className='text-orange-600'>delivering seamless user experiences.</strong>
          </p>
        </div>
      </motion.div>
    </main>
  );
}
