"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import Logo from "@/components/Logo";
import {ArrowDownRight} from "lucide-react";

type NavItem = { label: string; href: string };

const NAV: NavItem[] = [{ label: "See our masterpieces", href: "/" }];

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);
    const [visible, setVisible] = React.useState(true);
    const [lastScrollY, setLastScrollY] = React.useState(0);
    const [onHero, setOnHero] = React.useState(true);

    React.useEffect(() => {
        const el = document.getElementById("hero");
        if (!el) return;

        const obs = new IntersectionObserver(([entry]) => setOnHero(entry.isIntersecting), {
            threshold: 0.1,
        });

        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    React.useEffect(() => {
        const onScroll = () => {
            const current = window.scrollY;

            setScrolled(current > 8);

            if (current > lastScrollY && current > 100) setVisible(false);
            else if (current < lastScrollY) setVisible(true);

            setLastScrollY(current);
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [lastScrollY]);

    React.useEffect(() => {
        setOpen(false);
    }, [pathname]);

    const dotColor = onHero ? "bg-white" : "bg-gray-900";

    return (
        <header
            className={cn(
                "fixed inset-x-0 top-0 z-50 w-full",
                "transition-all duration-300",
                onHero ? "bg-transparent" : scrolled ? "bg-white/60 backdrop-blur-sm" : "bg-transparent",
                visible ? "translate-y-0" : "-translate-y-full"
            )}
        >
            {/* ✅ w-full (no max-w) */}
            <div className="w-full">
                <div className="relative flex h-20 md:h-24 lg:h-28 w-full items-center px-6 md:px-10 lg:px-20">
                    {/* LEFT (w-full column) */}
                    <div className="flex w-full basis-1/3 items-center justify-start">
                        <Sheet open={open} onOpenChange={setOpen}>
                            <SheetTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    aria-label="Open menu"
                                    className={cn(
                                        "h-12 w-12 rounded-full p-0",
                                        onHero ? "hover:bg-white/10" : "hover:bg-black/5"
                                    )}
                                >
                                    <div className="group inline-flex items-center justify-center gap-1">
                    <span
                        className={cn(
                            "h-1.5 w-1.5 rounded-full transition-transform duration-300 ease-out group-hover:-translate-x-0.5",
                            dotColor
                        )}
                    />
                                        <span
                                            className={cn(
                                                "h-1.5 w-1.5 rounded-full transition-transform duration-300 ease-out",
                                                dotColor
                                            )}
                                        />
                                        <span
                                            className={cn(
                                                "h-1.5 w-1.5 rounded-full transition-transform duration-300 ease-out group-hover:translate-x-0.5",
                                                dotColor
                                            )}
                                        />
                                    </div>
                                </Button>
                            </SheetTrigger>

                            <SheetContent
                                side="top"
                                className={cn(
                                    "inset-x-0 top-0 h-[100dvh] w-full max-w-none rounded-none p-0",
                                    "!translate-x-0 !translate-y-0",
                                    "data-[state=open]:animate-sheetDown data-[state=closed]:animate-sheetUp"
                                )}
                            >
                                <div className="flex h-full flex-col bg-[#D9D9D9] text-black">
                                    <SheetHeader className="relative border-b border-black/10 px-6 py-6 sm:px-10 sm:py-8 lg:px-20 lg:py-10">
                                        <SheetTitle className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                            <Logo variant="black" size={82} />
                                        </SheetTitle>

                                        <div className="flex items-center justify-end">
                                            <SheetClose asChild>
                                                <button
                                                    className="group flex items-center justify-center bg-transparent text-black outline-none"
                                                    aria-label="Close menu"
                                                >
                                                    <svg
                                                        width="40"
                                                        height="40"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        className="transition-transform duration-300 rotate-45 group-hover:rotate-[225deg]"
                                                        style={{ minWidth: "40px", minHeight: "40px" }}
                                                    >
                                                        <circle cx="12" cy="12" r="10" />
                                                        <line x1="12" y1="8" x2="12" y2="16" />
                                                        <line x1="8" y1="12" x2="16" y2="12" />
                                                    </svg>
                                                </button>
                                            </SheetClose>
                                        </div>
                                    </SheetHeader>

                                    <div className="flex-1 overflow-auto px-6 py-10 sm:px-10 lg:px-20">
                                        <div className="grid gap-3">
                                            {NAV.map((item) => {
                                                const active = pathname === item.href;
                                                return (
                                                    <SheetClose asChild key={item.href}>
                                                        <Link
                                                            href={item.href}
                                                            className={cn(
                                                                "relative block w-full text-black font-semibold uppercase overflow-hidden group", // Tambahkan 'block'
                                                                "text-2xl md:text-4xl px-4 py-3 transition-colors duration-500",
                                                                active && "opacity-100"
                                                            )}
                                                            onClick={() => setOpen(false)}
                                                        >
                                                            {/* Background yang naik dari bawah */}
                                                            <span
                                                                className="absolute inset-x-0 bottom-0 h-0 w-full bg-gray-800 transition-all duration-500 ease-in-out group-hover:h-full"
                                                                style={{ zIndex: 0 }}
                                                            />

                                                            {/* Teks harus di atas background */}
                                                            <span className="relative z-10 transition-colors duration-500 group-hover:text-white pointer-events-none">
        {item.label}
    </span>
                                                        </Link>
                                                    </SheetClose>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    <div className="border-t border-black/10 p-4 text-center text-xs text-black/60">
                                        © {new Date().getFullYear()} Brand
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>

                    {/* CENTER (w-full column) */}
                    <div className="flex w-full basis-1/3 items-center justify-center">
                        <Link href="/" className="flex items-center" aria-label="Brand">
                            <Logo variant={onHero ? "white" : "black"} className="w-24 transition-all duration-300" />
                        </Link>
                    </div>

                    {/* RIGHT (w-full column) */}
                    <nav className="hidden md:flex w-full basis-1/3 items-center justify-end">
                        <div className="flex items-center gap-2 p-1 uppercase font-semibold">
                            {NAV.map((item) => {
                                const active = pathname === item.href;
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={cn(
                                            "group inline-flex flex-col w-fit text-xs md:text-sm lg:text-lg cursor-pointer hover:opacity-70 transition-opacity",
                                            // ✅ Tambahkan kondisi warna teks di sini
                                            onHero ? "text-white" : "text-black"
                                        )}
                                    >
                                    <span className="inline-flex items-center gap-1 uppercase tracking-widest font-medium">
                                        {item.label}
                                        <ArrowDownRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                                    </span>

                                        {/* ✅ Garis bawah juga harus berubah warna agar terlihat */}
                                        <div
                                            className={cn(
                                                "h-[2px] w-0 transition-all duration-500 group-hover:w-full mt-1",
                                                onHero ? "bg-white" : "bg-black"
                                            )}
                                        />
                                    </Link>
                                );
                            })}
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}
