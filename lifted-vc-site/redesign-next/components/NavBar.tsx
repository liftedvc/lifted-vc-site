"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LogoMark } from "./LogoMark";

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 inset-x-0 z-50"
      initial={false}
      animate={{
        backgroundColor: scrolled ? "rgba(255,255,255,0.72)" : "rgba(255,255,255,0)",
        borderBottomColor: scrolled ? "rgba(10,10,10,0.08)" : "rgba(10,10,10,0)",
      }}
      transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
      style={{
        backdropFilter: scrolled ? "saturate(180%) blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "saturate(180%) blur(20px)" : "none",
        borderBottom: "1px solid",
      }}
    >
      <div className="mx-auto max-w-wide h-14 px-6 flex items-center justify-between">
        <a
          href="/"
          className="flex items-center gap-2 text-ink-900 hover:opacity-80 transition-opacity"
          aria-label="Lifted home"
        >
          <LogoMark />
          <span className="font-semibold text-[17px] tracking-tight">lifted</span>
        </a>

        <nav className="flex items-center gap-6">
          <a
            href="https://www.lifted.vc"
            target="_blank"
            rel="noopener"
            className="text-[14px] text-ink-800 hover:text-ink-900 transition-colors"
          >
            Work with Lifted
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
