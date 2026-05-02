import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CtaBand() {
  return (
    <section className="py-32 bg-black border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_100%)]" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6 text-white">
            Every Pixel Clicked.
          </h2>
          <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto mb-10 font-light">
            Obsessing over every detail so your brand stands out.
          </p>
          <Button size="lg" className="rounded-full px-10 py-6 text-lg bg-white text-black hover:bg-white/90">
            Start a Project &rarr;
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
