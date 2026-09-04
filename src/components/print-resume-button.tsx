"use client";

import { Button } from "@/components/ui/button";

export function PrintResumeButton() {
  return (
    <Button
      type="button"
      variant="outline"
      onClick={() => window.print()}
      className="print:hidden border-slate-300 bg-white text-slate-800 hover:bg-slate-100"
    >
      Print / Save as PDF
    </Button>
  );
}
