import type { BlogPost } from "@/lib/posts";

/**
 * End-to-end data science lifecycle series.
 * Production shows a part on its date. Development shows every part.
 * Mondays: Oct 26, Nov 2, Nov 9, Nov 16, Nov 23, Nov 30, Dec 7, Dec 14 (2026).
 */
export const lifecycleSeries: BlogPost[] = [
  {
    slug: "problem-framing-before-the-model",
    title: "Problem framing: the question before the model",
    summary:
      "Part 1 of 10. Translate a business problem into an analytical question, define the target and success metrics, and make the constraints explicit before choosing a model.",
    date: "2026-10-26",
    readingMinutes: 9,
    tags: ["Data Science", "Problem Framing", "Machine Learning", "Lifecycle"],
    body: [
      "This is part 1 of a practical series on the end-to-end data science lifecycle: framing the problem, acquiring and preparing data, exploring patterns, building and validating models, and putting results into use. The methods apply across industries. Examples will draw from different domains—including healthcare—but the focus is on transferable analytical and engineering skills.",
      "A data science effort can fail before the first line of Python when it starts with a tool instead of a decision. Someone says reduce customer churn, detect suspicious transactions, improve a manufacturing yield, or forecast next quarter\u2019s demand. Those are business asks, not yet analytical questions. Translate the request into a decision: who will act on the result, what action could change, and what evidence would make that action worthwhile.",
      {
        type: "figure",
        src: "/images/blog/lifecycle-problem-framing.jpg",
        alt: "Three columns translating a vague ask into a data question and a success metric, with constraints listed underneath.",
        caption:
          "The ask, the question, and the metric belong on one page, with the constraints that will not move.",
      },
      "The translation names the task. Classification asks which case belongs in a class. Regression asks for a number. Clustering, which comes later in this series, asks for groups when nobody has labeled the rows yet. Picking the task is not a technical preference. It is a statement of what the business is willing to act on.",
      "Classification is the right task when the decision is a label. A customer may renew or cancel; a transaction may be legitimate or suspicious; a manufactured unit may pass or fail inspection. Healthcare offers another example: a member may or may not need an outreach intervention. Binary and multiclass problems are both classification. What makes the task classification is that the action depends on the predicted category.",
      "Regression is the right task when the decision needs a numeric estimate. Predicting customer lifetime value, delivery time, equipment energy use, or monthly sales volume are examples. Healthcare can provide a familiar case too, such as estimating length of stay or expected cost. Forecasting is regression with time made explicit. If the real decision is only whether a value will cross a threshold, the task may instead be classification; document that threshold during framing.",
      {
        type: "figure",
        src: "/images/blog/lifecycle-classification-regression.jpg",
        alt: "Side-by-side examples of classification and regression: a yes-or-no member outcome, a proper-or-improper claim, and a provider tier, versus expected payment, days until discharge, and next-quarter volume.",
        caption:
          "Classification changes the action by category. Regression changes the action by the size of a number.",
      },
      "The classification picture might compare customer activity with time since the last purchase, using known renewals and cancellations as labels. The regression picture might compare advertising spend with sales, then estimate sales for a proposed budget. These examples make the distinction visible: classification predicts a category; regression estimates a quantity. The same distinction applies to healthcare, finance, retail, and industrial data.",
      {
        type: "figure",
        src: "/images/blog/lifecycle-task-examples.jpg",
        alt: "Two graphs. Classification plots members by claims and months since the last visit, split into stays and leaves by a line. Regression plots billed amount against paid amount, with a line estimating four thousand dollars for a six-thousand-dollar claim.",
        caption:
          "Labeled groups decide an action. A fitted line estimates a value.",
      },
      "The metric has to match the cost of being wrong. Accuracy is a poor default when the event is rare: a fraud detector that labels every transaction legitimate may look accurate while missing every fraudulent event. Recall matters when missed cases are costly; precision matters when false alarms trigger expensive reviews. For regression, consider MAE, RMSE, or error against a simple baseline. Ultimately, connect technical metrics to business outcomes such as revenue retained, defects avoided, time saved, or service levels improved.",
      "Constraints belong on that same page, or they arrive later as surprises. Which data are you allowed to use. How fast the decision has to return. What privacy rule covers the row. Whether the result has to run inside a system that already exists, or whether a monthly memo is the whole deployment. A question you cannot answer under those constraints is a different project, not a harder version of this one.",
      "Create a short problem-framing brief before data exploration: business decision; analytical question; unit of analysis and eligible population; target variable and prediction horizon; available-at-decision-time features; success metric and baseline; operational constraints; and the action that follows the result. Check for target leakage: a feature must not contain information that would only become available after the prediction is made. This brief becomes the contract between the business question and the technical work. Part 2 moves into source discovery and reliable data ingestion.",
    ],
  },
  {
    slug: "data-collection-and-ingestion",
    title: "Data collection and ingestion: building a reliable data foundation",
    summary:
      "Part 2 of 10. Build a reliable data foundation with source discovery, SQL and API extraction, batch and streaming patterns, data contracts, validation, orchestration, and lineage.",
    date: "2026-11-02",
    readingMinutes: 12,
    tags: ["Data Engineering", "ETL", "APIs", "Data Pipelines", "Lifecycle"],
    body: [
      "Part 2 of the data science lifecycle. With the analytical question, target, and constraints defined, the next task is to acquire the right data and move it reliably into an environment where it can be analyzed. Collection identifies the sources and fields needed for the question. Ingestion is the controlled movement of data from those sources into a platform where it can be validated, tracked, and prepared. These practices apply whether the source is a customer database, a public API, an IoT stream, a financial feed, or a healthcare system.",
      {
        type: "heading",
        text: "1. Start with the business question and source inventory",
      },
      "Do not begin by connecting every available database. Start with the decision from part 1: what population, event, and time window does the analysis require? Then make a source inventory that records the system owner, business purpose, data domain, refresh cadence, delivery method, expected volume, sensitivity, retention requirement, and the person who can explain the fields.",
      "Useful sources depend on the business question. A retail analysis may need orders, products, inventory, web events, and customer interactions. A financial-services use case may combine accounts, transactions, payment events, and market data. An industrial use case may use equipment telemetry, maintenance records, production batches, and quality inspections. A healthcare payer example may combine eligibility, claims, provider, authorization, and pharmacy data. Across domains, systems rarely share identical definitions or keys, so identify the authoritative source for each concept before joining anything.",
      "A source inventory should also record what is missing. An order extract without returns may overstate net sales. A financial transaction feed without reversals may distort balances. A sensor feed without calibration or maintenance context may create misleading anomaly signals. In a healthcare example, a claims extract without adjustment history may be unsuitable for a paid-claims trend. Write down these limits before treating an extract as complete.",
      {
        type: "figure",
        src: "/images/blog/lifecycle-data-ingestion.jpg",
        alt: "SQL systems, cloud warehouses, APIs, and partner files feeding a controlled ingestion process with source inventory, data contract, validation, and lineage.",
        caption:
          "The ingestion boundary is where source ownership, data contracts, validation, and lineage become explicit.",
      },
      {
        type: "heading",
        text: "2. Understand common data sources and formats",
      },
      "Most analytical platforms combine data from relational databases, cloud warehouses, application APIs, event brokers, object storage, public datasets, and partner file exchanges. In a healthcare payer example, common administrative EDI transactions include the 834 for enrollment, 837 for claims, 835 for remittance advice, 270/271 for eligibility, 276/277 for claim status, and 278 for authorization-related services. The same source-inventory method applies to retail orders, banking transactions, web events, manufacturing sensors, and customer-support systems; only the domain-specific formats change.",
      "For healthcare interoperability, FHIR APIs may expose resources such as Patient, Coverage, ExplanationOfBenefit, Claim, Organization, and Practitioner, depending on the implementation and access agreement. This is one domain-specific API example—not a requirement for a general data science pipeline. For any API, understand its schema, authentication, pagination, rate limits, versioning, and permitted use before building the extractor.",
      "Files remain common because employers, vendors, clearinghouses, and legacy platforms often exchange scheduled extracts. CSV is easy to inspect but weakly typed. JSON represents nested API payloads. XML appears in several established exchange formats. Parquet is efficient for analytical storage because it is columnar and preserves a schema. The extension alone does not define the contract: document encoding, delimiters, compression, null conventions, date formats, code sets, and schema version too.",
      {
        type: "heading",
        text: "3. Choose the ingestion pattern deliberately",
      },
      "Batch ingestion is appropriate when scheduled freshness is sufficient: nightly orders, daily account transactions, weekly product catalogs, or periodic sensor summaries. Define the schedule, delivery window, expected volume, and what happens when a delivery is late. A batch process should be restartable for a specific business date or source batch rather than requiring an operator to rerun everything.",
      "API-based ingestion is useful when a consumer needs request-and-response access or a source publishes resources through a managed interface. Plan for authentication and token renewal, pagination, rate limits, timeouts, retries with backoff, and source throttling. Store the request window and continuation state so a partial page sequence is not mistaken for a complete pull. Respect the API's permitted purpose and access scope.",
      "Event-driven ingestion is useful when a downstream process needs lower-latency updates. Events might represent an order being placed, a payment being authorized, a device crossing a temperature threshold, or a claim status changing. Design for at-least-once delivery: a consumer may receive the same event more than once. Use a stable event identifier, idempotent processing, an ordering strategy where required, and a dead-letter path for messages that cannot be processed. Do not promise exactly-once business outcomes merely because a broker offers delivery features.",
      "ETL transforms data before loading it into its destination. ELT lands source data first and transforms it inside the analytical platform. Neither is universally better. ETL may be appropriate when sensitive fields must be minimized before they reach a destination. ELT can preserve source history and use scalable warehouse compute, provided raw access is tightly controlled. The architecture should follow security, latency, audit, and operating constraints—not fashion.",
      {
        type: "heading",
        text: "4. Define the data contract before building the job",
      },
      "A data contract is an agreement between the producer and consumer about what a delivery means. At minimum, define the business grain, schema and version, field definitions, data types, required and optional fields, code sets, primary or natural keys, effective-date rules, timezone, null semantics, delivery cadence, expected volume, and correction behavior. Name the owner on both sides and the process for communicating a breaking change.",
      "Grain is fundamental to analytical correctness. One row may represent a customer, an order, an order line, a product, an account transaction, or a sensor reading. These are not interchangeable. If an order-level total is joined to several order lines and then summed, the total may multiply. In a healthcare example, a claim header and its service lines also represent different grains. Put the grain in the contract and preserve it in table names and documentation.",
      "Every extract needs an as-of time and an event or business-effective time when those differ. An order may be placed today, shipped tomorrow, and returned next week. A financial transaction may be posted later than its event date. Store event time, source update time, ingestion time, and effective dates separately where available. This makes late-arriving data explainable instead of silently rewriting history.",
      {
        type: "heading",
        text: "5. Build a repeatable, restartable pipeline",
      },
      "A production ingestion job needs more than a SELECT statement or a file copy. A useful sequence is: register the expected delivery; authenticate and retrieve it; validate transport and file integrity; land the original payload; record metadata; parse and validate the schema; apply basic technical checks; publish a success or quarantine outcome; and emit operational metrics. Keep extraction separate from downstream business transformations so a failed model does not force a new source pull.",
      "Use watermarks or checkpoints to identify what has already been collected. A watermark might be a source update timestamp, monotonically increasing identifier, change-data-capture position, or a partner's sequence number. The correct choice depends on source behavior. A timestamp-only incremental pull can miss records when timestamps are backdated, have low precision, or are updated out of order. Reconcile incremental loads against periodic full counts or bounded historical re-reads.",
      "Make reruns safe. A common pattern is to write each delivery to a unique batch location, validate it, then publish it to the curated landing area only after checks pass. Record a batch ID and source file checksum. Use merge or upsert logic keyed to the business event where appropriate, and retain the original delivery for audit. If a partner resends a file, the pipeline should recognize the duplicate delivery rather than double-count its orders or transactions.",
      {
        type: "heading",
        text: "6. Land raw data with lineage and provenance",
      },
      "Keep an immutable or access-controlled raw landing layer when policy and retention rules allow it. It should preserve what the source sent, not a cleaned interpretation of it. Alongside the payload, capture source system, source object or endpoint, partner, file name, batch ID, extraction window, received timestamp, ingestion timestamp, schema version, checksum, record count, job version, and processing status. These fields let an engineer answer which delivery produced a row and which code processed it.",
      "A practical lake or warehouse layout often separates raw, validated, and curated zones. Raw preserves the received representation. Validated data has passed structural and basic quality checks while remaining close to source meaning. Curated data is standardized for analysis and downstream products. These are logical responsibilities; they do not require three separate storage products. Apply access controls at each layer and avoid broad access to raw PHI simply because it is convenient.",
      "Lineage should be traceable in both directions. From a dashboard value, an analyst should be able to identify the curated table, transformation version, source batches, and upstream systems. From a source delivery, an operator should be able to see which tables, features, models, and reports it affected. This is essential when a vendor corrects a file or a source system reprocesses historical records.",
      {
        type: "heading",
        text: "7. Protect sensitive data and enforce allowed use",
      },
      "Data collection is a governance decision as much as an engineering task. Confirm the permitted purpose, legal or contractual basis, minimum-necessary fields, retention period, and approved destinations before moving personal, financial, confidential, or regulated data. In a healthcare implementation, HIPAA requirements may also apply depending on the organizations, roles, data, and use. A data pipeline does not create permission to use information for a new purpose. Involve privacy, security, compliance, and data owners when the use or sharing arrangement is unclear.",
      "Use encryption in transit and at rest, managed secrets, least-privilege service identities, network restrictions, and auditable access. Separate production credentials from development. Mask or tokenize sensitive identifiers in lower environments, and use synthetic or appropriately de-identified data for testing where feasible. Avoid personal or confidential data in job logs, exception messages, filenames, and monitoring labels. Define retention and secure deletion for both payloads and temporary copies.",
      "Allowed use belongs in metadata. Record the source, data owner, classification, approved purpose, restrictions, and applicable agreement or policy reference. A dataset that is technically accessible is not automatically approved for every analytic question. Recheck permissions when a new feature, vendor, model, or downstream consumer is introduced.",
      {
        type: "heading",
        text: "8. Validate quality at the ingestion boundary",
      },
      "Run checks before data is released to downstream users. Structural checks confirm that the file opens, the schema is recognized, and required columns exist. Completeness checks compare received files and records with expected deliveries. Type and domain checks validate dates, numeric values, code sets, and allowed status values. Key checks identify missing identifiers and duplicate business events. Referential checks test whether claim lines connect to known headers or provider identifiers where the relationship is expected.",
      "Reconciliation is particularly valuable. Compare source and landed record counts, control totals, billed and paid amounts, file-level totals, and counts by status or business date. For financial feeds, preserve the source control totals and explain any accepted difference. A job that exits with code zero is not proof that the data is complete or correct.",
      "Not every failed row should stop the whole batch. Define severity: reject the delivery for a broken schema or missing control total; quarantine invalid records when safe partial processing is allowed; warn on noncritical anomalies; and publish only when the agreed acceptance criteria are met. Keep rejected records protected, report the reason, and provide a controlled remediation and replay path.",
      {
        type: "heading",
        text: "9. Make operations observable",
      },
      "Monitor freshness, completeness, volume, schema drift, processing duration, retry count, rejected records, and reconciliation differences. Alert on business impact, not just infrastructure noise. A claims feed that is three hours late before a payment run deserves a different response from a low-priority reference file that is a day late.",
      "Give each pipeline an owner, runbook, service expectation, escalation path, and recovery procedure. The runbook should explain how to identify the affected batch, whether a rerun is safe, how to replay quarantined records, and how to notify downstream consumers. Track recurring incidents and work with the source owner to correct the contract rather than adding another permanent exception.",
      {
        type: "heading",
        text: "10. A worked example: ingesting daily commerce data",
      },
      "Consider an online retailer receiving daily order files from a commerce platform and inventory updates from a warehouse system. The ingestion service registers each delivery, verifies transport and checksum, stores the original payload in a controlled raw zone, and records the source, batch, timestamps, schema version, and record count. A parser validates the structure and required fields before publishing accepted records to a validated zone. The same design could ingest a healthcare 837 claims feed, but the domain-specific parser and governance rules would differ.",
      "The order pipeline preserves order-header and order-line grain separately. It reconciles accepted records to delivery control totals, quarantines malformed rows, and makes batch status visible to operations. Inventory events are linked through stable product and location keys rather than being appended as if they were order lines. Corrections are retained as new events or versioned changes according to the source contract, rather than silently overwriting history.",
      "An analyst can now calculate order volume, fulfillment time, and product availability while tracing each result back to the source delivery and transformation version. That distinction is the difference between a dataset that merely loads and one that can support a defensible business answer.",
      {
        type: "heading",
        text: "A practical ingestion readiness checklist",
      },
      "Before calling an ingestion pipeline production-ready, confirm eight things: the source owner and permitted purpose are known; grain, keys, schema, and effective dates are documented; the batch, API, or event pattern meets the freshness need; retries, checkpoints, idempotency, and replay are designed; raw payload and lineage are retained appropriately; sensitive-data access and retention are approved; quality rules and reconciliation are defined; and monitoring, ownership, and a recovery runbook are in place.",
      "The pull is complete only when it is repeatable, explainable, and permitted. The next part of this series takes the landed data and deals with what is wrong inside it: missing values, duplicate keys, outliers, and types that do not match.",
    ],
  },
  {
    slug: "data-cleaning-and-preparation",
    title: "Data cleaning: making messy records usable",
    summary:
      "Part 3 of 10. Missing values, duplicate keys, outliers, and types. Cleaning is a set of decisions, not a pass that makes the table innocent.",
    date: "2026-11-09",
    readingMinutes: 7,
    tags: ["Data Science", "Data Preparation", "Lifecycle"],
    body: [
      "Part 3 of the lifecycle series. The extract arrived. It is not ready. Real rows contain blanks, repeated keys, values in the wrong type, and extremes that may be errors or may be the point.",
      "Missing is a decision, not a blank to fill by habit. Dropping a row is honest when the field is required and the row cannot be used without it. Imputing a mean, a median, or a mode is honest when the gap is small and the absence itself is not informative. A model that predicts the missing field is another assumption, and it can smear one group’s values across another. Sometimes the useful feature is the fact of absence: a missing secondary payer, a missing discharge date. Filling that hole hides the signal.",
      {
        type: "figure",
        src: "/images/blog/lifecycle-data-cleaning.jpg",
        alt: "A messy record with padded text, a currency string, an ambiguous date, and a duplicated null key, next to a cleaned typed row. Four notes cover missing values, duplicates, outliers, and types.",
        caption:
          "Cleaning is a before-and-after you can defend, not a script you run and forget.",
      },
      "Duplicates are usually a grain problem. The same member and the same date appearing twice means two events were collapsed, or one event was loaded twice. Deleting one copy without knowing which is a guess. Trailing spaces and inconsistent case are cheaper: \" SMITH \" and \"Smith\" are the same name wearing different clothes. Fix the structure, then decide whether two rows are truly the same fact.",
      "Outliers need a reason. A paid amount three orders of magnitude above the rest can be a bad decimal, or it can be the implant claim the integrity program exists to see. Delete the tail only when you know it is impossible, and write down the rule. A cap you cannot explain will be the first thing a reviewer asks about.",
      "Types are the last quiet corruption. A date stored as text will sort as a string and join as a miss. A currency stored with a dollar sign and a comma is not a number until you parse it. Categories need one spelling. After the pass, the table should have a type for every column and a note for every row you dropped or filled. Next week is shaping: joins, the grain of the table, and the new columns that are really hypotheses.",
    ],
  },
  {
    slug: "data-wrangling-and-feature-engineering",
    title: "Data wrangling: shape the table the question needs",
    summary:
      "Part 4 of 10. Joins, aggregation, and new columns. A feature is a hypothesis about what predicts the outcome.",
    date: "2026-11-16",
    readingMinutes: 7,
    tags: ["Data Science", "Feature Engineering", "Lifecycle"],
    body: [
      "Part 4 of the lifecycle series. Clean columns are still the wrong shape if the question wants one row per member and you are holding one row per claim.",
      "Joins are where grain goes wrong in silence. Members on the left, claims on the right, and a many-to-many key will multiply both sides. The average you compute afterward is then an average of copies. Before the join, say what one output row means. After it, count the rows. If the count is not the count you expected, stop.",
      {
        type: "figure",
        src: "/images/blog/lifecycle-data-wrangling.jpg",
        alt: "A members table and a claims table joined into one row per member, with new columns for tenure, claim count, paid sum, and age band.",
        caption:
          "Two claim rows for member A become one member row. The new columns are summaries, not copies.",
      },
      "Aggregation changes the grain on purpose. A group-by rolls claims up to a member, a provider, or a month. A pivot spreads a category into columns. A melt does the reverse when a wide sheet is harder to filter than a long one. The operation is simple. The choice of grain is the analysis. A monthly rate and a member-level rate answer different questions, and mixing them in one chart is how a meeting argues past itself.",
      "Feature engineering is the step with the most temptation. Tenure in days, claims per year, a ratio of paid to billed, the month extracted from a date, an age band instead of a raw age. Each new column is a hypothesis: this shape carries the outcome better than the raw field. That can be true, and it can also be a leak. A feature that includes information from after the decision, or a total that includes the row you are trying to predict, will look brilliant and fail on the next month.",
      "Keep a short list of the columns you added, the grain they assume, and what they are forbidden to know. Next week is looking, before any model: one variable, then two, then the grid of how they move together.",
    ],
  },
  {
    slug: "exploratory-data-analysis",
    title: "Exploratory analysis: what the data is willing to say",
    summary:
      "Part 5 of 10. Distributions, relationships, and a correlation grid. A pattern at this stage is a hypothesis, not a finding for the steering committee.",
    date: "2026-11-23",
    readingMinutes: 6,
    tags: ["Data Science", "Exploratory Analysis", "Lifecycle"],
    body: [
      "Part 5 of the lifecycle series. The table is shaped. The next move is to look at it before you ask a model to have an opinion.",
      "Start with one variable at a time. Mean, median, and a sense of spread. A histogram or a box plot shows what a single number hides: two peaks, a pile of zeros, a tail you already decided to keep. If the median and the mean disagree, the distribution is doing something a dashboard average will mis-sell.",
      "Then two variables. A scatter plot is the honest picture of a relationship: direction, bend, and the clumps a correlation coefficient flattens into one number. A cross-tab does the same job for categories. Strong association is a reason to look harder. It is not a reason to claim a cause.",
      {
        type: "figure",
        src: "/images/blog/lifecycle-eda.jpg",
        alt: "Three panels: a histogram for one variable, a scatter plot with a trend for two variables, and a heatmap for many variables.",
        caption:
          "One variable, then two, then the grid. Stop when you have a hypothesis, not a slide.",
      },
      "A correlation grid is the multivariate pass in one picture. It tells you which pairs move together and which pairs are standing in for each other. Two features that are nearly the same will both look important and then split one signal in a model. The grid is a map of redundancy as much as a map of interest.",
      "Write down what you think you see, in sentences, and label each sentence as a hypothesis. Exploratory plots are easy to overfit with your eyes: you will find a story because you went looking. The test of the story comes later, on rows the plot did not use. Next week is mining: structure you did not label in advance, including groups and rules.",
    ],
  },
  {
    slug: "data-mining-and-pattern-discovery",
    title: "Data mining: finding structure you did not label",
    summary:
      "Part 6 of 10. Principal components, clusters, and association rules. They propose a structure. They do not prove a cause.",
    date: "2026-11-30",
    readingMinutes: 7,
    tags: ["Data Science", "Data Mining", "Lifecycle"],
    body: [
      "Part 6 of the lifecycle series. Exploration looked at variables you already cared about. Mining looks for structure you did not write down in advance.",
      "Dimensionality reduction is the first of those tools. Principal component analysis finds directions in the feature space that still hold the spread, then lets you set the weaker directions aside. The point is not a mysterious new axis with a grand name. The point is a smaller set of directions that still describe the cloud, so the next algorithm is not drowning in copies of the same signal.",
      "Clustering groups rows that sit near each other. K-means asks you for a number of groups and partitions the space. DBSCAN looks for dense regions and is willing to call sparse points noise. A hierarchy shows how groups merge as you loosen the definition of near. None of these return a true segment. They return a proposal you can test against a decision: do these members actually behave alike when you offer them the same thing.",
      {
        type: "figure",
        src: "/images/blog/lifecycle-data-mining.jpg",
        alt: "Three panels: principal component directions through a cloud of points, three colored clusters, and an association rule from bread and butter to milk.",
        caption:
          "Components, clusters, and basket rules are proposals. Support and confidence are not a cause.",
      },
      "Association rules are the market-basket version of the same idea. Which items show up together often enough to care, and when one is present, how often is the other. Support says the pair is common. Confidence says the second follows the first in this basket. Lift says the pair is more common than chance. A rule that bread and butter go with milk is a stocking hint. It is not evidence that butter causes milk.",
      "Use these methods when labels are missing or when you want a map before you commit to a prediction. Then take the map back to the question from part 1. A cluster that does not change a decision is a picture. Next week is prediction: a baseline, a stronger model only if it earns the complexity, and a held-out score.",
    ],
  },
  {
    slug: "modeling-baselines-and-validation",
    title: "Modeling: a baseline, then a harder model, then proof",
    summary:
      "Part 7 of 10. Beat a simple baseline, add complexity only when the errors justify it, and trust the score you did not train on.",
    date: "2026-12-07",
    readingMinutes: 7,
    tags: ["Machine Learning", "Modeling", "Lifecycle"],
    body: [
      "Part 7 of the lifecycle series. The question, the table, and the look are done. A model is a way to turn that table into the decision you named in part 1. It is not a prize for using a more elaborate algorithm. Classification wants a model that emits a class, or a score you cut into a class. Regression wants a model that emits a number. The baseline below is the simple version of that same task.",
      "Start with a baseline you could explain in a sentence. Predict the median. Predict the majority class. Fit a plain regression or a logistic regression with a few columns you already trust. That score is the number a fancier model has to beat. If it cannot, the extra machinery is costume.",
      "Reach for a stronger fit when the baseline’s errors have a shape you can see. A random forest or a gradient-boosted tree when interactions matter and the table is tabular. A neural network when the input is the kind of signal those models are built for, and you have the data and the serving path to match. The algorithm is chosen by the errors and the constraint, not by what was new in a paper this year.",
      {
        type: "figure",
        src: "/images/blog/lifecycle-modeling.jpg",
        alt: "Three stages labeled baseline, a stronger fit, and held-out proof, plus a chart where training error keeps falling and validation error turns up.",
        caption:
          "The training curve can keep falling after the model has started memorizing. The validation curve is the one that counts.",
      },
      "Proof is a split you did not train on. Cross-validation estimates how the score moves across folds. A final holdout, touched once, is the number you report. Hyperparameter tuning belongs inside the training folds. A tune that peeks at the holdout is another way to memorize. Watch the pair of curves: when training error keeps dropping and validation error turns up, the model is fitting the sample, not the process that will produce next month’s rows.",
      "Report the baseline, the model, and the gap, on the metric from part 1. A lift that does not survive the holdout is not a lift. Next week is the last part: the picture and the sentence a stakeholder can use.",
    ],
  },
  {
    slug: "visualization-and-data-storytelling",
    title: "Visualization: the chart has to carry a decision",
    summary:
      "Part 8 of 10. Choose the chart for the comparison you need, and decide whether the audience needs a live dashboard or a frozen argument.",
    date: "2026-12-14",
    readingMinutes: 6,
    tags: ["Data Science", "Visualization", "Lifecycle"],
    body: [
      "Part 8 of the lifecycle series. The work so far produced a result. A pile of charts is not the same thing as a decision someone can make on Thursday.",
      "Start from the sentence, then pick the picture. A comparison across groups wants a bar. A change across time wants a line. A grid, where the point is which two categories meet, wants a heatmap. A scatter is for a relationship you are willing to show point by point. The wrong chart does not merely look worse. It answers a different question than the one you framed.",
      {
        type: "figure",
        src: "/images/blog/lifecycle-visualization.jpg",
        alt: "Three chart types side by side: bars to compare groups, a line to show change over time, and a heatmap for a grid, with a note on dashboards versus static charts.",
        caption:
          "Bar, line, or heatmap is a choice about the decision, not about taste.",
      },
      "The narrative is the business consequence, then the evidence, then what you recommend and what would change your mind. Model names and feature lists are appendix material unless the audience is the person who will maintain the pipeline. A stakeholder who asked about recovery does not need the silhouette score. They need the rate, the comparison, and the action.",
      "Choose the container the same way. A dashboard in Streamlit, Tableau, or Power BI is for a decision that repeats and should move when the data moves. A static chart, written once in Matplotlib, Seaborn, or Plotly and dropped into a note, is for an argument you need to freeze. A live dashboard of an unsettled question invites people to fish. A frozen chart of a settled comparison invites them to decide.",
      "This series was the loop in order: frame the question, bring the rows in, clean them, shape them, look, mine, model against a baseline, and show the result as a decision. The chart that changes a mind is also the start of the next question. Frame that one before you open the notebook.",
    ],
  },
];
