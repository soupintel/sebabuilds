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
      className="relative min-h-screen overflow-hidden"
    >
      {/* Section number — massive, faint, top-right */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-4 top-0 z-0 select-none font-display text-[22vw] leading-none text-fg opacity-[0.05]"
      >
        01
      </span>

      {/* Text content — left, in flow */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex min-h-screen flex-col justify-center gap-5 px-8 py-20 md:max-w-[48%] md:pl-14 md:pr-0"
      >
        <p className="font-body text-xs uppercase tracking-[0.35em] text-accent">
          Personal Brand
        </p>
        <h2 className="font-display text-[13vw] leading-[0.88] md:text-[9vw]">
          milocamilo
        </h2>
        <p className="font-body max-w-xs text-sm leading-relaxed opacity-60">
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
      </motion.div>

      {/* Mobile SVG — in flow, below text */}
      <div className="flex justify-center px-8 pb-20 md:hidden">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="h-64 w-64"
          aria-hidden="true"
        >
          <defs>
            <mask id="moonMaskMobile">
              <rect width="200" height="200" fill="white" />
              <circle cx="122" cy="90" r="60" fill="black" />
            </mask>
          </defs>
          <circle cx="100" cy="108" r="68" fill="var(--accent)" mask="url(#moonMaskMobile)" opacity="0.9" />
          <circle cx="155" cy="52" r="3.5" fill="currentColor" opacity="0.45" />
          <circle cx="170" cy="88" r="2.5" fill="currentColor" opacity="0.35" />
          <circle cx="44" cy="50" r="3" fill="currentColor" opacity="0.35" />
          <circle cx="32" cy="82" r="2" fill="currentColor" opacity="0.28" />
        </svg>
      </div>

      {/* Desktop SVG — absolute, bleeding off right edge */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute right-[-16%] top-1/2 hidden -translate-y-1/2 md:block"
      >
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="h-[min(58vw,86vh)] w-[min(58vw,86vh)]"
          aria-hidden="true"
        >
          <defs>
            <mask id="moonMask">
              <rect width="200" height="200" fill="white" />
              <circle cx="122" cy="90" r="60" fill="black" />
            </mask>
          </defs>
          <circle cx="100" cy="108" r="68" fill="var(--accent)" mask="url(#moonMask)" opacity="0.9" />
          <circle cx="155" cy="52" r="3.5" fill="currentColor" opacity="0.45" />
          <circle cx="170" cy="88" r="2.5" fill="currentColor" opacity="0.35" />
          <circle cx="163" cy="130" r="2" fill="currentColor" opacity="0.3" />
          <circle cx="44" cy="50" r="3" fill="currentColor" opacity="0.35" />
          <circle cx="32" cy="82" r="2" fill="currentColor" opacity="0.28" />
          <circle cx="50" cy="155" r="2.5" fill="currentColor" opacity="0.25" />
        </svg>
      </motion.div>
    </section>
  );
}
