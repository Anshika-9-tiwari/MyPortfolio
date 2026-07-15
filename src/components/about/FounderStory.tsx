'use client';

import Image from "next/image";

export default function FounderStory() {
  return (
    <section className="bg-[#0B0F19] px-8 lg:px-14 py-20 border-b border-white/10">
      <div className="grid lg:grid-cols-2 gap-12 items-center ">
        
        <div className="join join-vertical w-full bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
          <Image
            src="/mypic4.jpg"
            alt="Founder"
            width={500}
            height={500}
            className="w-full h-[400px] object-cover"
          />

          <div className="p-6">
            <h3 className="text-white text-2xl font-bold">
              Anshika Tiwari
            </h3>
            <p className="text-[#ff7900] mt-2">
              Founder, UMAKAN Technologies
            </p>
          </div>
        </div>

        <div>
          <div className="badge badge-outline border-[#ff7900]/70 text-[#ff7900] p-4 mb-6">
            Founder Story
          </div>

          <h2 className="text-4xl font-bold text-white mb-6">
            Meet The Founder
          </h2>

          <div className="space-y-5 text-gray-400 leading-relaxed">
            <p>
              UMAKAN Technologies was founded by{" "}
              <span className="text-white font-semibold">
                Anshika Tiwari
              </span>{" "}
              with a vision to bridge the gap between technology and business growth.
            </p>

            <p>
              What started as a passion for <span className="text-white/80 font-semibold"> building websites and web applications </span>
              gradually evolved into a mission-driven digital agency focused on
              solving real business challenges.
            </p>

            <p>
              With expertise in <span className="text-white/80 "> MERN stack development, modern frontend
              technologies, and WordPress  </span> solutions, UMAKAN helps businesses
              transform ideas into scalable digital products.
            </p>

            <p>
              We believe technology is not just about code—it’s about building
              solutions that create measurable business impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}