import { cn } from "@/lib/utils";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {ArrowDownRight} from "lucide-react";

const items = [
    {
        image: "/3d-concept/concept1.png",
        title: "CELCIUS SPORTS INSPIRED VOL.1",
        desc: "concept shot taken from the changing room for sports athletes",
    },
    {
        image: "/3d-concept/concept2.png",
        title: "CONTENT PRODUCTION",
        desc: "Professional content production aligned with corporate standards and communication needs. Emphasizing quality, message consistency, and effective distribution.",
    },
    {
        image: "/3d-concept/concept2.png",
        title: "BRANDING & DESIGN",
        desc: "Development of visual identity and design systems to strengthen corporate image. Supporting both internal and external communication requirements.",
    },
];


export default function Concept3D() {
    return (
        <section className="relative w-full overflow-hidden uppercase">
            <div className="mx-auto w-full px-4 md:px-12 py-7 md:py-14 xl:px-20">
                <div className="text-start">
                    <h2 className="text-3xl md:text-4xl xl:text-5xl font-medium uppercase tracking-wide text-primary max-w-[900px] leading-[0.95] mb-4">
                        3D CONCEPT
                    </h2>
                    <p className="text-sm md:text-base xl:text-lg mb-10 md:mb-16 max-w-[723px]">
                        We create detailed 3D assets and immersive environments from concept to final render — perfect for product visuals, animation, and realistic world-building.
                    </p>
                </div>

                <div className="mb-20">
                    {items.map((it, i) => {
                        return (
                            <div
                                key={i}
                                className={cn(
                                    "flex flex-col md:flex-row gap-8 xl:gap-12 border-b py-12 xl:py-18 border-black items-start md:items-stretch",
                                    i === 0 && "border-t"
                                )}
                            >
                                {/* LEFT SIDE: Gambar */}
                                {/* LEFT SIDE: Gambar */}
                                <div className="w-full md:shrink-0 md:w-[240px] xl:w-[450px]">
                                    <div className="relative aspect-[14/9] w-full overflow-hidden bg-gray-200 rounded-sm">
                                        {it.image ? (
                                            <Image
                                                src={it.image}
                                                alt={it.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 240px, 450px"
                                                className="object-cover"
                                            />
                                        ) : (
                                            <div className="flex h-full w-full items-center justify-center text-xs">IMAGE</div>
                                        )}
                                    </div>
                                </div>

                                {/* RIGHT SIDE */}
                                <div className="flex flex-col justify-between py-1 min-w-0 flex-1">
                                    <h3 className="text-primary text-3xl md:text-2xl xl:text-4xl font-semibold leading-10 tracking-tighter mb-6 xl:mb-0 max-w-[1047px]">
                                        {it.desc}
                                    </h3>

                                    <div className="flex justify-between">
                                        <p className="text-primary text-left text-xs xl:text-base leading-relaxed tracking-widest max-w-[500px]">
                                            {it.title}
                                        </p>
                                        <Link
                                            href="#"
                                            className="group inline-flex flex-col w-fit text-xs  xl:text-base cursor-pointer hover:opacity-70 transition-opacity"
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
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}