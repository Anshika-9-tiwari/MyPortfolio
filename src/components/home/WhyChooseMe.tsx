"use client";

import FeatureCard from "@/components/shared/FeatureCard";
import { whyChooseUs } from "@/data/whychooseus";
import SectionHeader from "../shared/SectionHeader";


export default function WhyChooseUs() {
  return (
    <section className="bg-[#0B0F19] px-6 lg:px-13 py-20">

      {/* Heading */}
      <SectionHeader
        badge="⭐ Why Choose UMAKAN"
        title="Why Businesses"
        highlight=" Trust UMAKAN"
        description=" We combine technical expertise, strategic thinking, and a client-first approach to build digital solutions that create lasting business value."
      />

      {/* Cards */}

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-16">

        {whyChooseUs.map((item) => (
          <FeatureCard
            key={item.title}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}

      </div>

    </section>
  );
}