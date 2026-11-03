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
      "Hold one company in mind. Acme buys coverage for its headquarters engineers. A unionized plant shares the Acme name and does not share the contract. One specialist visit has to travel the whole chain before anyone can say what it costs.",
      "A carrier is the organization administering the coverage, and the line of business is the book that coverage sits in. Commercial group business, Medicare, and a state Medicaid program do not share a rulebook, a report, or a ledger. In this example the carrier is UnitedHealthcare, and the book is commercial group. UnitedHealthcare also runs Medicare Advantage and Medicaid. Those ledgers stay closed. A contract written for Acme does not belong on a Medicare book. The carrier answers who is allowed to administer, and under which rules.",
      "A sponsor is who buys or funds that coverage. Here the sponsor is Acme, headquarters division: the buyer, the premium, and the eligible pool. A unionized plant, or a company Acme acquires, can sit under a different sponsor even though the name on the door is the same. The sponsor stands inside one line of business. It does not write the copay. It answers who bought the coverage, and for which population.",
      "A policy is the contract. Call this one group contract G-88421, for the 2026 calendar year, between UnitedHealthcare and Acme headquarters. It names the term, the funding, and who is covered. Fully insured means UnitedHealthcare holds the risk and Acme pays a premium. Self-funded means Acme pays the claims and UnitedHealthcare administers them. Those are not two flavors of the same invoice. A person is covered because the policy roster says so, as of a date. An engineer missing from that file has no plan to attach, however correct the package on the desk looks.",
      "A plan is the package the policy points at. For this contract it is the Acme Standard PPO 1500: a $1,500 individual deductible, 20 percent coinsurance, and the Choice Plus network. Covered services, cost share, limits, and network, taken together. Another person at Acme can sit on a different plan under a different policy. The plant's contract points at whatever package that contract names. The plan is not the sponsor, and the sponsor is not the carrier. Collapsing them is how a correct employer gets the wrong package.",
      "A benefit is one row inside the plan. Outpatient specialist office visit is one row: a $40 copay, up to 12 visits in the year, no prior authorization, and the in-network contracted rate. An inpatient stay and a prescription are other rows. A physical therapy rider is a benefit Acme can add to this plan and leave off the plant's plan. Adjudication reads the row. It does not negotiate it.",
      {
        type: "figure",
        src: "/images/blog/healthcare-coverage-architecture.jpg",
        alt: "Five connected layers: carrier, sponsor, policy, plan, and benefit. A visit looks up the benefit and does not choose the carrier.",
        caption: "Carrier administers. Sponsor buys. Policy contracts. Plan packages. Benefit prices one service.",
      },
      "When an Acme engineer walks into a specialist's office, the system is not checking for a vague word like insurance. It is checking that UnitedHealthcare has an active commercial contract with Acme under G-88421, that the contract points at the Acme Standard PPO 1500, and that an outpatient specialist visit on that plan is the $40 copay. If any link above the visit is broken, the claim fails. The doctor did not cause it. The architecture did.",
      "When a link in the chain is wrong, the failure shows up later and looks like a claims problem. The visit was ordinary. The chain above it was not. A sponsor in the wrong book, a policy with the wrong funding, a person on the wrong plan, a benefit with the wrong cost share. The fix is the row that is actually wrong.",
      "Write the five names in that order before any configuration: carrier, sponsor, policy, plan, benefit. Each one answers a question the one below it is not allowed to reopen.",
    ],
  },
];
