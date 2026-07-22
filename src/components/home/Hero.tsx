"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PrimaryButton from "../shared/PrimaryButton";
import SecondaryButton from "../shared/SecondaryButton";

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#0B0F19] text-white px-7 lg:px-14 pt-35 md:pt-35 pb-12 md:pb-0 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
        
        {/* LEFT */}
        <div>
          <div className="badge badge-outline border-[#ff7900] text-[#ff7900] p-4 mb-6">
            🔥 Digital Agency for Modern Businesses
          </div>

          <h1 className="text-4xl md:text-[58px] font-bold leading-tight">
            We Build Websites That{" "}
            <span className="text-[#ff7900]">Grow Your Business</span>
          </h1>

          <p className="text-gray-400 mt-6 text-lg leading-relaxed max-w-2xl md:text-justify">
            UMAKAN Technologies provides  "website development, website redesign, custom web applications, WordPress development, eCommerce solutions, business automation, dashboards, admin panels,  maintenance, and other digital development services". 
            <span className="block mt-1">
              UMAKAN Technology helps startups and businesses build high-performing websites, scalable web applications, and modern digital solutions.
            </span>
          </p>

          <div className="flex flex-wrap gap-5 mt-10">
            <PrimaryButton
              href="/contact"
              rightIcon={ArrowRight}
            >
              Start Project
            </PrimaryButton>

            <SecondaryButton
                href="/projects"
                rightIcon={ArrowRight}
            >
                View Projects
            </SecondaryButton>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-[#ff7900] blur-[100px] opacity-20"></div>

          {/* Floating Card 1 */}
          <div className="absolute top-4 -left-2 md:left-0 bg-white/5 backdrop-blur-xl border border-[#ff7900]/30 rounded-2xl px-4 py-3 z-20 text-center">
            <p className="text-md text-gray-200">Projects Delivered</p>
            <h4 className="text-xl font-bold text-[#ff7900]">30+</h4>
          </div>

          {/* Floating Card 2 */}
          <div className="absolute bottom-6 -right-2 md:right-0 bg-white/10 backdrop-blur-2xl border border-[#ff7900]/30 rounded-2xl px-4 py-3 z-20 text-center">
            <p className="text-md text-gray-200">Client Satisfaction</p>
            <h4 className="text-xl font-bold text-[#ff7900]">100%</h4>
          </div>

          {/* Main Dashboard */}
          <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-4 shadow-xl z-10">
            <Image
              src="/hero_img.jpg"
              alt="UMAKAN Technologies web development dashboard"
              width={650}
              height={500}
              className="rounded-2xl object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}