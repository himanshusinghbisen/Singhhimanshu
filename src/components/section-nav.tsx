"use client";

import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/use-active-section";

export function SectionNav({
  variant = "sidebar",
}: {
  variant?: "sidebar" | "masthead";
}) {
  const activeId = useActiveSection();

  if (variant === "masthead") {
    return (
      <nav aria-label="In-page" className="mt-8">
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {navItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={cn(
                    "text-sm font-semibold tracking-wide uppercase transition-colors",
                    isActive
                      ? "text-navy-link"
                      : "text-ink/70 hover:text-navy-link",
                  )}
                  aria-current={isActive ? "location" : undefined}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }

  return (
    <nav className="hidden lg:block" aria-label="In-page">
      <ul className="mt-12 w-max space-y-1">
        {navItems.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="group flex items-center gap-3 py-2"
                aria-current={isActive ? "location" : undefined}
              >
                <span
                  className={cn(
                    "h-px transition-all motion-reduce:transition-none",
                    isActive
                      ? "w-10 bg-amber-mark"
                      : "w-5 bg-rule group-hover:w-10 group-hover:bg-amber-mark",
                  )}
                />
                <span
                  className={cn(
                    "text-xs font-bold tracking-[0.18em] uppercase transition-colors",
                    isActive
                      ? "text-ink"
                      : "text-ink/65 group-hover:text-ink",
                  )}
                >
                  {item.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
