import { ArrowUpRightIcon } from "@/components/icons";
import type { Experience } from "@/lib/data";
import { cn } from "@/lib/utils";

export function ExperienceItem({ role }: { role: Experience }) {
  const titleLine = role.titles?.length
    ? `${role.titles[0]} · ${role.company}`
    : `${role.title} · ${role.company}`;

  return (
    <li className="mb-12">
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div
          className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"
          aria-hidden
        />
        <header className="z-10 mb-2 mt-1 text-xs font-semibold tracking-wide text-slate-500 uppercase sm:col-span-2">
          {role.period}
        </header>
        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug text-slate-200">
            <a
              href={role.href}
              target="_blank"
              rel="noreferrer"
              className="group/link inline-flex items-baseline text-[15px] font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
              aria-label={`${role.title} at ${role.company} (opens in a new tab)`}
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
              <span>
                {titleLine}
                <ArrowUpRightIcon className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
              </span>
            </a>
          </h3>
          {role.subtitle ? (
            <p className="text-sm font-medium text-slate-500">{role.subtitle}</p>
          ) : null}
          {role.titles && role.titles.length > 1 ? (
            <div className="text-slate-500" aria-hidden>
              {role.titles.slice(1).map((title) => (
                <div key={title} className="text-sm font-medium">
                  {title}
                </div>
              ))}
            </div>
          ) : null}
          <p className="mt-2 text-sm leading-normal text-slate-400">
            {role.summary}
          </p>
          {role.highlights ? (
            <ul className="mt-2 space-y-1.5 text-sm leading-normal text-slate-400">
              {role.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {role.tags.map((tag) => (
              <li key={tag} className="mt-2 mr-1.5">
                <div
                  className={cn(
                    "flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300",
                  )}
                >
                  {tag}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}
