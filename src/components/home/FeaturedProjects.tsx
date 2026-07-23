"use client"
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Homeprojects } from "@/data/projects";
import SectionHeader from "../shared/SectionHeader";
import PrimaryButton from "../shared/PrimaryButton";

export default function FeaturedProjects() {
  return (
    <section className="bg-[#0B0F19] py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 xl:px-12">

        {/* Heading */}
        <SectionHeader
          badge="🚀 Featured Projects"
          title="Real Solutions."
          highlight="Real Impact."
          description="From business websites to scalable digital platforms, explore how we turn complex ideas into fast, functional, and growth-focused digital experiences."
        />

        {/* Projects */}
        <div className="mt-14 space-y-8 md:mt-16 md:space-y-10">
          {Homeprojects.map((project, index) => {
            const reverse = index % 2 !== 0;

            return (
              <article key={project.title} className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-[#ff7900]/25 sm:p-6 lg:p-8">

                <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">

                  {/* IMAGE */}
                  <div className={`relative ${reverse ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-[#111827]">

                      <Image
                        src={project.image}
                        alt={`${project.title} project by UMAKAN Technologies`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />

                      {/* Overlay */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0F19]/25 via-transparent to-transparent" />

                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className={`${reverse ? "lg:order-1" : "lg:order-2"} lg:px-2`}>

                    <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ff7900]">
                      Featured Work
                    </span>

                    <h3 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-[34px]">
                      {project.title}
                    </h3>

                    <p className="mt-5 max-w-xl text-[15px] leading-7 text-gray-400 sm:text-base sm:leading-8">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mt-6 flex flex-wrap gap-2.5">
                      {project.tech.map((tech) => (
                        <span key={tech} className="rounded-lg border border-[#ff7900]/15 bg-[#ff7900]/10 px-3.5 py-2 text-xs font-medium text-[#ff7900] sm:text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 rounded-xl border border-white/5 bg-white/[0.03] p-4">
                      <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[#f7f7f7]/59">
                        Results:
                      </p>

                      <div className="space-y-2.5">
                        {project.result.map((impact) => (
                          <div key={impact} className="flex items-center gap-2.5">
                            <CheckCircle2 size={17} className="shrink-0 text-[#ff7900]" />
                            <span className="text-sm text-gray-300 sm:text-[15px]">
                              {impact}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-7">
                      <PrimaryButton href="/projects" rightIcon={ArrowRight}>
                        View Project
                      </PrimaryButton>
                    </div>

                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}