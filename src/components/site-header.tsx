import Image from "next/image";
import Link from "next/link";

import { SectionNav } from "@/components/section-nav";
import { SocialLinks } from "@/components/social-links";
import { profile } from "@/lib/data";

export function SiteHeader() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[42%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <Link
          href="/"
          className="group inline-block"
          aria-label={`${profile.name} home`}
        >
          <Image
            src="/images/himanshu-singh-avatar.jpg"
            alt={`${profile.name}, ${profile.title}`}
            width={112}
            height={112}
            sizes="112px"
            priority
            className="h-24 w-24 rounded-full object-cover ring-1 ring-rule shadow-sm transition group-hover:ring-amber-mark sm:h-28 sm:w-28"
          />
        </Link>
        <p className="mt-8 text-xs font-semibold tracking-[0.28em] text-amber-mark uppercase">
          Engineering Journal
        </p>
        <h1 className="font-journal mt-3 text-4xl leading-tight font-semibold tracking-tight text-ink sm:text-5xl">
          <Link href="/">{profile.name}</Link>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-ink/80 sm:text-xl">
          {profile.title}
        </h2>
        <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-ink/60">
          {profile.tagline}
        </p>
        <SectionNav />
      </div>
      <SocialLinks />
    </header>
  );
}
