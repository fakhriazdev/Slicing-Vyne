import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
    className?: string;
    size?: number;
    variant?: "white" | "black";
};

export default function Logo({
                                 className,
                                 size = 80,
                                 variant = "black"
                             }: LogoProps) {
    // Filter untuk setiap varian warna
    const getFilterStyle = () => {
        switch (variant) {
            case "white":
                return "brightness(0) invert(1)";
            case "black":
            default:
                return "brightness(0) saturate(100%)";
        }
    };

    return (
        <Image
            src="/header-logo.png"
            alt="Logo"
            width={size}
            height={(size * 27.7) / 208.3}
            className={cn(
                "inline-block transition-all duration-300",
                className
            )}
            style={{
                filter: getFilterStyle()
            }}
        />
    );
}