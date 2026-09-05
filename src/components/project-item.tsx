import type { Project } from "@/lib/data";

export function ProjectItem({ project }: { project: Project }) {
  return (
    <li className="mb-6">
      <article className="rounded-sm border border-rule bg-card p-5 shadow-[0_1px_0_rgba(31,41,55,0.04)] transition hover:border-amber-mark/50 sm:p-6">
        <div className="mb-3 h-0.5 w-8 bg-amber-mark" />
        <h3 className="font-journal text-xl font-semibold text-ink">
          {project.title}
        </h3>
        <p className="mt-2 text-[15px] leading-relaxed text-ink/65">
          {project.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
          {project.tags.map((tag) => (
            <li key={tag}>
              <span className="inline-flex items-center rounded-sm border border-rule bg-parchment-deep/70 px-2.5 py-1 text-xs font-medium text-ink/70">
                {tag}
              </span>
            </li>
          ))}
        </ul>
      </article>
    </li>
  );
}
