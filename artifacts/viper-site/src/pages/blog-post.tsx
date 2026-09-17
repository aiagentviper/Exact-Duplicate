import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Footer } from "@/components/sections/Footer";
import { Navigation } from "@/components/sections/Navigation";
import { faqById, faqItems, lastUpdated } from "@/data/faq";

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? faqById[slug] : undefined;

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-foreground">
        <Navigation />
        <main className="mx-auto flex min-h-[70vh] max-w-[700px] flex-col items-start justify-center px-6 pt-24">
          <p className="mb-4 font-inter text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">Article not found</p>
          <h1 className="mb-6 font-grotesk text-5xl font-bold">That article does not exist.</h1>
          <Link href="/blog">
            <span className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border/60 px-6 py-3 font-inter text-[13px] font-semibold">
              <ArrowLeft size={14} /> Back to the blog
            </span>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const related = faqItems.filter((item) => item.category === post.category && item.id !== post.id).slice(0, 3);
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.question,
    dateModified: "2026-09-17",
    articleSection: post.category,
    description: post.excerpt,
    author: { "@type": "Organization", name: "FlowForge AI" },
  };

  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      <main className="pt-24">
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <article className="mx-auto w-full max-w-[850px] px-6 py-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link href="/blog">
              <span className="mb-10 inline-flex cursor-pointer items-center gap-2 font-inter text-[12px] text-muted-foreground transition-colors hover:text-foreground">
                <ArrowLeft size={13} /> All articles
              </span>
            </Link>
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-border/60 px-3 py-1 font-inter text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">{post.category}</span>
              <span className="font-inter text-[12px] text-muted-foreground">Last updated: {lastUpdated}</span>
            </div>
            <h1 className="max-w-[780px] font-grotesk text-[clamp(2.4rem,6vw,4.8rem)] font-bold leading-[1.02] tracking-[-0.03em]">{post.question}</h1>
            <p className="mt-8 max-w-[700px] font-inter text-[17px] leading-relaxed text-muted-foreground">{post.excerpt}</p>
          </motion.div>

          <div className="mt-14 border-t border-border/40 pt-10">
            <p className="mb-5 font-inter text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">The short answer</p>
            <p className="font-inter text-[17px] leading-[1.9] text-foreground/90">{post.answer}</p>
            {post.comparison && (
              <div className="mt-10 overflow-x-auto rounded-xl border border-border/50">
                <table className="w-full min-w-[540px] text-left font-inter text-[13px]">
                  <thead className="border-b border-border/50 bg-card/50 text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                    <tr>
                      <th className="px-4 py-3">Option</th>
                      <th className="px-4 py-3">Typical price</th>
                      <th className="px-4 py-3">Best for</th>
                    </tr>
                  </thead>
                  <tbody>
                    {post.comparison.map((row) => (
                      <tr key={row.name} className="border-b border-border/30 last:border-0">
                        <td className="px-4 py-3 font-medium text-foreground">{row.name}</td>
                        <td className="px-4 py-3 text-muted-foreground">{row.price}</td>
                        <td className="px-4 py-3 text-muted-foreground">{row.bestFor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <div className="mt-14 rounded-2xl border border-border/50 bg-card/30 p-7">
            <p className="mb-3 font-inter text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">More answers</p>
            <div className="flex flex-col gap-4">
              {related.map((item) => (
                <Link key={item.id} href={`/blog/${item.id}`}>
                  <span className="group inline-flex cursor-pointer items-start justify-between gap-4 font-grotesk text-[17px] font-medium">
                    {item.question}
                    <ArrowRight size={16} className="mt-1 flex-shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
            <Link href="/faq">
              <span className="mt-7 inline-flex cursor-pointer items-center gap-2 font-inter text-[12px] font-semibold text-muted-foreground transition-colors hover:text-foreground">
                Browse all 30 FAQs <ArrowRight size={13} />
              </span>
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}