"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300
      ${
        scrolled
          ? "bg-[#0B0F19]/95 shadow-lg shadow-black/40 backdrop-blur-xl"
          : "bg-[#0B0F19]/80 backdrop-blur-md"
      }
      border-b border-white/10`}
    >
      <div className="navbar px-6 lg:px-16 h-24">
        {/* LOGO */}
        <div className="navbar-start">
          <Link href="/">
           <Image
              src="/umakan_logo.png"
              alt="UMKANIX Logo"
              width={150}
              height={45}
              className="object-contain w-[140px] lg:w-[170px] h-auto"
            />
          </Link>
        </div>

        {/* DESKTOP NAV */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-10 text-gray-300 font-medium">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`relative py-2 transition duration-300
                    ${
                      isActive ? "text-[#ff7900]" : "hover:text-[#ff7900]"
                    }
                    after:absolute after:left-0 after:bottom-0
                    after:h-[2px] after:bg-[#ff7900]
                    after:transition-all after:duration-300
                    ${
                      isActive
                        ? "after:w-full"
                        : "after:w-0 hover:after:w-full"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end gap-4">
          <Link
            href="/contact"
            className="hidden lg:flex btn bg-[#ff7900] hover:bg-orange-600 text-white border-none rounded-xl px-6 shadow-lg shadow-orange-500/20"
          >
            Get Started
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-[#111827]
        ${menuOpen ? "max-h-[500px]" : "max-h-0"}`}
      >
        <ul className="flex flex-col px-6 py-4 space-y-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block ${
                    isActive ? "text-[#ff7900]" : "text-gray-300"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="btn bg-[#ff7900] hover:bg-orange-600 text-white border-none rounded-xl w-full mt-4"
          >
            Get Started
          </Link>
        </ul>
      </div>
    </header>
  );
}