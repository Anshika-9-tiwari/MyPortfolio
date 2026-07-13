"use client";

import { useState } from "react";
import {
  BriefcaseBusiness,
  Clock3,
  IndianRupee,
  ShieldCheck,
  Sparkles,
  Upload,
} from "lucide-react";

import PrimaryButton from "../shared/PrimaryButton";

const services = [
  "Business Website",
  "Website Redesign",
  "Custom Web Application",
  "WordPress Website",
  "E-Commerce Website",
  "Business Automation",
  "AI Platform",
  "Maintenance & Support",
  "Other",
];

const budgets = [
  "Under ₹20,000 - ₹25,000",
  "₹25,000 - ₹50,000",
  "₹50,000 - ₹1,00,000",
  "Above ₹1,00,000",
  "Let's Discuss",
];

const timelines = [
  "Immediately",
  "Within 2-3 Weeks",
  "Within 1 Month",
  "Flexible",
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Transparent Pricing",
    text: "No hidden charges. Clear quotation before development.",
  },
  {
    icon: Clock3,
    title: "On-Time Delivery",
    text: "Well-planned milestones and timely project completion.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Long-Term Support",
    text: "We're available even after your project goes live.",
  },
];

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

    // TODO:
    // call your API

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }

  return (
    <section
      id="contact-form"
      className="bg-[#0B0F19] py-20"
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-16">

        <div className="grid lg:grid-cols-5 gap-10">

          {/* Form */}

          <div className="lg:col-span-3 rounded-[32px] border border-white/10 bg-[#111827] hover:border-[#ff7900]/30 p-8 lg:p-10">

            <div className="mb-10">

              <span className="text-[#ff7900] font-medium">

                Project Inquiry

              </span>

              <h2 className="text-4xl font-bold text-white mt-4">

                Tell Us About Your Project

              </h2>

            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-8"
            >

              <div className="grid md:grid-cols-2 gap-6">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="input input-bordered w-full bg-white/5 border-white/10 rounded-xl text-white focus:border-[#ff7900]
                focus:outline-none transition-all duration-300"
                  required
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="input input-bordered w-full bg-white/5 border-white/10 rounded-xl text-white focus:border-[#ff7900]
                focus:outline-none transition-all duration-300"
                  required
                />

              </div>

              <div className="grid md:grid-cols-2 gap-6">

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="input input-bordered w-full bg-white/5 border-white/10 rounded-xl text-white focus:border-[#ff7900]
                focus:outline-none transition-all duration-300"
                />

                <input
                  type="text"
                  placeholder="Company (Optional)"
                  className="input input-bordered w-full bg-white/5 border-white/10 rounded-xl text-white focus:border-[#ff7900]
                focus:outline-none transition-all duration-300"
                />

              </div>

              <div className="grid md:grid-cols-3 gap-5">

                <select className="select select-bordered border-white/10 rounded-xl text-white focus:border-[#ff7900]
                focus:outline-none transition-all duration-300">

                  <option>
                    Select Service
                  </option>

                  {services.map((service) => (
                    <option key={service}>
                      {service}
                    </option>
                  ))}

                </select>

                <select className="select select-bordered  border-white/10 rounded-xl text-white focus:border-[#ff7900]
                focus:outline-none transition-all duration-300">

                  <option>
                    Budget
                  </option>

                  {budgets.map((budget) => (
                    <option key={budget}>
                      {budget}
                    </option>
                  ))}

                </select>

                <select className="select select-bordered  border-white/10 rounded-xl text-white focus:border-[#ff7900]
                focus:outline-none transition-all duration-300">

                  <option>
                    Timeline
                  </option>

                  {timelines.map((timeline) => (
                    <option key={timeline}>
                      {timeline}
                    </option>
                  ))}

                </select>

              </div>

              <textarea
                rows={6}
                placeholder="Describe your project, goals, required features, preferred design style, or any references you'd like to share..."
                className="textarea textarea-bordered w-full bg-white/5 border-white/10 rounded-xl text-white focus:border-[#ff7900]
                focus:outline-none transition-all duration-300"
              />

              {/* Upload file */}
              {/* <div className="mt-8">

                <label className="text-lg font-semibold text-white block mb-4">
                  Attach Reference Files
                </label>

                <label
                  htmlFor="file"
                  className="
                    flex
                    flex-col
                    items-center
                    justify-center
                    rounded-2xl
                    border-2
                    border-dashed
                    border-white/10
                    bg-white/5
                    py-10
                    cursor-pointer
                    hover:border-[#ff7900]/40
                    transition
                  "
                >

                  <Upload
                    className="text-[#ff7900]"
                    size={36}
                  />

                  <p className="mt-4 text-white font-medium">
                    Upload Project Brief
                  </p>

                  <span className="text-gray-500 text-sm mt-2">
                    PDF, DOCX, PNG, JPG (Max 10MB)
                  </span>

                  <input
                    id="file"
                    type="file"
                    className="hidden"
                  />

                </label>

              </div> */}

              <PrimaryButton
                type="submit"
                loading={loading}
                className="w-full"
              >
                Send Project Inquiry
              </PrimaryButton>

            </form>

          </div>

          {/* Right */}

          <div className="lg:col-span-2 space-y-6">

            {benefits.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className="rounded-[28px] border border-white/10 bg-[#111827] p-7 hover:border-[#ff7900]/40 transition"
                >

                  <div className="w-14 h-14 rounded-2xl bg-[#ff7900]/10 flex items-center justify-center mb-5">

                    <Icon
                      className="text-[#ff7900]"
                      size={28}
                    />

                  </div>

                  <h3 className="text-xl font-semibold text-white">

                    {item.title}

                  </h3>

                  <p className="text-gray-400 mt-3 leading-7">

                    {item.text}

                  </p>

                </div>

              );

            })}

          </div>

        </div>

      </div>
    </section>
  );
}