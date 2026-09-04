import Image from "next/image";
import Link from "next/link";

import { SectionNav } from "@/components/section-nav";
import { SocialLinks } from "@/components/social-links";
import { profile } from "@/lib/data";

export function SiteHeader() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <Link
          href="/"
          className="group inline-block"
          aria-label={`${profile.name} home`}
        >
          <Image
            src="/images/himanshu-singh-headshot.jpg"
            alt={`${profile.name}, ${profile.title}`}
            width={320}
            height={427}
            priority
            className="h-24 w-24 rounded-full object-cover object-[center_18%] ring-2 ring-slate-200/10 transition group-hover:ring-teal-300/60 sm:h-28 sm:w-28"
          />
        </Link>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
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
