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
      className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-6"
      >
        <p className="font-body text-xs uppercase tracking-[0.15em] text-accent md:tracking-[0.35em]">
          Freelance Web Dev — Miami
        </p>
        <h1 className="font-display text-6xl leading-none md:text-[10rem]">
          sebabuilds
        </h1>
        <p className="font-display text-3xl italic text-accent md:text-5xl">
          &ldquo;Websites that work.&rdquo;
        </p>
        <p className="font-body max-w-md text-sm leading-relaxed opacity-70 md:text-base">
          Freelance web dev based in Miami. Clean, fast, and built to convert.
        </p>
        <button
          onClick={handleScrollToWork}
          className="mt-4 border border-accent px-8 py-3 font-body text-xs uppercase tracking-[0.25em] text-accent transition-colors duration-300 hover:bg-accent hover:text-bg"
        >
          See the work
        </button>
      </motion.div>
    </section>
  );
}
