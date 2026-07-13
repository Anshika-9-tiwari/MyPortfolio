"use client";
import Link from "next/link";
import PrimaryButton from "../shared/PrimaryButton";
import { ArrowRight, Calendar } from "lucide-react";
import SecondaryButton from "../shared/SecondaryButton";

export default function CTA() {
  return (
    <section className="bg-[#0B0F19] px-7 lg:px-16 py-16 md:py-16">
      <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl px-8 py-10 md:py-18 lg:px-14 text-center">
        
        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#ff7900] opacity-20 blur-[130px]"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-500 opacity-20 blur-[130px]"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="badge badge-outline border-[#ff7900] text-[#ff7900] p-4 mb-6">
            🚀 Let’s Build Something Amazing
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Ready to Transform Your{" "}
            <span className="text-[#ff7900]">Business Digitally?</span>
          </h2>

          <p className="text-gray-400 mt-6 text-lg max-w-3xl mx-auto leading-relaxed">
            Partner with UMAKAN Technologies to build modern websites,
            scalable web applications, and digital solutions tailored
            to your business goals.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <PrimaryButton
              href="/contact"
              size="md"
            >
              Let's Build Together
            </PrimaryButton>

            <SecondaryButton
              href="https://wa.me/919540838797"
              external
              leftIcon={Calendar}

            >
              Schedule Consultation
            </SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}