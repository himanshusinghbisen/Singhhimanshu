import type { BlogPost } from "@/lib/posts";

/** One note on how coverage is structured. Development shows it. Production waits on the date. */
export const coverageArchitecture: BlogPost[] = [
  {
    slug: "business-architecture-of-healthcare-coverage",
    title: "Business architecture of healthcare coverage",
    summary:
      "Carrier, sponsor, policy, plan, and benefit. Five entities, in that order, decide what a visit is allowed to pay.",
    date: "2026-11-16",
    readingMinutes: 9,
    tags: ["Healthcare", "Business Architecture", "Payer Systems"],
    body: [
      "Business architecture of healthcare is a wide name. It can mean care delivery, the provider enterprise, and the money that moves after a visit. This note is one slice of it: the business architecture of coverage. Five entities, in order. Carrier, sponsor, policy, plan, and benefit. A claim is what happens after this chain is already true.",
      "Hold one employer in mind. A few thousand people, mostly engineers, and a manufacturing plant the company bought last year. The plant shares the name. It does not share the contract. One specialist visit by an engineer has to travel the whole chain before anyone can say what it costs.",
      "A carrier is the organization administering the coverage, and the line of business is the book that coverage sits in. Commercial group business, Medicare, and a state Medicaid program do not share a rulebook, a report, or a ledger. For this employer the book is commercial group. The same carrier may run Medicare and Medicaid somewhere else. Those ledgers stay closed. A medical policy written for the engineers does not belong on a Medicare contract. The carrier answers who is allowed to administer, and under which rules.",
      "A sponsor is who buys or funds that coverage. Here it is the company, and under it two subgroups: the headquarters population and the plant. They share a name and not a contract. A region, a bargaining unit, or an acquired group is the same shape. The sponsor stands inside one line of business. It does not write the copay. It answers who bought the coverage, and for which population.",
      "A policy is the contract. It names the term, the funding, and who is covered. The engineers are on a fully insured contract for the calendar year: the carrier holds the risk, and the company pays a premium. The plant could be written the other way, self-funded, with the company paying the claims and the carrier only administering them. Those are not two flavors of the same invoice. A person is covered because the policy roster says so, as of a date. An engineer missing from that file has no plan to attach, however correct the package on the desk looks.",
      "A plan is the package the policy points at. For the engineers it is one PPO: a $1,500 deductible, 20 percent coinsurance after that, and a national network. Covered services, cost share, limits, and network, taken together. The same policy can also offer a high-deductible package, and two people at headquarters can sit on different ones. The plant points at whatever package its own policy names. The plan is not the sponsor, and the sponsor is not the carrier. Collapsing them is how a correct employer gets the wrong package.",
      "A benefit is one row inside the plan. The specialist office visit is one row: a $40 copay, up to 12 visits in the year, no prior authorization, and the in-network rate. An inpatient stay and a prescription are other rows. A physical therapy rider is a benefit the engineers' plan includes and the plant's plan does not. Adjudication reads the row. It does not negotiate it.",
      {
        type: "figure",
        src: "/images/blog/healthcare-coverage-architecture.jpg",
        alt: "Five connected layers: carrier, sponsor, policy, plan, and benefit. A visit looks up the benefit and does not choose the carrier.",
        caption: "Carrier administers. Sponsor buys. Policy contracts. Plan packages. Benefit prices one service.",
      },
      "When that engineer walks into the specialist's office, the system is not checking for a vague word like insurance. It is checking that a commercial carrier has an active contract with this company, that the engineer is on the headquarters roster, that the roster points at the PPO, and that the specialist visit on that PPO is the $40 copay. If any link above the visit is broken, the claim fails. The doctor did not cause it. The architecture did.",
      "When a link in the chain is wrong, the failure shows up later and looks like a claims problem. The visit was ordinary. The chain above it was not. A sponsor in the wrong book, a policy with the wrong funding, a person on the wrong plan, a benefit with the wrong cost share. The fix is the row that is actually wrong.",
      "Write the five names in that order before any configuration: carrier, sponsor, policy, plan, benefit. Each one answers a question the one below it is not allowed to reopen.",
    ],
  },
];
