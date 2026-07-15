"use client";

import clsx from "clsx";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;

  center?: boolean;

  className?: string;

  titleClassName?: string;
  descriptionClassName?: string;
}

export default function SectionHeader({
  badge,
  title,
  highlight,
  description,
  center = true,
  className,
  titleClassName,
  descriptionClassName,
}: SectionHeaderProps) {
  return (
    <div
      className={clsx(
        "max-w-4xl",
        center ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {/* Badge */}

      {badge && (
        <div className="badge badge-outline border-[#ff7900]/70 text-[#ff7900] px-5 py-4 mb-6 text-sm font-medium tracking-wider">
          {badge}
        </div>
      )}

      {/* Title */}

      <h2
        className={clsx(
          "text-4xl md:text-5xl  font-bold leading-tight text-white",
          titleClassName
        )}
      >
        {title}{" "}

        {highlight && (
          <span className="text-[#ff7900]">
            {highlight}
          </span>
        )}
      </h2>

      {/* Description */}

      {description && (
        <p
          className={clsx(
            "mt-6 text-lg leading-8 text-white/60",
            descriptionClassName
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}