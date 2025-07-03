"use client";

import "@/styles/styles.css";
import Image from "next/image";
import { motion } from "framer-motion";
// import { Support } from "./Support";
import { useState } from "react";

type HeroSectionProps = {
  setActiveTab: (tab: string) => void;
};

export function HeroSection({ setActiveTab }: HeroSectionProps) {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <section className="relative h-auto lg:h-screen snap-start overflow-hidden flex">
      {/* Blobs */}
      <div className="absolute w-[634px] h-[634px] bg-[#F7EDFF] rounded-full blur-[100px] opacity-50 top-[-200px] right-[50px] z-0 pointer-events-none floating-down-left"></div>
      <div className="absolute w-[634px] h-[634px] bg-[#545DBE] rounded-full blur-[100px] opacity-50 bottom-[-200px] right-[-200px] z-0 pointer-events-none floating-up-left"></div>
      <div className="absolute w-[634px] h-[634px] bg-[#525BBD] rounded-full blur-[100px] opacity-50 top-[-280px] left-[-317px] z-0 pointer-events-none floating-down-right"></div>
      <div className="absolute w-[634px] h-[634px] bg-white rounded-full blur-[100px] opacity-100 top-[219px] left-[376px] z-0 pointer-events-none floating-up-down"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row w-full h-auto lg:h-screen px-6 lg:px-0 py-12  gap-12 lg:gap-0">
        {/* Left Column */}
        <div className="w-full lg:w-2/5 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-[500px] lg:pl-[7vw]"
          >
            <h1 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] font-cooper leading-tight mb-6 text-[#080015]">
              AI-Powered Reporting Built for ABA
            </h1>
            <Image
              src="/assets/curve.svg"
              alt="Decorative curve"
              width={400}
              height={40}
              className="mb-6"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="text-lg mb-8 font-inter text-black/70 tracking-[-0.32px]"
            >
              BehavAI turns session notes and behavioral data into clear, audit-ready reports—automatically, intelligently, and always in your clinical voice.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <button
                onClick={() => setActiveTab("Contact")}
                className="px-6 py-4 bg-[#2D0C57] text-white rounded-full font-inter text-[1.125rem] tracking-[-0.32px] transition duration-200 hover:scale-105 hover:bg-[#1f073e]"
              >
                Try free trial
              </button>
              <button
                onClick={() => setIsDemoOpen(true)}
                className="flex items-center gap-2 transition duration-200 hover:scale-105"
              >
                <Image
                  src="/assets/play.svg"
                  alt="Play icon"
                  width={40}
                  height={40}
                />
                <span className="font-inter text-[1.125rem] tracking-[-0.32px]">View Demo</span>
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Modal */}
        {isDemoOpen && (
          <div
            onClick={() => setIsDemoOpen(false)}
            className="fixed inset-0 z-50 backdrop-blur-sm bg-black/30 flex items-center justify-center"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-xl overflow-hidden max-w-3xl w-full aspect-video"
            >
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/priAv6_Cr1Q"
                title="Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

        {/* Right Column */}
        <div className="w-full lg:w-3/5 flex flex-col items-center justify-center gap-8">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="w-full max-w-[90%] sm:max-w-[80%] lg:h-[55%] flex items-center justify-center"
          >
            <Image
              src="/assets/home_screen.svg"
              alt="Home screen preview"
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
