"use client";

import { motion } from "framer-motion";

// Section 01 — Hero for Chapter 2.
// Copy is verbatim from the existing playbook (allChapters entry for
// id:'arc'). Eyebrow, headline, subhead, and scroll cue.
// One job: set the chapter up and invite the scroll.

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center bg-white">
      <div className="container-column text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0, 0, 1] }}
          className="eyebrow mb-5"
        >
          Chapter 02
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.2, 0, 0, 1] }}
          className="text-display-md md:text-display-lg lg:text-display-xl text-ink-900 mb-6"
        >
          The Authentic FOMO Framework
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.16, ease: [0.2, 0, 0, 1] }}
          className="text-body-lg md:text-body-xl text-ink-500 max-w-[560px] mx-auto"
        >
          Learn the 9-step process behind how rounds actually get raised.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ScrollCue />
      </motion.div>
    </section>
  );
}

function ScrollCue() {
  return (
    <motion.div
      className="flex flex-col items-center gap-3"
      animate={{ y: [0, 6, 0] }}
      transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
    >
      <span className="text-[11px] tracking-[0.14em] uppercase text-ink-500">
        Scroll
      </span>
      <svg
        width="14"
        height="22"
        viewBox="0 0 14 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <rect
          x="0.75"
          y="0.75"
          width="12.5"
          height="20.5"
          rx="6.25"
          stroke="#A1A1A6"
          strokeWidth="1.5"
        />
        <motion.circle
          cx="7"
          cy="7"
          r="1.5"
          fill="#A1A1A6"
          animate={{ cy: [7, 13, 7] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </motion.div>
  );
}
