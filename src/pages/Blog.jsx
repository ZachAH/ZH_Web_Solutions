import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Seo from '../components/Seo';
import { blogPosts } from '../data/blogPosts';
import { breadcrumb } from '../utils/structuredData';
import { absoluteUrl } from '../utils/seoUrls';

const blogJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    breadcrumb([
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' },
    ]),
    {
      '@type': 'Blog',
      name: 'ZH Web Solutions Blog',
      url: absoluteUrl('/blog'),
      description: 'Web development, local SEO, and AI automation guidance for Southeastern Wisconsin small businesses.',
    },
  ],
};

const formatDate = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

const sortedPosts = [...blogPosts].sort((a, b) => (a.publishDate < b.publishDate ? 1 : -1));

const Blog = () => {
  return (
    <section className="min-h-screen py-32 px-6 md:px-12 lg:px-24 bg-white dark:bg-transparent">
      <Seo
        title="Web Development, Local SEO & AI Blog | ZH Web Solutions"
        description="Practical web development, local SEO, and AI automation guidance for Brookfield, Milwaukee, Waukesha, and Southeastern Wisconsin small businesses."
        path="/blog"
        keywords="Wisconsin web development blog, local SEO blog, small business website advice, AI automation blog"
        jsonLd={blogJsonLd}
      />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-xs font-black tracking-[0.32em] text-accent-orange uppercase mb-5 inline-block">
            The Blog
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-obsidian-950 dark:text-white leading-[0.95] mb-6">
            Straight answers on websites, SEO &amp; AI.
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-300 max-w-2xl leading-relaxed">
            No fluff, no "10x your business" gimmicks — practical guidance for Southeastern Wisconsin business owners deciding what to build, fix, or automate next.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5">
          {sortedPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
            >
              <Link
                to={`/blog/${post.slug}`}
                className="group block rounded-[2rem] border border-zinc-200 dark:border-white/10 bg-zinc-50/80 dark:bg-white/5 p-7 md:p-9 hover:border-accent-orange/40 hover:-translate-y-1 transition-all"
              >
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-accent-orange mb-3">
                  {formatDate(post.publishDate)}
                </p>
                <h2 className="text-xl md:text-2xl font-bold tracking-tight text-obsidian-950 dark:text-white mb-3 group-hover:text-accent-orange transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {post.excerpt}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
