"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

type AnimatedTabsProps = {
  tabs: string[];
  scrolled: boolean;
};

export function AnimatedTabs({ tabs, scrolled }: AnimatedTabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [tabRects, setTabRects] = useState<{ [key: string]: DOMRect }>({});
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      if (!containerRef.current) return;
      const rectMap: { [key: string]: DOMRect } = {};
      tabs.forEach((tab) => {
        const el = document.getElementById(`tab-${tab}`);
        if (el) {
          rectMap[tab] = el.getBoundingClientRect();
        }
      });
      setTabRects(rectMap);
    });

    const container = containerRef.current;
    if (container) observer.observe(container);

    return () => {
      if (container) observer.unobserve(container);
    };
  }, [tabs, activeTab]);

  const containerRect = containerRef.current?.getBoundingClientRect();
  const activeRect = tabRects[activeTab];
  const left =
    activeRect && containerRect
      ? activeRect.left - containerRect.left - 2 // small buffer left
      : 0;
  const width = activeRect?.width ? activeRect.width + 4 : 0; // small buffer width

  return (
    <div
      ref={containerRef}
      className={`relative flex gap-1 rounded-full px-2 py-1 w-fit transition-colors duration-300 ${
        scrolled ? "bg-white/50 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      {/* Animated background pill */}
      {activeRect && (
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="absolute top-[4px] h-[calc(100%-8px)] bg-[#170737] rounded-full z-0"
          style={{
            left,
            width,
          }}
        />
      )}

      {/* Tab labels */}
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
