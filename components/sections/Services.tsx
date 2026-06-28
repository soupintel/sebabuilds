"use client";

import { motion } from "framer-motion";
import { useThemeSection } from "@/components/ScrollTheme";

const tiers = [
  {
    name: "Landing Page",
    price: "$750",
    items: ["1 page, mobile-first", "Contact form", "Vercel hosted"],
  },
  {
    name: "Full Site",
    price: "$1,500",
    items: ["3–5 pages", "Blog", "Third-party integrations"],
  },
  {
    name: "Maintenance",
    price: "$99/mo",
    items: ["Updates", "Hosting mgmt", "Priority support"],
  },
];

export default function Services() {
  const ref = useThemeSection<HTMLElement>("minimal");

  return (
    <section
      ref={ref}
      data-theme="minimal"
      className="relative flex min-h-screen flex-col justify-center px-8 py-12 md:px-14 md:py-0"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-4 font-body text-xs uppercase tracking-[0.35em] text-accent">
          Services
        </p>
        <h2 className="mb-10 font-display text-[10vw] leading-none md:mb-14 md:text-[8vw]">
          What I build.
        </h2>

        {/* HR above cards */}
        <div className="h-px w-full bg-fg opacity-15" />

        <div className="grid grid-cols-1 divide-y border border-fg/10 divide-fg/10 md:grid-cols-3 md:divide-x md:divide-y-0">
          {tiers.map((tier) => (
            <div key={tier.name} className="flex flex-col gap-6 p-10 md:p-12">
              <div>
                <p className="font-body text-xs uppercase tracking-[0.25em] opacity-50">
                  {tier.name}
                </p>
                <p className="mt-3 font-display text-5xl md:text-6xl">{tier.price}</p>
              </div>
              <ul className="flex flex-col gap-3">
                {tier.items.map((item) => (
                  <li key={item} className="font-body text-sm opacity-60">
                    — {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* HR below cards */}
        <div className="h-px w-full bg-fg opacity-15" />

        <p className="mt-8 font-body text-xs opacity-40">
          Rush delivery (under 5 days) adds 50%.
        </p>
      </motion.div>
    </section>
  );
}
