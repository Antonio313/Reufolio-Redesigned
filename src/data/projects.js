export const projects = [
  {
    id: "pongs-shipping",
    title: "Pongs Shipping Company",
    shortDescription: "Full-stack freight forwarding management system",
    description: "A two-sided platform that brings Jamaican freight forwarding into the digital age. Customers get dedicated Florida shipping addresses in PSC format, easy package pre-alerts with receipt uploads, and live shipment tracking across six status stages — no more calling to check on a box. On the ops side, staff get a full dashboard for managing packages, generating transfer lists with package check-off, tracking revenue per shipment in Jamaican dollars, and handling everything with six-tier role-based access control. Built to replace paper and phone calls with something that actually scales.",
    tech: {
      frontend: ["React 19", "Vite", "Tailwind CSS 4", "React Router DOM 7"],
      backend: ["Node.js 20", "Express 5", "PostgreSQL"],
      devops: ["Railway", "AWS S3", "SendGrid", "Docker"]
    },
    role: "Fullstack Developer",
    status: "live",
    featured: true,
    github: "",
    live: "https://pongsshipping.com",
    metrics: [
      "80% efficiency improvement",
      "6-tier role-based access control",
      "Automated email notifications at every shipment stage"
    ],
    videoUrl: "",
    images: [
      { src: "/projects/pongs-shipping/screenshot-1.png", alt: "Pongs Shipping - Screenshot 1" },
      { src: "/projects/pongs-shipping/screenshot-2.png", alt: "Pongs Shipping - Screenshot 2" },
      { src: "/projects/pongs-shipping/screenshot-3.png", alt: "Pongs Shipping - Screenshot 3" },
      { src: "/projects/pongs-shipping/screenshot-4.png", alt: "Pongs Shipping - Screenshot 4" },
      { src: "/projects/pongs-shipping/screenshot-5.png", alt: "Pongs Shipping - Screenshot 5" },
      { src: "/projects/pongs-shipping/screenshot-6.png", alt: "Pongs Shipping - Screenshot 6" },
      { src: "/projects/pongs-shipping/screenshot-7.png", alt: "Pongs Shipping - Screenshot 7" },
      { src: "/projects/pongs-shipping/screenshot-8.png", alt: "Pongs Shipping - Screenshot 8" },
      { src: "/projects/pongs-shipping/screenshot-9.png", alt: "Pongs Shipping - Screenshot 9" },
      { src: "/projects/pongs-shipping/screenshot-10.png", alt: "Pongs Shipping - Screenshot 10" },
      { src: "/projects/pongs-shipping/screenshot-11.png", alt: "Pongs Shipping - Screenshot 11" },
      { src: "/projects/pongs-shipping/screenshot-12.png", alt: "Pongs Shipping - Screenshot 12" },
      { src: "/projects/pongs-shipping/screenshot-13.png", alt: "Pongs Shipping - Screenshot 13" },
      { src: "/projects/pongs-shipping/screenshot-14.png", alt: "Pongs Shipping - Screenshot 14" },
      { src: "/projects/pongs-shipping/screenshot-15.png", alt: "Pongs Shipping - Screenshot 15" },
      { src: "/projects/pongs-shipping/screenshot-16.png", alt: "Pongs Shipping - Screenshot 16" },
      { src: "/projects/pongs-shipping/screenshot-17.png", alt: "Pongs Shipping - Screenshot 17" },
      { src: "/projects/pongs-shipping/screenshot-18.png", alt: "Pongs Shipping - Screenshot 18" },
      { src: "/projects/pongs-shipping/screenshot-19.png", alt: "Pongs Shipping - Screenshot 19" },
      { src: "/projects/pongs-shipping/screenshot-20.png", alt: "Pongs Shipping - Screenshot 20" }
    ],
    problem: "Pongs Shipping had zero digital infrastructure. Customers had no way to track packages or submit pre-alerts without calling in. Staff were drowning in paper-based processes, and there was no visibility into revenue, package history, or staff performance whatsoever.",
    solution: "Built a two-sided platform: a customer portal for submitting pre-alerts with receipt uploads, tracking shipments through six status stages, and managing their dedicated Florida shipping address — and a staff operations dashboard with six roles (Super Admin, Admin, Handler, Transfer Agent, Driver, Front Desk) covering everything from package intake and transfer list management to cost calculation in JMD and staff performance analytics.",
    impact: "Eliminated all manual paperwork, automated SendGrid email notifications at every shipment stage, and gave staff a full audit trail with daily performance metrics. Operational efficiency improved by 80% with role-gated access ensuring each team member only touches what they need to."
  },
  {
    id: "jewels-and-time",
    title: "Jewels and Time",
    shortDescription: "Three-tier luxury e-commerce platform with intelligent lead scoring",
    description: "Not your average e-commerce build. Jewels and Time is a three-tier system for a luxury jewelry business — a headless CMS for content management, a polished customer-facing storefront, and a TypeScript backend with a custom lead-scoring engine that grades visitors on 9 behavioral signals and classifies them as Cold, Warm, or Hot. Multi-channel comms (WhatsApp via Twilio, email via SMTP) are baked in so the team gets notified the moment a high-intent lead lands — no tool-switching required. Built to turn browsers into buyers.",
    tech: {
      frontend: ["React 19", "JavaScript (JSX)", "TypeScript", "Tailwind CSS", "Tiptap"],
      backend: ["Node.js", "Express", "TypeScript", "Sharp", "Twilio", "Nodemailer", "Zod"],
      devops: ["Railway"]
    },
    role: "Fullstack Developer",
    status: "wip",
    featured: true,
    github: "",
    live: "https://jewelsandtime-production.up.railway.app/",
    cmsUrl: "https://e-commerce-headless-cms-frontend-production.up.railway.app/",
    metrics: [
      "9-factor lead scoring algorithm",
      "WhatsApp + email lead alerts",
      "Headless CMS with Kanban pipeline",
      "Customer Jewelry Box with shareable wishlists",
      "Swagger-documented REST API"
    ],
    videoUrl: "",
    images: [
      { src: "/projects/jewels-and-time/screenshot-1.png", alt: "Jewels and Time - Screenshot 1" },
      { src: "/projects/jewels-and-time/screenshot-2.png", alt: "Jewels and Time - Screenshot 2" },
      { src: "/projects/jewels-and-time/screenshot-3.png", alt: "Jewels and Time - Screenshot 3" },
      { src: "/projects/jewels-and-time/screenshot-4.png", alt: "Jewels and Time - Screenshot 4" },
      { src: "/projects/jewels-and-time/screenshot-5.png", alt: "Jewels and Time - Screenshot 5" },
      { src: "/projects/jewels-and-time/screenshot-6.png", alt: "Jewels and Time - Screenshot 6" },
      { src: "/projects/jewels-and-time/screenshot-7.png", alt: "Jewels and Time - Screenshot 7" },
      { src: "/projects/jewels-and-time/screenshot-8.png", alt: "Jewels and Time - Screenshot 8" },
      { src: "/projects/jewels-and-time/screenshot-9.png", alt: "Jewels and Time - Screenshot 9" },
      { src: "/projects/jewels-and-time/screenshot-10.png", alt: "Jewels and Time - Screenshot 10" },
      { src: "/projects/jewels-and-time/screenshot-11.png", alt: "Jewels and Time - Screenshot 11" },
      { src: "/projects/jewels-and-time/screenshot-12.png", alt: "Jewels and Time - Screenshot 12" },
      { src: "/projects/jewels-and-time/screenshot-13.png", alt: "Jewels and Time - Screenshot 13" },
      { src: "/projects/jewels-and-time/screenshot-14.png", alt: "Jewels and Time - Screenshot 14" },
      { src: "/projects/jewels-and-time/screenshot-15.png", alt: "Jewels and Time - Screenshot 15" },
      { src: "/projects/jewels-and-time/screenshot-16.png", alt: "Jewels and Time - Screenshot 16" },
      { src: "/projects/jewels-and-time/screenshot-17.png", alt: "Jewels and Time - Screenshot 17" }
    ],
    problem: "A luxury jewelry business wanted an online presence that did more than display pretty products — they needed a way to identify serious buyers and nurture them without their team spending hours on cold outreach.",
    solution: "Designed a three-tier architecture: a headless CMS (React + TypeScript) so the owner controls content without touching code, a polished customer storefront (React + JSX) with accounts and shareable wishlists, and a TypeScript/Express backend with a custom lead-scoring engine that surfaces high-intent visitors automatically. Multi-channel notifications (WhatsApp + email) fire the moment a scored lead comes in.",
    impact: "Currently in active development. The lead scoring system is expected to significantly cut time spent on cold outreach and boost conversion rates for the business."
  },
  {
    id: "dutchie",
    title: "Dutchie",
    shortDescription: "Community-driven Caribbean recipe platform",
    description: "Dutchie is a love letter to Caribbean cuisine. A full-stack, community-driven recipe platform where people can discover, share, and celebrate authentic Caribbean cooking — from Jamaican staples to regional dishes across the islands. Named after the iconic Dutch pot, the heartbeat of Caribbean kitchens. Features contributor tiers, recipe verification, real-time chat, and a moderation system — built as a portfolio project demonstrating production-grade full-stack engineering.",
    tech: {
      frontend: [
        "Next.js 15 (App Router)",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "TanStack Query",
        "Zustand",
        "React Hook Form",
        "Zod",
        "Socket.IO Client",
        "Auth.js (NextAuth v5)",
        "Serwist (PWA)"
      ],
      backend: [
        "Node.js",
        "Express",
        "PostgreSQL",
        "Prisma ORM",
        "Redis",
        "Socket.IO",
        "AWS S3",
        "AWS CloudFront",
        "Amazon SES",
        "bcryptjs"
      ],
      devops: [
        "Railway",
        "Docker",
        "Turborepo",
        "GitHub Actions",
        "Sentry",
        "Uptime Robot"
      ]
    },
    role: "Fullstack Developer",
    status: "live",
    featured: true,
    github: "",
    live: "https://dutchpot.online",
    metrics: [
      "Real-time chat and push notifications via Socket.IO and Web Push API",
      "Full-text recipe search with PostgreSQL tsvector and GIN indexing",
      "Reputation-based contributor tiers with recipe verification workflow",
      "Moderation dashboard with flag review and role management",
      "PWA with offline support and installable on mobile"
    ],
    videoUrl: "",
    images: [
      { src: "/projects/dutchie/screenshot-1.png", alt: "Dutchie - Screenshot 1" },
      { src: "/projects/dutchie/screenshot-2.png", alt: "Dutchie - Screenshot 2" },
      { src: "/projects/dutchie/screenshot-3.png", alt: "Dutchie - Screenshot 3" },
      { src: "/projects/dutchie/screenshot-4.png", alt: "Dutchie - Screenshot 4" },
      { src: "/projects/dutchie/screenshot-5.png", alt: "Dutchie - Screenshot 5" },
      { src: "/projects/dutchie/screenshot-6.png", alt: "Dutchie - Screenshot 6" },
      { src: "/projects/dutchie/screenshot-7.png", alt: "Dutchie - Screenshot 7" },
      { src: "/projects/dutchie/screenshot-8.png", alt: "Dutchie - Screenshot 8" },
      { src: "/projects/dutchie/screenshot-9.png", alt: "Dutchie - Screenshot 9" },
      { src: "/projects/dutchie/screenshot-10.png", alt: "Dutchie - Screenshot 10" },
      { src: "/projects/dutchie/screenshot-11.png", alt: "Dutchie - Screenshot 11" },
      { src: "/projects/dutchie/screenshot-12.png", alt: "Dutchie - Screenshot 12" },
      { src: "/projects/dutchie/screenshot-13.png", alt: "Dutchie - Screenshot 13" },
      { src: "/projects/dutchie/screenshot-14.png", alt: "Dutchie - Screenshot 14" },
      { src: "/projects/dutchie/screenshot-15.png", alt: "Dutchie - Screenshot 15" },
      { src: "/projects/dutchie/screenshot-16.png", alt: "Dutchie - Screenshot 16" },
      { src: "/projects/dutchie/screenshot-17.png", alt: "Dutchie - Screenshot 17" },
      { src: "/projects/dutchie/screenshot-18.png", alt: "Dutchie - Screenshot 18" }
    ],
    problem: "Caribbean recipes online often lack cultural authenticity — missing common-sense ingredients, using Americanized measurements, and offering no context for regional variation. There's no dedicated, community-driven space that celebrates the full breadth of Caribbean culinary culture with the depth it deserves.",
    solution: "Built a full-stack platform from scratch in a Turborepo monorepo — a Next.js 15 frontend backed by a Node/Express API, PostgreSQL, and Redis. The platform features community-submitted recipes, a reputation system that rewards authentic contributors, recipe verification by trusted users, real-time messaging, and an admin/moderation dashboard. Image uploads go through AWS S3 with CloudFront CDN delivery.",
    impact: "A complete production-grade application spanning 6 development sprints — covering auth flows, real-time features, search infrastructure, PWA/push notifications, CI/CD pipelines, and Railway deployment. Demonstrates end-to-end ownership of a complex, multi-service system."
  },
  {
    id: "rasta-collections",
    title: "Rasta Collections",
    cmsUrl: "https://rastacollections.store/admin",
    shortDescription: "Custom e-commerce storefront with a password-protected CMS",
    description: "A full-stack e-commerce storefront built for Clive's eBay-adjacent business, rooted in Rastafarian culture and Jamaican identity. Features a public-facing product catalogue with category filtering, search, and paginated listings, plus a password-protected admin CMS for managing products, categories, and contact messages — all without needing a developer. Images are compressed to WebP and served via AWS S3. Deployed as a single Docker container on Railway.",
    tech: {
      frontend: ["React 19", "TypeScript", "Tailwind CSS v4", "Vite 7", "Shadcn/UI", "TanStack Query v5", "React Hook Form", "Zod"],
      backend: ["Node.js", "Express 4", "TypeScript", "Prisma ORM", "PostgreSQL 18", "JWT Auth", "Sharp"],
      devops: ["Railway", "Docker", "AWS S3"]
    },
    role: "Fullstack Developer",
    status: "wip",
    featured: true,
    github: "",
    live: "https://rastacollections.store",
    metrics: [
      "Password-protected CMS with full product & category management",
      "AWS S3 media pipeline with automatic WebP compression",
      "JWT auth with access + refresh token rotation",
      "Monorepo with shared Zod schemas across frontend and backend",
      "Single-container Docker deployment on Railway"
    ],
    videoUrl: "",
    images: [
      { src: "/projects/rasta-collections/screenshot-1.png", alt: "Rasta Collections - Screenshot 1" },
      { src: "/projects/rasta-collections/screenshot-2.png", alt: "Rasta Collections - Screenshot 2" },
      { src: "/projects/rasta-collections/screenshot-3.png", alt: "Rasta Collections - Screenshot 3" },
      { src: "/projects/rasta-collections/screenshot-4.png", alt: "Rasta Collections - Screenshot 4" },
      { src: "/projects/rasta-collections/screenshot-5.png", alt: "Rasta Collections - Screenshot 5" },
      { src: "/projects/rasta-collections/screenshot-6.png", alt: "Rasta Collections - Screenshot 6" },
      { src: "/projects/rasta-collections/screenshot-7.png", alt: "Rasta Collections - Screenshot 7" },
      { src: "/projects/rasta-collections/screenshot-8.png", alt: "Rasta Collections - Screenshot 8" },
      { src: "/projects/rasta-collections/screenshot-9.png", alt: "Rasta Collections - Screenshot 9" },
      { src: "/projects/rasta-collections/screenshot-10.png", alt: "Rasta Collections - Screenshot 10" }
    ],
    problem: "Clive needed an online storefront that matched his brand's bold Rastafarian aesthetic and gave him full control over his inventory — without depending on a developer for every product update or image change.",
    solution: "Built a full-stack monorepo with a React storefront and a custom admin CMS. Products, categories, and images are all managed through the CMS. Images are compressed and served from AWS S3. The entire app ships as a single Docker container deployed to Railway, with automatic DB migrations on startup.",
    impact: "Live at rastacollections.store. Clive independently manages his full product catalogue — adding listings, uploading images, and updating content — with zero developer involvement for day-to-day operations."
  },
  {
    id: "reufolio",
    title: "Reufolio",
    shortDescription: "Modern, high-performance portfolio website",
    description: "The site you're on right now. Reufolio was built from scratch to stand out from the sea of templated developer portfolios — with fluid Framer Motion animations, a session-gated intro video, a spring-physics scroll progress bar, per-project case study pages with a lightbox gallery, and a serverless EmailJS contact form. No backend, no bloat. Every detail — from GPU-accelerated animation to prefers-reduced-motion support — was a deliberate engineering decision.",
    tech: {
      frontend: ["React 19", "JavaScript (JSX)", "Tailwind CSS 3", "Framer Motion 12", "React Router DOM 6", "React Icons"],
      backend: ["EmailJS"],
      devops: ["Railway", "Vite 7"]
    },
    role: "Fullstack Developer",
    status: "live",
    featured: true,
    github: "https://github.com/Antonio313",
    live: "https://reufolio.online",
    metrics: [
      "Session-gated intro video overlay with YouTube embed",
      "Spring physics scroll progress indicator",
      "Per-project case study pages with lightbox gallery and keyboard navigation",
      "Serverless contact form via EmailJS with real-time validation and copy-to-clipboard",
      "GPU-accelerated animations with prefers-reduced-motion support throughout"
    ],
    videoUrl: "",
    images: [],
    problem: "Most developer portfolios look the same — a navbar, a hero, and a list of skills copied from a template. I needed something that demonstrated design sensibility, frontend craft, and performance awareness — not just a résumé in website form.",
    solution: "Built from scratch with React 19 and Framer Motion 12 for scroll-triggered, staggered animations. Tailwind CSS for a sharp dark-themed UI. Data-driven architecture (all content in src/data/) so the site is easy to maintain. Performance-tuned with GPU acceleration hints, CSS-only decorative animations, and mobile blur reduction. Deployed on Railway with a custom domain and SEO configured via robots.txt, sitemap.xml, and structured meta tags.",
    impact: "A live, production-grade portfolio actively used to land freelance clients and get in front of recruiters. Fully responsive, accessible, and built with the same engineering rigour applied to client projects."
  },
  {
    id: "bytegrade",
    title: "ByteGrade",
    shortDescription: "AI-powered automated code grading platform",
    description: "Final Year Major Project for BSc Computer Science at the University of Technology, Jamaica (2025). Built with a 4-person team, ByteGrade is an automated grading platform for evaluating student code submissions in C, C++, Python, and Java. Led frontend development, creating an intuitive low-code interface for professors to configure grading rubrics without technical expertise. The .NET backend integrated OpenAI's API to evaluate submissions and return structured, instant feedback to students — replacing hours of manual grading per assignment.",
    tech: {
      frontend: ["React", "JavaScript", "Framer Motion", "Tailwind CSS"],
      backend: [".NET", "C#", "OpenAI API", "PostgreSQL"],
      devops: ["AWS"]
    },
    role: "Lead Frontend Developer",
    status: "academic",
    featured: true,
    github: "", // Add your ByteGrade repo URL here
    live: "",
    metrics: [
      "BSc Final Year Project — UTech 2025",
      "Led frontend on 4-person team",
      "Multi-language AI grading (C, C++, Python, Java)"
    ],
    videoUrl: "",
    images: [],
    problem: "Grading code assignments is extremely time-consuming for professors. Manual grading is inconsistent, slow, and doesn't scale with larger class sizes — a problem felt across every CS department.",
    solution: "Led frontend development of an LMS-like interface that let professors define rubrics visually without writing code. The .NET backend with OpenAI integration evaluated submissions against those rubrics and returned structured feedback instantly, cutting grading time to near-zero.",
    impact: "Delivered as a graded final year capstone project at UTech Jamaica (2025). Successfully demonstrated multi-language code grading across C, C++, Python, and Java with AI-generated feedback — proving the concept at a prototype scale with a 4-person team."
  },
  {
    id: "rws-website",
    title: "Reuel's Web Services",
    shortDescription: "Business portfolio and services showcase website",
    description: "The official home of Reuel's Web Services — a clean, fast, mobile-first site built to communicate what the consultancy does and convert visitors into client conversations. Features 10 service offerings, a 3-project portfolio, SEO-optimized pages with JSON-LD structured data, Open Graph / Twitter Card meta tags, and a serverless EmailJS consultation form with client-side validation. No CMS, no backend — just a purpose-built lead generation machine.",
    tech: {
      frontend: ["React 19", "TypeScript", "Tailwind CSS 4", "Vite", "Lucide React", "React Icons"],
      backend: [],
      devops: ["Railway", "EmailJS", "Vite"]
    },
    role: "Fullstack Developer",
    status: "live",
    featured: true,
    github: "https://github.com/Antonio313/RWS",
    live: "https://reuelswebservices.online",
    metrics: [
      "60% increase in consultation conversions",
      "90+ Lighthouse performance score",
      "Mobile-first responsive design",
      "Zero backend infrastructure"
    ],
    videoUrl: "",
    images: [],
    problem: "Reuel's Web Services needed a professional online presence that clearly communicates 10 distinct service offerings, showcases real client work, and turns visitors into consultation requests — all without the overhead of a CMS or backend.",
    solution: "Built a fully component-driven React 19 + TypeScript SPA with Tailwind CSS 4, smooth scroll navigation, custom CSS animations, and a serverless EmailJS contact form featuring real-time client-side validation. SEO-optimized with JSON-LD LocalBusiness structured data, Open Graph, and Twitter Card meta tags baked directly into the HTML.",
    impact: "Live at reuelswebservices.online. Contributed to a 60% increase in consultation conversions and serves as the primary marketing and lead generation asset for the business. Achieves 90+ Lighthouse scores with zero backend infrastructure."
  }
];

