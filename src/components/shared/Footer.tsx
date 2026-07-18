"use client";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaGithub,
} from "react-icons/fa";
import SecondaryButton from "./SecondaryButton";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const services = [
  { name: "Custom Web Development", href: "/services#web-development" },
  { name: "WordPress Development", href: "/services#wordpress" },
  { name: "E-Commerce Solutions", href: "/services#ecommerce" },
  { name: "Support & Maintenance", href: "/services#support" },
];

const socialLinks = [
  {
    icon: FaInstagram,
    href: "https://instagram.com/",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/webdevanshika/",
  },
  {
    icon: FaWhatsapp,
    href: "https://wa.me/919540838797",
  },
  {
    icon: FaGithub,
    href: "https://github.com/Anshika-9-tiwari/",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#070B14] border-t border-white/20 px-8 lg:px-14 pt-14 pb-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Column 1 */}
        <div>
          <Link href="/">
            <Image
              src="/umakan_logo.png"
              alt="UMAKAN Logo"
              width={150}
              height={45}
              className="object-contain w-[140px] lg:w-[180px] h-auto"
            />
          </Link>

          <p className="text-gray-400 leading-relaxed mt-4">
            UMAKAN Technologies builds modern websites, scalable web
            applications, and digital solutions that help businesses grow.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-[#ff7900] transition duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-5">
            Services
          </h3>

          <ul className="space-y-3 text-gray-400">
            {services.map((service) => (
              <li key={service.name}>
                <Link
                  href={service.href}
                  className="hover:text-[#ff7900] transition duration-300"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-5">
            Contact
          </h3>

          <div className="space-y-4 text-gray-400">
            <a
              href="mailto:contact@umakantechnologies.in"
              className="flex items-center gap-3 hover:text-[#ff7900] transition"
            >
              <Mail size={18} className="text-[#ff7900]" />
              contact@umakantechnologies.in
            </a>

            <a
              href="tel:+919540838797"
              className="flex items-center gap-3 hover:text-[#ff7900] transition"
            >
              <Phone size={18} className="text-[#ff7900]" />
              +91 95408 38797
            </a>

            <p className="flex items-center gap-3">
              <MapPin size={28} className="text-[#ff7900]" />
               Mavi Mohalla, Tehkhand Village, Okhla Phase 1, New Delhi - 110020, India
            </p>
          </div>

          {/* Social */}
          <div className="flex flex-wrap gap-4 mt-8">
            {socialLinks.map((social, index) => (
              <SecondaryButton
                key={index}
                href={social.href}
                external
              >
                <social.icon size={18} />
              </SecondaryButton>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-500">
        © 2025 UMAKAN Technologies. All Rights Reserved.
      </div>
    </footer>
  );
}