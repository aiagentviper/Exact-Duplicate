import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SiDribbble, SiBehance, SiX } from "react-icons/si";
import { Linkedin } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-40 pb-20 min-h-[90vh] flex items-center container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative aspect-[3/4] w-full max-w-md mx-auto md:mx-0 overflow-hidden rounded-2xl"
        >
          <img
            src="/images/profile.png"
            alt="Clivelle"
            className="object-cover w-full h-full grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col items-start"
        >
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-4">
            Clivelle
          </h1>
          <h2 className="text-xl md:text-2xl font-light text-muted-foreground mb-6">
            Digital Designer & Creative Director
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed">
            I craft digital experiences that elevate brands and engage audiences. 
            Obsessed with typography, grids, and functional minimalism.
          </p>
          <div className="flex items-center gap-4 mb-12">
            <Button size="lg" className="rounded-full px-8 text-base" asChild>
              <a href="#contact">Hire Me &rarr;</a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 text-base" asChild>
              <a href="#portfolio">View Work</a>
            </Button>
          </div>
          <div className="flex items-center gap-6 text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors"><SiDribbble size={24} /></a>
            <a href="#" className="hover:text-foreground transition-colors"><SiBehance size={24} /></a>
            <a href="#" className="hover:text-foreground transition-colors"><Linkedin size={24} /></a>
            <a href="#" className="hover:text-foreground transition-colors"><SiX size={24} /></a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
