"use client";

import { useActiveSection } from "@/hooks/use-active-section";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";

export function MercuryNav() {
  const activeId = useActiveSection();

  return (
    <nav className="hidden lg:block" aria-label="In-page">
      <ul className="mt-16 w-max">
        {navItems.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="group flex items-center py-3"
                aria-current={isActive ? "location" : undefined}
              >
                <span
                  className={cn(
                    "mr-4 h-px transition-all motion-reduce:transition-none",
                    isActive
                      ? "w-16 bg-[#00D2D3]"
                      : "w-8 bg-[#23334D] group-hover:w-16 group-hover:bg-[#00D2D3] group-focus-visible:w-16 group-focus-visible:bg-[#00D2D3]",
                  )}
                />
                <span
                  className={cn(
                    "font-mono text-[11px] font-semibold tracking-[0.22em] uppercase transition-colors",
                    isActive
                      ? "text-[#F1F5F9]"
                      : "text-[#94A3B8] group-hover:text-[#F1F5F9] group-focus-visible:text-[#F1F5F9]",
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
