import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function IntroSection() {
    return (
        <section className="relative w-full overflow-hidden mb-15">
            <div className="mx-auto w-full px-4 md:px-18 xl:px-40">
                <div className="flex h-full items-start justify-between gap-3 pt-12 md:gap-8 md:pt-12">
                    {/* Text + Button */}
                    <div className="flex w-full md:max-w-[450px] xl:max-w-[650px] flex-col items-start gap-4 lowercase text-primary">
                        <span className="leading-relaxed text-lg md:text-base xl:text-2xl">
                          <b className="uppercase"> VYNE WORKS</b> IS A CREATIVE VISUAL PRODUCTION THAT DELIVERS
                          END-TO-END SOLUTIONS FOR BRANDS AND BUSINESSES. WE HELP BRANDS
                          DISCOVER THEIR TRUE IDENTITY, CRAFT A POWERFUL NARRATIVE, AND
                          TRANSLATE IT INTO CAPTIVATING VISUAL CONTENT.
                        </span>

                        <Button
                            variant="ghost"
                            className="h-auto w-fit rounded-none border-2 border-black px-3 py-2 md:px-6 md:py-4 uppercase"
                        >
                            Start your project
                        </Button>
                    </div>

                    {/* Icon */}
                    <div className="flex-shrink-0 self-start">
                        <Image
                            src="/VYN-introduce.png"
                            alt="VyneWorks"
                            width={208}
                            height={208}
                            className="w-20 md:w-40"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
