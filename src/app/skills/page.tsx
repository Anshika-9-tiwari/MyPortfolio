'use client';

import React from 'react';
import { motion } from 'framer-motion';

const skills = {
  frontend: [
    { title: 'HTML', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', level: 95, description: 'Markup language for creating structured web pages.' },
    { title: 'CSS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', level: 90, description: 'Stylesheet language used for designing responsive layouts.' },
    { title: 'Tailwind CSS', image: 'https://avatars.githubusercontent.com/u/67109815?s=200&v=4', level: 85, description: 'Utility-first CSS framework for rapid UI development.' },
    { title: 'DaisyUI', image: 'https://img.daisyui.com/images/daisyui/horizontal-light.svg', level: 90, description: 'Tailwind CSS component library for building beautiful UIs.' },
    { title: 'MaterialUI', image: 'https://mui.com/static/logo.png', level: 90, description: 'React UI framework for building beautiful interfaces.' },
    { title: 'JavaScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', level: 85, description: 'Programming language for adding interactivity to websites.' },
    { title: 'React.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', level: 85, description: 'JavaScript library for building dynamic user interfaces.' },
    { title: 'Next.js', image: 'https://cdn.worldvectorlogo.com/logos/nextjs-2.svg', level: 80, description: 'React framework with server-side rendering and routing capabilities.' },
  ],
  backend: [
    { title: 'Node.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', level: 70, description: 'Backend runtime environment for scalable server-side applications.' },
    { title: 'Express.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', level: 70, description: 'Minimalist web framework for Node.js.' },
    { title: 'PostgreSQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', level: 70, description: 'Powerful open-source relational database system.' },
    { title: 'MongoDB', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', level: 70, description: 'MongoDB is a NoSQL document database that stores JSON-like documents.' },
  ],
  tools: [
    { title: 'Git & GitHub', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', level: 90, description: 'Version control system and cloud hosting platform for repositories.' },
    { title: 'VSCode', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', level: 95, description: 'VS Code (Visual Studio Code) is a lightweight, open-source code editor with powerful features like debugging, Git integration, and extensions.' },
  ],
};


const SkillBar = ({ level }: { level: number }) => (
  <div className="w-full bg-gray-700 rounded-full h-3 mt-2">
    <div
      className="bg-gradient-to-r from-pink-900 to-gray-200 h-3 rounded-full"
      style={{ width: `${level}%` }}
    ></div>
  </div>
);

export default function Skills() {
  return (
    <main className="min-h-screen px-6 py-12  md:px-20 bg-black text-white scroll-smooth">
      <motion.h1
        className="text-4xl font-bold text-gray-100 mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Skills
      </motion.h1>

      {/* FRONTEND */}
      <section id="frontend" className="mb-16 scroll-mt-24">
        <h2 className="text-2xl font-semibold text-accent mb-8">Frontend</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.frontend.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-neutral rounded-xl p-6 shadow-md hover:shadow-primary/40 shadow-white/20 transform transition-transform hover:scale-105"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* icon*/}
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-800  to-white mb-4">
                <img src={skill.image} alt={skill.title} className="w-12 h-8" />
              </div>

              <h3 className="text-lg font-semibold">{skill.title}</h3>
              <p className="text-gray-300 text-sm">{skill.description}</p>
              <SkillBar level={skill.level} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* BACKEND */}
      <section id="backend" className="mb-16 scroll-mt-24">
        <h2 className="text-2xl font-semibold text-accent mb-8">Backend</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.backend.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-neutral rounded-xl p-6 shadow-md hover:shadow-primary/40 shadow-white/30 transform transition-transform hover:scale-105"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-800  to-white mb-4">
                <img src={skill.image} alt={skill.title} className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold">{skill.title}</h3>
              <p className="text-gray-300 text-sm">{skill.description}</p>
              <SkillBar level={skill.level} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* TOOLS */}
      <section id="tools" className="scroll-mt-24">
        <h2 className="text-2xl font-semibold text-accent mb-8">Tools</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.tools.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-neutral rounded-xl p-6 shadow-md hover:shadow-primary/40 shadow-white/25 transform transition-transform hover:scale-105"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-800  to-white mb-4">
                <img src={skill.image} alt={skill.title} className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold">{skill.title}</h3>
              <p className="text-gray-300 text-sm">{skill.description}</p>
              <SkillBar level={skill.level} />
            </motion.div>
          ))}
        </div>
      </section>
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
