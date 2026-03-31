"use client";
import { motion } from "framer-motion";
import { Github, ExternalLink, BrainCircuit, ShoppingBag, LayoutDashboard } from "lucide-react";
import React from "react";

interface Project {
  id: number;
  title: string;
  desc: string;
  tech: string[];
  icon: React.ReactNode;
  link: string;
  size: string;
  color: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "King Rental",
    desc: "A collaborative car rental platform. As the Frontend Lead, I spearheaded the UI/UX implementation, focusing on seamless client-side rendering and dynamic filtering, supported by a scalable backend.",
    tech: ["React.js", "Tailwind CSS", "Lucide Icons"],
    icon: <BrainCircuit size={24} />,
    link: "https://github.com/novalarya1/KingRental",
    size: "lg:col-span-2 lg:row-span-2",
    color: "from-purple-500/20 to-blue-500/20",
  },
  {
    id: 2,
    title: "V-Shop E-Commerce",
    desc: "Interactive e-commerce interface built with Vue.js and Vite, featuring a reactive shopping cart system and fully responsive design.",
    tech: ["Vue.js", "Vite", "Tailwind"],
    icon: <ShoppingBag size={24} />,
    link: "https://github.com/novalarya1/toko-vue",
    size: "lg:col-span-1 lg:row-span-2",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    id: 4,
    title: "Travel.AI",
    desc: "A robust travel management system built with Laravel. As the Backend Developer, I architected the server-side logic and database schema to handle travel packages and bookings efficiently. I focused on building secure authentication, structured CRUD operations, and a scalable API architecture.",
    tech: ["Laravel", "PostgreSQL", "PHP"],
    icon: <LayoutDashboard size={24} />,
    link: "https://github.com/novalarya1/travel-agent",
    size: "lg:col-span-3 lg:row-span-1",
    color: "from-orange-500/20 to-red-500/20",
  },
];

export function BentoGrid() {
  return (
    /* Perbaikan 1: Hapus auto-rows-[280px] agar mobile bisa menyesuaikan tinggi konten */
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:auto-rows-[300px] max-w-7xl mx-auto p-4">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
      /* Perbaikan 2: Tambahkan min-h-[350px] agar kartu tidak terlalu pendek di mobile */
      className={`group relative overflow-hidden rounded-[2.5rem] border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-zinc-900/50 p-6 md:p-8 flex flex-col justify-end transition-all hover:border-neon-blue/30 dark:hover:border-white/20 min-h-[350px] lg:min-h-0 ${project.size}`}
    >
      {/* Background Gradient & Glow */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} 
      />
      
      {/* Icon Top Left */}
      <div className="absolute top-6 left-6 md:top-8 md:left-8">
        <div className="p-3 md:p-4 rounded-2xl bg-zinc-200 dark:bg-white/5 border border-zinc-300 dark:border-white/5 text-zinc-500 dark:text-gray-400 group-hover:text-zinc-900 dark:group-hover:text-white group-hover:border-zinc-400 dark:group-hover:border-white/10 transition-all duration-300">
          {project.icon}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="absolute top-6 right-6 md:top-8 md:right-8 flex gap-3 z-30 opacity-100 lg:opacity-0 group-hover:opacity-100 translate-y-0 lg:translate-y-2 group-hover:translate-y-0 transition-all duration-300">
        {project.link && project.link !== "#" && (
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2.5 md:p-3 rounded-full bg-zinc-200/50 dark:bg-white/10 text-zinc-900 dark:text-white hover:bg-zinc-300 dark:hover:bg-white/20 backdrop-blur-md transition-all shadow-sm"
            aria-label="View Github Repository"
          >
            <Github size={18} />
          </a>
        )}
        <a 
          href="#" 
          className="p-2.5 md:p-3 rounded-full bg-zinc-200/50 dark:bg-white/10 text-zinc-900 dark:text-white hover:bg-zinc-300 dark:hover:bg-white/20 backdrop-blur-md transition-all shadow-sm"
          aria-label="View Live Demo"
        >
          <ExternalLink size={18} />
        </a>
      </div>

      {/* Content Section */}
      <div className="relative z-10 space-y-3 mt-20 lg:mt-0">
        <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">
          {project.title}
        </h3>
        
        <p className="text-zinc-500 dark:text-gray-400 text-sm leading-relaxed max-w-full lg:max-w-[90%] group-hover:text-zinc-900 dark:group-hover:text-gray-200 transition-colors duration-300">
          {project.desc}
        </p>
        
        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tech.map((t) => (
            <span 
              key={t} 
              className="px-3 py-1 rounded-full bg-zinc-200 dark:bg-white/5 border border-zinc-300 dark:border-white/10 text-[9px] md:text-[10px] uppercase tracking-widest text-zinc-500 dark:text-gray-400 group-hover:text-zinc-900 dark:group-hover:text-white group-hover:bg-zinc-300 dark:group-hover:bg-white/10 transition-all"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}