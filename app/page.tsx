import Navbar from "@/components/Navbar";
import Hero from "@/app/components/Hero";
import Services from "@/app/components/Services";
import IntroAndHighlight from "@/app/components/IntroAndHighlight";
import SecondHero from "@/app/components/SecondHero";
import {OurClients} from "@/app/components/OurClients";
import {CampaignProject} from "@/app/components/CampaignProject";
import {SocialMediaContent} from "@/app/components/SocialMediaContent";
import Concept3D from "@/app/components/Concept3D";
import Footer from "@/app/components/Footer";

export default function Home() {
    return (
        <>
            <main className="h-screen flex flex-col bg-zinc-50 font-sans">
                <Navbar />
                <Hero />
            </main>
            <IntroAndHighlight/>
            <Services/>
            <SecondHero/>
            <OurClients />
            <CampaignProject/>
            <SocialMediaContent/>
            <Concept3D/>
            <Footer/>
        </>

    );
}
