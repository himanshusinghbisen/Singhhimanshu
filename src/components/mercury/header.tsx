import Image from "next/image";
import Link from "next/link";

import { MercuryNav } from "@/components/mercury/nav";
import { LinkedInIcon, MailIcon, PhoneIcon } from "@/components/icons";
import { profile } from "@/lib/data";

const links = [
  { href: profile.linkedin, label: "LinkedIn", icon: LinkedInIcon },
  { href: `mailto:${profile.email}`, label: "Email", icon: MailIcon },
  { href: profile.phoneHref, label: "Phone", icon: PhoneIcon },
];

export function MercuryHeader() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <Link
          href="/v2"
          className="group inline-block"
          aria-label={`${profile.name} home`}
        >
          <Image
            src="/images/himanshu-singh-headshot.jpg"
            alt={`${profile.name}, ${profile.title}`}
            width={320}
            height={427}
            priority
            className="h-24 w-24 rounded-full object-cover object-[center_18%] ring-2 ring-[#23334D] transition group-hover:ring-[#00D2D3] sm:h-28 sm:w-28"
          />
        </Link>
        <p className="mt-8 font-mono text-[11px] tracking-[0.28em] text-[#00D2D3] uppercase">
          Systems · Claims · Cloud
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-[#F1F5F9] sm:text-5xl">
          <Link href="/v2">{profile.name}</Link>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-[#F1F5F9] sm:text-xl">
          {profile.title}
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-[#94A3B8]">
          {profile.tagline}
        </p>
        <MercuryNav />
      </div>
      <ul className="mt-8 ml-1 flex items-center" aria-label="Social">
        {links.map((link) => (
          <li key={link.href} className="mr-5 shrink-0">
            <a
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="block text-[#94A3B8] transition hover:text-[#00D2D3] focus-visible:text-[#00D2D3]"
              aria-label={link.label}
            >
              <link.icon className="h-6 w-6" />
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
