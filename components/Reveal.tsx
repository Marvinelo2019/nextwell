"use client";

import { useEffect } from "react";

// Adds .in to every [data-reveal] or [data-words] element once it enters the viewport.
// Elements are only hidden while html.js is set and motion is allowed (see globals.css).
export default function Reveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal], [data-words]");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
