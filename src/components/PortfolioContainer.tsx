"use client";

import { useRef, useEffect } from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ThemeToggle } from "./ThemeToggle";
import { useActiveSectionObserver } from "@/hooks/useActiveSectionObserver";
import { motion } from "framer-motion";
import CustomCursor from "./CustomCursor";

const slides = [
    { id: "hero", component: <HeroSection /> },
    { id: "about", component: <AboutSection /> },
    { id: "projects", component: <ProjectsSection /> },
    { id: "contact", component: <ContactSection /> }
];

export default function PortfolioContainer() {
    const { activeSection, observerRefs } = useActiveSectionObserver(slides.map(s => s.id));

    const scrollToSection = (idx: number) => {
        observerRefs.current[idx]?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="relative h-screen w-full overflow-hidden">
            <ThemeToggle />
            <CustomCursor />

            {/* Progress Bar */}
            <div className="absolute top-0 left-0 w-full h-1 z-50 bg-neutral-800/20">
                <motion.div
                    className="h-full bg-[var(--foreground)]"
                    initial={{ width: "0%" }}
                    animate={{ width: `${((activeSection + 1) / slides.length) * 100}%` }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                />
            </div>

            {/* Navigation Dots (Desktop) */}
            <div className="hidden md:flex flex-col gap-4 fixed right-8 top-1/2 -translate-y-1/2 z-40">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => scrollToSection(idx)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${activeSection === idx
                            ? "bg-[var(--foreground)] scale-125"
                            : "bg-[var(--foreground)] opacity-30 hover:opacity-60 hover:scale-110"
                            }`}
                        aria-label={`Go to section ${idx + 1}`}
                    />
                ))}
            </div>

            {/* Main Scroll Container */}
            <div className="h-full w-full overflow-y-auto snap-y snap-mandatory scroll-smooth">
                {slides.map((slide, idx) => (
                    <section
                        key={slide.id}
                        id={slide.id}
                        ref={(el) => { observerRefs.current[idx] = el; }}
                        className="h-screen w-full snap-start relative"
                    >
                        {slide.component}
                    </section>
                ))}
            </div>
        </div>
    );
}
