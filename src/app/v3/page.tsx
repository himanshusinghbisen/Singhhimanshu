import Link from "next/link";

import { StudioLandingCard } from "@/components/studio/landing-card";
import { StudioNavbar } from "@/components/studio/navbar";
import { profile, projects, skillGroups } from "@/lib/data";
import { formatPostDate, getAllPosts } from "@/lib/posts";

export default function StudioHomePage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <StudioNavbar />
      <StudioLandingCard />

      <div className="mx-auto max-w-6xl space-y-20 px-4 pb-20 sm:px-6">
        <section aria-labelledby="studio-blog">
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2
              id="studio-blog"
              className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
            >
              Recent Blog Posts
            </h2>
            <Link
              href="/v3/blog"
              className="text-sm font-semibold text-[#F28C38] hover:text-[#ff9a4a]"
            >
              View all
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/v3/blog/${post.slug}`}
                className="rounded-2xl border border-white/15 bg-white/8 p-5 backdrop-blur-md transition hover:border-[#F28C38]/50 hover:bg-white/12"
              >
                <p className="text-xs tracking-wide text-white/55 uppercase">
                  {formatPostDate(post.date)} · {post.readingMinutes} min
                </p>
                <h3 className="mt-3 text-lg font-semibold text-white">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {post.summary}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section aria-labelledby="studio-focus">
          <h2
            id="studio-focus"
            className="mb-8 text-2xl font-bold tracking-tight text-white sm:text-3xl"
          >
            Selected Focus
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.title}
                href="/v3/experience"
                className="rounded-2xl border border-white/15 bg-white/8 p-5 backdrop-blur-md transition hover:border-[#F28C38]/50 hover:bg-white/12"
              >
                <h3 className="text-lg font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 px-2.5 py-1 text-[11px] text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section aria-labelledby="studio-stack">
          <h2
            id="studio-stack"
            className="mb-8 text-2xl font-bold tracking-tight text-white sm:text-3xl"
          >
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {skillGroups.flatMap((group) =>
              group.skills.map((skill) => (
                <span
                  key={`${group.label}-${skill}`}
                  className="rounded-full border border-white/15 bg-white/8 px-3 py-1.5 text-sm text-white/85"
                >
                  {skill}
                </span>
              )),
            )}
          </div>
        </section>

        <section
          aria-labelledby="studio-connect"
          className="rounded-2xl border border-white/15 bg-white/8 p-8 text-center backdrop-blur-md"
        >
          <h2
            id="studio-connect"
            className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
          >
            Let’s Connect
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/75">
            Interested in healthcare payment integrity, claims architecture, or
            cloud modernization? Reach out — I’m open to conversations.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center rounded-xl bg-[#F28C38] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#ff9a4a]"
            >
              Email Me
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
