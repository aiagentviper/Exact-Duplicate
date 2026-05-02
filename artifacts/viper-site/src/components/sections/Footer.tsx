import { Link } from "wouter";
import { Mail, MapPin } from "lucide-react";

const footerLinks = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="relative bg-background border-t border-border/50 pt-20 pb-10 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0">
        <span className="text-[15vw] font-black uppercase text-white/[0.02] tracking-tighter leading-none">
          VIPER
        </span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <span className="text-2xl font-black tracking-[0.2em] uppercase block mb-3">VIPER</span>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              We don't just use AI. We weaponize it for your growth.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">Navigation</h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">Contact</h4>
            <div className="space-y-3">
              <a href="mailto:hello@viperaiagency.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail size={14} />
                hello@viperaiagency.com
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={14} />
                Remote-First. Worldwide.
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2025 VIPER AI Agency. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with AI. Shipped with speed.
          </p>
        </div>
      </div>
    </footer>
  );
}
