"use client";

import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";

import PrimaryButton from "../shared/PrimaryButton";
import SecondaryButton from "../shared/SecondaryButton";

const highlights = [
  "Free Consultation",
  "Transparent Pricing",
  "On-Time Delivery",
  "Long-Term Support",
];

export default function ProjectsCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0B0F19] py-20">
      {/* Glow */}

      <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff7900]/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 xl:px-12">

        <div className="rounded-[36px] border border-[#ff7900]/20 bg-white/[0.03] backdrop-blur-xl px-8 py-12 md:px-12 md:py-14">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left */}

            <div>

              <span className="inline-flex rounded-full border border-[#ff7900]/20 bg-[#ff7900]/10 px-5 py-2 text-sm font-medium text-[#ff7900]">
                🚀 Let's Build Something Amazing
              </span>

              <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight text-white">
                Ready to Turn Your
                <span className="block text-[#ff7900]">
                  Idea Into Reality?
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-400">
                Whether you need a business website, AI platform,
                dashboard, or custom web application, we're here to
                help you build a fast, scalable, and modern digital
                solution.
              </p>

            </div>

            {/* Right */}

            <div>

              <div className="grid md:grid-cols-2 gap-4">

                {highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                  >
                    <CheckCircle2
                      className="text-[#ff7900]"
                      size={22}
                    />

                    <span className="text-gray-300">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

              <div className="flex flex-col gap-4 mt-10">

                <PrimaryButton
                  href="/contact"
                  rightIcon={ArrowRight}
                >
                  Start Your Project
                </PrimaryButton>

                <SecondaryButton
                  href="https://wa.me/919540838797"
                  leftIcon={MessageCircle}
                  external
                >
                   Book Free Consultation 
                </SecondaryButton>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}