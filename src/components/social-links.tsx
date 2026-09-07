import {
  GitHubIcon,
  GoodreadsIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
} from "@/components/icons";
import { profile } from "@/lib/data";

const links = [
  {
    href: profile.linkedin,
    label: "LinkedIn",
    icon: LinkedInIcon,
  },
  {
    href: profile.github,
    label: "GitHub",
    icon: GitHubIcon,
  },
  {
    href: profile.goodreads,
    label: "Goodreads",
    icon: GoodreadsIcon,
  },
  {
    href: `mailto:${profile.email}`,
    label: "Email",
    icon: MailIcon,
  },
  {
    href: profile.phoneHref,
    label: "Phone",
    icon: PhoneIcon,
  },
];

export function SocialLinks() {
  return (
    <ul className="mt-8 flex items-center gap-5" aria-label="Contact">
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            className="block text-ink/65 transition hover:text-navy-link focus-visible:text-navy-link"
            aria-label={link.label}
          >
            <link.icon className="h-5 w-5" />
          </a>
        </li>
      ))}
    </ul>
  );
}
