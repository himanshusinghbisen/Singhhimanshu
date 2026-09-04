import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PrintResumeButton } from "@/components/print-resume-button";
import {
  certifications,
  education,
  experience,
  profile,
  skillGroups,
} from "@/lib/data";

export const metadata: Metadata = {
  title: `Résumé · ${profile.name}`,
  description: `${profile.name} — ${profile.headline}`,
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 print:bg-white">
      <div className="mx-auto max-w-3xl px-6 py-10 print:max-w-none print:px-0 print:py-0">
        <div className="mb-6 flex items-center justify-between print:hidden">
          <Link
            href="/"
            className="text-sm font-medium text-slate-600 hover:text-teal-700"
          >
            ← Back to site
          </Link>
          <PrintResumeButton />
        </div>

        <article className="rounded-xl bg-white p-8 shadow-sm print:rounded-none print:p-0 print:shadow-none sm:p-12">
          <header className="border-b border-slate-200 pb-6">
            <div className="flex items-start gap-5">
              <Image
                src="/images/himanshu-singh-headshot.jpg"
                alt={`${profile.name}, ${profile.title}`}
                width={160}
                height={213}
                className="h-20 w-20 shrink-0 rounded-full object-cover object-[center_18%] ring-1 ring-slate-200 print:h-16 print:w-16"
              />
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                  {profile.name}
                </h1>
                <p className="mt-1 text-base font-medium text-slate-700">
                  {profile.title}
                </p>
              </div>
            </div>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
              {profile.headline}
            </p>
            <p className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-600">
              <span>{profile.location}</span>
              <a
                className="underline decoration-slate-300"
                href={profile.phoneHref}
              >
                {profile.phone}
              </a>
              <a
                className="underline decoration-slate-300"
                href={`mailto:${profile.email}`}
              >
                {profile.email}
              </a>
              <a
                className="underline decoration-slate-300"
                href={profile.linkedin}
              >
                linkedin.com/in/himanshusingh007
              </a>
            </p>
          </header>

          <section className="mt-8">
            <h2 className="text-xs font-bold tracking-[0.2em] text-teal-800 uppercase">
              Summary
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              Healthcare systems architect and senior developer focused on
              payment integrity — modernizing post-pay applications, vendor
              integrations, and recovery workflows. Decade-plus on core payer
              platforms (QNXT, Facets, NASCO). TOGAF 9 Certified. Hands-on in
              C#, .NET, SQL Server, AWS, and Azure. Currently completing an M.S.
              in Data Science (4.0 GPA) to bring statistical rigor to claims
              anomaly detection.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xs font-bold tracking-[0.2em] text-teal-800 uppercase">
              Experience
            </h2>
            <div className="mt-4 space-y-6">
              {experience.map((role) => (
                <div key={role.id}>
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                    <h3 className="text-sm font-semibold text-slate-900">
                      {role.titles?.[0] ?? role.title} · {role.company}
                    </h3>
                    <p className="text-xs font-medium tracking-wide text-slate-500 uppercase">
                      {role.period}
                    </p>
                  </div>
                  {role.subtitle ? (
                    <p className="text-xs text-slate-500">{role.subtitle}</p>
                  ) : null}
                  {role.titles && role.titles.length > 1 ? (
                    <p className="text-xs text-slate-500">
                      {role.titles.slice(1).join(" · ")}
                    </p>
                  ) : null}
                  <p className="mt-1 text-sm text-slate-700">{role.summary}</p>
                  {(role.resumeHighlights ?? role.highlights) ? (
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                      {(role.resumeHighlights ?? role.highlights)?.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-xs font-bold tracking-[0.2em] text-teal-800 uppercase">
              Education
            </h2>
            <ul className="mt-4 space-y-3">
              {education.map((item) => (
                <li key={item.school} className="text-sm">
                  <div className="flex flex-col justify-between gap-1 sm:flex-row">
                    <span>
                      <span className="font-semibold text-slate-900">
                        {item.school}
                      </span>
                      {" — "}
                      {item.credential}
                    </span>
                    <span className="text-xs font-medium tracking-wide text-slate-500 uppercase">
                      {item.period}
                    </span>
                  </div>
                  {item.detail ? (
                    <p className="text-slate-600">{item.detail}</p>
                  ) : null}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xs font-bold tracking-[0.2em] text-teal-800 uppercase">
              Certifications
            </h2>
            <ul className="mt-4 space-y-1.5 text-sm text-slate-700">
              {certifications.map((cert) => (
                <li key={cert.name}>
                  <span className="font-medium text-slate-900">{cert.name}</span>
                  {" — "}
                  {cert.issuer}, {cert.issued}
                  {cert.expires ? ` (expires ${cert.expires})` : ""}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xs font-bold tracking-[0.2em] text-teal-800 uppercase">
              Skills
            </h2>
            <ul className="mt-4 space-y-1.5 text-sm text-slate-700">
              {skillGroups.map((group) => (
                <li key={group.label}>
                  <span className="font-semibold text-slate-900">
                    {group.label}:
                  </span>{" "}
                  {group.skills.join(", ")}
                </li>
              ))}
            </ul>
          </section>
        </article>
      </div>
    </div>
  );
}
