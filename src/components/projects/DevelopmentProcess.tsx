"use client";

import {
  Search,
  Palette,
  Code2,
  ShieldCheck,
  Rocket,
  Headphones,
} from "lucide-react";

import SectionHeader from "@/components/shared/SectionHeader";
import GlassCard from "@/components/shared/GlassCard";

const process = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description:
      "Understanding your business goals, target audience, and project requirements before writing a single line of code.",
  },
  {
    number: "02",
    icon: Palette,
    title: "UI / UX Design",
    description:
      "Creating modern, intuitive, and responsive user interfaces focused on usability and conversions.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Development",
    description:
      "Building fast, scalable websites and web applications using modern technologies and clean architecture.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Testing",
    description:
      "Cross-browser testing, responsiveness, performance optimization, and quality assurance before launch.",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Deployment",
    description:
      "Deploying projects securely with domain setup, SSL configuration, and production optimization.",
  },
  {
    number: "06",
    icon: Headphones,
    title: "Support",
    description:
      "Continuous maintenance, feature enhancements, security updates, and technical support after delivery.",
  },
];

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

export default function DevelopmentProcess() {
  return (
    <section className="bg-[#0B0F19] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        <SectionHeader
          badge="⚙️ Our Process"
          title="How We Build"
          highlight="Digital Products"
          description="Every successful project follows a structured workflow that ensures quality, performance, and long-term scalability."
        />

        {/* Process */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">

          {process.map((step) => {

            const Icon = step.icon;

            return (

              <GlassCard
                key={step.number}
                className="relative group hover:border-[#ff7900]/30"
              >

                <span className="absolute top-6 right-6 text-5xl font-black text-white/5 group-hover:text-[#ff7900]/10 transition">
                  {step.number}
                </span>

                <div className="w-14 h-14 rounded-2xl bg-[#ff7900]/10 flex items-center justify-center mb-6">

                  <Icon
                    className="text-[#ff7900]"
                    size={28}
                  />

                </div>

                <h3 className="text-2xl font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-4 text-gray-400 leading-8">
                  {step.description}
                </p>

              </GlassCard>

            );

          })}

        </div>

        {/* Technologies */}

        <div className="mt-20">

          <h3 className="text-center text-white text-2xl font-bold">
            Technologies We Work With
          </h3>

          <div className="flex flex-wrap justify-center gap-4 mt-8">

            {technologies.map((tech) => (

              <span
                key={tech}
                className="px-5 py-3 rounded-full border border-white/10 bg-white/5 text-gray-300 hover:border-[#ff7900] hover:text-[#ff7900] transition-all duration-300"
              >
                {tech}
              </span>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}