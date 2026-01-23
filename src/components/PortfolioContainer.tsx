"use client";

import { useRef, useEffect } from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ThemeToggle } from "./ThemeToggle";
import { useScrollNavigation } from "@/hooks/useScrollNavigation";
import { motion, useSpring } from "framer-motion";
import CustomCursor from "./CustomCursor";

const slides = [
    { id: "hero", component: <HeroSection /> },
    { id: "about", component: <AboutSection /> },
    { id: "projects", component: <ProjectsSection /> },
    { id: "contact", component: <ContactSection /> }
];

export default function PortfolioContainer() {
    const { activeSection, setActiveSection } = useScrollNavigation(slides.length);

    return (
        <div className="relative h-full w-full">
            <ThemeToggle />
            <CustomCursor />

            <div className="absolute top-0 left-0 w-full h-1 z-50 bg-neutral-800/20">
                <motion.div
                    className="h-full bg-[var(--foreground)]"
                    initial={{ width: "0%" }}
                    animate={{ width: `${((activeSection + 1) / slides.length) * 100}%` }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                />
            </div>

            <div className="hidden md:flex flex-col gap-4 fixed right-8 top-1/2 -translate-y-1/2 z-40">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveSection(idx)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${activeSection === idx
                            ? "bg-[var(--foreground)] scale-125"
                            : "bg-[var(--foreground)] opacity-30 hover:opacity-60 hover:scale-110"
                            }`}
                        aria-label={`Go to section ${idx + 1}`}
                    />
                ))}
            </div>

            <div
                className="h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
                style={{ transform: `translateY(-${activeSection * 100}%)` }}
            >
                {slides.map((slide) => (
                    <div key={slide.id} className="h-full w-full overflow-hidden relative">
                        {slide.component}
                    </div>
                ))}
            </div>
        </div>
    );
}
