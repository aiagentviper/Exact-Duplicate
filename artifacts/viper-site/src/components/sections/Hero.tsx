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
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden bg-background flex flex-col">

      {/* Background — deep dark gradient with subtle glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_-10%,rgba(255,255,255,0.04)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_50%_at_20%_80%,rgba(255,255,255,0.03)_0%,transparent_60%)]" />

      {/* Bottom content — fills the lower portion */}
      <div className="relative z-10 mt-auto px-6 md:px-10 pb-0">

        {/* Main text row — left heading + right tagline */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">

          {/* Left — large heading */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[11px] font-inter font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Next-Gen AI Agency
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-grotesk font-bold text-[60px] leading-[1.0] tracking-[-0.02em] text-foreground"
            >
              We Build<br />
              <span className="text-foreground/40">With AI.</span>
            </motion.h1>
          </div>

          {/* Right — tagline + description + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="lg:max-w-sm pb-1"
          >
            <p className="font-grotesk font-semibold text-[22px] leading-[1.25] tracking-tight text-foreground mb-3">
              Great AI should scale your business invisibly.
            </p>
            <p className="font-inter text-[15px] leading-relaxed text-muted-foreground mb-6">
              VIPER builds automation, AI-powered websites, apps & video that work around the clock — so you don't have to.
            </p>
            <div className="flex items-center gap-3">
              <Link href="/contact">
                <span className="inline-flex items-center gap-2 bg-foreground text-background font-inter font-semibold text-[13px] rounded-full px-6 py-2.5 hover:bg-foreground/90 transition-colors cursor-pointer">
                  Start Your Project <ArrowRight size={14} />
                </span>
              </Link>
              <Link href="/work">
                <span className="inline-flex items-center gap-2 font-inter font-medium text-[13px] text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                  See Work <ArrowRight size={13} />
                </span>
              </Link>
            </div>
          </motion.div>

        </div>

        {/* Bottom bar — numbered services */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="border-t border-border/40 grid grid-cols-2 md:grid-cols-4"
        >
          {services.map((s, i) => (
            <div
              key={s.num}
              className={`py-5 px-4 flex flex-col gap-1 ${i < 3 ? "md:border-r border-border/40" : ""}`}
            >
              <span className="font-inter font-semibold text-[11px] uppercase tracking-[0.2em] text-green-400">{s.num}</span>
              <span className="font-grotesk font-medium text-[14px] text-foreground/80">{s.label}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
