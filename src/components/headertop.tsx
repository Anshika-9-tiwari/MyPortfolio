'use client';

import Link from 'next/link';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

export default function HeaderTop() {
  return (
    <div className="w-full bg-gradient-to-r from-red-800 via-blue-900 to-red-800 text-white text-sm md:text-lg px-8 py-2 md:py-5 flex flex-col md:flex-row justify-between items-center ">
        {/* Left: Email and Phone */}
        <div className="flex items-center gap-6 md:gap-10">
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-white" />
            <a href="mailto:tiwarianshikatiwari6@gmail.com" className="hover:underline">tiwarianshikatiwari6@gmail.com</a>
          </div>
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-white" />
            <a href="tel:+919540838797" className="hover:underline">+919540838797</a>
          </div>
        </div>

        {/* right Links */}
        <div className="hidden md:flex items-center gap-8 mt-2 md:mt-0 transition duration-300 animate-pulse">
          <Link href="https://www.linkedin.com/in/codewithanshika/" className="hover:text-primary">
            <FaLinkedin size={22} />
          </Link>
          <Link href="https://github.com/Anshika-9-tiwari" className="hover:text-primary">
            <FaGithub size={22} />
          </Link>
          <Link href="https://instagram.com/your-instagram" className="hover:text-primary">
            <FaInstagram size={22} />
          </Link>
        </div>
      </div>
  );
}
