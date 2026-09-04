import Link from "next/link";

import { Credentials } from "@/components/credentials";
import { ExperienceItem } from "@/components/experience-item";
import { ArrowUpRightIcon } from "@/components/icons";
import { ProjectItem } from "@/components/project-item";
import { SectionHeading } from "@/components/section-heading";
import { SiteHeader } from "@/components/site-header";
import { Spotlight } from "@/components/spotlight";
import { about, experience, profile, projects } from "@/lib/data";

export default function Home() {
  return (
    <div className="relative">
      <Spotlight />
      <a
        href="#content"
        className="absolute left-0 z-50 -translate-y-16 rounded bg-teal-400 px-4 py-3 text-sm font-medium text-slate-900 transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <SiteHeader />
          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <section
              id="about"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="About me"
            >
              <SectionHeading>About</SectionHeading>
              <div>
                {about.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="mb-4 leading-relaxed text-slate-400"
                  >
                    {paragraph}
                  </p>
                ))}
                <p className="leading-relaxed text-slate-400">
                  Open to conversations on healthcare payment integrity, claims
                  recovery systems, enterprise architecture, or hands-on
                  .NET/cloud engineering.{" "}
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
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
              <SectionHeading>Experience</SectionHeading>
              <ol className="group/list">
                {experience.map((role) => (
                  <ExperienceItem key={role.id} role={role} />
                ))}
              </ol>
              <div className="mt-12">
                <Link
                  href="/resume"
                  className="group inline-flex items-center font-semibold leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                >
                  View full résumé
                  <ArrowUpRightIcon className="ml-1 h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none" />
                </Link>
              </div>
            </section>

            <section
              id="work"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Selected work"
            >
              <SectionHeading>Selected Work</SectionHeading>
              <ul className="group/list">
                {projects.map((project) => (
                  <ProjectItem key={project.title} project={project} />
                ))}
              </ul>
            </section>

            <Credentials />

            <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
              <p>
                Designed in the spirit of{" "}
                <a
                  href="https://brittanychiang.com"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                >
                  Brittany Chiang
                </a>
                . Built with Next.js and Tailwind CSS, deployed wherever you
                point the domain. Coded in Cursor.
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
