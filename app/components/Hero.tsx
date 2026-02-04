"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const SLIDES = [
    {
        id: 1,
        image: "/hero-1.png",
        alt: "Hero 1",
        title: "We turn ideas into visual masterpieces",
        description: "A full-service Creative Visual Production crafting world-class commercials, branded content, and digital experiences that inspire audiences and elevate brands."
    },
    {
        id: 2,
        image: "/hero-2.png",
        alt: "Hero 2",
        title: "We turn ideas into visual masterpieces",
        description: "A full-service Creative Visual Production crafting world-class commercials, branded content, and digital experiences that inspire audiences and elevate brands."
    },
    {
        id: 3,
        image: "/hero-3.png",
        alt: "Hero 3",
        title: "We turn ideas into visual masterpieces",
        description: "A full-service Creative Visual Production crafting world-class commercials, branded content, and digital experiences that inspire audiences and elevate brands."
    },
];

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="hero" className="relative h-screen w-full overflow-hidden bg-black">
            {/* Background Slides */}
            {SLIDES.map((slide, index) => (
                <div
                    key={slide.id}
                    className={cn(
                        "absolute inset-0 transition-opacity duration-1000 ease-in-out",
                        index === currentIndex ? "opacity-100" : "opacity-0"
                    )}
                >
                    <Image
                        className="h-full w-full object-cover"
                        src={slide.image}
                        alt={slide.alt}
                        fill
                        priority={index === 0}
                        quality={100}
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>
            ))}

            {/* Content - Text di kiri */}
            <div className="relative z-10 flex h-full w-full items-center">
                <div className="mx-auto w-full px-8 md:px-10 lg:px-24">
                    <div className="relative h-[300px] w-full max-w-2xl">
                        {/* 👆 h-[300px] mencegah layout melompat saat ganti slide */}
                        {SLIDES.map((slide, index) => (
                            <div
                                key={slide.id}
                                className={cn(
                                    "absolute inset-0 transition-all duration-1000 ease-in-out flex flex-col justify-center",
                                    index === currentIndex
                                        ? "opacity-100 translate-y-0 visible"
                                        : "opacity-0 translate-y-4 invisible"
                                )}
                            >
                                <h1 className="text-3xl font-bold uppercase text-white mb-6 md:text-6xl lg:text-5xl 2xl:text-[60px] leading-tight">
                                    {slide.title}
                                </h1>
                                <p className="text-lg text-white/90 mb-8 md:text-xl 2xl:text-[20px] max-w-xl">
                                    {slide.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Indicators (Tetap Bulat seperti permintaanmu) */}
            <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
                {SLIDES.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={cn(
                            "h-2 rounded-full transition-all duration-500",
                            index === currentIndex
                                ? "w-8 bg-white"
                                : "w-2 bg-white/40 hover:bg-white/70"
                        )}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}