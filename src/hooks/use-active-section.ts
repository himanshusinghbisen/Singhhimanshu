"use client";

import { useEffect, useState } from "react";

import { navItems } from "@/lib/data";

type SectionId = (typeof navItems)[number]["id"];

/**
 * Active section = last nav target whose top has crossed a line near the
 * top of the viewport. Prefer this over IntersectionObserver: tall
 * sections (especially About) keep intersecting a mid-viewport band and
 * incorrectly stay highlighted.
 */
function sectionFromScroll(offset = 120): SectionId {
  let current: SectionId = navItems[0].id;

  for (const item of navItems) {
    const el = document.getElementById(item.id);
    if (!el) continue;
    if (el.getBoundingClientRect().top <= offset) {
      current = item.id;
    }
  }

  return current;
}

export function useActiveSection() {
  const [activeId, setActiveId] = useState<SectionId>(navItems[0].id);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      setActiveId(sectionFromScroll());
    };

    const onScrollOrResize = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();

    // Capture hears scroll on nested containers (preview iframes, etc.).
    // Native scroll does not bubble; capture still sees the event on the way down.
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
      const id = href.slice(1) as SectionId;
      if (navItems.some((item) => item.id === id)) {
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
  }, []);

  return activeId;
}
