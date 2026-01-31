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
        <section className="relative w-full overflow-hidden uppercase">
            <div className="mx-auto w-full px-4 md:px-18 xl:px-40">
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
                                    <p className="absolute left-0 top-0 text-lg lg:text-xl font-semibold">
                                        {num}
                                    </p>

                                    <p className="text-primary text-3xl md:text-[28px] xl:text-5xl font-semibold leading-tight tracking-tighter whitespace-nowrap">
                                        {it.title}
                                    </p>
                                </div>

                                {/* RIGHT (desc sejajar dengan title di sm+) */}
                                <p
                                    className={cn(
                                        "text-primary text-left text-base xl:text-lg leading-relaxed sm:pt-7",
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
