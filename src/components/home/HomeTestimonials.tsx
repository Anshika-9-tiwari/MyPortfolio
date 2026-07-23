"use client";

import Slider from "react-slick";
import { Star } from "lucide-react";

import { testimonials } from "@/data/testimonials";
import SectionHeader from "../shared/SectionHeader";
import GlassCard from "../shared/GlassCard";

const clientEmojis = [
  "👨‍💼",
  "👩‍💼",
  "🧑‍💻",
  "👨‍🔧",
  "👩‍💻",
  "👨‍🚀",
  "🧑‍🚀",
];

const getClientEmoji = (index: number) => {
  return clientEmojis[index % clientEmojis.length];
};

export default function HomeTestimonials() {
  const settings = {
    dots: true,
    infinite: testimonials.length > 1,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: false,
    adaptiveHeight: false,
    swipeToSlide: true,
    touchMove: true,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          variableWidth: false,
          adaptiveHeight: true,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          variableWidth: false,
          adaptiveHeight: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className="overflow-hidden bg-[#0B0F19] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 xl:px-12">

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
              <div
                key={`${testimonial.name}-${index}`}
                className="px-1.5 sm:px-2 md:px-3"
              >
                <div className="py-1">
                  <GlassCard
                    className="
                      flex
                      min-h-[320px]
                      w-full
                      flex-col
                      p-5
                      sm:min-h-[330px]
                      sm:p-6
                      md:p-7
                      lg:p-8
                    "
                  >
                    {/* Stars */}

                    <div className="mb-4 flex gap-1 sm:mb-5">
                      {[...Array(5)].map((_, idx) => (
                        <Star
                          key={idx}
                          size={16}
                          className="fill-[#ff7900] text-[#ff7900]"
                        />
                      ))}
                    </div>

                    {/* Feedback */}

                    <p
                      className="
                        flex-1
                        break-words
                        text-sm
                        leading-6
                        text-gray-300
                        sm:text-[15px]
                        sm:leading-7
                        md:text-base
                      "
                    >
                      &ldquo;{testimonial.feedback}&rdquo;
                    </p>

                    {/* Client */}

                    <div className="mt-5 flex items-center gap-3 border-t border-white/5 pt-5 sm:mt-6 sm:gap-4 sm:pt-6">

                      {/* Emoji */}

                      <div
                        className="
                          flex
                          h-11
                          w-11
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-[#ff7900]/15
                          text-xl
                          sm:h-12
                          sm:w-12
                          sm:text-2xl
                          md:h-14
                          md:w-14
                        "
                      >
                        {getClientEmoji(index)}
                      </div>

                      {/* Info */}

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
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}