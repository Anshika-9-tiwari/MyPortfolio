"use client"
import FeatureCard from "@/components/shared/FeatureCard";
import { services } from "@/data/services";
import SectionHeader from "../shared/SectionHeader";

export default function Services() {
  return (
    <section className="bg-[#0B0F19] py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 xl:px-12">

        {/* Heading */}
        <SectionHeader
          badge="⚡ Our Services"
          title="Solutions Designed to"
          highlight="Scale Your Business"
          description="We create modern websites, scalable web applications, and digital products that help businesses grow faster."
        />

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-14 md:grid-cols-2 lg:mt-16 xl:grid-cols-4">
          {services.map((service) => (
            <FeatureCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              href={service.href}
              showArrow
            />
          ))}
        </div>

      </div>
    </section>
  );
}