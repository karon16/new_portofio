"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, FileText } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import CustomCursor from "@/components/CustomCursor";

const papers = [
    {
        title: "Multimodal Crisis Event Analysis Mapping System",
        conference: "KCC 2026 (Under Review)",
        description: "Submitted to KCC 2026 (https://www.kiise.or.kr/conference/kcc/2026/) and pending approval. An AI-based system evaluating disaster data across informativeness, humanitarian impact, and damage severity with an interactive map interface.",
        link: "/심사용+논문.pdf"
    }
];

export default function PapersPage() {
    return (
        <div className="h-screen w-full bg-[var(--background)] text-[var(--foreground)] p-8 md:p-24 relative overflow-x-hidden overflow-y-auto">
            <ThemeToggle />
            <CustomCursor />

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-5xl mx-auto mb-16"
            >
                <Link href="/" className="inline-flex items-center gap-2 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors mb-8 group opacity-70">
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>
                <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">Recent Publications</h1>
                <p className="text-xl opacity-70">Selected research papers and conference proceedings.</p>
            </motion.div>

            {/* Papers Grid */}
            <div className="max-w-5xl mx-auto grid gap-8">
                {papers.map((paper, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] hover:border-[var(--muted)] transition-all group"
                    >
                        <div className="flex flex-col md:flex-row gap-6 md:items-start justify-between">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] opacity-80">
                                        {paper.conference}
                                    </span>
                                </div>
                                <h2 className="text-2xl font-bold mb-3 group-hover:text-green-500 transition-colors">{paper.title}</h2>
                                <p className="text-[var(--foreground)] opacity-70 leading-relaxed mb-6">
                                    {paper.description}
                                </p>
                                <a
                                    href={paper.link}
                                    className="inline-flex items-center gap-2 text-sm font-bold border-b border-transparent hover:border-[var(--foreground)] transition-all"
                                >
                                    READ PAPER <ExternalLink size={14} />
                                </a>
                            </div>
                            <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-[var(--background)] border border-[var(--border)] group-hover:scale-110 transition-transform">
                                <FileText size={20} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
