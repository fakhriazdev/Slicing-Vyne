"use client"

import * as React from "react"
import Image from "next/image"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export interface ProjectCampaign {
    name: string
    logo: string
}

export const clients: ProjectCampaign[] = [
    { name: "CELCIUS X FANTA", logo: "/campaignAndProject/celcius-x-fanta.png" },
    { name: "MISSISSIPPI X WULAN GURITNO", logo: "/campaignAndProject/mississippi-x-wulan-guritno.png" },
    { name: "CELCIUS - SPORT INSPIRED", logo: "/campaignAndProject/celcius-sport_inspired.png" },
    { name: "QUEENSLAND", logo: "/campaignAndProject/queensland.png" },
]

export function CampaignProject() {
    return (
        <section className="w-full pt-16 pb-8 md:pt-16 md:pb-16 bg-white">
            {/* Header: Dibuat lebih padat dan proporsional */}
            <div className="px-6 md:px-20 mb-12 md:mb-20 flex flex-col items-center text-center">
                <p className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-primary/60 mb-4 md:mb-6">
                    CAMPAIGN PROJECT
                </p>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter text-primary max-w-[900px] leading-[0.95]">
                    IDEA CRAFTED INTO MEANINGFUL STORIES
                </h2>
            </div>

            {/* ScrollArea: Menghilangkan scrollbar visual tanpa menghilangkan fungsi scroll */}
            <ScrollArea className="w-full" type="scroll">
                {/* - Gap dikurangi sedikit agar flow antar gambar lebih enak (gap-8 md:gap-12)
                   - Padding kanan pada container dalam ditingkatkan agar kartu terakhir tidak mepet
                */}
                <div className="flex gap-8 md:gap-10 px-6 md:px-20 pb-10">
                    {clients.map((client, index) => (
                        <figure
                            key={index}
                            /* Lebar disesuaikan agar pada layar standar kartu berikutnya
                               terlihat 'mengintip' (peek) sebagai affordance scroll.
                            */
                            className="flex flex-col shrink-0 w-[85vw] md:w-[450px] lg:w-[500px] group"
                        >
                            {/* Frame Gambar: Menggunakan aspect ratio 6/7 sesuai keinginan Anda */}
                            <div className="relative aspect-[6/7] w-full overflow-hidden rounded-sm bg-gray-100">
                                <Image
                                    src={client.logo}
                                    alt={client.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* Judul Project: Dibuat lebih elegan */}
                            <div className="mt-6 flex flex-col items-start">
                                <figcaption className="text-primary font-bold text-lg md:text-xl uppercase tracking-widest leading-none">
                                    {client.name}
                                </figcaption>
                                {/* Garis dekoratif opsional untuk memperkuat kesan editorial */}
                                <div className="h-[2px] w-0 bg-primary mt-2 transition-all duration-500 group-hover:w-full" />
                            </div>
                        </figure>
                    ))}
                    {/* Spacer agar padding kanan konsisten saat scroll mentok */}
                    <div className="shrink-0 w-6 md:w-20" />
                </div>

                <ScrollBar orientation="horizontal" className="hidden" />
            </ScrollArea>
        </section>
    )
}