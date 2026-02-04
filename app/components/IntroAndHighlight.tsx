import Image from "next/image";
import { Button } from "@/components/ui/button";
import {ArrowDownRight} from "lucide-react";
import * as React from "react";
import {cn} from "@/lib/utils";

export default function IntroSection() {
    return (
        <section className="relative w-full overflow-hidden mb-15">
            <div className="mx-auto w-full px-5 md:px-18 xl:px-40">
                <div className="flex h-full items-start justify-between gap-3 pt-12 md:gap-8 md:pt-12">
                    {/* Text + Button */}
                    <div className="flex w-full md:max-w-[450px] xl:max-w-[650px] 2xl:max-w-[850px] flex-col items-start gap-4 xl:gap-18 lowercase text-primary">
                        <span className="text-lg md:text-base xl:text-2xl 2xl:text-3xl">
                          <b className="uppercase"> VYNE WORKS</b> IS A CREATIVE VISUAL PRODUCTION THAT DELIVERS
                          END-TO-END SOLUTIONS FOR BRANDS AND BUSINESSES. WE HELP BRANDS
                          DISCOVER THEIR TRUE IDENTITY, CRAFT A POWERFUL NARRATIVE, AND
                          TRANSLATE IT INTO CAPTIVATING VISUAL CONTENT.
                        </span>

                        <button className={cn(
                            "group flex items-center border-2 py-3 px-6 xl:px-8 xl:py-4 uppercase font-medium",
                            // WARNA AWAL (Light Mode)
                            "border-black text-black bg-transparent",
                            // WARNA DARK MODE (Opsional, sesuaikan kebutuhan)
                            "dark:border-white dark:text-white",
                            // HOVER STATE
                            "hover:bg-[#35615C] hover:border-[#35615C] hover:text-white dark:hover:border-[#35615C]",
                            // MAGIC TOUCH: TRANSISI
                            "transition-all duration-500 ease-in-out"
                        )}>
                            <p className="text-base xl:text-lg pr-2">START YOUR PROJECT</p>
                            <ArrowDownRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                        </button>
                    </div>

                    {/* Icon */}
                    <div className="flex-shrink-0 self-start">
                        <Image
                            src="/VYN-introduce.png"
                            alt="VyneWorks"
                            width={208}
                            height={208}
                            className="w-20 md:w-40 2xl:w-60"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
