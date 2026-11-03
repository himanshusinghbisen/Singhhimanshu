import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Credentials } from "@/components/credentials";
import { ExperienceItem } from "@/components/experience-item";
import { ArrowUpRightIcon } from "@/components/icons";
import { ProfilePageJsonLd } from "@/components/json-ld";
import { SiteNav } from "@/components/site-nav";
import { about, experience, intro, profile } from "@/lib/data";
import { siteUrl } from "@/lib/site";

const description =
  "About Himanshu Singh, a Healthcare Systems Architect focused on payer platforms, claims processing, payment integrity, and enterprise architecture. Based in Dallas–Fort Worth.";

export const metadata: Metadata = {
  title: { absolute: "About Himanshu Singh" },
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    type: "profile",
    url: "/about",
    title: "About Himanshu Singh",
    description,
    firstName: profile.firstName,
    lastName: "Singh",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Himanshu Singh",
    description,
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-parchment text-ink">
      <ProfilePageJsonLd />
      <div className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <Link
          href="/"
          className="font-journal text-lg font-semibold text-ink hover:text-navy-link"
        >
          {profile.name}
        </Link>
        <SiteNav layout="row" />

        <header className="mt-12 border-b border-rule pb-8">
          <div className="flex items-start gap-5">
            <Image
              src="/images/himanshu-singh-headshot.jpg"
              alt="Himanshu Singh, Healthcare Systems Architect"
              width={160}
              height={160}
              priority
              className="h-28 w-28 shrink-0 rounded-full object-cover ring-1 ring-rule sm:h-36 sm:w-36"
            />
            <div>
              <p className="text-xs font-semibold tracking-[0.28em] text-amber-mark uppercase">
                Profile
              </p>
              <h1 className="font-journal mt-3 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
                {profile.name}
              </h1>
              <h2 className="mt-3 text-lg font-medium text-ink/80">
                {profile.positioning}
              </h2>
              <p className="mt-3 text-sm text-ink/65">{profile.locationLabel}</p>
            </div>
          </div>
        </header>

        <section className="mt-10 max-w-prose" aria-label="Biography">
          {intro.map((paragraph) => (
            <p
              key={paragraph.slice(0, 32)}
              className="mb-4 text-[16px] leading-relaxed text-ink/75"
            >
              {paragraph}
            </p>
          ))}
          {about.map((paragraph) => (
            <p
              key={paragraph.slice(0, 32)}
              className="mb-4 text-[16px] leading-relaxed text-ink/75"
            >
              {paragraph}
            </p>
          ))}
        </section>

        <section className="mt-12" aria-label="Work experience">
          <h2 className="font-journal text-2xl font-semibold text-ink">
            Experience
          </h2>
          <ol className="mt-8">
            {experience.map((role) => (
              <ExperienceItem key={role.id} role={role} />
            ))}
          </ol>
          <Link
            href="/resume"
            className="group inline-flex items-center font-semibold text-ink hover:text-navy-link"
          >
            View full résumé
            <ArrowUpRightIcon className="ml-1 h-4 w-4 text-amber-mark transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </section>

        <div className="mt-16">
          <Credentials indexed={false} />
        </div>

        <footer className="border-t border-rule pt-8 text-sm">
          <p className="font-semibold text-ink">Elsewhere</p>
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
            <li>
              <a
                href={profile.linkedin}
                className="font-medium text-navy-link"
                rel="me noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={profile.github}
                className="font-medium text-navy-link"
                rel="me noreferrer"
                target="_blank"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href={profile.goodreads}
                className="font-medium text-navy-link"
                rel="me noreferrer"
                target="_blank"
              >
                Goodreads
              </a>
            </li>
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="font-medium text-navy-link"
              >
                {profile.email}
              </a>
            </li>
            <li>
              <a href={siteUrl} className="font-medium text-navy-link">
                singhhimanshu.com
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}
