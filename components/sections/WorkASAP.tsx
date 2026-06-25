"use client";

import { useThemeSection } from "@/components/ScrollTheme";

// Placeholder — real content lands in Prompt 2.
export default function WorkASAP() {
  const ref = useThemeSection<HTMLElement>("rugged");

  return (
    <section
      ref={ref}
      data-theme="rugged"
      className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center"
    >
      <p className="font-body text-xs uppercase tracking-[0.35em] text-accent">
        rugged
      </p>
      <h2 className="font-display text-6xl leading-none md:text-8xl">Work — ASAP</h2>
    </section>
  );
}
