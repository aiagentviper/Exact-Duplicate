import { motion } from "framer-motion";
import { Link } from "wouter";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { ArrowRight } from "lucide-react";

const featured = {
  id: 1,
  image: "/portfolio/automation-flow.jpg",
  tag: "AI Automation",
  date: "May 10, 2025",
  title: "How AI Agents Are Replacing Entire Business Departments",
  excerpt: "The shift is already happening. We break down exactly how smart founders are automating sales, marketing, onboarding and customer support — and staying 10 steps ahead of the curve.",
};

const posts = [
  {
    id: 2,
    image: "/portfolio/watch-website.jpg",
    tag: "Vibe Coding",
    date: "Apr 22, 2025",
    title: "What Is Vibe Coding — And Why It's Changing How We Build Software",
    excerpt: "You don't need to be a developer anymore. You just need to know how to prompt the right way.",
  },
  {
    id: 3,
    image: "/portfolio/car-rental-site.jpg",
    tag: "AI Video",
    date: "Mar 30, 2025",
    title: "How We Produced 30 Videos in One Day Using AI Tools",
    excerpt: "A full breakdown of our exact AI video production stack, workflow & tools we use every day.",
  },
  {
    id: 4,
    image: "/portfolio/crypto-dashboard.jpg",
    tag: "AI Website",
    date: "Mar 10, 2025",
    title: "Why Every Business Needs an AI-Powered Website in 2025",
    excerpt: "Static websites are dead. Here's what an AI-first website looks like and why it converts better.",
  },
  {
    id: 5,
    image: "/portfolio/smart-home-site.jpg",
    tag: "AI Strategy",
    date: "Feb 18, 2025",
    title: "The 6 AI Tools We Use on Every Single Project at VIPER",
    excerpt: "Our go-to stack for automation, web, apps, video & everything in between.",
  },
  {
    id: 6,
    image: "/portfolio/omega-website.jpg",
    tag: "AI Automation",
    date: "Jan 25, 2025",
    title: "5 Automation Workflows Every Business Should Have Running Right Now",
    excerpt: "From lead capture to client onboarding — these are the automations that free up 20+ hours a week.",
  },
  {
    id: 7,
    image: "/portfolio/email-sequences.jpg",
    tag: "AI Apps",
    date: "Jan 5, 2025",
    title: "From Idea to App in 48 Hours: Our AI-Powered Development Process",
    excerpt: "We break down exactly how we scope, design, build and ship AI-powered apps faster than anyone else.",
  },
];

const categories = ["All", "AI Automation", "AI Website", "AI Apps", "AI Video", "Vibe Coding", "AI Strategy"];

const insights = [
  { stat: "10x", label: "Faster than traditional development" },
  { stat: "100%", label: "AI-built & AI-optimised" },
  { stat: "50+", label: "Projects shipped and live" },
];

export function BlogPage() {
  return (
    <div className="bg-black min-h-screen text-foreground dark">
      <Navigation />
      <main className="pt-24">

        {/* ── Page header ── */}
        <section className="py-20 container mx-auto px-6 text-center border-b border-border/40">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="font-inter font-semibold text-[11px] uppercase tracking-[0.2em] text-orange-500 mb-4">VIPER Insights</p>
            <h1 className="font-grotesk font-bold text-[60px] leading-[1.0] tracking-[-0.02em] mb-6">
              AI Knowledge.<br /><span className="text-muted-foreground/40">Zero Fluff.</span>
            </h1>
            <p className="font-inter text-[16px] text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Strategies, breakdowns & insights on AI automation, web, apps, video & vibe coding — written by practitioners, not theorists.
            </p>
          </motion.div>
        </section>

        {/* ── Featured post ── */}
        <section className="py-16 border-b border-border/40">
          <div className="container mx-auto px-6">
            <p className="font-inter font-semibold text-[11px] uppercase tracking-[0.2em] text-orange-500 mb-8">Featured Article</p>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-10 items-center group cursor-pointer">
              <div className="aspect-[16/10] overflow-hidden rounded-2xl border border-border/40 bg-card">
                <img src={featured.image} alt={featured.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => { (e.target as HTMLImageElement).src = "/portfolio/automation-flow.jpg"; }} />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-inter font-semibold text-[11px] uppercase tracking-[0.2em] border border-border/60 rounded-full px-3 py-1 text-muted-foreground">{featured.tag}</span>
                  <span className="font-inter text-[12px] text-muted-foreground">{featured.date}</span>
                </div>
                <h2 className="font-grotesk font-bold text-[36px] leading-[1.1] tracking-tight mb-4 group-hover:text-foreground/80 transition-colors">{featured.title}</h2>
                <p className="font-inter text-[15px] leading-relaxed text-muted-foreground mb-8">{featured.excerpt}</p>
                <span className="inline-flex items-center gap-2 font-inter font-semibold text-[13px] border border-border/60 rounded-full px-6 py-2.5 hover:border-foreground/50 transition-colors">
                  Read Article <ArrowRight size={13} />
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Categories + Grid ── */}
        <section className="py-16 border-b border-border/40">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap gap-2 mb-12">
              {categories.map((c) => (
                <span key={c} className="font-inter font-medium text-[12px] px-4 py-1.5 rounded-full border border-border/50 text-muted-foreground hover:border-foreground/40 hover:text-foreground transition-colors cursor-pointer">
                  {c}
                </span>
              ))}
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, i) => (
                <motion.article key={post.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group cursor-pointer">
                  <div className="aspect-[16/10] overflow-hidden rounded-2xl mb-5 border border-border/40 bg-card">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => { (e.target as HTMLImageElement).src = "/portfolio/automation-flow.jpg"; }} />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-inter font-semibold text-[11px] uppercase tracking-[0.15em] border border-border/50 rounded-full px-3 py-1 text-muted-foreground">{post.tag}</span>
                    <span className="font-inter text-[12px] text-muted-foreground">{post.date}</span>
                  </div>
                  <h2 className="font-grotesk font-semibold text-[18px] leading-[1.25] mb-2 group-hover:text-foreground/70 transition-colors">{post.title}</h2>
                  <p className="font-inter text-[14px] text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                  <span className="font-inter font-medium text-[13px] text-muted-foreground group-hover:text-foreground transition-colors flex items-center gap-1">
                    Read Article <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Insights stats ── */}
        <section className="border-b border-border/40">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3">
              {insights.map((s, i) => (
                <motion.div key={s.stat} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`py-14 px-6 ${i < 2 ? "md:border-r border-border/40" : ""} ${i > 0 ? "border-t md:border-t-0 border-border/40" : ""}`}>
                  <div className="font-grotesk font-bold text-[60px] leading-none tracking-tight mb-2">{s.stat}</div>
                  <div className="font-inter text-[15px] text-muted-foreground">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Newsletter / CTA ── */}
        <section className="py-28 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="font-inter font-semibold text-[11px] uppercase tracking-[0.2em] text-orange-500 mb-4">Stay Ahead</p>
            <h2 className="font-grotesk font-bold text-[48px] leading-[1.0] tracking-tight mb-6">
              Want More AI<br /><span className="text-foreground/40">Insights Like These?</span>
            </h2>
            <p className="font-inter text-[16px] text-muted-foreground max-w-md mx-auto mb-8 leading-relaxed">
              Follow us for weekly breakdowns on AI, automation, and how to build faster than everyone else.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/contact">
                <span className="inline-flex items-center gap-2 bg-orange-500 text-white font-inter font-semibold text-[13px] rounded-full px-8 py-3.5 hover:bg-orange-400 transition-colors cursor-pointer">
                  Work With Us <ArrowRight size={14} />
                </span>
              </Link>
              <a href="https://calendly.com/malik-designs" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-inter font-semibold text-[13px] border border-border/60 rounded-full px-8 py-3.5 hover:border-foreground/50 transition-colors">
                Book a Free Call <ArrowRight size={13} />
              </a>
            </div>
          </motion.div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
