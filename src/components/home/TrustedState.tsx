export default function TrustedStats() {
  const stats = [
    {
      number: "30+",
      label: "Projects Delivered",
    },
    {
      number: "100%",
      label: "Responsive Solutions",
    },
    {
      number: "10+",
      label: "Technologies & Tools",
    },
    {
      number: "100%",
      label: "On-Time Delevery",
    },
    {
      number: "24/7",
      label: "Support Availability",
    },
  ];

  return (
    <section className="bg-[#0B0F19] py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 xl:px-12">

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 lg:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-7 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[#ff7900]/40 hover:bg-[#ff7900]/5 sm:px-5 sm:py-8 md:px-4 "
            >
              <h3 className="text-3xl font-bold text-[#ff7900] lg:text-4xl">
                {stat.number}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-400 sm:text-[15px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}