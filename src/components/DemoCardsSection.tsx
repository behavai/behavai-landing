"use client";

import "@/styles/styles.css";
import DemoCard from "./DemoCard";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
const easeOut: [number, number, number, number] = [0.25, 0.1, 0.25, 1];


export function DemoCardsSection() {
    const colors = ['#FF6188', '#FC9867', '#FFD866', '#A9DC76', '#78DCE8', '#AB9DF2'];
    const titleRef = useRef(null);
    const titleInView = useInView(titleRef, { once: true });
    return (
        <section className="relative h-screen snap-start overflow-hidden flex flex-col">
            <div className="mt-[5rem] mb-[2rem] ml-[5rem]">
                <motion.h2
                    ref={titleRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={titleInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1.2, delay: 0.3, ease: easeOut }}
                    className="text-[3rem] font-cooper text-[#080015]"
                    >
                    From upload to insight in just a few steps!
                </motion.h2>
            </div>
            <div className="gap-8 max-w-7xl mx-auto">
                
                <div className="mx-auto my-auto">
                        {colors.map((color, i) => (
                        <DemoCard
                            index={i + 1}
                            header={`Demo Card ${i + 1}`}
                            body={`This is the body text for demo card ${i + 1}. It showcases the features and capabilities of our product.`}
                            image={`/assets/demo-image-${i + 1}.png`} // Assuming images are named demo-image-1.png, demo-image-2.png, etc.
                            key={i}
                            
                        />

                    ))}
                </div>

            </div>
            
            
        </section>
    );
}
