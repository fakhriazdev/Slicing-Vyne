"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as React from "react";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import {cn} from "@/lib/utils";

export default function SecondHero() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const titleRef = useRef<HTMLDivElement | null>(null);
    const mediaWrapRef = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const section = sectionRef.current;
        const title = titleRef.current;
        const media = mediaWrapRef.current;
        if (!section || !title || !media) return;

        const mm = gsap.matchMedia();

        // 1. THEME CHANGER (Berlaku untuk SEMUA Viewport)
        ScrollTrigger.create({
            trigger: section,
            start: "top top+=330", // Disesuaikan kembali agar lebih sensitif
            end: "bottom bottom-=480",
            onEnter: () => document.documentElement.classList.add("dark"),
            onEnterBack: () => document.documentElement.classList.add("dark"),
            onLeave: () => document.documentElement.classList.remove("dark"),
            onLeaveBack: () => document.documentElement.classList.remove("dark"),
        });

        // 2. PINNING (Hanya untuk Desktop >= 768px)
        mm.add("(min-width: 768px)", () => {
            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                end: () => `+=${media.offsetHeight - title.offsetHeight}`,
                pin: title,
                pinSpacing: false,
                anticipatePin: 1,
            });
        });

        return () => {
            // Membersihkan semua trigger saat komponen unmount
            ScrollTrigger.getAll().forEach(t => t.kill());
            mm.revert();
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            /* PENTING: Pastikan bg awal (light mode) didefinisikan.
               Gunakan 'transition-colors' agar perubahan ke dark mode mulus.
            */
            className="relative w-full overflow-hidden dark:bg-[#272524] transition-colors duration-800 ease-in-out"
        >
            <div className="mx-auto w-full px-6 md:px-10 lg:px-13 xl:px-auto py-12 md:py-24">
                <div className="relative flex flex-col-reverse md:flex-row items-start justify-between gap-10 md:gap-6 lg:gap-12">

                    {/* TITLE WRAPPER */}
                    <div
                        ref={titleRef}
                        // Tambahkan text color untuk dark mode agar tidak hilang
                        className="z-10 flex w-full flex-col items-start lowercase text-primary md:w-1/2 lg:w-auto"
                    >
                        <h2 className={cn(
                            "leading-[0.7] text-4xl md:text-5xl xl:text-[90px] 2xl:text-[107px] uppercase font-bold md:max-w-[300px] lg:max-w-[550px] mb-20",
                            "text-black dark:text-white", // Pastikan warna light-nya didefinisikan eksplisit
                            "transition-colors duration-800 ease-in-out" // Tambahkan ini agar smooth
                        )}>
                            We don’t just produce content we build experiences
                        </h2>
                        <div className="flex flex-col gap-4 transition-colors duration-800 ease-in-out">
                            <p className="uppercase text-lg dark:text-white lg:text-xl font-medium flex items-baseline tracking-widest xl:mb-16">
                                CREATIVE VISUAL PRODUCTION
                                <span className="text-[0.8em] leading-none relative -top-[0.5em]">
                                    ®
                                </span>
                            </p>
                            <Link
                                href="#"
                                className="group inline-flex flex-col w-fit text-lg lg:text-xl cursor-pointer hover:opacity-70 transition-colors duration-800 ease-in-out"
                            >
                                <span className="inline-flex dark:text-white items-center gap-1 uppercase tracking-widest font-medium">
                                    See More
                                    <ArrowDownRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                                </span>
                                <div className="h-[2px] w-0 bg-current mt-1 transition-all duration-500 group-hover:w-full" />
                            </Link>
                        </div>
                    </div>

                    {/* VIDEO WRAPPER */}
                    <div
                        ref={mediaWrapRef}
                        className="w-full md:w-[50%] lg:w-[55%] xl:w-[50%] flex-shrink-0 self-start"
                    >
                        <div className="relative aspect-[4/5] h-[55vh] lg:h-[50vh] xl:h-[120vh] 2xl:h-[140vh] w-full overflow-hidden rounded shadow-2xl">
                            <video
                                className="h-full w-full object-cover"
                                src="/intro.mp4"
                                muted
                                playsInline
                                autoPlay
                                loop
                                preload="metadata"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}