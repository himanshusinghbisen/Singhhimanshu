import { certifications, education, skillGroups } from "@/lib/data";
import { ArrowUpRightIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";

export function Credentials() {
  return (
    <section
      id="credentials"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Education, certifications, and skills"
    >
      <SectionHeading>Credentials</SectionHeading>

      <h3 className="mb-4 text-sm font-bold tracking-widest text-slate-200 uppercase">
        Education
      </h3>
      <ol className="mb-12">
        {education.map((item) => (
          <li key={item.school} className="mb-6">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h4 className="font-medium text-slate-200">{item.school}</h4>
              <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                {item.period}
              </p>
            </div>
            <p className="text-sm text-slate-400">{item.credential}</p>
            {item.detail ? (
              <p className="mt-1 text-sm text-slate-500">{item.detail}</p>
            ) : null}
          </li>
        ))}
      </ol>

      <h3 className="mb-4 text-sm font-bold tracking-widest text-slate-200 uppercase">
        Licenses &amp; certifications
      </h3>
      <ul className="mb-12">
        {certifications.map((cert) => {
          const content = (
            <>
              <span className="font-medium text-slate-200 group-hover:text-teal-300">
                {cert.name}
                {cert.href ? (
                  <ArrowUpRightIcon className="ml-1 inline-block h-3.5 w-3.5 shrink-0 translate-y-px transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none" />
                ) : null}
              </span>
              <span className="mt-0.5 block text-sm text-slate-400">
                {cert.issuer}
                {" · "}
                {cert.issued}
                {cert.expires ? ` — Expires ${cert.expires}` : ""}
              </span>
            </>
          );

          return (
            <li key={cert.name} className="mb-4">
              {cert.href ? (
                <a
                  href={cert.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-block"
                >
                  {content}
                </a>
              ) : (
                <div>{content}</div>
              )}
            </li>
          );
        })}
      </ul>

      <h3 className="mb-4 text-sm font-bold tracking-widest text-slate-200 uppercase">
        Skills
      </h3>
      <dl className="space-y-4">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <dt className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
              {group.label}
            </dt>
            <dd>
              <ul className="mt-2 flex flex-wrap">
                {group.skills.map((skill) => (
                  <li key={skill} className="mt-2 mr-1.5">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300">
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
  );
}
