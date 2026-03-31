"use client";
import { motion } from "framer-motion";

export default function Hero() {
  const line1 = "Designing the future";
  const line2 = "digital interfaces";

  // Fungsi scroll smooth ke section tertentu
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Variasi animasi kontainer (Stagger effect)
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  // Variasi animasi per kata (Slide up effect)
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 20, stiffness: 100 },
    },
    hidden: { opacity: 0, y: 30 },
  };

  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-white dark:bg-charcoal transition-colors duration-300">
      
      {/* Background Glow Effect - Menyesuaikan opacity di Light/Dark mode */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
        <div className="absolute w-100 h-100 md:w-125 md:h-125 bg-neon-purple/20 dark:bg-neon-purple/15 rounded-full blur-[100px] md:blur-[120px] animate-pulse-slow" />
        <div className="absolute w-80 h-80 md:w-100 md:h-100 bg-neon-blue/15 dark:bg-neon-blue/10 rounded-full blur-[80px] md:blur-[100px] translate-x-20 -translate-y-20" />
      </div>

      <motion.div variants={container} initial="hidden" animate="visible" className="z-10">
        {/* Main Heading */}
        <motion.h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-zinc-900 dark:text-white leading-[1.1] transition-colors">
          <div className="block mb-2">
            {line1.split(" ").map((word, index) => (
              <motion.span variants={child} key={index} className="inline-block mr-3 md:mr-5">
                {word}
              </motion.span>
            ))}
          </div>
          
          <div className="block">
            {line2.split(" ").map((word, index) => (
              <motion.span 
                variants={child} 
                key={index} 
                className="inline-block mr-3 md:mr-5"
                style={{ 
                  backgroundImage: "linear-gradient(to right, #3b82f6, #8b5cf6, #d946ef)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
                  display: "inline-block",
                  filter: "drop-shadow(0 0 15px rgba(59, 130, 246, 0.3))",
                  fontWeight: "800",
                }}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </motion.h1>

        {/* Sub-description - Adaptive Text Color */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-8 text-zinc-500 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed transition-colors"
        >
          I specialize in building high-performance web applications with a focus on 
          <span className="text-zinc-900 dark:text-gray-200 font-medium"> minimalist design</span> and <span className="text-zinc-900 dark:text-gray-200 font-medium">fluid animations</span>.
        </motion.p>

        {/* Action Buttons Group */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.6 }}
          className="mt-12 flex flex-wrap gap-4 justify-center"
        >
          {/* Tombol Utama: Projects */}
          <button 
            onClick={() => scrollToSection("project")}
            className="px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-black font-bold rounded-full hover:scale-105 transition-all active:scale-95 shadow-xl shadow-zinc-200 dark:shadow-white/10 cursor-pointer"
          >
            View Projects
          </button>
          
          {/* Tombol: Education & Certs */}
          <button 
            onClick={() => scrollToSection("education")}
            className="px-8 py-4 border border-zinc-200 dark:border-neon-blue/30 text-zinc-900 dark:text-neon-blue font-medium rounded-full hover:bg-zinc-100 dark:hover:bg-neon-blue/10 transition-all backdrop-blur-sm cursor-pointer active:scale-95"
          >
            Education & Certs
          </button>

          {/* Tombol: Contact */}
          <button 
            onClick={() => scrollToSection("contact")}
            className="px-8 py-4 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white font-medium rounded-full hover:bg-zinc-50 dark:hover:bg-white/5 transition-all backdrop-blur-sm cursor-pointer active:scale-95"
          >
            Contact Me
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
        onClick={() => scrollToSection("about")}
      >
        <span className="text-zinc-400 dark:text-gray-500 text-[10px] uppercase tracking-[0.2em] group-hover:text-neon-blue transition-colors">
          Scroll to Explore
        </span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-1 h-8 bg-gradient-to-b from-neon-blue to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
}