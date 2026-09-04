"use client";

import { useEffect, useState } from "react";

export function Spotlight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => setEnabled(media.matches && !motion.matches);
    update();

    media.addEventListener("change", update);
    motion.addEventListener("change", update);

    function onMove(event: MouseEvent) {
      setPosition({ x: event.clientX, y: event.clientY });
    }

    window.addEventListener("mousemove", onMove);
    return () => {
      media.removeEventListener("change", update);
      motion.removeEventListener("change", update);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
      style={{
        background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(29, 78, 216, 0.12), transparent 80%)`,
      }}
    />
  );
}
