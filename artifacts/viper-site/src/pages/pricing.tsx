import { motion } from "framer-motion";
import { Link } from "wouter";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$799",
    per: "/ project",
    best: "New businesses & solo founders getting their first AI presence live.",
    popular: false,
    features: [
      "1 AI Automation Workflow",
      "AI Landing Page (1 page)",
      "Basic AI Chatbot Setup",
      "Mobile Responsive Design",
      "1 Revision Round",
      "Delivered in 5 Business Days",
    ],
  },
  {
    name: "Growth",
    price: "$1,999",
    per: "/ project",
    best: "Growing brands & founders ready to go full AI across web, app & content.",
    popular: true,
    features: [
      "Up to 5 AI Automation Workflows",
      "Full AI Website (up to 5 pages)",
      "AI App MVP (Vibe Coded)",
      "AI Video (1 Short-Form Ad)",
      "3 Revision Rounds",
      "Source Files Included",
      "Delivered in 10 Business Days",
    ],
  },
  {
    name: "Enterprise",
    price: "$4,999",
    per: "/ project",
    best: "Established businesses wanting complete AI infrastructure & ongoing support.",
    popular: false,
    features: [
      "Unlimited AI Automation Workflows",
      "Complete AI Website + App Build",
      "AI Video Production Suite",
      "AI Strategy & Roadmap Session",
      "Unlimited Revisions",
      "Priority Support",
      "Dedicated Slack Channel",
      "Monthly Performance Review",
    ],
  },
];

const faqs = [
  {
    q: "How long does a project take?",
    a: "Starter projects take 3–5 business days. Growth projects take 7–10 business days. Enterprise timelines are scoped per project based on complexity.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes. We offer 50% upfront and 50% on delivery for all plans. Enterprise clients can arrange custom payment schedules.",
  },
  {
    q: "What AI tools do you use?",
    a: "We use the best tools for each job — including Cursor, Framer, Webflow, Make, Zapier, n8n, Bolt, v0, Replit, ElevenLabs, Runway, Sora & more.",
  },
  {
    q: "Can I upgrade my plan mid-project?",
    a: "Absolutely. We'll simply adjust the scope and invoice the difference. No complicated renegotiations.",
  },
  {
    q: "Do you offer ongoing maintenance?",
    a: "Yes — we offer monthly retainer packages for clients who need ongoing updates, content or automation management.",
  },
];

export function PricingPage() {
  return (
    <div className="bg-background min-h-screen text-foreground dark">
      <Navigation />
      <main className="pt-24">
        <section className="py-20 container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="font-inter font-semibold text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-4">Transparent Pricing</p>
            <h1 className="font-grotesk font-bold text-[60px] leading-[1.0] tracking-[-0.02em] mb-6">
              Feasible Plans For<br />
              <span className="text-muted-foreground/40">Every Stage of Growth.</span>
            </h1>
            <p className="font-inter text-[16px] text-muted-foreground max-w-xl mx-auto leading-relaxed">
              No hidden fees. No bloated retainers. Just AI-powered results at honest prices.
            </p>
          </motion.div>
        </section>

        <section className="container mx-auto px-6 pb-24">
          <div className="grid md:grid-cols-3 gap-6 mb-24">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex flex-col p-8 rounded-2xl border ${
                  plan.popular
                    ? "bg-card border-foreground/40 shadow-2xl shadow-foreground/5"
                    : "bg-card/50 border-border/50"
                }`}
                data-testid={`pricing-card-${plan.name.toLowerCase()}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
                    Most Popular
                  </div>
                )}

                <h3 className="text-lg font-bold uppercase tracking-widest mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-5xl font-black tracking-tighter">{plan.price}</span>
                  <span className="text-sm text-muted-foreground">{plan.per}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-8 leading-relaxed border-b border-border/50 pb-8">
                  Best for: {plan.best}
                </p>

                <ul className="flex-1 space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Check size={14} className="text-foreground/60 flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link href="/contact">
                  <Button
                    variant={plan.popular ? "default" : "outline"}
                    className="w-full rounded-full"
                    data-testid={`pricing-cta-${plan.name.toLowerCase()}`}
                  >
                    Get Started →
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-black uppercase tracking-tighter mb-10 text-center">
              Got Questions? We've Got Answers.
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border border-border/50 rounded-xl px-6 bg-card/30"
                >
                  <AccordionTrigger className="text-sm font-medium text-left hover:no-underline py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground pb-5 leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="border-t border-border/50 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4">Need a Custom Quote?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            Every business is different. Let's talk about what you actually need.
          </p>
          <Link href="/contact">
            <Button size="lg" className="rounded-full px-10">Contact Us →</Button>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
