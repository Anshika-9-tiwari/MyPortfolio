"use client";

import { CodeXml, BriefcaseBusiness, Rocket } from "lucide-react";

export default function FounderStory() {
  return (
    <section className="bg-[#0B0F19] px-8 lg:px-14 py-20 border-b border-white/10">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        {/* Left Card */}

        <div className="relative overflow-hidden rounded-3xl border border-[#ff7900]/30 bg-gradient-to-br from-[#0B0F19] via-[#0b1221] to-[#111827] p-10">

          {/* Glow */}

          <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-[#ff7900]/15 blur-[130px]" />
          <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-orange-500/10 blur-[100px]" />

          <div className="relative flex flex-col items-center text-center">

            {/* Brand Icon */}

            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#ff7900] to-[#f9911a] flex items-center justify-center shadow-[0_0_40px_rgba(255,121,0,0.35)]">
              <span className="text-6xl font-black text-white">U</span>
            </div>

            {/* Company */}

            <h3 className="mt-6 text-3xl font-bold text-white tracking-wide">
              UMAKAN
            </h3>
            <p className="text-[#ff7900] tracking-[4px] uppercase text-sm font-medium">
              Technologies
            </p>

            <p className="mt-5 text-gray-400 max-w-md leading-relaxed">
              Building modern websites, web applications, and scalable digital
              solutions that help businesses grow.
            </p>

            {/* Founder */}

            <div className="w-full mt-8 border-t border-white/10 pt-6">

              <h4 className="text-xl font-semibold text-white">
                Anshika Tiwari
              </h4>

              <p className="text-[#ff7900] mt-1">
                Founder & Full Stack Developer
              </p>

            </div>

          </div>
        </div>

        {/* Right */}

        <div>
          <div className="badge badge-outline border-[#ff7900]/70 text-[#ff7900] p-4 mb-6">
            Founder Story
          </div>

          <h2 className="text-4xl font-bold text-white mb-6">
            Meet The Founder
          </h2>

          <div className="space-y-5 text-slate-400 leading-relaxed">
            <p>
              UMAKAN Technologies was founded by{" "}
              <span className="text-white font-semibold">
                Anshika Tiwari
              </span>{" "}
              with a vision to bridge the gap between technology and business
              growth.
            </p>

            <p>
              What started as a passion for{" "}
              <span className="text-white font-semibold">
                building websites, admin panels, and web applications
              </span>{" "}
              gradually evolved into a mission-driven digital agency focused on
              solving real business challenges.
            </p>

            <p>
              With expertise in{" "}
              <span className="text-white font-semibold">
                MERN Stack, Next.js, Express.js, PostgreSQL, WordPress, and modern frontend technologies
              </span>
              , UMAKAN helps businesses transform ideas into scalable digital
              products.
            </p>

            <p>
              We believe technology is not just about writing code—it’s about
              building digital solutions that create measurable business impact
              and long-term value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}