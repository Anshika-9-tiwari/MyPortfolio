'use client';

import { ArrowRight } from "lucide-react";
import PrimaryButton from "../shared/PrimaryButton";

export default function AboutHero() {
  return (
    <section className="bg-[#0B0F19] text-white px-8 lg:px-14 py-17 border-b border-white/5 backdrop-blur-xl relative overflow-hidden ">
       <div className="absolute top-0 left-0 w-72 h-72 bg-[#ff7900] opacity-20 blur-[150px]"></div>
       <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-500 opacity-20 blur-[150px]"></div>
      <div className="max-w-5xl mx-auto text-center pt-18">
        <div className="badge badge-outline border-[#ff7900]/60 text-[#ff7900] p-4 mb-8">
          🔥 About UMAKAN
        </div>

        <h1 className="mt-4 text-[40px] font-bold leading-[1.18] tracking-tight sm:text-5xl lg:text-[54px] xl:text-[53px]">
          Building Digital Solutions That{" "}
          <span className="text-[#ff7900]">Empower Businesses to Scale</span>
        </h1>

        <p className="text-gray-400 mt-6 text-lg  max-w-4xl mx-auto leading-relaxed mb-10">
          At UMAKAN Technologies, we combine strategy, design, and
          technology to build scalable websites, powerful web
          applications, and digital solutions that help businesses
          grow faster in today’s competitive digital world.
        </p>
        <PrimaryButton
          href="/contact"
          rightIcon={ArrowRight}
        >
          Start Project
        </PrimaryButton>
      </div>
    </section>
  );
}