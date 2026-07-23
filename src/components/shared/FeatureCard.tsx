import Link from "next/link";
import { LucideIcon, ArrowRight } from "lucide-react";
import clsx from "clsx";

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
        "group flex h-full min-h-[300px] flex-col rounded-3xl border border-[#ff7900]/20 bg-white/5 p-6 shadow-xl backdrop-blur-xl transition-all duration-300 sm:p-7",
        "hover:-translate-y-1.5 hover:border-[#ff7900]/40 hover:shadow-lg hover:shadow-[#ff7900]/10",
        variant === "gradient" && "bg-gradient-to-br from-[#ff7900]/10 via-white/5 to-transparent",
        className
      )}
    >
      {/* Icon */}
      <div className={clsx("mb-6 flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-105 sm:h-16 sm:w-16", iconBg)}>
        <Icon size={28} className="text-[#ff7900]" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold leading-snug text-white sm:text-[22px]">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-4 text-[15px] leading-7 text-gray-400">
        {description}
      </p>

      {/* Learn More */}
      {showArrow && (
        <div className="mt-auto pt-6">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#ff7900] transition-all duration-300 group-hover:gap-3">
            <span>Learn More</span>
            <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
          </div>
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