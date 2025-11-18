'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <main className="min-h-screen px-6 py-15  md:px-20 bg-black text-white space-y-16">
      {/* About Section */}
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-semibold text-gray-50 mb-5">About Me</h1>
        <div className=' w-20 h-1 bg-gradient-to-r from-red-600 via-gray-400 to-blue-700  hover:bg-red-500 ml-2 rounded-xl'></div>
        <p className="text-gray-300 text-lg">
          I am <strong>Anshika Tiwari</strong>, a passionate Full Stack MERN Developer based in New Delhi. I specialize in building high-quality, scalable web applications using the MERN stack — MongoDB, Express.js, React.js, and Node.js. I’m well-versed in full project lifecycles, from initial concept to deployment. I thrive in collaborative environments and love transforming business needs into digital solutions.
        </p>
        <p className="text-orange-400">
          I believe in writing clean, maintainable code and continuously learning new technologies to stay updated in this fast-evolving industry. My strengths include responsive design, backend logic, REST APIs, and team-based version control using Git and GitHub.
        </p>
      </motion.div>

      {/* Experience Section */}
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold text-white">Experience</h2>
        <div className=' w-20 h-1 bg-gradient-to-r from-red-600 via-gray-400 to-blue-700  hover:bg-red-500 ml-1 rounded-xl'></div>
        <p>
          I’m Anshika Tiwari, a dedicated  full time and freelance web designer and developer based in Delhi-NCR, with over 3 years of professional experience. I specialize in creating custom websites using MERN . My expertise includes MongoDB , Express.js , React.js, Node.js, Next.js, PostgreSQL, Typescript, and MaterialUI . I consistently deliver high-quality web development solutions that my clients can rely on. It’s not just the numbers that define me — it’s the experience, learning, and innovation I bring to every project.
        </p>
        <p className=' italic text-orange-400 hover:text-blue-300'>
          If you’re looking for a reliable full-time or freelance static website(business website, portfolio, blog), and  Dynamic website(Ecommerce site) Developer , feel free to call me at :-<br /> +91-95408 38797
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>More Than Three year</li>
          <li>Full Stack MERN Developer</li>
          <li>Multiple projects done</li>
          <li>Client Satisfaction</li>
          <li>Reliable and Professional Service</li>
        </ul>
      </motion.div>

      {/*why choose us Section */}
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold text-white hover:text-red-600 mb-5">Why Choose Anshika?</h2>
        <div className=' flex w-20 h-1 bg-gradient-to-r from-red-600 via-gray-400 to-blue-700 ml-2 rounded-2xl'></div>
        <p className="text-gray-200">
          Choosing me means opting for a developer who is not only skilled in the latest technologies but also deeply committed to delivering exceptional results. I bring a unique blend of technical expertise, creativity, and a client-focused approach to every project. Here’s why I stand out: When it comes to web design, I’ve built a solid reputation in delivering high-quality, results-driven websites. What sets me apart is not just my 3+ years of experience or the wide range of projects I’ve handled — it’s my passion and personal commitment to helping
        </p>
        <p className="text-orange-500">
          I take the time to understand your business goals, target audience, and unique challenges. This allows me to create tailored solutions that truly resonate with your audience and drive meaningful results. Whether you need a sleek portfolio site, a robust e-commerce platform, or a dynamic web application, I have the skills and experience to bring your vision to life.
        </p>
        <p className="text-gray-200 italic">
          Over the years, I’ve had the opportunity to work with some of the most well-known industry, which has helped me develop a deep understanding of what works on the web. I focus on creating websites that are not only visually appealing but also highly functional,
        </p>
        <p className="italic text-orange-500">
          As a full-time or freelance website designer and developer , I offer personalized service with full attention to each project — from concept to deployment. If you’re looking for someone who understands both design and development, and truly cares about your business goals, I’m here to help.
        </p>
        <ul className="list-disc list-inside text-blue-200 space-y-2 italic">
          <li>having a responsive website is no longer optional — it’s essential.</li>
          <li>perfectly across all screen sizes — whether it’s a smartphone, tablet, or desktop</li>
          <li>I create is fully mobile-friendly, so users can access it anytime, anywhere, on any device. </li>
          <li>Modern, responsive, and SEO-friendly websites</li>
          <li>Regular maintenance and quick updates</li>
          <li>Affordable packages for small & medium businesses</li>
          <li>This way, you can focus on growing your business while we take care of your website.</li>
        </ul>
      </motion.div>

      {/*Specialization Section */}
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold text-white">Specialize</h2>
        <div className=' w-20 h-1 bg-gradient-to-r from-red-600 via-gray-400 to-blue-700  hover:bg-red-500 ml-1 rounded-xl'></div>
        <p>
         I specialize in creating seamless user experiences with clean, maintainable code. Whether you need a portfolio site, e-commerce platform, or custom web app, I deliver reliable solutions tailored to your needs. My expertise includes front-end design, backend development, RESTful APIs, and database management.  I help businesses build modern, responsive, and scalable web applications using React.js, Next.js, Node.js, Express.js, and MongoDB/PostgreSQL.
        </p>
        <ul className="list-disc list-inside text-blue-100 space-y-2">
          <li>Website development (Next.js, React, DaisyUI, Material UI)</li>
          <li>Dashboard & Admin Panels</li>
          <li>Automation systems (Industry-based applications)</li>
          <li>API development & integrations</li>
        </ul>
      </motion.div>

      {/* Location Section */}
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold text-white mb-5">Location</h2>
        <div className=' w-18 h-1 bg-gradient-to-r from-red-600 via-gray-400 to-blue-700 hover:bg-red-500 ml-2'></div>
        <p className="text-gray-300"> 190, New Delhi, Okhla Phase-1 Tekhand Village, Near ESI Hospital. <br /> Nearest Metro station- Govind Puri Delhi-110044 , India</p>
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
            <strong className='text-orange-600'>delivering seamless user experiences.</strong>
          </p>
        </div>
      </motion.div>
    </main>
  );
}
