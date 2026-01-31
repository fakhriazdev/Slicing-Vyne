'use client';

import { ArrowDownRight, Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="relative text-white overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 w-full h-full">
                <Image
                    src="/footer-bg.png"
                    alt="Footer Background"
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="relative z-10">


                {/* CTA Section */}
                <section className="pt-12 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-32 pb-8 sm:pb-10 md:pb-12 lg:pb-16 xl:pb-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-5xl lg:max-w-[91.16rem] mx-auto">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-montserrat font-semibold mb-3 sm:mb-4 md:mb-6">
                                HAVE AN <br/>AWESOME PROJECT?
                            </h2>
                            <p className="text-white/80 text-sm sm:text-base md:text-lg">
                                For New Project, Please Contact Us!
                            </p>
                        </div>
                    </div>
                </section>
                {/* Header Section with Logo and Button */}
                <section className="pt-6 sm:pt-8 md:pt-10 pb-4 sm:pb-4 md:pb-6">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-5xl lg:max-w-[91.16rem] mx-auto">
                            <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-4 md:gap-0">
                                {/* Logo */}
                                <div className="w-full md:w-auto flex justify-center md:justify-start">
                                    <Image
                                        src="/amv-logo-white.png"
                                        alt="ADITYA MANDIRI VISUAL"
                                        width={280}
                                        height={60}
                                        className="object-contain w-[200px] sm:w-[240px] md:w-[280px]"
                                    />
                                </div>
                                {/* Separator Line */}
                                <div className="hidden md:block flex-1 h-px bg-white/20 mx-8"></div>
                                {/* Button */}
                                <button className="bg-transparent text-white px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-none border border-white hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 text-xs sm:text-sm md:text-base font-medium w-full md:w-auto justify-center">
                                    <span>START YOUR PROJECT</span>
                                    <ArrowDownRight size={18} className="sm:w-5 sm:h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Footer Content */}
                <div className="pt-8 md:pt-12 lg:pt-16 pb-8 md:pb-10 lg:pb-12 mb-0">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-5xl lg:max-w-[91.16rem] mx-auto">
                            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-[24%_19%_19%_19%_19%] gap-6 sm:gap-8 md:gap-8 lg:gap-12 mb-8 sm:mb-12 md:mb-16">
                                {/* Column 1 - Newsletter */}
                                <div className="col-span-2 xl:col-span-1">
                                    <h3 className="text-2xl sm:text-3xl md:text-h3 mb-2">
                                        Stay In<br/> <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">THE NOW</span>
                                    </h3>
                                    <form className="mb-3 sm:mb-4">
                                        <div className="relative flex items-end">
                                            <input
                                                type="email"
                                                placeholder="email here"
                                                className="flex-1 bg-transparent border-0 border-b border-white/20 px-0 py-2 sm:py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors text-xs sm:text-sm pr-8 sm:pr-10"
                                            />
                                            <button
                                                type="submit"
                                                className="absolute right-0 bottom-0 bg-transparent text-white hover:opacity-70 transition-opacity flex items-center justify-center pb-2 sm:pb-3"
                                                aria-label="Subscribe"
                                            >
                                                <Image
                                                    src="/images/submit.png"
                                                    alt="Submit"
                                                    width={20}
                                                    height={20}
                                                    className="sm:w-6 sm:h-6 object-contain"
                                                />
                                            </button>
                                        </div>
                                    </form>
                                    <p className="text-white/60 text-xs sm:text-xs md:text-sm">
                                        Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus.
                                    </p>
                                </div>

                                {/* Column 2 - Address */}
                                <div>
                                    <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-2 md:mb-3">Address</h4>
                                    <ul className="space-y-1 text-xs sm:text-sm md:text-base text-white/70">
                                        <li>Jl. Kebayunan No. 23</li>
                                        <li>Kel. Tapos Kec. Tapos</li>
                                        <li>Depok, Indonesia</li>
                                    </ul>
                                </div>

                                {/* Column 3 - Contact Us & Social Media */}
                                <div className="md:-ml-4 lg:-ml-8">
                                    <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-2 md:mb-3">Contact Us</h4>
                                    <ul className="space-y-1 text-xs sm:text-sm md:text-base text-white/70 mb-3 sm:mb-4 md:mb-5">
                                        <li>
                                            <a href="tel:+62xxxxxxxxx" className="hover:text-white transition-colors">
                                                (+62) xxx xxx xxx
                                            </a>
                                        </li>
                                        <li>
                                            <a href="mailto:vyneworks@gmail.com" className="hover:text-white transition-colors">
                                                vyneworks@gmail.com
                                            </a>
                                        </li>
                                    </ul>
                                    <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-2 md:mb-3">Social Media</h4>
                                    <div className="flex gap-3 sm:gap-4">
                                        <a
                                            href="#"
                                            className="text-white/70 hover:text-white transition-colors"
                                            aria-label="Facebook"
                                        >
                                            <Facebook size={18} className="sm:w-5 sm:h-5" />
                                        </a>
                                        <a
                                            href="#"
                                            className="text-white/70 hover:text-white transition-colors"
                                            aria-label="Instagram"
                                        >
                                            <Instagram size={18} className="sm:w-5 sm:h-5" />
                                        </a>
                                        <a
                                            href="#"
                                            className="text-white/70 hover:text-white transition-colors"
                                            aria-label="Twitter"
                                        >
                                            <Twitter size={18} className="sm:w-5 sm:h-5" />
                                        </a>
                                        <a
                                            href="#"
                                            className="text-white/70 hover:text-white transition-colors"
                                            aria-label="LinkedIn"
                                        >
                                            <Linkedin size={18} className="sm:w-5 sm:h-5" />
                                        </a>
                                    </div>
                                </div>

                                {/* Column 4 - Quick Links */}
                                <div className="md:-ml-4 lg:-ml-8">
                                    <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-2 md:mb-3">Quick Links</h4>
                                    <ul className="space-y-1 text-xs sm:text-sm md:text-base text-white/70">
                                        <li>
                                            <a href="#" className="hover:text-white transition-colors">
                                                About us
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="hover:text-white transition-colors">
                                                An Agency
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="hover:text-white transition-colors">
                                                Portfolio
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="hover:text-white transition-colors">
                                                Blog
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="hover:text-white transition-colors">
                                                Career
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="hover:text-white transition-colors">
                                                Contact Us
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                {/* Column 5 - Services */}
                                <div className="md:-ml-4 lg:-ml-8">
                                    <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-2 md:mb-3">Services</h4>
                                    <ul className="space-y-1 text-xs sm:text-sm md:text-base text-white/70">
                                        <li>
                                            <a href="#" className="hover:text-white transition-colors">
                                                UI/UX Designs
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="hover:text-white transition-colors">
                                                Branding
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="hover:text-white transition-colors">
                                                Web Design
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="hover:text-white transition-colors">
                                                Web Flow
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="hover:text-white transition-colors">
                                                Development
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="hover:text-white transition-colors">
                                                Mobile App
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Copyright Section */}
                            <div className="border-t border-white/10 pt-12 pb-12">
                                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-white/60">
                                    <p>Copyright © 2026. All Rights Reserved</p>
                                    <div className="flex gap-2">
                                        <a href="#" className="hover:text-white transition-colors">
                                            Privacy Policy
                                        </a>
                                        <span>/</span>
                                        <a href="#" className="hover:text-white transition-colors">
                                            Term & Conditions
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

