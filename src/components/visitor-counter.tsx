"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const SESSION_KEY = "singhhimanshu-visit-counted";

function formatCount(n: number) {
  return new Intl.NumberFormat("en-US").format(n);
}

export function VisitorCounter({
  theme = "journal",
}: {
  theme?: "journal" | "mercury";
}) {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      try {
        const alreadyCounted =
          typeof window !== "undefined" &&
          sessionStorage.getItem(SESSION_KEY) === "1";

        const res = await fetch("/api/visitors", {
          method: alreadyCounted ? "GET" : "POST",
          cache: "no-store",
        });
        if (!res.ok) return;
        const data = (await res.json()) as { count?: number };
        if (!cancelled && typeof data.count === "number") {
          setCount(data.count);
          if (!alreadyCounted) sessionStorage.setItem(SESSION_KEY, "1");
        }
      } catch {
        /* keep empty state */
      }
    }

    void run();
    return () => {
      cancelled = true;
    };
  }, []);

  if (count === null) {
    return (
      <p
        className={cn(
          "mt-4 font-mono text-[11px] tracking-wide uppercase",
          theme === "mercury" ? "text-[#94A3B8]" : "text-ink/65",
        )}
        aria-hidden
      >
        Visits · …
      </p>
    );
  }

  return (
    <p
      className={cn(
        "mt-4 font-mono text-[11px] tracking-wide uppercase",
        theme === "mercury" ? "text-[#94A3B8]" : "text-ink/65",
      )}
      aria-label={`${formatCount(count)} site visits`}
    >
      <span
        className={cn(
          theme === "mercury" ? "text-[#00D2D3]" : "text-amber-mark",
        )}
      >
        {formatCount(count)}
      </span>
      {" · "}
      visits
    </p>
  );
}
