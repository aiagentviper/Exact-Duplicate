import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/90" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-white/[0.015] rounded-full blur-3xl pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 border border-border/50 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground mb-8 bg-card/30 backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Next-Generation AI Agency
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-6 uppercase"
        >
          We Build With AI.
          <br />
          <span className="text-muted-foreground/60">You Scale With Results.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          VIPER is a next-generation AI agency specializing in automation, AI-powered websites,
          apps, vibe coding & AI video production. We don't just follow the future — we ship it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link href="/contact">
            <Button
              size="lg"
              className="rounded-full px-8 text-base gap-2"
              data-testid="hero-cta-primary"
            >
              Start Your AI Project
              <ArrowRight size={16} />
            </Button>
          </Link>
          <Link href="/work">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 text-base border-foreground/20 hover:border-foreground/60"
              data-testid="hero-cta-secondary"
            >
              See Our Work
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="border-y border-border/30 py-4"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground/60 font-medium">
            ✦ Trusted by forward-thinking brands & founders worldwide ✦
          </p>
        </motion.div>
      </div>
    </section>
  );
}
