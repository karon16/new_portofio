import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
    title: "Christopher Buhendwa | Fullstack & ML Engineer",
    description: "Bridging Model Architecture with User Experience",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&display=swap" rel="stylesheet" />
            </head>
            <body
                className={`antialiased overflow-hidden h-screen w-screen font-doto bg-[var(--background)] text-[var(--foreground)]`}
            >
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
