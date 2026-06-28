"use client";

import { motion } from "framer-motion";
import { useThemeSection } from "@/components/ScrollTheme";

export default function WorkDulce() {
  const ref = useThemeSection<HTMLElement>("tropical");

  return (
    <section
      ref={ref}
      data-theme="tropical"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Section number — faint, bottom-right, unexpected */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-8 right-6 z-0 select-none font-display text-[12vw] leading-none text-fg opacity-[0.06] md:right-10"
      >
        03
      </span>

      {/* Mobile layout — stacked */}
      <div className="flex flex-col gap-8 px-8 py-20 md:hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4"
        >
          <p className="font-body text-xs uppercase tracking-[0.35em] text-accent">
            Restaurant
          </p>
          <h2 className="font-display text-[14vw] leading-[0.9]">
            Dulce<br />Tropical
          </h2>
          <p className="font-body max-w-xs text-sm leading-relaxed opacity-60">
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
        </motion.div>
        <div className="flex justify-center">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="h-64 w-64"
            aria-hidden="true"
          >
            <path d="M 28 118 Q 28 48 100 48 Q 172 48 172 118 Q 136 168 100 168 Q 64 168 28 118 Z" fill="var(--accent)" />
            <ellipse cx="82" cy="88" rx="22" ry="13" fill="white" opacity="0.18" transform="rotate(-18 82 88)" />
            <path d="M 28 118 Q 64 158 100 162 Q 136 158 172 118" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" opacity="0.55" />
            <path d="M 42 142 L 52 130" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
            <path d="M 62 156 L 72 144" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
            <path d="M 84 163 L 94 151" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
            <path d="M 106 163 L 116 151" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
            <path d="M 128 156 L 138 144" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
            <path d="M 148 142 L 158 130" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
          </svg>
        </div>
      </div>

      {/* Desktop layout — SVG large center-right, text overlaid left */}
      <div className="relative hidden min-h-screen md:block">
        {/* Huge SVG — center-right, nearly full viewport height */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-none absolute right-[-4%] top-1/2 -translate-y-1/2"
        >
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[80vh] w-[80vh]"
            aria-hidden="true"
          >
            <path d="M 28 118 Q 28 48 100 48 Q 172 48 172 118 Q 136 168 100 168 Q 64 168 28 118 Z" fill="var(--accent)" />
            <ellipse cx="82" cy="88" rx="22" ry="13" fill="white" opacity="0.18" transform="rotate(-18 82 88)" />
            <path d="M 28 118 Q 64 158 100 162 Q 136 158 172 118" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" opacity="0.55" />
            <path d="M 42 142 L 52 130" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
            <path d="M 62 156 L 72 144" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
            <path d="M 84 163 L 94 151" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
            <path d="M 106 163 L 116 151" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
            <path d="M 128 156 L 138 144" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
            <path d="M 148 142 L 158 130" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
          </svg>
        </motion.div>

        {/* Text — left overlay */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="absolute left-14 top-1/2 z-10 -translate-y-1/2 max-w-[40%]"
        >
          <p className="font-body text-xs uppercase tracking-[0.35em] text-accent">
            Restaurant
          </p>
          <h2 className="mt-4 font-display text-[8vw] leading-[0.88]">
            Dulce<br />Tropical
          </h2>
          <p className="mt-5 font-body text-sm leading-relaxed opacity-70 max-w-xs">
            Restaurant site with menu integration. Built as a practice project, shipped as a real product.
          </p>
          <a
            href="https://dulce-tropical-restaurant-caf.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-fit items-center gap-2 font-body text-xs uppercase tracking-[0.25em] text-accent underline underline-offset-4 transition-opacity hover:opacity-60"
          >
            View live site →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
