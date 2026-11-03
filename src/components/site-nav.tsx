"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";

import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "writing", label: "Writing" },
  { id: "credentials", label: "Credentials" },
  { id: "contact", label: "Contact" },
] as const;

const sectionIds = sections.map((section) => section.id);

export function SiteNav({ layout = "sidebar" }: { layout?: "sidebar" | "row" }) {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const activeId = useActiveSection(sectionIds);
  const stacked = layout === "sidebar";

  const onHomeClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!onHome) return;
    event.preventDefault();
    if (window.location.hash) {
      window.history.pushState(null, "", "/");
    }
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <nav aria-label="Primary">
      <ul
        className={cn(
          "mt-8 flex max-w-full flex-wrap gap-x-4 gap-y-2 sm:gap-x-5",
          stacked && "lg:mt-12 lg:w-max lg:flex-col lg:gap-0",
        )}
      >
        <li>
          <Link
            href="/"
            onClick={onHomeClick}
            className={cn(
              "group flex items-center gap-3 py-1",
              stacked && "lg:py-2",
            )}
          >
            <span
              className={cn(
                "hidden h-px w-5 bg-rule group-hover:w-10 group-hover:bg-amber-mark",
                stacked && "lg:block",
              )}
            />
            <span className="text-xs font-bold tracking-[0.18em] text-ink/65 uppercase transition-colors group-hover:text-ink">
              Home
            </span>
          </Link>
        </li>
        {sections.map((section) => {
          const active = onHome && activeId === section.id;
          const href = onHome ? `#${section.id}` : `/#${section.id}`;
          return (
            <li key={section.id}>
              <a
                href={href}
                className={cn(
                  "group flex items-center gap-3 py-1",
                  stacked && "lg:py-2",
                )}
                aria-current={active ? "location" : undefined}
              >
                <span
                  className={cn(
                    "hidden h-px",
                    stacked && "lg:block",
                    active
                      ? "w-10 bg-amber-mark"
                      : "w-5 bg-rule group-hover:w-10 group-hover:bg-amber-mark",
                  )}
                />
                <span
                  className={cn(
                    "text-xs font-bold tracking-[0.18em] uppercase transition-colors",
                    active
                      ? "text-ink"
                      : "text-ink/65 group-hover:text-ink",
                  )}
                >
                  {section.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
