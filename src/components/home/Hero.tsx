"use client"
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import PrimaryButton from "../shared/PrimaryButton";
import SecondaryButton from "../shared/SecondaryButton";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0B0F19] text-white">
      
      {/* Background Glow */}
      <div className="pointer-events-none absolute right-0 top-1/3 h-[450px] w-[450px] rounded-full bg-[#ff7900]/8 blur-[150px]" />

      {/* Main Container */}
      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-16 sm:px-8 sm:pt-36 sm:pb-20 lg:px-10 lg:pt-36 lg:pb-24 xl:px-12">

        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12 xl:gap-16">

          {/* ================= LEFT ================= */}

          <div className="min-w-0">

            {/* Badge */}
            <div className="inline-flex items-center rounded-xl border border-[#ff7900]/70 bg-[#ff7900]/5 px-4 py-2.5 text-sm font-medium text-[#ff7900] sm:text-base">
              🔥 Digital Agency for Modern Businesses
            </div>

            {/* Heading */}
            <h1 className="mt-7 max-w-2xl text-[40px] font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-[54px] xl:text-[56px]">
              We Build Websites That{" "}
              <span className="text-[#ff7900]">
                Grow Your Business
              </span>
            </h1>

            {/* Description */}
            <div className="mt-6 max-w-xl space-y-3 text-[15px] leading-7 text-gray-400 sm:text-base sm:leading-8 lg:text-[17px]">

              <p>
                UMAKAN Technologies provides website development, website
                redesign, custom web applications, WordPress development,
                eCommerce solutions, business automation, dashboards, admin
                panels, maintenance, and other digital development services.
              </p>

              <p>
                UMAKAN Technologies helps startups and businesses build
                high-performing websites, scalable web applications, and
                modern digital solutions.
              </p>

            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4 sm:mt-9">

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

          {/* ================= RIGHT ================= */}

          <div className="relative mx-auto w-full max-w-[620px] lg:mx-0 lg:max-w-none">

            {/* Image Glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff7900]/15 blur-[100px]" />

            {/* Main Image Frame */}
            <div className="relative z-10 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-2.5 shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:p-3 lg:p-4">

              <div className="relative aspect-[4/3] overflow-hidden rounded-[20px]">

                <Image
                  src="/hero_img.jpg"
                  alt="UMAKAN Technologies web development workspace"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 48vw"
                  className="object-cover"
                />

              </div>

            </div>

            {/* Projects Delivered */}
            <div className="absolute left-2 top-3 z-20 rounded-2xl border border-[#ff7900]/30 bg-[#161A22]/85 px-4 py-3 text-center shadow-xl backdrop-blur-xl sm:left-4 sm:top-5 sm:px-5 sm:py-4 lg:-left-4">

              <p className="text-xs text-gray-300 sm:text-sm">
                Projects Delivered
              </p>

              <h4 className="mt-1 text-lg font-bold text-[#ff7900] sm:text-xl">
                30+
              </h4>

            </div>

            {/* Client Satisfaction */}
            <div className="absolute bottom-3 right-2 z-20 rounded-2xl border border-[#ff7900]/30 bg-[#161A22]/85 px-4 py-3 text-center shadow-xl backdrop-blur-xl sm:bottom-5 sm:right-4 sm:px-5 sm:py-4 lg:-right-4">

              <p className="text-xs text-gray-300 sm:text-sm">
                Client Satisfaction
              </p>

              <h4 className="mt-1 text-lg font-bold text-[#ff7900] sm:text-xl">
                100%
              </h4>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}