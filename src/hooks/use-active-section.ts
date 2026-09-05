"use client";

import { useEffect, useState } from "react";

import { navItems } from "@/lib/data";

type SectionId = (typeof navItems)[number]["id"];

function readActiveSection(): SectionId {
  const ids = navItems.map((item) => item.id);
  const marker = window.innerHeight * 0.28;
  let current: SectionId = ids[0] ?? "about";

  for (const id of ids) {
    const el = document.getElementById(id);
    if (!el) continue;
    if (el.getBoundingClientRect().top - marker <= 0) {
      current = id;
    }
  }

  return current;
}

export function useActiveSection() {
  const [activeId, setActiveId] = useState<SectionId>("about");

  useEffect(() => {
    const update = () => setActiveId(readActiveSection());

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    window.addEventListener("hashchange", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      window.removeEventListener("hashchange", update);
    };
  }, []);

  return activeId;
}
