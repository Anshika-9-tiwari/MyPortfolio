"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import SectionHeader from "@/components/shared/SectionHeader";
import { projects } from "@/data/projects";

const spans = [
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-2",
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-1",
];

export default function MoreProjects() {
  return (
    <section className="bg-[#0B0F19] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-14">

        <SectionHeader
          badge="🚀 Portfolio Showcase"
          title="More Digital"
          highlight="Experiences"
          description="Explore more AI platforms, business applications, dashboards, and websites we've crafted for clients."
        />

        <div className="grid lg:grid-cols-3 gap-6 mt-16">

          {projects.map((project, index) => (

            <Link
              key={project.title}
              href={project.live}
              target="_blank"
              className={`group relative overflow-hidden rounded-[28px] border border-white/10 ${spans[index]}`}
            >

              <div className="relative h-[320px]">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/20 to-transparent opacity-90"/>

                {/* Hover */}

                <div className="absolute inset-0 bg-[#ff7900]/10 opacity-0 group-hover:opacity-100 transition duration-500"/>

                {/* Content */}

                <div className="absolute bottom-0 left-0 right-0 p-8">

                  <span className="inline-block text-xs uppercase tracking-[0.3em] text-[#ff7900]">

                    {project.category}

                  </span>

                  <div className="flex items-center justify-between mt-3">

                    <h3 className="text-2xl font-bold text-white">

                      {project.title}

                    </h3>

                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#ff7900] transition">

                      <ArrowUpRight
                        className="text-white"
                        size={20}
                      />

                    </div>

                  </div>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>
    </section>
  );
}