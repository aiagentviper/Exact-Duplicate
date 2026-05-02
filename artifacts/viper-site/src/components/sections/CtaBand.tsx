import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function CtaBand() {
  return (
    <section className="py-32 bg-black border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04)_0%,transparent_70%)]" />
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6 text-white leading-[0.95]">
            The Future Runs on AI.<br />
            <span className="text-white/50">So Should Your Business.</span>
          </h2>
          <p className="text-xl text-white/50 max-w-xl mx-auto mb-10 font-light">
            Let's automate, build & scale together.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="rounded-full px-10 py-6 text-base bg-white text-black hover:bg-white/90"
              data-testid="cta-band-button"
            >
              Start Your AI Project →
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
