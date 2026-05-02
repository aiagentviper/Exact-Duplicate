import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Navigation() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="text-2xl font-black tracking-widest uppercase">
          VIPER
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#portfolio" className="hover:text-foreground transition-colors">Portfolio</a>
          <a href="#services" className="hover:text-foreground transition-colors">Services</a>
          <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
          <a href="#blog" className="hover:text-foreground transition-colors">Blog</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </nav>
        <Button variant="outline" className="rounded-full px-6" asChild>
          <a href="#contact">Hire Me</a>
        </Button>
      </div>
    </motion.header>
  );
}
