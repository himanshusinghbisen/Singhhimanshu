import Link from "next/link";

import { profile } from "@/lib/data";

export function StudioFooter() {
  return (
    <footer className="border-t border-white/10 px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-white/65 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}. Studio theme.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/v3/experience" className="hover:text-white">
            Experience
          </Link>
          <Link href="/v3/blog" className="hover:text-white">
            Blog
          </Link>
          <Link href="/v3/about" className="hover:text-white">
            About
          </Link>
          <Link href="/v3/resume" className="hover:text-white">
            Résumé
          </Link>
          <a href={`mailto:${profile.email}`} className="hover:text-white">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
