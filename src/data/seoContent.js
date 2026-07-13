// Single source of truth for title/description/keywords on core static
// routes. Both the page's <Seo> component AND scripts/prerender-routes.js
// import from here, so first-paint (prerendered) meta and hydrated
// (client-side) meta can never drift apart the way they previously did
// on /services and /about.
export const seoContent = {
  home: {
    path: '/',
    title: 'Brookfield & SE Wisconsin Web Design | Custom React Developer',
    description:
      "Custom React websites for Brookfield, Milwaukee & Waukesha County businesses. Senior engineer, no templates, no page builders. Free audit — see what's slowing your site down.",
    keywords:
      'Brookfield web design, Brookfield web developer, Wisconsin web developer, Milwaukee web designer, small business website Wisconsin, React developer Milwaukee, custom website development Waukesha, web design West Bend WI, e-commerce developer Milwaukee, SEO optimization Wisconsin, website developer near me WI',
  },
  services: {
    path: '/services',
    title: 'Web Development Services | React, SEO & E-Commerce — ZH Web Solutions',
    description:
      'Custom React websites, e-commerce, local SEO, hosting & DNS — one senior engineer handling every stage. Serving Brookfield, Milwaukee, Waukesha & SE Wisconsin.',
    keywords:
      'web development services Wisconsin, Brookfield web design, React developer Milwaukee, custom website development Waukesha, SEO services Wisconsin, e-commerce development Milwaukee, web hosting Wisconsin, DNS management Milwaukee, WCAG accessibility Wisconsin, Core Web Vitals optimization',
  },
  about: {
    path: '/about',
    title: 'Why ZH Web Solutions? | Senior Engineer, Not an Agency',
    description:
      'One senior engineer, not a WordPress template or an agency account manager. Faster sites, stronger local SEO, full code ownership for Brookfield & SE Wisconsin businesses.',
    keywords:
      'why ZH Web Solutions, senior engineer web developer, more google maps visibility, get more phone calls from website, higher ROI website, local SEO for restaurants, website for service businesses, Brookfield web developer, Milwaukee web developer',
  },
  customAi: {
    path: '/custom-ai',
    title: 'Custom AI Development for Business | ZH Web Solutions',
    description:
      "AI assistants, workflow automation & custom AI apps for Wisconsin businesses. I find the highest-ROI use case and ship a working build fast — book a free strategy call.",
    keywords:
      'custom AI development, AI automation for business, build AI agents, custom AI products, AI workflow automation, AI consultant Wisconsin, AI automation Milwaukee, LLM application development, AI chatbot development, forward deployed engineer, RAG development, AI integration services, business process automation AI',
  },
};
