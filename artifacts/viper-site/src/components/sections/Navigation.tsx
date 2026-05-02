import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border/40" : "bg-transparent"
      }`}
    >
      <div className="w-full px-6 md:px-10 h-16 flex items-center justify-between">
        <Link href="/">
          <span className="font-grotesk font-bold text-[18px] tracking-[0.15em] uppercase text-foreground cursor-pointer" data-testid="nav-logo">
            VIPER
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <span
                className={`font-inter text-[13px] font-medium transition-colors cursor-pointer ${
                  location === link.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
                data-testid={`nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/contact">
            <span
              className="font-inter font-semibold text-[13px] bg-foreground text-background rounded-full px-5 py-2 hover:bg-foreground/90 transition-colors cursor-pointer"
              data-testid="nav-cta"
            >
              Get in touch →
            </span>
          </Link>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          data-testid="nav-mobile-toggle"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-md border-b border-border/40 px-6 py-6 flex flex-col gap-5"
        >
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <span className={`font-inter text-[15px] font-medium cursor-pointer ${location === link.href ? "text-foreground" : "text-muted-foreground"}`}>
                {link.label}
              </span>
            </Link>
          ))}
          <Link href="/contact">
            <span className="font-inter font-semibold text-[13px] bg-foreground text-background rounded-full px-5 py-2 w-fit cursor-pointer">
              Get in touch →
            </span>
          </Link>
        </motion.div>
      )}
    </motion.header>
  );
}
