"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, Github, Instagram, CheckCircle2, Loader2 } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("mlgdzore");

  const textGradient = {
    backgroundImage: "linear-gradient(to right, #22d3ee, #8b5cf6, #d946ef)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent",
    filter: "drop-shadow(0 0 10px rgba(139, 92, 246, 0.3))",
  };

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-white dark:bg-charcoal transition-colors duration-300" id="contact">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
        <div className="w-100 h-100 md:w-125 md:h-125 bg-neon-purple/10 rounded-full blur-[120px] animate-pulse-slow" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Heading & Info */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-zinc-900 dark:text-white leading-tight transition-colors">
              Let's build <br />
              <span style={textGradient}>something cool.</span>
            </h2>
            <p className="text-zinc-600 dark:text-gray-400 text-lg mb-10 max-w-md leading-relaxed transition-colors">
              Interested in working together? Send me a message or reach out via the platforms below.
            </p>

            <div className="space-y-4">
              {/* Email Card */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 group transition-all hover:border-neon-blue/50">
                <div className="w-12 h-12 rounded-xl bg-neon-blue/10 flex items-center justify-center">
                  <Mail size={20} className="text-neon-blue" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 dark:text-gray-500 uppercase tracking-widest font-bold">Email Me</p>
                  <p className="text-zinc-900 dark:text-white font-medium transition-colors">baiqdewi2626@gmail.com</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <a 
                  href="https://github.com/novalarya1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 hover:border-neon-purple/50 transition-all flex-1 flex items-center justify-center gap-3 group"
                >
                  <Github size={20} className="text-zinc-500 dark:text-gray-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" />
                  <span className="text-zinc-500 dark:text-gray-400 group-hover:text-zinc-900 dark:group-hover:text-white font-medium transition-colors">Github</span>
                </a>
                <a 
                  href="https://www.instagram.com/nvl.ya_/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 hover:border-neon-purple/50 transition-all flex-1 flex items-center justify-center gap-3 group"
                >
                  <Instagram size={20} className="text-zinc-500 dark:text-gray-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" />
                  <span className="text-zinc-500 dark:text-gray-400 group-hover:text-zinc-900 dark:group-hover:text-white font-medium transition-colors">Instagram</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Decorative Glow Border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-[32px] blur opacity-20 dark:opacity-30" />
            
            {/* Form Container: Putih bersih di Light, Hitam transparan di Dark */}
            <div className="relative bg-white dark:bg-black/40 backdrop-blur-xl border border-zinc-200 dark:border-white/10 p-8 md:p-10 rounded-[28px] min-h-[450px] flex flex-col justify-center shadow-2xl shadow-zinc-200/50 dark:shadow-none transition-colors">
              
              <AnimatePresence mode="wait">
                {state.succeeded ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center space-y-4"
                  >
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={40} className="text-green-500 dark:text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">Message Sent!</h3>
                    <p className="text-zinc-600 dark:text-gray-400 max-w-[250px] mx-auto">Thank you! I will get back to you as soon as possible.</p>
                    <button 
                      onClick={() => window.location.reload()}
                      className="mt-6 text-neon-blue text-sm font-semibold hover:underline cursor-pointer"
                    >
                      Send a new message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit} 
                    className="space-y-5"
                    exit={{ opacity: 0 }}
                  >
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold text-zinc-500 dark:text-gray-400 ml-1">Your Name</label>
                      <input 
                        id="name"
                        name="name"
                        type="text" 
                        required
                        className="w-full bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-zinc-900 dark:text-white outline-none focus:ring-2 focus:ring-neon-blue/50 transition-all placeholder:text-zinc-400 dark:placeholder:text-gray-600"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-zinc-500 dark:text-gray-400 ml-1">Email Address</label>
                      <input 
                        id="email"
                        name="email"
                        type="email" 
                        required
                        className="w-full bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-zinc-900 dark:text-white outline-none focus:ring-2 focus:ring-neon-purple/50 transition-all placeholder:text-zinc-400 dark:placeholder:text-gray-600"
                        placeholder="john@example.com"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1 font-medium" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-semibold text-zinc-500 dark:text-gray-400 ml-1">Message</label>
                      <textarea 
                        id="message"
                        name="message"
                        rows={4}
                        required
                        className="w-full bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-zinc-900 dark:text-white outline-none focus:ring-2 focus:ring-neon-purple/50 transition-all resize-none placeholder:text-zinc-400 dark:placeholder:text-gray-600"
                        placeholder="How can I help you?"
                      />
                      <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1 font-medium" />
                    </div>

                    <button 
                      type="submit"
                      disabled={state.submitting}
                      className="w-full py-4 mt-4 bg-zinc-900 dark:bg-white text-white dark:text-black font-extrabold rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-xl dark:shadow-white/5 cursor-pointer"
                    >
                      {state.submitting ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          SENDING...
                        </>
                      ) : (
                        <>
                          SEND MESSAGE
                          <Send size={18} />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}