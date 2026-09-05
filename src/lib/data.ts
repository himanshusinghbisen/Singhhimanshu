export const profile = {
  name: "Himanshu Singh",
  firstName: "Himanshu",
  title: "Healthcare Systems Architect",
  tagline:
    "I design and build scalable claims and payment integrity platforms — architecture that prevents leakage, and code that ships in production.",
  location: "Dallas–Fort Worth",
  email: "himanshu.singhh@outlook.com",
  phone: "+1 (562) 256-6239",
  phoneHref: "tel:+15622566239",
  linkedin: "https://www.linkedin.com/in/himanshusingh007/",
  headline:
    "Healthcare Systems Architect & Senior Developer | Designing and Building Scalable Claims & Payment Integrity Platforms",
};

export const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Selected Work" },
  { id: "writing", label: "Writing" },
  { id: "credentials", label: "Credentials" },
] as const;

export const about = [
  "Most healthcare enterprises lose millions each year to payment inaccuracies, improper claims, and fraud — because legacy architectures can't adjudicate and detect anomalies fast enough.",
  "When massive claims volumes run through fragmented, high-latency systems, post-payment recovery becomes an uphill battle. Brittle ETL pipelines break, coordination of benefits slips through the cracks, and engineering teams spend critical hours firefighting system failures instead of preventing leakage.",
  "I work on both sides of that problem: I design the architecture that prevents it, and I write the code that ships it. Today I focus on payment integrity — modernizing post-pay applications, implementing Auto-Recoup workflows, and building Power BI vendor-performance dashboards that track recovery across Medicare, Medicaid, and Commercial. I also own technology roadmaps, vendor RFPs, and system design (TOGAF 9 Certified) while staying hands-on in C#, .NET, and SQL Server — including migrating legacy .NET apps to Node.js/Angular on AWS and SSIS pipelines to AWS Glue.",
  "That work is grounded in more than a decade on core payer platforms like QNXT and Facets, so every recovery system I build respects how claims actually move through adjudication.",
  "I'm deepening this through an MS in Data Science at Bellevue University (4.0 GPA), with coursework in statistics, data mining, and predictive analytics — bringing applied statistical rigor to claims anomaly detection.",
  "Whether leading architecture discussions with stakeholders or debugging a payment integrity pipeline at 2am, my focus is the same: systems that are well-designed and actually work in production.",
];

export type Experience = {
  id: string;
  period: string;
  title: string;
  titles?: string[];
  company: string;
  subtitle?: string;
  href: string;
  location?: string;
  summary: string;
  highlights?: string[];
  resumeHighlights?: string[];
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
      "Payment integrity on the post-pay side — expanding Medicare coverage, automating recoupment, and moving claims recovery onto a cloud-native stack.",
    highlights: [
      "Implemented Medicare as a line of business in existing .NET post-pay applications and Auto-Recoup for Proclaim and Facets, cutting manual recoupment work.",
      "Onboarded recovery vendors and shipped a Power BI dashboard so leadership can see Credit Balance, Subrogation, and overpayment metrics on demand.",
      "Migrated a legacy .NET application to Node.js/Angular on AWS, SSIS packages to AWS Glue, and SQL Server 2016 to 2022.",
    ],
    resumeHighlights: [
      "Implemented the Medicare line of business in existing .NET post-pay applications, expanding claims-processing coverage across the payment integrity platform.",
      "Automated key post-pay functions and implemented Auto-Recoup for Proclaim and Facets, reducing manual recoupment and speeding overpayment resolution.",
      "Onboarded new vendors into the payment integrity ecosystem and coordinated Credit Balance and Subrogation claims across vendors.",
      "Built a Power BI vendor-performance dashboard so leadership has on-demand recovery metrics.",
      "Migrated a legacy .NET application to Node.js/Angular on AWS and SSIS packages to AWS Glue.",
      "Led the SQL Server build and migration from 2016 to 2022 using Unity, extending vendor support and improving performance.",
    ],
    tags: [
      "Payment Integrity",
      "C#",
      ".NET",
      "SQL Server",
      "AWS",
      "AWS Glue",
      "Power BI",
      "Facets",
    ],
  },
  {
    id: "egen",
    period: "2022 — 2023",
    title: "Software Engineer",
    company: "Egen",
    subtitle: "L.A. Care Health Plan",
    href: "https://www.egen.ai",
    location: "Remote",
    summary:
      "Cloud-migration architecture for L.A. Care’s QNXT landscape — roadmap, RFPs, and a smaller hosting footprint before the move.",
    highlights: [
      "Delivered a cloud-migration roadmap for QNXT and related applications, giving L.A. Care a clear future-state for core systems.",
      "Cut the path to hosting cost by designing how to bring data centers in-house from vendor-managed hosting and shrinking lower environments ahead of migration.",
      "Participated in vendor RFPs and turned business-process and data-flow analysis into inputs the architecture could actually use.",
    ],
    resumeHighlights: [
      "Delivered a cloud-migration roadmap for QNXT and related applications at L.A. Care Health Plan.",
      "Developed techniques to bring data centers in-house from vendor-managed hosting and reduced lower-environment size ahead of migration.",
      "Participated in vendor RFPs, tool evaluation, and sourcing negotiations.",
      "Analyzed business processes, data flows, and IT artifacts; researched and recommended approaches for complex architecture challenges.",
    ],
    tags: ["QNXT", "Cloud Architecture", "AWS", "TOGAF", "Vendor RFP"],
  },
  {
    id: "disys",
    period: "2021 — 2022",
    title: "Application Development Advisor",
    company: "DISYS",
    subtitle: "Cigna Healthcare",
    href: "https://www.disys.com",
    location: "Remote",
    summary:
      "Led an Agile .NET team on Cigna’s Medicare claims platform — QNXT integrations, reporting, and post-adjudication.",
    highlights: [
      "Led an Agile team of .NET developers with consistent sprint delivery on Cigna’s Medicare claims platform.",
      "Integrated back-office applications with QNXT scheduled adjudication, AutoQ, and payment-run processes.",
      "Built SQL Server / SSIS / SSRS reporting and post-adjudication modules to surface claims discrepancies faster.",
    ],
    resumeHighlights: [
      "Led an Agile team of .NET developers delivering features for Cigna’s Medicare claims platform.",
      "Integrated back-office applications with QNXT scheduled adjudication, AutoQ, and payment-run processes.",
      "Developed SQL Server / SSIS / SSRS reports with custom stored procedures, views, and functions.",
      "Built post-adjudication modules and analyzed claims discrepancies for faster issue resolution.",
    ],
    tags: ["C#", ".NET", "QNXT", "SSIS", "SSRS", "SQL Server", "Medicare"],
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
    subtitle: "Molina Healthcare and earlier payer programs",
    href: "https://www.infosys.com",
    location: "United States & India",
    summary:
      "Twelve years on payer platforms — from NASCO automation through leading Molina’s appeals, grievances, and payment-integrity integrations.",
    highlights: [
      "Led Molina’s appeals & grievances platform (1,200 users): Provider Portal REST APIs and QNXT–Inovaare integration through AWS API Gateway for Duals and Medicare.",
      "Shipped Change Healthcare payment extracts (EOB/EOP, 835) and Optum Web.Strat / Cotiviti pricing integrations via BizTalk and SSIS.",
      "Mentored six engineers with 24/7 offshore support. Earlier years: NASCO, Open Connect, and .NET knowledge portals.",
    ],
    resumeHighlights: [
      "Appeals & Grievances, UM Denials, Inovaare integration, and payment integrity for Molina Healthcare (Apr 2019 – Jun 2021).",
      "Led an Agile .NET team on a system used by 1,200 users; mentored six engineers with uninterrupted 24/7 offshore support.",
      "Integrated the Provider Portal with the A&G system via REST APIs and connected QNXT to Inovaare through AWS API Gateway for Duals and Medicare compliance.",
      "Built SSIS payment-extract integration with Change Healthcare for on-time EOB/EOP and 835 delivery; implemented Optum Web.Strat and Cotiviti pricing via BizTalk and SSIS.",
      "Converted legacy web-service calls to REST APIs consumed by MVC applications; monitored with AppDynamics, Azure Monitor, and SolarWinds.",
      "Earlier roles: NASCO process automation with Open Connect, CCS-to-NASCO gap analysis across 180+ IRS/RRD documents, and .NET portals, SSRS/SSIS, and HRO process work in Birmingham.",
    ],
    tags: [
      "QNXT",
      "NASCO",
      "C#",
      "ASP.NET",
      "AWS",
      "SSIS",
      "BizTalk",
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
      "Medicare brought into .NET post-pay applications, Auto-Recoup on Proclaim and Facets, vendor onboarding, and a Power BI dashboard for Credit Balance, Subrogation, and overpayment recovery across Medicare, Medicaid, and Commercial.",
    tags: ["Payment Integrity", "Facets", "C#", ".NET", "Power BI", "SQL Server"],
  },
  {
    title: "QNXT Claims, A&G, and Payments",
    description:
      "Production systems around QNXT scheduled adjudication, AutoQ, and payment runs — plus Molina’s 1,200-user appeals and grievances platform, Inovaare via AWS API Gateway, and Change Healthcare 835 / EOB / EOP extracts.",
    tags: ["QNXT", "Inovaare", "AWS API Gateway", "Claims", "C#", "SSIS"],
  },
  {
    title: "Cloud & Data Pipeline Modernization",
    description:
      "Legacy .NET to Node.js/Angular on AWS, SSIS to AWS Glue, SQL Server 2016 to 2022, and a QNXT cloud-migration roadmap for L.A. Care — including RFPs and a smaller lower-environment footprint before cutover.",
    tags: ["AWS", "AWS Glue", "Node.js", "Angular", "SQL Server", "QNXT"],
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
      "FWA",
      "Claims Adjudication",
      "Coordination of Benefits",
    ],
  },
  {
    label: "Engineering",
    skills: ["C#", ".NET", "SQL Server", "Entity Framework", "T-SQL"],
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
