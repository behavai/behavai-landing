"use client";

import "@/styles/styles.css";
import DemoCard from "./DemoCard";
// import { useRef, useState, useEffect, SetStateAction } from "react";
import {useState} from "react";
import Footer from "./Footer";

type DemoCardType = {
  index: number;
  header: string;
  body: string;
  image: string;
};

type DemoCardsSectionProps = {
  setActiveTab: (tab: string) => void;
};

interface DemoCarouselProps {
  cards: DemoCardType[];
}

const DemoCarousel = ({ cards }: DemoCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  // const goToSlide = (index: SetStateAction<number>) => {
  //   setCurrentIndex(index);
  // };

  return (
    <div className="relative w-[60%] mx-auto px-4">
      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        disabled={currentIndex === 0}
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all hover:scale-105"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Single Card Display */}
        <div 
          className="flex transition-transform duration-500 ease-in-out m-5"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {cards.map((card, index) => (
            <div key={index} className="w-full flex-shrink-0 px-2 md:px-4">
              <DemoCard 
                index={card.index}
                header={card.header}
                body={card.body}
                image={card.image}
              />
            </div>
          ))}
        </div>

      
    </div>
  );
};
export function DemoCardsSection({ setActiveTab }: DemoCardsSectionProps) {
  // Sample data for your demo cards
  const demoCards = [
    {
      index: 1,
      header: "Upload Any Document",
      body: "Drop in Session Notes, progress logs, PDFs, or scanned images. BehavAI handles the rest its intelligent document processing. ",
      image: "/assets/documents.svg" 
    },
    {
      index: 2,
      header: "Extract Key Data Instantly",
      body: "Our AI pulls out goals, behaviors, timestamps, and infers trends from your documents in seconds, ready for fast review and editing.",
      image: "/assets/data.svg" 
    },
    {
      index: 3,
      header: "Generate Smart Reports",
      body: "Once you create a report, BehavAI will generate a complete draft with charts, summaries, and customizable insights.",
      image: "/assets/report.svg"
    },
    {
      index: 4,
      header: "Refine & Export with Confidence",
      body: "Adjust tone, language, or data visualizations with a few clicks, then export a professional, audit-ready report ready to share.",
      image: "/assets/edit_report.svg"
    }
  ];

  return (
    <section className="relative h-screen snap-start overflow-hidden flex flex-col">
      <div className="mt-[5rem] mb-[2rem] ml-[5rem]">
        <h2 className="text-[3rem] font-cooper text-[#080015]">
          From upload to insight in just a few steps!
        </h2>
      </div>

      <div className="flex-1 flex items-center mb-7 mt-[-1rem]">
        <DemoCarousel cards={demoCards} />
      </div>
      <Footer setActiveTab={setActiveTab} />  
    </section>
  );
}