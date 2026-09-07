import Link from "next/link";

import { cn } from "@/lib/utils";

export function ThemeCompare({
  current,
}: {
  current: "journal" | "mercury" | "studio";
}) {
  const isMercury = current === "mercury";
  const isStudio = current === "studio";

  return (
    <div
      className={cn(
        "fixed right-4 bottom-4 z-50 flex items-center gap-1 rounded-full border px-1.5 py-1 text-[11px] font-semibold tracking-wide uppercase backdrop-blur-md",
        isStudio
          ? "border-white/20 bg-[#5a3424]/90 text-white/80"
          : isMercury
            ? "border-[#23334D] bg-[#161F30]/90 text-[#94A3B8]"
            : "border-rule bg-parchment/95 text-ink/70 shadow-sm",
      )}
    >
      <Link
        href="/"
        className={cn(
          "rounded-full px-2.5 py-1 transition",
          current === "journal"
            ? "bg-navy-link text-white"
            : isStudio
              ? "hover:text-white"
              : "hover:text-[#F1F5F9]",
        )}
      >
        Journal
      </Link>
      <Link
        href="/v2"
        className={cn(
          "rounded-full px-2.5 py-1 transition",
          isMercury
            ? "bg-[#00D2D3] text-[#0A0E17]"
            : isStudio
              ? "hover:text-white"
              : "hover:text-ink",
        )}
      >
        Mercury
      </Link>
      <Link
        href="/v3"
        className={cn(
          "rounded-full px-2.5 py-1 transition",
          isStudio
            ? "bg-[#F28C38] text-white"
            : isMercury
              ? "hover:text-[#F1F5F9]"
              : "hover:text-ink",
        )}
      >
        Studio
      </Link>
    </div>
  );
}
