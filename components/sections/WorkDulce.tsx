"use client";

import { motion } from "framer-motion";
import { useThemeSection } from "@/components/ScrollTheme";

export default function WorkDulce() {
  const ref = useThemeSection<HTMLElement>("tropical");

  return (
    <section
      ref={ref}
      data-theme="tropical"
      className="flex min-h-screen items-center px-6 py-20 md:px-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto flex w-full max-w-6xl flex-col gap-8 md:flex-row md:items-center md:gap-12"
      >
        <div className="flex flex-col gap-4 md:w-1/2">
          <p className="font-body text-xs uppercase tracking-[0.15em] text-accent md:tracking-[0.35em]">
            Restaurant
          </p>
          <h2 className="font-display text-5xl leading-tight md:text-7xl">
            Dulce Tropical
          </h2>
          <p className="font-body max-w-sm text-base leading-relaxed opacity-70">
            Restaurant site with menu integration. Built as a practice project, shipped as a real product.
          </p>
          <a
            href="https://dulce-tropical-restaurant-caf.vercel.app"
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
            <path
              d="M 28 118 Q 28 48 100 48 Q 172 48 172 118 Q 136 168 100 168 Q 64 168 28 118 Z"
              fill="var(--accent)"
            />
            <ellipse
              cx="82"
              cy="88"
              rx="22"
              ry="13"
              fill="white"
              opacity="0.18"
              transform="rotate(-18 82 88)"
            />
            <path
              d="M 28 118 Q 64 158 100 162 Q 136 158 172 118"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
              opacity="0.55"
            />
            <path d="M 42 142 L 52 130" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
            <path d="M 62 156 L 72 144" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
            <path d="M 84 163 L 94 151" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
            <path d="M 106 163 L 116 151" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
            <path d="M 128 156 L 138 144" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
            <path d="M 148 142 L 158 130" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
