"use client";

import { useEffect, useState, useCallback } from "react";

export function useScrollNavigation(totalSections: number, debounceMs: number = 500) {
    const [activeSection, setActiveSection] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    // Minimum swipe distance (in px) 
    const minSwipeDistance = 50;

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null); // Reset
        setTouchStart(e.targetTouches[0].clientY);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientY);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isDownSwipe = distance > minSwipeDistance;
        const isUpSwipe = distance < -minSwipeDistance;

        if (isScrolling) return;

        // Swipe Up (Go to next section)
        if (isDownSwipe) {
            if (activeSection < totalSections - 1) {
                setIsScrolling(true);
                setActiveSection((prev) => prev + 1);
            }
        }

        // Swipe Down (Go to prev section)
        if (isUpSwipe) {
            if (activeSection > 0) {
                setIsScrolling(true);
                setActiveSection((prev) => prev - 1);
            }
        }
    };

    const handleWheel = useCallback(
        (e: WheelEvent) => {

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

    return {
        activeSection,
        setActiveSection,
        handlers: {
            onTouchStart,
            onTouchMove,
            onTouchEnd
        }
    };
}
