export type BlogFigure = {
  type: "figure";
  src: string;
  alt: string;
  caption?: string;
};

export type BlogBlock = string | BlogFigure;

export type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  readingMinutes: number;
  tags: string[];
  body: BlogBlock[];
};

export const posts: BlogPost[] = [
  {
    slug: "clustering-for-citywide-grocery-delivery",
    title: "Using clustering to design citywide grocery delivery",
    summary:
      "How k-means clustering turns customer locations into delivery territories, store partnerships, and route-friendly hubs—and how the elbow method helps you choose k.",
    date: "2026-09-10",
    readingMinutes: 8,
    tags: ["Data Science", "Clustering", "Operations"],
    body: [
      "Clustering answers a practical question: which things belong together? Unlike supervised models that predict a label you already know, clustering discovers structure in unlabeled data. In city operations, that structure is often geographic—customers, stores, and delivery windows that form natural neighborhoods once you stop treating every address as an isolated point.",
      "A grocery delivery business is a clean example. Orders land across dozens of ZIP codes. Partner stores sit in different parts of the city. Same-day SLAs punish long cross-town hops. The goal is not one warehouse that serves everyone equally poorly. It is a small set of hubs—existing grocery partners or micro-fulfillment points—each responsible for a coherent territory so the average trip stays short.",
      "K-means is a strong first tool for that problem. You choose k, the number of hubs. The algorithm then partitions customers into k groups and places a centroid in each group. Those centroids become candidate store partnerships or distribution hubs. The same partition also guides routing: once a multi-stop run is confined to one cluster, the driver is no longer zigzagging across unrelated neighborhoods.",
      "Start with a map of enrolled customers as green points and candidate stores as blue points. In the first pass, the blue points—or any reasonable seed locations—act as centroids. Each customer is assigned to the nearest centroid using Euclidean distance in a projected coordinate space (or a city-appropriate distance if you have road data). That assignment step is the heart of the algorithm: membership follows proximity.",
      {
        type: "figure",
        src: "/images/blog/clustering-euclidean-distance.jpg",
        alt: "Formula card for Euclidean distance used to assign each customer to the nearest hub centroid.",
        caption:
          "Euclidean distance — assign customer x to the centroid c with the smallest d(x, c).",
      },
      {
        type: "figure",
        src: "/images/blog/clustering-kmeans-assignment.jpg",
        alt: "Illustration of customer locations assigned to the nearest of three store hubs, with lines connecting each customer to its hub.",
        caption:
          "Assignment step — each customer joins the nearest hub. Those neighborhoods become delivery territories.",
      },
      "After every customer has a cluster, recompute each centroid as the average position of its members. The hub “slides” toward the densest part of its territory. Then repeat: re-assign customers to the updated hubs, then recompute averages again. Stop when membership stops changing—or when centroid movement falls below a small threshold. The final centroids are actionable: they are the places where a partner store, dark store, or cross-dock creates the most geographic leverage.",
      {
        type: "figure",
        src: "/images/blog/clustering-centroid-formula.jpg",
        alt: "Formula card showing the centroid update as the mean of all customers in a cluster.",
        caption:
          "Centroid update — hub j moves to the mean of its members Sⱼ, then assignment runs again.",
      },
      {
        type: "figure",
        src: "/images/blog/clustering-centroid-update.jpg",
        alt: "Illustration of an old centroid moving to the average of its cluster members to become the new hub location.",
        caption:
          "Update step — move each hub to the mean of its customers, then re-assign. Iterate until the map stabilizes.",
      },
      "What about k itself? Too few hubs and territories stay oversized; drivers burn time. Too many hubs and partnership cost, inventory complexity, and thin volume per store erode the model. The elbow method helps. Plot within-cluster sum of squares (how far customers sit from their hub) against k. Early increases in k cut that error sharply. Later increases buy little. The “elbow”—where the curve flattens—is a practical starting value for how many store partnerships to pursue.",
      {
        type: "figure",
        src: "/images/blog/clustering-wcss-formula.jpg",
        alt: "Formula card for within-cluster sum of squares used by the elbow method to choose k.",
        caption:
          "WCSS — total squared distance from customers to their hubs; plot against k to find the elbow.",
      },
      {
        type: "figure",
        src: "/images/blog/clustering-elbow-method.jpg",
        alt: "Elbow-method chart plotting within-cluster sum of squares against number of clusters, with the elbow marked near k equals 3.",
        caption:
          "Elbow method — WCSS falls quickly at first, then flattens. The bend is a data-informed guess for k.",
      },
      "In production you refine beyond textbook k-means. Weight customers by order frequency or basket value so high-volume blocks pull hubs harder. Cap cluster radius to honor delivery-time promises. Re-run weekly as the customer map shifts. And treat ZIP codes as a feature or stratification layer, not the whole model—ZIP boundaries are administrative; travel time is operational.",
      "The same pattern shows up outside grocery: provider panels by geography, claims audit sampling by peer groups, or warehouse catchment design. Clustering does not invent strategy. It makes the latent geography visible so partnership and routing decisions stop being gut feel drawn on a whiteboard.",
    ],
  },
  {
    slug: "correlation-in-data-analysis-and-modelling",
    title: "Correlation in data analysis and modelling",
    summary:
      "A practical walkthrough of positive and negative correlation, coefficient strength bands, and three simple scenarios—salary vs experience, car depreciation, and study hours vs scores.",
    date: "2026-09-08",
    readingMinutes: 5,
    tags: ["Data Science", "Statistics", "Modelling"],
    body: [
      "Correlation is the statistical relationship between two variables—how they move together. Ice cream sales rising with temperature is a classic example. That relationship can be positive (both rise together) or negative (one rises while the other falls). Higher employment with lower discretionary spending is one way to think about a negative relationship in everyday terms.",
      "The correlation coefficient summarizes strength on a scale from −1 to 1. In absolute value, roughly: under 0.1 is effectively no correlation; 0.1 to 0.3 is little; 0.3 to 0.5 is medium; 0.5 to 0.7 is high; and 0.7 to 1.0 is very high. Sign tells direction; magnitude tells how tightly the points track a linear pattern.",
      "Scenario 1 looks at years of IT experience against monthly salary (in rupees), with savings-account balance as a third series. Experience and salary move almost in lockstep—about 0.97, a very high positive correlation. Experience and account balance are also related, but the strength is weaker. That distinction matters in modelling: a strong linear signal is useful; a weaker one needs more caution before you treat it as predictive.",
      {
        type: "figure",
        src: "/images/blog/correlation-experience-salary.jpg",
        alt: "Line chart of years of IT experience versus monthly salary and savings account balance, showing a strong positive correlation between experience and salary.",
        caption:
          "Scenario 1 — Experience vs salary (≈0.97): a very high positive correlation; account balance tracks experience more loosely.",
      },
      "Scenario 2 is car appraisal price over the years after purchase. As the car ages, appraisal price falls. The coefficient is about −0.96: again very high in magnitude, but negative. The older the car, the lower the price. Negative correlation is not “bad data”—it is a clear inverse relationship.",
      {
        type: "figure",
        src: "/images/blog/correlation-car-appraisal.jpg",
        alt: "Line chart of years after purchase versus car appraisal price, showing a strong negative correlation as the car ages.",
        caption:
          "Scenario 2 — Years after purchase vs appraisal price (≈−0.96): a very high negative correlation.",
      },
      "Scenario 3 plots hours studied against exam scores. More study time aligns with higher scores, with a coefficient above 0.9—another very high positive correlation. Across all three examples, the lesson is the same: correlation measures association, not causation, but strong coefficients still tell you which pairs deserve a modeler’s attention first.",
      {
        type: "figure",
        src: "/images/blog/correlation-hours-scores.jpg",
        alt: "Line chart of hours studied versus exam scores, showing a strong positive correlation.",
        caption:
          "Scenario 3 — Hours studied vs exam scores (>0.9): another very high positive correlation.",
      },
      "This note grew out of coursework for DSC 500 (Introduction to Data Science) in the Master’s in Data Science program at Bellevue University. The scenarios are teaching examples; in production analytics—claims, recovery, or fraud signals—the same discipline applies: inspect direction, strength, and whether the relationship is stable enough to trust.",
    ],
  },
  {
    slug: "beyond-pay-and-chase-payment-integrity-engine",
    title:
      "Beyond pay-and-chase: a closed-loop payment integrity architecture",
    summary:
      "Pre-pay and post-pay only work together—fast inline scoring for adjudication, deeper retrospective analytics as the feedback loop that keeps the rules honest.",
    date: "2026-09-07",
    readingMinutes: 8,
    tags: ["Payment Integrity", "Architecture", "Healthcare"],
    body: [
      "Payers have lived with an uncomfortable compromise for a long time: pay claims quickly enough to meet prompt-pay rules, then recover improper payments months later through auditors and contingency vendors. That retrospective model—pay-and-chase—still recovers dollars, but it is expensive in ways that do not show up on a single claim. Contingency fees consume a large share of what comes back. Provider disputes and insolvency leave balances uncollectible. And every clawback spends relationship capital the network does not easily replace.",
      "The obvious engineering reaction is to push everything upstream into pre-payment adjudication. That instinct is right about leakage and wrong about latency. If an inline integrity check floods the pend queue with false positives, stalls past state prompt-pay windows, or demands charts the old fax way, the plan trades recovery savings for interest penalties and provider abrasion. The useful question is not pre-pay versus post-pay. It is how the two become one system.",
      "I have spent enough years around QNXT, Facets, and post-pay recovery workflows to see the same split repeat: adjudication teams optimize for throughput, integrity teams optimize for depth, and the handoff between them is a file drop or a vendor portal. The architecture that holds up treats post-pay as the asynchronous research loop and pre-pay as the low-latency execution path those findings eventually harden into.",
      "The tradeoff is latency versus context. Pre-pay sees a point-in-time claim—an 837 or FHIR payload, eligibility at the moment of adjudication, and whatever features you can hydrate in tens of milliseconds. Post-pay sees months of cross-facility history, retrospective eligibility changes, coordination-of-benefits signals, and chart-level evidence. Pre-pay fails when it pends too much. Post-pay fails when money is already gone and the chase costs more than the return. A closed-loop engine accepts both constraints instead of pretending one phase can do the other’s job.",
      "In practice that means a two-phase design connected by an event stream. Phase one is an inline pipeline that must finish before adjudication commits the line—deterministic edits first (NCCI, MUE, mutually exclusive pairs), then feature hydration from a fast store, then a compact model score, then a value-aware routing decision. Not every high anomaly score deserves a human review. A small office visit that would cost more to chart-review than it could save should often fast-path. A high-dollar implant claim with the same score should not.",
      "Phase two starts when payment goes out. The claim is still emitted onto a stream and landed in an analytical store where graph analytics, longitudinal drift detection, and retrospective eligibility can run without a prompt-pay clock. That is where organized billing patterns, impossible rendering hours, and code creep across a peer group become visible. Those findings should not die in a spreadsheet. They should become candidate rules or features, shadow-replayed against recent history for false-positive rate and net dollar impact, and only then promoted into the inline path.",
      "Provider abrasion is the failure mode that kills otherwise good pre-pay designs. Generic additional documentation requests and mail-based chart chases cannot keep pace with a statutory clock. Targeted FHIR exchanges—asking for the specific Observation or Procedure evidence you need—and clear remittance remark codes are part of the architecture, not a polite afterthought. If the provider cannot tell why a claim was edited, the model score does not matter.",
      "The strategic takeaway is simple. Post-pay alone leaves recovery to contingency economics and delayed trust damage. Pre-pay alone risks regulatory pressure and operational gridlock. The durable pattern uses pre-pay as the execution engine and post-pay as the continuous intelligence pipeline—linked by streaming, backtesting, and promotion criteria that prefer precision over theater.",
    ],
  },
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
