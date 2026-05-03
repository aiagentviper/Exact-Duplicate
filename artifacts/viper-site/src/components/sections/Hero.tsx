import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const services = [
  { num: "#01", label: "AI Automation" },
  { num: "#02", label: "AI Websites" },
  { num: "#03", label: "AI Apps" },
  { num: "#04", label: "AI Video" },
];

export function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden flex flex-col">
      <img src="/hero-bg.png" alt="Grayscale luxury AI agency hero background" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-top" />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.80) 20%, rgba(0,0,0,0.40) 45%, rgba(0,0,0,0.08) 70%, transparent 100%)" }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.15) 35%, transparent 60%)" }} />
      <div className="relative z-10 mt-auto px-6 md:px-12 pb-0">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-[11px] font-inter font-semibold uppercase tracking-[0.22em] text-white/70">
                Next-Gen AI Agency
              </span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="font-grotesk font-bold leading-[0.95] tracking-[-0.02em] text-white" style={{ fontSize: "clamp(3.2rem, 5.5vw, 5.5rem)" }}>
              We Build<br />
              <span className="text-white/30">With AI.</span>
            </motion.h1>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }} className="lg:max-w-[360px] pb-1">
            <p className="font-grotesk font-semibold text-[22px] leading-[1.25] tracking-tight text-white mb-3">
              Great AI should scale your business invisibly.
            </p>
            <p className="font-inter text-[15px] leading-relaxed text-white/55 mb-6">
              VIPER builds automation, AI-powered websites, apps & video that work around the clock — so you don't have to.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/contact">
                <span aria-label="Book a Free Call" className="inline-flex items-center gap-2 bg-white text-black font-inter font-semibold text-[13px] rounded-full px-6 py-2.5 hover:bg-white/90 transition-colors cursor-pointer">
                  Start Your Project <ArrowRight size={14} />
                </span>
              </Link>
              <Link href="/work">
                <span aria-label="See Work" className="inline-flex items-center gap-2 font-inter font-medium text-[13px] text-white/60 hover:text-white transition-colors cursor-pointer">
                  See Work <ArrowRight size={13} />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }} className="border-t border-white/15 grid grid-cols-2 md:grid-cols-4">
          {services.map((s, i) => (
            <div key={s.num} className={`py-5 px-4 flex flex-col gap-1 ${i < 3 ? "md:border-r border-white/15" : ""}`}>
              <span className="font-inter font-semibold text-[11px] uppercase tracking-[0.2em] text-orange-500">{s.num}</span>
              <span className="font-grotesk font-medium text-[14px] text-white/80">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
