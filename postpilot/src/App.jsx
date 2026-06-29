import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ensureCalendly, openCalendly } from './calendly';

const PHONE_NUMBER = '262-341-7181';
const PHONE_HREF = 'tel:2623417181';
const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61573480569044';
const MAIN_SITE = 'https://zachhowell.dev';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const aiTrainingCompanies = ['Anthropic', 'Outlier', 'Alignerr', 'micro1'];

const painPoints = [
  {
    title: 'You know you should post — you just never do',
    description:
      'Staying active on Facebook keeps you top-of-mind. But between running the business and serving customers, "post something" is the task that always slides to next week.',
  },
  {
    title: 'Coming up with ideas is the hard part',
    description:
      'Staring at a blank post box is the worst. PostPilot brings the ideas to you — a steady stream of on-brand drafts so you never invent content from scratch again.',
  },
  {
    title: 'Hiring it out is expensive and off-brand',
    description:
      'A social agency runs hundreds a month and still sounds generic. PostPilot writes in your voice for a fraction of the cost — and you stay in control of every word.',
  },
];

const voicePoints = [
  {
    title: 'It studies your existing posts',
    description:
      "Before it writes a single word, PostPilot reads through your real Facebook history — the posts, captions, and replies you've already made.",
  },
  {
    title: 'It captures your tone',
    description:
      'Your phrasing, your personality, the way you actually talk to customers — it learns the voice that makes your business yours, not a generic template.',
  },
  {
    title: 'On-brand from day one',
    description:
      'The very first draft already sounds like you — not robotic AI filler. No long warm-up, no awkward "that’s not how I’d say it" phase.',
  },
];

const steps = [
  {
    step: '01',
    title: 'It drafts in your voice',
    desc: 'PostPilot studies your real past posts, then writes new ones that sound like you — words and a matching image, ready to go.',
  },
  {
    step: '02',
    title: 'It pings your phone',
    desc: 'When a draft is ready, you get a push notification — anywhere, even on cellular. No new app to babysit.',
  },
  {
    step: '03',
    title: 'You approve in a tap',
    desc: 'Open it, read it, and approve — or tweak a line first, or skip it. Nothing ever goes live without your say-so.',
  },
  {
    step: '04',
    title: 'It publishes for you',
    desc: 'Approved posts go straight to your Facebook page — text and a clean branded graphic. Consistent presence, zero copy-paste.',
  },
];

const postTypes = [
  {
    kind: 'Educate',
    title: 'Helpful Tips',
    desc: 'Practical, useful advice your customers care about — the kind of post that positions you as the expert in your field.',
  },
  {
    kind: 'Engage',
    title: 'Fun Facts & Hooks',
    desc: 'Surprising, shareable tidbits tied to what you do — the kind of post that makes people stop scrolling and react.',
  },
  {
    kind: 'Connect',
    title: 'Personality Posts',
    desc: 'Warm, human notes that show the people behind the business — the posts that build real, lasting connection.',
  },
  {
    kind: 'Promote',
    title: 'Wins & Announcements',
    desc: 'New offers, client wins, milestones, or a question for your audience — generate a fresh one in seconds, anytime.',
  },
];

const features = [
  {
    title: 'You approve everything',
    description:
      'PostPilot never posts on its own. Every draft waits for your tap. It removes the work, not the control.',
  },
  {
    title: 'It sounds like you',
    description:
      'Trained on your own past posts, so the voice, tone, and personality stay yours — not bland AI filler.',
  },
  {
    title: 'It creates the images, too',
    description:
      'Not just words — PostPilot generates a clean, on-brand graphic sized perfectly for Facebook. No designer, no Canva.',
  },
  {
    title: 'Runs from your pocket',
    description:
      'Approve, edit, or generate posts from your phone, anywhere. Install it to your home screen like an app.',
  },
  {
    title: 'A real content rhythm',
    description:
      'A dependable cadence keeps your page active and your business in the feed — automatically.',
  },
  {
    title: 'I set it all up',
    description:
      'No tech work on your end. I connect your page, tune the voice, and hand you a system that just runs.',
  },
];

const faqs = [
  {
    q: 'Will it post things without me seeing them first?',
    a: 'Never. Every single post waits for your approval. You get a notification, you review it, and only then does it publish. You can also edit any draft before it goes live.',
  },
  {
    q: 'Will the posts actually sound like me?',
    a: 'Yes — that is the whole point. Before it ever drafts, PostPilot analyzes your real existing posts, so it matches your voice and tone from day one. And since you approve each one, anything that feels off never goes out.',
  },
  {
    q: 'Does it make the images, or just the words?',
    a: 'Both. For the right post types, PostPilot automatically creates a clean, on-brand graphic sized for Facebook and attaches it — so your posts look designed, not thrown together.',
  },
  {
    q: 'Do I need to be technical to use it?',
    a: 'Not at all. I handle the entire setup — connecting your Facebook page, tuning the voice, and configuring the schedule. You just approve posts from your phone.',
  },
  {
    q: 'Can I change the schedule or post types?',
    a: 'Absolutely. The themes, days, and times are all yours to set. Want three posts a week or one? A different mix of topics? It is built around how you want to show up.',
  },
];

const SendIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
  </svg>
);

const ArrowIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const SectionHeader = ({ eyebrow, children, sub }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center mb-14"
  >
    <span className="text-sm font-black tracking-[0.3em] text-accent-orange uppercase mb-4 inline-block">
      {eyebrow}
    </span>
    <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-900 uppercase leading-[0.95]">
      {children}
    </h2>
    {sub && (
      <p className="text-base md:text-lg text-zinc-600 max-w-2xl mx-auto font-medium leading-relaxed mt-5">
        {sub}
      </p>
    )}
  </motion.div>
);

const Card = ({ children }) => (
  <motion.div
    variants={itemVariants}
    className="group relative flex flex-col p-8 rounded-[2.5rem] bg-white border border-zinc-200 shadow-sm hover:shadow-premium-hover transition-all duration-500 hover:-translate-y-2 border-b-2 border-b-transparent hover:border-b-accent-orange/40"
  >
    {children}
  </motion.div>
);

const PrimaryCTA = ({ children = 'Book a Setup Call', className = '' }) => (
  <button
    type="button"
    onClick={openCalendly}
    className={`group inline-flex items-center justify-center gap-3 rounded-full bg-sunset-gradient px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-white shadow-lg shadow-black/10 transition-transform hover:scale-105 active:scale-95 ${className}`}
  >
    {children}
    <ArrowIcon className="w-4 h-4" />
  </button>
);

export default function App() {
  // Preload Calendly so the booking popup opens instantly on click.
  useEffect(() => {
    ensureCalendly();
  }, []);

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* ── NAV ──────────────────────────────────────── */}
      <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 py-4">
        <nav className="flex w-full max-w-6xl items-center justify-between rounded-full border border-zinc-200 bg-white/80 backdrop-blur-xl px-5 py-3 shadow-sm">
          <a href="#top" className="flex items-center gap-2 font-black tracking-tight text-zinc-900">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-sunset-gradient text-white">
              <SendIcon className="h-4 w-4" />
            </span>
            <span className="text-lg">PostPilot</span>
          </a>
          <div className="flex items-center gap-3 sm:gap-5">
            <a
              href={MAIN_SITE}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline text-xs font-bold uppercase tracking-[0.18em] text-zinc-500 transition-colors hover:text-accent-orange"
            >
              by Zach Howell
            </a>
            <button
              type="button"
              onClick={openCalendly}
              className="inline-flex items-center gap-2 rounded-full bg-sunset-gradient px-4 py-2.5 text-[11px] sm:text-xs font-black uppercase tracking-[0.16em] text-white shadow-sm transition-transform hover:scale-105 active:scale-95"
            >
              Book a Call
            </button>
          </div>
        </nav>
      </header>

      <main id="top" className="px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {/* ── HERO ─────────────────────────────────── */}
          <section className="pt-40 md:pt-48 pb-24 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              <span className="text-sm font-black tracking-[0.3em] text-accent-orange uppercase mb-4 inline-block">
                PostPilot · AI Social Autopilot
              </span>
              <h1 className="heading-hero mb-8 text-zinc-900 uppercase">
                Your Facebook page, <span className="text-gradient">on autopilot</span>.
              </h1>
              <p className="text-xl md:text-2xl text-zinc-600 max-w-3xl mx-auto font-medium leading-relaxed mb-6">
                PostPilot is an AI agent that keeps your business posting — consistently, in your own voice — without eating your week. It writes the drafts <span className="text-zinc-900 font-bold">and creates the images to match</span>, sends them to your phone, and publishes the ones you approve.
              </p>
              <p className="text-sm md:text-base text-zinc-500 max-w-2xl mx-auto font-semibold mb-10">
                You approve every post before it goes live. It removes the busywork, not the control.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <PrimaryCTA />
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-zinc-900 transition-colors hover:border-accent-orange hover:text-accent-orange"
                >
                  Or Call {PHONE_NUMBER}
                </a>
              </div>
            </motion.div>
          </section>

          {/* ── CREDIBILITY ──────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-32 rounded-[3rem] border border-accent-orange/30 bg-gradient-to-br from-accent-orange/5 via-transparent to-accent-orange/5 p-10 md:p-14 text-center"
          >
            <span className="text-sm font-black tracking-[0.3em] text-accent-orange uppercase mb-4 inline-block">
              Built by an AI Engineer
            </span>
            <h2 className="text-2xl md:text-4xl font-black tracking-tighter text-zinc-900 leading-tight mb-6 max-w-3xl mx-auto">
              Made by someone who's <span className="text-gradient">paid to train AI</span> — not a no-code template.
            </h2>
            <p className="text-base md:text-lg text-zinc-600 font-medium leading-relaxed mb-9 max-w-2xl mx-auto">
              I'm Zach Howell, a senior software engineer. Leading AI labs and platforms pay me to train and evaluate frontier models, so PostPilot is built by someone who works inside how these models actually think, fail, and improve.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {aiTrainingCompanies.map((name) => (
                <span
                  key={name}
                  className="rounded-full bg-white border border-zinc-200 px-5 py-2.5 text-sm font-black tracking-tight text-zinc-900 shadow-sm"
                >
                  {name}
                </span>
              ))}
              <span className="text-sm font-bold text-zinc-500">+ more</span>
            </div>
          </motion.div>

          {/* ── PROBLEM ──────────────────────────────── */}
          <section className="mb-32">
            <SectionHeader eyebrow="Sound Familiar?">
              Posting consistently is <span className="text-gradient">hard</span>.
            </SectionHeader>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
            >
              {painPoints.map((p) => (
                <Card key={p.title}>
                  <h3 className="text-lg font-bold mb-3 tracking-tight text-zinc-900 group-hover:text-accent-orange transition-colors duration-300 leading-tight">
                    {p.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed font-medium">{p.description}</p>
                </Card>
              ))}
            </motion.div>
          </section>

          {/* ── SOUNDS LIKE YOU ──────────────────────── */}
          <section className="mb-32">
            <SectionHeader
              eyebrow="Sounds Like You"
              sub="This is why it doesn't sound like a robot. PostPilot analyzes your existing posts first — your tone, your style, your personality — so every draft lands in your voice from the very first one."
            >
              It learns your voice <span className="text-gradient">before it writes a word</span>.
            </SectionHeader>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
            >
              {voicePoints.map((p) => (
                <Card key={p.title}>
                  <h3 className="text-lg font-bold mb-3 tracking-tight text-zinc-900 group-hover:text-accent-orange transition-colors duration-300 leading-tight">
                    {p.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed font-medium">{p.description}</p>
                </Card>
              ))}
            </motion.div>
          </section>

          {/* ── HOW IT WORKS ─────────────────────────── */}
          <section className="mb-32">
            <SectionHeader eyebrow="How It Works">
              Four steps, <span className="text-gradient">zero busywork</span>.
            </SectionHeader>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6"
            >
              {steps.map((s) => (
                <motion.div
                  key={s.step}
                  variants={itemVariants}
                  className="flex flex-col p-8 rounded-[2.5rem] bg-white border border-zinc-200 shadow-sm"
                >
                  <span className="text-3xl font-black text-accent-orange/40 mb-4">{s.step}</span>
                  <h3 className="text-lg font-bold mb-3 tracking-tight text-zinc-900 leading-tight">{s.title}</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed font-medium">{s.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* ── PROOF ────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-32 rounded-[3rem] border border-accent-orange/30 bg-gradient-to-br from-accent-orange/5 via-transparent to-accent-orange/5 p-10 md:p-16 text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-green-600">Proof It Works</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-900 uppercase leading-[0.95] mb-6">
              Don't take my <span className="text-gradient">word for it</span>.
            </h2>
            <p className="text-lg text-zinc-600 font-medium leading-relaxed mb-10 max-w-2xl mx-auto">
              I've been running PostPilot on my own Facebook page for months. Every post you see there — words and graphics — came through this exact workflow. Go scroll it and judge for yourself.
            </p>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-sunset-gradient px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-white shadow-lg shadow-black/10 transition-transform hover:scale-105 active:scale-95"
            >
              See It On My Facebook
              <ArrowIcon className="w-4 h-4" />
            </a>
          </motion.div>

          {/* ── WHAT IT POSTS ────────────────────────── */}
          <section className="mb-32">
            <SectionHeader
              eyebrow="What It Posts"
              sub="These are the kinds of posts it creates — the exact mix, timing, and frequency are all tailored to your business."
            >
              A steady stream, <span className="text-gradient">built around you</span>.
            </SectionHeader>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6"
            >
              {postTypes.map((t) => (
                <Card key={t.title}>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-orange mb-3">{t.kind}</span>
                  <h3 className="text-lg font-bold mb-3 tracking-tight text-zinc-900 group-hover:text-accent-orange transition-colors duration-300 leading-tight">
                    {t.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed font-medium">{t.desc}</p>
                </Card>
              ))}
            </motion.div>
          </section>

          {/* ── WHY POSTPILOT ────────────────────────── */}
          <section className="mb-32">
            <SectionHeader eyebrow="Why PostPilot">
              The work is gone. The <span className="text-gradient">control stays</span>.
            </SectionHeader>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6"
            >
              {features.map((f) => (
                <Card key={f.title}>
                  <h3 className="text-lg font-bold mb-3 tracking-tight text-zinc-900 group-hover:text-accent-orange transition-colors duration-300 leading-tight">
                    {f.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed font-medium">{f.description}</p>
                </Card>
              ))}
            </motion.div>
          </section>

          {/* ── FAQ ──────────────────────────────────── */}
          <section className="mb-32">
            <SectionHeader eyebrow="Questions">
              The things people <span className="text-gradient">ask first</span>.
            </SectionHeader>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto"
            >
              {faqs.map((f) => (
                <motion.div
                  key={f.q}
                  variants={itemVariants}
                  className="flex flex-col p-8 rounded-[2.5rem] bg-white border border-zinc-200 shadow-sm"
                >
                  <h3 className="text-lg font-bold mb-3 tracking-tight text-zinc-900 leading-tight">{f.q}</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed font-medium">{f.a}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* ── FINAL CTA ────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24 rounded-[3.5rem] border border-zinc-200 bg-white shadow-sm p-12 md:p-20 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-900 uppercase leading-[0.95] mb-6">
              Ready to stop <span className="text-gradient">forgetting to post</span>?
            </h2>
            <p className="text-lg text-zinc-600 font-medium leading-relaxed mb-10 max-w-2xl mx-auto">
              Let's get PostPilot running on your Facebook page. In a quick call I'll learn your voice, set it all up, and hand you a system that keeps you posting — while you stay in control of every word.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <PrimaryCTA />
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-zinc-900 transition-colors hover:border-accent-orange hover:text-accent-orange"
              >
                Or Call {PHONE_NUMBER}
              </a>
            </div>
          </motion.div>
        </div>
      </main>

      {/* ── FOOTER ───────────────────────────────────── */}
      <footer className="border-t border-zinc-200 px-6 md:px-12 lg:px-24 py-12">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2 font-black tracking-tight text-zinc-900">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-sunset-gradient text-white">
              <SendIcon className="h-3.5 w-3.5" />
            </span>
            PostPilot
          </div>
          <p className="text-sm text-zinc-500 font-medium">
            A product by{' '}
            <a href={MAIN_SITE} target="_blank" rel="noopener noreferrer" className="font-bold text-zinc-900 hover:text-accent-orange transition-colors">
              Zach Howell · ZH Web Solutions
            </a>
          </p>
          <p className="text-xs text-zinc-400 font-bold uppercase tracking-[0.2em]">© 2026 PostPilot</p>
        </div>
      </footer>
    </div>
  );
}
