import type { Metadata } from "next";
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
import { about, experience, intro, profile, projects } from "@/lib/data";
import { seo } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: seo.title,
    description: seo.openGraphDescription,
  },
};

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
                {intro.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="mb-4 text-[16px] leading-relaxed text-ink/70"
                  >
                    {paragraph}
                  </p>
                ))}
                <p className="mb-4 text-[16px] leading-relaxed text-ink/70">
                  I am based in the Dallas–Fort Worth area.
                </p>
                <p className="mb-8 text-[16px] leading-relaxed text-ink/70">
                  Explore my work:{" "}
                  <Link
                    href="/writing/healthcare-architecture"
                    className="font-semibold text-navy-link underline decoration-amber-mark/50 underline-offset-4 hover:decoration-amber-mark"
                  >
                    Healthcare Architecture
                  </Link>
                  {" · "}
                  <Link
                    href="/blog/healthcare-payer-business-architecture"
                    className="font-semibold text-navy-link underline decoration-amber-mark/50 underline-offset-4 hover:decoration-amber-mark"
                  >
                    Payer Systems
                  </Link>
                  {" · "}
                  <Link
                    href="/blog/beyond-pay-and-chase-payment-integrity-engine"
                    className="font-semibold text-navy-link underline decoration-amber-mark/50 underline-offset-4 hover:decoration-amber-mark"
                  >
                    Payment Integrity
                  </Link>
                  {" · "}
                  <Link
                    href="/#work"
                    className="font-semibold text-navy-link underline decoration-amber-mark/50 underline-offset-4 hover:decoration-amber-mark"
                  >
                    Enterprise Technology
                  </Link>
                </p>
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

            <section
              id="contact"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
              aria-label="Contact"
            >
              <SectionHeading index="06">Contact</SectionHeading>
              <div className="max-w-prose">
                <p className="text-[16px] leading-relaxed text-ink/70">
                  {profile.location}
                </p>
                <ul className="mt-6 space-y-3 text-[16px] leading-relaxed">
                  <li>
                    <a
                      href={`mailto:${profile.email}`}
                      className="font-semibold text-navy-link underline decoration-amber-mark/50 underline-offset-4 hover:decoration-amber-mark"
                    >
                      {profile.email}
                    </a>
                  </li>
                  <li>
                    <a
                      href={profile.phoneHref}
                      className="font-semibold text-navy-link underline decoration-amber-mark/50 underline-offset-4 hover:decoration-amber-mark"
                    >
                      {profile.phone}
                    </a>
                  </li>
                  <li>
                    <a
                      href={profile.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-navy-link underline decoration-amber-mark/50 underline-offset-4 hover:decoration-amber-mark"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-navy-link underline decoration-amber-mark/50 underline-offset-4 hover:decoration-amber-mark"
                    >
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            <footer className="max-w-md border-t border-rule pt-8 pb-16 text-sm text-ink/65 sm:pb-0">
              <p>
                Notes on healthcare payer architecture and data science. Built
                with Next.js and Tailwind CSS.{" "}
                <Link
                  href="/v2"
                  className="font-medium text-navy-link underline decoration-amber-mark/40 underline-offset-4 hover:decoration-amber-mark"
                >
                  Switch to mercury theme
                </Link>
                .
              </p>
              <VisitorCounter theme="journal" />
              <p className="mt-4 text-[11px] tracking-wide text-ink/65">
                © {new Date().getFullYear()} Himanshu Singh. All rights
                reserved.
              </p>
              <p className="mt-2 text-[11px] tracking-wide text-ink/55">
                Powered by{" "}
                <a
                  href="https://nextjs.org"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-navy-link hover:underline"
                >
                  Next.js
                </a>
                {" · "}
                Hosted by{" "}
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-navy-link hover:underline"
                >
                  Vercel
                </a>
              </p>
            </footer>
          </main>
        </div>
      </div>
      <ThemeCompare current="journal" />
      <script
        dangerouslySetInnerHTML={{
          __html: `(function () {
  var nav = document.querySelector('nav[aria-label="Primary"]');
  if (!nav || !document.getElementById("contact")) return;
  var ids = ["about", "experience", "writing", "credentials", "contact"];
  var links = {};
  nav.querySelectorAll('a[href^="#"]').forEach(function (link) {
    links[link.getAttribute("href").slice(1)] = link;
  });
  function mark(id) {
    ids.forEach(function (key) {
      var link = links[key];
      if (!link) return;
      var spans = link.querySelectorAll("span");
      var bar = spans[0];
      var label = spans[1];
      var on = key === id;
      if (on) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
      if (!bar || !label) return;
      bar.classList.toggle("w-10", on);
      bar.classList.toggle("bg-amber-mark", on);
      bar.classList.toggle("w-5", !on);
      bar.classList.toggle("bg-rule", !on);
      bar.classList.toggle("group-hover:w-10", !on);
      bar.classList.toggle("group-hover:bg-amber-mark", !on);
      label.classList.toggle("text-ink", on);
      label.classList.toggle("text-ink/65", !on);
      label.classList.toggle("group-hover:text-ink", !on);
    });
  }
  function current() {
    var active = ids[0];
    var last = "";
    ids.forEach(function (id) {
      var el = document.getElementById(id);
      if (!el) return;
      last = id;
      if (el.getBoundingClientRect().top <= 120) active = id;
    });
    var remaining =
      document.documentElement.scrollHeight - window.scrollY - window.innerHeight;
    if (last && remaining <= 4) active = last;
    return active;
  }
  var frame = 0;
  function update() {
    frame = 0;
    mark(current());
  }
  document.addEventListener("scroll", function () {
    if (frame) return;
    frame = window.requestAnimationFrame(update);
  }, { passive: true, capture: true });
  window.addEventListener("hashchange", update);
  document.addEventListener("click", function (event) {
    var target = event.target;
    if (!target || !target.closest) return;
    var anchor = target.closest('a[href^="#"]');
    if (!anchor) return;
    var id = anchor.getAttribute("href").slice(1);
    if (ids.indexOf(id) !== -1) mark(id);
  });
  update();
})();`,
        }}
      />
    </div>
  );
}
