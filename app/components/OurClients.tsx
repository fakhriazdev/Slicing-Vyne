"use client"

import * as React from "react"
import Image from "next/image"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import {cn} from "@/lib/utils";

export interface Client {
    name: string
    logo: string
    desc: string
}

export const clients: Client[] = [
    { name: "Celcius", logo: "/clients/CELCIUS.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit viverra augue in pretium." },
    { name: "Celcius Woman", logo: "/clients/CELCIUS_WOMAN.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit viverra augue in pretium." },
    { name: "MOSTFLY", logo: "/clients/MOSTFLY.png", desc: "Maecenas malesuada odio non sem pharetra, quis aliquam elit vehicula. Pellentesque blandit viverra augue." },
    { name: "Field of Paradise", logo: "/clients/FIELD_OF_PARADISE.png", desc: "Consectetur adipiscing elit. Pellentesque blandit viverra augue in pretium. Maecenas malesuada odio non." },
]

export function OurClients() {
    return (
        <section className="w-full pt-8 md:pt-16 pl-2 lg:pl-6 xl:pl-16 dark:bg-[#272524] transition-colors duration-800 ease-in-out">
            <ScrollArea className="w-full" type="always">
                <div className="flex px-4 md:px-10 pb-10 gap-14 lg:pb-14 xl:gap-52">
                    {clients.map((client, index) => (
                        <figure
                            key={index}
                            className="flex flex-col shrink-0 w-[180px] md:w-[200px] xl:w-[240px] 2xl:w-[263px] group"
                        >
                            {/* LOGO CONTAINER - Rasio diubah menjadi 1:1 (Square) */}
                            <div className={cn(
                                "relative aspect-square w-full mb-6 flex items-center justify-start transition-all duration-800",
                                "grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100", // Efek hover
                                "dark:invert dark:brightness-200" // MEMBUAT PUTIH DI DARK MODE
                            )}>
                                <Image
                                    src={client.logo}
                                    alt={`Logo ${client.name}`}
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>

                            {/* TEXT CONTENT */}
                            <div className="flex flex-col gap-2 transition-all duration-800">
                                <figcaption className="text-primary dark:text-white font-bold text-sm 2xl:text-2xl uppercase tracking-wider">
                                    {client.name}
                                </figcaption>
                                <p className="text-primary/70 dark:text-white text-lg 2xl:text-lg leading-relaxed whitespace-normal break-words">
                                    {client.desc}
                                </p>
                            </div>
                        </figure>
                    ))}
                </div>
                <ScrollBar orientation="horizontal" className="bg-primary/5 h-1.5 mx-6 md:mx-20" />
            </ScrollArea>
        </section>
    )
}