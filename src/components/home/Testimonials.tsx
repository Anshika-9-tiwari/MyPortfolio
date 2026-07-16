"use client";

import Slider from "react-slick";
import { Star } from "lucide-react";
import SectionHeader from "../shared/SectionHeader";
import GlassCard from "../shared/GlassCard";

const testimonials = [
   {
    name: "Nikki Rajput",
    role: "Business Owner",
    feedback:
      "UMAKAN Technology is a reliable and professional web development company. They delivered a high-quality website that exceeded our expectations.",
  },
  {
    name: "Advance Finserv",
    role: "Financial Services",
    feedback:
      "The team at UMAKAN is highly skilled and professional. They delivered a website that perfectly represents our brand and has helped us attract more clients.",
  },
  {
    name: "Corporate Client",
    role: "Training Institute",
    feedback:
      "UMAKAN is a great partner for web development. They understood our requirements and delivered a website that is both visually appealing and functional.",
  },
  {
    name: "Urban Cruise",
    role: "Travel & Tourism",
    feedback:
      "UMAKAN's team is highly skilled and responsive. They understood our requirements and delivered a website that exceeded our expectations.",
  },
  {
    name: "i-lumber",
    role: "Construction ",
    feedback:
      "The team at UMAKAN is professional and efficient. They delivered a high-quality website that perfectly represents our brand.",
  },
  {
    name: "Startup Founder",
    role: "SaaS Business",
    feedback:
      "UMAKAN Technology is a reliable and professional web development company. They delivered a high-quality website that exceeded our expectations.",
  },
  {
    name: "i-takeoff",
    role: "CPA Firm",
    feedback:
      "UMAKAN is a great partner for web development. They understood our requirements and delivered a website exactly on time ",
  },
];

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
};

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
       {
        breakpoint: 640,
        settings: {
          centerMode: false,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-[#0B0F19] px-6 lg:px-13 py-14 md:py-16">
      
      <SectionHeader
        badge="💬 Client Testimonials"
        title="What Our Clients"
        highlight=" Say"
        description=" We take pride in delivering quality digital solutions that create measurable impact for businesses."
      />

      <div className="mt-16">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-3">
              <GlassCard>  
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, idx) => (
                    <Star
                      key={idx}
                      size={18}
                      className="fill-[#ff7900] text-[#ff7900]"
                    />
                  ))}
                </div>

                {/* Feedback */}
                <p className="text-gray-300 leading-relaxed mb-6">
                  "{testimonial.feedback}"
                </p>

                {/* User */}
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-14 h-14 rounded-full bg-[#ff7900]/20 flex items-center justify-center text-[#ff7900] font-bold text-lg">
                    {getInitials(testimonial.name)}
                  </div>

                  <div>
                    <h4 className="text-white font-semibold">
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
    </section>
  );
}