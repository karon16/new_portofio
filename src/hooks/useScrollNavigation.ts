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
            // Remove preventDefault() to allow normal interactions inside scrollable containers if needed,
            // but for full-page snap, we usually want to prevent default. 
            // We'll keep it simple: if it's a wheel event on the container, we hijack it.
            // e.preventDefault(); 
            // NOTE: Preventing default on wheel is aggressive. 
            // We usually attach this to the window or a specific container.

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
        // We only attach wheel listener to window for desktop snapping behavior
        // logic should be handled in the component deciding WHETHER to attach it.
        // For now, we will leave it attached, but ideally, we conditionally attach it.
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
