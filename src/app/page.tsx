'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaNodeJs, FaReact, FaGithub, FaGit } from "react-icons/fa";
import { SiTailwindcss, SiMui, SiDaisyui, SiTypescript, SiExpress, SiNextdotjs, SiPostgresql } from "react-icons/si";
import { FaLaptopCode, FaServer, FaShoppingCart, FaBlog, FaGlobe } from "react-icons/fa";

export default function Home() {

  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
    { name: "Material UI", icon: <SiMui className="text-blue-400" /> },
    { name: "DaisyUI", icon: <SiDaisyui className="text-pink-400" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-600" /> },
    { name: "Git", icon: <FaGit className="text-red-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-200" /> },
  ];

  const services = [
    {
      name: "Website Designing",
      link: "#",
      desc: "Creating visually appealing and user-friendly website designs.",
      icon: <FaLaptopCode className="text-2xl text-primary" />,
    },
    {
      name: "Website Development",
      link: "#",
      desc: "Website development and deployment with modern UI and responsive design.",
      icon: <FaServer className="text-2xl text-primary" />,
    },
    {
      name: "Website Maintenance",
      link: "#",
      desc: " This includes checking for updating content, fixing bugs, and ensuring that the site is running smoothly. ",
      icon: <FaLaptopCode className="text-2xl text-primary" />,
    },
    {
      name: "E-commerce Website Development",
      link: "#",
      desc: "Building robust e-commerce platforms with secure payment integration.",
      icon: <FaShoppingCart className="text-2xl text-primary" />,
    },
    {
      name: "Portfolio & Blog Development",
      link: "#",
      desc: "Crafting personalized portfolio and blog sites to showcase your work and ideas.",
      icon: <FaBlog className="text-2xl text-primary" />,
    },
    {
      name: "Domain & Hosting Services",
      link: "#",
      desc: "Providing reliable domain registration and hosting solutions for your website.",
      icon: <FaGlobe className="text-2xl text-primary" />,
    },
  ];

  return (
    <main className="min-h-screen px-6 py-15 md:px-20  bg-black text-white space-y-25 overflow-hidden">
      {/* Hero Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between gap-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="space-y-6 md:w-1/2 mt-5 ">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-red-600 to-red-600 bg-clip-text text-transparent">
            Hi, I'm Anshika Tiwari
          </h1>
          <p className="text-xl md:text-2xl font-medium text-gray-400">
            Full Stack MERN Developer
          </p>
          <p className="text-gray-300">
            A passionate <span className='text-blue-400'>Full Stack MERN Developer</span> skilled in building modern, responsive, and scalable web applications using technologies like React.js, Node.js, Express.js, and PostgreSQL. Experienced in delivering full lifecycle projects from design to deployment with strong version control practices using Git and GitHub.
          </p>
          <div className="flex gap-4">
            <Link href="/services" className="btn btn-primary ">
              View Services
            </Link>
            <Link
              href="/AnshikaTiwari.pdf"
              download
              className="btn btn-outline btn-accent"
            >
              Download Resume
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="w-82 h-82 rounded-full overflow-hidden shadow-lg mx-auto">
            <img
              src="/pic3.jpg"
              alt="Anshika Tiwari"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>

      {/* About Preview Section */}
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.02 }}
      >
        <h2 className="text-3xl font-semibold text-white">About Me</h2>
        <p className="text-gray-300">
          <span className='text-blue-300'>Anshika Tiwari is widely recognized as one of the best providers of website design services in Delhi NCR.</span> Having worked with some of the top names in the industry, I consistently deliver high-quality web development solutions that my clients can rely on. It’s not just the numbers that define me — it’s the experience, learning, and innovation I bring to every project. <br />
          I specialize in building scalable full-stack applications using the MERN stack. With a strong foundation in both frontend and backend technologies, I bring digital ideas to life with clean code and user-focused design. I believe in writing clean, maintainable code and continuously learning new technologies to stay updated in this fast-evolving industry. My strengths include responsive design, backend logic, REST APIs, and team-based version control using Git and GitHub.
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2 italic">
          <li>having a responsive website is no longer optional — it’s essential.</li>
          <li>I create is fully mobile-friendly, so users can access it anytime, anywhere, on any device. </li>
          <li>Modern, responsive, and SEO-friendly websites</li>
          <li>Regular maintenance and quick updates</li>
          <li>Affordable packages for small & medium businesses</li>
        </ul>
        <Link href="/about" className="btn btn-sm btn-outline btn-primary">
          Learn More
        </Link>
      </motion.div>

      {/* Skills Preview Section */}
      <motion.div
        className="w-full space-y-4 mx-auto mt-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.02 }}
      >
        <h2 className="text-3xl font-semibold text-white mb-5">Skills</h2>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <span
              key={skill.name}
              className="badge badge-outline badge-accent text-white flex items-center gap-2 px-3 py-2"
            >
              {skill.icon}
              {skill.name}
            </span>
          ))}
        </div>
        <Link
          href="/skills"
          className="btn btn-sm btn-outline btn-primary mt-4"
        >
          View All Skills
        </Link>
      </motion.div>

      {/* Projects Preview Section */}
      <motion.div
        id="projects"
        className="space-y-4"
        initial={{ opacity: 0, y: 50 }}
        // whileHover={{ scale: 1.02 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold text-white mb-8">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: 'KP Automation Website',
              link: '#',
              desc: 'Industrial automation company site with modern layout.'
            },
            {
              name: 'Velocity Automation Website',
              link: '#',
              desc: 'Company profile site for automation services.'
            },
            {
              name: 'Data Management System ',
              link: '#',
              desc: 'Web app for managing data efficiently with full CRUD.'
            }
          ].map((project, i) => (
            <div
              key={i}
              className="bg-neutral rounded-xl p-5 shadow-md h-full border border-white/20 hover:shadow-primary/40 transition-shadow  hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-2 text-white">
                {project.name}
              </h3>
              <p className="text-gray-400 mb-4">{project.desc}</p>
              <Link href="/projects" className="text-primary hover:underline">
                View Details
              </Link>
            </div>
          ))}
        </div>
        <Link href="/projects" className="btn btn-sm btn-outline btn-primary mt-6">
          View All Projects
        </Link>
      </motion.div>

      {/* Services Preview Section */}
      <motion.div
        id="services"
        className="space-y-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold text-white mb-8">Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-neutral rounded-xl p-6 shadow-md h-full border border-white/20 hover:shadow-primary/40 transition-transform hover:scale-105 flex flex-col items-center text-center"
            >
              {/* Icon inside circle */}
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-900 to-blue-300 mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {service.name}
              </h3> 
              <p className="text-gray-400 mb-4">{service.desc}</p>
              <Link href='/services' className="text-primary hover:underline">
                View Details
              </Link>
            </div>
          ))}
        </div>
        <Link
          href="/services"
          className="btn btn-sm btn-outline btn-primary mt-6"
        >
          View All Services
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/2 space-y-4 mx-auto mt-12"
      >
        <div className="text-center space-y-4 mt-12">
          <h2 className="text-3xl font-semibold text-white">I'm available for full-time roles & freelance projects.</h2>
          <p className="text-gray-400">
            I thrive on crafting dynamic web applications, and <br />
            delivering seamless user experiences.
          </p>
        </div>
      </motion.div>
       
    </main>
  );
}
