import { motion } from "framer-motion";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";

const posts = [
  {
    id: 1,
    image: "/portfolio/blog-1.jpg",
    tag: "AI Automation",
    date: "May 10, 2025",
    title: "How AI Agents Are Replacing Entire Business Departments",
    excerpt: "The shift is already happening. Here's how smart founders are staying 10 steps ahead of the curve.",
  },
  {
    id: 2,
    image: "/portfolio/blog-2.jpg",
    tag: "Vibe Coding",
    date: "Apr 22, 2025",
    title: "What Is Vibe Coding — And Why It's Changing How We Build Software",
    excerpt: "You don't need to be a developer anymore. You just need to know how to prompt the right way.",
  },
  {
    id: 3,
    image: "/portfolio/blog-3.jpg",
    tag: "AI Video",
    date: "Mar 30, 2025",
    title: "How We Produced 30 Videos in One Day Using AI Tools",
    excerpt: "A full breakdown of our exact AI video production stack, workflow & tools we use every day.",
  },
  {
    id: 4,
    image: "/portfolio/blog-4.jpg",
    tag: "AI Website",
    date: "Mar 10, 2025",
    title: "Why Every Business Needs an AI-Powered Website in 2025",
    excerpt: "Static websites are dead. Here's what an AI-first website looks like and why it converts better.",
  },
  {
    id: 5,
    image: "/portfolio/blog-5.jpg",
    tag: "AI Strategy",
    date: "Feb 18, 2025",
    title: "The 6 AI Tools We Use on Every Single Project at VIPER",
    excerpt: "Our go-to stack for automation, web, apps, video & everything in between.",
  },
];

export function BlogPage() {
  return (
    <div className="bg-background min-h-screen text-foreground dark">
      <Navigation />
      <main className="pt-24">
        <section className="py-20 container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">VIPER Insights</p>
            <h1 className="font-display text-[clamp(2.8rem,6vw,6rem)] font-extrabold tracking-tight uppercase leading-[0.9] mb-6">
              AI Knowledge.<br />
              <span className="text-muted-foreground/50">Zero Fluff.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Strategies, breakdowns & insights on AI automation, web, apps, video & vibe coding.
            </p>
          </motion.div>
        </section>

        <section className="container mx-auto px-6 pb-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group cursor-pointer"
                data-testid={`blog-post-${post.id}`}
              >
                <div className="aspect-[16/9] overflow-hidden rounded-xl mb-5 border border-border/50 bg-card">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/portfolio/automation-flow.jpg";
                    }}
                  />
                </div>
                <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground mb-3">
                  <span className="bg-card border border-border/50 rounded-full px-3 py-1">{post.tag}</span>
                  <span>{post.date}</span>
                </div>
                <h2 className="text-lg font-bold mb-2 group-hover:text-foreground/70 transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  Read Article →
                </span>
              </motion.article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
