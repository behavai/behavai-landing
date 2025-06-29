"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

type AnimatedTabsProps = {
  tabs: string[];
  scrolled: boolean;
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export function AnimatedTabs({
  tabs,
  scrolled,
  activeTab,
  setActiveTab,
}: AnimatedTabsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tabRects, setTabRects] = useState<{ [key: string]: DOMRect }>({});

  const measureRects = () => {
    if (!containerRef.current) return;
    const newRects: { [key: string]: DOMRect } = {};
    tabs.forEach((tab) => {
      const el = document.getElementById(`tab-${tab}`);
      if (el) {
        newRects[tab] = el.getBoundingClientRect();
      }
    });
    setTabRects(newRects);
  };

  useEffect(() => {
    const frame = requestAnimationFrame(measureRects); // delay until after paint

    const observer = new ResizeObserver(measureRects);
    const container = containerRef.current;
    if (container) observer.observe(container);

    return () => {
      cancelAnimationFrame(frame);
      if (container) observer.unobserve(container);
    };
  }, [tabs]);

  useEffect(() => {
    // re-measure every time the active tab changes
    const timeout = setTimeout(measureRects, 10); // allow DOM to update
    return () => clearTimeout(timeout);
  }, [activeTab]);

  const containerRect = containerRef.current?.getBoundingClientRect();
  const activeRect = tabRects[activeTab];
  const left =
    activeRect && containerRect
      ? activeRect.left - containerRect.left - 2
      : 0;
  const width = activeRect?.width ? activeRect.width + 4 : 0;

  return (
    <div
      ref={containerRef}
      className={`relative flex gap-1 rounded-full px-2 py-1 w-fit transition-colors duration-300 ${
        scrolled ? "bg-white/50 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="absolute top-[4px] h-[calc(100%-8px)] bg-[#170737] rounded-full z-0"
        style={{ left, width }}
      />

      {tabs.map((tab) => {
        const isActive = tab === activeTab;

        return (
          <button
            key={tab}
            id={`tab-${tab}`}
            onClick={() => setActiveTab(tab)}
            className={`relative z-10 px-4 py-2 rounded-full text-[1rem] font-inter tracking-[-0.32px] transition-colors ${
              isActive ? "text-white" : "text-[#170737]"
            }`}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}
