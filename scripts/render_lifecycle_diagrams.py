"""Diagrams for the data-science lifecycle series."""

from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

OUT = Path("/tmp/site/Singhhimanshu/public/images/blog")
REG = "/usr/share/fonts/truetype/macos/Inter-Regular.ttf"
MED = "/usr/share/fonts/truetype/macos/Inter-Medium.ttf"
BOLD = "/usr/share/fonts/truetype/macos/Inter-Bold.ttf"

BG = (244, 239, 230)
WHITE = (255, 253, 248)
INK = (28, 36, 52)
MUTED = (90, 99, 115)
AMBER = (166, 74, 18)
NAVY = (30, 78, 140)
TEAL = (15, 107, 122)
LINE = (214, 196, 170)
ORANGE_BG = (255, 244, 232)
ORANGE_BD = (226, 168, 118)
BLUE_BG = (232, 242, 250)
BLUE_BD = (150, 190, 220)
GREEN_BG = (236, 246, 236)
GREEN_BD = (150, 190, 156)
PURPLE_BG = (242, 236, 248)
PURPLE_BD = (196, 176, 216)
PURPLE = (92, 58, 122)


def F(path: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(path, size)


def wrap(draw: ImageDraw.ImageDraw, text: str, face: ImageFont.FreeTypeFont, max_w: int) -> list[str]:
    lines: list[str] = []
    cur = ""
    for word in text.split():
        trial = word if not cur else f"{cur} {word}"
        if draw.textlength(trial, font=face) <= max_w:
            cur = trial
        else:
            if cur:
                lines.append(cur)
            cur = word
    if cur:
        lines.append(cur)
    return lines


def rounded(draw, box, radius, fill, outline=None, width=2):
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=width)


def canvas(w=1480, h=860):
    image = Image.new("RGB", (w, h), BG)
    draw = ImageDraw.Draw(image)
    rounded(draw, (22, 22, w - 22, h - 22), 32, WHITE, LINE, 2)
    return image, draw


def heading(draw, text, y=48):
    draw.text((64, y), text, font=F(BOLD, 38), fill=INK)
    return y + 56


def lines(draw, text, x, y, max_w, face, fill, gap=6):
    for line in wrap(draw, text, face, max_w):
        draw.text((x, y), line, font=face, fill=fill)
        y += face.size + gap
    return y


def save(image: Image.Image, name: str) -> None:
    path = OUT / name
    image.save(path, "JPEG", quality=90, optimize=True)
    print(name, path.stat().st_size)


def card(draw, box, fill, outline, title, title_color, body, body_size=22):
    rounded(draw, box, 20, fill, outline, 2)
    draw.text((box[0] + 28, box[1] + 22), title, font=F(BOLD, 26), fill=title_color)
    lines(draw, body, box[0] + 28, box[1] + 68, box[2] - box[0] - 56, F(REG, body_size), INK, 6)


def framing():
    image, draw = canvas(1480, 820)
    heading(draw, "From a vague ask to a data question")
    draw.text((64, 112), "Name the task, the metric, and the constraint before the model.", font=F(REG, 22), fill=MUTED)
    cols = [
        (56, "The ask", "Reduce churn. Find improper claims. Forecast next quarter.", ORANGE_BG, ORANGE_BD, AMBER),
        (528, "The question", "Who leaves in 60 days? Which lines are improper? What volume arrives next quarter?", BLUE_BG, BLUE_BD, NAVY),
        (1000, "The metric", "Recall on members you can still save. Precision inside the review budget. Error against a naive baseline.", GREEN_BG, GREEN_BD, TEAL),
    ]
    for x, title, body, fill, outline, color in cols:
        card(draw, (x, 180, x + 424, 560), fill, outline, title, color, body, 24)
    rounded(draw, (56, 590, 1424, 760), 18, (255, 250, 244), LINE, 2)
    draw.text((84, 618), "Constraints that belong on the same page", font=F(BOLD, 24), fill=INK)
    draw.text((84, 668), "Data you are allowed to use    ·    Decision latency    ·    Privacy    ·    Where the result has to run", font=F(REG, 22), fill=MUTED)
    save(image, "lifecycle-problem-framing.jpg")


def classification_vs_regression():
    image, draw = canvas(1480, 980)
    heading(draw, "Classification or regression")
    draw.text(
        (64, 118),
        "Choose the task by the action, not by the algorithm.",
        font=F(REG, 26),
        fill=MUTED,
    )
    panels = [
        (
            56,
            ORANGE_BG,
            ORANGE_BD,
            AMBER,
            "Classification",
            "Use it when the action is a label.",
            [
                ("Member leaves in 60 days", "Yes or no. Outreach, or not."),
                ("Claim line", "Proper or improper. Review, or pay."),
                ("Provider tier", "Low, medium, or high. The audit rate changes."),
                ("What you measure", "Precision, recall, and the cost of a miss."),
            ],
        ),
        (
            760,
            BLUE_BG,
            BLUE_BD,
            NAVY,
            "Regression",
            "Use it when the action needs the number.",
            [
                ("Expected paid amount", "A reserve, not a yes or no."),
                ("Days until discharge", "Beds and staffing follow the count."),
                ("Volume next quarter", "Forecasting is regression across time."),
                ("What you measure", "Error against a naive baseline."),
            ],
        ),
    ]
    for x, fill, outline, color, title, rule, rows in panels:
        rounded(draw, (x, 176, x + 664, 912), 20, fill, outline, 2)
        draw.text((x + 36, 200), title, font=F(BOLD, 40), fill=color)
        draw.text((x + 36, 256), rule, font=F(REG, 28), fill=INK)
        draw.line([(x + 36, 308), (x + 628, 308)], fill=outline, width=2)
        y = 336
        for label, detail in rows:
            draw.text((x + 36, y), label, font=F(BOLD, 30), fill=INK)
            lines(draw, detail, x + 36, y + 42, 580, F(REG, 26), MUTED, 6)
            y += 136
    save(image, "lifecycle-classification-regression.jpg")


def ingestion():
    image, draw = canvas(1480, 860)
    heading(draw, "Raw sources, then a repeatable pull")
    sources = [
        (56, "SQL", "Operational tables"),
        (400, "Warehouse", "Snowflake, BigQuery"),
        (744, "APIs", "Events and partner feeds"),
        (1088, "Files", "CSV, JSON, Parquet"),
    ]
    for x, title, body in sources:
        rounded(draw, (x, 160, x + 320, 300), 18, BLUE_BG, BLUE_BD, 2)
        draw.text((x + 24, 190), title, font=F(BOLD, 28), fill=NAVY)
        draw.text((x + 24, 240), body, font=F(REG, 20), fill=INK)
    draw.line([(740, 300), (740, 360)], fill=INK, width=4)
    draw.polygon([(740, 380), (724, 352), (756, 352)], fill=INK)
    rounded(draw, (360, 400, 1120, 520), 18, ORANGE_BG, ORANGE_BD, 2)
    draw.text((392, 428), "Ingestion", font=F(BOLD, 28), fill=AMBER)
    draw.text((392, 470), "A script, an Airflow job, or a Databricks task. Same pull tomorrow.", font=F(REG, 22), fill=INK)
    chips = [
        (56, "Grain", "One row is a member, a claim, or a day. Say which."),
        (528, "As-of time", "The extract is true as of a moment, not forever."),
        (1000, "Allowed use", "Provenance, license, and consent travel with the file."),
    ]
    for x, title, body in chips:
        rounded(draw, (x, 560, x + 424, 780), 18, GREEN_BG, GREEN_BD, 2)
        draw.text((x + 24, 590), title, font=F(BOLD, 26), fill=TEAL)
        lines(draw, body, x + 24, 644, 376, F(REG, 22), INK, 6)
    save(image, "lifecycle-data-ingestion.jpg")


def cleaning():
    image, draw = canvas(1480, 780)
    heading(draw, "A messy row and a usable row")
    rounded(draw, (56, 160, 700, 430), 18, ORANGE_BG, ORANGE_BD, 2)
    draw.text((84, 188), "Before", font=F(BOLD, 26), fill=AMBER)
    messy = ["name: \"  SMITH \"", "paid: \"$1,200\"", "dos: \"13/2/2024\"", "member_id: null", "member_id: null   (again)"]
    y = 240
    for row in messy:
        draw.text((96, y), row, font=F(MED, 24), fill=INK)
        y += 34
    rounded(draw, (780, 160, 1424, 430), 18, GREEN_BG, GREEN_BD, 2)
    draw.text((808, 188), "After", font=F(BOLD, 26), fill=TEAL)
    clean = ["name: Smith", "paid: 1200.00", "dos: 2024-02-13", "member_id: missing, flagged", "one row per member and date"]
    y = 240
    for row in clean:
        draw.text((820, y), row, font=F(MED, 24), fill=INK)
        y += 34
    steps = [
        (56, "Missing", "Impute only when the absence is not itself the signal."),
        (400, "Duplicates", "Same key twice is a grain problem, not a typo."),
        (744, "Outliers", "The tail is sometimes the claim you were hired to find."),
        (1088, "Types", "Dates, money, and categories get one format."),
    ]
    for x, title, body in steps:
        rounded(draw, (x, 470, x + 328, 710), 16, WHITE, LINE, 2)
        draw.text((x + 18, 494), title, font=F(BOLD, 22), fill=NAVY)
        lines(draw, body, x + 18, 540, 292, F(REG, 20), INK, 5)
    save(image, "lifecycle-data-cleaning.jpg")


def wrangling():
    image, draw = canvas(1480, 820)
    heading(draw, "Join the grain, then add a signal")
    rounded(draw, (56, 160, 460, 430), 18, BLUE_BG, BLUE_BD, 2)
    draw.text((80, 186), "Members", font=F(BOLD, 24), fill=NAVY)
    draw.text((80, 240), "id    joined", font=F(MED, 20), fill=MUTED)
    draw.text((80, 280), "A     2022-04", font=F(REG, 22), fill=INK)
    draw.text((80, 318), "B     2024-01", font=F(REG, 22), fill=INK)
    rounded(draw, (500, 160, 904, 430), 18, ORANGE_BG, ORANGE_BD, 2)
    draw.text((524, 186), "Claims", font=F(BOLD, 24), fill=AMBER)
    draw.text((524, 240), "member    paid", font=F(MED, 20), fill=MUTED)
    draw.text((524, 280), "A         400", font=F(REG, 22), fill=INK)
    draw.text((524, 318), "A         250", font=F(REG, 22), fill=INK)
    draw.text((524, 356), "B          90", font=F(REG, 22), fill=INK)
    rounded(draw, (944, 160, 1424, 700), 18, GREEN_BG, GREEN_BD, 2)
    draw.text((972, 186), "One row per member", font=F(BOLD, 24), fill=TEAL)
    rows = [
        "A   tenure_days  1600",
        "A   claims_n        2",
        "A   paid_sum      650",
        "A   paid_per_year   …",
        "B   tenure_days   660",
        "B   claims_n        1",
        "B   age_band     40–49",
    ]
    y = 250
    for row in rows:
        draw.text((984, y), row, font=F(REG, 24), fill=INK)
        y += 52
    rounded(draw, (56, 470, 904, 740), 18, WHITE, LINE, 2)
    draw.text((80, 498), "New columns are hypotheses", font=F(BOLD, 24), fill=INK)
    lines(
        draw,
        "A ratio, a date part, or a bin is a claim that this shape predicts the outcome better than the raw fields. Keep the grain obvious. A many-to-many join will silently multiply the rows.",
        80,
        556,
        780,
        F(REG, 22),
        MUTED,
        8,
    )
    save(image, "lifecycle-data-wrangling.jpg")


def eda():
    image, draw = canvas(1480, 820)
    heading(draw, "Three looks before a model")
    # histogram
    rounded(draw, (56, 160, 500, 620), 18, ORANGE_BG, ORANGE_BD, 2)
    draw.text((80, 184), "One variable", font=F(BOLD, 24), fill=AMBER)
    draw.text((80, 224), "Distribution", font=F(REG, 18), fill=MUTED)
    bars = [40, 70, 120, 180, 140, 90, 50]
    x = 100
    for h in bars:
        draw.rectangle((x, 520 - h, x + 36, 520), fill=AMBER)
        x += 48
    # scatter
    rounded(draw, (524, 160, 980, 620), 18, BLUE_BG, BLUE_BD, 2)
    draw.text((548, 184), "Two variables", font=F(BOLD, 24), fill=NAVY)
    draw.text((548, 224), "Relationship", font=F(REG, 18), fill=MUTED)
    pts = [(580, 480), (620, 450), (670, 420), (710, 390), (760, 360), (810, 340), (860, 300), (640, 470), (740, 410)]
    for px, py in pts:
        draw.ellipse((px, py, px + 14, py + 14), fill=NAVY)
    draw.line([(570, 500), (900, 280)], fill=AMBER, width=3)
    # heatmap
    rounded(draw, (1004, 160, 1424, 620), 18, GREEN_BG, GREEN_BD, 2)
    draw.text((1028, 184), "Many variables", font=F(BOLD, 24), fill=TEAL)
    draw.text((1028, 224), "Where they move together", font=F(REG, 18), fill=MUTED)
    colors = [
        (20, 90, 80), (40, 120, 110), (180, 190, 170),
        (40, 120, 110), (15, 80, 70), (90, 140, 120),
        (180, 190, 170), (90, 140, 120), (20, 90, 80),
    ]
    for i, color in enumerate(colors):
        r, c = divmod(i, 3)
        draw.rounded_rectangle((1060 + c * 100, 300 + r * 90, 1144 + c * 100, 376 + r * 90), 8, fill=color)
    rounded(draw, (56, 650, 1424, 760), 16, WHITE, LINE, 2)
    draw.text((80, 682), "A pattern here is a hypothesis. It is not the result you take to a stakeholder.", font=F(MED, 22), fill=INK)
    save(image, "lifecycle-eda.jpg")


def mining():
    image, draw = canvas(1480, 820)
    heading(draw, "Structure you did not label in advance")
    rounded(draw, (56, 160, 500, 700), 18, BLUE_BG, BLUE_BD, 2)
    draw.text((80, 188), "Reduce dimensions", font=F(BOLD, 24), fill=NAVY)
    lines(draw, "PCA keeps the directions that still hold the spread.", 80, 240, 380, F(REG, 20), INK, 6)
    draw.line([(140, 560), (420, 300)], fill=NAVY, width=4)
    draw.line([(180, 340), (400, 560)], fill=AMBER, width=4)
    for px, py in [(220, 480), (260, 450), (300, 420), (250, 500), (340, 400), (310, 470)]:
        draw.ellipse((px, py, px + 16, py + 16), fill=INK)
    rounded(draw, (524, 160, 968, 700), 18, ORANGE_BG, ORANGE_BD, 2)
    draw.text((548, 188), "Group similar rows", font=F(BOLD, 24), fill=AMBER)
    lines(draw, "K-means, DBSCAN, or a hierarchy. The groups are a proposal.", 548, 240, 380, F(REG, 20), INK, 6)
    groups = [((580, 420), NAVY), ((640, 390), NAVY), ((610, 470), NAVY), ((760, 360), TEAL), ((820, 400), TEAL), ((790, 450), TEAL), ((680, 560), AMBER), ((740, 590), AMBER), ((700, 530), AMBER)]
    for (px, py), color in groups:
        draw.ellipse((px, py, px + 22, py + 22), fill=color)
    rounded(draw, (992, 160, 1424, 700), 18, PURPLE_BG, PURPLE_BD, 2)
    draw.text((1016, 188), "Rules in baskets", font=F(BOLD, 24), fill=PURPLE)
    lines(draw, "Frequent itemsets. A rule is support and confidence, not a cause.", 1016, 240, 370, F(REG, 20), INK, 6)
    rounded(draw, (1040, 400, 1360, 620), 16, WHITE, PURPLE_BD, 2)
    draw.text((1068, 440), "bread + butter", font=F(MED, 24), fill=INK)
    draw.text((1068, 490), "→  milk", font=F(BOLD, 28), fill=PURPLE)
    draw.text((1068, 550), "often, not always", font=F(REG, 20), fill=MUTED)
    save(image, "lifecycle-data-mining.jpg")


def modeling():
    image, draw = canvas(1480, 840)
    heading(draw, "Baseline, then a harder model, then proof")
    stages = [
        (56, "1  Baseline", "Median, majority class, or a plain regression. This is the score you have to beat.", ORANGE_BG, ORANGE_BD, AMBER),
        (528, "2  A stronger fit", "A forest, a boosting model, or a network, only if the baseline's errors justify it.", BLUE_BG, BLUE_BD, NAVY),
        (1000, "3  Held-out proof", "Cross-validation and a tune that you did not peek at. Training score is not the result.", GREEN_BG, GREEN_BD, TEAL),
    ]
    for x, title, body, fill, outline, color in stages:
        card(draw, (x, 160, x + 424, 430), fill, outline, title, color, body, 22)
    rounded(draw, (56, 470, 1424, 780), 18, WHITE, LINE, 2)
    draw.text((84, 496), "Overfit is a split between two curves", font=F(BOLD, 24), fill=INK)
    left, top, right, bottom = 120, 560, 700, 740
    draw.line([(left, bottom), (right, bottom)], fill=INK, width=3)
    draw.line([(left, top), (left, bottom)], fill=INK, width=3)
    draw.line([(left, 580), (260, 620), (400, 660), (560, 710)], fill=NAVY, width=4)
    draw.line([(left, 590), (260, 640), (400, 680), (560, 575)], fill=AMBER, width=4)
    draw.text((572, 700), "train", font=F(MED, 18), fill=NAVY)
    draw.text((572, 548), "validation", font=F(MED, 18), fill=AMBER)
    lines(draw, "When training error keeps falling and validation error turns up, the model is memorizing the sample.", 760, 580, 600, F(REG, 22), MUTED, 8)
    save(image, "lifecycle-modeling.jpg")


def storytelling():
    image, draw = canvas(1480, 860)
    heading(draw, "The chart has to carry a decision")
    panels = [
        (56, "Compare groups", "Bar", "Recovery rate by line of business.", ORANGE_BG, ORANGE_BD, AMBER),
        (528, "Show change", "Line", "The same rate, month by month.", BLUE_BG, BLUE_BD, NAVY),
        (1000, "Show a grid", "Heatmap", "Where two categories meet and the cell is the point.", GREEN_BG, GREEN_BD, TEAL),
    ]
    for x, title, kind, body, fill, outline, color in panels:
        rounded(draw, (x, 160, x + 424, 640), 18, fill, outline, 2)
        draw.text((x + 24, 188), kind, font=F(BOLD, 28), fill=color)
        draw.text((x + 24, 232), title, font=F(MED, 20), fill=INK)
        lines(draw, body, x + 24, 280, 376, F(REG, 22), MUTED, 6)
    # mini bar
    for i, h in enumerate((70, 120, 90)):
        draw.rectangle((110 + i * 50, 520 - h, 146 + i * 50, 520), fill=AMBER)
    # mini line
    draw.line([(590, 500), (660, 460), (730, 480), (800, 420), (870, 440)], fill=NAVY, width=4)
    # mini heat
    for r in range(3):
        for c in range(3):
            shade = 40 + (r * 3 + c) * 18
            draw.rectangle((1080 + c * 48, 430 + r * 40, 1120 + c * 48, 464 + r * 40), fill=(shade, 110, 100))
    rounded(draw, (56, 680, 1424, 800), 16, WHITE, LINE, 2)
    draw.text((80, 712), "A dashboard (Streamlit, Tableau, Power BI) is for a repeated decision.", font=F(MED, 22), fill=INK)
    draw.text((80, 750), "A static chart is for an argument you need to freeze.", font=F(MED, 22), fill=INK)
    save(image, "lifecycle-visualization.jpg")


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    framing()
    classification_vs_regression()
    ingestion()
    cleaning()
    wrangling()
    eda()
    mining()
    modeling()
    storytelling()


if __name__ == "__main__":
    main()
