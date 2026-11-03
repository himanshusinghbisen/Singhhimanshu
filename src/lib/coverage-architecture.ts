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
      "Part 1 of 6. Carrier, sponsor, policy, plan, and benefit. The same words point to different organizations in commercial coverage, Medicare, and Medicaid.",
    date: "2026-11-16",
    readingMinutes: 12,
    tags: ["Healthcare", "Business Architecture", "Payer Systems"],
    body: [
      {
        type: "figure",
        src: "/images/blog/healthcare-payer-cover.jpg",
        alt: "Part 1 cover. Five entities of healthcare payer business architecture: carrier, sponsor, policy, plan, and benefit.",
      },
      "Part 1 of a series on healthcare payer business architecture. This part is the foundation: five business entities, what each one is responsible for, and how they relate. Claims adjudication, the data model, and benefit calculations come later. They are not this article.",
      "Healthcare insurance is often described as a relationship between an insurance company and a member. Behind every card is a larger arrangement: organizations, contracts, coverage, plan options, and benefit rules. Anyone designing or configuring a payer platform has to know which of those is which.",
      "Acme Corporation provides health coverage to its employees. It has two divisions, a corporate headquarters and a unionized manufacturing plant. They share a brand. They do not share a coverage arrangement. Headquarters employees have a PPO. The plant has a separate arrangement. Both may use the same carrier. Their contracts, eligibility, plan options, and benefits may still differ.",
      "The architectural question is a narrow one. How does a payer system know which coverage rules apply to a particular member? Five entities are enough to start: carrier, sponsor, policy, plan, and benefit. These five entities provide a useful starting point for understanding commercial payer architecture. In Medicare and Medicaid, some roles are performed by government agencies, some by private organizations, and some do not have a direct equivalent.",
      "In a fully insured commercial arrangement, an insurer assumes the financial risk for covered claims. A third-party administrator performs agreed administrative work, which is the usual pattern when the employer is self-funded and keeps that risk. One organization can do both jobs. The architecture should still treat them as distinct responsibilities. UnitedHealthcare, in this example, provides commercial coverage to Acme. That does not make every carrier a TPA, and it does not mean every sponsor contracts with a carrier in the same way.",
      "A sponsor is the organization that establishes or funds a coverage arrangement for an eligible population. In employer coverage that is typically the employer. Here the sponsor is Acme. Headquarters employees and the unionized plant may have different eligibility, different contracts, and different coverage. The sponsor has to be understood as the group or benefit arrangement, not merely the name on the building. From an architecture point of view, the sponsor is who establishes or funds the applicable arrangement.",
      "A policy is the insurance contract in a fully insured arrangement. For Acme headquarters the example contract is group coverage G-88421, in force from January 1 through December 31, 2026, fully insured, between Acme and the insurer. The contract is the terms under which coverage is provided. In a self-funded arrangement the documents are different: the employer's plan documents, and an administrative services agreement with the administrator. Not every employer arrangement has the same contractual shape. From an architecture point of view, the policy represents the insurance contract in a fully insured arrangement. In a self-funded arrangement, the corresponding contractual foundation is represented by the plan documents and administrative services agreement.",
      "A plan is a specific coverage option available to eligible members. Acme headquarters offers three: Acme Standard PPO 1500, Acme Premium PPO 500, and Acme HDHP 3000. They can differ in deductible, copay, coinsurance, network, covered services, limits, and out-of-pocket maximum. The sponsor does not by itself determine the plan. The contract and the plan documents say which options exist. A member has to be enrolled in one of them before any coverage rule can apply. From an architecture point of view, the plan is the package selected or assigned to that member.",
      "A benefit is the coverage and cost-sharing rule for a particular service or category. On the Acme Standard PPO 1500, an outpatient specialist office visit might be a $40 copay, in network, up to 12 visits in the year if the plan says so, and without prior authorization if the applicable rules say so. Other benefits are separate rows: primary care, emergency, hospitalization, prescriptions, physical therapy, imaging. A benefit is not simply a price. It can include conditions, exclusions, limits, authorization, and what the member pays. The provider's negotiated reimbursement is generally a contracting matter, not something the benefit definition settles alone. From an architecture point of view, the benefit is how that service is covered under the member's plan.",
      {
        type: "figure",
        src: "/images/blog/healthcare-payer-responsibilities.jpg",
        alt: "Insurer, administrator, and sponsor are separate. They meet in the coverage arrangement, which defines plan options. Those options contain benefit rules. Member enrollment points at the plan options.",
        caption:
          "Insurer and administrator are separate responsibilities. One organization may do both. The sponsor is neither. The arrangement connects the contract or plan documents to the plan options. Benefits belong to the plan, and enrollment identifies that plan.",
      },
      "Bring Acme back to one picture. Headquarters employees are enrolled in the Acme Standard PPO 1500. The insurer in the example is UnitedHealthcare. The sponsor is Acme. The contract is G-88421. The plan is that PPO. The benefit, for this visit, is the outpatient specialist rule. Each entity answers a different question. Who insures or administers the coverage. Who establishes or funds it. What contract governs it. Which package applies. Which rules apply to this service.",
      "These entities are not interchangeable. A sponsor is not a carrier. A plan is not a policy. A benefit is not a plan. When a design or a configuration treats them as the same thing, the relationships go wrong, and coverage and processing go wrong with them.",
      "The distinctions matter past the glossary. Configuration needs an owner for each entity. Eligibility has to decide whether this member belongs to this arrangement on this date. Enrollment has to attach the member to the right plan. Benefit administration has to use the rules of that plan. The links among sponsor, contract, plan, and benefit have to stay consistent. Changes, and the dates they take effect, have to be traceable.",
      {
        type: "heading",
        text: "Who is the sponsor in commercial, Medicare, and Medicaid?",
      },
      "Sponsor is not a single kind of organization. In commercial coverage it is usually the employer. In Medicare and Medicaid the word points somewhere else, or it does not apply in the employer sense at all. The five entities remain a conceptual model. They are not a universal payer database hierarchy.",
      "Commercial coverage is the Acme case. The sponsor is the employer or another group purchasing coverage. A fully insured plan is underwritten by an insurer. A self-funded plan leaves the claims risk with the employer, and a TPA or an insurer acting only as administrator runs the services. The coverage arrangement is the group contract, or the plan documents together with an administrative services agreement.",
      "Original Medicare has no employer-style sponsor. The federal government establishes the program, and the Centers for Medicare & Medicaid Services administers it. Private Medicare Administrative Contractors process Part A and Part B claims for geographic jurisdictions. A contractor that pays a claim is not the sponsor, and it is not the insurer of the benefit in the commercial sense.",
      "Medicare Advantage keeps CMS as the program authority and moves the plan sponsorship to a private organization. That Medicare Advantage organization contracts with CMS to provide Part A and Part B benefits, and often supplemental benefits. It can belong to the same corporate family as a commercial carrier. The CMS contract is not Acme's group contract, and the Medicare Advantage organization is not the employer.",
      "Medicaid is funded jointly by the federal government and the states. CMS oversees the federal rules and the federal matching funds. The state Medicaid agency administers the program. In Texas, that agency is the Health and Human Services Commission. Where a state uses managed care, it contracts with managed care organizations to deliver covered services. Those organizations are contractors of the state. They do not replace the state agency. States do not all use the same mix of managed care and fee-for-service.",
      {
        type: "figure",
        src: "/images/blog/healthcare-payer-program-roles.jpg",
        alt: "Commercial, Original Medicare, Medicare Advantage, and Medicaid use different authorities. Original Medicare has no employer-style sponsor. The state Medicaid agency administers Medicaid. Managed care organizations are contractors where the state uses them.",
        caption:
          "These are program-specific variations, not copies of the commercial model. The state Medicaid agency is the program-level authority and administrator. Managed care organizations are contractors where the state uses managed care.",
      },
      {
        type: "heading",
        text: "Key takeaways",
      },
      "Healthcare coverage is not one insurance record. These five entities are the starting point for commercial architecture. Medicare and Medicaid reuse some roles and have no direct equivalent for others. The next part is how the entities become a data model. Enrollment, claims adjudication, and benefit calculation come after that.",
      {
        type: "figure",
        src: "/images/blog/healthcare-payer-questions.jpg",
        alt: "Five questions: who insures and who administers, who establishes or funds, what governs the arrangement, which coverage package, and what rules apply to this service.",
      },
      "Acme Corporation, the contract reference, and the commercial coverage examples are fictional. The Medicare and Medicaid notes describe program roles. They are not a specific contract or product.",
      {
        type: "heading",
        text: "References and further reading",
      },
      "Government sources are the primary references for terminology and program structure. The architecture in this article is a conceptual model for education. Relationships and terms vary with the program, the contract, and the funding arrangement.",
      {
        type: "links",
        items: [
          {
            label: "HealthCare.gov — Health coverage glossary",
            href: "https://www.healthcare.gov/sbc-glossary/",
          },
          {
            label: "U.S. Department of Labor — Employee Benefits Security Administration",
            href: "https://www.dol.gov/agencies/ebsa/about-ebsa",
          },
          {
            label: "Centers for Medicare & Medicaid Services",
            href: "https://www.cms.gov/",
          },
          {
            label: "CMS — Medicare Administrative Contractors",
            href: "https://www.cms.gov/medicare/coding-billing/medicare-administrative-contractors-macs/whats-mac",
          },
          {
            label: "CMS — Medicare Advantage and other health plans",
            href: "https://www.cms.gov/medicare/enrollment-renewal/health-plans",
          },
          {
            label: "Medicare.gov",
            href: "https://www.medicare.gov/",
          },
          {
            label: "Medicaid.gov",
            href: "https://www.medicaid.gov/",
          },
        ],
      },
    ],
  },
];
