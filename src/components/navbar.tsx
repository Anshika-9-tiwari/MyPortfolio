'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import HeaderTop from './headertop';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Skills',
    dropdown: true,
    icon: true,
    children: [
      { name: 'Frontend', href: '/skills#frontend' },
      { name: 'Backend', href: '/skills#backend' },
      { name: 'Tools', href: '/skills#tools' },
    ],
  },
  { name: 'Projects', href: '/projects' },
  {
    name: 'Services',
    dropdown: true,
    icon: true,
    children: [
      { name: 'Website Design', href: '/services#websitedesign' },
      { name: 'Website Development & Deployment', href: '/services#webdevelopment' },
      { name: 'Ecommerce Website', href: '/services#ecommercewebsite' },
      { name: 'Blogs & Portfolio Website', href: '/services#blogportfolio' },
    ],
  },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const top = section.offsetTop - 100;
        const bottom = top + section.offsetHeight;
        if (window.scrollY >= top && window.scrollY <= bottom) {
          setActiveSection(section.getAttribute('id') || '');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Top Header */}
      <HeaderTop />

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-black text-white shadow-2xl border-b border-white/35 backdrop-blur-md rounded-b-lg"
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center ">
          <Link href="/">
            <img src="/ATLogo1.png" alt="logo" className="h-10" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {!link.dropdown ? (
                  <a
                    href={link.href}
                    className={`hover:text-gray-300 transition-colors duration-300 text-blue-400 uppercase ${
                      link.href && activeSection === link.href.slice(1) ? 'text-white' : ''
                    }`}
                  >
                    {link.name}
                  </a>
                ) : (
                  <div className="dropdown dropdown-hover">
                    <label tabIndex={0} className="cursor-pointer inline-flex items-center gap-2">
                      <span
                        className={`hover:text-primary uppercase ${
                          activeSection.includes(link.children?.[0]?.href.slice(1))
                            ? 'text-primary'
                            : ''
                        }`}
                      >
                        {link.name}
                      </span>
                      <svg
                        className="w-5 h-4 mt-[2px] fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M5.516 7.548a.75.75 0 0 1 1.06 0L10 10.97l3.424-3.422a.75.75 0 1 1 1.06 1.061l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06z" />
                      </svg>
                    </label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-neutral rounded-box w-52 ">
                      {link.children?.map((sublink) => (
                        <li key={sublink.name} className="hover:text-orange-400">
                          <a href={sublink.href}>{sublink.name}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 pt-2 space-y-1 bg-neutral">
            {navLinks.map((link) => (
              <div key={link.name}>
                {!link.dropdown ? (
                  <a
                    href={link.href}
                    className="block py-1 text-lg hover:text-primary"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ) : (
                  <details>
                    <summary className="cursor-pointer py-1 text-blue-400">{link.name}</summary>
                    <div className="pl-4">
                      {link.children?.map((sublink) => (
                        <a
                          key={sublink.name}
                          href={sublink.href}
                          className="block py-1 text-gray-300 hover:text-primary"
                          onClick={() => setMenuOpen(false)}
                        >
                          {sublink.name}
                        </a>
                      ))}
                    </div>
                  </details>
                )}
              </div>
            ))}
          </div>
        )}
      </motion.nav>
    </header>
  );
}
