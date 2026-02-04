import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
    className?: string;
    size?: number;
    variant?: "white" | "black" | "blue" | "black-blue" | "dynamic";
};

export default function Logo({
                                 className,
                                 size = 80,
                                 variant = "black"
                             }: LogoProps) {

    const filterClasses = {
        white: "brightness-0 invert",
        black: "brightness-0 saturate-100",
        blue: "invert-[31%] sepia-[94%] saturate-[2584%] hue-rotate-[191deg] brightness-[91%] contrast-[101%]",

        // SEKARANG: Hitam di Light Mode, Putih di Dark Mode
        "black-blue": "brightness-0 saturate-100 dark:brightness-0 dark:invert",

        // 'dynamic' juga kita buat jadi Putih saat dark mode
        "dynamic": "brightness-0 saturate-100 dark:brightness-0 dark:invert"
    };

    return (
        <Image
            src="/header-logo.png"
            alt="Logo"
            width={size}
            height={(size * 27.7) / 208.3}
            priority
            className={cn(
                "inline-block transition-all duration-300 ease-in-out",
                // Menggunakan as keyof untuk keamanan tipe data
                filterClasses[variant as keyof typeof filterClasses],
                className
            )}
        />
    );
}