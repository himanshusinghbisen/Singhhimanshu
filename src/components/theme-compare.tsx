import Link from "next/link";

import { cn } from "@/lib/utils";

export function ThemeCompare({
  current,
}: {
  current: "original" | "mercury";
}) {
  const isMercury = current === "mercury";

  return (
    <div
      className={cn(
        "fixed right-4 bottom-4 z-50 flex items-center gap-1 rounded-full border px-1.5 py-1 text-[11px] font-semibold tracking-wide uppercase backdrop-blur-md",
        isMercury
          ? "border-[#23334D] bg-[#161F30]/90 text-[#94A3B8]"
          : "border-slate-700/80 bg-slate-900/90 text-slate-400",
      )}
    >
      <Link
        href="/"
        className={cn(
          "rounded-full px-2.5 py-1 transition",
          current === "original"
            ? "bg-teal-300 text-slate-900"
            : "hover:text-[#F1F5F9]",
        )}
      >
        Original
      </Link>
      <Link
        href="/v2"
        className={cn(
          "rounded-full px-2.5 py-1 transition",
          isMercury
            ? "bg-[#00D2D3] text-[#0A0E17]"
            : "hover:text-slate-200",
        )}
      >
        Mercury
      </Link>
    </div>
  );
}
