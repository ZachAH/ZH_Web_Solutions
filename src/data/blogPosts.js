// Blog content. Each post's `body` is an array of typed blocks rendered by
// BlogPost.jsx: { type: 'p' | 'h2' | 'list', text | items }. `relatedLinks`
// point back into the money pages (location pages, /audit, /custom-ai,
// /services) so posts function as internal-linking hubs, not orphans.
export const blogPosts = [
  {
    slug: 'website-cost-brookfield-2026',
    title: 'How Much Does a Website Cost for a Brookfield Small Business in 2026?',
    metaDescription:
      "A real breakdown of what custom website projects cost for Brookfield, WI businesses in 2026 — and why 'starting at' pricing from page-builder agencies rarely holds.",
    keywords: 'website cost Brookfield WI, web design pricing Brookfield, small business website cost Wisconsin',
    publishDate: '2026-05-04',
    excerpt:
      "Most 'starting at $X' quotes from Brookfield web agencies balloon once you add the pages you actually need. Here's what a real project costs and why.",
    body: [
      { type: 'p', text: "If you've called around Brookfield for website quotes, you've probably gotten two kinds of answers: a suspiciously low number from a template-based agency, or a vague 'it depends' from everyone else. Neither helps you budget. Here's what actually drives cost." },
      { type: 'h2', text: 'The three things that actually move the price' },
      { type: 'list', items: [
        'Page count and complexity — a 5-page marketing site is a different project than a booking system with a client portal.',
        "Custom functionality — quote calculators, appointment scheduling, and e-commerce checkouts take real engineering time, not a plugin install.",
        'Content readiness — if you need copywriting and photography sourced from scratch, that adds real hours before a single line of code gets written.',
      ] },
      { type: 'p', text: "A template or page-builder site (Wix, Squarespace, a WordPress theme) is cheaper up front because someone else already built 90% of it — you're customizing, not engineering. A custom React build costs more initially because every page is built for your business specifically, but it comes without the monthly platform fees, plugin bloat, and performance ceiling that template sites hit within a year or two." },
      { type: 'h2', text: 'What "starting at" pricing usually leaves out' },
      { type: 'p', text: 'The lowest quotes you see advertised in Brookfield almost never include: a real content strategy, local SEO setup beyond the homepage, mobile-specific testing, or post-launch support. Add those back in — because you need them — and the "starting at" number and the real number converge fast.' },
      { type: 'p', text: "I quote projects after a real conversation about your pages, functionality, and content situation, not off a generic package sheet. If you want a straight number instead of a range, that's what a discovery call is for." },
    ],
    relatedLinks: [
      { label: 'See the Brookfield-specific approach', to: 'location:brookfield' },
      { label: 'View pricing tiers', to: '/pricing' },
    ],
  },
  {
    slug: 'signs-brookfield-business-needs-new-website',
    title: '5 Signs Your Brookfield Business Needs a New Website (Not Just a Redesign)',
    metaDescription:
      "How to tell whether your Brookfield business website needs a fresh coat of paint or a full rebuild — five concrete signs to check today.",
    keywords: 'website redesign Brookfield, when to rebuild website, outdated website signs',
    publishDate: '2026-05-11',
    excerpt: "A redesign changes how your site looks. A rebuild changes what it can do. Here's how to tell which one you actually need.",
    body: [
      { type: 'p', text: "Business owners often ask for a 'redesign' when what they actually need is a rebuild. A redesign changes colors, fonts, and layout. A rebuild changes the foundation underneath — the platform, the code, the technical SEO. Here's how to tell which one applies to you." },
      { type: 'list', items: [
        "1. Your site takes more than 3 seconds to load on mobile. That's not a design problem — it's a platform problem, and no new color scheme fixes it.",
        "2. You can't remember the last time you updated it yourself, or updating it requires calling someone. That's a sign the platform is working against you, not for you.",
        "3. It looks fine on desktop but breaks or feels clunky on a phone. Most Brookfield search traffic is mobile — this alone costs you customers daily.",
        "4. You're paying monthly fees to a page builder (Wix, Squarespace, Shopify) that only go up as you add features.",
        "5. Google Search Console shows your pages ranking on page 4+ for terms you should own — often a sign of thin content or technical SEO gaps that cosmetic changes can't touch.",
      ] },
      { type: 'h2', text: 'Why this distinction matters for your budget' },
      { type: 'p', text: "A redesign on a platform you're already locked into is money spent patching a ceiling you'll hit again in a year. If two or more of the signs above apply, the conversation should start with 'should we rebuild on something you actually own,' not 'what should the new homepage look like.'" },
      { type: 'p', text: "The fastest way to know for sure is an outside look at what's actually happening under the hood — performance, mobile experience, and search visibility, not just the parts you can see." },
    ],
    relatedLinks: [
      { label: 'Get a free website audit', to: '/audit' },
      { label: 'See the Brookfield-specific approach', to: 'location:brookfield' },
    ],
  },
  {
    slug: 'wordpress-vs-custom-react-milwaukee',
    title: 'WordPress vs. Custom React: What Milwaukee Small Businesses Should Know Before Rebuilding',
    metaDescription:
      'A straight comparison of WordPress and custom React development for Milwaukee small businesses planning a website rebuild — costs, tradeoffs, and who each one actually fits.',
    keywords: 'custom website vs WordPress Milwaukee, WordPress alternative Milwaukee, React website Milwaukee',
    publishDate: '2026-05-18',
    excerpt: "WordPress isn't wrong for every business — but most Milwaukee small businesses outgrow it faster than they expect. Here's the honest tradeoff.",
    body: [
      { type: 'p', text: "WordPress runs roughly 40% of the web, and there's a reason: it's cheap to start and there's a plugin for almost everything. For a lot of small sites, that's genuinely fine. But I get called by Milwaukee business owners at the point WordPress stops being fine, and the pattern is consistent enough to lay out plainly." },
      { type: 'h2', text: 'Where WordPress starts to cost you' },
      { type: 'list', items: [
        'Plugin stacking — every new feature is another plugin, and every plugin is another thing that can break on the next update.',
        'Security patching becomes a recurring bill, not a one-time cost, as the site accumulates more attack surface.',
        'Page speed degrades as plugins pile up, and Core Web Vitals directly affect your Google ranking.',
        'Themes constrain your design more than they let on — "custom" WordPress work is often still fighting the theme.',
      ] },
      { type: 'h2', text: 'Where custom React actually wins' },
      { type: 'p', text: "A custom React build has no plugins to patch, no theme to fight, and a much smaller attack surface. It's built for your specific pages and functionality, so there's no unused code dragging down load times. The tradeoff is real: it costs more upfront, and you need a developer (not a plugin) to add new functionality later." },
      { type: 'p', text: "For a Milwaukee restaurant with a simple menu and hours page, WordPress can be the right call. For a growing service business that needs speed, strong local SEO, and a site that can scale into booking systems or client portals without duct-taping plugins together, custom development pays for itself within the first year or two." },
    ],
    relatedLinks: [
      { label: 'See the Milwaukee-specific approach', to: 'location:milwaukee' },
      { label: 'Why ZH Web Solutions', to: '/about' },
    ],
  },
  {
    slug: 'google-maps-local-seo-cedarburg',
    title: "How to Show Up on Google Maps When Someone Searches 'Near Me' in Cedarburg",
    metaDescription:
      'A practical checklist for ranking higher on Google Maps for Cedarburg, WI local searches — Google Business Profile, on-site signals, and reviews.',
    keywords: 'local SEO Cedarburg, Google Maps ranking Cedarburg, near me search Cedarburg',
    publishDate: '2026-05-25',
    excerpt: "Map-pack rankings run on a different set of signals than regular search results. Here's what actually moves the needle for a Cedarburg business.",
    body: [
      { type: 'p', text: "\"Near me\" searches are won or lost in the Google Maps 3-pack, which uses a different ranking system than the regular blue links below it. Relevance, distance, and prominence — that's Google's own framing. Here's what actually controls each one." },
      { type: 'h2', text: 'Relevance: does your listing match the search?' },
      { type: 'p', text: "Your Google Business Profile category needs to precisely match what people search for — not a broader category that technically applies. Your website's LocalBusiness schema, service pages, and NAP (name, address, phone) all need to say the same thing, consistently, everywhere they appear." },
      { type: 'h2', text: 'Distance: you can\'t change where you are, but you can widen your reach' },
      { type: 'p', text: 'Distance is fixed for any single search, but content that names surrounding neighborhoods and service areas (without stuffing) helps you show up for searches slightly outside your exact block.' },
      { type: 'h2', text: 'Prominence: this is where most Cedarburg businesses lose' },
      { type: 'list', items: [
        'Review count and recency — a steady trickle of new reviews outperforms a pile of old ones.',
        'Reviews that mention your service and city by name carry real map-pack weight.',
        'Citations — your business listed consistently across directories, not just your own website.',
        'Photos — profiles with real, recent photos get more direction requests and clicks than text-only listings.',
      ] },
      { type: 'p', text: "Most of this is profile work you can do yourself in an afternoon. The website side — schema, NAP consistency, and page-level local relevance — is where a lot of Cedarburg small-business sites are quietly leaking rankings without anyone noticing." },
    ],
    relatedLinks: [
      { label: 'See the Cedarburg-specific approach', to: 'location:cedarburg' },
      { label: 'Explore SEO services', to: '/services' },
    ],
  },
  {
    slug: 'what-a-real-website-audit-checks-milwaukee',
    title: 'What a Real Website Audit Checks — and Why Most Milwaukee Agencies Skip Half of It',
    metaDescription:
      "What an actual comprehensive website audit covers — performance, SEO, accessibility, security, and conversion — versus the surface-level checklist most agencies hand out.",
    keywords: 'website audit Milwaukee, free website audit, what does a website audit check',
    publishDate: '2026-06-01',
    excerpt: "A lot of 'free audits' are a five-minute PageSpeed screenshot with a sales pitch attached. Here's what a real one actually covers.",
    body: [
      { type: 'p', text: 'A lot of "free website audits" are a screenshot of a PageSpeed score and a sales pitch bolted on. That tells you almost nothing actionable. A real audit checks six areas, and each one catches problems the others miss.' },
      { type: 'list', items: [
        'Performance & speed — not just a single score, but which specific resources are blocking render and what fixing them would actually require.',
        'SEO health — meta tags, heading structure, schema markup, sitemap completeness, and indexability issues search engines are silently penalizing you for.',
        'Mobile responsiveness — layout shifts, tap target sizing, and cross-device rendering, since most local search traffic is mobile.',
        'Security — HTTPS enforcement, mixed content warnings, and basic vulnerability flags most business owners never think to check.',
        'Accessibility — color contrast, alt text, ARIA labels, and keyboard navigation, which increasingly carries legal exposure as well as SEO weight.',
        'Conversion readiness — whether your CTAs, contact info, and trust signals are actually positioned to turn a visitor into a lead.',
      ] },
      { type: 'h2', text: 'Why the "free audit" model is usually a trap' },
      { type: 'p', text: "Most free audits are engineered to justify a predetermined sales pitch — they'll find problems whether or not real ones exist, because the business model depends on it. A real audit should be willing to tell you your site is fine if it's fine." },
      { type: 'p', text: "I personally review every site that requests one and send back an honest report — including telling you when nothing major is wrong, which happens more than people expect." },
    ],
    relatedLinks: [
      { label: 'Request your free audit', to: '/audit' },
    ],
  },
  {
    slug: 'squarespace-vs-custom-development-cedarburg',
    title: 'Squarespace vs. Custom Development: When Cedarburg Businesses Outgrow the Builder',
    metaDescription:
      'How to tell when a Cedarburg business has outgrown Squarespace and what to actually gain (and give up) by moving to custom development.',
    keywords: 'Squarespace alternative Cedarburg, outgrow Squarespace, custom website Cedarburg',
    publishDate: '2026-06-08',
    excerpt: "Squarespace is genuinely good for what it's built for. Here's how to know when your Cedarburg business has outgrown it.",
    body: [
      { type: 'p', text: "I'll say the unpopular thing first: Squarespace is a good product for what it's designed to do. Clean templates, easy content editing, reasonable pricing. The problem isn't Squarespace being bad — it's businesses outgrowing what a page builder can structurally do, and not realizing it until growth stalls." },
      { type: 'h2', text: 'The outgrowing signs, specifically' },
      { type: 'list', items: [
        "You need functionality Squarespace doesn't natively support — custom booking logic, a client portal, integrations with your specific business tools.",
        'Your page speed has plateaued below what competitors are hitting, and it\'s template overhead, not your content.',
        "You're duct-taping third-party embeds and code injections to get features the platform wasn't built for — and it shows.",
        "SEO has plateaued because Squarespace's schema and technical SEO controls are more limited than a custom build's.",
      ] },
      { type: 'h2', text: "What you keep, what you give up" },
      { type: 'p', text: 'You give up the "log in and drag a block" simplicity — content changes on a custom site typically go through a developer, or a lightweight CMS built specifically for your needs. What you gain: a site with no platform ceiling, full ownership of the code, and performance and SEO control Squarespace structurally can\'t match.' },
      { type: 'p', text: 'For a Cedarburg retail or tourism business that just needs an attractive, simple site, Squarespace remains a fine choice. For one that\'s been on it for years and has hit a real functional or performance ceiling, migrating to custom development — without losing the SEO equity already earned — is usually the better long-term math.' },
    ],
    relatedLinks: [
      { label: 'See the Cedarburg-specific approach', to: 'location:cedarburg' },
      { label: 'Explore web development services', to: '/services' },
    ],
  },
  {
    slug: 'ai-automation-waukesha-county',
    title: 'Can AI Actually Save a Small Business Time? 4 Real Automations for Waukesha County Companies',
    metaDescription:
      'Four concrete AI automation examples for Waukesha County small businesses — quote follow-ups, intake routing, document processing, and appointment reminders.',
    keywords: 'AI automation Waukesha County, AI for small business Wisconsin, business process automation',
    publishDate: '2026-06-15',
    excerpt: "Not generic 'AI will transform your business' talk — four specific automations Waukesha County companies are actually running today.",
    body: [
      { type: 'p', text: '"AI for your business" gets thrown around vaguely enough that it\'s stopped meaning anything. So instead of the pitch, here are four specific automations I\'ve built for small companies in and around Waukesha County — the kind of thing that actually saves hours per week, not a hypothetical.' },
      { type: 'list', items: [
        '1. Quote follow-up automation — an inbound request gets read, a draft quote gets generated from your pricing structure, and a follow-up reminder routes to the right person. No re-typing the same request into three tools.',
        "2. Intake routing — form submissions and emails get classified and sent to the right department automatically, instead of sitting in a shared inbox until someone notices them.",
        '3. Document intelligence — contracts, invoices, and forms get read, key data extracted, and dropped into your existing system instead of manual data entry.',
        '4. Appointment reminders and follow-up — automated, personalized reminders and post-appointment follow-ups that used to be a manual task someone did (or more often, didn\'t) between everything else on their plate.',
      ] },
      { type: 'h2', text: "The honest caveat" },
      { type: 'p', text: "None of these require you to hire an AI team or understand how the underlying models work. They do require someone to actually scope what your business does today and build the specific automation around it — a generic AI chatbot bolted onto your site rarely solves a real operational bottleneck." },
      { type: 'p', text: "If your team is manually doing any of the four things above, that's usually the highest-ROI place to start — not a full AI overhaul." },
    ],
    relatedLinks: [
      { label: 'Explore Custom AI Development', to: '/custom-ai' },
    ],
  },
  {
    slug: 'cost-of-slow-website-brookfield',
    title: 'The Real Cost of a Slow Website for Brookfield Retail & Service Businesses',
    metaDescription:
      'How page speed directly costs Brookfield retail and service businesses customers and Google ranking — with the numbers behind it.',
    keywords: 'website speed Brookfield, page speed and conversions, slow website cost business',
    publishDate: '2026-06-22',
    excerpt: "Every extra second of load time is a measurable percentage of visitors leaving before they see anything. Here's what that costs a Brookfield business specifically.",
    body: [
      { type: 'p', text: "Page speed isn't a technical nicety — it's a direct line to lost customers, and the data backs it up consistently: as load time increases from one second to a few seconds, bounce rates climb sharply. On mobile, where most local search traffic happens, that effect is even sharper." },
      { type: 'h2', text: 'Two separate ways a slow site costs you' },
      { type: 'p', text: "First, direct: visitors who came from a Google search or a Google Maps click simply leave before your page finishes loading — you paid for that visibility (in SEO effort, or ad spend) and got nothing from it. Second, indirect: Google's Core Web Vitals are a direct ranking factor. A slow site ranks lower, which means fewer of the visitors above ever show up in the first place." },
      { type: 'h2', text: "Why Brookfield sites specifically tend to run slow" },
      { type: 'list', items: [
        'Page-builder platforms load large amounts of unused CSS/JS for every page, regardless of what that page actually needs.',
        'Unoptimized images — full-resolution photos served at display size instead of properly compressed and sized.',
        'Plugin and third-party script stacking, each adding its own render-blocking request.',
        'No code-splitting — the entire site\'s JavaScript loads on every page, even ones that don\'t use most of it.',
      ] },
      { type: 'p', text: "A properly built custom site addresses all four structurally — not through a \"speed plugin,\" but through how the site is actually built. That difference compounds every month a Brookfield business is competing for the same local searches as everyone else on Bluemound Road." },
    ],
    relatedLinks: [
      { label: 'See the Brookfield-specific approach', to: 'location:brookfield' },
      { label: 'Explore web development services', to: '/services' },
    ],
  },
  {
    slug: 'ai-for-law-firms-medical-milwaukee',
    title: 'How Milwaukee Law Firms & Medical Practices Can Use AI Without Hiring an AI Team',
    metaDescription:
      'Practical, compliant AI automation use cases for Milwaukee-area law firms and medical practices — intake, document review, and scheduling — without an in-house AI team.',
    keywords: 'AI for law firms Milwaukee, AI for medical practices, AI automation professional services',
    publishDate: '2026-06-29',
    excerpt: "Law firms and medical practices sit on some of the most repetitive paperwork of any industry — and some of the most promising AI use cases, done carefully.",
    body: [
      { type: 'p', text: "Law firms and medical practices generate an unusual amount of repetitive, structured paperwork — intake forms, case or patient documentation, scheduling, follow-up correspondence. That repetition is exactly what AI automation handles well, as long as it's built with the right guardrails around sensitive data." },
      { type: 'h2', text: 'Where this actually applies' },
      { type: 'list', items: [
        'Intake automation — new client/patient forms get read and structured automatically instead of manually re-keyed into your practice management system.',
        'Document review assistance — contracts or records get summarized and key terms flagged for a human to review, cutting first-pass reading time significantly.',
        'Scheduling and reminders — automated, personalized appointment confirmations and follow-ups without staff manually calling every contact.',
        'Correspondence drafting — routine response drafts generated for a human to review and send, rather than written from scratch each time.',
      ] },
      { type: 'h2', text: 'The part that actually matters: how it\'s built' },
      { type: 'p', text: "For law and medical practices specifically, the automation itself is the easy part — the real work is architecting it so sensitive client and patient data is handled correctly, nothing is sent to a third-party model provider that shouldn't see it, and a human stays in the loop on anything that requires judgment. This is not a plug-and-play chatbot situation." },
      { type: 'p', text: "If your Milwaukee-area practice is spending real staff hours on repetitive intake or documentation work, that's usually the first thing worth automating — done properly, not with an off-the-shelf tool that wasn't built for the compliance requirements you're actually under." },
    ],
    relatedLinks: [
      { label: 'Explore Custom AI Development', to: '/custom-ai' },
    ],
  },
  {
    slug: 'choosing-a-web-developer-brookfield-questions',
    title: "A Brookfield Business Owner's Guide to Choosing a Web Developer (Questions to Ask First)",
    metaDescription:
      'The questions Brookfield business owners should ask before hiring a web developer — ownership, timeline, and what happens after launch.',
    keywords: 'web developer Brookfield questions, how to choose a web developer, hiring a web developer',
    publishDate: '2026-07-06',
    excerpt: "Most website quotes look similar on the surface. These questions surface the differences that actually matter before you sign anything.",
    body: [
      { type: 'p', text: "Most website proposals look similar on the surface — a price, a page count, a timeline. The differences that actually matter show up in the answers to a handful of specific questions, and most business owners don't think to ask them until after they've signed." },
      { type: 'list', items: [
        '"Who owns the code, domain, and hosting when this is done?" — If the answer isn\'t a clear "you, fully, day one," you\'re renting your own website indefinitely.',
        '"What happens if I want to switch developers later?" — A legitimate answer involves a clean handoff. A platform-locked answer means you can\'t actually leave.',
        '"Is local SEO and schema markup included, or an add-on?" — If it\'s an add-on, ask what the base build actually includes for search visibility.',
        '"What\'s the realistic timeline, and what could extend it?" — Vague timelines with no stated dependencies are a yellow flag.',
        '"Who do I talk to after launch if something breaks?" — Agencies with account managers often mean your actual issue routes through two or three people before it reaches whoever can fix it.',
      ] },
      { type: 'h2', text: 'Why this matters more in Brookfield specifically' },
      { type: 'p', text: "Brookfield's business standard is high — Corporate Woods professional offices, retail along The Corners and Bluemound Road — which means the cost of a mediocre website is a direct, visible mismatch with the quality of the business behind it. It's worth a short list of hard questions before committing to whoever builds it." },
      { type: 'p', text: "I answer all five of these directly, before you commit to anything, on a free discovery call." },
    ],
    relatedLinks: [
      { label: 'See the Brookfield-specific approach', to: 'location:brookfield' },
      { label: 'Why ZH Web Solutions', to: '/about' },
    ],
  },
];

export const getBlogPost = (slug) => blogPosts.find((post) => post.slug === slug);
