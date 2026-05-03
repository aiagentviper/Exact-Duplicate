import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, Calendar } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().min(1, "Please select a budget"),
  message: z.string().min(10, "Tell us a bit more about your project"),
});

export function ContactPage() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      service: "",
      budget: "",
      message: "",
    },
  });

  function onSubmit(_values: z.infer<typeof formSchema>) {
    toast({
      title: "Message sent!",
      description: "We'll be in touch within 24 hours.",
    });
    form.reset();
  }

  return (
    <div className="bg-black min-h-screen text-foreground dark">
      <Navigation />
      <main className="pt-24">
        <section className="py-20">
          <div className="mx-auto w-full max-w-[1100px] px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h1 className="font-grotesk font-bold text-[60px] leading-[1.0] tracking-[-0.02em] mb-6 max-w-3xl">
              Let's Build Something<br />
              <span className="text-orange-500">Intelligent.</span>
            </h1>
            <p className="font-inter text-[16px] text-muted-foreground max-w-xl leading-relaxed">
              Have a project in mind? Whether it's automation, an AI app, a website or a full AI strategy — we are ready to build.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-xs uppercase tracking-widest text-orange-500 mb-6 font-semibold">Contact Details</h3>
                <div className="space-y-5">
                  <a
                    href="mailto:jimohmalik101@gmail.com"
                    className="flex items-center gap-3 text-base hover:text-orange-500 transition-colors"
                    data-testid="contact-email"
                  >
                    <Mail size={18} className="text-orange-500 flex-shrink-0" />
                    jimohmalik101@gmail.com
                  </a>
                  <a
                    href="tel:+2348107311900"
                    className="flex items-center gap-3 text-base hover:text-orange-500 transition-colors"
                  >
                    <Phone size={18} className="text-orange-500 flex-shrink-0" />
                    +234 810 731 1900
                  </a>
                  <div className="flex items-center gap-3 text-base text-orange-500">
                    <MapPin size={18} className="flex-shrink-0" />
                    Remote-First. Worldwide.
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                    <span className="text-orange-500 font-medium">Currently Accepting Projects</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-border/50">
                <h3 className="text-xs uppercase tracking-widest text-orange-500 mb-4 font-semibold">Book a Free Call</h3>
                <a
                  href="https://calendly.com/malik-designs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-inter font-semibold text-[13px] bg-orange-500 text-white rounded-full px-6 py-3 hover:bg-orange-400 transition-colors mb-8"
                  data-testid="contact-calendly"
                >
                  <Calendar size={15} />
                  Schedule on Calendly →
                </a>
              </div>

              <div className="border-t border-border/50 pt-8">
                <h3 className="text-xs uppercase tracking-widest text-orange-500 mb-4 font-semibold">What We Build</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {["AI Automation Systems", "AI-Powered Websites", "AI App MVPs", "Vibe Coded Products", "AI Video Content", "AI Strategy & Roadmaps"].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-card border border-border/50 rounded-2xl p-8"
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-widest text-orange-500">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" className="bg-background/50 border-border/50 rounded-xl" {...field} data-testid="contact-input-name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-widest text-orange-500">Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your@email.com" className="bg-background/50 border-border/50 rounded-xl" {...field} data-testid="contact-input-email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-widest text-orange-500">Service</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-background/50 border-border/50 rounded-xl" data-testid="contact-select-service">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="ai-automation">AI Automation</SelectItem>
                            <SelectItem value="ai-website">AI Website</SelectItem>
                            <SelectItem value="ai-app">AI App Development</SelectItem>
                            <SelectItem value="vibe-coding">Vibe Coding</SelectItem>
                            <SelectItem value="ai-video">AI Video Production</SelectItem>
                            <SelectItem value="ai-strategy">AI Strategy & Consulting</SelectItem>
                            <SelectItem value="not-sure">Not Sure — Need Advice</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-widest text-orange-500">Budget</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-background/50 border-border/50 rounded-xl" data-testid="contact-select-budget">
                              <SelectValue placeholder="Select your budget" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="under-1k">Under $1,000</SelectItem>
                            <SelectItem value="1k-2500">$1,000 – $2,500</SelectItem>
                            <SelectItem value="2500-5k">$2,500 – $5,000</SelectItem>
                            <SelectItem value="5k-plus">$5,000+</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-widest text-orange-500">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your project..."
                            className="min-h-[120px] bg-background/50 border-border/50 rounded-xl resize-none"
                            {...field}
                            data-testid="contact-textarea-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" size="lg" className="w-full rounded-xl bg-orange-500 hover:bg-orange-400 text-white border-0" data-testid="contact-submit">
                    Send Message →
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
