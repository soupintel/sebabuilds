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
      className="flex min-h-screen flex-col items-center justify-center px-6 py-20 md:px-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto w-full max-w-5xl"
      >
        <p className="mb-4 font-body text-xs uppercase tracking-[0.15em] text-accent md:tracking-[0.35em]">
          Services
        </p>
        <h2 className="mb-8 font-display text-4xl leading-none md:mb-16 md:text-7xl">
          What I build.
        </h2>
        <div className="grid grid-cols-1 gap-px md:grid-cols-3">
          {tiers.map((tier) => (
            <div key={tier.name} className="flex flex-col gap-6 border border-fg/10 p-8">
              <div>
                <p className="font-body text-xs uppercase tracking-[0.25em] opacity-50">
                  {tier.name}
                </p>
                <p className="mt-2 font-display text-4xl">{tier.price}</p>
              </div>
              <ul className="flex flex-col gap-2">
                {tier.items.map((item) => (
                  <li key={item} className="font-body text-sm opacity-60">
                    — {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-6 font-body text-xs opacity-40">
          Rush delivery (under 5 days) adds 50%.
        </p>
      </motion.div>
    </section>
  );
}
