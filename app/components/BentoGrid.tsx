"use client";
import { motion } from "framer-motion";
import { Github, ExternalLink, BrainCircuit, ShoppingBag, LayoutDashboard, Wallet } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI Dashboard",
    desc: "The next generation of predictive analytics and smart data management using machine learning models.",
    tech: ["Next.js", "Python", "Recharts"],
    icon: <BrainCircuit size={24} />,
    size: "lg:col-span-2 lg:row-span-2", // Ukuran besar di kiri
    color: "from-purple-500/20 to-blue-500/20",
  },
  {
    id: 2,
    title: "E-Commerce",
    desc: "Minimalist shopping experience with high-speed performance and clean UI.",
    tech: ["Stripe", "Sanity", "Tailwind"],
    icon: <ShoppingBag size={24} />,
    size: "lg:col-span-1 lg:row-span-1",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    id: 3,
    title: "SaaS App",
    desc: "Streamlined workflow and collaboration platform for modern distributed teams.",
    tech: ["Node.js", "PostgreSQL", "Socket.io"],
    icon: <LayoutDashboard size={24} />,
    size: "lg:col-span-1 lg:row-span-1",
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    id: 4,
    title: "Crypto Wallet",
    desc: "Secure and decentralized asset management platform with multi-chain support.",
    tech: ["Solidity", "Ethers.js", "Web3"],
    icon: <Wallet size={24} />,
    size: "lg:col-span-3 lg:row-span-1", // Ukuran lebar di bawah
    color: "from-blue-500/20 to-cyan-500/20",
  },
];

export function BentoGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[280px]">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          whileHover={{ y: -5 }}
          className={`group relative overflow-hidden rounded-[2rem] border border-white/5 bg-white/5 p-8 flex flex-col justify-end transition-all hover:border-white/10 ${project.size}`}
        >
          {/* Background Gradient & Glow */}
          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
          
          {/* Icons Top Row */}
          <div className="absolute top-8 left-8 flex items-center gap-3">
             <div className="p-3 rounded-2xl bg-white/5 text-gray-400 group-hover:text-white transition-colors">
                {project.icon}
             </div>
          </div>

          <div className="absolute top-8 right-8 flex gap-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <button className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20">
              <Github size={18} />
            </button>
            <button className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20">
              <ExternalLink size={18} />
            </button>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-gray-400 text-sm max-w-[280px] mb-4 group-hover:text-gray-300 transition-colors">
              {project.desc}
            </p>
            
            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] uppercase tracking-wider text-gray-500 font-bold">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}