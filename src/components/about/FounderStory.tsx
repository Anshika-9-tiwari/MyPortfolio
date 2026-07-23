import Image from "next/image";

export default function FounderStory() {
  return (
    <section className="bg-[#0B0F19] border-b border-white/10 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 xl:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">

          {/* Left Card */}
          <div className="relative overflow-hidden rounded-3xl border border-[#ff7900]/30 bg-gradient-to-br from-[#0B0F19] via-[#0b1221] to-[#111827] p-7 sm:p-10">

            {/* Glow */}
            <div className="absolute -left-20 -top-24 h-72 w-72 rounded-full bg-[#ff7900]/15 blur-[130px]" />
            <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-orange-500/10 blur-[100px]" />

            <div className="relative flex flex-col items-center text-center">

              {/* Brand Image */}
              <div className="relative flex h-35 w-35 items-center justify-center overflow-hidden rounded-2xl border border-[#ff7900]/30 bg-white/[0.04] p-3 shadow-[0_0_45px_rgba(255,121,0,0.20)] sm:h-32 sm:w-32">

                <Image
                  src="/umakan_logo.png"
                  alt="UMAKAN Technologies"
                  fill
                  sizes="150px"
                  className="object-contain p-1"
                  priority
                />

              </div>
              <p className="mt-6 max-w-md leading-relaxed text-gray-400">
                Building modern websites, web applications, and scalable digital
                solutions that help businesses grow.
              </p>

              {/* Founder */}
              <div className="mt-8 w-full border-t border-white/10 pt-6">
                <h4 className="text-xl font-semibold text-white">
                  Anshika Tiwari
                </h4>

                <p className="mt-1 text-[#ff7900]">
                  Founder & Full Stack Developer
                </p>
              </div>

            </div>
          </div>

          {/* Right Content */}
          <div>

            <div className="badge badge-outline mb-6 border-[#ff7900]/70 p-4 text-[#ff7900]">
              Founder Story
            </div>

            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Meet The Founder
            </h2>

            <div className="space-y-5 leading-relaxed text-slate-400">

              <p>
                UMAKAN Technologies was founded by{" "}
                <span className="font-semibold text-white">
                  Anshika Tiwari
                </span>{" "}
                with a vision to bridge the gap between technology and business
                growth.
              </p>

              <p>
                What started as a passion for{" "}
                <span className="font-semibold text-white">
                  building websites, admin panels, and web applications
                </span>{" "}
                gradually evolved into a mission-driven digital agency focused
                on solving real business challenges.
              </p>

              <p>
                With expertise in{" "}
                <span className="font-semibold text-white">
                  MERN Stack, Next.js, Express.js, PostgreSQL, WordPress, and
                  modern frontend technologies
                </span>
                , UMAKAN helps businesses transform ideas into scalable digital
                products.
              </p>

              <p>
                We believe technology is not just about writing code—it’s about
                building digital solutions that create measurable business
                impact and long-term value.
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}