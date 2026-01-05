"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "AI Dashboard",
    description: "The next generation of predictive analytics and smart data management.",
    size: "md:col-span-2 md:row-span-2",
    accent: "from-purple-500/20",
  },
  {
    title: "E-Commerce",
    description: "Minimalist shopping experience.",
    size: "md:col-span-1 md:row-span-1",
    accent: "from-blue-500/20",
  },
  {
    title: "SaaS App",
    description: "Streamlined workflow for modern teams.",
    size: "md:col-span-1 md:row-span-1",
    accent: "from-emerald-500/20",
  },
  {
    title: "Crypto Wallet",
    description: "Secure and decentralized asset management platform.",
    size: "md:col-span-3 md:row-span-1",
    accent: "from-orange-500/20",
  },
];

export function BentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[180px] max-w-6xl mx-auto">
      {projects.map((project, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ y: -5 }}
          className={`${project.size} group relative overflow-hidden rounded-[2rem] border border-white/5 bg-[#0f0f0f] p-8 flex flex-col justify-between transition-all hover:border-white/20`}
        >
          {/* Background Gradient Effect */}
          <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
          
          <div className="flex justify-between items-start relative z-10">
            <div className="p-3 bg-white/5 rounded-2xl border border-white/5">
              <Github size={20} className="text-gray-400 group-hover:text-white transition-colors" />
            </div>
            <ArrowUpRight size={24} className="text-gray-600 group-hover:text-white transition-colors" />
          </div>

          <div className="relative z-10">
            <h3 className="text-2xl font-semibold text-white tracking-tight mb-2">
              {project.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-[250px] group-hover:text-gray-400 transition-colors">
              {project.description}
            </p>
          </div>

          {/* Bottom Glow Line */}
          <div className="absolute -bottom-px left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>
      ))}
    </div>
  );
}