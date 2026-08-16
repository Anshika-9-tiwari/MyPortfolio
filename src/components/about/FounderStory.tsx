import Image from "next/image";

export default function FounderStory() {
  return (
    <section className="border-b border-white/10 bg-[#0B0F19] py-16 md:py-18">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 xl:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">

          {/* Left Card */}
          <div className="relative overflow-hidden rounded-3xl border border-[#ff7900]/30 bg-gradient-to-br from-[#0B0F19] via-[#0b1221] to-[#111827] p-7 sm:p-10">

            {/* Glow */}
            <div className="absolute -left-20 -top-24 h-72 w-72 rounded-full bg-[#ff7900]/15 blur-[130px]" />
            <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-orange-500/10 blur-[100px]" />

            <div className="relative flex flex-col items-center text-center">

              {/* Brand Image */}
              <div className="relative flex h-32 w-32 items-center justify-center overflow-hidden rounded-2xl border border-[#ff7900]/30 bg-white/[0.04] p-3 shadow-[0_0_45px_rgba(255,121,0,0.20)] sm:h-36 sm:w-36">
                <Image
                  src="/umakan_logo.png"
                  alt="UMAKAN Technologies"
                  fill
                  sizes="150px"
                  className="object-contain p-2"
                  priority
                />
              </div>

              {/* Brand */}
              <h3 className="mt-7 text-2xl font-bold tracking-wide text-white sm:text-3xl">
                UMAKAN Technologies
              </h3>

              <p className="mt-2 text-sm font-medium uppercase tracking-[3px] text-[#ff7900]">
                Digital Solutions Partner
              </p>

              <p className="mt-5 max-w-md leading-relaxed text-gray-400">
                We build modern digital experiences that help businesses
                establish a stronger online presence, streamline operations,
                and turn ideas into scalable solutions.
              </p>

              {/* Highlights */}
              <div className="mt-8 grid w-full grid-cols-3 gap-3 border-t border-white/10 pt-7">
                <div>
                  <h4 className="text-xl font-bold text-[#ff7900]">30+</h4>
                  <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                    Projects
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-[#ff7900]">6+</h4>
                  <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                    Solutions
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-[#ff7900]">100%</h4>
                  <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                    Focus
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Content */}
          <div>

            {/* Badge */}
            <div className="badge badge-outline mb-6 border-[#ff7900]/70 p-4 text-[#ff7900]">
              Who We Are
            </div>

            {/* Heading */}
            <h2 className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[42px]">
              Building Digital Solutions
              <span className="text-[#ff7900]"> That Move Businesses Forward</span>
            </h2>

            <div className="space-y-5 leading-relaxed text-slate-300">

              <p>
                <span className="font-semibold text-white">
                  UMAKAN Technologies
                </span>{" "}
                is a digital development company focused on building modern
                websites, web applications, dashboards, business software, and
                scalable digital solutions.
              </p>

              <p>
                We work with startups, growing businesses, and organizations
                that want to improve their digital presence, simplify
                workflows, and transform ideas into reliable technology
                products.
              </p>

              <p>
                From{" "}
                <span className="font-semibold text-white">
                  custom web development and WordPress websites
                </span>{" "}
                to{" "}
                <span className="font-semibold text-white">
                  dashboards, admin panels,  e-commerce platforms,
                  and business automation
                </span>
                , we focus on creating solutions around real business needs.
              </p>

              <p>
                Our approach combines{" "}
                <span className="font-semibold text-white">
                  clean design, modern technology, performance, scalability,
                  and usability
                </span>{" "}
                to deliver digital products that are built not only to look
                good, but to create long-term value.
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}