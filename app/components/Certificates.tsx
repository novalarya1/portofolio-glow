"use client";
import { motion } from "framer-motion";
import { Award, ExternalLink, ShieldCheck, GraduationCap } from "lucide-react";

const certificates = [
   {
    id: 1,
    title: "Engineering",
    issuer: "PT Aplikanusa Lintasarta",
    date: "2023",
    desc: "A leading Information and Communication Technology (ICT) solutions provider dedicated to driving industrial digital transformation in Indonesia. We offer a comprehensive ecosystem of tech services, ranging from high-speed data connectivity and secure cloud computing infrastructure to advanced cybersecurity solutions. As part of Indosat Ooredoo Hutchison, we are committed to empowering businesses and government institutions through innovative IT managed services and international-standard data centers to build a resilient digital future.",
    link: "https://drive.google.com/drive/u/0/folders/18W7jPaVaGok0jfAPWuHfriH_auoT7mfY",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    id: 2,
    title: "Full Stack Web Development",
    issuer: "Timedoor Academy",
    date: "2026",
    desc: "A company specializing in education, information technology, and software development. We provide a wide range of tech services, including web and mobile application development, as well as strategic IT outsourcing for business needs. Furthermore, through our Vocational Training Center (LPK) subsidiary, we empower professionals for careers in Japan, with a primary focus on language proficiency and international work culture integration.",
    link: "https://drive.google.com/drive/u/0/folders/18W7jPaVaGok0jfAPWuHfriH_auoT7mfY",
    color: "from-blue-500/20 to-purple-500/20",
  },
];

export function Certificates() {
  return (
    <section className="py-20 max-w-7xl mx-auto p-4">
      <div className="flex items-center gap-3 mb-10">
        <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white">
          <Award size={28} />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-white uppercase tracking-wider">Certifications</h2>
          <p className="text-gray-400 text-sm"></p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900/50 p-6 transition-all hover:border-white/20"
          >
            {/* Background Glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 rounded-xl bg-white/5 text-gray-400 group-hover:text-white transition-colors">
                  <ShieldCheck size={24} />
                </div>
                <a 
                  href={cert.link}
                  target="_blank"
                  className="p-2 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                >
                  <ExternalLink size={18} />
                </a>
              </div>

              <span className="text-[10px] uppercase tracking-[0.2em] text-blue-400 font-bold">
                {cert.issuer} • {cert.date}
              </span>
              <h3 className="text-xl font-bold text-white mt-1 mb-2">
                {cert.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                {cert.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}