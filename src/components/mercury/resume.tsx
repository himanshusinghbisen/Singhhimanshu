import Image from "next/image";
import Link from "next/link";

import { PrintResumeButton } from "@/components/print-resume-button";
import { ThemeCompare } from "@/components/theme-compare";
import {
  certifications,
  education,
  experience,
  profile,
  skillGroups,
} from "@/lib/data";

export function MercuryResume() {
  return (
    <div className="min-h-screen bg-[#0A0E17] text-[#94A3B8] print:bg-white print:text-slate-800">
      <div className="mx-auto max-w-3xl px-6 py-10 print:max-w-none print:px-0 print:py-0">
        <div className="mb-6 flex items-center justify-between print:hidden">
          <Link
            href="/v2"
            className="text-sm font-medium text-[#94A3B8] hover:text-[#00D2D3]"
          >
            ← Back to mercury theme
          </Link>
          <PrintResumeButton />
        </div>

        <article className="rounded-xl border border-[#23334D] bg-[#161F30] p-8 print:rounded-none print:border-0 print:bg-white print:p-0 sm:p-12">
          <header className="border-b border-[#23334D] pb-6 print:border-slate-200">
            <div className="flex items-start gap-5">
              <Image
                src="/images/himanshu-singh-avatar.jpg"
                alt={`${profile.name}, ${profile.title}`}
                width={80}
                height={80}
                sizes="80px"
                className="h-20 w-20 shrink-0 rounded-full object-cover ring-2 ring-[#23334D] print:h-16 print:w-16 print:ring-slate-200"
              />
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-[#F1F5F9] print:text-slate-900">
                  {profile.name}
                </h1>
                <p className="mt-1 text-base font-medium text-[#00D2D3] print:text-slate-700">
                  {profile.title}
                </p>
              </div>
            </div>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#94A3B8] print:text-slate-600">
              {profile.headline}
            </p>
            <p className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-[#94A3B8] print:text-slate-600">
              <span>{profile.locationLabel}</span>
              <a href={profile.phoneHref}>{profile.phone}</a>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <a href={profile.linkedin}>linkedin.com/in/himanshusingh007</a>
              <a href={profile.github}>github.com/himanshusinghbisen</a>
              <a href={profile.goodreads}>goodreads.com/singhhimanshu</a>
            </p>
          </header>

          <section className="mt-8">
            <h2 className="font-mono text-[11px] font-bold tracking-[0.2em] text-[#00D2D3] uppercase print:text-teal-800">
              Summary
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#F1F5F9]/90 print:text-slate-700">
              Healthcare systems architect and senior developer focused on
              payment integrity — modernizing post-pay applications, vendor
              integrations, and recovery workflows. Decade-plus on core payer
              platforms (QNXT, Facets, NASCO). TOGAF® 9 Certified. Hands-on in
              C#, .NET, SQL Server, AWS, and Azure. Currently completing an M.S.
              in Data Science (4.0 GPA) to bring statistical rigor to claims
              anomaly detection.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="font-mono text-[11px] font-bold tracking-[0.2em] text-[#00D2D3] uppercase print:text-teal-800">
              Experience
            </h2>
            <div className="mt-4 space-y-6">
              {experience.map((role) => (
                <div key={role.id}>
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                    <h3 className="text-sm font-semibold text-[#F1F5F9] print:text-slate-900">
                      {role.titles?.[0] ?? role.title} · {role.company}
                    </h3>
                    <p className="font-mono text-[11px] font-medium tracking-wide text-[#94A3B8] uppercase">
                      {role.period}
                    </p>
                  </div>
                  {role.subtitle ? (
                    <p className="text-xs text-[#38BDF8] print:text-slate-500">
                      {role.subtitle}
                    </p>
                  ) : null}
                  {role.titles && role.titles.length > 1 ? (
                    <p className="text-xs text-[#94A3B8]">
                      {role.titles.slice(1).join(" · ")}
                    </p>
                  ) : null}
                  <p className="mt-1 text-sm text-[#94A3B8] print:text-slate-700">
                    {role.summary}
                  </p>
                  {(role.resumeHighlights ?? role.highlights) ? (
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[#94A3B8] print:text-slate-700">
                      {(role.resumeHighlights ?? role.highlights)?.map(
                        (item) => (
                          <li key={item}>{item}</li>
                        ),
                      )}
                    </ul>
                  ) : null}
                </div>
              ))}
            </div>
          </section>

          <section className="mt-8">
            <h2 className="font-mono text-[11px] font-bold tracking-[0.2em] text-[#00D2D3] uppercase print:text-teal-800">
              Education
            </h2>
            <ul className="mt-4 space-y-3">
              {education.map((item) => (
                <li key={item.school} className="text-sm">
                  <div className="flex flex-col justify-between gap-1 sm:flex-row">
                    <span>
                      <span className="font-semibold text-[#F1F5F9] print:text-slate-900">
                        {item.school}
                      </span>
                      {" — "}
                      {item.credential}
                    </span>
                    <span className="font-mono text-[11px] font-medium tracking-wide text-[#94A3B8] uppercase">
                      {item.period}
                    </span>
                  </div>
                  {item.detail ? <p>{item.detail}</p> : null}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="font-mono text-[11px] font-bold tracking-[0.2em] text-[#00D2D3] uppercase print:text-teal-800">
              Certifications
            </h2>
            <ul className="mt-4 space-y-1.5 text-sm">
              {certifications.map((cert) => (
                <li key={cert.name}>
                  <span className="font-medium text-[#F1F5F9] print:text-slate-900">
                    {cert.name}
                  </span>
                  {" — "}
                  {cert.issuer}, {cert.issued}
                  {cert.expires ? ` (expires ${cert.expires})` : ""}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="font-mono text-[11px] font-bold tracking-[0.2em] text-[#00D2D3] uppercase print:text-teal-800">
              Skills
            </h2>
            <ul className="mt-4 space-y-1.5 text-sm">
              {skillGroups.map((group) => (
                <li key={group.label}>
                  <span className="font-semibold text-[#F1F5F9] print:text-slate-900">
                    {group.label}:
                  </span>{" "}
                  {group.skills.join(", ")}
                </li>
              ))}
            </ul>
          </section>
        </article>
      </div>
      <div className="print:hidden">
        <ThemeCompare current="mercury" />
      </div>
    </div>
  );
}
