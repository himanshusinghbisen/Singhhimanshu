import Link from "next/link";

export function headingAnchorId(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function PayerArticleEnhancements({
  headings,
}: {
  headings: string[];
}) {
  return (
    <div className="mt-8 space-y-8">
      <section
        aria-label="Article overview"
        className="rounded-xl border border-[#D8D1C4] bg-[#F4F0E7] p-5 sm:p-6"
      >
        <p className="text-xs font-semibold tracking-[0.16em] text-[#8A642A] uppercase">
          In this article
        </p>
        <p className="mt-3 text-[16px] leading-7 text-[#394252]">
          Healthcare payer business architecture explains how insurers,
          sponsors, coverage arrangements, plans, and benefit rules fit
          together. Understanding the difference between a carrier, sponsor,
          policy, plan, and benefit is foundational to designing payer
          platforms, configuring enrollment, and applying coverage consistently.
        </p>
      </section>

      <section
        aria-labelledby="payer-model-title"
        className="rounded-xl border border-rule bg-card p-5 sm:p-6"
      >
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-amber-mark uppercase">
              At a glance
            </p>
            <h2 id="payer-model-title" className="font-journal mt-2 text-2xl font-semibold text-ink">
              How the coverage model fits together
            </h2>
          </div>
          <span className="text-xs text-ink/55">Conceptual model</span>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-[#C7D6E8] bg-[#EEF4FA] p-4">
            <p className="text-sm font-semibold text-[#203D5C]">Carrier / insurer</p>
            <p className="mt-1 text-sm leading-6 text-[#43566B]">
              Assumes insurance risk in a fully insured arrangement.
            </p>
          </div>
          <div className="rounded-lg border border-[#C7D6E8] bg-[#EEF4FA] p-4">
            <p className="text-sm font-semibold text-[#203D5C]">Administrator</p>
            <p className="mt-1 text-sm leading-6 text-[#43566B]">
              Performs agreed operational services; may be the same organization as the carrier.
            </p>
          </div>
        </div>

        <div className="my-3 flex justify-center text-xl text-ink/35" aria-hidden="true">↓</div>
        <div className="rounded-lg border border-[#D9CBAE] bg-[#F8F3E8] p-4 text-center">
          <p className="font-semibold text-[#604B2D]">Sponsor</p>
          <p className="mt-1 text-sm text-[#6D604B]">
            Establishes or funds coverage for an eligible population
          </p>
        </div>
        <div className="my-3 flex justify-center text-xl text-ink/35" aria-hidden="true">↓</div>
        <div className="rounded-lg border border-rule bg-background p-4 text-center">
          <p className="font-semibold text-ink">Coverage arrangement</p>
          <p className="mt-1 text-sm text-ink/65">
            Policy / group contract, or plan documents and an administrative services agreement
          </p>
        </div>
        <div className="my-3 flex justify-center text-xl text-ink/35" aria-hidden="true">↓</div>
        <div className="rounded-lg border border-[#B8D9C1] bg-[#EEF6EF] p-4 text-center">
          <p className="font-semibold text-[#28543A]">Plan</p>
          <p className="mt-1 text-sm text-[#456B51]">
            The specific coverage option selected or assigned to a member
          </p>
        </div>
        <div className="my-3 flex justify-center text-xl text-ink/35" aria-hidden="true">↓</div>
        <div className="rounded-lg border border-[#E4D1A9] bg-[#FBF5E8] p-4 text-center">
          <p className="font-semibold text-[#71551F]">Benefits</p>
          <p className="mt-1 text-sm text-[#806B42]">
            Service-level coverage rules, cost sharing, limits, and conditions
          </p>
        </div>
        <p className="mt-4 text-xs leading-5 text-ink/55">
          Simplified teaching model, not a universal legal or contractual hierarchy.
          Sponsor, insurer, and administrator are distinct responsibilities; one
          organization may perform more than one role. Enrollment connects a member
          to the applicable plan.
        </p>
      </section>

      {headings.length > 0 ? (
        <nav
          aria-label="On this page"
          className="rounded-xl border border-rule bg-card p-5 sm:p-6"
        >
          <h2 className="font-journal text-xl font-semibold text-ink">
            On this page
          </h2>
          <ol className="mt-3 grid gap-2 sm:grid-cols-2">
            {headings.map((heading) => (
              <li key={heading}>
                <Link
                  href={`#${headingAnchorId(heading)}`}
                  className="text-sm font-medium text-navy-link underline decoration-amber-mark/40 underline-offset-4 hover:decoration-amber-mark"
                >
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
