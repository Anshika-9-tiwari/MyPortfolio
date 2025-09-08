'use client';

import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Website Designing',
    image: '/kpautomation.png',
    description:
      'A Web Design service produces the look, structure along with features of an online site. The position will involve understanding both video design and Freelance Website Designer. I am providing the best Freelance service on the website. MERN Website Development,  and web designing.',
    link: 'https://www.kpautomation.co.in/',
  },
  {
    title: 'Website Maintenance',
    image: '/webmaintenance.png',
    description:
      'Website maintenance is the process of regularly checking your website for issues and mistakes and keeping it updated and relevant. This includes checking for broken links, updating content, fixing bugs, and ensuring that the site is running smoothly. Regular maintenance helps improve website performance, security, and user experience.',
    link: 'https://diacwebsite-sooty.vercel.app/',
  },
  {
    title: 'Website Development ',
    image: '/velocityautomation.png',
    description:
      'Today All website owners want to start to realize that unless visitors are provided with an engaging on-site experience, Generally they are likely to leave in search of a better option. We use frameworks like React.js, Next.js, and Node.js to create robust websites that grow with your business.',
    link: 'https://www.velocityautomation.co.in/',
  },
  {
    title: 'E-commerce Website Development',
    image: '/dms.png',
    description:
      'E-commerceis a process of buying and selling products and services on the Internet through secure credit card processing. I am Delhi based providing customized and flexible e-commerce website Developer. I have experience in building e-commerce websites using MERN stack.',
    link: 'https://github.com/Anshika-9-tiwari/DefectsManagementSystem',
  },
  {
    title: 'Portfolio & Blog Development',
    image: '/blogs.png',
    description:
      'I am providing the best Portfolio & Blog Development service on the website. MERN Website Development,  and web designing. ',
    link: 'https://www.diac.co.in/blogs',
  },
  {
    title: 'Domain & Hosting Services',
    image: '/domain.png',
    description:
      'Domain hosting is crucial as it provides the online location & infrastructure necessary for your website to be accessible to users worldwide. It’s the digital real estate where your website’s files and data reside, making it accessible 24/7.',
    link: '#',
  },
];

export default function Service() {
  return (
    <main className="min-h-screen px-6 py-12 md:px-20 bg-black text-white">
      <motion.h1
        className="space-y-6 mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-semibold text-white hover:text-red-600 mb-5"> My Services</h2>
        <div className=' flex justify-items-center w-25 h-1 bg-gradient-to-r from-red-700 to-blue-800 ml-1 rounded-2xl'></div>
        <p className='text-gray-200'>
          I provide end-to-end web solutions including Web Designing, Web Development, and Web Maintenance. I create modern, responsive designs, develops fast and secure websites using the latest technologies, and ensures long-term support with regular updates, security, and performance optimization. Whether you need a new website or ongoing maintenance, we deliver reliable and professional solutions to help your business grow online.
        </p>
      </motion.h1>

      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((services, index) => (
          <motion.div
            key={index}
            className="bg-neutral rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={services.image}
              alt={services.title}
              className="w-full h-60 object-cover p-4"
            />
            <div className="p-5 space-y-3">
              <h2 className="text-xl font-semibold text-white">{services.title}</h2>
              <p className="text-gray-300 text-sm">{services.description}</p>
              <a
                href={services.link}
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
        className="w-full md:w-1/2 space-y-4 mx-auto text-center mt-16"
      >
        <div className="text-center space-y-4">
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
