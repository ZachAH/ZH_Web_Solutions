import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { customAiSchema, breadcrumb } from '../utils/structuredData';
import { ensureCalendly, openCalendly } from '../utils/calendly';

const PHONE_NUMBER = '262-341-7181';
const PHONE_HREF = 'tel:2623417181';

// TODO(zach): confirm the exact CodebaseQA public repo URL — defaults to GitHub profile.
const CODEBASEQA_REPO_URL = 'https://github.com/ZachAH';

const customAiJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    customAiSchema,
    breadcrumb([
      { name: 'Home', path: '/' },
      { name: 'Custom AI', path: '/custom-ai' },
    ]),
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

// ── Pain points AI solves ──────────────────────────────────
const painPoints = [
  {
    title: 'Drowning in manual work',
    description:
      'Your team copies data between tools, retypes the same emails, and chases approvals by hand. I build AI agents that do that work automatically — accurately, around the clock.',
  },
  {
    title: 'Leads slipping through the cracks',
    description:
      'Slow replies cost deals. AI assistants qualify, route, and respond to inbound leads in seconds, so no opportunity goes cold while you sleep.',
  },
  {
    title: 'Knowledge trapped in documents',
    description:
      'Contracts, PDFs, spreadsheets, and support tickets hold answers nobody has time to dig for. I build AI search and assistants that surface the right answer instantly.',
  },
  {
    title: 'Support that can’t keep up',
    description:
      'Repetitive questions eat your team alive. AI chat and email agents resolve the routine 80% and hand the rest to a human with full context.',
  },
  {
    title: 'Reporting that takes all week',
    description:
      'AI pipelines pull from your systems, analyze the numbers, and write the summary — turning days of spreadsheet wrangling into a morning email.',
  },
  {
    title: 'Content bottlenecks',
    description:
      'Product descriptions, listings, proposals, and follow-ups at scale. I build AI tools tuned to your brand voice so output stays on-message, not generic.',
  },
];

// ── What I can build ───────────────────────────────────────
const builds = [
  {
    title: 'Custom AI Assistants & Agents',
    description:
      'Purpose-built chat and voice agents trained on your business — booking appointments, answering customers, qualifying leads, and taking real actions in your tools.',
    tags: ['LLM Agents', 'RAG', 'Tool Use'],
  },
  {
    title: 'Workflow Automation',
    description:
      'End-to-end automations that connect your apps and let AI make the judgment calls in between — intake, routing, data entry, and follow-up handled hands-free.',
    tags: ['Automation', 'Integrations', 'APIs'],
  },
  {
    title: 'Document & Data Intelligence',
    description:
      'AI that reads contracts, invoices, forms, and reports — extracting, classifying, and structuring data, then making it searchable in plain English.',
    tags: ['Extraction', 'Search', 'RAG'],
  },
  {
    title: 'AI-Powered Web Apps',
    description:
      'Full custom products with AI at the core — dashboards, internal tools, and customer-facing apps built on React with secure, scalable backends.',
    tags: ['React', 'Node', 'Full-Stack'],
  },
  {
    title: 'Smart Content Engines',
    description:
      'Generate on-brand copy, listings, summaries, and personalized outreach at scale — with guardrails so the output always sounds like you.',
    tags: ['Generation', 'Brand Voice', 'Scale'],
  },
  {
    title: 'Model Integration & Strategy',
    description:
      'Not sure where AI fits? I audit your operation, find the highest-ROI use cases, and ship a working prototype — fast — before you commit to a big build.',
    tags: ['Strategy', 'Prototyping', 'ROI'],
  },
];

// ── How AI drives revenue ──────────────────────────────────
const revenueDrivers = [
  {
    metric: 'Respond in seconds',
    label: 'Faster lead response',
    desc: 'AI engages every inquiry instantly — booking calls and capturing buyers before competitors reply.',
  },
  {
    metric: 'Hours back weekly',
    label: 'Lower operating cost',
    desc: 'Automating repetitive work frees your team to focus on the things that actually grow the business.',
  },
  {
    metric: '24/7 coverage',
    label: 'Always-on service',
    desc: 'Your AI never clocks out — qualifying, answering, and converting around the clock.',
  },
  {
    metric: 'Fewer errors',
    label: 'Higher accuracy',
    desc: 'Consistent, rules-aware AI removes the costly mistakes that come with manual, repetitive tasks.',
  },
];

// ── How I work (FDE framing, woven in) ─────────────────────
const process = [
  {
    step: '01',
    title: 'Embed & Discover',
    desc: 'I sit with you and your team to learn the workflow, find the real bottleneck, and pinpoint where AI delivers the most value, not the most hype.',
  },
  {
    step: '02',
    title: 'Prototype Fast',
    desc: 'You see a working solution in days, not months. We validate it against real data and your real edge cases before scaling.',
  },
  {
    step: '03',
    title: 'Ship to Production',
    desc: 'I build it for reliability and security, integrate it into the tools you already use, and deploy it so it works on day one.',
  },
  {
    step: '04',
    title: 'Hand Off & Support',
    desc: 'You own the code and the accounts. I document everything and stay available to extend it as your needs grow.',
  },
];

// ── AI labs & platforms that pay me to train/eval models ───
const aiTrainingCompanies = ['Anthropic', 'Outlier', 'Alignerr', 'micro1'];

// ── AI I've already shipped ────────────────────────────────
const builtApps = [
  {
    name: 'PostPilot',
    tagline: 'AI Facebook posting on autopilot',
    description:
      'An AI agent that keeps a business active on Facebook — it drafts posts in your voice, pings your phone for a one-tap approval, and publishes the ones you okay, branded graphics included. You approve everything; nothing posts without you.',
    tags: ['Claude Agent', 'Automation', 'PWA'],
    status: 'Live product',
    cta: 'Explore PostPilot',
    to: '/postpilot/',
    external: false,
  },
  {
    name: 'CodebaseQA',
    tagline: 'Ask any GitHub repo questions in plain English',
    description:
      'A full-stack Code RAG app: point it at a repository and it indexes the source into a vector store, then a friendly assistant answers questions like "how does auth work?" — grounded in the real code, with file-and-line citations.',
    tags: ['RAG', 'pgvector', 'Full-Stack'],
    status: 'Open source',
    cta: 'View on GitHub',
    to: CODEBASEQA_REPO_URL,
    external: true,
  },
];

const CustomAi = ({ handleMouseEnter, handleMouseLeave }) => {
  // Preload Calendly so the booking popup opens instantly on click.
  useEffect(() => {
    ensureCalendly();
  }, []);

  return (
    <section className="min-h-screen py-32 px-6 md:px-12 lg:px-24 bg-white dark:bg-transparent">
      <Seo
        title="Custom AI Development for Business | AI Automation, Agents & Apps — Zach Howell"
        description="Custom AI products built for your business: AI assistants, workflow automation, document intelligence, and AI-powered web apps. I embed with your team to find the highest-ROI use cases and ship working solutions fast. Book a free AI strategy call."
        path="/custom-ai"
        keywords="custom AI development, AI automation for business, build AI agents, custom AI products, AI workflow automation, LLM application development, AI chatbot development, AI consultant Wisconsin, forward deployed engineer, RAG development, AI integration services, business process automation AI, AI engineer, AI model training, RLHF, frontier model evaluation, paid AI trainer"
        jsonLd={customAiJsonLd}
      />

      <div className="max-w-7xl mx-auto">
        {/* ── HERO ───────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <span className="text-sm font-black tracking-[0.3em] text-accent-orange uppercase mb-4 inline-block">
            Custom AI Solutions
          </span>
          <h1
            className="heading-hero mb-8 text-zinc-900 dark:text-white uppercase"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            AI That <span className="text-gradient">Works</span> For You.
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto font-medium leading-relaxed mb-10">
            I build custom AI products that solve real business problems — assistants, automations, and intelligent apps that cut busywork, capture more revenue, and run around the clock. No off-the-shelf gimmicks. Built for your workflow, owned by you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openCalendly}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-sunset-gradient px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-white shadow-lg shadow-accent-red/20 transition-transform hover:scale-105 active:scale-95"
            >
              Book a Free AI Strategy Call
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-accent-orange/30 bg-accent-orange/10 px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-accent-orange transition-colors hover:bg-accent-orange hover:text-white"
              aria-label={`Call Zach Howell at ${PHONE_NUMBER}`}
            >
              Or Call {PHONE_NUMBER}
            </a>
          </div>
        </motion.div>

        {/* ── I TRAIN AI (credibility) ───────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-32 p-10 md:p-14 rounded-[3rem] border border-accent-orange/30 bg-gradient-to-br from-accent-orange/5 via-transparent to-accent-orange/5 dark:from-accent-orange/10 dark:to-accent-orange/5 overflow-hidden text-center"
        >
          <div className="absolute -top-1/2 -left-1/4 w-1/2 h-full bg-accent-orange/10 blur-[120px] pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-sm font-black tracking-[0.3em] text-accent-orange uppercase mb-4 inline-block">
              Not Just a Builder — a Trainer
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-900 dark:text-white uppercase leading-[0.95] mb-6">
              I get paid to <span className="text-gradient">train the AI</span> I build with.
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 font-medium leading-relaxed mb-10">
              I don't just use AI — I help train it. Leading AI labs and platforms pay me to train and evaluate frontier models, so the AI I bring to your business comes from someone who works inside how these models actually think, fail, and improve.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {aiTrainingCompanies.map((name) => (
                <span
                  key={name}
                  className="rounded-full bg-white dark:bg-obsidian-950 border border-zinc-200 dark:border-white/10 px-5 py-2.5 text-sm font-black tracking-tight text-zinc-900 dark:text-white shadow-sm"
                >
                  {name}
                </span>
              ))}
              <span className="text-sm font-bold text-zinc-500 dark:text-zinc-400">+ more</span>
            </div>
          </div>
        </motion.div>

        {/* ── PAIN POINTS ────────────────────────────── */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-sm font-black tracking-[0.3em] text-accent-orange uppercase mb-4 inline-block">
              Problems Worth Solving
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-900 dark:text-white uppercase leading-[0.95]">
              Where AI saves you <span className="text-gradient">time &amp; money</span>.
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6"
          >
            {painPoints.map((point) => (
              <motion.div
                key={point.title}
                variants={itemVariants}
                className="group relative flex flex-col p-8 rounded-[2.5rem] bg-white dark:bg-obsidian-900/40 border border-zinc-200 dark:border-obsidian-800 shadow-sm hover:shadow-premium-hover transition-all duration-500 hover:-translate-y-2 active:scale-95 border-b-2 border-b-transparent hover:border-b-accent-orange/40"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <h3 className="text-lg font-bold mb-3 tracking-tight text-zinc-900 dark:text-white group-hover:text-accent-orange transition-colors duration-300 leading-tight">
                  {point.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed font-medium">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── WHAT I BUILD ───────────────────────────── */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-sm font-black tracking-[0.3em] text-accent-orange uppercase mb-4 inline-block">
              What I Can Build
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-900 dark:text-white uppercase leading-[0.95]">
              Custom AI, built <span className="text-gradient">around you</span>.
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6"
          >
            {builds.map((build) => (
              <motion.div
                key={build.title}
                variants={itemVariants}
                className="group relative flex flex-col p-8 rounded-[2.5rem] bg-white dark:bg-obsidian-900/40 border border-zinc-200 dark:border-obsidian-800 shadow-sm hover:shadow-premium-hover transition-all duration-500 hover:-translate-y-2 active:scale-95 border-b-2 border-b-transparent hover:border-b-accent-orange/40"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <h3 className="text-lg font-bold mb-3 tracking-tight text-zinc-900 dark:text-white group-hover:text-accent-orange transition-colors duration-300 leading-tight">
                  {build.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300 text-sm mb-6 leading-relaxed font-medium flex-grow">
                  {build.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {build.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] uppercase font-black tracking-widest text-zinc-500 dark:text-zinc-200 bg-zinc-100 dark:bg-obsidian-700/5 border border-zinc-200 dark:border-transparent px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── REVENUE DRIVERS ────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-32 p-10 md:p-14 rounded-[3rem] border border-accent-orange/30 bg-gradient-to-br from-accent-orange/5 via-transparent to-accent-orange/5 dark:from-accent-orange/10 dark:to-accent-orange/5 overflow-hidden"
        >
          <div className="absolute -top-1/2 -right-1/4 w-1/2 h-full bg-accent-orange/10 blur-[120px] pointer-events-none" />
          <div className="relative z-10">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-green-600 dark:text-green-400">
                  Built to Pay for Itself
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-900 dark:text-white uppercase leading-[0.95]">
                How AI drives <span className="text-gradient">more revenue</span>.
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
              {revenueDrivers.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[2rem] bg-white dark:bg-obsidian-950 border border-zinc-200 dark:border-white/10 p-7 shadow-sm text-center sm:text-left"
                >
                  <div className="text-2xl md:text-3xl font-black text-gradient tracking-tight mb-1">
                    {item.metric}
                  </div>
                  <div className="text-xs font-black uppercase tracking-[0.18em] text-accent-orange mb-3">
                    {item.label}
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── HOW I WORK (FDE) ───────────────────────── */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-sm font-black tracking-[0.3em] text-accent-orange uppercase mb-4 inline-block">
              How I Work
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-900 dark:text-white uppercase leading-[0.95]">
              I embed, build, and <span className="text-gradient">ship fast</span>.
            </h2>
            <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto font-medium leading-relaxed mt-5">
              I work like a forward-deployed engineer: I get inside your operation, solve the real problem, and put working software in your hands quickly — then hand it over so it’s yours.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6"
          >
            {process.map((item) => (
              <motion.div
                key={item.step}
                variants={itemVariants}
                className="flex flex-col p-8 rounded-[2.5rem] bg-white dark:bg-obsidian-900/40 border border-zinc-200 dark:border-obsidian-800 shadow-sm"
              >
                <span className="text-3xl font-black text-accent-orange/30 mb-4">{item.step}</span>
                <h3 className="text-lg font-bold mb-3 tracking-tight text-zinc-900 dark:text-white leading-tight">
                  {item.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── AI I'VE SHIPPED ────────────────────────── */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-sm font-black tracking-[0.3em] text-accent-orange uppercase mb-4 inline-block">
              Built &amp; Shipped
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-900 dark:text-white uppercase leading-[0.95]">
              AI I've already <span className="text-gradient">put to work</span>.
            </h2>
            <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto font-medium leading-relaxed mt-5">
              Not slideware — real AI products I've designed, built, and shipped. The same approach I'd bring to your project.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
          >
            {builtApps.map((app) => (
              <motion.div
                key={app.name}
                variants={itemVariants}
                className="group relative flex flex-col p-8 md:p-10 rounded-[2.5rem] bg-white dark:bg-obsidian-900/40 border border-zinc-200 dark:border-obsidian-800 shadow-sm hover:shadow-premium-hover transition-all duration-500 hover:-translate-y-2 border-b-2 border-b-transparent hover:border-b-accent-orange/40"
              >
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-[0.25em] text-green-600 dark:text-green-400">
                    {app.status}
                  </span>
                </div>
                <h3 className="text-2xl font-black tracking-tight text-zinc-900 dark:text-white mb-1">
                  {app.name}
                </h3>
                <p className="text-sm font-bold text-accent-orange mb-4">{app.tagline}</p>
                <p className="text-zinc-600 dark:text-zinc-300 text-sm mb-6 leading-relaxed font-medium flex-grow">
                  {app.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-7">
                  {app.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] uppercase font-black tracking-widest text-zinc-500 dark:text-zinc-200 bg-zinc-100 dark:bg-obsidian-700/5 border border-zinc-200 dark:border-transparent px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {app.external ? (
                  <a
                    href={app.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-zinc-900 dark:text-white group-hover:text-accent-orange transition-colors self-start mt-auto"
                  >
                    {app.cta}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                ) : (
                  <Link
                    to={app.to}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-zinc-900 dark:text-white group-hover:text-accent-orange transition-colors self-start mt-auto"
                  >
                    {app.cta}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── FINAL CTA ──────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-12 md:p-20 rounded-[3.5rem] bg-white dark:bg-obsidian-900/40 border border-zinc-200 dark:border-obsidian-800 shadow-sm text-center overflow-hidden"
        >
          <div className="absolute -top-1/3 left-1/2 -translate-x-1/2 w-1/2 h-full bg-accent-orange/10 blur-[120px] pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-900 dark:text-white uppercase leading-[0.95] mb-6">
              Have a problem AI could <span className="text-gradient">solve</span>?
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 font-medium leading-relaxed mb-10">
              Tell me what’s slowing your business down. In a free 30-minute call, I’ll tell you straight whether AI is the right fit — and if it is, exactly what I’d build to fix it.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={openCalendly}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-sunset-gradient px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-white shadow-lg shadow-accent-red/20 transition-transform hover:scale-105 active:scale-95"
              >
                Book a Free AI Strategy Call
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-accent-orange/30 bg-accent-orange/10 px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-accent-orange transition-colors hover:bg-accent-orange hover:text-white"
                aria-label={`Call Zach Howell at ${PHONE_NUMBER}`}
              >
                Or Call {PHONE_NUMBER}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomAi;
