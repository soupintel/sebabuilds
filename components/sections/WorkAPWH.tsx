"use client";

import { motion } from "framer-motion";
import { useThemeSection } from "@/components/ScrollTheme";

export default function WorkAPWH() {
  const ref = useThemeSection<HTMLElement>("minimal");

  const svgEl = (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className="h-40 w-40 md:h-[28vw] md:w-[28vw]"
      aria-hidden="true"
    >
      <line x1="28" y1="22" x2="28" y2="168" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="28" y1="168" x2="178" y2="168" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <rect x="42" y="112" width="26" height="56" rx="2" fill="currentColor" opacity="0.18" />
      <rect x="78" y="68" width="26" height="100" rx="2" fill="var(--accent)" />
      <rect x="114" y="88" width="26" height="80" rx="2" fill="currentColor" opacity="0.18" />
      <rect x="150" y="42" width="26" height="126" rx="2" fill="var(--accent)" opacity="0.6" />
      <line x1="22" y1="88" x2="28" y2="88" stroke="currentColor" strokeWidth="2" opacity="0.4" />
      <line x1="22" y1="128" x2="28" y2="128" stroke="currentColor" strokeWidth="2" opacity="0.4" />
    </svg>
  );

  return (
    <section
      ref={ref}
      data-theme="minimal"
      className="relative flex min-h-screen flex-col overflow-hidden px-8 py-16 md:px-14"
    >
      {/* 04 — tiny, top-right */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-8 top-10 select-none font-body text-xs leading-none text-fg opacity-25 md:right-14"
      >
        04
      </span>

      {/* Title area — two-column on desktop: title left, description right */}
      <div className="relative z-10 my-auto">
        <p className="font-body text-xs uppercase tracking-[0.35em] text-accent mb-6">
          Study Tool
        </p>
        <div className="md:grid md:grid-cols-2 md:items-end md:gap-x-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-[10vw] leading-[0.88] md:text-[9vw]">
              apwh-graphs
            </h2>
          </motion.div>

          {/* Description — right column on desktop only */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex md:flex-col md:gap-4 md:pb-2"
          >
            <p className="font-body text-sm leading-relaxed opacity-60">
              Interactive graph tool for AP World History students. Built and used it myself.
            </p>
            <a
              href="https://apwh-graphs.lcidk.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 font-body text-xs uppercase tracking-[0.25em] text-accent underline underline-offset-4 transition-opacity hover:opacity-60"
            >
              View live site →
            </a>
          </motion.div>
        </div>
      </div>

      {/* SVG + mobile description at bottom */}
      <div className="relative z-10 mt-auto flex flex-col gap-8 pt-12 md:flex-row md:items-end md:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="shrink-0"
        >
          {svgEl}
        </motion.div>

        {/* Mobile only: description below SVG */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex max-w-xs flex-col gap-4 pb-2 md:hidden"
        >
          <p className="font-body text-sm leading-relaxed opacity-60">
            Interactive graph tool for AP World History students. Built and used it myself.
          </p>
          <a
            href="https://apwh-graphs.lcidk.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 font-body text-xs uppercase tracking-[0.25em] text-accent underline underline-offset-4 transition-opacity hover:opacity-60"
          >
            View live site →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
