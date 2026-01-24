"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";

interface ToastProps {
    message: string | null;
    type: "success" | "error" | null;
    onClose: () => void;
}

export default function Toast({ message, type, onClose }: ToastProps) {
    return (
        <AnimatePresence>
            {message && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-6 py-4 rounded-full shadow-2xl bg-[var(--card-bg)] border border-[var(--border)] backdrop-blur-md"
                >
                    {type === "success" ? (
                        <CheckCircle className="text-green-500" size={20} />
                    ) : (
                        <XCircle className="text-red-500" size={20} />
                    )}
                    <span className="text-[var(--foreground)] font-medium text-sm">{message}</span>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
