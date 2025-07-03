"use client";

import "@/styles/styles.css";

import { motion } from "framer-motion";
import { Support } from "./Support";

export function MoreInfo() {
    return (
        <section className="relative h-screen snap-start overflow-hidden flex flex-col">

            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            >
                <Support />
            </motion.div>
        </section>
    )
}


