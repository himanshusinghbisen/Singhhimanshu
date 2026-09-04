"use client";

import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/use-active-section";

export function SectionNav() {
  const activeId = useActiveSection();

  return (
    <nav className="nav hidden lg:block" aria-label="In-page">
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
                      ? "w-16 bg-slate-200"
                      : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200",
                  )}
                />
                <span
                  className={cn(
                    "text-xs font-bold tracking-widest uppercase transition-colors",
                    isActive
                      ? "text-slate-200"
                      : "text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200",
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
