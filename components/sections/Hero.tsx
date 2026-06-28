"use client";

import { motion } from "framer-motion";
import { useThemeSection } from "@/components/ScrollTheme";

export default function Hero() {
  const ref = useThemeSection<HTMLElement>("editorial");

  const handleScrollToWork = () => {
    document.getElementById("work-milo")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      data-theme="editorial"
      className="relative flex min-h-screen flex-col overflow-hidden px-8 py-10 md:px-14 md:py-12"
    >
      {/* Faint oversized "sb" — bleeds off top-right */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-[8%] -top-[5%] z-0 select-none font-display text-[40vw] leading-none text-fg opacity-[0.025]"
      >
        sb
      </span>

      {/* Top-left label */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 font-body text-xs uppercase tracking-[0.3em] text-accent"
      >
        Freelance Web Dev — Miami
      </motion.p>

      {/* Main title */}
      <div className="relative z-10 flex flex-1 items-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[18vw] leading-[0.88] tracking-tight"
        >
          sebabuilds
        </motion.h1>
      </div>

      {/* Bottom row — tagline left, CTA right */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35 }}
        className="relative z-10 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between"
      >
        <div className="flex flex-col gap-2">
          <p className="font-display text-xl italic text-accent md:text-3xl">
            &ldquo;Websites that work.&rdquo;
          </p>
          <p className="font-body max-w-xs text-sm leading-relaxed opacity-60">
            Freelance web dev based in Miami. Clean, fast, and built to convert.
          </p>
        </div>
        <button
          onClick={handleScrollToWork}
          className="shrink-0 border border-accent px-10 py-4 font-body text-xs uppercase tracking-[0.3em] text-accent transition-colors duration-300 hover:bg-accent hover:text-bg"
        >
          See the work
        </button>
      </motion.div>
    </section>
  );
}
