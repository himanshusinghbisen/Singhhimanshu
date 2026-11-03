import type { ReactNode } from "react";
import Link from "next/link";

import { SiteNav } from "@/components/site-nav";
import { profile } from "@/lib/data";

export function PageShell({
  kicker,
  title,
  lede,
  children,
}: {
  kicker: string;
  title: string;
  lede?: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-parchment text-ink">
      <div className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <Link
          href="/"
          className="font-journal text-lg font-semibold text-ink hover:text-navy-link"
        >
          {profile.name}
        </Link>
        <SiteNav layout="row" />
        <header className="mt-12 border-b border-rule pb-8">
          <p className="text-xs font-semibold tracking-[0.28em] text-amber-mark uppercase">
            {kicker}
          </p>
          <h1 className="font-journal mt-3 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            {title}
          </h1>
          {lede ? (
            <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-ink/70">
              {lede}
            </p>
          ) : null}
        </header>
        {children}
      </div>
    </div>
  );
}
