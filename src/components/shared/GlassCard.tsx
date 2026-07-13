"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface GlassCardProps {
  children: ReactNode;

  className?: string;

  hover?: boolean;

  glow?: boolean;

  gradient?: boolean;

  padding?: "none" | "sm" | "md" | "lg";

  rounded?: "xl" | "2xl" | "3xl";

  border?: boolean;
}

export default function GlassCard({
  children,
  className,

  hover = true,
  glow = false,
  gradient = false,

  padding = "lg",

  rounded = "3xl",

  border = true,
}: GlassCardProps) {
  return (
    <div
      className={clsx(
        "relative overflow-hidden backdrop-blur-xl transition-all duration-300",

        "bg-white/5",

        border && "border border-white/10",

        hover &&
          "hover:translate-y-1 hover:border-[#ff7900]/40 hover:shadow-lg hover:shadow-[#ff7900]/10",

        glow && "before:absolute before:inset-0 before:bg-[#ff7900]/5",

        gradient &&
          "bg-gradient-to-br from-[#ff7900]/10 to-transparent",

        {
          "rounded-xl": rounded === "xl",
          "rounded-2xl": rounded === "2xl",
          "rounded-3xl": rounded === "3xl",

          "p-0": padding === "none",
          "p-4": padding === "sm",
          "p-6": padding === "md",
          "p-8": padding === "lg",
        },

        className
      )}
    >
      {children}
    </div>
  );
}