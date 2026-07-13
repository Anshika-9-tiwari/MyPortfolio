'use client'
import { Target, Eye } from "lucide-react";
import SectionHeader from "../shared/SectionHeader";
import GlassCard from "../shared/GlassCard";


export default function MissionVision() {
  return (
    <section className="bg-[#0B0F19] px-8 lg:px-16 py-20 border-b border-white/5">
      
      {/* Heading */}
      <SectionHeader
        badge="🎯 Mission & Vision"
        title="Our Purpose &"
        highlight="Future Vision"
        description="We are driven by a clear mission and a long-term vision to build meaningful digital solutions for modern businesses."
      />

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-8 mt-16">
        
        {/* Mission */}
        <GlassCard>
          <div className="w-16 h-16 rounded-2xl bg-[#ff7900]/10 flex items-center justify-center mb-6">
            <Target size={30} className="text-[#ff7900]" />
          </div>

          <h3 className="text-3xl font-bold text-white mb-5">
            Our Mission
          </h3>

          <p className="text-gray-400 leading-relaxed text-lg">
            Our mission is to empower businesses with scalable digital
            solutions that drive growth, improve efficiency, and create
            meaningful impact in today’s fast-evolving digital world.
          </p>
        </GlassCard>

        {/* Vision */}
        <GlassCard>
          <div className="w-16 h-16 rounded-2xl bg-[#ff7900]/10 flex items-center justify-center mb-6">
            <Eye size={30} className="text-[#ff7900]" />
          </div>

          <h3 className="text-3xl font-bold text-white mb-5">
            Our Vision
          </h3>

          <p className="text-gray-400 leading-relaxed text-lg">
            Our vision is to become a trusted technology partner for
            startups and businesses worldwide, helping them innovate,
            scale, and succeed through digital transformation.
          </p>
        </GlassCard>
      </div>
    </section>
  );
}