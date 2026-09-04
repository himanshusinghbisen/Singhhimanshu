import Link from "next/link";

import { SectionNav } from "@/components/section-nav";
import { SocialLinks } from "@/components/social-links";
import { profile } from "@/lib/data";

export function SiteHeader() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <Link href="/">{profile.name}</Link>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          {profile.title}
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-slate-400">
          {profile.tagline}
        </p>
        <SectionNav />
      </div>
      <SocialLinks />
    </header>
  );
}
