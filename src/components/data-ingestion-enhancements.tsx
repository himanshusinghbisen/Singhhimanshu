import Link from "next/link";
import { headingAnchorId } from "@/components/payer-article-enhancements";

export function DataIngestionEnhancements({ headings }: { headings: string[] }) {
  return (
    <div className="mt-8 space-y-8">
      <section className="rounded-xl border border-[#D8D1C4] bg-[#F4F0E7] p-5 sm:p-6" aria-label="Article overview">
        <p className="text-xs font-semibold tracking-[0.16em] text-[#8A642A] uppercase">The engineering objective</p>
        <p className="mt-3 text-[16px] leading-7 text-[#394252]">
          Reliable ingestion is more than moving files. It establishes where data came from,
          what each record represents, whether the delivery is complete, how it may be used,
          and how the same result can be reproduced after a failure or source correction.
        </p>
      </section>

      <section className="rounded-xl border border-rule bg-card p-5 sm:p-6" aria-labelledby="ingestion-flow-title">
        <p className="text-xs font-semibold tracking-[0.16em] text-amber-mark uppercase">Reference flow</p>
        <h2 id="ingestion-flow-title" className="font-journal mt-2 text-2xl font-semibold text-ink">A controlled ingestion pipeline</h2>
        <div className="mt-5 grid gap-2 sm:grid-cols-5">
          {[
            ["01", "Source", "Payer systems, EDI, APIs, partners"],
            ["02", "Collect", "Batch, API, CDC, or event stream"],
            ["03", "Land", "Original payload and batch metadata"],
            ["04", "Validate", "Schema, quality, security, control totals"],
            ["05", "Publish", "Accepted data with lineage and status"],
          ].map(([number, title, description], index) => (
            <div key={number} className="relative rounded-lg border border-rule bg-background p-3">
              <span className="font-mono text-xs text-amber-mark">{number}</span>
              <p className="mt-2 font-semibold text-ink">{title}</p>
              <p className="mt-1 text-xs leading-5 text-ink/65">{description}</p>
              {index < 4 ? <span className="absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-card px-1 text-ink/40 sm:block" aria-hidden="true">→</span> : null}
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs leading-5 text-ink/55">
          Simplified logical flow. Quarantine, replay, and monitoring operate across the stages rather than as a single final step.
        </p>
      </section>

      {headings.length > 0 ? (
        <nav aria-label="On this page" className="rounded-xl border border-rule bg-card p-5 sm:p-6">
          <h2 className="font-journal text-xl font-semibold text-ink">On this page</h2>
          <ol className="mt-3 grid gap-2 sm:grid-cols-2">
            {headings.map((heading) => (
              <li key={heading}>
                <Link href={`#${headingAnchorId(heading)}`} className="text-sm font-medium text-navy-link underline decoration-amber-mark/40 underline-offset-4 hover:decoration-amber-mark">
                  {heading}
                </Link>
              </li>
            ))}
          </ol>
        </nav>
      ) : null}
    </div>
  );
}
