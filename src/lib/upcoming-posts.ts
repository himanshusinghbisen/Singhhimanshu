/**
 * Draft posts ready to publish later (one-by-one).
 * Move an entry into `posts` in posts.ts when you want it live.
 */
import type { BlogPost } from "@/lib/posts";

export const upcomingPosts: BlogPost[] = [
  {
    slug: "why-data-formats-still-matter",
    title: "Why data formats still matter",
    summary:
      "Cloud APIs made systems more format-tolerant—but integrity, performance, interoperability, and storage cost still hang on the contracts you define for files and types.",
    date: "2026-09-14",
    readingMinutes: 6,
    tags: ["Data", "Engineering", "Architecture"],
    body: [
      "After enough years close to databases and integration pipelines, “what format is it in?” stops sounding pedantic. Format is the contract that decides whether data survives the trip between systems. That contract includes the container—CSV, JSON, text, Avro, Parquet—and the types inside it. An Excel sheet can show the same value as Feb 19, 2025 or 02/19/2025. Presentation is not the same thing as the typed value underneath. When those disagree across environments, joins and calculations fail in ways that look like business bugs.",
      {
        type: "figure",
        src: "/images/blog/data-toolkit-formats-matter.jpg",
        alt: "Four reasons data formats matter: integrity, performance, interoperability, and storage cost.",
        caption:
          "Formats are contracts. Consistency protects integrity, speed, interoperability, and cost.",
      },
      "Integrity is the first reason formats matter. mm/dd/yyyy versus dd/mm/yyyy is a classic silent corruption. So is an amount stored as integer in one feed and decimal in another. Once two systems disagree about type or layout, every downstream dashboard inherits the ambiguity. Consistent formats keep data recognizable as it moves from operational stores to analytic ones.",
      "Performance is the second. Cleanup is compute. If every job begins by coercing strings into dates, guessing encodings, and reshaping nested JSON into rows, you pay a tax before analysis starts. Columnar formats such as Parquet change scan cost for analytical workloads; row-oriented JSON may be the right choice for APIs and event payloads. The “best” format depends on access pattern—but choosing deliberately is faster than rediscovering the wrong choice in production.",
      "Interoperability is the third. Standard shapes move across vendors and teams with less custom parsing. A clear CSV schema or Avro contract is cheaper than a tribal understanding of “the file Finance drops on Thursdays.” Storage efficiency is the fourth. Compression ratios and encoding choices show up on cloud invoices. The same logical dataset can be inexpensive or painful depending on whether you store it as verbose JSON or a compressed columnar layout.",
      "None of this means formats should be rigid forever. APIs and cloud platforms are more format-tolerant than older batch estates. Payloads get translated, reshaped, and exchanged as needed. That flexibility is useful—especially when producers and consumers evolve on different clocks. But tolerance is not the same as having no contract. Someone still decides the schema at the boundary. Treat formats as flexible containers with explicit types, not as an excuse to skip design.",
      "A practical habit from claims and payment-integrity pipelines: define the exchange contract before the transform logic. Name the file or message type, freeze the field types, document null rules and date layouts, and version the schema when it changes. Then choose CSV for simple tabular handoffs, JSON for API-shaped payloads, and Parquet/Avro when volume and repeated analytic reads dominate. Format choice becomes an architecture decision instead of an afterthought.",
      "Bar charts remain a strong default once the data is trustworthy. Column charts compare categories or time periods; horizontal bars encode magnitude cleanly; stacked bars show parts-to-whole; diverging bars handle gains and losses around a center line. They rank high on perceptual accuracy—but they cannot rescue biased collection, missing values, or a misleading level of aggregation. Format discipline reduces one class of error. Statistical honesty has to handle the rest.",
    ],
  },
  {
    slug: "descriptive-vs-inferential-statistics",
    title: "Descriptive vs inferential statistics—and when a QQ plot helps",
    summary:
      "Descriptive statistics summarize the data you have. Inferential statistics carefully extend a sample toward a population. Mixing them up is how dashboards overclaim.",
    date: "2026-09-14",
    readingMinutes: 7,
    tags: ["Statistics", "Data Science", "Analytics"],
    body: [
      "Every data review eventually makes a claim. Some claims only describe the rows on the screen. Others quietly imply something about a larger world. Descriptive and inferential statistics exist to keep that difference visible.",
      "Descriptive statistics summarize and present the dataset you actually measured. Common tools are measures of central tendency—mean, median, and mode—measures of dispersion such as range, variance, and standard deviation, plus frequency tables and charts. The goal is clarity: where is the center, how wide is the spread, and what shape shows up when you plot it.",
      "Inferential statistics go further. They use a sample to support careful statements about a larger population—through hypothesis tests, confidence intervals, and regression. The leap is powerful and easy to abuse. It requires sampling assumptions, an explicit population, and enough humility to separate estimate from certainty.",
      {
        type: "figure",
        src: "/images/blog/data-toolkit-descriptive-vs-inferential.jpg",
        alt: "Side-by-side comparison of descriptive statistics versus inferential statistics methods and purpose.",
        caption:
          "Descriptive summarizes what you measured. Inferential asks what that implies more broadly.",
      },
      "A concrete example helps. Suppose you summarize commute modes for employees at one office campus: mean commute time, the most common mode, the spread across teams. That is descriptive work. It does not automatically describe every employer in the city or region. Inferential methods—with a sampling design and stated assumptions—are what let you argue from a sample toward a wider population. In business meetings, that boundary gets blurred whenever a slide titled “what we see” is heard as “what is true everywhere.”",
      "Descriptive statistics still earn their keep as the foundation. The mean is sensitive to extremes; the median is often more honest for skewed operational data; the mode surfaces the most common category. Dispersion tells you whether a “typical” value is representative or a coincidence. Range is simple but brittle. Variance averages squared distance from the mean; standard deviation brings that spread back into the original units so people can interpret it. Frequency tables, histograms, and bar charts make the distribution visible so you are not negotiating with a single headline number.",
      "Inferential work starts only after that picture is clear. Hypothesis tests ask whether an observed difference is compatible with chance under a model. Confidence intervals communicate range, not just a point. Regression relates predictors to outcomes and forces you to confront confounding and fit. None of these tools forgive a convenience sample pretending to be a census.",
      "A QQ (quantile–quantile) plot is one of the most practical visual checks before you lean on distributional assumptions. Quantiles split a distribution into equal-probability parts—quartiles into four, percentiles into a hundred. A QQ plot graphs sample quantiles against theoretical quantiles from a reference distribution, often the normal. If the points roughly follow the diagonal, the sample is compatible with that distribution. Points need not sit exactly on the line; random scatter above and below is expected. A useful heuristic is the fat-pencil test: if a thick pencil covering the reference line also covers the points, the match is plausible. Systematic curves or bends suggest skew, heavy tails, or another family such as lognormal or exponential.",
      "Why does this matter in production analytics? Because payment-integrity, claims, and operational reviews are full of samples that look complete. A week of claims is not the year. One provider peer group is not the network. Descriptive summaries keep teams honest about what the extract contains. Inferential methods—and assumption checks like QQ plots—are what justify statements that reach beyond the extract. Label the claim either way, and the room makes better decisions.",
    ],
  }
];
