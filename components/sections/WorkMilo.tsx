"use client";

import { motion } from "framer-motion";
import { useThemeSection } from "@/components/ScrollTheme";

export default function WorkMilo() {
  const ref = useThemeSection<HTMLElement>("spiritual");

  return (
    <section
      id="work-milo"
      ref={ref}
      data-theme="spiritual"
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
            Personal Brand
          </p>
          <h2 className="font-display text-5xl leading-tight md:text-7xl">
            milocamilo
          </h2>
          <p className="font-body max-w-sm text-base leading-relaxed opacity-70">
            A spiritual content site built for a creator. Clean layout, fast load, mobile-first.
          </p>
          <a
            href="https://milocamilo.vercel.app"
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
            <defs>
              <mask id="moonMask">
                <rect width="200" height="200" fill="white" />
                <circle cx="122" cy="90" r="60" fill="black" />
              </mask>
            </defs>
            <circle
              cx="100"
              cy="108"
              r="68"
              fill="var(--accent)"
              mask="url(#moonMask)"
              opacity="0.9"
            />
            <circle cx="155" cy="52" r="3.5" fill="currentColor" opacity="0.45" />
            <circle cx="170" cy="88" r="2.5" fill="currentColor" opacity="0.35" />
            <circle cx="163" cy="130" r="2" fill="currentColor" opacity="0.3" />
            <circle cx="44" cy="50" r="3" fill="currentColor" opacity="0.35" />
            <circle cx="32" cy="82" r="2" fill="currentColor" opacity="0.28" />
            <circle cx="50" cy="155" r="2.5" fill="currentColor" opacity="0.25" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
