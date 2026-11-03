"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { profile } from "@/lib/data";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/writing", label: "Writing" },
  { href: `mailto:${profile.email}`, label: "Contact" },
];

function isCurrent(pathname: string, href: string) {
  if (href.startsWith("mailto:")) return false;
  if (href === "/") return pathname === "/";
  if (href.startsWith("/#")) return false;
  if (href === "/writing") {
    return (
      pathname === "/writing" ||
      pathname.startsWith("/writing/") ||
      pathname.startsWith("/blog")
    );
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteNav({ layout = "sidebar" }: { layout?: "sidebar" | "row" }) {
  const pathname = usePathname();
  const stacked = layout === "sidebar";

  return (
    <nav aria-label="Primary">
      <ul
        className={cn(
          "mt-8 flex flex-wrap gap-x-5 gap-y-2",
          stacked && "lg:mt-12 lg:w-max lg:flex-col lg:gap-0",
        )}
      >
        {links.map((item) => {
          const current = isCurrent(pathname, item.href);
          const className = cn(
            "text-xs font-bold tracking-[0.18em] uppercase transition-colors",
            current ? "text-ink" : "text-ink/65 hover:text-ink",
          );

          return (
            <li key={item.label}>
              {item.href.startsWith("/") ? (
                <Link
                  href={item.href}
                  className={cn(
                    "group flex items-center gap-3 py-1",
                    stacked && "lg:py-2",
                  )}
                  aria-current={current ? "page" : undefined}
                >
                  <span
                    className={cn(
                      "hidden h-px",
                      stacked && "lg:block",
                      current
                        ? "w-10 bg-amber-mark"
                        : "w-5 bg-rule group-hover:w-10 group-hover:bg-amber-mark",
                    )}
                  />
                  <span className={className}>{item.label}</span>
                </Link>
              ) : (
                <a
                  href={item.href}
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
                  <span className={className}>{item.label}</span>
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
