"use client";

import SectionHeader from "@/components/shared/SectionHeader";

export default function FeaturedProjects() {
  return (
    <section className="bg-[#0B0F19] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-14">

        <SectionHeader
          badge="🚀 Featured Case Studies"
          title="Projects That Solve"
          highlight="Real Business Problems"
          description="Every project is built with a clear business objective—from AI-powered platforms and enterprise applications to corporate websites and business automation solutions."
        />

        {/* Categories */}

        <div className="flex flex-wrap justify-center gap-4 mt-10">

          {[
            "Dashboard",
            "Portfolio",
            "Job Portal",
            "Admin Panel",
            "Education",
            "Business Websites",
            "AI Platforms",
            "Business Automation",
          ].map((item) => (
            <span
              key={item}
              className="px-5 py-2 rounded-full border border-[#ff7900]/20 bg-white/5 text-gray-300 text-sm hover:border-[#ff7900] hover:text-[#ff7900] transition-all duration-300 cursor-default"
            >
              {item}
            </span>
          ))}

        </div>

      </div>
    </section>
  );
}