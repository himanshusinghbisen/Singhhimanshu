"use client";

import { useEffect, useState } from "react";

import { navItems } from "@/lib/data";

const defaultSectionIds: readonly string[] = navItems.map((item) => item.id);

/** Last section whose top has crossed a line near the top of the viewport. */
function sectionFromScroll(ids: readonly string[], offset = 120): string {
  let current = ids[0] ?? "";
  let lastExisting = "";

  for (const id of ids) {
    const el = document.getElementById(id);
    if (!el) continue;
    lastExisting = id;
    if (el.getBoundingClientRect().top <= offset) {
      current = id;
    }
  }

  // The last section cannot always reach the offset line. Once the page is
  // scrolled to the end, that section is the one in view.
  const remaining =
    document.documentElement.scrollHeight - window.scrollY - window.innerHeight;
  if (lastExisting && remaining <= 4) {
    current = lastExisting;
  }

  return current;
}

export function useActiveSection(
  sectionIds: readonly string[] = defaultSectionIds,
) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      setActiveId(sectionFromScroll(sectionIds));
    };

    const onScrollOrResize = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();

    // Capture hears scroll on nested containers (preview iframes, etc.).
    window.addEventListener("scroll", onScrollOrResize, {
      passive: true,
      capture: true,
    });
    document.addEventListener("scroll", onScrollOrResize, {
      passive: true,
      capture: true,
    });
    window.addEventListener("resize", onScrollOrResize);

    const onHashChange = () => update();
    window.addEventListener("hashchange", onHashChange);

    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a[href^='#']");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href.length < 2) return;
      const id = href.slice(1);
      if (sectionIds.includes(id)) {
        setActiveId(id);
      }
    };
    document.addEventListener("click", onClick);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScrollOrResize, true);
      document.removeEventListener("scroll", onScrollOrResize, true);
      window.removeEventListener("resize", onScrollOrResize);
      window.removeEventListener("hashchange", onHashChange);
      document.removeEventListener("click", onClick);
    };
  }, [sectionIds]);

  return activeId;
}
