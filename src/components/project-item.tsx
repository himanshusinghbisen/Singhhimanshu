import type { Project } from "@/lib/data";

export function ProjectItem({ project }: { project: Project }) {
  return (
    <li className="mb-12">
      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div
          className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"
          aria-hidden
        />
        <div className="z-10 sm:order-2 sm:col-span-8">
          <h3 className="font-medium leading-snug text-slate-200">
            <span className="text-[15px] font-medium leading-tight text-slate-200">
              {project.title}
            </span>
          </h3>
          <p className="mt-2 text-sm leading-normal text-slate-400">
            {project.description}
          </p>
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {project.tags.map((tag) => (
              <li key={tag} className="mt-2 mr-1.5">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300">
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
