"use client";

import { SiJavascript, SiTypescript, SiReact, SiCss3, SiDocker, SiNodedotjs, SiGit, SiRedux, SiPython, SiHtml5, SiNextdotjs } from "react-icons/si";

export function AboutSection() {
    const techStack = [
        { name: "Javascript", icon: <SiJavascript size={18} /> },
        { name: "TypeScript", icon: <SiTypescript size={18} /> },
        { name: "React js", icon: <SiReact size={18} /> },
        { name: "CSS3", icon: <SiCss3 size={18} /> },
        { name: "Docker", icon: <SiDocker size={18} /> },
        { name: "Node js", icon: <SiNodedotjs size={18} /> },
        { name: "Git", icon: <SiGit size={18} /> },
        { name: "Redux", icon: <SiRedux size={18} /> },
        { name: "Python", icon: <SiPython size={18} /> },
        { name: "Html5", icon: <SiHtml5 size={18} /> },
        { name: "Next js", icon: <SiNextdotjs size={18} /> }
    ];

    const stats = [git st
        { label: "Clients", value: "03" },
        { label: "Papers", value: "00" },
        { label: "Conferences", value: "00" },
    ];

    return (
        <div className="min-h-screen w-full p-8 md:p-24 flex flex-col justify-center bg-[var(--background)]">
            <h2 className="text-4xl font-bold mb-12 self-center text-[var(--foreground)]"><span className="opacity-70">02.</span> Fullstack & ML Engineer</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-auto md:h-[60vh]">

                {/* Box 1: Location/Bio */}
                <div className="bg-[var(--card-bg)] border border-[var(--border)] p-6 rounded-2xl md:col-span-2 flex flex-col justify-between hover:border-[var(--muted)] transition-colors">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-[var(--foreground)]">Seoul Based.</h3>
                        <p className="text-[var(--foreground)] opacity-95 text-lg leading-relaxed">
                            I specialize in building scalable web applications and deploying machine learning models. Merging the gap between research and production.
                        </p>
                    </div>
                    <div className="flex gap-4 mt-8 items-center justify-center content-center">
                        <div className="px-4 py-2  bg-green-500 dark:bg-[var(--background)] rounded-full border border-[var(--border)]  text-sm dark:text-green-500 text-white font-bold">
                            ● OPEN TO WORK
                        </div>
                    </div>
                </div>

                {/* Box 2: Stats */}
                <div className=" md:col-span-2 grid grid-cols-2 gap-4 hover:border-[var(--muted)] transition-colors">

                    {stats.map((stat) => (
                        <div key={stat.label} className="bg-[var(--card-bg)] border border-[var(--border)] rounded-2xl md:col-span-1 p-4 grid grid-cols-2 gap-2 place-items-center hover:border-[var(--muted)] transition-colors">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-[var(--foreground)] mb-2">{stat.value}</div>
                                <div className="text-sm opacity-95 uppercase tracking-widest text-[var(--foreground)]">{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Box 3: Tech Stack */}
                <div className="bg-[var(--card-bg)] border border-[var(--border)] p-6 rounded-2xl md:col-span-4 flex flex-col justify-center hover:border-[var(--muted)] transition-colors">
                    <span className="opacity-95 text-sm uppercase tracking-wider mb-6 text-[var(--foreground)]">Tech Stack</span>
                    <div className="flex flex-wrap gap-3">
                        {techStack.map((tech) => (
                            <span key={tech.name} className="px-4 py-2 bg-[var(--secondary-background)] text-[var(--foreground)] rounded-lg text-sm border border-[var(--border)] hover:bg-[var(--muted)] transition-colors flex items-center gap-2">
                                {tech.icon} {tech.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
