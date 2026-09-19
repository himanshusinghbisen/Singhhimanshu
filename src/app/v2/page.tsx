import type { Metadata } from "next";

import { MercuryPortfolio } from "@/components/mercury/portfolio";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  robots: { index: false, follow: true },
};

export default function MercuryHome() {
  return <MercuryPortfolio />;
}
