import type { BlogPost } from "@/lib/posts";

/**
 * Healthcare payer business architecture.
 * Part 1 only. Later parts stay unwritten until this one is ready to publish.
 * The date keeps a production build from showing it early.
 */
export const coverageArchitecture: BlogPost[] = [
  {
    slug: "healthcare-payer-business-architecture",
    title: "Healthcare payer business architecture: the five core entities",
    summary:
      "Part 1 of 6. Carrier, sponsor, policy, plan, and benefit. Who administers, who funds, what the contract is, which package applies, and which rules cover one service.",
    date: "2026-11-16",
    readingMinutes: 10,
    tags: ["Healthcare", "Business Architecture", "Payer Systems"],
    body: [
      "Part 1 of a series on healthcare payer business architecture. This part is the foundation: five business entities, what each one is responsible for, and how they relate. Claims adjudication, the data model, and benefit calculations come later. They are not this article.",
      "Healthcare insurance is often described as a relationship between an insurance company and a member. Behind every card is a larger arrangement: organizations, contracts, coverage, plan options, and benefit rules. Anyone designing or configuring a payer platform has to know which of those is which.",
      "Acme Corporation provides health coverage to its employees. It has two divisions, a corporate headquarters and a unionized manufacturing plant. They share a brand. They do not share a coverage arrangement. Headquarters employees have a PPO. The plant has a separate arrangement. Both may use the same carrier. Their contracts, eligibility, plan options, and benefits may still differ.",
      "The architectural question is a narrow one. How does a payer system know which coverage rules apply to a particular member? Five entities are enough to start: carrier, sponsor, policy, plan, and benefit.",
      "A carrier is the organization that provides the coverage or performs an agreed administrative role. UnitedHealthcare, in this example, provides commercial coverage to an employer. Not every arrangement works that way. In a fully insured arrangement the insurer generally holds the financial risk for covered claims. In a self-funded arrangement the employer generally holds that risk, and a third-party administrator may run claims, eligibility, and the other services. The organization administering the arrangement and the organization bearing the risk are not necessarily the same. From an architecture point of view, the carrier or administrator is who is responsible for the relevant coverage or administrative services.",
      "A sponsor is the organization that establishes or funds a coverage arrangement for an eligible population. In employer coverage that is typically the employer. Here the sponsor is Acme. Headquarters employees and the unionized plant may have different eligibility, different contracts, and different coverage. The sponsor has to be understood as the group or benefit arrangement, not merely the name on the building. From an architecture point of view, the sponsor is who establishes or funds the applicable arrangement.",
      "A policy is the insurance contract in a fully insured arrangement. For Acme headquarters the example contract is group coverage G-88421, in force from January 1 through December 31, 2026, fully insured, between Acme and the insurer. The contract is the terms under which coverage is provided. In a self-funded arrangement the documents are different: the employer's plan documents, and an administrative services agreement with the administrator. Not every employer arrangement has the same contractual shape. From an architecture point of view, the policy or the applicable plan documents are the contractual foundation.",
      "A plan is a specific coverage option available to eligible members. Acme headquarters offers three: Acme Standard PPO 1500, Acme Premium PPO 500, and Acme HDHP 3000. They can differ in deductible, copay, coinsurance, network, covered services, limits, and out-of-pocket maximum. The sponsor does not by itself determine the plan. The contract and the plan documents say which options exist. A member has to be enrolled in one of them before any coverage rule can apply. From an architecture point of view, the plan is the package selected or assigned to that member.",
      "A benefit is the coverage and cost-sharing rule for a particular service or category. On the Acme Standard PPO 1500, an outpatient specialist office visit might be a $40 copay, in network, up to 12 visits in the year if the plan says so, and without prior authorization if the applicable rules say so. Other benefits are separate rows: primary care, emergency, hospitalization, prescriptions, physical therapy, imaging. A benefit is not simply a price. It can include conditions, exclusions, limits, authorization, and what the member pays. The provider's negotiated reimbursement is generally a contracting matter, not something the benefit definition settles alone. From an architecture point of view, the benefit is how that service is covered under the member's plan.",
      {
        type: "figure",
        src: "/images/blog/healthcare-payer-entities.jpg",
        alt: "UnitedHealthcare and Acme meet in a coverage arrangement, which defines plan options, which contain benefit rules. A member enrolls in one plan.",
        caption:
          "The sponsor and the carrier are separate parties. They meet in the coverage arrangement. The exact links depend on the funding.",
      },
      "Bring Acme back to one picture. Headquarters employees are enrolled in the Acme Standard PPO 1500. The carrier in the example is UnitedHealthcare. The sponsor is Acme. The contract is G-88421. The plan is that PPO. The benefit, for this visit, is the outpatient specialist rule. Each entity answers a different question. Who provides or administers the coverage. Who establishes or funds it. What contract governs it. Which package applies. Which rules apply to this service.",
      "These entities are not interchangeable. A sponsor is not a carrier. A plan is not a policy. A benefit is not a plan. When a design or a configuration treats them as the same thing, the relationships go wrong, and coverage and processing go wrong with them.",
      "The distinctions matter past the glossary. Configuration needs an owner for each entity. Eligibility has to decide whether this member belongs to this arrangement on this date. Enrollment has to attach the member to the right plan. Benefit administration has to use the rules of that plan. The links among sponsor, contract, plan, and benefit have to stay consistent. Changes, and the dates they take effect, have to be traceable.",
      "Healthcare coverage is not one insurance record. It is these related entities. The carrier identifies the insurer or the administrator. The sponsor identifies who establishes or funds the arrangement. The policy or the plan documents establish the contract. The plan is the package. The benefit is the rule for a service. That is the foundation. The next part is how these entities become a data model. Enrollment, claims adjudication, benefit calculation, and the mistakes that show up in configuration come after that.",
      "Acme Corporation, the contract reference, and the coverage examples are fictional. They are here to show the relationships. They are not an actual insurance contract or product.",
    ],
  },
];
