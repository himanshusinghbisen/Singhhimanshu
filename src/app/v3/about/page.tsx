import type { Metadata } from "next";

import { StudioNavbar } from "@/components/studio/navbar";
import {
  about,
  certifications,
  education,
  profile,
  skillGroups,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: `About ${profile.name}.`,
};

export default function StudioAboutPage() {
  return (
    <>
      <StudioNavbar active="About" />
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="text-xs font-semibold tracking-[0.24em] text-[#F28C38] uppercase">
          Profile
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-white">
          About Me
        </h1>
        <h2 className="mt-4 text-xl text-white/85">
          Hi, I’m {profile.name}
        </h2>

        <div className="mt-8 space-y-4">
          {about.map((paragraph) => (
            <p
              key={paragraph.slice(0, 48)}
              className="text-[16px] leading-relaxed text-white/75"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <section className="mt-14">
          <h3 className="text-xl font-semibold text-white">Education</h3>
          <ul className="mt-4 space-y-4">
            {education.map((item) => (
              <li
                key={item.school}
                className="rounded-2xl border border-white/15 bg-white/8 p-5"
              >
                <p className="font-semibold text-white">{item.school}</p>
                <p className="mt-1 text-[#F28C38]">{item.credential}</p>
                <p className="mt-1 text-sm text-white/60">{item.period}</p>
                {item.detail ? (
                  <p className="mt-2 text-sm text-white/70">{item.detail}</p>
                ) : null}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14">
          <h3 className="text-xl font-semibold text-white">Certifications</h3>
          <ul className="mt-4 space-y-3">
            {certifications.map((item) => (
              <li
                key={item.name}
                className="rounded-2xl border border-white/15 bg-white/8 px-5 py-4"
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-white hover:text-[#F28C38]"
                  >
                    {item.name}
                  </a>
                ) : (
                  <span className="font-medium text-white">{item.name}</span>
                )}
                <p className="mt-1 text-sm text-white/60">
                  {item.issuer} · Issued {item.issued}
                  {item.expires ? ` · Expires ${item.expires}` : ""}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14">
          <h3 className="text-xl font-semibold text-white">Technical Skills</h3>
          <div className="mt-4 space-y-5">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <p className="text-xs font-semibold tracking-[0.2em] text-[#F28C38] uppercase">
                  {group.label}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/15 bg-white/8 px-3 py-1.5 text-sm text-white/85"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-white/15 bg-white/8 p-6 text-center">
          <h3 className="text-xl font-semibold text-white">Let’s Connect</h3>
          <p className="mt-3 text-white/70">
            Based in {profile.location}. Open to architecture and engineering
            conversations.
          </p>
          <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-xl bg-[#F28C38] px-5 py-3 text-sm font-semibold text-white hover:bg-[#ff9a4a]"
            >
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
