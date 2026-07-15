'use client';

import SectionHeader from "../shared/SectionHeader";
import {features} from '../../data/whychooseus'

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "DaisyUI",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "Prisma",
  "MongoDB",
  "WordPress",
  "REST API",
  "Vercel",
  "GoDaddy",
  "Hostinger",
  "VPS",
  "Cloud",
];

export default function WhyUmakan() {
  return (
    <section className="bg-[#0B0F19] px-6 lg:px-14 py-20">
      {/* Header */}
      <SectionHeader
        badge="⭐ Why UMAKAN"
        title="Why Business Trust"
        highlight="UMAKAN"
        description=" We deliver more than websites and applications—we build digital solutions designed for long-term business growth."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-[#ff7900]/40 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#ff7900]/10 flex items-center justify-center mb-6">
                <Icon size={28} className="text-[#ff7900]" />
              </div>

              <h3 className="text-xl font-semibold text-white mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>

       {/* Technologies */}

        <div className="mt-22">

          <h3 className="text-center text-[#ff7900] text-3xl font-bold leading-snug">
            Technologies <span className="text-white"> We Work With</span>
          </h3>

          <div className="flex flex-wrap justify-center gap-4 mt-8">

            {technologies.map((tech) => (

              <span
                key={tech}
                className="px-5 py-3 rounded-full border border-[#ff7900]/20 bg-white/5 text-gray-300 hover:border-[#ff7900] hover:text-[#ff7900] transition-all duration-300"
              >
                {tech}
              </span>

            ))}

          </div>

        </div>
    </section>
  );
}