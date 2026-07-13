import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Seo from '../components/Seo';
import { getBlogPost, blogPosts } from '../data/blogPosts';
import { getLocationPath } from '../data/locationPages';
import { personSchema, breadcrumb } from '../utils/structuredData';
import { absoluteUrl, canonicalPath } from '../utils/seoUrls';
import { openCalendly } from '../utils/calendly';

const formatDate = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

const resolveLink = (to) => (to.startsWith('location:') ? getLocationPath(to.split(':')[1]) : to);

const BlogPost = () => {
  const { slug } = useParams();
  const post = getBlogPost(slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const path = canonicalPath(`/blog/${post.slug}`);
  const url = absoluteUrl(path);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.metaDescription,
        url,
        datePublished: post.publishDate,
        author: { '@type': 'Person', name: personSchema.name, url: personSchema.url },
        publisher: { '@type': 'Organization', name: 'ZH Web Solutions', url: 'https://zachhowell.dev' },
      },
      breadcrumb([
        { name: 'Home', path: '/' },
        { name: 'Blog', path: '/blog' },
        { name: post.title, path },
      ]),
    ],
  };

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <section className="min-h-screen py-32 px-6 md:px-12 lg:px-24 bg-white dark:bg-transparent">
      <Seo
        title={`${post.title} | ZH Web Solutions Blog`}
        description={post.metaDescription}
        path={path}
        keywords={post.keywords}
        type="article"
        jsonLd={jsonLd}
      />

      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Link to="/blog" className="text-sm font-bold text-accent-orange hover:underline mb-6 inline-block">
            ← Back to the blog
          </Link>
          <p className="text-[10px] font-black uppercase tracking-[0.24em] text-accent-orange mb-4">
            {formatDate(post.publishDate)}
          </p>
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter text-obsidian-950 dark:text-white leading-[1.05] mb-10">
            {post.title}
          </h1>

          <div className="prose-content space-y-5">
            {post.body.map((block, i) => {
              if (block.type === 'h2') {
                return (
                  <h2 key={i} className="text-2xl md:text-3xl font-bold tracking-tight text-obsidian-950 dark:text-white pt-4">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === 'list') {
                return (
                  <ul key={i} className="space-y-3 list-none">
                    {block.items.map((item) => (
                      <li key={item} className="flex gap-3 text-zinc-700 dark:text-zinc-300 leading-relaxed">
                        <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-accent-orange shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-base md:text-lg">
                  {block.text}
                </p>
              );
            })}
          </div>

          {post.relatedLinks && post.relatedLinks.length > 0 && (
            <div className="mt-12 rounded-[2rem] border border-zinc-200 dark:border-white/10 bg-zinc-50/80 dark:bg-white/5 p-6 md:p-8">
              <p className="text-[10px] font-black uppercase tracking-[0.24em] text-accent-orange mb-4">
                Related
              </p>
              <div className="flex flex-wrap gap-3">
                {post.relatedLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={resolveLink(link.to)}
                    className="rounded-full border border-zinc-200 dark:border-white/10 bg-white dark:bg-obsidian-950 px-5 py-2.5 text-sm font-bold text-obsidian-950 dark:text-white hover:border-accent-orange/40 hover:text-accent-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-10 rounded-[2.5rem] bg-obsidian-950 text-white p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-black tracking-tighter mb-4">
              Ready to talk about your site?
            </h2>
            <p className="text-zinc-300 mb-7 max-w-xl mx-auto">
              Book a free 30-minute call — no pitch, just an honest look at what you actually need.
            </p>
            <button
              type="button"
              onClick={openCalendly}
              className="inline-flex items-center justify-center rounded-full bg-accent-orange px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-white hover:bg-accent-orange/90 transition-colors"
            >
              Book a Free Call
            </button>
          </div>

          {otherPosts.length > 0 && (
            <div className="mt-14">
              <h2 className="text-xl font-bold tracking-tight text-obsidian-950 dark:text-white mb-5">
                More from the blog
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {otherPosts.map((p) => (
                  <Link
                    key={p.slug}
                    to={`/blog/${p.slug}`}
                    className="rounded-[1.5rem] border border-zinc-200 dark:border-white/10 bg-zinc-50/60 dark:bg-white/5 p-5 hover:border-accent-orange/40 transition-colors"
                  >
                    <p className="font-bold text-obsidian-950 dark:text-white">{p.title}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPost;
