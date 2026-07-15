"use client";

import Image from "next/image";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
} from "lucide-react";

import PrimaryButton from "../shared/PrimaryButton";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 95408 38797",
    href: "tel:+919540838797",
  },
  {
    icon: Mail,
    title: "Email",
    value: "contact@umakan.in",
    href: "mailto:contact@umakan.in",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Remote Friendly",
  },
];

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[#0B0F19] pt-40 pb-20 border-b-2 border-dashed border-[#ff7900]/30">

      {/* Glow */}

      <div className="absolute right-0 top-0 w-[450px] h-[450px] rounded-full bg-[#ff7900]/10 blur-[140px]" />

      <div className="max-w-7xl mx-auto px-8 lg:px-14">

        <div className="grid lg:grid-cols-2 gap-18 items-center">

          {/* LEFT */}

          <div>

            <div className="badge badge-outline border-[#ff7900]/30 text-[#ff7900] px-5 py-4">

              💬 Contact Us

            </div>

            <h1 className="mt-8 text-5xl lg:text-6xl font-bold text-white leading-tight">

              Let's Build Something

              <span className="block text-[#ff7900]">
                Amazing Together
              </span>

            </h1>

            <p className="mt-8 text-lg leading-8 text-gray-400">

              Whether you need a business website, AI-powered platform, e-commerce store, or a custom web application,
              we'd love to hear your ideas.

            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4 mt-10">

              <PrimaryButton
                href="https://wa.me/919540838797"
                rightIcon={MessageCircle}
                external
              >
                WhatsApp
              </PrimaryButton>
                
            </div>

            {/* Contact */}

            <div className="grid sm:grid-cols-3 gap-6 mt-14">

              {contactInfo.map((item) => {

                const Icon = item.icon;

                const Card = (
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-[#ff7900]/30 transition">

                    <div className="w-12 h-12 rounded-xl bg-[#ff7900]/10 flex items-center justify-center">

                      <Icon
                        className="text-[#ff7900]"
                        size={22}
                      />

                    </div>

                    <p className="mt-4 text-sm text-gray-500">

                      {item.title}

                    </p>

                    <h4 className="mt-1 text-white font-medium text-sm break-words">

                      {item.value}

                    </h4>

                  </div>
                );

                return item.href ? (
                  <a
                    key={item.title}
                    href={item.href}
                  >
                    {Card}
                  </a>
                ) : (
                  <div key={item.title}>{Card}</div>
                );
              })}

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative flex justify-center">

            {/* Glow */}

            <div className="absolute w-50 h-50 rounded-full bg-[#ff7900]/15 blur-[180px]" />

            {/* Browser */}

            <div className="relative w-full max-w-[620px] rounded-[30px] overflow-hidden ">
              <div className="relative aspect-[13/10]">

                <Image
                  src="/projects/home_hero-removebg.png"
                  alt="Contact"
                  fill
                  className="object-cover"
                />

              </div>

            </div>

            {/* Floating Card */}

            <div className="hidden lg:block absolute left-6 top-12 -rotate-z-6 rounded-2xl border border-[#ff7900]/20 bg-[#111827]/95 backdrop-blur-xl p-5">

              <h4 className="text-3xl font-bold text-[#ff7900]">
                24h
              </h4>

              <p className="text-gray-400 text-sm">
                Average Response
              </p>

            </div>

            {/* Floating Card */}

            <div className="hidden lg:block absolute right-6 bottom-25 rotate-z-12 rounded-2xl border border-[#ff7900]/20 bg-[#111827]/95 backdrop-blur-xl p-5">

              <h4 className="text-3xl font-bold text-white">
                100%
              </h4>

              <p className="text-gray-400 text-sm">

                Client Satisfaction

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}