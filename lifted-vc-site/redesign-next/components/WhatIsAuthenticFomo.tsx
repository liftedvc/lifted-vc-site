"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { VideoThumb } from "./VideoThumb";
import { VideoLightbox } from "./VideoLightbox";
import { ComparePanel } from "./ComparePanel";

// Section 02 — What Is Authentic FOMO?
// Copy is verbatim from sub-arc-0 in the existing playbook.

const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.2, 0, 0, 1] },
};

export function WhatIsAuthenticFomo() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <section className="section-y bg-white">
        {/* Headline block — centered column */}
        <div className="container-column text-center">
          <motion.h2 {...reveal} className="text-display-md md:text-display-lg text-ink-900 mb-6">
            What Is Authentic FOMO?
          </motion.h2>
          <motion.p
            {...reveal}
            transition={{ ...reveal.transition, delay: 0.08 }}
            className="text-body-lg md:text-body-xl text-ink-500"
          >
            Concentrate meetings into a short window so investor urgency builds
            naturally. No manufactured scarcity required.
          </motion.p>
        </div>

        {/* Video + prose split */}
        <div className="container-wide mt-20 md:mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div {...reveal}>
              <VideoThumb
                youtubeId="XPnE35a3w-s"
                label="Watch the walkthrough"
                onClick={() => setVideoOpen(true)}
              />
            </motion.div>

            <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.1 }}>
              <div className="space-y-6 text-body-md md:text-body-lg text-ink-800">
                <p>
                  Most first-time fundraisers take meetings sporadically, a few here
                  and there across months, never hitting enough volume in one window
                  to generate real urgency.
                </p>
                <p>
                  Authentic FOMO concentrates meetings into a short window so urgency
                  builds naturally. <strong className="text-ink-900 font-semibold">Authentic</strong> is the key
                  word: no artificial deadlines, no fake scarcity, just genuine
                  demand any investor can verify. It describes the demand, and it
                  describes how you show up inside it.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Pull quote */}
        <motion.div
          {...reveal}
          className="container-column mt-20 md:mt-28 text-center"
        >
          <p className="text-[28px] md:text-[36px] lg:text-[40px] leading-[1.2] tracking-[-0.018em] text-ink-900 font-medium">
            Bank <span className="text-accent font-semibold">80–120 promised intros</span> before
            anything goes out, then fire everything at once. That&rsquo;s what packs{" "}
            <span className="text-accent font-semibold">30–50+ meetings into 2–3 weeks</span>.
          </p>
        </motion.div>
      </section>

      {/* Authentic vs. manufactured compare */}
      <section className="section-y bg-white border-t border-ink-100">
        <ComparePanel
          sectionLabel="Authentic vs. manufactured"
          left={{
            label: "Hype FOMO (manufactured)",
            tone: "muted",
            bullets: [
              "Artificial deadlines",
              "Fake scarcity",
              "Smoke and mirrors",
              "Falls apart under scrutiny",
            ],
          }}
          right={{
            label: "Authentic FOMO",
            bullets: [
              "Genuine round traction",
              "Real investor interest",
              "Compressed timelines",
              "Gets stronger under scrutiny",
            ],
          }}
        />
      </section>

      <VideoLightbox
        open={videoOpen}
        onClose={() => setVideoOpen(false)}
        youtubeId="XPnE35a3w-s"
        title="The Authentic FOMO Process"
      />
    </>
  );
}
