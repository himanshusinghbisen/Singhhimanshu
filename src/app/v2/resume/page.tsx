import type { Metadata } from "next";

import { MercuryResume } from "@/components/mercury/resume";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  title: { absolute: `Résumé · ${profile.name} · Mercury` },
  description: `${profile.name} — ${profile.headline}`,
  alternates: { canonical: "/resume" },
  robots: { index: false, follow: true },
};

export default function MercuryResumePage() {
  return <MercuryResume />;
}
