import { Link } from "wouter";
import { Mail, MapPin } from "lucide-react";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="relative bg-background border-t border-border/40 pt-20 pb-0 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <span className="font-grotesk font-bold text-[20px] tracking-[0.12em] uppercase block mb-4">VIPER</span>
            <p className="font-inter text-[15px] text-muted-foreground leading-relaxed max-w-xs">
              We don't just use AI. We weaponize it for your growth.
            </p>
          </div>
          <div>
            <h4 className="font-inter font-semibold text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-5">Navigate</h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span className="font-inter text-[14px] text-muted-foreground hover:text-foreground transition-colors cursor-pointer">{link.label}</span>
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h4 className="font-inter font-semibold text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-5">Contact</h4>
            <div className="space-y-3">
              <a href="mailto:hello@viperaiagency.com" className="flex items-center gap-2 font-inter text-[14px] text-muted-foreground hover:text-foreground transition-colors">
                <Mail size={14} />hello@viperaiagency.com
              </a>
              <div className="flex items-center gap-2 font-inter text-[14px] text-muted-foreground">
                <MapPin size={14} />Remote-First. Worldwide.
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/40 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-inter text-[12px] text-muted-foreground">© 2025 VIPER AI Agency. All rights reserved.</p>
          <p className="font-inter text-[12px] text-muted-foreground">Built with AI. Shipped with speed.</p>
        </div>
      </div>

      <div className="w-full text-center overflow-hidden leading-none select-none pointer-events-none mt-0">
        <span className="font-grotesk font-bold uppercase text-white/[0.04]" style={{ fontSize: "clamp(5rem, 20vw, 18rem)", letterSpacing: "-0.02em", lineHeight: 0.85 }}>
          VIPER
        </span>
      </div>
    </footer>
  );
}
