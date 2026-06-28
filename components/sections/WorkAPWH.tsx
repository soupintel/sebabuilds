"use client";

import { motion } from "framer-motion";
import { useThemeSection } from "@/components/ScrollTheme";

export default function WorkAPWH() {
  const ref = useThemeSection<HTMLElement>("minimal");

  return (
    <section
      ref={ref}
      data-theme="minimal"
      className="flex min-h-screen items-center px-6 py-20 md:px-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto flex w-full max-w-6xl flex-col gap-8 md:flex-row-reverse md:items-center md:gap-12"
      >
        <div className="flex flex-col gap-4 md:w-1/2">
          <p className="font-body text-xs uppercase tracking-[0.15em] text-accent md:tracking-[0.35em]">
            Study Tool
          </p>
          <h2 className="font-display text-5xl leading-tight md:text-7xl">
            apwh-graphs
          </h2>
          <p className="font-body max-w-sm text-base leading-relaxed opacity-70">
            Interactive graph tool for AP World History students. Built and used it myself.
          </p>
          <a
            href="https://apwh-graphs.lcidk.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex w-fit items-center gap-2 font-body text-xs uppercase tracking-[0.25em] text-accent underline underline-offset-4 transition-opacity hover:opacity-60"
          >
            View live site →
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex items-center justify-center md:w-1/2"
        >
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-56 h-56 md:w-80 md:h-80"
            aria-hidden="true"
          >
            <line x1="28" y1="22" x2="28" y2="168" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <line x1="28" y1="168" x2="178" y2="168" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <rect x="42" y="112" width="26" height="56" rx="2" fill="currentColor" opacity="0.22" />
            <rect x="78" y="68" width="26" height="100" rx="2" fill="var(--accent)" />
            <rect x="114" y="88" width="26" height="80" rx="2" fill="currentColor" opacity="0.22" />
            <rect x="150" y="42" width="26" height="126" rx="2" fill="var(--accent)" opacity="0.6" />
            <line x1="22" y1="88" x2="28" y2="88" stroke="currentColor" strokeWidth="2" opacity="0.4" />
            <line x1="22" y1="128" x2="28" y2="128" stroke="currentColor" strokeWidth="2" opacity="0.4" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
