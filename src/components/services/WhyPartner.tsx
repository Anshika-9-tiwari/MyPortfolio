"use client";

import {
  BriefcaseBusiness,
  MessageCircleMore,
  Rocket,
  Gauge,
  ShieldCheck,
  LaptopMinimal,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import SectionHeader from "../shared/SectionHeader";
import PrimaryButton from "../shared/PrimaryButton";

const features = [
  {
    icon: MessageCircleMore,
    title: "Transparent Communication",
    description:
      "Regular updates, milestone tracking, and direct communication keep you informed throughout the project.",
  },
  {
    icon: Rocket,
    title: "Scalable Solutions",
    description:
      "Every website and application is built with future growth, flexibility, and performance in mind.",
  },
  {
    icon: Gauge,
    title: "Performance & SEO",
    description:
      "Fast-loading, SEO-friendly, and mobile-first websites designed to maximize user engagement.",
  },
  {
    icon: ShieldCheck,
    title: "Long-Term Support",
    description:
      "We stay with you after launch through maintenance, updates, and continuous improvements.",
  },
];

const stats = [
  {
    value: "100%",
    label: "SEO-Friendly",
  },
  {
    value: "100%",
    label: "Responsive Design",
  },
  {
    value: "2-4",
    label: "Weeks Delivery",
  },
  {
    value: " 100%",
    label: "On-Time Delivery",
  },
  {
    value: "90%",
    label: "Client Satisfaction",
  },
   {
    value: "24/7",
    label: "Support",
  },
];

export default function WhyPartner() {
  return (
    <section className="bg-[#0B0F19] py-18 md:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 xl:px-12">
        {/* Heading */}
        <SectionHeader
          badge="🤝 Why Partner With UMAKAN"
          title="More Than Development—"
          highlight="We Build Partnerships"
          description=" We don't just create websites and applications—we help businesses solve problems, improve operations, and grow through modern digital solutions."
        />

        {/* Content */}
        <div className="grid lg:grid-cols-3 gap-6 mt-16">

          {/* Featured Card */}
          <div className="lg:col-span-2 rounded-3xl border border-[#ff7900]/20 bg-gradient-to-br from-[#ff7900]/10 to-transparent p-8">

            <div className="w-16 h-16 rounded-2xl bg-[#ff7900]/10 flex items-center justify-center mb-8">
              <BriefcaseBusiness className="text-[#ff7900]" size={32} />
            </div>

            <h3 className="text-3xl font-bold text-white mb-5">
              Business-First Development
            </h3>

            <p className="text-gray-300 leading-8 text-lg mb-8">
              Every project starts with understanding your business—not just your
              requirements. We focus on building digital solutions that improve
              efficiency, generate leads, strengthen your online presence, and
              support long-term business growth.
            </p>
            
            <PrimaryButton
              href="/contact"
              rightIcon={ArrowRight}
              size="md"
            >
              Get Start
            </PrimaryButton>
          </div>

          {/* Stats Card */}
          <div className="rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl p-8 hover:border-[#ff7900]/30 transition-all duration-300">

            <h3 className="text-2xl font-semibold text-white mb-8">
              Our Impact in Numbers
            </h3>

            <div className="grid grid-cols-2 gap-22 md:gap-8 gap-y-6">
              {stats.map((item) => (
                <div key={item.label}>
                  <h4 className="text-4xl font-bold text-[#ff7900]">
                    {item.value}
                  </h4>

                  <p className="text-gray-400 mt-2">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* Bottom Features */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">

          {features.map((feature) => {

            const Icon = feature.icon;

            return (

              <div
                key={feature.title}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-[#ff7900]/40 hover:-translate-y-2 transition-all duration-300"
              >

                <div className="w-14 h-14 rounded-2xl bg-[#ff7900]/10 flex items-center justify-center mb-5">
                  <Icon size={26} className="text-[#ff7900]" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {feature.description}
                </p>

              </div>

            );

          })}

        </div>

        {/* Bottom Banner */}

        <div className="mt-10 rounded-3xl border border-[#ff7900]/20 bg-[#ff7900]/5 p-8 flex flex-col lg:flex-row items-center justify-between gap-6">

          <div>
            <h3 className="text-2xl font-bold text-white">
              Ready to Build Your Next Digital Product?
            </h3>

            <p className="text-gray-400 mt-3">
              Let's discuss your idea and create a solution that delivers real
              business results.
            </p>
          </div>

          <PrimaryButton
              href="/contact"
              rightIcon={ArrowRight}
              size="md"
            >
              Let's Talk
            </PrimaryButton>

        </div>
      </div>
    </section>
  );
}