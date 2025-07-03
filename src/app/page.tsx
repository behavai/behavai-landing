"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { DemoCardsSection } from "@/components/DemoCardsSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";
import { AnimatePresence, motion } from "framer-motion";
import { Support } from "@/components/Support";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import { MoreInfo } from "@/components/MoreInfo";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Product");

  const motionProps = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { duration: 0.3 },
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Product":
        return (
          <motion.div key="product" {...motionProps}>
            <HeroSection setActiveTab={setActiveTab} />
            <FeaturesSection />
            <DemoCardsSection setActiveTab={setActiveTab} />
            {/* <Footer setActiveTab={setActiveTab} /> */}
          </motion.div>
        );
      
      case "About":
        return (
          <motion.div
            key="about"
            {...motionProps}
            className="h-screen snap-start flex flex-col"
          >
            <TeamSection />
            <Footer setActiveTab={setActiveTab} />
          </motion.div>
        );
      case "Blog":
        return (
          <motion.div key="blog" {...motionProps}
          className="h-screen snap-start flex flex-col">
            <Blog />
            <Footer setActiveTab={setActiveTab} />
          </motion.div>
        );
      case "Contact":
        return (
          <motion.div key={activeTab} {...motionProps} className="h-screen snap-start flex flex-col">
            <Contact />
            <Footer setActiveTab={setActiveTab} />
            {/* <section className="min-h-screen flex items-center justify-center text-xl">
              {activeTab} page coming soon.
            </section> */}
          </motion.div>
        );
    }
  };

  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <AnimatePresence mode="wait">{renderContent()}</AnimatePresence>
    
    </main>
  );
}
