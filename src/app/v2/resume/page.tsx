import type { Metadata } from "next";

import { MercuryResume } from "@/components/mercury/resume";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  title: `Résumé · ${profile.name} · Mercury`,
  description: `${profile.name} — ${profile.headline}`,
};

export default function MercuryResumePage() {
  return <MercuryResume />;
}
