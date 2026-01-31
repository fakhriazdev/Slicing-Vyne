"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as React from "react";
import Link from "next/link";
import {ArrowDownRight} from "lucide-react";

export default function SecondHero() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const titleRef = useRef<HTMLDivElement | null>(null);
    const mediaWrapRef = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const getNavHeight = () => {
            const nav = document.querySelector("header");
            return nav?.offsetHeight ?? 0;
        };

        const mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
            const section = sectionRef.current;
            const title = titleRef.current;
            const media = mediaWrapRef.current;
            if (!section || !title || !media) return;

            ScrollTrigger.create({
                trigger: section,
                // PIN DIMULAI: Saat section menyentuh bagian atas (plus offset navbar)
                start: "top top",

                // PIN SELESAI: Saat dasar video sejajar dengan dasar title
                // Jaraknya adalah: (Tinggi total video wrapper) - (Tinggi title)
                end: () => `+=${media.offsetHeight - title.offsetHeight}`,

                pin: title,
                pinSpacing: false, // Menghindari gap aneh di bawah title
                anticipatePin: 1,
                invalidateOnRefresh: true,
            });
        });

        return () => mm.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full overflow-hidden bg-[#D9D9D9]"
        >
            <div className="mx-auto w-full px-6 md:px-10 lg:px-20 py-12 md:py-24">
                <div className="relative flex flex-col-reverse md:flex-row items-start justify-between gap-10 md:gap-6 lg:gap-12">

                    {/* TITLE WRAPPER */}
                    <div
                        ref={titleRef}
                        className="z-10 flex w-full flex-col items-start lowercase text-primary md:w-1/2 lg:w-auto"
                    >

                        <h2 className="leading-[0.85] text-4xl md:text-5xl xl:text-[90px] uppercase font-bold mb-10 md:max-w-[300px] lg:max-w-[450px]">
                            We don’t just produce content we build experiences
                        </h2>
                        <div className="flex flex-col gap-4">
                            <p className="uppercase text-lg lg:text-xl font-medium flex items-baseline tracking-widest">
                                CREATIVE VISUAL PRODUCTION
                                <span className="text-[0.8em] leading-none relative -top-[0.5em]">
                                    ®
                                </span>
                            </p>
                            <Link
                                href="#"
                                className="group inline-flex flex-col w-fit text-lg lg:text-xl cursor-pointer hover:opacity-70 transition-opacity"
                            >
                                {/* Menggunakan items-center agar icon dan teks sejajar secara vertikal di tengah */}
                                <span className="inline-flex items-center gap-1 uppercase tracking-widest font-medium">
                                    See More
                                    <ArrowDownRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                                </span>

                                {/* Garis tetap mengikuti panjang teks + icon */}
                                <div className="h-[2px] w-0 bg-primary mt-1 transition-all duration-500 group-hover:w-full" />
                            </Link>
                        </div>
                    </div>

                    {/* VIDEO WRAPPER */}
                    <div
                        ref={mediaWrapRef}
                        className="w-full md:w-[50%] xl:w-[50%] lg:w-auto flex-shrink-0 self-start"
                    >
                        {/* Tablet Fix:
                            - md:h-[70vh] (lebih pendek di tablet agar tidak menutupi seluruh layar)
                            - lg:h-[100vh] (kembali ke tinggi penuh di desktop)
                        */}
                        <div className="relative aspect-[4/5] h-[55vh] xl:h-[100vh] w-full overflow-hidden rounded shadow-2xl">
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