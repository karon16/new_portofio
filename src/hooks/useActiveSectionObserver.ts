"use client";

import { useEffect, useState, useRef } from "react";

export function useActiveSectionObserver(sectionIds: string[]) {
    const [activeSection, setActiveSection] = useState(0);
    const observerRefs = useRef<(HTMLElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = sectionIds.indexOf(entry.target.id);
                        if (index !== -1) {
                            setActiveSection(index);
                        }
                    }
                });
            },
            {
                root: null, // viewport
                rootMargin: "0px",
                threshold: 0.5, // 50% visible triggers active
            }
        );

        observerRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, [sectionIds]);

    return { activeSection, observerRefs };
}
