import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$799",
    desc: "per project",
    tag: "Best for small projects",
    features: [
      "1 automation workflow",
      "AI landing page build",
      "1 revision round",
      "3-day turnaround",
      "Email delivery + handoff",
    ],
  },
  {
    name: "Growth",
    price: "$1,999",
    desc: "per project",
    popular: true,
    tag: "Most popular",
    features: [
      "Up to 5 automation workflows",
      "Full website or web app build",
      "AI chatbot or agent deployment",
      "3 revision rounds",
      "Priority 5-day delivery",
      "30-day post-launch support",
    ],
  },
  {
    name: "Scale",
    price: "$4,500",
    desc: "per month",
    tag: "For growing teams",
    features: [
      "Unlimited automation builds",
      "Full AI website + app development",
      "AI video content production",
      "AI agents + chatbot deployment",
      "Unlimited revisions",
      "Dedicated Slack channel",
      "Monthly strategy call",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-28 lg:py-36 w-full">
      <div className="container mx-auto px-6 lg:px-10 xl:px-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="font-inter text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-3">Pricing</p>
          <h2 className="font-grotesk font-semibold text-[52px] md:text-[64px] leading-[1.0] tracking-tight mb-4">
            Simple Pricing.
          </h2>
          <p className="font-inter text-[14px] text-muted-foreground max-w-[420px] mx-auto leading-relaxed">
            Choose the right plan for where you are — or book a call and we'll scope something custom.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col p-8 rounded-[20px] border transition-colors ${
                plan.popular
                  ? "border-foreground/40 bg-card"
                  : "border-border/40 bg-card/40 hover:border-border/70"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-foreground text-background font-inter font-semibold text-[11px] rounded-full px-4 py-1.5">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <p className="font-inter text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-2">{plan.tag}</p>
                <h3 className="font-grotesk font-semibold text-[22px] tracking-tight mb-4">{plan.name}</h3>
                <div className="flex items-end gap-1.5">
                  <span className="font-grotesk font-bold text-[42px] leading-none tracking-tight">{plan.price}</span>
                  <span className="font-inter text-[13px] text-muted-foreground mb-1">{plan.desc}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-10 flex-1">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-3 font-inter text-[13px] text-muted-foreground">
                    <Check size={14} className="text-foreground mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link href="/contact">
                <span
                  className={`w-full inline-flex items-center justify-center gap-2 font-inter font-semibold text-[13px] rounded-full px-6 py-3 transition-colors cursor-pointer ${
                    plan.popular
                      ? "bg-foreground text-background hover:bg-foreground/90"
                      : "border border-border/60 hover:border-foreground/50"
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
            <span className="text-foreground underline underline-offset-4 cursor-pointer hover:text-foreground/70 transition-colors">
              Book a free call →
            </span>
          </Link>
        </motion.p>
      </div>
    </section>
  );
}
