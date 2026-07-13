"use client";

import FeatureCard from "@/components/shared/FeatureCard";
import { services } from "@/data/services";
import SectionHeader from "../shared/SectionHeader";

export default function Services() {
  return (
    <section className="bg-[#0B0F19] px-6 lg:px-16 py-24">

      {/* Heading */}

      <SectionHeader
        badge="⚡ Our Services"
        title="Solutions Designed to"
        highlight="Scale Your Business"
        description="We create modern websites, scalable web applications, and digital products that help businesses grow faster."
      />

      {/* Cards */}

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-16">

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

    </section>
  );
}