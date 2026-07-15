"use client";
import Image from "next/image";
import Link from "next/link";
import { Homeprojects } from "@/data/projects";
import SectionHeader from "../shared/SectionHeader";
import PrimaryButton from "../shared/PrimaryButton";
import { ArrowRight } from "lucide-react";

export default function FeaturedProjects() {
  return (
    <section className="bg-[#0B0F19] px-8 lg:px-14 py-14 md:py-16">

      {/* Heading */}
      <SectionHeader
        badge="🚀 Featured Projects"
        title="Real Solutions."
        highlight="Real Impact."
        description="Explore our featured projects designed to solve real business challenges."
      />

      {/* Projects */}
      <div className="mt-14 space-y-10">
        {Homeprojects.map((project, index) => (
          <div
            key={index}
            className="grid lg:grid-cols-2 gap-8 items-center bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8"
          >
            <div>
              <Image
                src={project.image}
                alt={project.title}
                width={700}
                height={400}
                className="rounded-2xl"
              />
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-relaxed mb-5">
                {project.description}
              </p>

              <div className="flex gap-3 flex-wrap mb-5">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-[#ff7900]/10 text-[#ff7900] rounded-xl text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-white mb-6">
                Result:{" "}
                <span className="text-[#ff7900]">{project.result}</span>
              </p>

              <PrimaryButton
                href="/projects"
                rightIcon={ArrowRight}
              >
                Start Project
              </PrimaryButton>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}