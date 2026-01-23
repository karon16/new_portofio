export interface SectionData {
    id: string;
    title: string;
    content: string;
    bgColor: string;
    textColor: string;
}

export const sections: SectionData[] = [
    {
        id: "intro",
        title: "Welcome",
        content: "Building digital experiences that matter.",
        bgColor: "bg-black",
        textColor: "text-white",
    },
    {
        id: "about",
        title: "About Me",
        content: "I am a passionate developer with a focus on clean code and user experience.",
        bgColor: "bg-zinc-900",
        textColor: "text-zinc-100",
    },
    {
        id: "projects",
        title: "Projects",
        content: "Here are some of the things I've built.",
        bgColor: "bg-neutral-800",
        textColor: "text-neutral-50",
    },
    {
        id: "contact",
        title: "Get in Touch",
        content: "Let's work together.",
        bgColor: "bg-stone-900",
        textColor: "text-stone-50",
    },
];
