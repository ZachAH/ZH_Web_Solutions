import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { postPilotSchema, breadcrumb } from '../utils/structuredData';
import { ensureCalendly, openCalendly } from '../utils/calendly';

const PHONE_NUMBER = '262-341-7181';
const PHONE_HREF = 'tel:2623417181';
const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61573480569044';

const postPilotJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    postPilotSchema,
    breadcrumb([
      { name: 'Home', path: '/' },
      { name: 'PostPilot', path: '/postpilot' },
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

// ── The problem PostPilot solves ───────────────────────────
const painPoints = [
  {
    title: 'You know you should post — you just never do',
    description:
      'Staying active on Facebook is one of the cheapest ways to stay top-of-mind. But between running the business and serving customers, "post something" is the task that always slides to next week.',
  },
  {
    title: 'Coming up with ideas is the hard part',
    description:
      'Staring at a blank post box is the worst. PostPilot brings the ideas to you — a steady stream of on-brand drafts so you never have to invent content from scratch again.',
  },
  {
    title: 'Hiring it out is expensive and off-brand',
    description:
      'A social agency runs hundreds a month and still sounds generic. PostPilot writes in your voice for a fraction of the cost — and you stay in full control of every word.',
  },
];

// ── How it works ───────────────────────────────────────────
const steps = [
  {
    step: '01',
    title: 'It drafts in your voice',
    desc: 'PostPilot studies your real past posts, then writes new ones that sound like you — not a robot. Themed weekly content plus on-the-fly ideas, ready to go.',
  },
  {
    step: '02',
    title: 'It pings your phone',
    desc: 'When a draft is ready, you get a push notification — anywhere, even on cellular. No new app to babysit, no logging into a dashboard to check.',
  },
  {
    step: '03',
    title: 'You approve in a tap',
    desc: 'Open it, read it, and approve — or tweak a line first, or skip it. Nothing ever goes live without your say-so. You are always the final editor.',
  },
  {
    step: '04',
    title: 'It publishes for you',
    desc: 'Approved posts go straight to your Facebook Page — text, and a clean branded graphic when it fits. Consistent presence, zero copy-paste.',
  },
];

// ── What it posts ──────────────────────────────────────────
const postTypes = [
  {
    kind: 'Educate',
    title: 'Helpful Tips',
    desc: 'Practical, useful advice your customers actually care about — the kind of post that positions you as the expert in your field.',
    image: 'With graphic',
  },
  {
    kind: 'Engage',
    title: 'Fun Facts & Hooks',
    desc: 'Surprising, shareable tidbits tied to what you do — the kind of post that makes people stop scrolling and react.',
    image: 'With graphic',
  },
  {
    kind: 'Connect',
    title: 'Personality Posts',
    desc: 'Warm, human notes that show the people behind the business — the posts that build real, lasting connection.',
    image: 'Text or graphic',
  },
  {
    kind: 'Promote',
    title: 'Wins & Announcements',
    desc: 'New offers, client wins, milestones, or a question for your audience — generate a fresh one in seconds, anytime.',
    image: 'Your call',
  },
];

// ── Why it sounds like you ─────────────────────────────────
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

// ── Why it's different ─────────────────────────────────────
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
      'Not just words — PostPilot generates a clean, on-brand graphic to go with the post, sized perfectly for Facebook. No designer, no Canva, no extra step.',
  },
  {
    title: 'Runs from your pocket',
    description:
      'Approve, edit, or generate posts from your phone, anywhere. Install it to your home screen like an app.',
  },
  {
    title: 'A real content rhythm',
    description:
      'A dependable weekly cadence keeps your page active and your business in the feed — automatically.',
  },
  {
    title: 'I set it all up',
    description:
      'No tech work on your end. I connect your Page, tune the voice, and hand you a system that just runs.',
  },
];

// ── FAQ ────────────────────────────────────────────────────
const faqs = [
  {
    q: 'Will it post things without me seeing them first?',
    a: 'Never. Every single post waits for your approval. You get a notification, you review it, and only then does it publish. You can also edit any draft before it goes live.',
  },
  {
    q: 'Does it make the images, or just the words?',
    a: 'Both. For the right post types, PostPilot automatically creates a clean, on-brand graphic sized for Facebook and attaches it — so your posts look designed, not thrown together. Text-only posts stay text-only.',
  },
  {
    q: 'Will the posts actually sound like me?',
    a: 'Yes — that is the whole point. Before it ever drafts, PostPilot analyzes your real existing posts, so it matches your voice and tone from day one. And since you approve each one, anything that feels off never goes out.',
  },
  {
    q: 'Do I need to be technical to use it?',
    a: 'Not at all. I handle the entire setup — connecting your Facebook Page, tuning the voice, and configuring the schedule. You just approve posts from your phone.',
  },
  {
    q: 'Can I change the schedule or post types?',
    a: 'Absolutely. The themes, days, and times are all yours to set. Want three posts a week or one? A different mix of topics? It is built around how you want to show up.',
  },
];

const PostPilot = ({ handleMouseEnter, handleMouseLeave }) => {
  // Preload Calendly so the booking popup opens instantly on click.
  useEffect(() => {
    ensureCalendly();
  }, []);

  return (
    <section className="min-h-screen py-32 px-6 md:px-12 lg:px-24 bg-white dark:bg-transparent">
      <Seo
        title="PostPilot | AI Facebook Posting on Autopilot for Small Business — Zach Howell"
        description="PostPilot keeps your Facebook Page active without the time sink. An AI agent drafts posts in your voice, sends them to your phone for one-tap approval, and publishes the ones you okay — branded graphics included. You approve everything; nothing posts without you. Book a setup call."
        path="/postpilot"
        keywords="Facebook automation, AI social media posting, automated Facebook posts, small business social media automation, AI content for Facebook, social media autopilot, Facebook page management, AI marketing automation, Wisconsin small business marketing, automated social media posting tool"
        jsonLd={postPilotJsonLd}
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
            PostPilot · AI Social Autopilot
          </span>
          <h1
            className="heading-hero mb-8 text-zinc-900 dark:text-white uppercase"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Your Facebook page, <span className="text-gradient">on autopilot</span>.
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto font-medium leading-relaxed mb-6">
            PostPilot is an AI agent that keeps your business posting — consistently, in your own voice — without eating your week. It writes the drafts <span className="text-zinc-900 dark:text-white font-bold">and creates the images to match</span>, sends them to your phone, and publishes the ones you approve.
          </p>
          <p className="text-sm md:text-base text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto font-semibold mb-10">
            You approve every post before it goes live. It removes the busywork, not the control.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openCalendly}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-sunset-gradient px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-white shadow-lg shadow-accent-red/20 transition-transform hover:scale-105 active:scale-95"
            >
              Book a Setup Call
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

        {/* ── PROBLEM ────────────────────────────────── */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-sm font-black tracking-[0.3em] text-accent-orange uppercase mb-4 inline-block">
              Sound Familiar?
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-900 dark:text-white uppercase leading-[0.95]">
              Posting consistently is <span className="text-gradient">hard</span>.
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
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

        {/* ── SOUNDS LIKE YOU ────────────────────────── */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-sm font-black tracking-[0.3em] text-accent-orange uppercase mb-4 inline-block">
              Sounds Like You
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-900 dark:text-white uppercase leading-[0.95]">
              It learns your voice <span className="text-gradient">before it writes a word</span>.
            </h2>
            <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto font-medium leading-relaxed mt-5">
              This is why it doesn't sound like a robot. PostPilot analyzes your existing posts first — your tone, your style, your personality — so every draft lands in your voice from the very first one.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
          >
            {voicePoints.map((point) => (
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

        {/* ── HOW IT WORKS ───────────────────────────── */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-sm font-black tracking-[0.3em] text-accent-orange uppercase mb-4 inline-block">
              How It Works
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-900 dark:text-white uppercase leading-[0.95]">
              Four steps, <span className="text-gradient">zero busywork</span>.
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6"
          >
            {steps.map((item) => (
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

        {/* ── PROOF (I use it myself) ─────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-32 p-10 md:p-16 rounded-[3rem] border border-accent-orange/30 bg-gradient-to-br from-accent-orange/5 via-transparent to-accent-orange/5 dark:from-accent-orange/10 dark:to-accent-orange/5 overflow-hidden text-center"
        >
          <div className="absolute -top-1/2 -right-1/4 w-1/2 h-full bg-accent-orange/10 blur-[120px] pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-green-600 dark:text-green-400">
                Proof It Works
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-900 dark:text-white uppercase leading-[0.95] mb-6">
              Don't take my <span className="text-gradient">word for it</span>.
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 font-medium leading-relaxed mb-10">
              I've been running PostPilot on my own Facebook page for months. Every post you see there — words and graphics — came through this exact workflow. Go scroll it and judge for yourself.
            </p>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-sunset-gradient px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-white shadow-lg shadow-accent-red/20 transition-transform hover:scale-105 active:scale-95"
            >
              See It On My Facebook
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* ── WHAT IT POSTS ──────────────────────────── */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-sm font-black tracking-[0.3em] text-accent-orange uppercase mb-4 inline-block">
              What It Posts
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-900 dark:text-white uppercase leading-[0.95]">
              A steady stream, <span className="text-gradient">built around you</span>.
            </h2>
            <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto font-medium leading-relaxed mt-5">
              These are the kinds of posts it creates — the exact mix, timing, and frequency are all tailored to your business.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6"
          >
            {postTypes.map((type) => (
              <motion.div
                key={type.title}
                variants={itemVariants}
                className="group relative flex flex-col p-8 rounded-[2.5rem] bg-white dark:bg-obsidian-900/40 border border-zinc-200 dark:border-obsidian-800 shadow-sm hover:shadow-premium-hover transition-all duration-500 hover:-translate-y-2 active:scale-95 border-b-2 border-b-transparent hover:border-b-accent-orange/40"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-orange mb-3">
                  {type.kind}
                </span>
                <h3 className="text-lg font-bold mb-3 tracking-tight text-zinc-900 dark:text-white group-hover:text-accent-orange transition-colors duration-300 leading-tight">
                  {type.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300 text-sm mb-6 leading-relaxed font-medium flex-grow">
                  {type.desc}
                </p>
                <span className="text-[9px] uppercase font-black tracking-widest text-zinc-500 dark:text-zinc-200 bg-zinc-100 dark:bg-obsidian-700/5 border border-zinc-200 dark:border-transparent px-2 py-1 rounded-full self-start mt-auto">
                  {type.image}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── WHY IT'S DIFFERENT ─────────────────────── */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-sm font-black tracking-[0.3em] text-accent-orange uppercase mb-4 inline-block">
              Why PostPilot
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-900 dark:text-white uppercase leading-[0.95]">
              The work is gone. The <span className="text-gradient">control stays</span>.
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="group relative flex flex-col p-8 rounded-[2.5rem] bg-white dark:bg-obsidian-900/40 border border-zinc-200 dark:border-obsidian-800 shadow-sm hover:shadow-premium-hover transition-all duration-500 hover:-translate-y-2 active:scale-95 border-b-2 border-b-transparent hover:border-b-accent-orange/40"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <h3 className="text-lg font-bold mb-3 tracking-tight text-zinc-900 dark:text-white group-hover:text-accent-orange transition-colors duration-300 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed font-medium">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── FAQ ────────────────────────────────────── */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-sm font-black tracking-[0.3em] text-accent-orange uppercase mb-4 inline-block">
              Questions
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-900 dark:text-white uppercase leading-[0.95]">
              The things people <span className="text-gradient">ask first</span>.
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto"
          >
            {faqs.map((faq) => (
              <motion.div
                key={faq.q}
                variants={itemVariants}
                className="flex flex-col p-8 rounded-[2.5rem] bg-white dark:bg-obsidian-900/40 border border-zinc-200 dark:border-obsidian-800 shadow-sm"
              >
                <h3 className="text-lg font-bold mb-3 tracking-tight text-zinc-900 dark:text-white leading-tight">
                  {faq.q}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed font-medium">
                  {faq.a}
                </p>
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
              Ready to stop <span className="text-gradient">forgetting to post</span>?
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 font-medium leading-relaxed mb-10">
              Let's get PostPilot running on your Facebook Page. In a quick call I'll learn your voice, set it all up, and hand you a system that keeps you posting — while you stay in control of every word.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={openCalendly}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-sunset-gradient px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-white shadow-lg shadow-accent-red/20 transition-transform hover:scale-105 active:scale-95"
              >
                Book a Setup Call
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
            <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium mt-8">
              Curious what else AI can do for your business?{' '}
              <Link to="/custom-ai/" className="text-accent-orange font-bold hover:underline">
                See Custom AI →
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PostPilot;
