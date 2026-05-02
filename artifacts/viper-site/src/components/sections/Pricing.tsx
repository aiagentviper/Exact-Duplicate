import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "$499",
    desc: "per project",
    features: [
      "Basic brand design",
      "1 Revision round",
      "Logo package",
      "Color palette"
    ]
  },
  {
    name: "Professional",
    price: "$999",
    desc: "per project",
    popular: true,
    features: [
      "Full brand identity",
      "3 Revision rounds",
      "Social media kit",
      "Typography guidelines",
      "Source files included"
    ]
  },
  {
    name: "Enterprise",
    price: "$2499",
    desc: "per project",
    features: [
      "Complete design system",
      "Unlimited revisions",
      "Website design (up to 5 pages)",
      "Priority support",
      "Dedicated slack channel"
    ]
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-32 container mx-auto px-6">
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Feasible Plans.
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`flex flex-col p-8 rounded-2xl border ${
              plan.popular 
                ? "bg-card/80 border-primary shadow-2xl shadow-primary/5 relative" 
                : "bg-card border-border/50"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                Popular
              </div>
            )}
            
            <h3 className="text-xl font-medium mb-2">{plan.name}</h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl font-bold tracking-tighter">{plan.price}</span>
              <span className="text-sm text-muted-foreground">{plan.desc}</span>
            </div>
            
            <ul className="flex-1 space-y-4 mb-8">
              {plan.features.map(f => (
                <li key={f} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                  {f}
                </li>
              ))}
            </ul>
            
            <Button 
              variant={plan.popular ? "default" : "outline"} 
              className="w-full rounded-full"
            >
              Get Started
            </Button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
