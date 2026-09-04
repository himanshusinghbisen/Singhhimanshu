import { profile } from "@/lib/data";
import { LinkedInIcon, MailIcon } from "@/components/icons";

const links = [
  {
    href: profile.linkedin,
    label: "LinkedIn",
    icon: LinkedInIcon,
  },
  {
    href: `mailto:${profile.email}`,
    label: "Email",
    icon: MailIcon,
  },
];

export function SocialLinks() {
  return (
    <ul className="ml-1 mt-8 flex items-center" aria-label="Social">
      {links.map((link) => (
        <li key={link.href} className="mr-5 shrink-0">
          <a
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            className="block text-slate-400 transition hover:text-slate-200 focus-visible:text-slate-200"
            aria-label={link.label}
          >
            <link.icon className="h-6 w-6" />
          </a>
        </li>
      ))}
    </ul>
  );
}
