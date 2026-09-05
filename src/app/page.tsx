import Link from "next/link";

import { Credentials } from "@/components/credentials";
import { ExperienceItem } from "@/components/experience-item";
import { ArrowUpRightIcon } from "@/components/icons";
import { ProjectItem } from "@/components/project-item";
import { SectionHeading } from "@/components/section-heading";
import { SiteHeader } from "@/components/site-header";
import { ThemeCompare } from "@/components/theme-compare";
import { VisitorCounter } from "@/components/visitor-counter";
import { WritingPreview } from "@/components/writing-preview";
import { about, experience, profile, projects } from "@/lib/data";

export default function Home() {
  return (
    <div className="relative">
      <a
        href="#content"
        className="absolute left-0 z-50 -translate-y-16 rounded-sm bg-navy-link px-4 py-3 text-sm font-medium text-white transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-16">
          <SiteHeader />
          <main id="content" className="pt-20 lg:w-[52%] lg:py-24">
            <section
              id="about"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
              aria-label="About"
            >
              <SectionHeading index="01">About</SectionHeading>
              <div className="max-w-prose">
                {about.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="mb-4 text-[16px] leading-relaxed text-ink/70"
                  >
                    {paragraph}
                  </p>
                ))}
                <p className="text-[16px] leading-relaxed text-ink/70">
                  Open to conversations on healthcare payment integrity, claims
                  recovery systems, enterprise architecture, or hands-on
                  .NET/cloud engineering.{" "}
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-navy-link underline decoration-amber-mark/50 underline-offset-4 hover:decoration-amber-mark"
                  >
                    Let’s connect on LinkedIn
                  </a>
                  .
                </p>
              </div>
            </section>

            <section
              id="experience"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
              aria-label="Work experience"
            >
              <SectionHeading index="02">Experience</SectionHeading>
              <ol>
                {experience.map((role) => (
                  <ExperienceItem key={role.id} role={role} />
                ))}
              </ol>
              <div className="mt-10">
                <Link
                  href="/resume"
                  className="group inline-flex items-center font-semibold text-ink hover:text-navy-link"
                >
                  View full résumé
                  <ArrowUpRightIcon className="ml-1 h-4 w-4 text-amber-mark transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </section>

            <section
              id="work"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
              aria-label="Selected work"
            >
              <SectionHeading index="03">Selected Work</SectionHeading>
              <ul>
                {projects.map((project) => (
                  <ProjectItem key={project.title} project={project} />
                ))}
              </ul>
            </section>

            <WritingPreview />

            <Credentials />

            <footer className="max-w-md border-t border-rule pt-8 pb-16 text-sm text-ink/45 sm:pb-0">
              <p>
                An engineering journal for architecture notes, production
                systems, and the craft of shipping claims platforms. Built with
                Next.js and Tailwind CSS.{" "}
                <Link
                  href="/v2"
                  className="font-medium text-navy-link underline decoration-amber-mark/40 underline-offset-4 hover:decoration-amber-mark"
                >
                  Switch to mercury theme
                </Link>
                .
              </p>
              <VisitorCounter theme="journal" />
              <p className="mt-4 text-[11px] tracking-wide text-ink/35">
                © {new Date().getFullYear()} Himanshu Singh. All rights
                reserved.
              </p>
            </footer>
          </main>
        </div>
      </div>
      <ThemeCompare current="journal" />
    </div>
  );
}
