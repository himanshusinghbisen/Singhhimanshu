import Link from "next/link";

import { MercuryExperience, MercuryProject } from "@/components/mercury/cards";
import { MercuryHeader } from "@/components/mercury/header";
import { MercuryHeading } from "@/components/mercury/heading";
import { MercurySpotlight } from "@/components/mercury/spotlight";
import { ArrowUpRightIcon } from "@/components/icons";
import { ThemeCompare } from "@/components/theme-compare";
import {
  about,
  certifications,
  education,
  experience,
  profile,
  projects,
  skillGroups,
} from "@/lib/data";

export function MercuryPortfolio() {
  return (
    <div className="relative min-h-screen bg-[#0A0E17] text-[#94A3B8] selection:bg-[#00D2D3] selection:text-[#0A0E17]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(35,51,77,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(35,51,77,0.35) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, black, transparent)",
        }}
      />
      <MercurySpotlight />
      <a
        href="#content"
        className="absolute left-0 z-50 -translate-y-16 rounded bg-[#00D2D3] px-4 py-3 text-sm font-medium text-[#0A0E17] transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <div className="relative mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <MercuryHeader />
          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <section
              id="about"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="About me"
            >
              <MercuryHeading>About</MercuryHeading>
              <div>
                {about.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="mb-4 leading-relaxed text-[#94A3B8]"
                  >
                    {paragraph}
                  </p>
                ))}
                <p className="leading-relaxed text-[#94A3B8]">
                  Open to conversations on healthcare payment integrity, claims
                  recovery systems, enterprise architecture, or hands-on
                  .NET/cloud engineering.{" "}
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-[#F1F5F9] hover:text-[#00D2D3] focus-visible:text-[#00D2D3]"
                  >
                    Let’s connect on LinkedIn
                  </a>
                  .
                </p>
              </div>
            </section>

            <section
              id="experience"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Work experience"
            >
              <MercuryHeading>Experience</MercuryHeading>
              <ol className="relative">
                <span
                  aria-hidden
                  className="absolute top-4 bottom-4 left-[4px] w-px bg-[#23334D]"
                />
                {experience.map((role) => (
                  <MercuryExperience key={role.id} role={role} />
                ))}
              </ol>
              <div className="mt-10">
                <Link
                  href="/v2/resume"
                  className="group inline-flex items-center font-semibold leading-tight text-[#F1F5F9] hover:text-[#00D2D3] focus-visible:text-[#00D2D3]"
                >
                  View full résumé
                  <ArrowUpRightIcon className="ml-1 h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </Link>
              </div>
            </section>

            <section
              id="work"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Selected work"
            >
              <MercuryHeading>Selected Work</MercuryHeading>
              <ul>
                {projects.map((project) => (
                  <MercuryProject key={project.title} project={project} />
                ))}
              </ul>
            </section>

            <section
              id="credentials"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Education, certifications, and skills"
            >
              <MercuryHeading>Credentials</MercuryHeading>

              <h3 className="mb-4 font-mono text-[11px] font-semibold tracking-[0.22em] text-[#F1F5F9] uppercase">
                Education
              </h3>
              <ol className="mb-12">
                {education.map((item) => (
                  <li
                    key={item.school}
                    className="mb-4 rounded-xl border border-[#23334D] bg-[#161F30] px-5 py-4"
                  >
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                      <h4 className="font-medium text-[#F1F5F9]">
                        {item.school}
                      </h4>
                      <p className="font-mono text-[11px] font-semibold tracking-wide text-[#94A3B8] uppercase">
                        {item.period}
                      </p>
                    </div>
                    <p className="text-sm text-[#94A3B8]">{item.credential}</p>
                    {item.detail ? (
                      <p className="mt-1 text-sm text-[#94A3B8]/80">
                        {item.detail}
                      </p>
                    ) : null}
                  </li>
                ))}
              </ol>

              <h3 className="mb-4 font-mono text-[11px] font-semibold tracking-[0.22em] text-[#F1F5F9] uppercase">
                Licenses &amp; certifications
              </h3>
              <ul className="mb-12">
                {certifications.map((cert) => (
                  <li key={cert.name} className="mb-3">
                    {cert.href ? (
                      <a
                        href={cert.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group block rounded-xl border border-[#23334D] bg-[#161F30] px-5 py-4 hover:border-[#00D2D3]/40"
                      >
                        <span className="font-medium text-[#F1F5F9] group-hover:text-[#00D2D3]">
                          {cert.name}
                          <ArrowUpRightIcon className="ml-1 inline-block h-3.5 w-3.5 translate-y-px" />
                        </span>
                        <span className="mt-0.5 block text-sm text-[#94A3B8]">
                          {cert.issuer}
                          {" · "}
                          {cert.issued}
                          {cert.expires ? ` — Expires ${cert.expires}` : ""}
                        </span>
                      </a>
                    ) : (
                      <div className="rounded-xl border border-[#23334D] bg-[#161F30] px-5 py-4">
                        <span className="font-medium text-[#F1F5F9]">
                          {cert.name}
                        </span>
                        <span className="mt-0.5 block text-sm text-[#94A3B8]">
                          {cert.issuer}
                          {" · "}
                          {cert.issued}
                        </span>
                      </div>
                    )}
                  </li>
                ))}
              </ul>

              <h3 className="mb-4 font-mono text-[11px] font-semibold tracking-[0.22em] text-[#F1F5F9] uppercase">
                Skills
              </h3>
              <dl className="space-y-5">
                {skillGroups.map((group) => (
                  <div key={group.label}>
                    <dt className="font-mono text-[11px] font-semibold tracking-wide text-[#38BDF8] uppercase">
                      {group.label}
                    </dt>
                    <dd>
                      <ul className="mt-2 flex flex-wrap">
                        {group.skills.map((skill) => (
                          <li key={skill} className="mt-2 mr-1.5">
                            <div className="flex items-center rounded-full border border-[#23334D] bg-[#161F30] px-3 py-1 font-mono text-[11px] leading-5 font-medium text-[#00D2D3]">
                              {skill}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                ))}
              </dl>
            </section>

            <footer className="max-w-md pb-16 text-sm text-[#94A3B8]/80 sm:pb-0">
              <p>
                Mercury theme copy of the same site — deep void canvas, slate
                cards, mercury cyan.{" "}
                <Link
                  href="/"
                  className="font-medium text-[#F1F5F9] hover:text-[#00D2D3]"
                >
                  View original
                </Link>
                .
              </p>
            </footer>
          </main>
        </div>
      </div>
      <ThemeCompare current="mercury" />
    </div>
  );
}
