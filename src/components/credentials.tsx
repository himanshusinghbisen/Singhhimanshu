import { certifications, education, skillGroups } from "@/lib/data";
import { ArrowUpRightIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";

export function Credentials() {
  return (
    <section
      id="credentials"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
      aria-label="Education, certifications, and skills"
    >
      <SectionHeading index="04">Credentials</SectionHeading>

      <h3 className="mb-4 text-xs font-bold tracking-[0.2em] text-ink/50 uppercase">
        Education
      </h3>
      <ol className="mb-12 space-y-4">
        {education.map((item) => (
          <li
            key={item.school}
            className="rounded-sm border border-rule bg-card px-5 py-4"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h4 className="font-journal text-lg font-semibold text-ink">
                {item.school}
              </h4>
              <p className="text-xs font-semibold tracking-wide text-ink/45 uppercase">
                {item.period}
              </p>
            </div>
            <p className="text-sm text-ink/65">{item.credential}</p>
            {item.detail ? (
              <p className="mt-1 text-sm text-ink/50">{item.detail}</p>
            ) : null}
          </li>
        ))}
      </ol>

      <h3 className="mb-4 text-xs font-bold tracking-[0.2em] text-ink/50 uppercase">
        Licenses &amp; certifications
      </h3>
      <ul className="mb-12 space-y-3">
        {certifications.map((cert) => {
          const body = (
            <>
              <span className="font-medium text-ink group-hover:text-navy-link">
                {cert.name}
                {cert.href ? (
                  <ArrowUpRightIcon className="ml-1 inline-block h-3.5 w-3.5 translate-y-px text-amber-mark" />
                ) : null}
              </span>
              <span className="mt-0.5 block text-sm text-ink/55">
                {cert.issuer}
                {" · "}
                {cert.issued}
                {cert.expires ? ` — Expires ${cert.expires}` : ""}
              </span>
            </>
          );

          return (
            <li key={cert.name}>
              {cert.href ? (
                <a
                  href={cert.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group block rounded-sm border border-rule bg-card px-5 py-4 transition hover:border-navy-link/40"
                >
                  {body}
                </a>
              ) : (
                <div className="rounded-sm border border-rule bg-card px-5 py-4">
                  {body}
                </div>
              )}
            </li>
          );
        })}
      </ul>

      <h3 className="mb-4 text-xs font-bold tracking-[0.2em] text-ink/50 uppercase">
        Skills
      </h3>
      <dl className="space-y-5">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <dt className="text-xs font-semibold tracking-wide text-amber-mark uppercase">
              {group.label}
            </dt>
            <dd>
              <ul className="mt-2 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={skill}>
                    <span className="inline-flex items-center rounded-sm border border-rule bg-parchment-deep/70 px-2.5 py-1 text-xs font-medium text-ink/70">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
