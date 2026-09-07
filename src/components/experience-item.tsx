import { ArrowUpRightIcon } from "@/components/icons";
import type { Experience } from "@/lib/data";

export function ExperienceItem({ role }: { role: Experience }) {
  const titleLine = role.titles?.length
    ? `${role.titles[0]} · ${role.company}`
    : `${role.title} · ${role.company}`;

  return (
    <li className="mb-10">
      <article className="group relative grid gap-2 border-l-2 border-rule pl-5 transition hover:border-amber-mark sm:grid-cols-[7.5rem_1fr] sm:gap-8 sm:border-l-0 sm:pl-0">
        <header className="pt-1 text-xs font-semibold tracking-[0.14em] text-ink/65 uppercase sm:text-right">
          {role.period}
        </header>
        <div>
          <h3 className="font-journal text-xl font-semibold leading-snug text-ink">
            <a
              href={role.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-baseline hover:text-navy-link focus-visible:text-navy-link"
              aria-label={`${role.title} at ${role.company} (opens in a new tab)`}
            >
              <span>
                {titleLine}
                <ArrowUpRightIcon className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px text-amber-mark transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </a>
          </h3>
          {role.subtitle ? (
            <p className="mt-0.5 text-sm font-medium text-navy-link">
              {role.subtitle}
            </p>
          ) : null}
          {role.titles && role.titles.length > 1 ? (
            <div className="text-ink/65">
              {role.titles.slice(1).map((title) => (
                <div key={title} className="text-sm font-medium">
                  {title}
                </div>
              ))}
            </div>
          ) : null}
          <p className="mt-3 text-[15px] leading-relaxed text-ink/65">
            {role.summary}
          </p>
          {role.highlights ? (
            <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-ink/65">
              {role.highlights.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-mark" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : null}
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
            {role.tags.map((tag) => (
              <li key={tag}>
                <span className="inline-flex items-center rounded-sm border border-rule bg-parchment-deep/70 px-2.5 py-1 text-xs font-medium text-ink/70">
                  {tag}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </li>
  );
}
