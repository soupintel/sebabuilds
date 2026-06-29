"use client";

import { motion } from "framer-motion";
import { useThemeSection } from "@/components/ScrollTheme";

export default function WorkASAP() {
  const ref = useThemeSection<HTMLElement>("rugged");

  return (
    <section
      ref={ref}
      data-theme="rugged"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Section number — massive, faint, top-left */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-4 top-0 z-0 select-none font-display text-[22vw] leading-none text-fg opacity-[0.05]"
      >
        02
      </span>

      {/* Text content — right side on desktop, normal flow on mobile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex min-h-screen flex-col justify-center gap-5 px-8 py-20 md:ml-auto md:max-w-[46%] md:px-0 md:pr-14"
      >
        <p className="font-body text-xs uppercase tracking-[0.35em] text-accent">
          Local Service Business
        </p>
        <h2 className="font-display text-[12vw] leading-[0.85] md:text-[8vw]">
          ASAP<br />Tree<br />Service
        </h2>
        <p className="font-body max-w-xs text-sm leading-relaxed opacity-60">
          Lead-gen site for a tree service company. Built to rank locally and convert mobile visitors.
        </p>
        <a
          href="https://asap-tree-service.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex w-fit items-center gap-2 font-body text-xs uppercase tracking-[0.25em] text-accent underline underline-offset-4 transition-opacity hover:opacity-60"
        >
          View live site →
        </a>
      </motion.div>

      {/* Mobile SVG — in flow, below text */}
      <div className="flex justify-center px-8 pb-20 md:hidden">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="h-64 w-64"
          aria-hidden="true"
        >
          <rect x="88" y="138" width="24" height="52" rx="3" fill="currentColor" opacity="0.65" />
          <path d="M88 182 Q72 190 58 185" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.4" />
          <path d="M112 182 Q128 190 142 185" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.4" />
          <polygon points="100,18 150,92 50,92" fill="var(--accent)" />
          <polygon points="100,48 156,118 44,118" fill="var(--accent)" opacity="0.82" />
          <polygon points="100,78 160,148 40,148" fill="var(--accent)" opacity="0.65" />
        </svg>
      </div>

      {/* Desktop SVG — absolute, bleeding off left edge */}
      <div className="pointer-events-none absolute left-[-14%] top-1/2 hidden -translate-y-1/2 md:block">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[min(58vw,75vh)] w-[min(58vw,75vh)]"
            aria-hidden="true"
          >
            <rect x="88" y="138" width="24" height="52" rx="3" fill="currentColor" opacity="0.65" />
            <path d="M88 182 Q72 190 58 185" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.4" />
            <path d="M112 182 Q128 190 142 185" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.4" />
            <polygon points="100,18 150,92 50,92" fill="var(--accent)" />
            <polygon points="100,48 156,118 44,118" fill="var(--accent)" opacity="0.82" />
            <polygon points="100,78 160,148 40,148" fill="var(--accent)" opacity="0.65" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
