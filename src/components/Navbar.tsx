"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedTabs } from "@/components/ui/animated-tabs"; // or remove this if you're testing standalone

const TABS = ["Product", "About", "Blog", "Contact"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scrollable = document.querySelector("main");
    if (!scrollable) return;

    const onScroll = () => {
      setScrolled(scrollable.scrollTop > 10);
    };

    scrollable.addEventListener("scroll", onScroll);
    return () => scrollable.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-3 ">
      <div className="flex justify-between items-center ">
        {/* Left: Logo + BehavAI text */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              document.querySelector("main")?.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="focus:outline-none"
          >
            <Image
              src="/assets/logo.svg"
              alt="BehavAI Logo"
              width={45}
              height={45}
            />
          </button>
          <AnimatePresence mode="wait">
            {!scrolled && (
              <motion.div
                key="behavai-text"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="font-cooper text-[#1a202c] text-[2rem] mt-[0.5rem]"
              >
                BehavAI
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right: Pills */}
        <div className="font-cooper">
          <AnimatedTabs tabs={TABS} scrolled={scrolled} />
        </div>
      </div>
    </header>
  );
}
