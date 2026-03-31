"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

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
    <nav className="fixed top-0 w-full z-50 border-b border-zinc-200 dark:border-white/5 backdrop-blur-md bg-white/70 dark:bg-charcoal/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Name */}
        <div className="text-xl font-bold tracking-tighter text-zinc-900 dark:text-white transition-colors">
          NOVAL ARYA WAHYUDHI
        </div>
        
        {/* Right Section */}
        <div className="flex items-center gap-8">
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-500 dark:text-zinc-400">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="hover:text-neon-blue dark:hover:text-neon-blue transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-blue transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Theme Switcher - Desktop */}
          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button 
              className="text-zinc-900 dark:text-white p-2 hover:bg-zinc-100 dark:hover:bg-white/5 rounded-lg transition-colors cursor-pointer" 
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
            className="absolute top-16 left-0 w-full bg-white/95 dark:bg-charcoal/95 backdrop-blur-xl border-b border-zinc-200 dark:border-white/10 overflow-hidden md:hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  onClick={() => setIsOpen(false)} 
                  className="text-lg text-zinc-600 dark:text-zinc-300 hover:text-neon-blue dark:hover:text-neon-blue transition-colors py-2 border-b border-zinc-100 dark:border-white/5 last:border-none"
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