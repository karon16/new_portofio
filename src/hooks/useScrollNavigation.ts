"use client";

import { useEffect, useState, useCallback } from "react";

export function useScrollNavigation(totalSections: number, debounceMs: number = 500) {
    const [activeSection, setActiveSection] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);

    const handleWheel = useCallback(
        (e: WheelEvent) => {
            e.preventDefault();

            if (isScrolling) return;

            if (e.deltaY > 0) {
                // Scroll Down
                if (activeSection < totalSections - 1) {
                    setIsScrolling(true);
                    setActiveSection((prev) => prev + 1);
                }
            } else if (e.deltaY < 0) {
                // Scroll Up
                if (activeSection > 0) {
                    setIsScrolling(true);
                    setActiveSection((prev) => prev - 1);
                }
            }
        },
        [activeSection, totalSections, isScrolling]
    );

    useEffect(() => {
        window.addEventListener("wheel", handleWheel, { passive: false });
        return () => window.removeEventListener("wheel", handleWheel);
    }, [handleWheel]);

    // Debounce reset
    useEffect(() => {
        if (isScrolling) {
            const timeout = setTimeout(() => {
                setIsScrolling(false);
            }, debounceMs);
            return () => clearTimeout(timeout);
        }
    }, [isScrolling, debounceMs]);

    return { activeSection, setActiveSection };
}
