"use client";

import Image from "next/image";
import Link from "next/link";
import { companyConfig } from "@/config/company";

type LogoSize = "sm" | "md" | "lg";

interface LogoProps {
  size?: LogoSize;
  showText?: boolean;
}

const sizeMap: Record<LogoSize, { width: number; height: number; text: string }> = {
  sm: { width: 32, height: 32, text: "text-base" },
  md: { width: 40, height: 40, text: "text-lg" },
  lg: { width: 48, height: 48, text: "text-xl" },
};

export default function Logo({ size = "md", showText = false }: LogoProps) {
  const dims = sizeMap[size];

  return (
    <Link href="/" className="flex items-center space-x-3 focus:outline-none">
      {companyConfig.logo.useIcon === false && companyConfig.logo.image ? (
        <Image
          src={companyConfig.logo.image}
          alt={companyConfig.logo.alt}
          width={dims.width}
          height={dims.height}
          className="rounded-md object-contain bg-transparent"
          priority={size === "lg"}
        />
      ) : (
        <div
          className="flex items-center justify-center rounded-md bg-yellow-400 text-black"
          style={{ width: dims.width, height: dims.height }}
          aria-label={companyConfig.logo.alt}
        >
          {/* Fallback simple glyph */}
          <span className="font-extrabold">M</span>
        </div>
      )}
      {showText && (
        <div className="leading-tight">
          <div className={`font-extrabold tracking-tight text-white ${dims.text}`}>
            {companyConfig.shortName}
          </div>
          <div className="text-[10px] uppercase tracking-wide text-yellow-400 font-semibold">
            {companyConfig.tagline}
          </div>
        </div>
      )}
    </Link>
  );
}
