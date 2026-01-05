"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 backdrop-blur-md bg-charcoal/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="text-xl font-bold tracking-tighter text-white">NOVAL ARYA WAHYUDHI</div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          {['About', 'Project', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-neonBlue transition-colors">
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-16 left-0 w-full bg-charcoal border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
        >
          {['Project', 'About', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-lg text-gray-300">
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
