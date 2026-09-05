"use client";

import { Button } from "@/components/ui/button";

export function PrintResumeButton() {
  return (
    <Button
      type="button"
      variant="outline"
      onClick={() => window.print()}
      className="print:hidden border-rule bg-card text-ink hover:bg-parchment-deep"
    >
      Print / Save as PDF
    </Button>
  );
}
