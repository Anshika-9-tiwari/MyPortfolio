'use client';

import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp, FaMoon, FaSun } from 'react-icons/fa';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/movlnony', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        toast.error('Failed to send message.');
      }
    } catch (error) {
      toast.error('Error sending message.');
    }
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12 md:px-20 relative">
      <Toaster />
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-4 pb-2">Get In Touch with me</h1>
      <div className="w-30 h-1 bg-gradient-to-r from-blue-700 to-gray-300 mx-auto mb-8 rounded-full"></div>
      <p className="text-center text-gray-300 mb-12">
        I’m always excited to connect with new people and explore potential opportunities. Whether you have a question about my services, want to discuss a project idea, or just want to say hello, feel free to reach out using the contact form below. I look forward to hearing from you!
      </p>
      <div className="max-w-4xl mx-auto flex flex-row flex-wrap justify-between pt-8 space-x-16 gap-10">
        {/*Address Section */}
        <section className="mb-10 pl-2 w-80 sm:w-96 md:w-1/3  space-y-6">
          <h2 className="text-2xl font-semibold text-primary mb-2">Address</h2>
          <p className="text-gray-300 border-b-2 border-gray-700 pb-2 mb-4">
            190, New Delhi, Okhla Phase-1 Tekhand Village, Near ESI Hospital,<br/>
            Nearest Metro Govindpuri <br /> Delhi-110044 , India
          </p>
          <h2 className="text-2xl font-semibold text-primary mb-2">Email</h2>
          <p className="text-gray-300 border-b-2 border-gray-700 pb-2 mb-4">
            tiwarianshikatiwari6@gmail.com
          </p>
          <h2 className="text-2xl font-semibold text-primary mb-2">Phone no.</h2>
          <p className="text-gray-300 border-b-2 border-gray-700 pb-2 mb-4">
            +91 9540838797
          </p>
        </section>

        {/*Contact Form */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 , flex-1 justify-center items-center"
          
        >
          <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto flex flex-col gap-4 justify-center items-center  p-2 rounded-lg shadow-lg space-y-2"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="input input-bordered border-gray-700 bg-neutral text-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input input-bordered border-gray-700 bg-neutral text-white"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="input input-bordered border-gray-700 bg-neutral text-white"
            />
            <textarea
              name="message"
              rows={3}
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="textarea textarea-bordered border-gray-700 bg-neutral text-white"
            ></textarea>
            <button type="submit" className="btn btn-primary w-60 sm:w-80 rounded-md">
              Submit
            </button>
          </form>
        </motion.section>
      </div>

      {/*Social Links */}
      <div className="flex justify-center items-center gap-8 pt-8 mt-8">
        <a href="https://www.linkedin.com/in/codewithanshika/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-3xl hover:text-primary" />
        </a>
        <a href="https://github.com/Anshika-9-tiwari" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-3xl hover:text-primary" />
        </a>
        <a href="https://www.instagram.com/_anshika__tiw_ri_?igsh=YTdobThmZG9oYXpw" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-3xl hover:text-primary" />
        </a>
        <a href="https://wa.me/919540838797" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="text-3xl hover:text-primary" />
        </a>
      </div>
      {/*Download CV */}
      <div className="pt-12 text-center">
        <a href="/AnshikaTiwari.pdf" download className="btn btn-outline btn-accent rounded-md">
          Download CV
        </a>
      </div>
    </main>
  );
}
