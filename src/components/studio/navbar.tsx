import Link from "next/link";

import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { profile } from "@/lib/data";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/v3/experience", label: "Experience" },
  { href: "/v3/blog", label: "Blog" },
  { href: "/v3/about", label: "About" },
] as const;

export function StudioNavbar({ active }: { active?: string }) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#6b3f2c]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/v3"
          className="text-sm font-semibold tracking-wide text-white transition hover:text-[#F28C38]"
        >
          {profile.name}
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 text-sm font-medium text-white/80">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition hover:text-white",
                active === item.label && "text-[#F28C38]",
              )}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 transition hover:text-white"
            aria-label="GitHub"
          >
            <GitHubIcon className="h-4 w-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 transition hover:text-white"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="h-4 w-4" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
