import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PrintResumeButton } from "@/components/print-resume-button";
import { StudioNavbar } from "@/components/studio/navbar";
import {
  certifications,
  education,
  experience,
  profile,
  skillGroups,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Résumé",
  description: `Résumé for ${profile.name}.`,
};

export default function StudioResumePage() {
  return (
    <>
      <StudioNavbar />
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 print:max-w-none print:px-0 print:py-0">
        <div className="mb-6 flex items-center justify-between gap-4 print:hidden">
          <Link
            href="/v3"
            className="text-sm font-medium text-white/70 hover:text-[#F28C38]"
          >
            ← Studio home
          </Link>
          <PrintResumeButton />
        </div>

        <article className="rounded-2xl border border-white/15 bg-white/8 p-8 backdrop-blur-md print:rounded-none print:border-0 print:bg-white print:p-0 print:text-slate-800">
          <header className="border-b border-white/15 pb-6 print:border-slate-200">
            <div className="flex items-start gap-5">
              <Image
                src="/images/himanshu-singh-avatar.jpg"
                alt={`${profile.name}, ${profile.title}`}
                width={80}
                height={80}
                className="h-20 w-20 shrink-0 rounded-full object-cover ring-2 ring-white/20 print:ring-slate-200"
              />
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-white print:text-slate-900">
                  {profile.name}
                </h1>
                <p className="mt-1 text-base font-medium text-[#F28C38] print:text-slate-700">
                  {profile.title}
                </p>
              </div>
            </div>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70 print:text-slate-600">
              {profile.headline}
            </p>
            <p className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-white/70 print:text-slate-600">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <a href={profile.phoneHref}>{profile.phone}</a>
              <a href={profile.linkedin}>linkedin.com/in/himanshusingh007</a>
              <a href={profile.github}>github.com/himanshusinghbisen</a>
              <a href={profile.goodreads}>goodreads.com/singhhimanshu</a>
            </p>
          </header>

          <section className="mt-8">
            <h2 className="font-mono text-[11px] font-bold tracking-[0.2em] text-[#F28C38] uppercase print:text-orange-800">
              Summary
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/80 print:text-slate-700">
              Healthcare Systems Architect and software engineer focused on
              payment integrity and claims platforms (QNXT, Facets, NASCO).
              TOGAF® 9 Certified. Hands-on in C#, .NET, SQL Server, AWS, and
              modernizing recovery workflows for production payer systems.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="font-mono text-[11px] font-bold tracking-[0.2em] text-[#F28C38] uppercase print:text-orange-800">
              Experience
            </h2>
            <ul className="mt-4 space-y-6">
              {experience.map((role) => (
                <li key={role.id}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
                    <div>
                      <h3 className="text-sm font-semibold text-white print:text-slate-900">
                        {role.title}
                      </h3>
                      <p className="font-mono text-[11px] font-medium tracking-wide text-white/60 uppercase">
                        {role.company}
                        {role.subtitle ? ` · ${role.subtitle}` : ""}
                      </p>
                    </div>
                    <p className="text-xs text-white/55 print:text-slate-500">
                      {role.period}
                      {role.location ? ` · ${role.location}` : ""}
                    </p>
                  </div>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/70 print:text-slate-700">
                    {(role.resumeHighlights ?? role.highlights ?? [role.summary]).map(
                      (item) => (
                        <li key={item}>{item}</li>
                      ),
                    )}
                  </ul>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="font-mono text-[11px] font-bold tracking-[0.2em] text-[#F28C38] uppercase print:text-orange-800">
              Education
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-white/75 print:text-slate-700">
              {education.map((item) => (
                <li key={item.school}>
                  <span className="font-semibold text-white print:text-slate-900">
                    {item.school}
                  </span>
                  {" — "}
                  {item.credential}
                  <span className="ml-2 font-mono text-[11px] tracking-wide text-white/55 uppercase">
                    {item.period}
                  </span>
                  {item.detail ? (
                    <p className="text-white/60">{item.detail}</p>
                  ) : null}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="font-mono text-[11px] font-bold tracking-[0.2em] text-[#F28C38] uppercase print:text-orange-800">
              Certifications
            </h2>
            <ul className="mt-4 space-y-1.5 text-sm text-white/75 print:text-slate-700">
              {certifications.map((item) => (
                <li key={item.name}>
                  <span className="font-medium text-white print:text-slate-900">
                    {item.name}
                  </span>
                  {` — ${item.issuer} (${item.issued})`}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="font-mono text-[11px] font-bold tracking-[0.2em] text-[#F28C38] uppercase print:text-orange-800">
              Skills
            </h2>
            <ul className="mt-4 space-y-1.5 text-sm text-white/75 print:text-slate-700">
              {skillGroups.map((group) => (
                <li key={group.label}>
                  <span className="font-semibold text-white print:text-slate-900">
                    {group.label}:
                  </span>{" "}
                  {group.skills.join(", ")}
                </li>
              ))}
            </ul>
          </section>
        </article>
      </main>
    </>
  );
}
