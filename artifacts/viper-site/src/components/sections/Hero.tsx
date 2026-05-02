import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Instagram, Twitter, Linkedin } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-end pt-20 pb-0 overflow-hidden relative">
      <div className="w-full container mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_480px] xl:grid-cols-[1fr_560px] gap-0 items-end min-h-[calc(100vh-80px)]">

          {/* Left — text content */}
          <div className="flex flex-col justify-center pb-16 lg:pb-24 pr-0 lg:pr-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-medium">
                Next-Gen AI Agency
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="font-display text-[clamp(3rem,5.5vw,5.5rem)] font-extrabold leading-[0.9] tracking-tight mb-8 uppercase"
            >
              We Build<br />
              <span className="text-muted-foreground/50">With AI.</span><br />
              You Scale<br />
              <span className="text-muted-foreground/50">With Results.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-muted-foreground max-w-sm leading-relaxed mb-10 font-body"
            >
              VIPER is a next-generation AI agency specialising in automation, AI-powered websites,
              apps, vibe coding & AI video production. We don't just follow the future — we ship it.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="flex flex-wrap items-center gap-3 mb-12"
            >
              <Link href="/contact">
                <Button size="lg" className="rounded-full px-7 gap-2 text-sm font-semibold">
                  Start Your Project <ArrowRight size={15} />
                </Button>
              </Link>
              <Link href="/work">
                <Button size="lg" variant="outline" className="rounded-full px-7 text-sm border-border/60 hover:border-foreground/50">
                  See Our Work
                </Button>
              </Link>
            </motion.div>

            {/* Inline stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex items-center gap-8 border-t border-border/40 pt-8"
            >
              {[
                { val: "50+", label: "Projects Shipped" },
                { val: "10x", label: "Avg. Client ROI" },
                { val: "100%", label: "Built With AI" },
              ].map((s) => (
                <div key={s.val}>
                  <div className="font-display text-3xl font-extrabold leading-none mb-0.5">{s.val}</div>
                  <div className="text-xs text-muted-foreground font-body uppercase tracking-widest">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — large profile photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative self-end hidden lg:flex flex-col"
          >
            {/* Floating tag card */}
            <div className="absolute top-10 -left-6 z-10 bg-card border border-border/60 rounded-2xl px-5 py-4 backdrop-blur-sm shadow-xl">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1 font-body">Currently</p>
              <p className="text-sm font-semibold text-foreground font-body">Accepting Projects</p>
              <span className="inline-block mt-1.5 w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            </div>

            {/* Floating social links */}
            <div className="absolute bottom-24 -left-5 z-10 flex flex-col gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-card border border-border/60 flex items-center justify-center hover:bg-foreground/10 transition-colors">
                <Instagram size={14} className="text-muted-foreground" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-card border border-border/60 flex items-center justify-center hover:bg-foreground/10 transition-colors">
                <Twitter size={14} className="text-muted-foreground" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-card border border-border/60 flex items-center justify-center hover:bg-foreground/10 transition-colors">
                <Linkedin size={14} className="text-muted-foreground" />
              </a>
            </div>

            <div className="relative w-full aspect-[3/4] max-h-[85vh] rounded-t-[2.5rem] overflow-hidden bg-card border-x border-t border-border/30">
              <img
                src="/profile.png"
                alt="VIPER AI Agency founder"
                className="w-full h-full object-cover object-top"
                style={{ imageRendering: "auto" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
