"use client";
import { motion } from "framer-motion";
import { Code2, Palette, Terminal } from "lucide-react";

const skills = [
  {
    icon: <Code2 size={24} />,
    title: "Frontend Development",
    desc: "Specializing in React and Vue.js to build high-performance, SEO-friendly web applications with seamless client-side navigation.",
  },
  {
    icon: <Palette size={24} />,
    title: "UI/UX Implementation",
    desc: "Transforming complex designs into pixel-perfect interfaces using Tailwind CSS and Framer Motion for fluid user experiences.",
  },
  {
    icon: <Terminal size={24} />,
    title: "Backend Solutions",
    desc: "Architecting robust server-side logic and database schemas using Laravel and Node.js to ensure scalable and secure data management.",
  },
];

export default function About() {
  const textGradient = {
    backgroundImage: "linear-gradient(to right, #22d3ee, #8b5cf6, #d946ef)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent",
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-white dark:bg-charcoal relative overflow-hidden transition-colors duration-300" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Sisi Kiri: Teks */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-3 py-1 rounded-full border border-neon-purple/20 bg-neon-purple/5 text-neon-purple text-xs font-medium tracking-wider uppercase mb-6">
              About Me
            </div>
            
            {/* Judul: Hitam di Light, Putih di Dark */}
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6 tracking-tight leading-tight transition-colors">
              Driven by passion, <br />
              <span style={textGradient}>defined by results.</span>
            </h2>
            
            <p className="text-zinc-600 dark:text-gray-400 text-lg leading-relaxed mb-8 transition-colors">
              I am a Fullstack Developer and Designer based in Indonesia. I bridge the gap between complex backend logic and elegant frontend presentation. 
              My goal is to create digital products that are not only functional but also a delight to use.
            </p>
            
            <div className="flex gap-8">
              <div>
                <h4 className="text-zinc-900 dark:text-white text-3xl font-bold transition-colors">2+</h4>
                <p className="text-zinc-500 dark:text-gray-500 text-sm">Years Exp.</p>
              </div>
              <div>
                <h4 className="text-zinc-900 dark:text-white text-3xl font-bold transition-colors">3+</h4>
                <p className="text-zinc-500 dark:text-gray-500 text-sm">Open Source Projects</p>
              </div>
            </div>
          </motion.div>

          {/* Sisi Kanan: Skill Cards */}
          <div className="grid gap-4">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                /* Card: Abu-abu sangat muda di Light, Putih transparan di Dark */
                className="p-6 rounded-[2rem] bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/5 hover:border-neon-purple/30 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-neon-purple/10 text-neon-purple group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-zinc-900 dark:text-white font-semibold text-lg mb-1 transition-colors">{skill.title}</h3>
                    <p className="text-zinc-500 dark:text-gray-500 text-sm leading-relaxed transition-colors">{skill.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Dekorasi Background */}
      <div className="absolute left-0 bottom-0 -z-10 w-80 h-80 bg-neon-purple/5 blur-[100px] rounded-full pointer-events-none" />
    </section>
  );
}