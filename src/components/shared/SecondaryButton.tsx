"use client";

import Link from "next/link";
import clsx from "clsx";
import { Loader2, LucideIcon } from "lucide-react";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface SecondaryButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;

  href?: string;

  external?: boolean;

  loading?: boolean;

  fullWidth?: boolean;

  size?: "sm" | "md" | "lg";

  leftIcon?: LucideIcon;

  rightIcon?: LucideIcon;

  className?: string;
}

export default function SecondaryButton({
  children,
  href,
  external = false,
  loading = false,
  disabled = false,
  fullWidth = false,
  size = "md",
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  className,
  ...props
}: SecondaryButtonProps) {
  const buttonClass = clsx(
    "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-300",
    "border border-[#ff7900]/30 bg-white/5 text-white backdrop-blur-md",
    "hover:border-[#ff7900]/60 hover:bg-[#ff7900]/5 hover:text-[#ff7900]",
    "hover:-translate-y-1 hover:shadow-md hover:shadow-[#ff7900]/10",
    "disabled:opacity-60 disabled:cursor-not-allowed",

    {
      "px-4 py-2 text-sm": size === "sm",
      "px-6 py-3 text-base": size === "md",
      "px-8 py-4 text-lg": size === "lg",

      "w-full": fullWidth,
    },

    className
  );

  const content = (
    <>
      {loading ? (
        <Loader2 className="animate-spin" size={18} />
      ) : (
        LeftIcon && <LeftIcon size={18} />
      )}

      {children}

      {!loading && RightIcon && <RightIcon size={18} />}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClass}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={buttonClass}>
        {content}
      </Link>
    );
  }

  return (
    <button
      disabled={disabled || loading}
      className={buttonClass}
      {...props}
    >
      {content}
    </button>
  );
}