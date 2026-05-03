import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Jordan Miles",
    title: "Founder of LaunchLab",
    quote: "VIPER automated our entire onboarding flow in under a week. What used to take hours now runs on autopilot. Genuinely transformative.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop",
  },
  {
    id: 2,
    name: "Priya Nair",
    title: "Co-Founder, Stackly",
    quote: "They built our AI-powered website in days. It converts better than anything we've had before. The quality-to-speed ratio is unreal.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop",
  },
  {
    id: 3,
    name: "Derek Owens",
    title: "Head of Marketing, BrandWave",
    quote: "The AI video content drove a 3x increase in engagement in the first two weeks alone. This team knows exactly what they're doing.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
  },
  {
    id: 4,
    name: "Simone Blake",
    title: "Founder, PulseKit",
    quote: "We had an idea on Monday. VIPER shipped a working AI-powered MVP by Thursday. Absolutely unmatched speed and quality.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    id: 5,
    name: "Kwame Foster",
    title: "CEO, AutoStack",
    quote: "The automation workflows they built save us over 30 hours a week. It paid for itself in the first two weeks.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
  },
];

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="w-[320px] flex-shrink-0 rounded-[18px] border border-border/40 bg-zinc-900/50 p-7 transition-colors hover:border-border/70">
      <div>
        <div className="mb-4 flex gap-0.5">
          {Array.from({ length: t.stars }).map((_, j) => <span key={j} className="text-[13px] text-yellow-400">★</span>)}
        </div>
        <p className="mb-6 font-inter text-[14px] leading-relaxed text-foreground/80">"{t.quote}"</p>
      </div>
      <div className="flex items-center gap-3 border-t border-border/40 pt-5">
        <img src={t.avatar} alt={t.name} loading="lazy" className="h-9 w-9 flex-shrink-0 rounded-full object-cover object-center border border-white/20" />
        <div>
          <h4 className="font-grotesk text-[13px] font-semibold text-foreground">{t.name}</h4>
          <p className="font-inter text-[11px] text-muted-foreground">{t.title}</p>
        </div>
      </div>
    </div>
  );
}

function CountUp({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const duration = 1400;
    const steps = 40;
    const increment = end / steps;
    let current = 0;
    const timer = window.setInterval(() => {
      current += increment;
      if (current >= end) {
        setValue(end);
        window.clearInterval(timer);
      } else {
        setValue(Math.round(current));
      }
    }, duration / steps);
    return () => window.clearInterval(timer);
  }, [end]);
  return <>{value}{suffix}</>;
}

export function Testimonials() {
  const doubled = [...testimonials, ...testimonials];
  return (
    <section className="w-full border-t border-border/40 bg-black overflow-hidden py-32">
      <div className="mx-auto w-full max-w-[1100px] px-6">
        <div className="grid w-full min-h-[420px] lg:grid-cols-2">
          <div className="relative min-h-[320px] overflow-hidden rounded-2xl">
            <img src="/photo-reviews.png" alt="Client reviews for Viper AI Agency" loading="lazy" className="h-full w-full rounded-2xl object-cover object-center grayscale contrast-[1.1] brightness-[0.82]" />
            <div className="absolute inset-0 rounded-2xl bg-black/35" />
          </div>
          <div className="flex flex-col justify-center px-6 py-16 lg:px-10 xl:px-14">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="mb-3 font-inter text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">Reviews</p>
              <h2 className="mb-4 font-grotesk text-[46px] font-semibold leading-[1.02] tracking-tight">Client Reviews</h2>
              <p className="mb-8 max-w-[340px] font-inter text-[14px] leading-relaxed text-muted-foreground">Real results from clients who trusted VIPER to build their AI systems, sites and automations.</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact"><span aria-label="Book a Free Call" className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-white px-5 py-2.5 font-inter text-[13px] font-semibold text-black transition-colors hover:bg-white/90">Book a Free Call</span></Link>
                <Link href="/services"><span aria-label="See Services" className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 font-inter text-[13px] font-semibold text-white/70 transition-colors hover:border-white/50 hover:text-white">See Services <ArrowRight size={13} /></span></Link>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="relative w-full overflow-hidden py-10">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16" style={{ background: 'linear-gradient(to right, hsl(0 0% 4%), transparent)' }} />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16" style={{ background: 'linear-gradient(to left, hsl(0 0% 4%), transparent)' }} />
          <div className="flex w-max gap-4 px-6" style={{ animation: 'marquee 40s linear infinite' }}>
            {doubled.map((t, i) => <TestimonialCard key={`${t.id}-${i}`} t={t} />)}
          </div>
        </div>
        <div className="border-t border-border/40">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {[
              { val: 180, label: "projects completed", suffix: "+" },
              { val: 96, label: "client satisfaction", suffix: "%" },
              { val: 15, label: "years of experience", suffix: "+" },
            ].map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className={`bg-zinc-900/50 py-10 px-8 text-center ${i < 2 ? 'border-r border-border/40' : ''}`}>
                <div className="mb-2 font-grotesk text-[42px] font-bold leading-none tracking-tight text-foreground"><CountUp end={s.val} suffix={s.suffix} /></div>
                <div className="font-inter text-[13px] text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
