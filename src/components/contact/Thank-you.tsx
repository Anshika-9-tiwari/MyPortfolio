"use client"
import PrimaryButton from "@/components/shared/PrimaryButton";
import SecondaryButton from "@/components/shared/SecondaryButton";
import {
  CheckCircle2,
  ArrowRight,
  Clock3,
  Mail,
  ArrowLeft,
} from "lucide-react";


export default function ThankYouPage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0B0F19] flex items-center justify-center pt-30 pb-18 mt-10">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff7900]/15 blur-[150px]" />

      <div className="relative max-w-3xl w-full px-8">

        <div className="rounded-[36px] border border-[#ff7900]/20 bg-[#111827]/80 backdrop-blur-xl p-10 md:p-14 text-center">

          {/* Success Icon */}

          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#ff7900]/10 border border-[#ff7900]/20">

            <CheckCircle2
              size={54}
              className="text-[#ff7900]"
            />

          </div>

          {/* Heading */}

          <h1 className="mt-8 text-4xl md:text-5xl font-bold text-white">
            Thank You!
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Your inquiry has been submitted successfully.
            Thank you for contacting{" "}
            <span className="font-semibold text-[#ff7900]">
              UMAKAN Technologies
            </span>.
              Need immediate assistance? Feel free to reach out via WhatsApp or call us directly.
          </p>

          {/* Status Cards */}

          <div className="grid gap-4 md:grid-cols-2 mt-10">

            <div className="rounded-2xl border border-[#ff7900]/20 bg-white/5 p-5 text-left">

              <div className="flex items-center gap-3">

                <Clock3 className="text-[#ff7900]" />

                <h3 className="font-semibold text-white">
                  Response Time
                </h3>

              </div>

              <p className="mt-3 text-gray-300 text-sm leading-6">

                We usually respond within
                <span className="text-white font-medium">
                  {" "}24 business hours.
                </span>

              </p>

            </div>

            <div className="rounded-2xl border border-[#ff7900]/20 bg-white/5 p-5 text-left">

              <div className="flex items-center gap-3">

                <Mail className="text-[#ff7900]" />

                <h3 className="font-semibold text-white">
                  Email Confirmation
                </h3>

              </div>

              <p className="mt-3 text-gray-300 text-sm leading-6">
                Please check your inbox / spam folder for a confirmation email.
              </p>

            </div>

          </div>

          {/* CTA Buttons */}

          <div className="flex flex-wrap justify-center gap-4 mt-12">

            <PrimaryButton 
              href="/"
              leftIcon={ArrowLeft}
              >
              Back to Home
            </PrimaryButton>

            <SecondaryButton
              href="https://wa.me/919540838797"
              rightIcon={ArrowRight}
              external
            >
              Message
            </SecondaryButton>

          </div>

        </div>

      </div>

    </section>
  );
}