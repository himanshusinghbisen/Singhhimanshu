import type { BlogPost } from "@/lib/posts";

/** One note on how coverage is structured. Development shows it. Production waits on the date. */
export const coverageArchitecture: BlogPost[] = [
  {
    slug: "business-architecture-of-healthcare-coverage",
    title: "Business architecture of healthcare coverage",
    summary:
      "Carrier, sponsor, policy, plan, and benefit. Five entities, in that order, decide what a visit is allowed to pay.",
    date: "2026-11-16",
    readingMinutes: 8,
    tags: ["Healthcare", "Business Architecture", "Payer Systems"],
    body: [
      "Business architecture of healthcare is a wide name. It can mean care delivery, the provider enterprise, and the money that moves after a visit. This note is one slice of it: the business architecture of coverage. Five entities, in order. Carrier, sponsor, policy, plan, and benefit. A claim is what happens after this chain is already true.",
      "A carrier is the organization administering the coverage, and the line of business is the book that coverage sits in. Commercial group business, Medicare, and a state Medicaid program do not share a rulebook, a report, or a ledger. A medical policy written for an employer group does not belong on a Medicare contract. The carrier answers who is allowed to administer, and under which rules.",
      "A sponsor is who buys or funds that coverage. Often an employer. Sometimes a parent with subgroups underneath: a region, a bargaining unit, or an acquired group that shares a name and does not share a contract. The sponsor stands inside one line of business. The sponsor does not write the copay. It answers who bought the coverage, and for which population.",
      "A policy is the contract. It names the term, the funding, and who is covered. In a self-funded arrangement the sponsor pays the claims and the carrier administers them. In a fully insured arrangement the carrier holds the risk and the sponsor pays a premium. Those are not two flavors of the same invoice. A person is covered because the policy roster says so, as of a date. No row on the roster, and there is no one to attach a plan to.",
      "A plan is the package the policy points at. Covered services, cost share, limits, and network, taken together. Two policies can share a plan design. Two people on one policy can sit on different plans. The plan is not the sponsor, and the sponsor is not the carrier. Collapsing them is how a correct employer gets the wrong package.",
      "A benefit is one row inside the plan. An office visit, an inpatient stay, a prescription. The benefit says whether that service is covered, what the member pays, how many times it is allowed, and in which network the rate applies. A rider is a benefit, or a change to a benefit, that this sponsor bought and the next sponsor did not. Adjudication reads the benefit. It does not negotiate it.",
      {
        type: "figure",
        src: "/images/blog/healthcare-coverage-architecture.jpg",
        alt: "Five connected layers: carrier, sponsor, policy, plan, and benefit. A visit looks up the benefit and does not choose the carrier.",
        caption: "Carrier administers. Sponsor buys. Policy contracts. Plan packages. Benefit prices one service.",
      },
      "When a link in the chain is wrong, the failure shows up later and looks like a claims problem. The visit was ordinary. The chain above it was not. A sponsor in the wrong book, a policy with the wrong funding, a person on the wrong plan, a benefit with the wrong cost share. The fix is the row that is actually wrong.",
      "Write the five names in that order before any configuration: carrier, sponsor, policy, plan, benefit. Each one answers a question the one below it is not allowed to reopen.",
    ],
  },
];
