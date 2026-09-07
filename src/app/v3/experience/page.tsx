import type { Metadata } from "next";
import Link from "next/link";

import { StudioNavbar } from "@/components/studio/navbar";
import { experience, profile } from "@/lib/data";

export const metadata: Metadata = {
  title: "Experience",
  description: `Professional experience for ${profile.name}.`,
};

export default function StudioExperiencePage() {
  return (
    <>
      <StudioNavbar active="Experience" />
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="text-xs font-semibold tracking-[0.24em] text-[#F28C38] uppercase">
          Career
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-white">
          Professional Experience
        </h1>
        <p className="mt-4 max-w-2xl text-white/75">
          {profile.tagline}
        </p>
        <div className="mt-6">
          <Link
            href="/v3/resume"
            className="text-sm font-semibold text-[#F28C38] hover:text-[#ff9a4a]"
          >
            View full résumé →
          </Link>
        </div>

        <ol className="mt-12 space-y-8">
          {experience.map((role) => (
            <li
              key={role.id}
              className="rounded-2xl border border-white/15 bg-white/8 p-6 backdrop-blur-md"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-white">
                    {role.title}
                  </h2>
                  <p className="mt-1 text-[#F28C38]">
                    <a
                      href={role.href}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline"
                    >
                      {role.company}
                    </a>
                    {role.subtitle ? ` · ${role.subtitle}` : ""}
                  </p>
                </div>
                <div className="text-sm text-white/60 sm:text-right">
                  <p>{role.period}</p>
                  {role.location ? <p>{role.location}</p> : null}
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/75">
                {role.summary}
              </p>
              {role.highlights?.length ? (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/70">
                  {role.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
              <div className="mt-4 flex flex-wrap gap-2">
                {role.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/15 px-2.5 py-1 text-[11px] text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </main>
    </>
  );
}
