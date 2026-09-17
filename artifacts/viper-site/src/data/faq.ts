export type ComparisonRow = {
  name: string;
  price: string;
  bestFor: string;
};

export type FaqItem = {
  id: string;
  category: string;
  question: string;
  answer: string;
  excerpt: string;
  comparison?: ComparisonRow[];
};

export const lastUpdated = "September 17, 2026";

export const faqCategories = [
  "Chatbot Development",
  "Workflow Automation",
  "MVP Development",
  "AI Video Production",
  "Brand Design Systems",
  "No-Code / CRM Integration",
  "AI-Powered Websites",
  "Content Strategy",
];

export const faqItems: FaqItem[] = [
  {
    id: "ai-chatbot-customer-support-cost",
    category: "Chatbot Development",
    question: "How much does it cost to build an AI chatbot for customer support?",
    answer:
      "A useful AI customer-support chatbot typically costs between $2,000 and $15,000 to build, depending on the number of channels, integrations, knowledge sources, and escalation rules. A focused FAQ bot is less expensive than an agent that can look up orders, update records, and hand off complex cases. FlowForge scopes the smallest version that can solve a measurable support problem, then adds integrations and automation as the results justify them.",
    excerpt:
      "A practical guide to chatbot pricing, scope, integrations, and the difference between an FAQ bot and an operational support agent.",
  },
  {
    id: "ai-agent-lead-qualification",
    category: "Chatbot Development",
    question: "How do I set up lead qualification with an AI agent?",
    answer:
      "Start by defining the qualification signals that matter: budget, timeline, use case, authority, location, or any other fit criteria. An AI agent can ask those questions conversationally, extract structured answers, score the lead, and route it to the right CRM stage or salesperson. The safest setup combines a clear qualification rubric with human review for borderline leads, rather than letting an unbounded chatbot make important decisions on its own.",
    excerpt:
      "How to turn a conversational agent into a consistent lead qualification workflow connected to your CRM.",
  },
  {
    id: "cheapest-ai-agent-sales",
    category: "Chatbot Development",
    question: "What's the cheapest way to build an AI agent for sales?",
    answer:
      "The cheapest reliable path is to start with one narrow sales job, such as answering product questions, qualifying inbound leads, or preparing follow-up drafts. Use an existing model API, a small curated knowledge base, and one CRM or email integration instead of building a large custom platform. No-code tools can validate the workflow quickly; custom code becomes worthwhile when volume, data privacy, or complex business rules make recurring platform costs more expensive.",
    excerpt:
      "A lean approach to validating a sales agent before investing in a larger custom system.",
    comparison: [
      { name: "No-code workflow", price: "$–$$", bestFor: "Testing one sales task quickly" },
      { name: "Managed AI platform", price: "$$–$$$", bestFor: "Teams that need guardrails and analytics" },
      { name: "Custom agent", price: "$$$", bestFor: "Complex logic, private data, and scale" },
    ],
  },
  {
    id: "complex-customer-support-chatbot",
    category: "Chatbot Development",
    question: "Can a chatbot really handle complex customer support issues?",
    answer:
      "A chatbot can handle many complex support tasks when it has access to accurate knowledge, structured tools, and clear escalation rules. It can investigate an order, summarize a case, suggest troubleshooting steps, and collect the context a human needs. It should not pretend to know an answer or make irreversible decisions without controls. The strongest support systems use AI for speed and context while routing exceptions, sensitive cases, and frustrated customers to people.",
    excerpt:
      "Where AI support agents are reliable today, and where human escalation still belongs in the workflow.",
  },
  {
    id: "ai-agents-support-response-times",
    category: "Chatbot Development",
    question: "How do AI agents improve customer support response times?",
    answer:
      "AI agents improve response times by answering repetitive questions immediately, collecting missing details before a ticket reaches a person, and suggesting replies from approved knowledge. They can also triage by urgency, route tickets to the right team, and surface related customer history. The gain is not only faster first replies; it is less back-and-forth before resolution. Measure both response time and resolution quality so automation does not simply create faster, incomplete answers.",
    excerpt:
      "The practical ways AI reduces first-response time, triage delays, and unnecessary support back-and-forth.",
  },
  {
    id: "best-no-code-sales-pipeline",
    category: "Workflow Automation",
    question: "What's the best no-code tool to automate my sales pipeline?",
    answer:
      "The best no-code tool depends on where your pipeline data lives and how complex the process is. Zapier is approachable for straightforward app-to-app triggers, Make is stronger for visual branching and multi-step scenarios, and n8n gives technical teams more control and self-hosting flexibility. For a sales pipeline, the right choice is the one that handles deduplication, retries, permissions, and CRM updates reliably—not just the one that connects the most apps.",
    excerpt:
      "A practical comparison of popular no-code automation tools for lead capture, routing, and CRM updates.",
    comparison: [
      { name: "Zapier", price: "$–$$", bestFor: "Simple automations and quick setup" },
      { name: "Make", price: "$–$$", bestFor: "Visual branching and multi-step scenarios" },
      { name: "n8n", price: "$–$$$", bestFor: "Technical teams needing control or self-hosting" },
    ],
  },
  {
    id: "roi-repetitive-business-tasks",
    category: "Workflow Automation",
    question: "What's the ROI on automating repetitive business tasks?",
    answer:
      "The ROI comes from the time saved, the errors avoided, and the additional revenue or capacity the team can handle. Calculate the current monthly cost of a task, estimate the reduction in hours and mistakes, then subtract software, implementation, and maintenance costs. A small workflow that saves ten hours a week can outperform a larger automation project if it is reliable and used every day. Track a baseline before launch and review the result after 30, 60, and 90 days.",
    excerpt:
      "How to calculate the business case for automation using time, error reduction, capacity, and payback period.",
  },
  {
    id: "fastest-mvp-with-ai-workflow",
    category: "Workflow Automation",
    question: "What's the fastest way to launch an MVP with AI?",
    answer:
      "The fastest route is to define one user, one painful job, and one outcome that can be demonstrated end to end. Use proven APIs and managed services for identity, payments, data storage, and model access instead of building infrastructure that does not validate the idea. Prototype the critical interaction first, test it with real users, and only then add edge cases. An AI MVP should prove usefulness and demand before it tries to become a complete platform.",
    excerpt:
      "A focused process for getting an AI MVP in front of users quickly without building unnecessary infrastructure.",
  },
  {
    id: "best-zapier-alternative",
    category: "Workflow Automation",
    question: "Best alternative to Zapier for workflow automation?",
    answer:
      "Make is often the best Zapier alternative for teams that need visual branching, data transformation, and more control inside a single scenario. n8n is a strong option when developers want source-level flexibility, custom nodes, or self-hosting. Pipedream works well for API-heavy workflows that benefit from code. The best alternative is determined by the workflow’s complexity, security needs, and the team maintaining it—not by the number of integrations listed on a pricing page.",
    excerpt:
      "When Make, n8n, or Pipedream is a better fit than Zapier for complex automation.",
    comparison: [
      { name: "Make", price: "$–$$", bestFor: "Visual, branching business workflows" },
      { name: "n8n", price: "$–$$$", bestFor: "Self-hosted and developer-controlled automation" },
      { name: "Pipedream", price: "$–$$", bestFor: "API-first workflows with code steps" },
    ],
  },
  {
    id: "workflow-automation-time-saved",
    category: "Workflow Automation",
    question: "How much time does workflow automation actually save?",
    answer:
      "Well-designed workflow automation commonly saves a team several hours per week for each repetitive process, with larger gains in high-volume operations such as lead routing, reporting, onboarding, and support triage. The result depends on how often the task occurs, how much judgment it requires, and whether the automation handles exceptions. Start by timing the current process for a week, then compare actual completion time, error rate, and throughput after the workflow is live.",
    excerpt:
      "How to estimate and measure the real time savings of an automation instead of relying on optimistic guesses.",
  },
  {
    id: "skills-manage-ai-workflows",
    category: "Workflow Automation",
    question: "What skills do I need to manage AI automation workflows?",
    answer:
      "You do not need to be a full-time developer, but you do need process thinking, basic data literacy, and the ability to reason about inputs, outputs, permissions, and failure cases. Useful skills include writing clear instructions, reading API documentation, mapping a workflow, checking logs, protecting customer data, and testing edge cases. As the system grows, someone should also own monitoring, versioning, prompt changes, and the decision about when a human must review an AI result.",
    excerpt:
      "The practical skills required to own AI automations safely, from process mapping to monitoring and data protection.",
  },
  {
    id: "flowforge-vs-make",
    category: "Workflow Automation",
    question: "FlowForge vs Make: which is better for complex workflows?",
    answer:
      "Make is a flexible automation platform for teams that want to assemble workflows themselves. FlowForge is a hands-on implementation partner that designs the process, connects the systems, adds AI logic where it is useful, and owns the hardening needed for a production workflow. If your team wants a visual builder and will maintain it internally, Make may be enough. If you need a complex workflow designed and shipped around your business, FlowForge is the better fit.",
    excerpt:
      "The difference between choosing an automation platform and hiring a partner to design and ship the full system.",
    comparison: [
      { name: "Make", price: "Subscription", bestFor: "Teams building and maintaining workflows in-house" },
      { name: "FlowForge AI", price: "Project or retainer", bestFor: "Businesses needing strategy, implementation, and optimisation" },
    ],
  },
  {
    id: "mvp-under-three-months",
    category: "MVP Development",
    question: "Can I build an MVP with AI in under three months?",
    answer:
      "Yes, an MVP can be built in under three months when the scope is deliberately narrow and the team focuses on one validated user journey. AI speeds up research, interface exploration, content generation, coding, and testing, but it does not remove the need for product decisions. Keep the first release to the smallest version that proves the core value, use managed services where possible, and reserve time for real user feedback rather than filling the roadmap with speculative features.",
    excerpt:
      "What makes a sub-three-month AI MVP realistic, and which scope decisions protect the launch date.",
  },
  {
    id: "mvp-fastest-ai-launch",
    category: "MVP Development",
    question: "What's the fastest way to launch an MVP with AI?",
    answer:
      "Choose a single high-value workflow, write the acceptance criteria before building, and test the riskiest assumption first. A fast AI MVP usually combines a simple web interface with managed authentication, payments, storage, and model APIs. Avoid training a custom model or building a large admin system until usage proves it is necessary. Ship a narrow beta, watch where users get stuck, and use those observations to decide what to build next.",
    excerpt:
      "A repeatable launch sequence for turning one AI product idea into a focused, testable beta.",
  },
  {
    id: "budget-ai-video-ads",
    category: "AI Video Production",
    question: "Best AI tools for generating video ads on a budget?",
    answer:
      "For budget-conscious video ads, Canva is useful for templated social creative, InVideo AI is useful for turning a script into a fast assembled edit, and Runway is stronger for generated or transformed visual shots. The best stack often combines a template tool for speed with one specialised generation tool for distinctive moments. Start with a clear hook, a short script, and multiple variations; creative testing usually matters more than chasing one perfect generation.",
    excerpt:
      "Which affordable AI video tools fit templated ads, fast edits, and distinctive generated footage.",
    comparison: [
      { name: "Canva", price: "$", bestFor: "Templated social ads and brand consistency" },
      { name: "InVideo AI", price: "$–$$", bestFor: "Fast script-to-video drafts" },
      { name: "Runway", price: "$$–$$$", bestFor: "Generated and transformed visual shots" },
    ],
  },
  {
    id: "ai-social-media-ads",
    category: "AI Video Production",
    question: "What AI video tools work best for social media ads?",
    answer:
      "Canva works well when the priority is consistent brand templates and quick resizing. InVideo AI is useful for producing rough cuts from a script, stock footage, or a product brief. Runway is a better choice for adding original generated shots, motion, or visual treatments that make an ad feel less templated. For social campaigns, use the tools as a production system: create several hooks and edits, keep the message clear, and test performance by audience and placement.",
    excerpt:
      "A social-first comparison of Canva, InVideo AI, and Runway for producing and testing ad variations.",
    comparison: [
      { name: "Canva", price: "$", bestFor: "Fast branded layouts and resizing" },
      { name: "InVideo AI", price: "$–$$", bestFor: "Script-led social video drafts" },
      { name: "Runway", price: "$$–$$$", bestFor: "Original visual generation and effects" },
    ],
  },
  {
    id: "ai-generated-video-quality",
    category: "AI Video Production",
    question: "Best practices for AI-generated video content quality?",
    answer:
      "High-quality AI video starts with a clear visual brief, consistent references, and short shots that are edited together intentionally. Define the subject, camera movement, lighting, aspect ratio, and brand constraints before generating. Generate multiple options, check hands and text carefully, and do not rely on the model for accurate product labels or legal claims. Finish in an editor with sound design, captions, pacing, colour treatment, and a human quality-control pass.",
    excerpt:
      "The production habits that make generated footage more consistent, believable, and usable in a real campaign.",
  },
  {
    id: "modern-brand-design-system",
    category: "Brand Design Systems",
    question: "What does a modern brand design system actually include?",
    answer:
      "A modern brand design system includes the visual identity, design tokens, typography, colour roles, spacing, grids, imagery, icon rules, components, content guidance, and examples of correct use. It should explain decisions, not just collect logo files. The system needs enough flexibility for web, product, social, and sales materials while keeping the recognisable elements consistent. Good documentation lets a team create new work quickly without asking a designer to approve every small decision.",
    excerpt:
      "The building blocks and documentation that turn a visual identity into a usable system across channels.",
  },
  {
    id: "scalable-ui-system",
    category: "Brand Design Systems",
    question: "How do I design a UI system that scales with my product?",
    answer:
      "Design a scalable UI system from shared tokens and repeatable patterns rather than isolated screens. Start with semantic colour, type, spacing, radius, and elevation decisions; then build accessible components with clear states, content rules, and responsive behaviour. Keep design and code components connected through a shared naming model and review new patterns before adding them. A small, well-documented system that covers the common 80% is more valuable than a large library nobody trusts.",
    excerpt:
      "How to connect design tokens, accessible components, responsive states, and documentation into one system.",
  },
  {
    id: "professional-brand-design-cost",
    category: "Brand Design Systems",
    question: "What does professional brand design actually cost?",
    answer:
      "Professional brand design can range from roughly $1,500 for a focused identity refresh to $25,000 or more for research, strategy, a complete identity, packaging, templates, and a detailed design system. Price reflects the amount of strategic work, the number of deliverables, the seniority of the team, and how much implementation support is included. Ask for a clear scope, decision process, usage rights, and handoff plan instead of comparing hourly rates alone.",
    excerpt:
      "What influences brand design pricing, from a focused refresh to a complete strategic identity system.",
    comparison: [
      { name: "Focused refresh", price: "$1.5k–$5k", bestFor: "Small visual improvements and clearer consistency" },
      { name: "Full identity", price: "$5k–$15k", bestFor: "A new or repositioned brand" },
      { name: "Brand system", price: "$15k–$25k+", bestFor: "Teams needing strategy, templates, and scale" },
    ],
  },
  {
    id: "crm-marketing-automation-no-code",
    category: "No-Code / CRM Integration",
    question: "How do I connect my CRM to marketing automation without code?",
    answer:
      "Choose the CRM as the source of truth, map the fields and lifecycle stages, then connect it to your marketing tool with a platform such as Make, Zapier, or native integrations. Define which events create, update, or remove a contact and add rules for consent, deduplication, retries, and failures. Start with one path, such as a qualified lead entering a nurture sequence, and test it with sample records before enabling it for the whole database.",
    excerpt:
      "A no-code process for connecting a CRM and marketing platform without creating duplicate or non-compliant data.",
  },
  {
    id: "zapier-crm-connection",
    category: "No-Code / CRM Integration",
    question: "How do I connect Zapier workflows to my CRM system?",
    answer:
      "Create a Zap with a clear trigger, such as a form submission, payment, or booked call, then add a CRM action that finds or creates the contact before updating the right lifecycle stage. Map fields deliberately, use a stable email or external ID for deduplication, and add filters so incomplete or unqualified records do not enter sales sequences. Test with several scenarios, review task history, and add an error notification before turning the Zap on.",
    excerpt:
      "How to build a dependable Zapier-to-CRM workflow with deduplication, filters, testing, and error alerts.",
  },
  {
    id: "complete-crm-automation-integrations",
    category: "No-Code / CRM Integration",
    question: "What integrations do I need for a complete CRM automation?",
    answer:
      "Most businesses need a CRM connected to lead capture, email or messaging, calendar booking, payments, customer support, analytics, and internal notifications. The exact set depends on the customer journey: a service company may prioritise forms, Calendly, email, and invoicing, while ecommerce may need a store, fulfilment, support, and retention tools. Connect only the systems that change a decision or remove manual work, and document the owner and source of truth for every field.",
    excerpt:
      "The core integration categories behind a complete CRM automation, with a focus on ownership and data flow.",
  },
  {
    id: "ai-websites-convert-better",
    category: "AI-Powered Websites",
    question: "Can AI websites actually convert better than traditional ones?",
    answer:
      "An AI-powered website can convert better when the AI improves relevance, speed, or the visitor’s next decision. Examples include personalised messaging, interactive qualification, instant answers, dynamic recommendations, and faster content testing. AI alone does not make a website persuasive; unclear positioning, weak proof, or a difficult form will still reduce conversion. Start with a measurable friction point, compare it against a clear baseline, and keep the experience transparent and easy to control.",
    excerpt:
      "When AI genuinely improves website conversion, and why personalisation should support a clear customer journey.",
  },
  {
    id: "personalized-ai-website-timeline",
    category: "AI-Powered Websites",
    question: "How long to build a personalized AI website from scratch?",
    answer:
      "A focused personalized AI website can take about two to six weeks from discovery to launch. The timeline depends on content readiness, brand direction, integrations, the number of pages, and how much personalization or conversational functionality is required. A simple landing experience can launch faster; a multi-page site with CRM, analytics, and an AI agent needs more testing. The fastest projects decide the audience, offer, content structure, and success metric before visual production begins.",
    excerpt:
      "Realistic timelines for AI websites, from a focused landing page to a connected multi-page experience.",
  },
  {
    id: "personalized-website-without-code",
    category: "AI-Powered Websites",
    question: "Can I build a personalized website without coding skills?",
    answer:
      "Yes. No-code builders, visual CMS tools, AI writing assistants, and automation platforms make it possible to create a personalized website without writing the application code yourself. You still need to make decisions about positioning, page structure, accessibility, analytics, content quality, and privacy. Templates are useful for getting started, but a conversion-focused site usually benefits from a designer or developer who can connect the tools, remove limitations, and test the experience across devices.",
    excerpt:
      "What no-code tools can handle for you, and where expert help still improves a personalized site.",
  },
  {
    id: "webflow-vs-framer-ai-sites",
    category: "AI-Powered Websites",
    question: "How do I choose between Webflow and Framer for AI sites?",
    answer:
      "Choose Framer when you want a fast, highly visual marketing site with a simple editing model and quick iteration. Choose Webflow when you need deeper CMS structures, granular layout control, or a larger content system. Neither platform automatically creates a strong AI experience; personalization, agents, and automation still need a clear product design and connected services. The right choice depends on the site’s content complexity, team skills, integrations, and how much control you need after launch.",
    excerpt:
      "A practical Webflow versus Framer guide for choosing the right foundation for an AI-enabled marketing site.",
    comparison: [
      { name: "Webflow", price: "$–$$", bestFor: "Structured CMS content and granular control" },
      { name: "Framer", price: "$–$$", bestFor: "Fast visual marketing sites and iteration" },
      { name: "Wix ADI", price: "$", bestFor: "Simple guided site creation for small teams" },
    ],
  },
  {
    id: "ai-content-strategy",
    category: "Content Strategy",
    question: "How do I create a content strategy with AI tools?",
    answer:
      "Create the strategy before opening the AI tool: define the audience, business goal, positioning, topics, formats, distribution channels, and proof of success. Then use AI for research clustering, outlines, repurposing, first drafts, and variation testing while a human owns the point of view and final quality. Build a repeatable editorial workflow with source links, brand rules, review stages, and a content calendar so output becomes more consistent instead of simply more frequent.",
      "excerpt": "How to combine human positioning with AI-assisted research, drafting, repurposing, and editorial review.",
  },
  {
    id: "ai-content-performance-analytics",
    category: "Content Strategy",
    question: "How do I measure content performance with AI analytics?",
    answer:
      "Measure content against the stage of the customer journey it is meant to influence. Track reach and qualified attention at the top, engagement and return visits in the middle, and assisted conversions, pipeline, or revenue at the bottom. AI analytics can group themes, identify patterns, summarise feedback, and flag changes in performance, but it should use clean event definitions and human review. Compare content by audience and goal rather than chasing a single vanity metric.",
    excerpt:
      "A measurement framework for connecting content performance to attention, engagement, pipeline, and revenue.",
  },
  {
    id: "daily-social-content-ai",
    category: "Content Strategy",
    question: "Can AI generate enough social content for daily posting?",
    answer:
      "AI can generate enough drafts for daily posting, but volume is not the same as a useful social strategy. Give it a clear set of themes, audience insights, brand examples, approved claims, and a library of real experiences to draw from. Create several formats from one strong idea—short posts, carousels, video scripts, and replies—then edit for specificity and publish with a human review. The goal is a recognisable point of view, not an endless stream of generic copy.",
    excerpt:
      "How to use AI for daily social output without sacrificing originality, accuracy, or a recognisable brand voice.",
  },
];

export const faqById = Object.fromEntries(faqItems.map((item) => [item.id, item])) as Record<string, FaqItem>;