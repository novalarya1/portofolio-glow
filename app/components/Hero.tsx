"use client";
import { motion } from "framer-motion";

export default function Hero() {
  const line1 = "Designing the future";
  const line2 = "digital interfaces";

  // Scroll function for a smooth experience
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 20, stiffness: 100 },
    },
    hidden: { opacity: 0, y: 30 },
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="absolute w-125 h-125 bg-neonPurple/15 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute w-100 h-100 bg-neonBlue/10 rounded-full blur-[100px] translate-x-20 -translate-y-20" />
      </div>

      <motion.div variants={container} initial="hidden" animate="visible" className="z-10">
        <motion.h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white leading-[1.1]">
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
                  backgroundImage: "linear-gradient(to right, #22d3ee, #8b5cf6, #d946ef)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
                  display: "inline-block",
                  filter: "drop-shadow(0 0 12px rgba(34, 211, 238, 0.3)) drop-shadow(0 0 25px rgba(139, 92, 246, 0.2))",
                  fontWeight: "800",
                }}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-8 text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          I specialize in building high-performance web applications with a focus on 
          <span className="text-gray-300"> minimalist design</span> and <span className="text-gray-300">fluid animations</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.6 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
        >
        
          <button 
            onClick={() => {
              // Sesuaikan ID dengan yang ada di page.tsx Anda yaitu "project"
              const projectSection = document.getElementById("project");
              if (projectSection) {
                projectSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-white/10 cursor-pointer"
          >
            View Projects
          </button>
          
          {/* Functional Contact Me Button */}
          <button 
            onClick={scrollToContact}
            className="px-8 py-4 border border-white/10 text-white font-medium rounded-full hover:bg-white/5 transition-all backdrop-blur-sm cursor-pointer active:scale-95"
          >
            Contact Me
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}