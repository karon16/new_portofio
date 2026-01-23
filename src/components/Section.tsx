"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface SectionProps {
    children: ReactNode;
    className?: string;
    id: string;
}

export function cn(...inputs: (string | undefined | null | false)[]) {
    return twMerge(clsx(inputs));
}

export default function Section({ children, className, id }: SectionProps) {
    return (
        <motion.section
            id={id}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // smooth ease-out
            className={cn(
                "absolute inset-0 flex flex-col items-center justify-center p-8 text-center h-full w-full",
                className
            )}
        >
            {children}
        </motion.section>
    );
}
