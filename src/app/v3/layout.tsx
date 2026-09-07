import type { Metadata } from "next";

import { StudioFooter } from "@/components/studio/footer";
import { ThemeCompare } from "@/components/theme-compare";
import { profile } from "@/lib/data";

import "@/components/studio/studio.css";

export const metadata: Metadata = {
  title: {
    default: `${profile.name} · Studio`,
    template: `%s · ${profile.name}`,
  },
  description: profile.tagline,
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="studio-shell">
      {children}
      <StudioFooter />
      <ThemeCompare current="studio" />
    </div>
  );
}
