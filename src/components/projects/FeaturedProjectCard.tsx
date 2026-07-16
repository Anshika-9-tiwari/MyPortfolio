"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

interface FeaturedProjectCardProps {
  project: {
    number: string;
    category: string;
    industry: string;
    title: string;
    overview: string;
    challenge: string;
    solution: string;
    services: string[];
    technologies: string[];
    businessImpact: string[];
    image: string;
    live: string;
  };

  reverse?: boolean;
}

export default function FeaturedProjectCard({
  project,
  reverse = false,
}: FeaturedProjectCardProps) {
  return (
    <section className="bg-[#0B0F19] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-14">

        <div
          className={`grid lg:grid-cols-2 gap-16 items-center ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >

          {/* LEFT */}

          <div className="relative">

            {/* Huge Number */}

            <h1 className="absolute -top-14 left-0 text-[120px] font-black text-white/[0.04] select-none">
              {project.number}
            </h1>

            <span className="inline-flex rounded-full border border-[#ff7900]/20 bg-[#ff7900]/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#ff7900]">
              {project.category}
            </span>

            <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-white">
              {project.title}
            </h2>

            <p className="mt-6 text-lg text-gray-400 leading-8">
              {project.overview}
            </p>

            {/* Business Impact */}

            <div className="mt-8">

              <h3 className="text-xl font-semibold text-white mb-5">
                Business Impact
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">

                {project.businessImpact.map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >

                    <CheckCircle2
                      size={18}
                      className="text-[#ff7900]"
                    />

                    <span className="text-gray-300">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

            {/* Button */}

            <Link
              href={project.live}
              target="_blank"
              className="inline-flex items-center gap-2 mt-10 rounded-xl bg-[#ff7900] px-6 py-3 font-medium text-white hover:bg-[#ff8c1a] transition"
            >
              Visit Website
              <ArrowUpRight size={18} />
            </Link>

          </div>

          {/* RIGHT */}

          <div>

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#10151F] shadow-[0_20px_60px_rgba(0,0,0,.4)]">

              {/* Browser */}

              <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">

                <div className="flex gap-2">

                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />

                </div>

                <div className="flex-1 rounded-full bg-white/5 px-4 py-2">

                  <p className="truncate text-center text-xs text-gray-400">
                    {project.live}
                  </p>

                </div>

              </div>

              {/* Images */}

              <div className="relative aspect-[16/10] overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                />

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}