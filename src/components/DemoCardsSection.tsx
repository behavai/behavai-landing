"use client";

import "@/styles/styles.css";
import DemoCard from "./DemoCard";
import { useRef, useState, useEffect, SetStateAction } from "react";

type DemoCardType = {
  index: number;
  header: string;
  body: string;
  image: string;
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

  const goToSlide = (index: SetStateAction<number>) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4">
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
export function DemoCardsSection() {  
  // Sample data for your demo cards
  const demoCards = [
    {
      index: 1,
      header: "Upload Your Data",
      body: "Simply drag and drop your files or connect to your favorite data sources. We support CSV, Excel, databases, and more.",
      image: "/images/upload-demo.png" // Replace with your actual image paths
    },
    {
      index: 2,
      header: "Auto Data Processing",
      body: "Our AI automatically cleans, validates, and structures your data, saving you hours of manual preparation work.",
      image: "/images/processing-demo.png"
    },
    {
      index: 3,
      header: "Smart Analysis",
      body: "Get instant insights with automated pattern detection, anomaly identification, and trend analysis.",
      image: "/images/analysis-demo.png"
    },
    {
      index: 4,
      header: "Interactive Visualizations",
      body: "Create stunning charts, graphs, and dashboards with our intuitive drag-and-drop interface.",
      image: "/images/visualization-demo.png"
    },
    {
      index: 5,
      header: "Share & Collaborate",
      body: "Share your insights with stakeholders through interactive reports and real-time collaboration features.",
      image: "/images/sharing-demo.png"
    },
    {
      index: 6,
      header: "Export & Integrate",
      body: "Export your results or integrate directly with your existing tools and workflows via our robust API.",
      image: "/images/export-demo.png"
    }
  ];

  return (
    <section className="relative snap-start overflow-hidden flex flex-col">
      <div className="mt-[5rem] mb-[2rem] ml-[5rem]">
        <h2 className="text-[3rem] font-cooper text-[#080015]">
          From upload to insight in just a few steps!
        </h2>
      </div>

      <div className="flex-1 flex items-center">
        <DemoCarousel cards={demoCards} />
      </div>
    </section>
  );
}