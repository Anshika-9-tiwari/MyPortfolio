"use client";

import {
  Bot,
  Building2,
  HardHat,
  GraduationCap,
  Workflow,
  HeartPulse,
  ArrowUpRight,
} from "lucide-react";

import SectionHeader from "../shared/SectionHeader";

const industries = [
  {
    title: "AI & SaaS",
    icon: Bot,
    className: "lg:col-span-3 lg:row-span-1",
    description: "AI Platforms & SaaS Products",
  },
  {
    title: "Corporate",
    icon: Building2,
    className: "lg:col-span-3 lg:row-span-1",
    description: "Business Websites & Portals",
  },
  {
    title: "Construction",
    icon: HardHat,
    className: "lg:col-span-4 lg:row-span-2",
    description:
      "Building modern estimation platforms, dashboards, ERP systems and workflow automation for construction businesses.",
    featured: true,
  },
  {
    title: "Education",
    icon: GraduationCap,
    className: "lg:col-span-2 lg:row-span-1",
    description: "Institute & LMS Solutions",
  },
  {
    title: "Business Automation",
    icon: Workflow,
    className: "lg:col-span-6 lg:row-span-1",
    description:
      "CRM • Lead Management • Attendance • Defect Tracking • Admin Panels",
  },
  {
    title: "Healthcare",
    icon: HeartPulse,
    className: "lg:col-span-2 lg:row-span-1",
    description: "Healthcare Platforms",
  },
];

export default function IndustriesWeServe() {
  return (
    <section className="bg-[#0B0F19] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        <SectionHeader
          badge="🏢 Industries"
          title="Industries"
          highlight="We Serve"
          description="We help startups, enterprises, and growing businesses build scalable digital products tailored to their industry needs."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 auto-rows-[220px] gap-6 mt-16">

          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <div
                key={industry.title}
                className={`group relative overflow-hidden rounded-[30px] border border-[#ff7900]/25 bg-[#111827] transition-all duration-500 hover:border-[#ff7900]/50 hover:-translate-y-1 ${industry.className}`}
              >
                {/* Orange Glow */}

                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#ff7900]/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                {/* Top Border Glow */}

                <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#ff7900] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                <div className="relative h-full flex flex-col justify-between p-8 ">

                  {/* Icon */}

                  <div className="w-16 h-16 rounded-2xl bg-[#ff7900]/10 border border-[#ff7900]/20 flex items-center justify-center ">

                    <Icon
                      className="text-[#ff7900]"
                      size={32}
                    />

                  </div>

                  {/* Content */}

                  <div>

                    <h3 className="text-2xl font-bold text-white flex items-center gap-2 ">

                      {industry.title}

                      <ArrowUpRight
                        size={18}
                        className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                      />

                    </h3>

                    <p className="text-gray-400 mt-4 leading-7">

                      {industry.description}

                    </p>

                    {industry.featured && (
                      <div className="flex flex-wrap gap-3 mt-8">

                        {[
                          "ERP",
                          "AI Platforms",
                          "Dashboards",
                          "Automation",
                        ].map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300"
                          >
                            {item}
                          </span>
                        ))}

                      </div>
                    )}

                  </div>

                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}