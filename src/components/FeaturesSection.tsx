"use client";

import "@/styles/styles.css";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const easeOut: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.0,
      delay: 0.6 + i * 0.5,
      ease: easeOut,
    },
  }),
};

export function FeaturesSection() {
  const titleRef = useRef(null);
  const cardsRef = useRef(null);

  const titleInView = useInView(titleRef, { once: true });
  const cardsInView = useInView(cardsRef, { once: true });

  const [checklistReady, setChecklistReady] = useState(false);

  // Total card animation time: 0.6 + 0.5*2 + 1.0 = ~2.6s
  useEffect(() => {
    if (cardsInView) {
      const timeout = setTimeout(() => setChecklistReady(true), 2600);
      return () => clearTimeout(timeout);
    }
  }, [cardsInView]);

  return (
    <section className="relative h-screen snap-start overflow-y-auto bg-white px-6 md:px-12 py-12">
      <div className="flex flex-col gap-8 max-w-7xl mx-auto my-[2rem]">
        {/* Title */}
        <motion.h2
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.3, ease: easeOut }}
          className="text-[2rem] md:text-[2.25rem] font-cooper mb-6 text-center text-[#080015]"
        >
          Designed for the Way ABA Teams Work
        </motion.h2>

        {/* Cards */}
        <motion.div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-[0.5rem]"
          initial="hidden"
          animate={cardsInView ? "visible" : "hidden"}
        >
          {[
            {
              title: "Streamline Documentation Workflows",
              desc: "Save hours every week by automating session summaries, goal updates, and progress notes.",
            },
            {
              title: "Visualize Progress at a Glance",
              desc: "Spot trends, monitor goals, and surface insights with smart visualizations.",
            },
            {
              title: "Maintain Clinical Voice & Compliance",
              desc: "Stay in control by refining tone, adjusting phrasing, and meeting insurance standards.",
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              custom={i}
              variants={cardVariants}
              className="flex flex-col items-start text-left"
            >
              <div className="w-full h-40 bg-gray-200 rounded-[16px] mb-4" />
              <h3 className="text-lg font-inter font-semibold text-[#080015] mb-1">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600 font-inter">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Checklist + Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-[0.5rem]">
        {/* Left: Checklist */}
        <div className="text-left">
            <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={checklistReady ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
            className="text-[1.75rem] md:text-[2rem] font-cooper mb-6 text-[#080015]"
            >
            Everything You Need to Work Smarter
            </motion.h2>
            <ul className="space-y-3 font-inter">
            {[
                "Faster, AI-assisted report drafting",
                "Client data visualizations",
                "Clinical voice control",
                "Audit-ready formatting",
                "Flexible file uploads",
            ].map((item, idx) => (
                <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={
                    checklistReady ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                }
                transition={{
                    duration: 0.5,
                    delay: 0.2 + idx * 0.2,
                    ease: easeOut,
                }}
                className="flex items-center gap-2 text-[0.95rem] text-[#1a202c]"
                >
                <div className="w-4 h-4 bg-[#8071B6] rounded-full flex items-center justify-center">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-2.5 w-2.5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                    />
                    </svg>
                </div>
                {item}
                </motion.li>
            ))}
            </ul>
        </div>

        {/* Right: Image (same timing as checklist title) */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={checklistReady ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
            className="w-full h-[280px] bg-gray-200 rounded-[20px]"
        />
        </div>
      </div>
    </section>
  );
}
