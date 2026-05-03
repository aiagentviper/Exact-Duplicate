import { Link } from "wouter";
import { Mail, Phone, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "Twitter / X", href: "https://twitter.com", icon: Twitter },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "YouTube", href: "https://youtube.com", icon: Youtube },
];

export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-black">
      {/* ── Grayscale image overlay ── */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src="/photo-reviews.png"
          alt=""
          className="h-full w-full object-cover object-center grayscale opacity-[0.06] brightness-50 contrast-[1.3]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/90" />
      </div>

      <div className="relative z-10">
        {/* ── Massive headline ── */}
        <div className="border-b border-white/10 px-6 py-20 text-center">
          <p className="mb-4 font-inter text-[11px] font-semibold uppercase tracking-[0.25em] text-white/40">
            Ready to go further?
          </p>
          <h2
            className="font-grotesk font-black uppercase leading-none tracking-[-0.03em] text-white"
            style={{ fontSize: "clamp(2.8rem, 8vw, 8rem)" }}
          >
            LET'S BUILD
            <br />
            <span className="text-white/25">SOMETHING REAL.</span>
          </h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://calendly.com/malik-designs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 font-inter text-[13px] font-bold text-black transition-all hover:bg-white/90"
            >
              Book a Free Call →
            </a>
            <Link href="/work">
              <span className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 font-inter text-[13px] font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10">
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
              <span className="mb-4 block font-grotesk text-[20px] font-bold uppercase tracking-[0.12em] text-white">
                VIPER
              </span>
              <p className="max-w-[200px] font-inter text-[13px] leading-relaxed text-white/40">
                We don't just use AI. We weaponize it for your growth.
              </p>
            </div>

            {/* Navigate */}
            <div>
              <h4 className="mb-5 font-inter text-[10px] font-semibold uppercase tracking-[0.22em] text-white/30">
                Navigate
              </h4>
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <span className="cursor-pointer font-inter text-[13px] text-white/50 transition-colors hover:text-white">
                      {link.label}
                    </span>
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h4 className="mb-5 font-inter text-[10px] font-semibold uppercase tracking-[0.22em] text-white/30">
                Contact
              </h4>
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:jimohmalik101@gmail.com"
                  className="flex items-start gap-2 font-inter text-[13px] text-white/50 transition-colors hover:text-white"
                >
                  <Mail size={13} className="mt-0.5 flex-shrink-0" />
                  jimohmalik101@gmail.com
                </a>
                <a
                  href="tel:+2348107311900"
                  className="flex items-center gap-2 font-inter text-[13px] text-white/50 transition-colors hover:text-white"
                >
                  <Phone size={13} className="flex-shrink-0" />
                  +234 810 731 1900
                </a>
                <a
                  href="https://calendly.com/malik-designs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-1.5 font-inter text-[12px] font-semibold text-white/60 underline underline-offset-4 transition-colors hover:text-white"
                >
                  Schedule a Call →
                </a>
              </div>
            </div>

            {/* Socials */}
            <div>
              <h4 className="mb-5 font-inter text-[10px] font-semibold uppercase tracking-[0.22em] text-white/30">
                Socials
              </h4>
              <div className="flex flex-col gap-3">
                {socials.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-inter text-[13px] text-white/50 transition-colors hover:text-white"
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
        <div className="border-t border-white/10 px-6 py-5">
          <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center justify-between gap-3 md:flex-row">
            <p className="font-inter text-[11px] text-white/25">
              © 2025 VIPER AI Agency. All rights reserved.
            </p>
            <p className="font-inter text-[11px] text-white/25">
              Built with AI. Shipped with speed.
            </p>
          </div>
        </div>

        {/* ── Watermark wordmark ── */}
        <div className="pointer-events-none w-full select-none overflow-hidden text-center leading-none">
          <span
            className="font-grotesk font-black uppercase text-white/[0.03]"
            style={{ fontSize: "clamp(5rem, 22vw, 20rem)", letterSpacing: "-0.02em", lineHeight: 0.82 }}
          >
            VIPER
          </span>
        </div>
      </div>
    </footer>
  );
}
