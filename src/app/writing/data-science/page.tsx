import type { Metadata } from "next";
import Link from "next/link";

import { PageShell } from "@/components/page-shell";
import { PostList } from "@/components/post-list";
import { postsInSection, writingSections } from "@/lib/writing";

const section = writingSections[1];
const description =
  "Data science lifecycle, data collection, machine learning, and data engineering notes by Himanshu Singh.";

export const metadata: Metadata = {
  title: section.title,
  description,
  alternates: { canonical: section.path },
  openGraph: {
    url: section.path,
    title: section.title,
    description,
  },
};

export default function DataSciencePage() {
  return (
    <PageShell kicker="Writing" title={section.title} lede={section.description}>
      <ul className="mt-8 flex flex-wrap gap-2">
        {section.topics.map((topic) => (
          <li key={topic}>
            <span className="inline-flex items-center rounded-sm border border-rule bg-parchment-deep/70 px-2.5 py-1 text-xs font-medium text-ink/70">
              {topic}
            </span>
          </li>
        ))}
      </ul>
      <PostList posts={postsInSection(section.id)} />
      <p className="mt-10 text-sm text-ink/65">
        <Link href="/writing" className="font-medium text-navy-link">
          All writing
        </Link>
        {" · "}
        <Link
          href="/writing/healthcare-architecture"
          className="font-medium text-navy-link"
        >
          Healthcare Systems Architecture
        </Link>
      </p>
    </PageShell>
  );
}
