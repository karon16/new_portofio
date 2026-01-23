"use client";

import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
    const [formState, setFormState] = useState({ email: "", inquiry: "" });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Thank you for your inquiry! (Demo Only)");
    };

    return (
        <div className="h-full w-full p-8 md:p-24 bg-[var(--background)] flex flex-col justify-center items-center">
            <h2 className="text-4xl font-bold mb-12 text-[var(--foreground)]"><span className="opacity-50">04.</span> Let&apos;s Work Together</h2>

            <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div className="flex flex-col content-left justify-center space-y-8">
                    <p className="text-xl opacity-70 leading-relaxed text-left text-[var(--foreground)]">
                        Interested in collaboration or have a question? Reach out to me directly.
                    </p>
                    <div className="flex flex-col gap-4">
                        <a href="mailto:christopherbuhendwa2000@gmail.com" className="flex items-center gap-4 opacity-70 hover:opacity-100 transition-colors text-lg text-[var(--foreground)]">
                            <Mail /> christopherbuhendwa2000@gmail.com
                        </a>
                        <a href="https://www.linkedin.com/in/christopher-buhendwa-1b7851149/" className="flex items-center gap-4 opacity-70 hover:opacity-100 transition-colors text-lg text-[var(--foreground)]">
                            <Linkedin /> LinkedIn Profile
                        </a>
                        <a href="https://github.com/karon16" className="flex items-center gap-4 opacity-70 hover:opacity-100 transition-colors text-lg text-[var(--foreground)]">
                            <Github /> GitHub Profile
                        </a>
                    </div>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 bg-[var(--card-bg)] p-8 rounded-2xl border border-[var(--border)]">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm opacity-50 uppercase text-[var(--foreground)]">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            required
                            className="bg-[var(--background)] border border-[var(--border)] rounded-lg p-3 text-[var(--foreground)] focus:outline-none focus:border-[var(--muted)] transition-colors"
                            placeholder="john@example.com"
                            value={formState.email}
                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <textarea
                            id="inquiry"
                            required
                            rows={4}
                            className="bg-[var(--background)] border border-[var(--border)] rounded-lg p-3 text-[var(--foreground)] focus:outline-none focus:border-[var(--muted)] transition-colors resize-none"
                            placeholder="How can I help you?"
                            value={formState.inquiry}
                            onChange={(e) => setFormState({ ...formState, inquiry: e.target.value })}
                        />
                    </div>
                    <button type="submit" className="mt-2 py-3 bg-[var(--foreground)] text-[var(--background)] font-bold rounded-lg hover:opacity-80 transition-colors flex items-center justify-center gap-2">
                        Send Inquiry <Send size={18} />
                    </button>
                </form>
            </div>
        </div>
    );
}
