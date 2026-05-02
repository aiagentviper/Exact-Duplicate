import { SiDribbble, SiBehance, SiX } from "react-icons/si";
import { Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-background border-t border-border/50 pt-20 pb-10 overflow-hidden">
      
      {/* Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0">
        <h2 className="text-[15vw] font-black uppercase text-white/[0.02] tracking-tighter">
          VIPER
        </h2>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="text-sm text-muted-foreground">
            &copy; 2025 Clivelle. All rights reserved.
          </div>

          <nav className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <a href="#portfolio" className="hover:text-foreground transition-colors">Portfolio</a>
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-6 text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors"><SiDribbble size={20} /></a>
            <a href="#" className="hover:text-foreground transition-colors"><SiBehance size={20} /></a>
            <a href="#" className="hover:text-foreground transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-foreground transition-colors"><SiX size={20} /></a>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
