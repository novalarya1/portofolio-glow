"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle"; // Pastikan path import benar

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Project', href: '#project' },
    { name: 'Education', href: '#education' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-gray-200 dark:border-white/5 backdrop-blur-md bg-white/70 dark:bg-charcoal/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Name */}
        <div className="text-xl font-bold tracking-tighter text-charcoal dark:text-white">
          NOVAL ARYA WAHYUDHI
        </div>
        
        {/* Right Section: Desktop Menu + Toggle */}
        <div className="flex items-center gap-8">
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-500 dark:text-gray-400">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="hover:text-neonBlue dark:hover:text-neonBlue transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neonBlue transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Theme Switcher (Selalu terlihat di desktop) */}
          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          {/* Mobile Actions (Toggle + Menu Button) */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button 
              className="text-charcoal dark:text-white p-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded-lg transition-colors" 
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-16 left-0 w-full bg-white/95 dark:bg-charcoal/95 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 overflow-hidden md:hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  onClick={() => setIsOpen(false)} 
                  className="text-lg text-gray-600 dark:text-gray-300 hover:text-neonBlue dark:hover:text-neonBlue transition-colors py-2 border-b border-gray-100 dark:border-white/5 last:border-none"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}