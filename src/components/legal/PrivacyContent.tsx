"use client"
import Link from "next/link";
import {
  ShieldCheck,
  Database,
  UserRound,
  FileText,
  LockKeyhole,
  Share2,
  Cookie,
  Clock3,
  UserCheck,
  ExternalLink,
  RefreshCcw,
  Mail,
  ArrowRight,
} from "lucide-react";

const sections = [
  {
    icon: UserRound,
    title: "Information We Collect",
    content:
      "When you contact UMAKAN Technologies, we may collect information such as your name, email address, phone number, company name, selected service, estimated budget, preferred timeline, and project requirements.",
  },
  {
    icon: FileText,
    title: "How We Use Your Information",
    content:
      "We use the information you provide to respond to inquiries, understand project requirements, prepare quotations, communicate about services, provide customer support, and improve our website and business operations.",
  },
  {
    icon: Database,
    title: "How We Store Information",
    content:
      "Information submitted through our website may be securely stored using our database and hosting infrastructure. We take reasonable technical and organizational measures to protect stored information against unauthorized access, misuse, alteration, or disclosure.",
  },
  {
    icon: LockKeyhole,
    title: "Data Security",
    content:
      "We use reasonable security practices to protect personal information. However, no internet transmission or electronic storage system can be guaranteed to be completely secure.",
  },
  {
    icon: Share2,
    title: "Sharing of Information",
    content:
      "UMAKAN Technologies does not sell or rent your personal information. Information may be shared with trusted service providers when necessary to operate our website, deliver services, maintain infrastructure, or comply with applicable legal requirements.",
  },
  {
    icon: ExternalLink,
    title: "Third-Party Services",
    content:
      "Our website and projects may use third-party services such as hosting platforms, databases, analytics tools, email providers, APIs, or external websites. These providers may process information according to their own privacy policies and terms.",
  },
  {
    icon: Cookie,
    title: "Cookies & Analytics",
    content:
      "Our website may use essential cookies and, where implemented, analytics technologies to understand website usage, improve performance, and enhance the user experience. Additional information will be provided if optional tracking technologies are introduced.",
  },
  {
    icon: Clock3,
    title: "Data Retention",
    content:
      "We retain personal information only for as long as reasonably necessary for business communication, project management, legal obligations, record keeping, or the purposes for which the information was collected.",
  },
  {
    icon: UserCheck,
    title: "Your Information",
    content:
      "You may contact us if you wish to request access to, correction of, or deletion of personal information you have provided, subject to applicable legal requirements and legitimate business record-keeping obligations.",
  },
  {
    icon: ShieldCheck,
    title: "Children's Privacy",
    content:
      "Our website and professional services are not specifically directed toward children. We do not knowingly seek to collect personal information from children through our project inquiry forms.",
  },
  {
    icon: RefreshCcw,
    title: "Changes to This Policy",
    content:
      "We may update this Privacy Policy when our services, technologies, data practices, or legal requirements change. The latest version will be published on this page with an updated revision date.",
  },
];

export default function PrivacyContent() {
  return (
    <main className="bg-[#0B0F19] text-white">

      {/* HERO */}

      <section className="relative overflow-hidden border-b border-white/10 pt-36 pb-16 md:pt-40 md:pb-20">

        <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[#ff7900]/10 blur-[140px]" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-[#ff7900]/30 bg-[#ff7900]/5 px-4 py-2 text-sm font-medium text-[#ff7900]">
            <ShieldCheck size={16} />
            Privacy & Data
          </div>

          <h1 className="mt-7 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Privacy{" "}
            <span className="text-[#ff7900]">
              Policy
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 md:text-lg md:leading-8">
            Learn how UMAKAN Technologies collects, uses and protects
            information submitted through our website.
          </p>

          <p className="mt-5 text-sm text-gray-500">
            Last updated: July 2026
          </p>

        </div>

      </section>

      {/* CONTENT */}

      <section className="py-16 md:py-20">

        <div className="mx-auto max-w-5xl px-6 lg:px-10">

          <div className="mb-10 rounded-2xl border border-[#ff7900]/20 bg-[#ff7900]/5 p-6 md:p-8">

            <div className="flex gap-4">

              <ShieldCheck
                className="mt-1 shrink-0 text-[#ff7900]"
                size={24}
              />

              <div>

                <h2 className="text-xl font-semibold">
                  Your Privacy Matters
                </h2>

                <p className="mt-3 leading-7 text-gray-400">
                  We collect only the information reasonably required
                  to communicate with potential clients, understand
                  project requirements, and provide our services.
                </p>

              </div>

            </div>

          </div>

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

                        <h2 className="text-xl font-semibold md:text-2xl">
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

        </div>

      </section>

      {/* CONTACT */}

      <section className="border-t border-white/10 pb-20 pt-10 md:pb-24">

        <div className="mx-auto max-w-5xl px-6">

          <div className="relative overflow-hidden rounded-[28px] border border-[#ff7900]/20 bg-gradient-to-br from-[#151A24] to-[#10141C] p-8 md:p-12">

            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#ff7900]/10 blur-[90px]" />

            <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

              <div>

                <div className="flex items-center gap-2 text-[#ff7900]">

                  <Mail size={19} />

                  <span className="text-sm font-semibold">
                    Privacy Questions
                  </span>

                </div>

                <h2 className="mt-4 text-2xl font-bold md:text-3xl">
                  Have a Question About Your Data?
                </h2>

                <p className="mt-3 max-w-xl leading-7 text-gray-400">
                  Contact UMAKAN Technologies regarding information
                  you've submitted through our website.
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