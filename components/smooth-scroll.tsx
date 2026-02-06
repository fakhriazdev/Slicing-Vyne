"use client";

import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

export default function SmoothScroll({
                                         children,
                                     }: {
    children: React.ReactNode;
}) {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Kita gunakan dynamic import karena Locomotive Scroll butuh objek 'window'
        // yang hanya ada di sisi client.
        let locomotiveScroll: LocomotiveScroll;

        (async () => {
            try {
                const LocomotiveScroll = (await import("locomotive-scroll")).default;

                // Di v5, inisialisasi jauh lebih sederhana.
                // Properti 'el', 'smooth', dll sudah dihandle otomatis secara native.
                locomotiveScroll = new LocomotiveScroll({
                    lenisOptions: {
                        lerp: 0.1,         // Kehalusan scroll (0.1 - 1)
                        duration: 1.2,      // Durasi scroll
                        smoothWheel: true,
                    },
                });
            } catch (error) {
                console.error("Locomotive Scroll failed to load", error);
            }
        })();

        return () => {
            if (locomotiveScroll) locomotiveScroll.destroy();
        };
    }, []);

    return (
        <div ref={scrollRef} data-scroll-container>
            {children}
        </div>
    );
}