"use client";

import Link from "next/link";
import { LucideIcon, ArrowRight } from "lucide-react";
import clsx from "clsx";
import SecondaryButton from "./SecondaryButton";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;

  href?: string;

  variant?: "default" | "gradient";

  iconBg?: string;

  className?: string;

  showArrow?: boolean;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  href,
  variant = "default",
  iconBg = "bg-[#ff7900]/10",
  className,
  showArrow = false,
}: FeatureCardProps) {
  const Card = (
    <div
      className={clsx(
        "group h-auto rounded-3xl border border-[#ff7900]/20 shadow-xl bg-white/5 backdrop-blur-xl p-7 transition-all duration-300",
        "hover:-translate-y-2 hover:border-[#ff7900]/40 hover:shadow-lg hover:shadow-[#ff7900]/10",
        variant === "gradient" &&
          "bg-gradient-to-br from-[#ff7900]/10 via-white/5 to-transparent",
        className
      )}
    >
      {/* Icon */}
      <div
        className={clsx(
          "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300",
          iconBg,
          "group-hover:scale-110"
        )}
      >
        <Icon size={30} className="text-[#ff7900]" />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-semibold text-white mb-4">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 leading-7">
        {description}
      </p>

      {/* Arrow */}
      {showArrow && (
        <div className="mt-7 flex items-center gap-2 text-[#ff7900] opacity-0 group-hover:opacity-100 transition-all duration-300">
          <SecondaryButton fullWidth
           rightIcon={ArrowRight}
          >
            Learn More
        </SecondaryButton>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {Card}
      </Link>
    );
  }

  return Card;
}