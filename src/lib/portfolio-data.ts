export const PERSON = {
  firstName: "Randolf",
  middleName: "Madelo",
  lastName: "Francisco",
  fullName: "Randolf Madelo Francisco",
  monogram: "RF",
  email: "rfranciscoelite2020@gmail.com",
  location: "Manila, PH",
  workingWith: "US · EU · APAC",
  experience: "6 years",
  roleLine: "GoHighLevel · AI Automation · CRM Workflows",
  heroEyebrow: "GoHighLevel · AI Automation · CRM Workflows",
  heroTitleTop: "Certified GoHighLevel",
  heroTitleAccentTop: "Expert",
  heroTitleBottom: "And AI Automation",
  heroTitleAccentBottom: "Builder.",
  heroBody:
    "I build GoHighLevel CRM systems, AI agents, automation workflows, and sales funnels that help businesses capture leads, follow up faster, qualify prospects, book appointments, and convert more opportunities into paying customers — all running smoothly in the background while you focus on growing the business.",
  avatar:
    "https://vibe.filesafe.space/1792556145788331050/attachments/7f3c8349-d939-4aaa-ab8d-9578a62c5641.jpg",
};

export const LINKEDIN_URL = "https://www.linkedin.com/in/randolffrancisco/?isSelfProfile=true";

export const FACEBOOK_URL = "https://www.facebook.com/randolf.m.francisco";

export const CALENDLY_URL = "https://calendly.com/rfranciscoelite2020/new-meeting?month=2026-10";

export const HERO_FLOW = [
  {
    state: "LEAD CAPTURED",
    title: "New inbound lead",
    meta: "GoHighLevel · web form, 42s ago",
    color: "spark",
  },
  {
    state: "LEAD QUALIFIED",
    title: "Scored → Tagged → Routed",
    meta: "AI · pipeline updated",
    color: "ember",
  },
  {
    state: "FOLLOW-UP SENT",
    title: "SMS + Email sequence",
    meta: "3 messages scheduled",
    color: "success",
  },
];

export const MARQUEE = [
  "GoHighLevel",
  "CRM Workflows",
  "AI Automation",
  "Funnels",
  "Email Sequences",
  "SMS Follow-up",
  "Voice Agents",
  "Chatbots",
  "n8n",
  "Make",
  "Zapier",
  "Webhooks",
  "Claude",
  "OpenAI",
  "Claude Code",
  "Lead Qualification",
];

export const STATS = [
  { value: "120+", label: "Workflows shipped" },
  { value: "40+", label: "AI agents in production" },
  { value: "30+", label: "Funnels & landing pages" },
  { value: "12", label: "Industries served" },
];

export type Service = {
  no: string;
  title: string;
  icon: string;
  body: string;
  tags: string[];
};

export const SERVICES: Service[] = [
  {
    no: "01",
    title: "GoHighLevel CRM Setup",
    icon: "LayoutDashboard",
    body: "Pipelines, calendars, forms, opportunities, dashboards, custom fields, and triggers, plus A2P 10DLC registration and the base integrations that make it all run — Twilio, Stripe, Google or Outlook calendars, payment processing. The whole GoHighLevel workspace built around how your business actually runs, ready to send, receive, and book on day one.",
    tags: ["GHL", "CRM", "A2P Setup", "Integrations", "Pipelines"],
  },
  {
    no: "02",
    title: "Custom Funnels & Websites",
    icon: "Globe",
    body: "Sales funnels, landing pages, opt-ins, booking pages, marketing sites, member portals, and product pages — all built to convert. Native GHL builds when that fits, custom-coded with React or Next.js when the design needs more, with your CRM and follow-up already running underneath.",
    tags: ["Funnels", "Landing Pages", "Websites", "GHL", "React"],
  },
  {
    no: "03",
    title: "Search Engine Optimization",
    icon: "Search",
    body: "Search engine optimization for both your GoHighLevel funnels and your WordPress site. Keyword research, meta titles, descriptions, header structure, image alt text, schema markup, internal linking, and the on-page captions and copy that turn a page from invisible into searchable. So traffic actually finds you, not just your paid ads.",
    tags: ["SEO", "GoHighLevel", "WordPress", "Meta & Captions", "Keywords"],
  },
  {
    no: "04",
    title: "CRM Workflows",
    icon: "Workflow",
    body: "GoHighLevel CRM workflows that move contacts through your pipeline without anyone touching them. Stage-progression triggers, tag-based routing, appointment-outcome flows, reactivation logic, and the internal team alerts that fire when human judgment is actually needed. Every trigger and action chosen for the real job.",
    tags: ["CRM Workflows", "Pipelines", "Triggers", "Routing"],
  },
  {
    no: "05",
    title: "Email & SMS Campaigns",
    icon: "Send",
    body: "Two campaigns that earn more than the others. Reactivation flows that wake up cold leads and bring past customers back. Nurture flows that warm new contacts until they're ready to buy. Built on GoHighLevel with deliverability, timing, and segmentation actually thought through.",
    tags: ["Reactivation", "Lead Nurture", "Email", "SMS"],
  },
  {
    no: "06",
    title: "AI Automation & Integrations",
    icon: "Zap",
    body: "Where GoHighLevel ends, deeper automation begins. Zapier, Make, and n8n connect GHL to anything with an API: AI models, payment platforms, internal databases, niche SaaS tools, and your team's everyday workflows. Claude Code speeds up the build itself — writing the glue logic, webhook handlers, and data transformations that no-code connectors can't reach. The result is AI-powered automation that routes data, triggers the right action at the right moment, and handles the judgment calls across your whole stack.",
    tags: ["Zapier", "Make", "n8n", "Claude Code", "AI APIs", "Webhooks"],
  },
  {
    no: "07",
    title: "AI Chatbots & Assistants",
    icon: "Bot",
    body: "AI assistants for your website, your CRM, and your internal tools. Trained on your actual content, plugged into booking, lead capture, and support, with a clean handoff to a human the second judgment matters.",
    tags: ["Chatbots", "RAG", "Assistants"],
  },
  {
    no: "08",
    title: "Voice AI Agents",
    icon: "PhoneCall",
    body: "Voice agents that answer the phone, qualify the lead, book the appointment, and update the CRM. Built on VAPI, Retell, or Twilio, hooked into GoHighLevel pipelines and live calendars, working both inbound calls and outbound campaigns.",
    tags: ["VAPI", "Retell", "Twilio", "GHL"],
  },
  {
    no: "09",
    title: "SaaS Setup & Product Builds",
    icon: "Code2",
    body: "GoHighLevel SaaS Mode set up for agencies: snapshots, sub-account templates, white-label branding, billing tiers, the works. And when GHL alone can't carry the product, custom SaaS builds from scratch.",
    tags: ["GHL SaaS", "Snapshots", "Stripe", "Supabase"],
  },
];

export type SkillGroup = {
  no: string;
  title: string;
  count: string;
  icon: string;
  skills: string[];
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    no: "01",
    title: "CRM & Automation",
    count: "07",
    icon: "Workflow",
    skills: [
      "GoHighLevel",
      "CRM Setup",
      "Workflow Automation",
      "Funnel Building",
      "Email Automation",
      "SMS Automation",
      "Lead Management",
    ],
  },
  {
    no: "02",
    title: "AI Tools",
    count: "09",
    icon: "Sparkles",
    skills: [
      "AI Chatbots",
      "AI Assistants",
      "Prompt Engineering",
      "OpenAI",
      "Claude",
      "Claude Code",
      "Hermes Agent",
      "Grok Bot",
      "AI Workflow Design",
    ],
  },
  {
    no: "03",
    title: "Integrations",
    count: "13",
    icon: "Cable",
    skills: [
      "API Integrations",
      "Webhooks",
      "Make",
      "Zapier",
      "n8n",
      "Notion",
      "ClickUp",
      "Monday.com",
      "Twilio",
      "Retell",
      "VAPI",
      "Closebot",
      "ManyChat",
    ],
  },
  {
    no: "04",
    title: "Development",
    count: "07",
    icon: "Code2",
    skills: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "Supabase",
      "GitHub",
      "Claude Code",
    ],
  },
];

export type Work = {
  code: string;
  category: string;
  title: string;
  body: string;
  benefit: string;
  stack: string[];
  metrics: { value: string; label: string }[];
  accent: "ember" | "spark" | "violet" | "amber";
};

export const WORKS: Work[] = [
  {
    code: "P-01",
    category: "Service businesses · Agencies · Coaches",
    title: "AI Automation & Workflow Systems",
    body: "Explore real automation builds designed to connect tools, streamline operations, qualify leads, and help businesses run smoothly in the background. Central GoHighLevel CRM wired into n8n, Make, Zapier, and AI APIs, so every lead, appointment, and follow-up moves through one connected system instead of five disconnected tabs.",
    benefit:
      "Cuts admin time, captures leads that would otherwise leak, and gives the team one CRM as the source of truth.",
    stack: ["GoHighLevel", "n8n", "Make", "Zapier"],
    metrics: [
      { value: "120+", label: "Workflows shipped" },
      { value: "40+", label: "Hours / week saved" },
      { value: "12", label: "Industries served" },
    ],
    accent: "ember",
  },
  {
    code: "P-02",
    category: "B2B SaaS · Coaching · Service brands",
    title: "AI Chatbot & Assistant Systems",
    body: "AI chatbots and assistants embedded in your website, your CRM workflows, and SMS — trained on your real services, FAQs, and offers. They qualify leads, answer support, and book calls on their own, and hand off to a human the second judgment is actually needed.",
    benefit: "Qualifies leads 24/7 so the sales team only spends time on buyers who are ready.",
    stack: ["Claude", "OpenAI", "GHL", "Web Chat"],
    metrics: [
      { value: "78%", label: "Queries handled" },
      { value: "<2s", label: "Avg response" },
      { value: "Clean", label: "Handoff" },
    ],
    accent: "spark",
  },
  {
    code: "P-03",
    category: "Home services · Healthcare · Hospitality",
    title: "AI Voice Agents & Phone Automation",
    body: "Voice agents that answer the phone, qualify leads, book appointments, and run reactivation campaigns. Wired into GoHighLevel pipelines and live calendars, so after-hours calls turn into booked meetings instead of voicemails, and outbound lists run themselves.",
    benefit: "After-hours calls become booked appointments instead of missed revenue.",
    stack: ["VAPI", "Retell", "Twilio", "GoHighLevel"],
    metrics: [
      { value: "+91%", label: "After-hours capture" },
      { value: "100%", label: "Calls answered" },
      { value: "2m", label: "Avg booking" },
    ],
    accent: "violet",
  },
  {
    code: "P-04",
    category: "Coaches · Agencies · Local businesses",
    title: "Funnels, Websites & Lead Capture",
    body: "Websites and high-converting funnels for service businesses. Branding, conversion, and GoHighLevel integration baked in from the start. Forms, booking flows, opt-ins, and follow-up automations all working together so a lead never falls into the gap between pages.",
    benefit:
      "Pages that turn visitors into booked calls, with the CRM and follow-up already running underneath.",
    stack: ["GoHighLevel", "Funnels", "Landing Pages"],
    metrics: [
      { value: "30+", label: "Funnels shipped" },
      { value: "+45%", label: "Conversion lift" },
      { value: "2x", label: "Time on page" },
    ],
    accent: "amber",
  },
  {
    code: "P-05",
    category: "Multi-industry · Engineering & delivery",
    title: "Claude Code Engineering Builds",
    body: "Production builds shipped with Claude Code in the loop. AI systems, AI agents, automation workflows, custom websites, dashboards, and full online applications — designed, written, integrated, and deployed end-to-end. The engineering side of the practice, separate from the GoHighLevel builds, working on the same problems.",
    benefit:
      "Ships engineering work in days that used to take weeks, without cutting corners on quality or polish.",
    stack: ["Claude Code", "React", "Next.js", "Vercel", "n8n"],
    metrics: [
      { value: "7+", label: "Live builds shipped" },
      { value: "6", label: "Build categories" },
      { value: "Days", label: "Typical turnaround" },
    ],
    accent: "ember",
  },
];

export type CaseStep = {
  no: string;
  title: string;
  body: string;
  pipeline: string;
  tags: string;
  how: string;
  sub?: { label: string; body: string }[];
};

export const CASE_STEPS: CaseStep[] = [
  {
    no: "01",
    title: "Lead Capture",
    body: "A visitor lands on a GoHighLevel funnel and fills the form. GHL creates the contact, drops them into the pipeline, and tags them ready for qualification. No copying, no manual entry, no waiting for someone to check the inbox.",
    pipeline: "New Lead",
    tags: "source:funnel · channel:web · status:pending-qualification",
    how: "Trigger: GHL form submission · Action: Contact created, pipeline entry, auto-tag, AI qualifier kicked off",
  },
  {
    no: "02",
    title: "Qualification, AI Bot",
    body: "An AI bot picks up the conversation on chat or SMS in real time. It scores fit, intent, and timing against your ICP. Strong leads keep moving forward. Weak leads get a polite “not right now” so nobody wastes anyone's time.",
    pipeline: "New Lead → Qualified",
    tags: "score:1-10 · intent:hot|warm|cold · fit:yes|no",
    how: "Model: Claude or GPT · Input: form fields + enrichment · Output: structured score, rationale, and next-step routing",
  },
  {
    no: "03",
    title: "Appointment Handling, AI Bot",
    body: "Once the lead is qualified, the bot offers live calendar slots straight from GoHighLevel and books the appointment on the spot. SMS and email confirmation goes out, prep material attached, before they even close the chat window.",
    pipeline: "Qualified → Booked",
    tags: "calendar:GHL · confirmation:SMS+Email · channel:bot",
    how: "Tools: GHL Calendar API · Action: Slot selected, appointment created, contact and pipeline updated",
  },
  {
    no: "04",
    title: "Post-Booking Systems",
    body: "Booking the call is only step one. Two background automations make sure the lead actually shows up, and stays warm in the days between booking and the meeting itself.",
    pipeline: "Booked → Confirmed → Showed",
    tags: "reminder:T-24h · reminder:T-1h · sequence:pre-call",
    how: "Tools: GHL automations + Twilio · Action: Reminder cadence + nurture sequence fired on booking event",
    sub: [
      {
        label: "a · Booking reminders",
        body: "Automated SMS and email reminders at T-24h, T-1h, and T-15m to cut no-show rates.",
      },
      {
        label: "b · Pre-call sequence",
        body: "Short nurture series delivering prep material, social proof, and a one-line agenda before the meeting.",
      },
    ],
  },
  {
    no: "05",
    title: "Post-Call Workflow",
    body: "After the call, the lead goes into one of three flows based on how it actually went. Moving toward sale. Nurturing longer if they need more time. Queued for reactivation if the deal stalls. Nobody falls off the radar.",
    pipeline: "Showed → Won | Stalled | Lost",
    tags: "outcome:won|stalled|lost · nurture:active · reactivation:queued",
    how: "Tools: Outcome tags + branch workflows · Action: Route into nurture, reactivation, or sales motion",
    sub: [
      {
        label: "a · Post-call sequence",
        body: "Thank-you, recap, and clear next step, dynamically branched on call outcome and disposition tags.",
      },
      {
        label: "b · Lead nurture system",
        body: "Long-form drip for leads not ready to buy yet, warming them with education, social proof, and offers over weeks.",
      },
      {
        label: "c · Reactivation system",
        body: "Quarterly check-ins for old or cold leads with value-led re-engagement, win-back offers, and back-to-pipeline routing on reply.",
      },
    ],
  },
];

export type Sop = {
  no: string;
  industry: string;
  title: string;
  body: string;
  bullets: string[];
  stack: string[];
};

export const SOPS: Sop[] = [
  {
    no: "SOP 01",
    industry: "Mortgage lending",
    title: "DMV Agent Partner System",
    body: "A complete system plan that finds real estate agents in DC, Maryland and Virginia, starts the conversation, books them on the lender's calendar, and turns them into referral partners.",
    bullets: [
      "Outreach and booking system in 6 parts",
      "Partner Engine for referrals and loan updates",
      "Master flowchart, video walkthrough and planning model",
    ],
    stack: ["GoHighLevel", "AI booking", "Agent outreach"],
  },
  {
    no: "SOP 02",
    industry: "Fitness",
    title: "Day Pass Launch Campaign",
    body: "A launch plan for a premium strength gym: a day pass offer, a Meta ad and reel, and a GoHighLevel follow-up system that turns a claimed pass into a visit, and a visit into a membership.",
    bullets: [
      "6 GoHighLevel workflows, from intake to membership",
      "Step-by-step lead journey and process flowchart",
      "Ready-to-load copy and build order",
    ],
    stack: ["GoHighLevel", "Meta ads", "SMS + email"],
  },
  {
    no: "SOP 03",
    industry: "Property",
    title: "Amber Mews Launch Plan",
    body: "A launch plan for a new-homes development: Meta ads under the Housing category in three areas, a higher-intent lead form, and a HighLevel system that turns leads into booked show home viewings.",
    bullets: [
      "Area test, targeting and first 14 days",
      "Two films, four ads and a retargeting sequence",
      "8 HighLevel workflows with 2 AI agents",
    ],
    stack: ["Meta ads", "HighLevel", "AI agents"],
  },
];

export const PROCESS = [
  {
    no: "01",
    title: "Discover",
    body: "Two short calls. I look at how things actually run today, where leads, appointments, or admin time are leaking out, and where automation would change the most.",
  },
  {
    no: "02",
    title: "Map",
    body: "Before anything gets built, I sketch the whole thing on one page. CRM, funnels, AI workflows, the handoffs in between. You see the system before you pay for it.",
  },
  {
    no: "03",
    title: "Build",
    body: "Build phase. Most of it lives inside GoHighLevel. The pieces that can't — Make, Zapier, n8n, AI APIs, webhooks, custom code — get wired in around it.",
  },
  {
    no: "04",
    title: "Test",
    body: "Forms, workflows, emails, SMS, triggers, webhooks, the full user path. Tested with real data, by me, before a single real visitor ever sees it.",
  },
  {
    no: "05",
    title: "Launch & Optimize",
    body: "Go live. I watch how real users actually move through it, then tune the workflows, copy, and triggers based on what the data says, not what we assumed during build.",
  },
];

export const TESTIMONIALS = [
  { name: "Julius", label: "Client testimonial", count: "01 / 07" },
  { name: "Jake", label: "Client testimonial", count: "02 / 07" },
  { name: "Andre", label: "Client testimonial", count: "03 / 07" },
  { name: "Lehman", label: "Client testimonial", count: "04 / 07" },
  { name: "Bermac Agency", label: "Agency reference", count: "05 / 07" },
  { name: "Client", label: "Project reference", count: "06 / 07" },
  { name: "Client", label: "Project reference", count: "07 / 07" },
];

export const CLIENTS = [
  "Perfect Sense Marketing",
  "J & A Tax Professionals",
  "Kreate & Educate",
  "Jade Jungle Resort",
  "Jade",
  "Solar Company",
  "SHR Consulting",
  "YVIRO",
  "Tax Savings",
  "Real Estate Investment",
  "Property Invest",
  "Estate Investment",
  "Escape Game",
];

export const CERT_BADGES = 7;
export const CERT_COURSES = 3;

export const INDUSTRIES = [
  {
    name: "Real Estate",
    body: "Lead funnels, listing follow-up, agent and team workflows.",
  },
  {
    name: "Construction",
    body: "Quote follow-up, project pipelines, crew dispatch automation.",
  },
  {
    name: "Health & Wellness",
    body: "Patient intake, appointment reminders, care follow-up.",
  },
  {
    name: "Coaching",
    body: "Client onboarding, course delivery, retention nurture sequences.",
  },
  {
    name: "Home & Service",
    body: "Inbound call routing, booking flows, dispatch, review automation.",
  },
  {
    name: "Agency Owners",
    body: "White-label snapshots, sub-account templates, client onboarding, agency operations.",
  },
];

export const FAQS = [
  {
    q: "Do I need to already use GoHighLevel?",
    a: "No. If you don't have GHL yet, I set it up from scratch. Sub-account, pipelines, calendars, forms, automations, dashboards, templates. If you're already on it, I audit what's there and either clean it up or extend it.",
  },
  {
    q: "Will this work for my industry?",
    a: "Most service businesses fit. Agencies, coaches, home services, healthcare, hospitality, real estate, SaaS. The patterns are roughly the same; the details get tuned to how yours actually runs.",
  },
  {
    q: "How long until something is live?",
    a: "First working version is usually live in 7 to 14 days. A full production system, with logging, integrations, and AI workflows running together, takes another 2 to 4 weeks on top of that depending on scope.",
  },
  {
    q: "Can you connect my existing tools?",
    a: "Yes. Stripe, Calendly, Zapier, Make, n8n, Notion, Google Workspace, Slack, Twilio, OpenAI, Claude, your internal API. If it speaks webhook or HTTP, I can wire it in. If no native connector exists, I'll write one.",
  },
  {
    q: "Do you offer ongoing support after launch?",
    a: "Yes. Optional monthly retainers cover ongoing optimization, new automations, and AI updates. You can also take it fully in-house when you're ready. Everything is documented as we go.",
  },
  {
    q: "How does pricing work?",
    a: "Sprint-based. Two-week sprints, fixed price per sprint, one clear deliverable each time. Easier to budget than hourly, easier to scope than a fixed-bid project that has to predict every detail upfront.",
  },
];
