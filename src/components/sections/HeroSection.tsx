"use client";

import { motion } from "framer-motion";
import { Github, Mail, FileText } from "lucide-react";
import DataMorphosis from "@/components/DataMorphosis";

export function HeroSection() {
    return (
        <div className="h-full w-full flex relative overflow-hidden">
            {/* Left: Typography */}
            <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center z-10 bg-[var(--background)]">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-[var(--muted)] mb-4 tracking-widest text-sm"
                    style={{ color: "var(--muted-foreground, #a3a3a3)" }}
                >
          // PORTFOLIO
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                    className="text-5xl md:text-8xl font-black tracking-tight mb-6 leading-tight text-[var(--foreground)]"
                >
                    Christopher <br /> Buhendwa
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-xl md:text-2xl opacity-80 max-w-xl leading-relaxed mb-10 text-[var(--foreground)]"
                >
                    Bridging Model Architecture with User Experience.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-wrap gap-4"
                >
                    <a href="mailto:christopherbuhendwa2000@gmail.com" className="px-6 py-3 bg-[var(--foreground)] text-[var(--background)] font-bold rounded-full hover:opacity-80 transition-opacity flex items-center gap-2">
                        <Mail size={18} /> Work with me
                    </a>
                    <a href="https://github.com/karon16" target="_blank" rel="noopener noreferrer" className="p-3 border border-[var(--border)] rounded-full hover:bg-[var(--muted)] transition-colors text-[var(--foreground)]">
                        <Github size={24} />
                    </a>
                    <a href="/paper.pdf" className="px-6 py-3 border border-[var(--border)] text-[var(--foreground)] rounded-full hover:bg-[var(--muted)] transition-colors flex items-center gap-2">
                        <FileText size={18} /> Recent Papers
                    </a>
                </motion.div>
            </div>

            {/* Right: Abstract Visual */}
            <div className="absolute inset-0 md:relative md:w-1/2 bg-[var(--muted)] overflow-hidden flex items-center justify-center">
                <DataMorphosis />
            </div>
        </div>
    );
}
