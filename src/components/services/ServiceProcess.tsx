import {
  Search,
  ClipboardList,
  Code2,
  ShieldCheck,
  Rocket,
} from "lucide-react";

import SectionHeader from "../shared/SectionHeader";

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We understand your business goals, audience, challenges, and project requirements before development begins.",
    icon: Search,
  },
  {
    step: "02",
    title: "Planning",
    description:
      "We define the project roadmap, architecture, technology stack, milestones, and delivery timeline.",
    icon: ClipboardList,
  },
  {
    step: "03",
    title: "Development",
    description:
      "We build fast, scalable, secure, and responsive digital solutions using modern technologies.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Testing",
    description:
      "We test functionality, responsiveness, performance, usability, and cross-browser compatibility.",
    icon: ShieldCheck,
  },
  {
    step: "05",
    title: "Launch",
    description:
      "We deploy your project, verify production performance, and provide ongoing technical support.",
    icon: Rocket,
  },
];

export default function ServiceProcess() {
  return (
    <section className="overflow-hidden bg-[#0B0F19] py-16 md:py-18 lg:py-20">

      {/* Controlled Container */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 xl:px-12">

        {/* Heading */}
        <SectionHeader
          badge="⚙ Our Process"
          title="From Idea to"
          highlight="Digital Success"
          description="A clear five-step process that transforms your idea into a reliable, scalable, and launch-ready digital product."
        />

        {/* Process */}
        <div className="relative mt-14 md:mt-16 lg:mt-20">

          {/* Desktop Timeline */}
          <div className="absolute left-[10%] right-[10%] top-5 z-0 hidden h-[2px] lg:block">
            <div className="h-full w-full bg-gradient-to-r from-[#ff7900]/20 via-[#ff7900] to-[#ff7900]/20" />
          </div>

          {/* Cards */}
          <div className="relative z-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">

            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <div key={step.step} className="group relative flex flex-col">

                  {/* Desktop Timeline Point */}
                  <div className="relative z-20 mb-7 hidden justify-center lg:flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-4 border-[#0B0F19] bg-[#ff7900] text-xs font-bold text-white shadow-[0_0_20px_rgba(255,121,0,0.35)]">
                      {step.step}
                    </div>
                  </div>

                  {/* Card */}
                  <div className="relative flex h-full min-h-[330px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#111827] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#ff7900]/40 hover:shadow-[0_15px_40px_rgba(0,0,0,0.25)] xl:p-7">

                    {/* Background Number */}
                    <span className="pointer-events-none absolute -bottom-2 right-4 text-[72px] font-black leading-none text-white/[0.025] transition-colors duration-300 group-hover:text-[#ff7900]/[0.06]">
                      {step.step}
                    </span>

                    {/* Mobile / Tablet Step */}
                    <div className="mb-5 flex items-center justify-between lg:hidden">
                      <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#ff7900]">
                        Step {step.step}
                      </span>

                      <span className="h-px flex-1 bg-gradient-to-r from-[#ff7900]/30 to-transparent ml-4" />
                    </div>

                    {/* Icon */}
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#ff7900]/20 bg-[#ff7900]/10 transition-all duration-300 group-hover:scale-105 group-hover:border-[#ff7900]/40 group-hover:bg-[#ff7900]/15">
                      <Icon size={27} strokeWidth={1.8} className="text-[#ff7900]" />
                    </div>

                    {/* Title */}
                    <h3 className="mt-6 text-xl font-bold text-white xl:text-[22px]">
                      {step.title}
                    </h3>

                    {/* Accent */}
                    <div className="my-4 h-[2px] w-10 rounded-full bg-[#ff7900] transition-all duration-300 group-hover:w-16" />

                    {/* Description */}
                    <p className="relative z-10 text-[14px] leading-7 text-gray-400 xl:text-[15px]">
                      {step.description}
                    </p>

                  </div>
                </div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
}