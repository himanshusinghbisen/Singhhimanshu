import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { profile } from "@/lib/data";

const contacts = [
  {
    href: `mailto:${profile.email}`,
    label: profile.email,
    icon: Mail,
  },
  {
    href: profile.linkedin,
    label: "linkedin.com/in/himanshusingh007",
    icon: LinkedInIcon,
  },
  {
    href: profile.github,
    label: "github.com/himanshusinghbisen",
    icon: GitHubIcon,
  },
  {
    href: undefined as string | undefined,
    label: "Dallas, Texas",
    icon: MapPin,
  },
];

export function StudioLandingCard() {
  return (
    <section className="relative flex min-h-[calc(100svh-3.5rem)] items-center justify-center px-4 py-12 sm:px-6">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,180,120,0.18),transparent_55%)]"
      />
      <div className="studio-card-rise relative z-10 w-full max-w-4xl rounded-[1.75rem] border border-white/25 bg-white/10 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-8 md:p-10">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:gap-10">
          <div className="shrink-0">
            <div className="rounded-full bg-white/25 p-[3px] shadow-[0_12px_40px_rgba(0,0,0,0.25)]">
              <Image
                src="/images/himanshu-singh-avatar.jpg"
                alt={`${profile.name}, ${profile.title}`}
                width={176}
                height={176}
                priority
                className="h-36 w-36 rounded-full object-cover sm:h-40 sm:w-40 md:h-44 md:w-44"
              />
            </div>
          </div>

          <div aria-hidden className="hidden h-40 w-px bg-white/25 md:block" />

          <div className="min-w-0 flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.75rem] md:leading-none">
              {profile.name}
            </h1>
            <div className="mx-auto mt-3 h-[3px] w-14 rounded-full bg-[#F28C38] md:mx-0" />
            <p className="mt-4 text-base font-medium text-white/90 sm:text-lg">
              {profile.title} &amp; Software Engineer
            </p>

            <ul className="mt-6 space-y-3 text-left text-sm text-white/90 sm:text-[15px]">
              {contacts.map((item) => {
                const Icon = item.icon;
                const row = (
                  <>
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-white" />
                    <span className="break-all">{item.label}</span>
                  </>
                );
                return (
                  <li key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          item.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="inline-flex items-start gap-3 transition hover:text-white"
                      >
                        {row}
                      </a>
                    ) : (
                      <span className="inline-flex items-start gap-3">{row}</span>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
              <Link
                href="/v3/experience"
                className="inline-flex items-center justify-center rounded-xl bg-[#F28C38] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(242,140,56,0.35)] transition hover:bg-[#ff9a4a]"
              >
                View My Experience
              </Link>
              <Link
                href="/v3/about"
                className="inline-flex items-center justify-center rounded-xl bg-[#E8E4DE] px-5 py-3 text-sm font-semibold text-[#2F2A26] transition hover:bg-white"
              >
                About Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
