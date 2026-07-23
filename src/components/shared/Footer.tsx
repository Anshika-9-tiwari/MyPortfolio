import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaWhatsapp, FaGithub } from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact Us", href: "/contact" },
];

const services = [
  { name: "Custom Web Development", href: "/services#web-development" },
  { name: "WordPress Development", href: "/services#wordpress" },
  { name: "E-Commerce Solutions", href: "/services#ecommerce" },
  { name: "Support & Maintenance", href: "/services#support" },
];

const socialLinks = [
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "https://instagram.com/",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/webdevanshika/",
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    href: "https://wa.me/919540838797",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/Anshika-9-tiwari/",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#070B14] text-white">

      {/* Subtle Background Glow */}
      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-[#ff7900]/5 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 top-0 h-80 w-80 rounded-full bg-[#ff7900]/5 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-6 pt-14 sm:px-8 md:pt-16 lg:px-10 lg:pt-20 xl:px-12">

        {/* Main Footer */}
        <div className="grid gap-12 pb-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.7fr_1fr_1.35fr] lg:gap-10 xl:gap-14">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/umakan_logo.png"
                alt="UMAKAN Technologies"
                width={190}
                height={60}
                className="h-auto w-[165px] object-contain sm:w-[185px]"
              />
            </Link>

            <p className="mt-1 max-w-[350px] text-[16px] leading-7 text-gray-400">
              We build modern websites, scalable web applications, and digital
              solutions that help businesses grow in the digital world.
            </p>

            {/* Social */}
            <div className="mt-7">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">
                Connect With Us
              </p>

              <div className="flex items-center gap-2.5">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      title={social.name}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-[#ff7900]/50 hover:bg-[#ff7900] hover:text-white"
                    >
                      <Icon size={17} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <FooterHeading title="Company" />

            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="group inline-flex items-center gap-2 text-[16px] text-gray-400 transition-colors duration-300 hover:text-white">
                    <ArrowRight size={15} className="text-[#ff7900] opacity-60 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <FooterHeading title="Our Services" />

            <ul className="space-y-3.5">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="group inline-flex items-start gap-2 text-[16px] leading-6 text-gray-400 transition-colors duration-300 hover:text-white">
                    <ArrowRight size={15} className="mt-1.5 shrink-0 text-[#ff7900] opacity-60 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <FooterHeading title="Get In Touch" />

            <div className="space-y-5">

              {/* Email */}
              <a href="mailto:contact@umakantechnologies.in" className="group flex items-start gap-3">
                <Mail size={18} className="mt-1 shrink-0 text-[#ff7900]" />

                <div>
                  <p className="break-all text-[16px] text-gray-400 transition-colors group-hover:text-white">
                    contact@umakantechnologies.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a href="tel:+919540838797" className="group flex items-start gap-3">
                <Phone size={18} className="mt-1 shrink-0 text-[#ff7900]" />

                <div>
                  <p className=" text-[16px] text-gray-400 transition-colors group-hover:text-white">
                    +91 95408 38797
                  </p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 shrink-0 text-[#ff7900]" />

                <div>
                  <p className="max-w-[280px] text-[16px] leading-6 text-gray-400">
                    Mavi Mohalla, Tehkhand Village,
                    <br />
                    Okhla Phase 1, New Delhi - 110020,
                    <br />
                    India
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 py-6 md:flex-row">

          <p className="text-center text-xs text-gray-500 sm:text-sm md:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="font-medium text-gray-400">
              UMAKAN Technologies
            </span>
            . All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:gap-5 sm:text-sm">
            <Link href="/privacy-policy" className="text-gray-500 transition-colors duration-300 hover:text-[#ff7900]">
              Privacy Policy
            </Link>

            <span className="h-1 w-1 rounded-full bg-gray-700" />

            <Link href="/terms-and-conditions" className="text-gray-500 transition-colors duration-300 hover:text-[#ff7900]">
              Terms & Conditions
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}

function FooterHeading({ title }: { title: string }) {
  return (
    <div className="mb-6">
      <h3 className="text-base font-semibold text-white">
        {title}
      </h3>

      <div className="mt-2 h-[2px] w-8 rounded-full bg-[#ff7900]" />
    </div>
  );
}