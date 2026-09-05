export type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  readingMinutes: number;
  tags: string[];
  body: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "payment-integrity-architecture-notes",
    title: "Where payment integrity architectures usually break",
    summary:
      "Post-pay recovery fails less from missing rules and more from latency, brittle vendor seams, and claims data that no longer matches adjudication reality.",
    date: "2026-08-12",
    readingMinutes: 6,
    tags: ["Payment Integrity", "Architecture", "Healthcare"],
    body: [
      "Most payment integrity programs start with the right instinct: catch overpayments, credit-balance issues, and subrogation opportunities before leakage compounds. The failure mode is rarely the business rule itself. It is the architecture around the rule.",
      "When recovery workflows sit downstream of fragmented claims platforms, every hop adds delay. SSIS packages stall. Vendor files arrive late or incomplete. Dashboards report yesterday’s truth while finance is already asking for today’s recovery posture. By the time an overpayment is confirmed, the operational cost of collecting it has climbed.",
      "The systems that hold up share a few traits. They treat adjudication context as a first-class input, not an afterthought. They keep Auto-Recoup and vendor orchestration close to the claims path. And they make recovery metrics observable in the same cadence leadership actually uses to make decisions.",
      "That is why a decade on QNXT and Facets still matters for integrity work. Payment integrity is not a bolt-on analytics problem. It is a claims-systems problem with financial consequences.",
    ],
  },
  {
    slug: "ssis-to-glue-claims-pipelines",
    title: "Notes from moving claims ETL off SSIS onto AWS Glue",
    summary:
      "A practical look at replacing brittle on-prem SSIS packages with Glue jobs without losing operational control of claims extracts.",
    date: "2026-06-03",
    readingMinutes: 5,
    tags: ["AWS Glue", "ETL", "SQL Server"],
    body: [
      "SSIS is comfortable until it is not. For years it moved claims extracts, payment files, and vendor feeds reliably enough. Then volumes rose, package ownership spread across teams, and a single failed overnight job could freeze an entire recovery cycle.",
      "Migrating to AWS Glue is not a lift-and-shift of DTSX files into the cloud. The useful work is deciding which transforms belong near the warehouse, which should stay close to operational SQL Server, and which vendor handoffs need explicit contracts instead of shared folder folklore.",
      "What improved first was operability: clearer retries, cloud-native scaling for bursty claim loads, and fewer silent failures in lower environments. What still required discipline was lineage. If a payment extract cannot explain which adjudication run it came from, Glue only moves the ambiguity faster.",
      "The lesson for payer engineering teams is simple. Cloud ETL helps when the pipeline contract is designed. It does not forgive an unclear claims data model.",
    ],
  },
  {
    slug: "togaf-in-payer-engineering",
    title: "Using TOGAF without drowning a delivery team",
    summary:
      "How enterprise architecture ceremonies stay useful when the real work is still C#, SQL Server, and production claims traffic.",
    date: "2026-03-18",
    readingMinutes: 4,
    tags: ["TOGAF", "Leadership", ".NET"],
    body: [
      "TOGAF is easy to parody: endless capability maps, slideware roadmaps, and architecture review boards that arrive after the code is already in QA. Used poorly, it becomes ceremony. Used well, it keeps payer platforms from accumulating irreversible coupling.",
      "On claims and payment integrity work, the valuable TOGAF artifacts are the ones that force tradeoffs into the open. Which system owns coordination of benefits? Where does recovery state live? What is the integration boundary with a vendor pricing engine? Those answers prevent six teams from inventing six incompatible truths.",
      "The practice that works for me is architecture in the same loop as delivery. Roadmaps and RFPs matter, but so does staying close enough to the .NET and SQL implementation to know when a diagram is lying.",
      "Enterprise architecture earns trust when it reduces production risk. Everything else is decoration.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function getAllPosts() {
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function formatPostDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}
