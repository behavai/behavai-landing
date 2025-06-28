"use client";

import "@/styles/styles.css";
import Image from "next/image";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative h-screen snap-start overflow-hidden flex">
      {/* Blobs */}
      <div className="absolute w-[634px] h-[634px] bg-[#F7EDFF] rounded-full blur-[100px] opacity-50 top-[-200px] right-[50px] z-0 pointer-events-none floating-down-left"></div>
      <div className="absolute w-[634px] h-[634px] bg-[#545DBE] rounded-full blur-[100px] opacity-50 bottom-[-200px] right-[-200px] z-0 pointer-events-none floating-up-left"></div>
      <div className="absolute w-[634px] h-[634px] bg-[#525BBD] rounded-full blur-[100px] opacity-50 top-[-280px] left-[-317px] z-0 pointer-events-none floating-down-right"></div>
      <div className="absolute w-[634px] h-[634px] bg-white rounded-full blur-[100px] opacity-100 top-[219px] left-[376px] z-0 pointer-events-none floating-up-down"></div>

      {/* Content */}
      <div className="relative z-10 flex w-screen h-screen">
        <div className="w-2/5 flex items-center justify-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-[500px] pl-[7vw]"
          >
            <h1 className="text-[4rem] font-cooper leading-tight mb-6 text-[#080015]">
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
              className="text-lg mb-8 font-inter text-black/70 tracking-[-0.32px] text-[1rem]"
            >
              BehavAI turns session notes and behavioral data into clear, audit-ready reports—automatically, intelligently, and always in your clinical voice.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
              className="grid grid-cols-2 gap-4 place-items-center"
            >
              <button className="px-6 py-4 bg-[#2D0C57] text-white rounded-full font-inter text-[1.125rem] tracking-[-0.32px] transition duration-200 hover:scale-105 hover:bg-[#1f073e]">
                Try free trial
              </button>
              <button className="flex items-center gap-2 transition duration-200 hover:scale-105">
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
        <div className="w-3/5 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="w-[80%] h-[55%] rounded-[18px] bg-[#FAFAFA] shadow-xl border border-gray-200 flex items-center justify-center"
          >
            <p className="text-sm text-gray-500">Image</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
