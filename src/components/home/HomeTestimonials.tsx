"use client";

import { useEffect, useState } from "react";
import Slider from "react-slick";
import { Star } from "lucide-react";

import { testimonials } from "@/data/testimonials";
import SectionHeader from "../shared/SectionHeader";
import GlassCard from "../shared/GlassCard";

const clientEmojis = ["👨‍💼", "👩‍💼", "🧑‍💻", "👨‍🔧", "👩‍💻", "👨‍🚀", "🧑‍🚀"];

const getClientEmoji = (index: number) => {
  return clientEmojis[index % clientEmojis.length];
};

export default function HomeTestimonials() {
  const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    const updateSlides = () => {
      const width = window.innerWidth;

      if (width >= 1024) {
        setSlidesToShow(3);
      } else if (width >= 768) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };

    updateSlides();

    window.addEventListener("resize", updateSlides);

    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 600,

    slidesToShow,
    slidesToScroll: 1,

    arrows: false,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    draggable: true,

    centerMode: false,
    variableWidth: false,
    adaptiveHeight: false,
    pauseOnHover: true,
  };

  return (
    <section className="overflow-hidden bg-[#0B0F19] py-12 sm:py-14 lg:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-12">

        {/* Header */}
        <SectionHeader
          badge="💬 Client Testimonials"
          title="What Our Clients"
          highlight=" Say"
          description="We take pride in delivering quality digital solutions that create measurable impact for businesses."
        />

        {/* Slider */}
        <div className="testimonial-slider mt-10 w-full min-w-0 sm:mt-14 md:mt-16">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={`${testimonial.name}-${index}`} className="px-1.5 sm:px-2 md:px-3">

                <GlassCard className="flex min-h-[300px] w-full flex-col p-5 sm:min-h-[320px] sm:p-6 lg:p-7">

                  {/* Stars */}
                  <div className="mb-5 flex gap-1">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} size={16} className="fill-[#ff7900] text-[#ff7900]" />
                    ))}
                  </div>

                  {/* Feedback */}
                  <p className="flex-1 break-words text-sm leading-7 text-gray-300 sm:text-[15px]">
                    &ldquo;{testimonial.feedback}&rdquo;
                  </p>

                  {/* Client */}
                  <div className="mt-6 flex items-center gap-3 border-t border-white/5 pt-5 sm:gap-4">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#ff7900]/15 text-xl sm:h-12 sm:w-12 sm:text-2xl">
                      {getClientEmoji(index)}
                    </div>

                    <div className="min-w-0 flex-1">
                      <h4 className="truncate text-sm font-semibold text-white sm:text-base">
                        {testimonial.name}
                      </h4>

                      <p className="mt-0.5 truncate text-xs text-gray-400 sm:text-sm">
                        {testimonial.role}
                      </p>
                    </div>

                  </div>

                </GlassCard>

              </div>
            ))}
          </Slider>
        </div>

      </div>
    </section>
  );
}