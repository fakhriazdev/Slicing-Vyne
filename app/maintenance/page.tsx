import Image from 'next/image';

export default function Page() {
    return (
        <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center p-4 md:p-6">

            {/* Box Utama */}
            <div className="max-w-7xl h-auto md:h-[600px] bg-white w-full flex flex-col md:flex-row items-stretch overflow-hidden rounded shadow-xl">

                {/* Sisi Kiri: Konten (Force 50% di Desktop) */}
                <div className="w-full md:w-1/2 flex flex-col justify-between p-8 md:p-12 text-center md:text-left">

                    {/* 1. LOGO */}
                    <div className="flex justify-center md:justify-start">
                        <Image
                            src="/header-logo.png"
                            alt="VyneWorks Logo"
                            width={100}
                            height={40}
                            priority
                            className="object-contain"
                        />
                    </div>

                    {/* 2. MAIN CONTENT */}
                    <div className="flex-1 flex flex-col justify-center py-8 md:py-0">
                        <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight">
                            Elevating Our <br />
                            <span className="text-blue-900">Digital Presence.</span>
                        </h1>

                        <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
                            We are currently fine-tuning our platform to better serve your creative needs.
                            VyneWorks will be back online shortly with a brand new experience.
                        </p>
                    </div>

                    {/* 3. FOOTER */}
                    <div className="flex flex-col gap-2 mt-4">
                        <div className="w-12 h-[2px] bg-blue-900 mb-2 mx-auto md:mx-0"></div>
                        <p className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase">
                            © 2026 VyneWorks — Creative Visual Production
                        </p>
                    </div>
                </div>

                {/* Sisi Kanan: Gambar (Force 50% di Desktop) */}
                <div className="w-full md:w-1/2 h-[300px] md:h-full relative bg-blue-950 overflow-hidden">
                    <Image
                        src="/hero-1.png"
                        alt="Illustration"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        quality={75}
                        priority
                        className="object-cover"
                    />
                </div>

            </div>
        </div>
    );
}