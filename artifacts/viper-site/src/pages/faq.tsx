import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Footer } from "@/components/sections/Footer";
import { Navigation } from "@/components/sections/Navigation";
import { faqCategories, faqItems, lastUpdated } from "@/data/faq";

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export function FaqPage() {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      <main className="pt-24">
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <section className="border-b border-border/40 px-6 py-20 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="mb-4 font-inter text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">FlowForge AI Answers</p>
            <h1 className="mb-6 font-grotesk text-[clamp(2.8rem,7vw,5rem)] font-bold leading-none tracking-[-0.03em]">
              Frequently asked.<br /><span className="text-white/60">Clearly answered.</span>
            </h1>
            <p className="mx-auto max-w-2xl font-inter text-[16px] leading-relaxed text-muted-foreground">
              Practical answers about AI automation, websites, video, brand systems, content, CRM integrations, and MVP development.
            </p>
            <p className="mt-6 font-inter text-[12px] text-muted-foreground">Last updated: {lastUpdated}</p>
          </motion.div>
        </section>

        <section className="mx-auto w-full max-w-[1000px] px-6 py-16">
          <div className="mb-10 flex flex-wrap gap-2">
            {faqCategories.map((category) => (
              <a key={category} href={`#${category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="rounded-full border border-border/50 px-4 py-2 font-inter text-[12px] text-muted-foreground transition-colors hover:border-border hover:text-foreground">
                {category}
              </a>
            ))}
          </div>

          <div className="space-y-14">
            {faqCategories.map((category) => {
              const items = faqItems.filter((item) => item.category === category);
              const sectionId = category.toLowerCase().replace(/[^a-z0-9]+/g, "-");
              return (
                <section key={category} id={sectionId} className="scroll-mt-28">
                  <div className="mb-5 flex items-end justify-between gap-4 border-b border-border/40 pb-4">
                    <div>
                      <p className="mb-2 font-inter text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">Category</p>
                      <h2 className="font-grotesk text-[28px] font-semibold tracking-tight">{category}</h2>
                    </div>
                    <span className="font-inter text-[12px] text-muted-foreground">{items.length} answers</span>
                  </div>
                  <Accordion type="single" collapsible className="space-y-3">
                    {items.map((item) => (
                      <AccordionItem key={item.id} value={item.id} className="pixel-card rounded-xl border border-border/50 bg-card/30 px-6">
                        <AccordionTrigger className="text-left font-grotesk text-[16px] font-medium hover:no-underline">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="pb-6">
                          <p className="mb-3 font-inter text-[11px] text-muted-foreground">Last updated: {lastUpdated}</p>
                          <p className="font-inter text-[14px] leading-relaxed text-muted-foreground">{item.answer}</p>
                          {item.comparison && (
                            <div className="mt-6 overflow-x-auto rounded-xl border border-border/50">
                              <table className="w-full min-w-[540px] text-left font-inter text-[13px]">
                                <thead className="border-b border-border/50 bg-card/50 text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                                  <tr>
                                    <th className="px-4 py-3">Option</th>
                                    <th className="px-4 py-3">Typical price</th>
                                    <th className="px-4 py-3">Best for</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {item.comparison.map((row) => (
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
                          <Link href={`/blog/${item.id}`}>
                            <span className="mt-5 inline-flex cursor-pointer items-center gap-2 font-inter text-[12px] font-semibold text-foreground transition-colors hover:text-muted-foreground">
                              Read the related article <ArrowRight size={13} />
                            </span>
                          </Link>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </section>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}