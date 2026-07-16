"use client";

import Slider from "react-slick";
import { Star } from "lucide-react";
import {testimonials} from '@/data/testimonials'
import SectionHeader from "../shared/SectionHeader";
import GlassCard from "../shared/GlassCard";


const clientEmojis = [
  "👨‍💼", "👩‍💼", "🧑‍💻", "👨‍🔧", "👩‍💻", "👨‍🚀", "🧑‍🚀",
];

const getClientEmoji = (index: number) => {
  return clientEmojis[index % clientEmojis.length];
};

export default function HomeTestimonials() {
  const settings = {
    dots: true,
    infinite: testimonials.length > 3,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: false,
    adaptiveHeight: false,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-[#0B0F19] py-16  lg:py-20 overflow-hidden">
      <div className="px-5 sm:px-6 lg:px-14">
        <SectionHeader
          badge="💬 Client Testimonials"
          title="What Our Clients"
          highlight=" Say"
          description="We take pride in delivering quality digital solutions that create measurable impact for businesses."
        />

        <div className="mt-14 md:mt-16">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="px-2 md:px-3 h-full"
              >
                <GlassCard className="h-full flex flex-col p-6 md:p-8">
                  {/* Stars */}

                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, idx) => (
                      <Star
                        key={idx}
                        size={16}
                        className="fill-[#ff7900] text-[#ff7900]"
                      />
                    ))}
                  </div>

                  {/* Feedback */}

                  <p className="text-gray-300 leading-7 text-[15px] md:text-base flex-1 min-h-[90px]">
                    "{testimonial.feedback}"
                  </p>

                  {/* Client */}

                  <div className="flex items-center gap-4 pt-6 mt-6 border-t border-white/5">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#ff7900]/15 flex items-center justify-center text-2xl shrink-0">
                      {getClientEmoji(index)}
                    </div>

                    <div>
                      <h4 className="text-white font-semibold text-base">
                        {testimonial.name}
                      </h4>

                      <p className="text-gray-400 text-sm">
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