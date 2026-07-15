"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
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
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    services: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message);
      }

      toast.success(
         "Thank you! We'll get back to you within 24 hours."
      );
      
      setTimeout(() => {
        router.push("/thank-you");
      }, 1500);

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        services: "",
        budget: "",
        timeline: "",
        message: "",
      });

    } catch (error: any) {
      toast.error(
        error.message || "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact-form"
      className="bg-[#0B0F19] py-20 border-b border-dashed border-[#ff7900]/20"
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-12">

        <div className="grid lg:grid-cols-5 gap-10">

          {/* Form */}

          <div className="lg:col-span-3 rounded-[32px] border border-white/20 bg-[#111827] hover:border-[#ff7900]/30 p-8 lg:p-10">

            <div className="mb-10">

              <span className="text-[#ff7900] font-medium border border-[#ff7900]/40 px-4 py-2 rounded-full">

                Project Inquiry

              </span>

              <h2 className="text-4xl font-bold text-white mt-8">

                Tell Us About Your Project

              </h2>

            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-10"
            >

              <div className="grid md:grid-cols-2 gap-6">

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="input input-bordered w-full bg-white/5 border-white/10 rounded-xl text-white focus:border-[#ff7900]
                focus:outline-none transition-all duration-300"
                  required
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="input input-bordered w-full bg-white/5 border-white/10 rounded-xl text-white focus:border-[#ff7900]
                focus:outline-none transition-all duration-300"
                  required
                />

              </div>

              <div className="grid md:grid-cols-2 gap-6">

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className="input input-bordered w-full bg-white/5 border-white/10 rounded-xl text-white focus:border-[#ff7900]
                focus:outline-none transition-all duration-300"
                />

                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company (Optional)"
                  className="input input-bordered w-full bg-white/5 border-white/10 rounded-xl text-white focus:border-[#ff7900]
                focus:outline-none transition-all duration-300"
                />

              </div>

              <div className="grid md:grid-cols-3 gap-5">

               <select
                  name="services"
                  value={formData.services}
                  onChange={handleChange}
                  className="select select-bordered border-white/10 rounded-xl text-white"
                >
                  <option value="">Select services</option>

                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>

                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="select select-bordered border-white/10 rounded-xl text-white"
                >
                  <option value="">Budget</option>

                  {budgets.map((budget) => (
                    <option key={budget} value={budget}>
                      {budget}
                    </option>
                  ))}
                </select>

               <select
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="select select-bordered border-white/10 rounded-xl text-white"
              >
                <option value="">Timeline</option>

                {timelines.map((timeline) => (
                  <option key={timeline} value={timeline}>
                    {timeline}
                  </option>
                ))}
              </select>

              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
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
                className="w-full mt-3"
              >
                Send Project Inquiry
              </PrimaryButton>

            </form>

          </div>

          {/* Right */}

          <div className="lg:col-span-2 space-y-5">

            {benefits.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className="rounded-[28px] border border-white/20 bg-[#111827] p-7 hover:border-[#ff7900]/40 transition"
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