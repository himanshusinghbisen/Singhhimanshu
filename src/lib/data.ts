export const profile = {
  name: "Himanshu Singh",
  firstName: "Himanshu",
  title: "Healthcare Systems Architect",
  tagline:
    "I design and build scalable claims and payment integrity platforms — architecture that prevents leakage, and code that ships in production.",
  location: "Dallas–Fort Worth",
  email: "hisingh@my365.bellevue.edu",
  linkedin: "https://www.linkedin.com/in/himanshusingh007/",
  headline:
    "Healthcare Systems Architect & Senior Developer | Designing and Building Scalable Claims & Payment Integrity Platforms",
};

export const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Selected Work" },
  { id: "credentials", label: "Credentials" },
] as const;

export const about = [
  "Most healthcare enterprises lose millions each year to payment inaccuracies, improper claims, and fraud — because legacy architectures can't adjudicate and detect anomalies fast enough.",
  "When massive claims volumes run through fragmented, high-latency systems, post-payment recovery becomes an uphill battle. Brittle ETL pipelines break, coordination of benefits slips through the cracks, and engineering teams spend critical hours firefighting system failures instead of preventing leakage.",
  "I work on both sides of that problem: I design the architecture that prevents it, and I write the code that ships it. Today I focus on payment integrity — modernizing post-pay systems, vendor integrations, and recovery workflows that catch overpayments, credit-balance issues, and subrogation claims before they become financial leakage. Earlier in my career I spent over a decade architecting on core payer platforms like QNXT and Facets, which grounds every payment integrity system I build in how claims actually move through adjudication.",
  "I'm deepening this work through an MS in Data Science at Bellevue University (4.0 GPA), with coursework in statistics, data mining, and predictive analytics — bringing applied statistical rigor to claims anomaly detection.",
  "Whether leading architecture discussions with stakeholders or debugging a payment integrity pipeline at 2am, my focus is the same: systems that are well-designed and actually work in production.",
];

export type Experience = {
  id: string;
  period: string;
  title: string;
  titles?: string[];
  company: string;
  href: string;
  location?: string;
  summary: string;
  highlights?: string[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    id: "cigna-senior",
    period: "2023 — Present",
    title: "Application Development Senior Advisor",
    company: "Cigna Healthcare",
    href: "https://www.cigna.com",
    location: "Plano, TX",
    summary:
      "Own payment integrity architecture and hands-on delivery — modernizing post-pay applications, vendor integrations, and recovery workflows that catch overpayments before they become financial leakage.",
    highlights: [
      "Modernizing post-pay systems and Auto-Recoup workflows across Medicare, Medicaid, and Commercial lines of business.",
      "Building Power BI vendor-performance dashboards to track recovery across overpayments, credit-balance issues, and subrogation claims.",
      "Staying in the code: C#, .NET, and SQL Server, including migrations of legacy .NET apps to Node.js/Angular on AWS and SSIS pipelines to AWS Glue.",
    ],
    tags: [
      "Payment Integrity",
      "C#",
      ".NET",
      "SQL Server",
      "QNXT",
      "AWS",
      "Power BI",
    ],
  },
  {
    id: "lacare",
    period: "2022 — 2023",
    title: "Application Architect",
    company: "L.A. Care Health Plan",
    href: "https://www.lacare.org",
    location: "Remote",
    summary:
      "Led application architecture for a large public health plan, translating TOGAF-aligned system design into implementations engineering teams could ship on QNXT, .NET, and SQL Server.",
    highlights: [
      "Owned technology direction and system design for claims-centric applications, with decisions grounded in how payer operations actually run — from adjudication through downstream financial workflows.",
      "Partnered with stakeholders on roadmaps and vendor conversations while remaining close to the implementation details.",
    ],
    tags: ["TOGAF", "Architecture", "QNXT", ".NET", "SQL Server"],
  },
  {
    id: "cigna-advisor",
    period: "2021 — 2022",
    title: "Application Development Advisor",
    company: "Cigna",
    href: "https://www.cigna.com",
    location: "Remote",
    summary:
      "Hands-on delivery on core payer platforms — bridging claims processing systems and the integrations that feed financial operations, the work that led into payment integrity.",
    tags: ["C#", ".NET", "QNXT", "SQL Server", "Claims"],
  },
  {
    id: "infosys",
    period: "2009 — 2021",
    title: "Technology Lead",
    titles: [
      "Technology Lead",
      "Technology Analyst",
      "Senior Systems Engineer",
      "Systems Engineer",
    ],
    company: "Infosys",
    href: "https://www.infosys.com",
    location: "United States & India",
    summary:
      "A decade on core payer platforms — QNXT, NASCO, and Facets — leading teams that built claims, payment, and reporting systems used in production.",
    highlights: [
      "Led an eleven-person team delivering QNXT reporting, 835 extracts, and EOB/EOP generation through Change Healthcare, plus member denial letters for the payments module.",
      "Built and integrated back-office applications around scheduled claims adjudication and payment runs; delivered Marketplace invoicing, data fixes, and multi-state submissions.",
      "Worked pricing and pre-pay applications (Cotiviti, Optum Web.Strat), NASCO process automation with Open Connect, and visualization in SSRS and Tableau.",
    ],
    tags: [
      "QNXT",
      "NASCO",
      "C#",
      "ASP.NET",
      "SSIS",
      "SSRS",
      "Tableau",
      "SQL Server",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "Payment Integrity & Recovery",
    description:
      "Post-pay modernization spanning Auto-Recoup workflows, vendor integrations, and recovery operations. Dashboards track recovery performance across Medicare, Medicaid, and Commercial — so overpayments, credit balances, and subrogation claims surface before they leak.",
    tags: ["Payment Integrity", "C#", ".NET", "Power BI", "SQL Server", "AWS"],
  },
  {
    title: "QNXT Claims & Payment Platforms",
    description:
      "Years of production work on QNXT and related payer cores: scheduled adjudication, payment runs, 835 extracts, EOB/EOP, appeals and grievances, and multi-state regulatory reporting. This is the claims path every payment integrity system I design has to respect.",
    tags: ["QNXT", "Facets", "Claims", "COB", "C#", "SQL Server"],
  },
  {
    title: "Cloud & Data Pipeline Modernization",
    description:
      "Migrating legacy .NET applications to Node.js and Angular on AWS, and replacing brittle SSIS pipelines with AWS Glue — so claims and recovery data moves with less latency and fewer 2am failures.",
    tags: ["AWS", "AWS Glue", "Node.js", "Angular", "SSIS", ".NET"],
  },
];

export type Education = {
  school: string;
  credential: string;
  period: string;
  detail?: string;
};

export const education: Education[] = [
  {
    school: "Bellevue University",
    credential: "M.S., Data Science",
    period: "In progress",
    detail: "4.0 GPA · Statistics, data mining, and predictive analytics",
  },
  {
    school: "Dr. A.P.J. Abdul Kalam Technical University",
    credential: "B.Tech, Computer Science",
    period: "2004 — 2008",
  },
  {
    school: "Symbiosis Centre for Distance Learning",
    credential: "Post Graduate Diploma in Information Technology (PGDIT)",
    period: "2010 — 2012",
  },
];

export type Certification = {
  name: string;
  issuer: string;
  issued: string;
  expires?: string;
  href?: string;
};

export const certifications: Certification[] = [
  {
    name: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    issued: "Oct 2025",
    expires: "Oct 2028",
    href: "https://aws.amazon.com/certification/certified-ai-practitioner/",
  },
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    issued: "Dec 2024",
    expires: "Dec 2027",
    href: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    issued: "Apr 2024",
    expires: "Apr 2027",
    href: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
  },
  {
    name: "TOGAF® 9 Certified",
    issuer: "The Open Group",
    issued: "Dec 2022",
    href: "https://www.credly.com/badges/afaca3d0-9391-48e9-ba0c-6968130c67b6",
  },
  {
    name: "Microsoft Certified: Azure Data Fundamentals",
    issuer: "Microsoft",
    issued: "Dec 2022",
    href: "https://www.credly.com/badges/3b26aeab-6994-4b40-906b-dc595ac9dc6a",
  },
  {
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    issued: "Sep 2020",
    href: "https://www.credly.com/badges/64405441-a36b-42ec-af41-815ec4ce9b4a",
  },
];

export const skillGroups = [
  {
    label: "Architecture",
    skills: ["TOGAF", "Microservices", "SOA", "System Design"],
  },
  {
    label: "Healthcare",
    skills: [
      "QNXT",
      "Payment Integrity",
      "Claims Adjudication",
      "FWA",
      "Coordination of Benefits",
    ],
  },
  {
    label: "Engineering",
    skills: ["C#", ".NET", "SQL Server", "T-SQL", "Entity Framework"],
  },
  {
    label: "Cloud & Data",
    skills: ["AWS", "Azure", "AWS Glue", "Power BI", "Python"],
  },
  {
    label: "Web",
    skills: ["Node.js", "Angular", "JavaScript"],
  },
];
