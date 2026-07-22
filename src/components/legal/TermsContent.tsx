"use client"
import Link from "next/link";
import {Mail, ArrowRight, FileText,} from 'lucide-react'
import { sections } from "@/data/terms-and-conditions";

export default function TermsContent() {
  return (
    <main className="bg-[#0B0F19] text-white">
      {/* Hero */}

      <section className="relative overflow-hidden border-b border-white/10 pt-36 pb-16 md:pt-40 md:pb-20">
        <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[#ff7900]/10 blur-[140px]" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#ff7900]/30 bg-[#ff7900]/5 px-4 py-2 text-sm font-medium text-[#ff7900]">
            <FileText size={16} />
            Legal Information
          </div>

          <h1 className="mt-7 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Terms &{" "}
            <span className="text-[#ff7900]">
              Conditions
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 md:text-lg md:leading-8">
            Clear and transparent terms for using our website and
            working with UMAKAN Technologies.
          </p>

          <p className="mt-5 text-sm text-gray-500">
            Last updated: July 2026
          </p>
        </div>
      </section>

      {/* Terms */}

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="space-y-5">
            {sections.map((section, index) => {
              const Icon = section.icon;

              return (
                <article
                  key={section.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-[#ff7900]/30 md:p-8"
                >
                  <div className="flex gap-5">
                    <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#ff7900]/20 bg-[#ff7900]/10 sm:flex">
                      <Icon
                        size={22}
                        className="text-[#ff7900]"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-semibold text-[#ff7900]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <h2 className="text-xl font-semibold text-white md:text-2xl">
                          {section.title}
                        </h2>
                      </div>

                      <p className="mt-4 text-[15px] leading-7 text-gray-400 md:text-base md:leading-8">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Changes */}

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-[#ff7900]">
                16
              </span>

              <h2 className="text-xl font-semibold md:text-2xl">
                Changes to These Terms
              </h2>
            </div>

            <p className="mt-4 leading-8 text-gray-400">
              UMAKAN Technologies may update these Terms & Conditions
              when our services, business practices, or legal
              requirements change. The latest version will always be
              published on this page with an updated revision date.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}

      <section className="border-t border-white/10 pb-20 pt-10 md:pb-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative overflow-hidden rounded-[28px] border border-[#ff7900]/20 bg-gradient-to-br from-[#151A24] to-[#10141C] p-8 md:p-12">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#ff7900]/10 blur-[90px]" />

            <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="flex items-center gap-2 text-[#ff7900]">
                  <Mail size={19} />

                  <span className="text-sm font-semibold">
                    Need Clarification?
                  </span>
                </div>

                <h2 className="mt-4 text-2xl font-bold md:text-3xl">
                  Questions About These Terms?
                </h2>

                <p className="mt-3 max-w-xl leading-7 text-gray-400">
                  Contact us if you have questions about our project,
                  payment, support, or service terms.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#ff7900] px-6 py-3.5 font-semibold text-white transition hover:bg-[#ff8b22]"
              >
                Contact Us
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}