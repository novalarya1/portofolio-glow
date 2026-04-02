import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import { BentoGrid } from "./components/BentoGrid";
import { Certificates } from "./components/Certificates";
import Contact from "./components/Contact";

export default function Home() {
  return (
    /* Menggunakan bg-white untuk mode terang dan bg-charcoal untuk mode gelap */
    <main className="min-h-screen bg-white dark:bg-charcoal transition-colors duration-300 antialiased selection:bg-neonBlue/30">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <section id="project" className="relative py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 space-y-4">
            <div className="inline-block px-3 py-1 rounded-full border border-neonBlue/20 bg-neonBlue/5 text-neonBlue text-xs font-medium tracking-wider uppercase">
              Portfolio
            </div>
            {/* Judul adaptif: Hitam di mode terang, putih di mode gelap */}
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white tracking-tight">
              Selected Works
            </h2>
            <p className="text-zinc-500 dark:text-gray-500 text-lg max-w-xl leading-relaxed">
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
      
      {/* Education Section */}
      <Education />
        
      {/* Certificates Section */}
      <section id="certificates" className="bg-white dark:bg-charcoal/50 py-12 transition-colors">
        <Certificates />
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-200 dark:border-white/5 text-center bg-white dark:bg-charcoal transition-colors">
        <p className="text-zinc-400 dark:text-gray-600 text-sm">
          © 2026 Noval Arya. Built with Next.js & Tailwind v4.
        </p>
      </footer>
    </main>
  );
}