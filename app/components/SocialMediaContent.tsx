"use client"

import * as React from "react"
import Image from "next/image"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import Link from "next/link";
import {ArrowDownRight} from "lucide-react";

export interface ProjectCampaign {
    name: string
    logo: string
    desc: string
}

export const clients: ProjectCampaign[] = [
    { name: "CELCIUS", logo: "/socialMediaContent/celcius.png",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit viverra augue in pretium." },
    { name: "FIELD OF PARADISE", logo: "/socialMediaContent/field-of-paradise.png",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit viverra augue in pretium."  },
    { name: "MOSTFALY", logo: "/socialMediaContent/mostfly.png",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit viverra augue in pretium."  },
]

export function SocialMediaContent() {
    return (
        <section className="w-full bg-[#D9D9D9] py-15 xl-py-20 overflow-hidden mb-15 xl-mb-20">
            <div className="flex flex-col md:flex-row gap-4 xl:gap-8 items-start">

                {/* LEFT SIDE: Content Teks */}
                {/* Kita hapus justify-between agar elemen mengikuti flow alami */}
                <div className="flex flex-col px-5 md:pl-12 xl:pl-20 shrink-0 w-full md:w-[45%] xl:w-[550px] 2xl:w-[600px]">
                    <div className="w-full text-start">
                        <p className="text-xs xl:text-base uppercase tracking-widest text-primary mb-6 whitespace-nowrap">
                            SOCIAL MEDIA & SHORT-FORM CONTENT
                        </p>
                        <h2 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-5xl font-bold uppercase tracking-tighter text-primary leading-[0.9] mb-8">
                            Fast-paced and platform-optimized
                        </h2>
                        <p className="text-base md:text-lg 2xl:text-lg tracking-tight text-primary/80 mb-8 md:mb-35 2xl:mb-36 leading-relaxed">
                            video content designed to boost engagement,
                            visibility, and retention across TikTok, IG,
                            YT Shorts, and more.
                        </p>
                    </div>

                    {/* See More sekarang akan sejajar dengan judul di kanan karena kita mengatur margin-top yang pas */}
                    <Link
                        href="#"
                        className="group inline-flex flex-col w-fit text-base lg:text-lg cursor-pointer hover:opacity-70 transition-opacity"
                    >
                        {/* Menggunakan items-center agar icon dan teks sejajar secara vertikal di tengah */}
                        <span className="inline-flex items-center gap-1 font-medium text-primary">
                                    See More
                                    <ArrowDownRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                                </span>

                        {/* Garis tetap mengikuti panjang teks + icon */}
                        <div className="h-[2px] w-0 bg-primary mt-1 transition-all duration-500 group-hover:w-full" />
                    </Link>
                </div>

                {/* RIGHT SIDE: Scroll Area */}
                <div className="w-full md:flex-1 min-w-0">
                    <ScrollArea className="w-full" type="scroll">
                        <div className="flex gap-4 xl:gap-10 px-6 xl:px-10">
                            {clients.map((client, index) => (
                                <figure
                                    key={index}
                                    className="flex flex-col shrink-0 w-[260px] md:w-[320px] xl:w-[400px] group"
                                >
                                    {/* Image Container */}
                                    <div className="relative aspect-square w-full overflow-hidden rounded shadow-sm bg-white/20">
                                        <Image
                                            src={client.logo}
                                            alt={client.name}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            sizes="(max-w-768px) 260px, 400px"
                                        />
                                    </div>

                                    {/* Caption Container: Jarak mt-5 di sini harus sinkron dengan feel visual See More di kiri */}
                                    <div className="flex flex-col gap-3 mt-5">
                                        <figcaption className="text-primary font-bold text-lg md:text-lg uppercase tracking-wider leading-tight">
                                            {client.name}
                                        </figcaption>
                                        <p className="text-primary/70 text-sm md:text-base tracking-normal leading-relaxed whitespace-normal">
                                            {client.desc}
                                        </p>
                                    </div>
                                </figure>
                            ))}
                        </div>
                        <ScrollBar orientation="horizontal" className="hidden" />
                    </ScrollArea>
                </div>
            </div>
        </section>
    )
}