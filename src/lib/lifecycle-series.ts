import type { BlogPost } from "@/lib/posts";

/**
 * Weekly data-science lifecycle series.
 * Production shows a part on its date. Development shows every part.
 * Mondays: Oct 26, Nov 2, Nov 9, Nov 16, Nov 23, Nov 30, Dec 7, Dec 14 (2026).
 */
export const lifecycleSeries: BlogPost[] = [
  {
    slug: "problem-framing-before-the-model",
    title: "Problem framing: the question before the model",
    summary:
      "Part 1 of 8. A data science effort starts by turning a vague ask into a question, a metric, and a constraint. Classification when the action is a label. Regression when the action needs a number.",
    date: "2026-10-26",
    readingMinutes: 9,
    tags: ["Data Science", "Machine Learning", "Lifecycle"],
    body: [
      "This is part 1 of a series on the data science lifecycle, from the question through cleaning, wrangling, exploration, mining, modeling, and the chart that has to carry a decision. Each part stands alone. Together they are the order of the work.",
      "A data science effort fails early when it starts in a notebook. Someone says reduce churn, find the bad claims, or tell us what next quarter looks like. Those sentences are asks. They are not yet questions a dataset can answer. The first job is translation: what decision will change if the analysis is right, and what would count as right.",
      {
        type: "figure",
        src: "/images/blog/lifecycle-problem-framing.jpg",
        alt: "Three columns translating a vague ask into a data question and a success metric, with constraints listed underneath.",
        caption:
          "The ask, the question, and the metric belong on one page, with the constraints that will not move.",
      },
      "The translation names the task. Classification asks which case belongs in a class. Regression asks for a number. Clustering, which comes later in this series, asks for groups when nobody has labeled the rows yet. Picking the task is not a technical preference. It is a statement of what the business is willing to act on.",
      "Classification is the right task when the decision is a label. Two cases should be treated differently because they fall in different classes, and a score is only a way to reach that label. A member either receives an outreach call or does not: will they leave in the next 60 days, yes or no. A claim line is queued for review or it is paid: proper or improper. A provider is placed in a tier, low, medium, or high, and the tier changes the audit rate. Two classes or several classes are both classification. What makes it classification is that the action is the class.",
      "Regression is the right task when the decision needs the number itself. A difference of dollars, days, or volume changes what you reserve, staff, or schedule. Expected paid amount is a reserve, not a yes or no. Days until discharge is a bed count. Volume next quarter tells you what is coming. Forecasting is regression pointed at a future time: the same kind of number, with the clock as part of the question. If you only needed to know whether volume will cross a threshold, you have turned it back into classification, and the threshold belongs on the framing page.",
      {
        type: "figure",
        src: "/images/blog/lifecycle-classification-regression.jpg",
        alt: "Side-by-side examples of classification and regression: a yes-or-no member outcome, a proper-or-improper claim, and a provider tier, versus expected payment, days until discharge, and next-quarter volume.",
        caption:
          "Classification changes the action by category. Regression changes the action by the size of a number.",
      },
      "Here is that choice as two pictures. Classification, for a member who might leave: claims in the past year against months since the last visit. The clouds look like clusters. They differ from clustering because the dots already have names, stays or leaves. A new member is a point, and the action is which side of the line they land on. Regression, for a claim not yet paid: billed amount against what similar claims paid. The cloud has a slope. The line reads off a dollar amount, and that amount is the reserve. If you only needed to know whether the payment would clear a cap, you would draw a threshold across this same picture and be back in classification.",
      {
        type: "figure",
        src: "/images/blog/lifecycle-task-examples.jpg",
        alt: "Two graphs. Classification plots members by claims and months since the last visit, split into stays and leaves by a line. Regression plots billed amount against paid amount, with a line estimating four thousand dollars for a six-thousand-dollar claim.",
        caption:
          "Labeled groups decide an action. A fitted line estimates a value.",
      },
      "The metric has to match the cost of being wrong. Accuracy is a poor default when the event you care about is rare. A model that calls every member a stayer can look accurate and never catch a cancellation. Recall matters when missing a case is expensive and you can still act. Precision matters when a false alarm spends a reviewer’s hour or a provider’s patience. Sometimes the honest metric is not a percentage at all. It is dollars kept, hours saved, or error against a naive baseline that a careful person could have computed in a spreadsheet.",
      "Constraints belong on that same page, or they arrive later as surprises. Which data are you allowed to use. How fast the decision has to return. What privacy rule covers the row. Whether the result has to run inside a system that already exists, or whether a monthly memo is the whole deployment. A question you cannot answer under those constraints is a different project, not a harder version of this one.",
      "Write the frame in one place before any cleaning: the decision, the population, the time window, the metric, the baseline you have to beat, and what you will not try. If that page is still vague, more data will not rescue it. Next week is where the raw material enters: sources, a repeatable pull, and what the file is allowed to be used for.",
    ],
  },
  {
    slug: "data-collection-and-ingestion",
    title: "Data collection: where the raw material enters",
    summary:
      "Part 2 of 8. Sources, a pull you can run again tomorrow, and a record of grain, as-of time, and allowed use.",
    date: "2026-11-02",
    readingMinutes: 7,
    tags: ["Data Science", "Data Engineering", "Lifecycle"],
    body: [
      "Part 2 of the lifecycle series. The question is framed. Now the rows have to arrive, and they have to arrive the same way next week.",
      "Raw material shows up in a few shapes. Operational tables behind SQL. A warehouse such as Snowflake or BigQuery, already somewhat arranged for analysis. APIs that hand you events or a partner’s feed. Files: CSV when a person exported a sheet, JSON when a service emitted a payload, Parquet when someone expected the data to be scanned more than once. The format is a contract. It is not a detail you discover halfway through a join.",
      {
        type: "figure",
        src: "/images/blog/lifecycle-data-ingestion.jpg",
        alt: "SQL, warehouses, APIs, and files feeding one repeatable ingestion step, with grain, as-of time, and allowed use underneath.",
        caption:
          "The pull is not finished until grain, as-of time, and allowed use are written down.",
      },
      "A one-time download is not a pipeline. The useful pull is the one you can run again tomorrow and explain when it fails. That can be a script, an Airflow job, a Databricks task, or an ELT flow that lands the raw extract before it is reshaped. ETL reshapes on the way in. ELT lands first and transforms where the warehouse can see the history. Either can be honest. A shared folder with no owner is not.",
      "Three facts should travel with every extract. Grain: one row is a member, a claim line, or a day, and you can say which. As-of time: the file is true as of a moment, not forever. Allowed use: where the rows came from, under what license or consent, and which questions they may answer. Provenance is not paperwork you add after a model looks good. A row you cannot explain is a row you should not score.",
      "Write the failure mode next to the job. What happens when the API is late, the file is empty, or the schema gains a column. A pipeline that fails loudly is ahead of one that quietly reuses yesterday’s file. Next week is the unglamorous middle: missing values, duplicate keys, outliers, and types that do not match.",
    ],
  },
  {
    slug: "data-cleaning-and-preparation",
    title: "Data cleaning: making messy records usable",
    summary:
      "Part 3 of 8. Missing values, duplicate keys, outliers, and types. Cleaning is a set of decisions, not a pass that makes the table innocent.",
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
      "Part 4 of 8. Joins, aggregation, and new columns. A feature is a hypothesis about what predicts the outcome.",
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
      "Part 5 of 8. Distributions, relationships, and a correlation grid. A pattern at this stage is a hypothesis, not a finding for the steering committee.",
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
      "Part 6 of 8. Principal components, clusters, and association rules. They propose a structure. They do not prove a cause.",
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
      "Part 7 of 8. Beat a simple baseline, add complexity only when the errors justify it, and trust the score you did not train on.",
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
      "Part 8 of 8. Choose the chart for the comparison you need, and decide whether the audience needs a live dashboard or a frozen argument.",
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
