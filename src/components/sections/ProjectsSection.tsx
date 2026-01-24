"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Network, Brain, ArrowRight, Music, Smartphone, Code, Map } from "lucide-react";
import { useCallback } from "react";

export function ProjectsSection() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        skipSnaps: false,
        dragFree: true,
    });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const projects = [
        {
            title: "Multimodal Crisis Analysis",
            description: "End-to-end AI system extracting disaster intelligence from social media using Differential Attention and Feature Fusion.",
            icon: <Map className="text-[var(--foreground)] opacity-95 group-hover:opacity-100 transition-colors duration-500" size={64} />,
            cta: "VIEW PROJECT",
            link: "#"
        },
        {
            title: "SpottyTunes",
            description: "Modern music streaming app using Spotify API & MockAPI for personalized playlists.",
            icon: <Music className="text-[var(--foreground)] opacity-95 group-hover:opacity-100 transition-colors duration-500" size={64} />,
            cta: "VIEW REPOSITORY",
            link: "https://github.com/karon16/spotty-tunes-webapp"
        },
        {
            title: "Jikjjang",
            description: "Flutter mobile app connecting job-seeking foreigners in Korea with AI-driven career guidance.",
            icon: <Smartphone className="text-[var(--foreground)] opacity-95 group-hover:opacity-100 transition-colors duration-500" size={64} />,
            cta: "VIEW REPOSITORY",
            link: "https://github.com/karon16/jikjjang"
        },
        {
            title: "AI Genkit Evaluator",
            description: "Educational code evaluation system leveraging Firebase Genkit and Google AI.",
            icon: <Code className="text-[var(--foreground)] opacity-95 group-hover:opacity-100 transition-colors duration-500" size={64} />,
            cta: "VIEW PROJECT",
            link: "#"
        }
    ];

    return (
        <div className="min-h-screen w-full p-8 md:p-24 bg-[var(--background)] flex flex-col justify-center relative">
            <h2 className="text-4xl font-bold mb-12 text-[var(--foreground)] self-center"><span className="opacity-70">03.</span> Projects</h2>

            {/* Embla Carousel Viewport */}
            <div className="overflow-hidden cursor-grab active:cursor-grabbing w-full" ref={emblaRef}>
                {/* Embla Container */}
                <div className="flex touch-pan-y -ml-6">
                    {projects.map((project, idx) => (
                        <div key={idx} className="flex-[0_0_85%] md:flex-[0_0_50%] min-w-0 pl-6">
                            <a
                                href={project.link}
                                target={project.link !== "#" ? "_blank" : "_self"}
                                rel="noopener noreferrer"
                                className="block h-full bg-[var(--card-bg)] border border-[var(--border)] rounded-2xl overflow-hidden group transition-all hover:border-[var(--muted)]"
                            >
                                <div className="h-48 bg-[var(--background)] relative border-b border-[var(--border)] flex items-center justify-center">
                                    {project.icon}
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2 text-[var(--foreground)]">{project.title}</h3>
                                    <p className="opacity-95 mb-6 text-sm line-clamp-2 text-[var(--foreground)]">{project.description}</p>
                                    <div className="flex items-center gap-2 text-sm hover:opacity-100 opacity-95 text-[var(--foreground)] transition-colors">
                                        {project.cta} <ArrowRight size={16} />
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Arrows */}
            <div className="hidden md:flex gap-4 mt-8 justify-end self-center">
                <button
                    onClick={scrollPrev}
                    className="p-3 rounded-full border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors"
                    aria-label="Previous project"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={scrollNext}
                    className="p-3 rounded-full border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors"
                    aria-label="Next project"
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>
    )
}
