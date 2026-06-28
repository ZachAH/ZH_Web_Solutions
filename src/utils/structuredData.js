// Reusable JSON-LD structured-data builders for SEO.
// Spec: https://schema.org
import { SERVICE_AREA_NAMES } from '../data/locationPages';
import { SITE_URL, absoluteUrl } from './seoUrls';

const WISCONSIN_SERVICE_AREAS = SERVICE_AREA_NAMES.map((name) => ({
  '@type': 'City',
  name,
}));

const ADDRESS = {
  '@type': 'PostalAddress',
  addressLocality: 'West Bend',
  addressRegion: 'WI',
  postalCode: '53095',
  addressCountry: 'US',
};

const GEO = {
  '@type': 'GeoCoordinates',
  latitude: 43.4253,
  longitude: -88.1834,
};

export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Zach Howell',
  url: SITE_URL,
  image: `${SITE_URL}/og-preview.png`,
  jobTitle: 'Senior Full-Stack Software Engineer & AI Engineer',
  description:
    'Wisconsin-based senior full-stack software engineer with 6+ years of experience building React, Node.js, and Firebase web applications, custom software, and AI products for small businesses and brands. Also paid by leading AI labs and platforms to train and evaluate frontier AI models.',
  address: ADDRESS,
  knowsAbout: [
    'React',
    'TypeScript',
    'Node.js',
    'Firebase',
    'Stripe',
    'Tailwind CSS',
    'Web Performance',
    'SEO',
    'Accessibility',
    'E-commerce Development',
    'Custom Web Applications',
    'Custom AI Development',
    'AI Model Training & Evaluation',
    'Large Language Models (LLMs)',
    'Retrieval-Augmented Generation (RAG)',
    'AI Agents',
  ],
  sameAs: [
    'https://github.com/zachhowell',
    'https://www.linkedin.com/in/zachhowell',
  ],
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#business`,
  name: 'ZH Web Solutions',
  image: `${SITE_URL}/og-preview.png`,
  url: SITE_URL,
  telephone: '+1-262-341-7181',
  description:
    'Custom React web development and local SEO for Wisconsin businesses across Southeastern Wisconsin, including West Bend, Milwaukee, Brookfield, Mequon, Waukesha, Menomonee Falls, Cedarburg, and surrounding markets.',
  priceRange: '$$',
  areaServed: WISCONSIN_SERVICE_AREAS,
  address: ADDRESS,
  geo: GEO,
  founder: { '@type': 'Person', name: 'Zach Howell' },
  knowsAbout: [
    'Custom React Development',
    'Small Business Web Design',
    'E-commerce Development',
    'SEO & Performance Optimization',
    'Web Hosting & DNS Management',
    'WCAG Accessibility',
  ],
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Zach Howell — Wisconsin Web Developer',
  url: SITE_URL,
  description:
    'Custom web development, technical SEO, and high-performance digital experiences for Wisconsin small businesses.',
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/?s={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

export const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Web Development',
  provider: {
    '@type': 'ProfessionalService',
    name: 'Zach Howell — Wisconsin Web Development',
    url: SITE_URL,
    address: ADDRESS,
    geo: GEO,
  },
  areaServed: WISCONSIN_SERVICE_AREAS,
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Wisconsin Web Development Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom React Website Development',
          description:
            'End-to-end React + Node.js application development for Wisconsin businesses — from concept to deployment with 72-Hour sprint delivery.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'SEO & Core Web Vitals Optimization',
          description:
            'On-page SEO, structured data, Core Web Vitals tuning, and Google Analytics setup to help Wisconsin small businesses rank higher in local search.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'E-commerce & Stripe Integration',
          description:
            'Custom Stripe-powered online stores with secure checkout, inventory management, and conversion-optimized design for WI retailers.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Web Hosting, DNS & Domain Management',
          description:
            'Secure business hosting, SSL certificates, DNS configuration, and domain registration for Wisconsin small businesses.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'WCAG Accessibility Compliance',
          description:
            'WCAG 2.1 compliant builds and accessibility audits ensuring inclusive digital experiences.',
        },
      },
    ],
  },
};

export const customAiSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Custom AI Development & Automation',
  name: 'Custom AI Development',
  url: absoluteUrl('/custom-ai'),
  description:
    'Custom AI products for businesses: AI assistants and agents, workflow automation, document and data intelligence, AI-powered web apps, and AI strategy. Built around your workflow to cut busywork, capture leads, and drive revenue.',
  provider: {
    '@type': 'ProfessionalService',
    name: 'Zach Howell — Custom AI Development',
    url: SITE_URL,
    address: ADDRESS,
    geo: GEO,
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Custom AI Solutions',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom AI Assistants & Agents',
          description:
            'Purpose-built chat and voice AI agents trained on your business to book appointments, qualify leads, answer customers, and take real actions in your tools.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI Workflow Automation',
          description:
            'End-to-end automations that connect your apps and let AI handle intake, routing, data entry, and follow-up hands-free.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Document & Data Intelligence',
          description:
            'AI that reads contracts, invoices, forms, and reports — extracting, classifying, and structuring data and making it searchable in plain English.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI-Powered Web Apps',
          description:
            'Full custom products with AI at the core — dashboards, internal tools, and customer-facing apps on React with secure, scalable backends.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI Strategy & Prototyping',
          description:
            'Audit of your operation to find the highest-ROI AI use cases, followed by a fast working prototype before committing to a full build.',
        },
      },
    ],
  },
};

export const postPilotSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'AI Social Media Automation',
  name: 'PostPilot — AI Facebook Posting on Autopilot',
  url: absoluteUrl('/postpilot'),
  description:
    'PostPilot is an AI agent that keeps a small business active on Facebook without the time sink. It drafts posts in the owner\'s voice, sends each one to their phone for one-tap approval, and publishes only the posts they okay — branded graphics included. Nothing is posted without owner approval. Setup and management handled by Zach Howell.',
  provider: {
    '@type': 'ProfessionalService',
    name: 'Zach Howell — Custom AI Development',
    url: SITE_URL,
    address: ADDRESS,
    geo: GEO,
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  isRelatedTo: { '@type': 'Service', name: 'Custom AI Development', url: absoluteUrl('/custom-ai') },
};

export const breadcrumb = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});
