"use client";

import { useThemeSection } from "@/components/ScrollTheme";

// Placeholder — real content lands in Prompt 2.
export default function WorkMilo() {
  const ref = useThemeSection<HTMLElement>("spiritual");

  return (
    <section
      ref={ref}
      data-theme="spiritual"
      className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center"
    >
      <p className="font-body text-xs uppercase tracking-[0.35em] text-accent">
        spiritual
      </p>
      <h2 className="font-display text-6xl leading-none md:text-8xl">Work — Milo</h2>
    </section>
  );
}
