"use client";

import SectionHeader from "../shared/SectionHeader";
import { faqs } from "@/data/faqs";

export default function ProjectsFAQ() {
  return (
    <section className="bg-[#0B0F19] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        <SectionHeader
          badge="❓ Frequently Asked Questions"
          title="Have Questions?"
          highlight="We've Got Answers"
          description="Here are some common questions clients ask before starting a project with us."
        />

        <div className="grid lg:grid-cols-2 gap-6 mt-16">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="collapse collapse-arrow rounded-[28px] border border-white/10 bg-[#111827] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#ff7900]/40 hover:shadow-[0_10px_40px_rgba(200,111,0,0.12)]"
            >
              <input
                type="radio"
                name="project-faq"
                defaultChecked={index === 0}
              />

              <div className="collapse-title text-lg font-semibold text-white group-hover:text-[#ff7900] transition-colors">
                {faq.question}
              </div>

              <div className="collapse-content">
                <p className="text-gray-400 leading-7">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}