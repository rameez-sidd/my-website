import HeroOverlay from "@/components/Hero/HeroOverlay";
import About from "@/components/Sections/About";
import Projects from "@/components/Sections/Projects";
import Skills from "@/components/Sections/Skills";
import Contact from "@/components/Sections/Contact";
import Cinema from "@/components/Sections/Cinema";
import HeroCanvas from "@/components/Hero/HeroCanvas";

export default function Home() {
    return (
        <main className="relative w-full bg-[#050505] min-h-screen">
            <HeroCanvas />
            <HeroOverlay />

            <div className="relative z-20 bg-[#050505]">
                <About />
                <Projects />
                <Skills />
                <Cinema />
                <Contact />
            </div>
        </main>
    );
}
