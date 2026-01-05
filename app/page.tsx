import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About"
import { BentoGrid } from "./components/BentoGrid";
import Contact from "./components/Contact";

export default function Home() {
  return (
    /* Main container using the charcoal background from your v4 theme */
    <main className="min-h-screen bg-charcoal antialiased selection:bg-neonBlue/30">
      <Navbar />
      
      {/* Hero Section: The first point of engagement */}
      <Hero />

      {/* About Section: Introducing yourself and your core skills */}
      <About />
      
      {/* Projects Section: Showcasing your work */}
      <section id="project" className="relative py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 space-y-4">
            <div className="inline-block px-3 py-1 rounded-full border border-neonBlue/20 bg-neonBlue/5 text-neonBlue text-xs font-medium tracking-wider uppercase">
              Portfolio
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Selected Works
            </h2>
            <p className="text-gray-500 text-lg max-w-xl leading-relaxed">
              A curated collection of projects designed with a focus on detail, 
              performance, and meaningful user experiences.
            </p>
          </div>

          {/* Project Grid */}
          <BentoGrid />
        </div>
        
        {/* Background Decoration Glow */}
        <div className="absolute top-0 right-0 -z-10 w-100 h-100 bg-neonBlue/5 blur-[120px] pointer-events-none" />
      </section>

      {/* Contact Section: The final call to action */}
      <Contact />

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center bg-charcoal">
        <p className="text-gray-600 text-sm">
          © 2026 Noval Arya. Built with Next.js & Tailwind v4.
        </p>
      </footer>
    </main>
  );
}