"use client";

import { motion } from "framer-motion";

// Two-column compare panel. Used for the Authentic vs. manufactured block
// in Section 02. Minimal chrome, hairline divider, generous padding.

type Column = {
  label: string;
  bullets: string[];
  tone?: "neutral" | "muted";
};

export function ComparePanel({
  sectionLabel,
  left,
  right,
}: {
  sectionLabel?: string;
  left: Column;
  right: Column;
}) {
  return (
    <div className="container-wide">
      {sectionLabel && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="eyebrow mb-10 md:mb-14 text-center"
        >
          {sectionLabel}
        </motion.div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 md:divide-x md:divide-ink-100">
        <Column col={left} side="left" />
        <Column col={right} side="right" />
      </div>
    </div>
  );
}

function Column({ col, side }: { col: Column; side: "left" | "right" }) {
  const muted = col.tone === "muted";
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: side === "right" ? 0.1 : 0 }}
      className={`px-0 ${side === "left" ? "md:pr-12" : "md:pl-12"}`}
    >
      <div
        className={`text-[13px] font-semibold tracking-[0.08em] uppercase mb-6 ${
          muted ? "text-ink-300" : "text-ink-500"
        }`}
      >
        {col.label}
      </div>
      <ul className="space-y-4">
        {col.bullets.map((b, i) => (
          <li
            key={i}
            className={`flex items-start gap-3 text-body-md ${
              muted ? "text-ink-500" : "text-ink-900"
            }`}
          >
            <span
              className={`mt-[11px] w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                muted ? "bg-ink-300" : "bg-ink-900"
              }`}
              aria-hidden
            />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
