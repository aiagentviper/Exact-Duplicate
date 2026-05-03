import { motion } from "framer-motion";
import { Link } from "wouter";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    tag: "Starter",
    name: "Launch Plan",
    price: "$999",
    desc: "one-time",
    popular: false,
    features: [
      "1-page AI-powered landing page",
      "Mobile-first responsive design",
      "3 AI-integrated content sections",
      "AI chatbot setup",
      "1 revision round",
      "48-hour delivery",
    ],
  },
  {
    tag: "Most Popular",
    name: "Growth Plan",
    price: "$2,599",
    desc: "one-time",
    popular: true,
    features: [
      "Multi-page AI website or app",
      "Custom animations & interactions",
      "AI automation workflow (up to 3)",
      "Full copy + structure polish",
      "Priority 5-day delivery",
      "3 revision rounds",
    ],
  },
  {
    tag: "Enterprise",
    name: "Scale Plan",
    price: "Custom",
    desc: "per project",
    popular: false,
    features: [
      "Full AI system architecture",
      "Unlimited automations & agents",
      "AI video + content production",
      "Dedicated account manager",
      "Ongoing monthly retainer option",
      "White-glove onboarding",
    ],
  },
];

export function Pricing() {
  return (
    <section className="w-full border-t border-border/40 bg-black py-32">
      <div className="mx-auto w-full max-w-[1100px] px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14 text-center">
          <p className="mb-3 font-inter text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">Pricing</p>
          <h2 className="font-grotesk text-[52px] font-semibold leading-[1.0] tracking-tight">Simple Plans.<br />Serious Output.</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                plan.popular
                  ? "border-white/30 bg-white/5"
                  : "border-border/40 bg-card/40 hover:border-border/70"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-white text-black font-inter font-semibold text-[11px] rounded-full px-4 py-1.5">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <p className="font-inter text-[11px] uppercase tracking-[0.18em] text-white/40 mb-2">{plan.tag}</p>
                <h3 className="font-grotesk font-semibold text-[22px] tracking-tight mb-4">{plan.name}</h3>
                <div className="flex items-end gap-1.5">
                  <span className="font-grotesk font-bold text-[42px] leading-none tracking-tight">{plan.price}</span>
                  <span className="font-inter text-[13px] text-muted-foreground mb-1">{plan.desc}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-10 flex-1">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-3 font-inter text-[13px] text-muted-foreground">
                    <Check size={14} className="text-white/60 mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link href="/contact">
                <span
                  className={`w-full inline-flex items-center justify-center gap-2 font-inter font-semibold text-[13px] rounded-full px-6 py-3 transition-colors cursor-pointer ${
                    plan.popular
                      ? "bg-white text-black hover:bg-white/90"
                      : "border border-white/20 text-white/70 hover:border-white/50 hover:text-white"
                  }`}
                >
                  Get Started <ArrowRight size={13} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center font-inter text-[13px] text-muted-foreground mt-10"
        >
          Need something custom?{" "}
          <Link href="/contact">
            <span className="text-white underline underline-offset-4 cursor-pointer hover:text-white/70 transition-colors">
              Book a free call →
            </span>
          </Link>
        </motion.p>
      </div>
    </section>
  );
}
