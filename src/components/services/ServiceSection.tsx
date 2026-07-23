"use client";

import Image from "next/image";
import { CheckCircle2, ArrowRight, CircleCheckBig } from "lucide-react";

import GlassCard from "@/components/shared/GlassCard";
import SectionHeader from "@/components/shared/SectionHeader";
import PrimaryButton from "@/components/shared/PrimaryButton";
import SecondaryButton from "@/components/shared/SecondaryButton";

import { servicesDetails } from "@/data/services";

export default function ServicesSection() {
  return (
    <section className="bg-[#0B0F19] py-18">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <SectionHeader
          badge="🚀 What We Do"
          title="Solutions Crafted For"
          highlight="Modern Businesses"
          description="We help startups, businesses, and organizations build modern digital products that deliver real business value."
        />

        <div className="space-y-10 mt-20">

          {servicesDetails.map((service, index) => {

            const Icon = service.icon;

            return (

              <GlassCard
                key={service.title}
                className="overflow-hidden p-0"
              >

                <div
                  className={`grid lg:grid-cols-2 items-center ${
                    index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                  id={service.id}
                >

                  {/* Image */}

                  <div className="relative h-[300px] lg:h-full min-h-[300px]">

                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />

                  </div>

                  {/* Content */}

                  <div className="p-6 lg:p-12">

                    <h2 className="text-3xl lg:text-4xl font-bold text-white">

                      {service.title}

                    </h2>

                    <p className="text-gray-400 leading-8 mt-6">

                      {service.description}

                    </p>

                    {/* Features */}

                    <div className="grid sm:grid-cols-2 gap-4 mt-8">

                      {service.features.map((item) => (

                        <div
                          key={item}
                          className="flex items-center gap-3"
                        >

                          <CircleCheckBig 
                            size={18}
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

                      <PrimaryButton href="/projects" rightIcon={ArrowRight}>

                        View Projects

                      </PrimaryButton>

                      <SecondaryButton
                        href={service.href}
                        rightIcon={ArrowRight}
                      >

                        Learn More

                      </SecondaryButton>

                    </div>

                  </div>

                </div>

              </GlassCard>

            );

          })}

        </div>

      </div>
    </section>
  );
}