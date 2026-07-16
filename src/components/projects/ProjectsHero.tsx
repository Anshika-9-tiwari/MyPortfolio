"use client";

import Image from "next/image";
import {
  ArrowRight,
  BriefcaseBusiness,
  Sparkles,
} from "lucide-react";

import PrimaryButton from "@/components/shared/PrimaryButton";
import SecondaryButton from "@/components/shared/SecondaryButton";

const projects = [
  {
    title: "i-Lumber.ai",
    href: "https://i-lumber.ai",
    image: "/projects/ilumber.png",
    rotate: "-rotate-5",
    top: "top-20",
    right: "right-0",
  },
  {
    title: "Flex Accountant",
    href: "https://flex-accountant.com",
    image: "/projects/flex_accountant.png",
    rotate: "rotate-3",
    top: "top-38",
    right: "right-20",
  },
  {
    title: "DIAC",
    href: "https://diac.co.in",
    image: "/projects/diacwebsite.png",
    rotate: "-rotate-2",
    top: "top-52",
    right: "right-8",
  },
];

export default function ProjectsHero() {
  return (
    <section className="relative overflow-hidden bg-[#0B0F19] pt-36 pb-20 border-b-2 border-dashed border-[#ff7900]/10">

      {/* Background Blur */}

      <div className="absolute -top-24 right-0 w-[450px] h-[450px] rounded-full bg-[#ff7900]/10 blur-[140px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-14">

        <div className="grid lg:grid-cols-2 gap-13 items-center">

          {/* LEFT */}
          <div>
            <div className="badge badge-outline border-[#ff7900]/30 text-[#ff7900] px-5 py-4">
              <Sparkles size={15} />
              Featured Work
            </div>

            <h1 className="mt-8 text-5xl lg:text-7xl font-bold leading-15 md:leading-20 text-white">
              Projects That 
              <span className="block text-[#ff7900]">
                Drive Business 
              </span>
              Growth
            </h1>

            <p className="mt-8 text-lg leading-8 text-gray-400 max-w-xl">
              Explore our portfolio of AI platforms,
              enterprise dashboards, business websites,
              job portals, and custom web applications
              built to solve real business problems.

            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4 mt-10">

              <PrimaryButton
                href="/contact"
                rightIcon={ArrowRight}
              >
                Start Your Project
              </PrimaryButton>

              <SecondaryButton href="/services">

                Explore Services

              </SecondaryButton>

            </div>

            {/* Small Highlights */}

            <div className="grid grid-cols-2 gap-6 mt-12">

              <div className="flex gap-4">

                <BriefcaseBusiness
                  className="text-[#ff7900]"
                />

                <div>

                  <h3 className="text-white font-semibold">

                    30+ Projects

                  </h3>

                  <p className="text-gray-400 text-sm">

                    Successfully Delivered

                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <BriefcaseBusiness
                  className="text-[#ff7900]"
                />

                <div>

                  <h3 className="text-white font-semibold">

                    AI + SaaS

                  </h3>

                  <p className="text-gray-400 text-sm">

                    Modern Platforms

                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative hidden lg:flex  justify-center h-[600px]">

            {projects.map((project) => (

              <div
                key={project.title}
                className={`
                  absolute
                  ${project.rotate}
                  ${project.top}
                  ${project.right}
                  w-[430px]
                  rounded-3xl
                  overflow-hidden
                  border
                  border-white/10
                  bg-[#10151F]
                  shadow-2xl
                  transition-all
                  duration-500
                  hover:scale-105
                  hover:z-20
                `}
              >

                {/* Browser */}
               <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
                 <div className="flex gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-500"/>
                      <span className="w-3 h-3 rounded-full bg-yellow-500"/>
                      <span className="w-3 h-3 rounded-full bg-green-500"/>
                  </div>
                  <div className="flex-1 mx-4 bg-white/5 rounded-full px-4 py-1 hover:border border-[#ff7900]/50">
                      <p className="text-[11px] text-center text-gray-400 truncate">
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {project.href}
                        </a>
                      </p>
                  </div>
               </div>
                <div className="relative h-[260px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}