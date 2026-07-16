"use client";

import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  BriefcaseBusiness,
  MonitorSmartphone,
  ShieldCheck,
  Clock3,
} from "lucide-react";

import PrimaryButton from "../shared/PrimaryButton";
import SecondaryButton from "../shared/SecondaryButton";

const features = [
  "Custom Web Development",
  "WordPress Development",
  "E-Commerce Solutions",
  "Support & Maintenance",
];

const stats = [
  {
    icon: BriefcaseBusiness,
    value: "30+",
    label: "Projects Delivered",
  },
  {
    icon: MonitorSmartphone,
    value: "100%",
    label: "Responsive Design",
  },
  {
    icon: ShieldCheck,
    value: "99.9%",
    label: "Secure Solutions",
  },
  {
    icon: Clock3,
    value: "24/7",
    label: "Support",
  },
];

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-[#0B0F19] pt-36 pb-20 border-b border-white/5">

      {/* Background Glow */}

      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#ff7900]/10 blur-[140px]" />

      <div className="max-w-7xl mx-auto px-8 lg:px-14">

        {/* HERO */}

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

            <div className="badge badge-outline border-[#ff7900]/30 text-[#ff7900] px-5 py-4">
              ⚡ Our Services
            </div>

            <h1 className="mt-8 text-5xl lg:text-6xl font-bold leading-tight text-white">
              Digital Solutions
              <span className="block text-[#ff7900]">
                Built for Business
              </span>
              Growth
            </h1>

            <p className="mt-8 text-lg leading-8 text-gray-400">
              We help startups and businesses build modern websites,
              custom web applications, and scalable digital solutions
              that improve customer experience and accelerate growth.
            </p>

            {/* Features */}

            <div className="grid sm:grid-cols-2 gap-4 mt-10">

              {features.map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={20}
                    className="text-[#ff7900]"
                  />

                  <span className="text-gray-300">
                    {item}
                  </span>

                </div>

              ))}

            </div>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4 mt-10">

              <PrimaryButton
                href="/contact"
                rightIcon={ArrowRight}
              >
                Start Your Project
              </PrimaryButton>

              <SecondaryButton href="/projects">
                View Projects
              </SecondaryButton>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative flex justify-center">

            {/* Glow */}

            <div className="absolute w-80 h-80 rounded-full bg-[#ff7900]/10 blur-[120px]" />

            {/* Browser */}

            <div className="relative w-full max-w-[620px] rounded-[30px] overflow-hidden border border-white/10 bg-[#10151F] shadow-[0_30px_80px_rgba(0,0,0,.45)]">

              {/* Browser Bar */}

              <div className="flex items-center gap-2 px-5 py-4 border-b border-white/10">

                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />

                <div className="flex-1 rounded-full bg-white/5 ml-4 px-4 py-2 text-xs text-center text-gray-400">
                  www.umakan.in
                </div>

              </div>

              <div className="relative aspect-[16/10]">

                <Image
                  src="/projects/dashboard.png"
                  alt="Website Preview"
                  fill
                  className="object-cover"
                />

              </div>

            </div>

            {/* Floating Card */}

            <div className="absolute -left-8 bottom-8 hidden lg:block">

              <div className="rounded-2xl border border-[#ff7900]/30 bg-[#10151F]/95 backdrop-blur-xl px-6 py-5 shadow-xl">

                <p className="text-gray-400 text-sm">
                  Responsive
                </p>

                <h3 className="text-3xl font-bold text-white">
                  100%
                </h3>

              </div>

            </div>

            {/* Floating Card */}

            <div className="absolute -right-8 top-16 hidden lg:block">

              <div className="rounded-2xl border border-[#ff7900]/30 bg-[#10151F]/95 backdrop-blur-xl px-6 py-5 shadow-xl">

                <p className="text-gray-400 text-sm">
                  Client Satisfaction
                </p>

                <h3 className="text-3xl font-bold text-[#ff7900]">
                  100%
                </h3>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}