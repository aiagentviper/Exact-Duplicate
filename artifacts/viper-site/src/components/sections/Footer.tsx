import { Link } from "wouter";
import { Mail, Phone, Instagram, Linkedin } from "lucide-react";
import { FaFacebook } from "react-icons/fa";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/flowforge-ai-a7655840a/", icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/flow_forge_ai/", icon: Instagram },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61567281520298", icon: FaFacebook },
];

export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden footer-bg">
      <div className="relative z-10">
        {/* ── Massive headline ── */}
        <div className="footer-divider px-6 py-20 text-center">
          <p className="mb-4 font-inter text-[11px] font-semibold uppercase tracking-[0.25em] footer-subtle-text">
            Ready to go further?
          </p>
          <h2
            className="font-grotesk font-black uppercase leading-none tracking-[-0.03em] footer-heading"
            style={{ fontSize: "clamp(2.8rem, 8vw, 8rem)" }}
          >
            LET'S BUILD
            <br />
            <span className="footer-heading-dim">SOMETHING REAL.</span>
          </h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://calendly.com/malik-designs"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-cta-primary inline-flex items-center gap-2 rounded-full px-8 py-3.5 font-inter text-[13px] font-bold transition-all"
            >
              Book a Free Call →
            </a>
            <Link href="/work">
              <span className="footer-cta-secondary inline-flex cursor-pointer items-center gap-2 rounded-full px-8 py-3.5 font-inter text-[13px] font-semibold backdrop-blur-md transition-all">
                See Our Work
              </span>
            </Link>
          </div>
        </div>

        {/* ── 4-column links row ── */}
        <div className="mx-auto w-full max-w-[1100px] px-6 py-16">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">

            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <span className="mb-4 block font-grotesk text-[20px] font-bold uppercase tracking-[0.12em] footer-text">
                FlowForge AI
              </span>
              <p className="max-w-[200px] font-inter text-[13px] leading-relaxed footer-muted-text">
                We don't just use AI. We weaponize it for your growth.
              </p>
            </div>

            {/* Navigate */}
            <div>
              <h4 className="mb-5 font-inter text-[10px] font-semibold uppercase tracking-[0.22em] footer-label-text">
                Navigate
              </h4>
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <span className="cursor-pointer font-inter text-[13px] footer-link-text transition-colors hover:footer-link-hover">
                      {link.label}
                    </span>
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h4 className="mb-5 font-inter text-[10px] font-semibold uppercase tracking-[0.22em] footer-label-text">
                Contact
              </h4>
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:jimohmalik101@gmail.com"
                  className="flex items-start gap-2 font-inter text-[13px] footer-link-text transition-colors"
                >
                  <Mail size={13} className="mt-0.5 flex-shrink-0" />
                  jimohmalik101@gmail.com
                </a>
                <a
                  href="tel:+2348107311900"
                  className="flex items-center gap-2 font-inter text-[13px] footer-link-text transition-colors"
                >
                  <Phone size={13} className="flex-shrink-0" />
                  +234 810 731 1900
                </a>
                <a
                  href="https://calendly.com/malik-designs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-1.5 font-inter text-[12px] font-semibold footer-schedule-link underline underline-offset-4 transition-colors"
                >
                  Schedule a Call →
                </a>
              </div>
            </div>

            {/* Socials */}
            <div>
              <h4 className="mb-5 font-inter text-[10px] font-semibold uppercase tracking-[0.22em] footer-label-text">
                Socials
              </h4>
              <div className="flex flex-col gap-3">
                {socials.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-inter text-[13px] footer-link-text transition-colors"
                  >
                    <Icon size={13} className="flex-shrink-0" />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="footer-bottom-border px-6 py-5">
          <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center justify-between gap-3 md:flex-row">
            <p className="font-inter text-[11px] footer-bottom-text">
              © 2025 FlowForge AI Agency. All rights reserved.
            </p>
            <p className="font-inter text-[11px] footer-bottom-text">
              Built by AI. Shipped with speed.
            </p>
          </div>
        </div>

        {/* ── Watermark wordmark ── */}
        <div className="pointer-events-none w-full select-none overflow-hidden text-center leading-none">
          <span
            className="font-grotesk font-black uppercase footer-watermark"
            style={{ fontSize: "clamp(5rem, 22vw, 20rem)", letterSpacing: "-0.02em", lineHeight: 0.82 }}
          >
            FlowForge AI
          </span>
        </div>
      </div>
    </footer>
  );
}
