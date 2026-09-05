import { ArrowUpRightIcon } from "@/components/icons";
import type { Experience, Project } from "@/lib/data";

function Pill({ children }: { children: string }) {
  return (
    <div className="flex items-center rounded-full border border-[#23334D] bg-[#161F30] px-3 py-1 font-mono text-[11px] leading-5 font-medium text-[#00D2D3]">
      {children}
    </div>
  );
}

export function MercuryExperience({ role }: { role: Experience }) {
  const titleLine = role.titles?.length
    ? `${role.titles[0]} · ${role.company}`
    : `${role.title} · ${role.company}`;

  return (
    <li className="relative mb-6 pl-6">
      <span
        aria-hidden
        className="absolute top-6 left-0 h-2.5 w-2.5 rounded-full border-2 border-[#00D2D3] bg-[#0A0E17]"
      />
      <article className="rounded-xl border border-[#23334D] bg-[#161F30] p-5 transition hover:border-[#00D2D3]/40 sm:p-6">
        <div className="grid gap-4 sm:grid-cols-8 sm:gap-6">
          <header className="font-mono text-[11px] font-semibold tracking-wide text-[#94A3B8] uppercase sm:col-span-2">
            {role.period}
          </header>
          <div className="sm:col-span-6">
            <h3 className="font-medium leading-snug text-[#F1F5F9]">
              <a
                href={role.href}
                target="_blank"
                rel="noreferrer"
                className="group/link inline-flex items-baseline text-[15px] font-medium leading-tight text-[#F1F5F9] hover:text-[#00D2D3] focus-visible:text-[#00D2D3]"
                aria-label={`${role.title} at ${role.company} (opens in a new tab)`}
              >
                <span>
                  {titleLine}
                  <ArrowUpRightIcon className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
                </span>
              </a>
            </h3>
            {role.subtitle ? (
              <p className="mt-0.5 text-sm font-medium text-[#38BDF8]">
                {role.subtitle}
              </p>
            ) : null}
            {role.titles && role.titles.length > 1 ? (
              <div className="text-[#94A3B8]">
                {role.titles.slice(1).map((title) => (
                  <div key={title} className="text-sm font-medium">
                    {title}
                  </div>
                ))}
              </div>
            ) : null}
            <p className="mt-2 text-sm leading-normal text-[#94A3B8]">
              {role.summary}
            </p>
            {role.highlights ? (
              <ul className="mt-3 space-y-1.5 text-sm leading-normal text-[#94A3B8]">
                {role.highlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#00D2D3]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : null}
            <ul className="mt-3 flex flex-wrap" aria-label="Technologies used">
              {role.tags.map((tag) => (
                <li key={tag} className="mt-2 mr-1.5">
                  <Pill>{tag}</Pill>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </li>
  );
}

export function MercuryProject({ project }: { project: Project }) {
  return (
    <li className="mb-6">
      <article className="rounded-xl border border-[#23334D] bg-[#161F30] p-5 transition hover:border-[#00D2D3]/40 sm:p-6">
        <div className="mb-3 h-px w-10 bg-[#00D2D3]" />
        <h3 className="text-[15px] font-medium leading-tight text-[#F1F5F9]">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-normal text-[#94A3B8]">
          {project.description}
        </p>
        <ul className="mt-3 flex flex-wrap" aria-label="Technologies used">
          {project.tags.map((tag) => (
            <li key={tag} className="mt-2 mr-1.5">
              <Pill>{tag}</Pill>
            </li>
          ))}
        </ul>
      </article>
    </li>
  );
}
