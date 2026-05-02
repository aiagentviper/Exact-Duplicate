import { motion } from "framer-motion";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Link } from "wouter";
import { ArrowRight, Zap, Globe, Smartphone, Video } from "lucide-react";

const skills = [
  { icon: <Zap size={16} />, label: "AI Automation" },
  { icon: <Globe size={16} />, label: "AI Websites" },
  { icon: <Smartphone size={16} />, label: "AI Apps" },
  { icon: <Video size={16} />, label: "AI Video" },
];

export function AboutPage() {
  return (
    <div className="bg-background min-h-screen text-foreground dark">
      <Navigation />
      <main className="pt-20">

        {/* Hero split */}
        <section className="min-h-[90vh] flex items-center">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Left — text */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <span className="font-inter font-semibold text-[11px] uppercase tracking-[0.2em] text-green-400 block mb-6">
                  About VIPER
                </span>
                <h1 className="font-grotesk font-bold text-[60px] leading-[1.0] tracking-[-0.02em] mb-6">
                  The AI Agency<br />
                  <span className="text-foreground/40">Built for Speed.</span>
                </h1>
                <p className="font-inter text-[16px] leading-relaxed text-muted-foreground mb-6 max-w-md">
                  VIPER is a next-generation AI agency founded on one belief: every business deserves to operate at machine speed. We build the systems, sites, apps, and content that make that possible.
                </p>
                <p className="font-inter text-[15px] leading-relaxed text-muted-foreground mb-10 max-w-md">
                  Our approach is simple — use the best AI tools available, move fast, deliver real results. No bloated retainers, no unnecessary fluff. Just AI-powered work that scales.
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  {skills.map((s) => (
                    <span key={s.label} className="inline-flex items-center gap-2 border border-border/50 rounded-full px-4 py-2 font-inter text-[13px] text-muted-foreground hover:border-foreground/40 hover:text-foreground transition-colors">
                      {s.icon}
                      {s.label}
                    </span>
                  ))}
                </div>

                <Link href="/contact">
                  <span className="inline-flex items-center gap-2 bg-foreground text-background font-inter font-semibold text-[13px] rounded-full px-7 py-3 hover:bg-foreground/90 transition-colors cursor-pointer">
                    Work With Us <ArrowRight size={14} />
                  </span>
                </Link>
              </motion.div>

              {/* Right — profile photo */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-card border border-border/30 max-w-md mx-auto">
                  <img
                    src="/profile-clean.png"
                    alt="VIPER AI Agency — Founder"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />

                  {/* Status card */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-card/85 backdrop-blur-md rounded-xl p-5 border border-border/50">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span className="font-inter text-[11px] uppercase tracking-[0.2em] text-green-400 font-semibold">
                          Available for Projects
                        </span>
                      </div>
                      <p className="font-grotesk font-semibold text-[18px] text-foreground">hello@viperaiagency.com</p>
                    </div>
                  </div>
                </div>

                {/* Floating stat */}
                <div className="absolute -top-4 -right-4 bg-card border border-border/50 rounded-2xl p-5 shadow-xl hidden lg:block">
                  <div className="font-grotesk font-bold text-[36px] leading-none mb-1">50+</div>
                  <div className="font-inter text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">Projects Shipped</div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Stats row */}
        <section className="border-t border-border/40 py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
              {[
                { val: "50+", label: "Projects Shipped" },
                { val: "10x", label: "Average ROI" },
                { val: "100%", label: "AI-Built" },
                { val: "24hr", label: "MVP Turnaround" },
              ].map((s, i) => (
                <motion.div
                  key={s.val}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`py-10 px-6 ${i < 3 ? "md:border-r border-border/40" : ""} ${i > 1 ? "border-t md:border-t-0 border-border/40" : ""}`}
                >
                  <div className="font-grotesk font-bold text-[48px] leading-none tracking-tight mb-2">{s.val}</div>
                  <div className="font-inter font-semibold text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
