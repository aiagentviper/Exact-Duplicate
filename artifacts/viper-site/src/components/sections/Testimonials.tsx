import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Jordan Miles",
    title: "Founder of LaunchLab",
    quote: "VIPER automated our entire onboarding flow in under a week. What used to take hours now runs on autopilot. Genuinely transformative.",
    stars: 5,
  },
  {
    id: 2,
    name: "Priya Nair",
    title: "Co-Founder, Stackly",
    quote: "They built our AI-powered website in days. It converts better than anything we've had before. The quality-to-speed ratio is unreal.",
    stars: 5,
  },
  {
    id: 3,
    name: "Derek Owens",
    title: "Head of Marketing, BrandWave",
    quote: "The AI video content drove a 3x increase in engagement in the first two weeks alone. This team knows exactly what they're doing.",
    stars: 5,
  },
  {
    id: 4,
    name: "Simone Blake",
    title: "Founder, PulseKit",
    quote: "We had an idea on Monday. VIPER shipped a working AI-powered MVP by Thursday. Absolutely unmatched speed and quality.",
    stars: 5,
  },
  {
    id: 5,
    name: "Kwame Foster",
    title: "CEO, AutoStack",
    quote: "The automation workflows they built save us over 30 hours a week. It paid for itself in the first two weeks.",
    stars: 5,
  },
];

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="w-[320px] flex-shrink-0 bg-card border border-border/40 rounded-[18px] p-7 flex flex-col justify-between hover:border-border/70 transition-colors">
      <div>
        <div className="flex gap-0.5 mb-4">
          {Array.from({ length: t.stars }).map((_, j) => (
            <span key={j} className="text-yellow-400 text-[13px]">★</span>
          ))}
        </div>
        <p className="font-inter text-[14px] leading-relaxed text-foreground/80 mb-6">"{t.quote}"</p>
      </div>
      <div className="flex items-center gap-3 border-t border-border/40 pt-5">
        <div className="w-9 h-9 rounded-full bg-foreground/10 border border-border/50 flex items-center justify-center font-grotesk text-[11px] font-bold text-foreground flex-shrink-0">
          {t.name.split(" ").map(n => n[0]).join("")}
        </div>
        <div>
          <h4 className="font-grotesk font-semibold text-[13px] text-foreground">{t.name}</h4>
          <p className="font-inter text-[11px] text-muted-foreground">{t.title}</p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="border-t border-border/40 overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[360px]">
        <div className="relative overflow-hidden min-h-[260px] rounded-none">
          <img
            src="@assets/imgi_160_PjaPY2S6qP6ii6fCxTJHhHU66SM_1777792400172.png"
            alt="Client Reviews"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/42" />
        </div>

        <div className="py-16 px-10 lg:px-14 flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="font-inter font-semibold text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-3">Reviews</p>
            <h2 className="font-grotesk font-semibold text-[42px] leading-[1.05] tracking-tight mb-4">Client Reviews</h2>
            <p className="font-inter text-[15px] text-muted-foreground max-w-sm leading-relaxed mb-8">
              Real feedback from clients who trusted my design expertise to elevate their brands successfully.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link href="/contact">
                <span className="inline-flex items-center gap-2 bg-foreground text-background font-inter font-semibold text-[13px] rounded-full px-6 py-2.5 hover:bg-foreground/90 transition-colors cursor-pointer">
                  Book a Free Call
                </span>
              </Link>
              <Link href="/services">
                <span className="inline-flex items-center gap-2 border border-border/60 font-inter font-semibold text-[13px] rounded-full px-6 py-2.5 hover:border-foreground/50 transition-colors cursor-pointer">
                  See Services <ArrowRight size={13} />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="py-12 relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, hsl(0 0% 4%), transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, hsl(0 0% 4%), transparent)" }} />

        <div className="flex gap-5 w-max px-6" style={{ animation: "marquee 40s linear infinite" }}>
          {doubled.map((t, i) => (
            <TestimonialCard key={`${t.id}-${i}`} t={t} />
          ))}
        </div>
      </div>

      <div className="border-t border-border/40">
        <div className="grid grid-cols-3">
          {[
            { val: "180+", label: "design projects completed." },
            { val: "96%", label: "Client satisfaction rate." },
            { val: "15+", label: "Years of experience." },
          ].map((s, i) => (
            <motion.div
              key={s.val}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`py-10 px-8 bg-card text-center ${i < 2 ? "border-r border-border/40" : ""}`}
            >
              <div className="font-grotesk font-bold text-[42px] leading-none tracking-tight mb-2">{s.val}</div>
              <div className="font-inter text-[13px] text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
