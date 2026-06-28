"use client";

import { motion } from "framer-motion";
import { useThemeSection } from "@/components/ScrollTheme";

export default function BookCall() {
  const ref = useThemeSection<HTMLElement>("cta");

  return (
    <section
      ref={ref}
      data-theme="cta"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-8 py-20 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex flex-col items-center gap-10"
      >
        <h2 className="font-display text-[12vw] leading-[0.88] md:text-[10vw]">
          Let&rsquo;s build<br />something.
        </h2>
        <p className="font-body max-w-sm text-base leading-relaxed opacity-80">
          Book a free 30-min intro call. No pitch, just a conversation.
        </p>
        <a
          href="https://calendly.com/sebabuilds/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-fg px-16 py-5 font-body text-sm uppercase tracking-[0.3em] text-fg transition-colors duration-300 hover:bg-fg hover:text-bg"
        >
          Book a Call
        </a>
      </motion.div>
    </section>
  );
}
