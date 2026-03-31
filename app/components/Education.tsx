"use client";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const education = [
  {
    id: 1,
    degree: "Bachelor of Informatics Engineering",
    institution: "Institut Bisnis dan Teknologi Indonesia",
    period: "2023 - Present",
    location: "Bali, Indonesia",
    desc: "Focusing on core computer science principles, including algorithms, data structures, and Object-Oriented Programming (OOP). Gaining deep understanding in database architecture and software engineering patterns to build efficient and scalable digital solutions.",
    color: "bg-neon-blue",
  },
  {
    id: 2,
    degree: "Computer and Network Engineering",
    institution: "SMK Negeri 3 Mataram",
    period: "2020 - 2023",
    location: "NTB, Indonesia",
    desc: "Gained a strong foundation in computer networking, hardware assembly, and server administration to build and maintain reliable IT infrastructure.",
    color: "bg-neon-purple",
  },
];

export default function Education() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white dark:bg-charcoal relative transition-colors duration-300" id="education">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full border border-neon-blue/20 bg-neon-blue/5 text-neon-blue text-xs font-medium tracking-wider uppercase mb-4">
            Learning Path
          </div>
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-white tracking-tight transition-colors">
            Education Timeline
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Garis Tengah (Line) - Menyesuaikan warna di mode terang */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-200 dark:via-white/10 to-transparent" />

          <div className="space-y-12">
            {education.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Dot / Titik di Tengah */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center z-20">
                  <div className={`w-3 h-3 rounded-full ${item.color} shadow-[0_0_15px_rgba(34,211,238,0.5)]`} />
                </div>

                {/* Card Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-16 text-left md:text-right" : "md:pl-16 text-left"}`}>
                  <div className="p-8 rounded-[2rem] bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/5 hover:border-neon-blue/30 dark:hover:border-white/10 transition-all group overflow-hidden relative shadow-sm dark:shadow-none">
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className={`flex items-center gap-2 mb-3 text-sm font-medium ${index % 2 === 0 ? "md:justify-end" : "justify-start"}`}>
                       <Calendar size={14} className="text-zinc-400 dark:text-gray-500" />
                       <span className="text-zinc-500 dark:text-gray-400">{item.period}</span>
                    </div>

                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-1 group-hover:text-neon-blue transition-colors">
                      {item.degree}
                    </h3>
                    <p className={`text-zinc-700 dark:text-gray-300 font-medium mb-3 flex items-center gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                       {item.institution}
                    </p>
                    
                    <div className={`flex items-center gap-2 text-xs text-zinc-500 dark:text-gray-500 mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                       <MapPin size={12} />
                       <span>{item.location}</span>
                    </div>

                    <p className="text-zinc-500 dark:text-gray-500 text-sm leading-relaxed group-hover:text-zinc-700 dark:group-hover:text-gray-300 transition-colors">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}