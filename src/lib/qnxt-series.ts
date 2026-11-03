import type { BlogPost } from "@/lib/posts";

/**
 * QNXT entity series. Each part is one setup entity.
 * Production shows a part on its date. Development shows every part.
 * Mondays: Nov 16, Nov 23, Nov 30 (2026). Kept off the live site until asked.
 */
export const qnxtSeries: BlogPost[] = [
  {
    slug: "qnxt-carrier-and-line-of-business",
    title: "Carrier and line of business",
    summary:
      "Part 1. In QNXT the carrier and the line of business are the boundary. Commercial, Medicare, and Medicaid do not share a rulebook.",
    date: "2026-11-16",
    readingMinutes: 6,
    tags: ["QNXT", "Healthcare", "Payer Systems"],
    body: [
      "This is part 1 of a series on the entities a QNXT administration platform is built from. Each part stands alone. The order is the order of the setup: carrier and line of business, then the sponsor, then the benefit plan. A later part can follow the member, and only then the claim. This part stops at the boundary everything else has to respect.",
      "These notes are independent. They describe what each entity is for. They are not a product manual, and they leave screens and setup steps alone.",
      "A carrier is the organization administering the coverage. The line of business is the book that coverage sits in. Commercial group business, Medicare Advantage, and a state Medicaid program are not three labels on one ledger. They answer to different rules, they file different reports, and the money does not cross. A medical policy written for an employer group does not belong on a Medicare contract. A rate, a report, and an audit trail stay inside the line that produced them.",
      {
        type: "figure",
        src: "/images/blog/qnxt-carrier-line-of-business.jpg",
        alt: "Three separate books labeled commercial, Medicare, and Medicaid, with a note that a sponsor is created under one of them.",
        caption: "A sponsor belongs to one book. The rules do not cross.",
      },
      "The practical test is simple. If you cannot name the line of business before you name the employer, you do not yet know which rules you are allowed to use. A sponsor created in the wrong book can look settled and still fail the first time an invoice, an encounter, or a claim tries to leave that book.",
      "Write the carrier and the line of business down before a sponsor exists. The next part is that sponsor: who bought the coverage, who holds the risk, and how a person gets onto the roster.",
    ],
  },
  {
    slug: "qnxt-sponsor",
    title: "The sponsor",
    summary:
      "Part 2. The sponsor is who bought the coverage inside a line of business: the parent, the subgroups, the funding, and the roster.",
    date: "2026-11-23",
    readingMinutes: 7,
    tags: ["QNXT", "Healthcare", "Payer Systems"],
    body: [
      "Part 2 of the QNXT entities series. The carrier and the line of business are already chosen. The sponsor is the organization inside that book.",
      "A sponsor is who bought or funded the coverage. Often that is an employer. Sometimes it is a parent with subgroups underneath: a region, a bargaining unit, or an acquired company that still shares a name and does not share a contract. The parent is not a convenience label. It is how billing, eligibility, and funding stay attached to the right population.",
      "Funding is the split that changes the money. In a self-funded arrangement the sponsor pays the claims and the plan administers them. In a fully insured arrangement the plan holds the risk and the sponsor pays a premium. Those are not two flavors of the same invoice. One produces claim expense for the sponsor. The other produces premium, and the insurance risk sits with the plan. Mix them and a claim can still adjudicate while the finance is wrong.",
      {
        type: "figure",
        src: "/images/blog/qnxt-sponsor.jpg",
        alt: "A parent sponsor above two subgroups, one self-funded and one fully insured, with an eligibility file attaching people to the roster.",
        caption: "The parent can hold two contracts. The roster says who belongs to which.",
      },
      "Eligibility is how a person arrives. The roster usually comes in as a file. It says who is covered, under which subgroup, and as of when. A person missing from that file is not a benefit-plan problem yet. There is no one to attach a plan to.",
      "The sponsor does not describe the copay. It describes who is allowed to have a plan, and who pays when that plan is used. The next part is the benefit plan itself.",
    ],
  },
  {
    slug: "qnxt-benefit-plan",
    title: "The benefit plan",
    summary:
      "Part 3. The benefit plan is the package a person is actually on: covered services, cost share, limits, network, and any rider.",
    date: "2026-11-30",
    readingMinutes: 6,
    tags: ["QNXT", "Healthcare", "Payer Systems"],
    body: [
      "Part 3 of the QNXT entities series. The line of business is set, and the sponsor's roster exists. The benefit plan is the package a person on that roster is actually on.",
      "This is the layer adjudication reads. Covered services. A copay, a coinsurance, a deductible, an out-of-pocket maximum. Limits on visits or units. The network those rates apply to. A rider the sponsor bought that changes one of those rows for this group and not for the next. Plans are rarely one flat table. A tiered network and an embedded deductible are still the same idea: a decision the claim will look up, not a negotiation the claim will have.",
      "Two sponsors under one carrier can share a plan design and differ by a rider. Two people under one sponsor can sit on different plans. The plan is not the sponsor, and the sponsor is not the line of business. Collapsing them is how a correct employer gets the wrong cost share.",
      {
        type: "figure",
        src: "/images/blog/qnxt-benefit-plan.jpg",
        alt: "A benefit plan as five rows: covered services, cost share, limits, network, and a rider, with adjudication reading the rows rather than inventing them.",
        caption: "Adjudication looks the plan up. It does not invent it.",
      },
      "When this layer is wrong, the damage shows up later and looks like a claims problem. A visit that should have paid itself waits for a person. The wrong network tier leaks money, or it bills the member. The fix is almost never in the claim. It is in the plan the claim was told to trust.",
      "A member still has to be attached to this plan, and a claim still has to arrive. Those are later parts. They only make sense after the plan exists.",
    ],
  },
];
