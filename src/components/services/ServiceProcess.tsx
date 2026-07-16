"use client";

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
      "We understand your business goals, target audience, and project requirements before writing a single line of code.",
    icon: Search,
  },
  {
    step: "02",
    title: "Planning",
    description:
      "We create the project roadmap, define the architecture, timeline, and choose the best technologies.",
    icon: ClipboardList,
  },
  {
    step: "03",
    title: "Development",
    description:
      "Our team develops fast, scalable, secure, and responsive digital products using modern technologies.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Testing",
    description:
      "Every project undergoes quality assurance, responsiveness, optimization, and cross-browser testing.",
    icon: ShieldCheck,
  },
  {
    step: "05",
    title: "Launch",
    description:
      "We deploy your project, provide technical support, and continuously improve performance.",
    icon: Rocket,
  },
];

export default function ServiceProcess() {
  return (
    <section className="bg-[#0B0F19] py-20 overflow-hidden">
      <div className="px-6 lg:px-12">
        <SectionHeader
          badge="⚙ Our Process"
          title="How We Build"
          highlight="Digital Products"
          description="A transparent and structured workflow that ensures every project is delivered with quality, speed, and long-term scalability."
        />

        <div className="relative mt-20">
          {/* Desktop Timeline */}

          <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-0 right-0 h-[5px]">
            <div className="h-full rounded-full bg-gradient-to-r from-[#ff7900] via-[#ff7900]/60 to-[#ff7900]/20" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-6 relative ">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.step}
                  className="relative group"
                >
                 

                  {/* Card */}
                  <div className="relative h-full rounded-[24px] before:absolute before:inset-0 before:rounded-[24px] before:border before:border-white/5 border border-white/10 bg-[#111827] backdrop-blur-xl py-10 px-7 transition-all duration-500 hover:-translate-y-2 shadow-xl hover:border-[#ff7900] hover:shadow-[0_0_40px_rgba(255,121,0,0.15)]">
                    {/* Number */}

                    <span className="absolute bottom-5 right-6 text-5xl font-black text-white/5 group-hover:text-[#ff7900]/10 transition">
                      {step.step}
                    </span>

                    {/* Icon */}

                    <div className="w-16 h-16 rounded-2xl bg-[#ff7900]/10 flex items-center justify-center border border-[#ff7900]/20">
                      <Icon
                        size={30}
                        className="text-[#ff7900]"
                      />
                    </div>

                    {/* Title */}

                    <h3 className="mt-7 text-2xl font-bold text-white">
                      {step.title}
                    </h3>

                    {/* Divider */}

                    <div className="w-16 h-1 rounded-full bg-[#ff7900] mt-4 mb-5"></div>

                    {/* Description */}

                    <p className="text-gray-400 leading-7 text-[15px]">
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