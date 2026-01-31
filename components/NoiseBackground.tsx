'use client';

import { cn } from "@/lib/utils";

export default function NoiseBackground() {
    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
            <div
                className={cn(
                    "absolute -inset-[100%] w-[300%] h-[300%]",
                    "bg-[url('/noise.png')] bg-repeat bg-[length:200px_200px]",
                    "animate-noise", // Menggunakan variabel --animate-noise dari CSS
                    "opacity-70 mix-blend-multiply"
                )}
            />
        </div>
    );
}