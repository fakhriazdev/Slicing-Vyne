import type {Metadata, Viewport} from "next";
import { Montserrat, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/smooth-scroll";
import NoiseBackground from "@/components/NoiseBackground";

const Montserrat_Sans = Montserrat({
    variable: "--font-instrument-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const viewport: Viewport = {
    themeColor: "#35615C",
    width: "device-width",
    initialScale: 1,
};

export const metadata: Metadata = {
    metadataBase: new URL("https://websitekamu.com"), // Ganti dengan URL asli
    title: {
        default: "VYNE WORKS | Visual Production Agency",
        template: "%s | VYNE WORKS", // Untuk halaman lain (misal: Project | Nama Brand)
    },
    description: "A full-service Creative Visual Production crafting world-class commercials and digital experiences.",
    keywords: ["Visual Production", "Creative Agency", "Commercials", "Branded Content"],
    authors: [{ name: "VYNE WORKS" }],
    creator: "VYNE WORKS",

    // Favicon & Icons
    icons: {
        icon: [
            { url: "/favicon.ico" },
            { url: "/icon.png", sizes: "32x32", type: "image/png" },
        ],
        apple: [
            { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
        ],
    },

    // Open Graph (Facebook, WhatsApp, LinkedIn)
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://websitekamu.com",
        title: "VYNE WORKS | Visual Production Agency",
        description: "We turn ideas into visual masterpieces.",
        siteName: "VYNE WORKS",
        images: [
            {
                url: "/og-image.jpg", // Pastikan file ini ada di folder public
                width: 1200,
                height: 630,
                alt: "VYNE WORKS Preview",
            },
        ],
    },

    // Twitter
    twitter: {
        card: "summary_large_image",
        title: "VYNE WORKS | Visual Production Agency",
        description: "We turn ideas into visual masterpieces.",
        creator: "@twitterhandle",
        images: ["/og-image.jpg"],
    },

    // Robot untuk SEO
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${Montserrat_Sans.variable} ${geistMono.variable} antialiased`}
        >
        <SmoothScroll>
            <NoiseBackground/>
            {children}
        </SmoothScroll>
        </body>
        </html>
    );
}