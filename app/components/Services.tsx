import { cn } from "@/lib/utils";

const items = [
    {
        title: "STRATEGY & PLANNING",
        desc: "Structured communication and marketing strategy development to support business objectives. This includes market analysis, campaign planning, and ongoing performance measurement.",
    },
    {
        title: "CONTENT PRODUCTION",
        desc: "Professional content production aligned with corporate standards and communication needs. Emphasizing quality, message consistency, and effective distribution.",
    },
    {
        title: "BRANDING & DESIGN",
        desc: "Development of visual identity and design systems to strengthen corporate image. Supporting both internal and external communication requirements.",
    },
];

export default function Services() {
    return (
        <section className="relative w-full overflow-hidden uppercase dark:bg-[#272524] transition-colors duration-800 ease-in-out">
            <div className="mx-auto w-full px-5 md:px-18 xl:px-40">
                <div className="mb-20">
                    {items.map((it, i) => {
                        const reverse = i % 2 === 1;
                        const num = String(i + 1).padStart(2, "0");

                        return (
                            <div
                                key={i}
                                className={cn(
                                    "grid gap-4 xl:gap-8 border-b py-10 md:py-15 xl:py-20 border-black sm:grid-cols-2 sm:items-start",
                                    i === 0 && "border-t"
                                )}
                            >
                                {/* LEFT */}
                                <div
                                    className={cn(
                                        "relative flex flex-col items-start text-left pt-7",
                                        reverse ? "sm:order-2" : "sm:order-1"
                                    )}
                                >
                                    {/* number nempel di atas title */}
                                    <p className="absolute text-primary dark:text-white transition-colors duration-800 ease-in-out left-0 top-0 text-lg lg:text-xl 2xl:text-2xl font-semibold">
                                        {num}
                                    </p>

                                    <p className="m-0 p-0 text-primary dark:text-white transition-colors duration-800 ease-in-out text-3xl md:text-[28px] xl:text-5xl 2xl:text-[64px] font-semibold leading-tight tracking-tighter whitespace-nowrap">
                                        {it.title}
                                    </p>
                                </div>

                                {/* RIGHT (desc sejajar dengan title di sm+) */}
                                <p
                                    className={cn(
                                        "text-primary dark:text-white text-left text-base xl:text-lg 2xl:text-xl leading-relaxed sm:pt-7",
                                        reverse ? "sm:order-1" : "sm:order-2"
                                    )}
                                >
                                    {it.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
