"use client";
import { motion } from "framer-motion";
import { Award, ExternalLink, ShieldCheck } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "Engineering",
    issuer: "PT Aplikanusa Lintasarta",
    date: "2023",
    desc: "A leading ICT solutions provider in Indonesia. Offering services from high-speed connectivity to secure cloud computing infrastructure. Committed to empowering institutions through innovative IT managed services.",
    link: "https://drive.google.com/drive/u/0/folders/18W7jPaVaGok0jfAPWuHfriH_auoT7mfY",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    id: 2,
    title: "Full Stack Web Development",
    issuer: "Timedoor Academy",
    date: "2026",
    desc: "Specializing in software development and tech education. Providing web and mobile application development, IT outsourcing, and international work culture integration for professional careers.",
    link: "https://drive.google.com/drive/u/0/folders/18W7jPaVaGok0jfAPWuHfriH_auoT7mfY",
    color: "from-blue-500/20 to-purple-500/20",
  },
];

export function Certificates() {
  return (
    <section className="py-20 max-w-7xl mx-auto p-4 transition-colors duration-300">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-10">
        <div className="p-3 rounded-2xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white transition-colors">
          <Award size={28} />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white uppercase tracking-wider transition-colors">
            Certifications
          </h2>
          <p className="text-zinc-500 dark:text-gray-400 text-sm">Official recognitions and achievements</p>
        </div>
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            /* Card Styling: Zinc-50 (Light) & Zinc-900 (Dark) */
            className="group relative overflow-hidden rounded-[2rem] border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-zinc-900/50 p-6 transition-all hover:border-neon-blue/30 dark:hover:border-white/20"
          >
            {/* Background Glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 rounded-xl bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/5 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors shadow-sm dark:shadow-none">
                  <ShieldCheck size={24} />
                </div>
                <a 
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/5 text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/10 transition-all shadow-sm dark:shadow-none"
                >
                  <ExternalLink size={18} />
                </a>
              </div>

              {/* Text adaptive: Zinc-900 (light) vs White (dark) */}
              <span className="text-[10px] uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 font-bold">
                {cert.issuer} • {cert.date}
              </span>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-1 mb-2 transition-colors">
                {cert.title}
              </h3>
              <p className="text-zinc-600 dark:text-gray-400 text-sm leading-relaxed group-hover:text-zinc-900 dark:group-hover:text-gray-300 transition-colors">
                {cert.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}