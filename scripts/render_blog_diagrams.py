"""Render original blog diagrams in the site's infographic style."""

from __future__ import annotations

import math
import random
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
CREAM = (255, 250, 244)


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


def rounded(
    draw: ImageDraw.ImageDraw,
    box: tuple[int, int, int, int],
    radius: int,
    fill: tuple[int, int, int],
    outline: tuple[int, int, int] | None = None,
    width: int = 2,
) -> None:
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=width)


def canvas(w: int = 1480, h: int = 900) -> tuple[Image.Image, ImageDraw.ImageDraw]:
    image = Image.new("RGB", (w, h), BG)
    draw = ImageDraw.Draw(image)
    rounded(draw, (22, 22, w - 22, h - 22), 32, WHITE, LINE, 2)
    return image, draw


def heading(draw: ImageDraw.ImageDraw, text: str, y: int = 52) -> int:
    draw.text((64, y), text, font=F(BOLD, 40), fill=INK)
    return y + 62


def paragraph(
    draw: ImageDraw.ImageDraw,
    text: str,
    x: int,
    y: int,
    max_w: int,
    face: ImageFont.FreeTypeFont,
    fill: tuple[int, int, int],
    gap: int = 8,
) -> int:
    for line in wrap(draw, text, face, max_w):
        draw.text((x, y), line, font=face, fill=fill)
        y += face.size + gap
    return y


def save(image: Image.Image, name: str) -> None:
    path = OUT / name
    image.save(path, "JPEG", quality=90, optimize=True)
    print(f"{name} {path.stat().st_size}")


def arrow(
    draw: ImageDraw.ImageDraw,
    start: tuple[int, int],
    end: tuple[int, int],
    fill: tuple[int, int, int],
    width: int = 4,
) -> None:
    draw.line([start, end], fill=fill, width=width)
    angle = math.atan2(end[1] - start[1], end[0] - start[0])
    length = 16
    spread = 0.45
    p1 = (
        end[0] - length * math.cos(angle - spread),
        end[1] - length * math.sin(angle - spread),
    )
    p2 = (
        end[0] - length * math.cos(angle + spread),
        end[1] - length * math.sin(angle + spread),
    )
    draw.polygon([end, p1, p2], fill=fill)


def sampling_two_samples() -> None:
    image, draw = canvas(1480, 860)
    heading(draw, "Two samples from the same population")
    draw.text(
        (64, 118),
        "Same question. Different people. The mean moves.",
        font=F(REG, 22),
        fill=MUTED,
    )

    def panel(box, fill, outline, label, color, mean_label, hours, mean_hour):
        rounded(draw, box, 22, fill, outline, 2)
        draw.text((box[0] + 28, box[1] + 22), f"{label}   ·   {mean_label}", font=F(BOLD, 26), fill=color)
        plot = (box[0] + 28, box[1] + 78, box[2] - 28, box[3] - 64)
        rounded(draw, plot, 16, WHITE, (236, 226, 210), 1)
        left, top, right, bottom = plot
        span = right - left - 36
        base = bottom - 28

        def x_of(hour: float) -> int:
            return int(left + 18 + (hour - 4) / 6 * span)

        for hour, tick in ((4, "4h"), (7, "7h"), (10, "10h")):
            x = x_of(hour)
            draw.line([(x, base), (x, base + 8)], fill=MUTED, width=2)
            draw.text((x - 12, base + 12), tick, font=F(REG, 16), fill=MUTED)
        draw.line([(left + 18, base), (right - 18, base)], fill=(180, 168, 150), width=2)

        rng = random.Random(hours[0] * 10)
        for index, hour in enumerate(hours):
            x = x_of(hour + rng.uniform(-0.05, 0.05))
            y = top + 24 + (index * 17) % (base - top - 48)
            draw.ellipse((x - 7, y - 7, x + 7, y + 7), fill=color)

        mx = x_of(mean_hour)
        draw.line([(mx, top + 16), (mx, base)], fill=INK, width=3)

    population = [7.1 + random.Random(i + 3).gauss(0, 1.05) for i in range(42)]
    population = [min(9.8, max(4.2, h)) for h in population]
    sample_a = [6.4 + random.Random(i + 20).gauss(0, 0.7) for i in range(14)]
    sample_b = [7.8 + random.Random(i + 40).gauss(0, 0.65) for i in range(14)]

    panel((56, 176, 700, 800), ORANGE_BG, ORANGE_BD, "Population", AMBER, "mean 7.1 h", population, 7.1)
    panel((732, 176, 1424, 472), BLUE_BG, BLUE_BD, "Sample A", NAVY, "mean 6.4 h", sample_a, 6.4)
    panel((732, 496, 1424, 800), GREEN_BG, GREEN_BD, "Sample B", TEAL, "mean 7.8 h", sample_b, 7.8)
    save(image, "sampling-two-samples.jpg")


def sampling_standard_error() -> None:
    image, draw = canvas(1480, 860)
    heading(draw, "Standard error of the mean")
    draw.text(
        (64, 118),
        "How far the average can wobble — not how spread out the people are.",
        font=F(REG, 22),
        fill=MUTED,
    )
    rounded(draw, (56, 180, 560, 800), 22, ORANGE_BG, ORANGE_BD, 2)
    draw.text((88, 214), "For a simple random sample", font=F(MED, 22), fill=AMBER)
    draw.text((88, 280), "SE  =  s  /  √n", font=F(BOLD, 42), fill=INK)
    notes = [
        "s  is the sample standard deviation",
        "n  is the sample size",
        "SE describes the sample mean",
        "s describes the individuals",
        "4× the sample size",
        "cuts SE roughly in half",
    ]
    y = 390
    for note in notes:
        face = F(BOLD, 24) if note.startswith("4×") or note.startswith("cuts") else F(REG, 24)
        fill = INK if note.startswith("4×") or note.startswith("cuts") else MUTED
        draw.text((88, y), note, font=face, fill=fill)
        y += 48

    rounded(draw, (592, 180, 1424, 800), 22, BLUE_BG, BLUE_BD, 2)
    draw.text((624, 208), "s = 2 hours of sleep", font=F(MED, 22), fill=NAVY)
    plot = (650, 280, 1360, 720)
    left, top, right, bottom = plot
    draw.line([(left, bottom), (right, bottom)], fill=INK, width=3)
    draw.line([(left, top), (left, bottom)], fill=INK, width=3)
    draw.text((left + 280, bottom + 48), "sample size n", font=F(REG, 18), fill=MUTED)
    draw.text((left - 8, top - 36), "SE (hours)", font=F(REG, 18), fill=MUTED)

    ns = [25, 100, 400, 1600]
    ses = [2 / math.sqrt(n) for n in ns]

    def x_of(n: float) -> int:
        # log scale from 25 to 1600
        t = (math.log(n) - math.log(25)) / (math.log(1600) - math.log(25))
        return int(left + 20 + t * (right - left - 40))

    def y_of(se: float) -> int:
        return int(bottom - 20 - (se / 0.5) * (bottom - top - 40))

    points = [(x_of(n), y_of(se)) for n, se in zip(ns, ses)]
    draw.line(points, fill=NAVY, width=5)
    for n, se, (x, y) in zip(ns, ses, points):
        draw.ellipse((x - 8, y - 8, x + 8, y + 8), fill=AMBER, outline=WHITE)
        draw.text((x - 18, bottom + 12), str(n), font=F(MED, 18), fill=INK)
        label = f"{se:.2f} h"
        draw.text((x + 12, y - 28), label, font=F(BOLD, 18), fill=INK)
    save(image, "sampling-standard-error.jpg")


def simulation_methods() -> None:
    image, draw = canvas(1480, 980)
    heading(draw, "Which simulation matches the question")
    draw.text(
        (64, 118),
        "Five methods. Five different bets about where the uncertainty lives.",
        font=F(REG, 22),
        fill=MUTED,
    )
    rows = [
        ("Monte Carlo", "You can state the random inputs and want a distribution of outcomes.", ORANGE_BG, ORANGE_BD, AMBER),
        ("Agent-based", "The result comes from people or firms following local rules.", BLUE_BG, BLUE_BD, NAVY),
        ("Discrete events", "Timed events compete for a queue, a server, or a clock.", GREEN_BG, GREEN_BD, TEAL),
        ("System dynamics", "You need the long-run effect of feedback, stocks, and delays.", (255, 246, 230), (226, 196, 140), (140, 90, 20)),
        ("Bootstrap", "You already have a sample and need the wobble around a statistic.", (242, 236, 248), (196, 176, 216), (92, 58, 122)),
    ]
    y = 180
    for name, when, fill, outline, color in rows:
        rounded(draw, (56, y, 1424, y + 140), 20, fill, outline, 2)
        draw.text((88, y + 28), name, font=F(BOLD, 30), fill=color)
        paragraph(draw, when, 88, y + 76, 1260, F(REG, 24), INK, gap=4)
        y += 152
    save(image, "simulation-five-methods.jpg")


def closed_loop() -> None:
    image, draw = canvas(1480, 920)
    heading(draw, "Pre-pay and post-pay as one loop")
    draw.text(
        (64, 118),
        "Fast execution on the way in. Deeper evidence on the way back.",
        font=F(REG, 22),
        fill=MUTED,
    )
    rounded(draw, (56, 190, 680, 700), 22, ORANGE_BG, ORANGE_BD, 2)
    draw.text((88, 220), "Pre-pay", font=F(BOLD, 32), fill=AMBER)
    draw.text((88, 268), "Milliseconds, before the line commits", font=F(REG, 20), fill=MUTED)
    for i, item in enumerate(
        ["Deterministic edits", "Features from a fast store", "A compact score", "Route by dollar value"]
    ):
        draw.text((100, 340 + i * 64), f"{i + 1}   {item}", font=F(MED, 26), fill=INK)

    rounded(draw, (800, 190, 1424, 700), 22, BLUE_BG, BLUE_BD, 2)
    draw.text((832, 220), "Post-pay", font=F(BOLD, 32), fill=NAVY)
    draw.text((832, 268), "Days to months, after payment", font=F(REG, 20), fill=MUTED)
    for i, item in enumerate(
        ["History, drift, and charts", "Peer-group patterns", "Shadow replay", "Promote precise rules only"]
    ):
        draw.text((844, 340 + i * 64), f"{i + 1}   {item}", font=F(MED, 26), fill=INK)

    arrow(draw, (680, 430), (800, 430), AMBER, 5)
    draw.text((688, 390), "payment", font=F(MED, 18), fill=AMBER)
    draw.line([(1110, 700), (1110, 780), (370, 780)], fill=NAVY, width=5)
    arrow(draw, (370, 780), (370, 708), NAVY, 5)
    draw.text((560, 792), "candidate rules return to the inline path", font=F(MED, 20), fill=NAVY)
    save(image, "payment-integrity-closed-loop.jpg")


def integrity_breaks() -> None:
    image, draw = canvas(1480, 640)
    heading(draw, "Where recovery architectures break")
    draw.text(
        (64, 118),
        "The business rule is rarely the weak part. The path around it is.",
        font=F(REG, 22),
        fill=MUTED,
    )
    cards = [
        ("Latency", "Every hop after adjudication adds delay. The overpayment is confirmed after it has become expensive to collect.", ORANGE_BG, ORANGE_BD, AMBER),
        ("Vendor seams", "Files arrive late, incomplete, or under a tribal contract. The recovery cycle waits on a folder.", BLUE_BG, BLUE_BD, NAVY),
        ("Stale context", "The claim no longer matches adjudication. Recovery metrics describe yesterday while finance asks about today.", GREEN_BG, GREEN_BD, TEAL),
    ]
    x = 56
    for title, body, fill, outline, color in cards:
        rounded(draw, (x, 190, x + 440, 580), 22, fill, outline, 2)
        draw.text((x + 32, 230), title, font=F(BOLD, 32), fill=color)
        paragraph(draw, body, x + 32, 310, 376, F(REG, 24), INK, gap=8)
        x += 464
    save(image, "payment-integrity-break-points.jpg")


def ssis_to_glue() -> None:
    image, draw = canvas(1480, 860)
    heading(draw, "A package move is not a pipeline contract")
    rounded(draw, (56, 170, 660, 760), 22, ORANGE_BG, ORANGE_BD, 2)
    draw.text((88, 204), "SSIS as it aged", font=F(BOLD, 32), fill=AMBER)
    for i, item in enumerate(
        [
            "DTSX packages owned by several teams",
            "Shared-folder vendor drops",
            "One failed overnight job",
            "A frozen recovery cycle",
            "Lineage left in someone’s head",
        ]
    ):
        draw.text((100, 300 + i * 72), item, font=F(REG, 26), fill=INK)

    arrow(draw, (690, 460), (790, 460), INK, 5)

    rounded(draw, (820, 170, 1424, 760), 22, BLUE_BG, BLUE_BD, 2)
    draw.text((852, 204), "Glue with a contract", font=F(BOLD, 32), fill=NAVY)
    for i, item in enumerate(
        [
            "Named file and field types",
            "Transforms placed on purpose",
            "Retries you can see",
            "Scale for bursty claim loads",
            "Extract tied to an adjudication run",
        ]
    ):
        draw.text((864, 300 + i * 72), item, font=F(REG, 26), fill=INK)
    save(image, "ssis-to-glue-contract.jpg")


def togaf_loop() -> None:
    image, draw = canvas(1480, 860)
    heading(draw, "Architecture that earns a place in delivery")
    draw.text(
        (64, 118),
        "Three questions. Answer them before six teams invent six truths.",
        font=F(REG, 22),
        fill=MUTED,
    )
    rounded(draw, (500, 330, 980, 560), 24, CREAM, LINE, 2)
    draw.text((560, 390), "Production claims", font=F(BOLD, 32), fill=INK)
    draw.text((545, 448), "C#   ·   SQL Server   ·   traffic", font=F(REG, 22), fill=MUTED)

    cards = [
        ((56, 190, 460, 390), "Who owns coordination of benefits?", ORANGE_BG, ORANGE_BD, AMBER),
        ((1020, 190, 1424, 390), "Where does recovery state live?", BLUE_BG, BLUE_BD, NAVY),
        ((430, 600, 1050, 790), "What is the boundary with the pricing vendor?", GREEN_BG, GREEN_BD, TEAL),
    ]
    for box, label, fill, outline, color in cards:
        rounded(draw, box, 20, fill, outline, 2)
        paragraph(draw, label, box[0] + 28, box[1] + 48, box[2] - box[0] - 56, F(BOLD, 26), color, gap=6)
    save(image, "togaf-delivery-questions.jpg")


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    sampling_two_samples()
    sampling_standard_error()
    simulation_methods()
    closed_loop()
    integrity_breaks()
    ssis_to_glue()
    togaf_loop()


if __name__ == "__main__":
    main()
