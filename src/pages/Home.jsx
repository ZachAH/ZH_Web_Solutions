import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../components/hero';
import TrustBar from '../components/TrustBar';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import BeforeAfter from '../components/BeforeAfter';
import Seo from '../components/Seo';
import { seoContent } from '../data/seoContent';
import { getLocationPath } from '../data/locationPages';
import {
  personSchema,
  websiteSchema,
} from '../utils/structuredData';

const homeJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [websiteSchema, personSchema],
};


function LocalAreasBlurb() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[2rem] border border-zinc-200 dark:border-white/10 bg-zinc-50/80 dark:bg-white/5 p-10 md:p-14"
        >
          <p className="text-[10px] font-black uppercase tracking-[0.24em] text-accent-orange mb-4">
            Serving Southeastern Wisconsin
          </p>
          <h2 className="text-2xl md:text-3xl font-black tracking-tight text-obsidian-950 dark:text-white mb-4">
            Built for businesses across the region.
          </h2>
          <p className="text-text-secondary dark:text-zinc-300 leading-relaxed max-w-2xl mb-6">
            Custom React builds and local SEO tuned to the market you actually compete in — not a generic template. See the market-specific approach for{' '}
            <Link to={getLocationPath('brookfield')} className="font-bold text-accent-orange hover:underline">
              Brookfield
            </Link>
            ,{' '}
            <Link to={getLocationPath('milwaukee')} className="font-bold text-accent-orange hover:underline">
              Milwaukee
            </Link>
            , and{' '}
            <Link to={getLocationPath('waukesha')} className="font-bold text-accent-orange hover:underline">
              Waukesha
            </Link>
            , or browse every{' '}
            <Link to="/locations" className="font-bold text-accent-orange hover:underline">
              service area
            </Link>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function AiBlurb() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2rem] border border-accent-orange/20 dark:border-accent-orange/15 bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-obsidian-900 dark:via-obsidian-950 dark:to-orange-950/20 p-10 md:p-14 shadow-premium"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(249,115,22,0.18),transparent_60%)]" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 mb-4 rounded-full border border-accent-orange/40 bg-accent-orange/10 px-4 py-1 text-[10px] font-black uppercase tracking-[0.24em] text-accent-orange">
                Custom AI Solutions
                <span className="text-[8px] border border-current/40 px-1.5 py-0.5 rounded-full leading-none">New</span>
              </span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-obsidian-950 dark:text-white leading-tight mb-4">
                Need to automate, build, or fix something with{' '}
                <span className="text-gradient">AI?</span>
              </h2>
              <p className="text-text-secondary dark:text-zinc-300 text-base leading-relaxed">
                I build custom AI products that solve real business problems — assistants, workflow automation, document intelligence, and AI-powered apps. I find your biggest time-sinks and turn them into software that saves money and drives revenue.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                to="/custom-ai/"
                className="inline-flex items-center gap-2 rounded-full bg-sunset-gradient px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-white shadow-lg transition-all hover:shadow-accent-red/30 hover:scale-105 active:scale-95"
              >
                Explore Custom AI
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PostPilotBlurb() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2rem] border border-sky-300/30 dark:border-sky-500/15 bg-gradient-to-br from-sky-50 via-white to-blue-50 dark:from-obsidian-900 dark:via-obsidian-950 dark:to-sky-950/20 p-10 md:p-14 shadow-premium"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.16),transparent_60%)]" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 mb-4 rounded-full border border-sky-400/40 bg-sky-400/10 px-4 py-1 text-[10px] font-black uppercase tracking-[0.24em] text-sky-600 dark:text-sky-400">
                PostPilot
                <span className="text-[8px] border border-current/40 px-1.5 py-0.5 rounded-full leading-none">New</span>
              </span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-obsidian-950 dark:text-white leading-tight mb-4">
                Never run out of things to{' '}
                <span className="text-gradient">post.</span>
              </h2>
              <p className="text-text-secondary dark:text-zinc-300 text-base leading-relaxed">
                PostPilot is my AI agent that keeps your Facebook page active on autopilot — it writes posts in your voice, creates the images to match, and sends each one to your phone for a one-tap approval. You approve everything; nothing posts without you.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href="https://postpilot.zachhowell.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-sunset-gradient px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-white shadow-lg transition-all hover:shadow-accent-red/30 hover:scale-105 active:scale-95"
              >
                Meet PostPilot
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function WeddingBlurb() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2rem] border border-obsidian-700/10 dark:border-white/5 bg-gradient-to-br from-rose-50 via-white to-pink-50 dark:from-obsidian-900 dark:via-obsidian-950 dark:to-rose-950/20 p-10 md:p-14 shadow-premium"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(251,113,133,0.15),transparent_60%)]" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-xl">
              <span className="inline-block mb-4 rounded-full border border-rose-300/60 bg-rose-100/70 dark:border-rose-500/30 dark:bg-rose-900/20 px-4 py-1 text-[10px] font-black uppercase tracking-[0.24em] text-rose-600 dark:text-rose-400">
                Wedding Websites
              </span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-obsidian-950 dark:text-white leading-tight mb-4">
                Getting Married?<br />
                <span className="text-rose-500 dark:text-rose-400">Your wedding deserves a beautiful site.</span>
              </h2>
              <p className="text-text-secondary dark:text-zinc-300 text-base leading-relaxed">
                I build custom wedding websites — RSVP management, gift registries, your story, and more. Fast, mobile-first, and uniquely yours. No templates, no subscriptions, just a stunning site you own forever.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href="https://weddings.zachhowell.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-rose-500 hover:bg-rose-600 px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-white shadow-lg transition-all hover:shadow-rose-500/30 hover:scale-105 active:scale-95"
              >
                View Wedding Packages
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Home({ handleMouseEnter, handleMouseLeave }) {
  return (
    <>
      <Seo
        title={seoContent.home.title}
        description={seoContent.home.description}
        path={seoContent.home.path}
        keywords={seoContent.home.keywords}
        jsonLd={homeJsonLd}
      />
      <Hero
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />
      <TrustBar />
      <BeforeAfter
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />
      <Projects
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />
      <LocalAreasBlurb />
      <AiBlurb />
      <PostPilotBlurb />
      <WeddingBlurb />
      <Contact />
    </>
  );
}

export default Home;
