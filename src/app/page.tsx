import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { TechArsenal } from "@/components/TechArsenal";
import { Projects } from "@/components/Projects";
import { CompetitiveProgramming } from "@/components/CompetitiveProgramming";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent/30 selection:text-white flex flex-col items-center">
      <div className="w-full max-w-[100vw] overflow-hidden">
        <Navbar />
        <Hero />
        <About />
        <TechArsenal />
        <Projects />
        <CompetitiveProgramming />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
