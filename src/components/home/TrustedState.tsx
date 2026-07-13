"use client";
export default function TrustedStats() {
  const stats = [
    {
      number: "30+",
      label: "Projects Delivered",
    },
    {
      number: "5+",
      label: "Years Experience",
    },
    {
      number: "100%",
      label: "Responsive Solutions",
    },
    {
      number: "24/7",
      label: "Support & Maintenance",
    },
  ];

  return (
    <section className="bg-[#0B0F19] px-6 lg:px-16  -py-8 -mt-5 md:py-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/15 backdrop-blur-xl rounded-2xl p-8 text-center hover:border-[#ff7900]/50 hover:-translate-y-2 transition-all duration-300"
          >
            <h3 className="text-3xl lg:text-4xl font-bold text-[#ff7900]">
              {stat.number}
            </h3>
            <p className="text-gray-400 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}