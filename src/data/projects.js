export const projects = [
  {
    id: "pongs-shipping",
    title: "Pongs Shipping Company",
    shortDescription: "Full-stack freight forwarding management system",
    description: "Pongs Shipping came to me with a working business and no digital infrastructure to support it. Running on a mix of spreadsheets and processes that lived mostly in people's heads, the operation needed a purpose-built platform. The result is a two-sided system: a customer portal with dedicated Florida shipping addresses, package pre-alert submission, and live tracking across six status stages, and a staff operations dashboard with six-tier role-based access control, transfer list management, revenue tracking in Jamaican dollars, and automated SendGrid notifications. Since launch, operational efficiency improved by 80%.",
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
    blogContent: [
      "Pongs Shipping came to me with a clear problem but no clear system. The business was already up and running. Customers were calling in, packages were moving, and money was being made, but the infrastructure behind it was a patchwork of spreadsheets and processes that lived mostly in people's heads. Some things were tracked digitally, others were written on paper, and a lot simply depended on the right person remembering the right detail at the right time. I was brought in to replace that with something built to scale.",
      "The challenge was that Pongs is not a simple business to model. It runs on two sides at once, and each side has very different needs. Customers needed a way to get dedicated Florida shipping addresses, submit package pre-alerts with receipt uploads, and track shipments through six status stages without having to call in. At the same time, staff needed tools for package intake, transfer list generation with package check-off, revenue tracking, and daily performance visibility, all within a single platform.",
      "The hardest part of the build was the six-tier role system. On paper, six roles sounds straightforward. In practice, freight forwarding businesses do not fit neatly into clean boundaries. A Handler and a Transfer Agent may touch some of the same data, but for completely different reasons. A Front Desk worker needs visibility into things they cannot act on, while an Admin can do almost everything, just not quite as much as a Super Admin. Getting those lines right took a lot of back and forth with the client so I could understand the real workflow before translating it into code. I built exactly what the business needed, nothing more.",
      "On the technical side, the platform is built with React on the frontend and a Node.js and Express backend, with PostgreSQL as the database. Receipt uploads and file storage run through AWS S3. SendGrid handles automated email notifications at every shipment stage, so customers stay informed without any manual effort from staff. The application is containerized with Docker and deployed on Railway.",
      "Since launch, operational efficiency at Pongs has improved by 80%. The paperwork is gone, every status change triggers an automated notification, and staff now have a full audit trail with daily performance data. What was once running on memory and spreadsheets now has a platform built for its actual scale. I'm proud of what got built here, and I'm especially glad I took the time to understand how the business actually worked before writing a single line of code."
    ]
  },
  {
    id: "jewels-and-time",
    title: "Jewels and Time",
    shortDescription: "Three-tier luxury e-commerce platform with intelligent lead scoring",
    description: "When a luxury jewelry business came to me needing an online presence, I quickly identified a problem worth solving: a standard enquiry form treats every visitor the same, regardless of how serious they are. I pitched a custom lead scoring engine that grades visitors on nine behavioral signals and classifies them as Cold, Warm, or Hot, with automatic WhatsApp and email alerts firing the moment a high-intent lead lands. The result is a three-tier system: a headless CMS for content management, a React storefront with shareable wishlists, and a TypeScript backend with a Swagger-documented REST API. The core features are built and the project is moving toward a full launch.",
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
    blogContent: [
      "Jewels and Time is a luxury jewelry business that came to me needing more than a standard e-commerce build. The initial brief was straightforward: a storefront that could showcase the collection and handle enquiries. But early in the process, I identified a problem worth solving. Luxury goods buyers do not behave like typical online shoppers. They browse repeatedly, they compare, they come back. A standard contact form treats every visitor the same way regardless of how much intent they have shown, and for a business selling high-value pieces, that is a significant missed opportunity. I pitched a different approach.",
      "The idea was a lead scoring engine that watches how a visitor behaves on the site and assigns a score based on nine behavioral signals. Time spent on pages, return visits, products viewed, and wishlist additions all contribute to a total score that classifies the visitor as Cold, Warm, or Hot. The client understood the value immediately. They had been losing time on low-intent enquiries while genuinely interested buyers slipped through without any follow-up. The scoring system gave them a way to focus their attention on the people who actually wanted to buy.",
      "To support all of this, I designed a three-tier architecture. The first tier is a headless CMS built for the business owner, featuring a Kanban-style content pipeline where products, categories, and listings are managed without touching code. The second tier is the customer-facing storefront, built with React 19 and TypeScript, with a Jewelry Box feature that lets visitors save and share wishlists across sessions. The third tier is a TypeScript and Express backend that runs the lead scoring engine, manages multi-channel notifications, and exposes a fully Swagger-documented REST API.",
      "When a visitor crosses a scoring threshold, the backend fires a notification automatically. The team receives a WhatsApp message via Twilio and an email via Nodemailer at the same moment, eliminating the tool-switching that costs response time. For luxury sales, speed of follow-up matters. The goal was to get the right person a notification in minutes, not hours.",
      "The core features are built and running. The lead scoring engine is live, the CMS is operational, and the storefront is deployed on Railway. What remains is the refinement that separates a working build from a finished product: edge case handling, performance tuning, and getting the experience exactly right before full launch. I am satisfied with the architecture, and I think the lead scoring system in particular is something I would carry into other client projects in the right context."
    ]
  },
  {
    id: "dutchie",
    title: "Dutchie",
    shortDescription: "Community-driven Caribbean recipe platform",
    description: "Traditional recipe platforms often overlook the nuances of Caribbean cuisine, including significant ingredients and cultural knowledge. To address this, I created Dutchie, a community-driven recipe platform for Caribbean food enthusiasts, locals, and tourists. The platform features community moderation, a reputation system, verified recipe badges, and options for user feedback, as well as photo uploads and real-time messaging. Ultimately, Dutchie preserves and celebrates authentic Caribbean culinary traditions while serving as a valuable resource for culinary tourism in the region.",
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
    blogContent: [
      "Dutchie is a platform designed for enthusiasts of Caribbean cuisine who want to experience authentic dishes in their truest form. The inspiration for Dutchie arose when I realized that traditional online recipe platforms like Serious Eats and Food.com overlook essential elements of Caribbean cuisine. These elements include not only arbitrary ingredient measurements but also a focus on components that reflect the culture. This means prioritizing ingredients that are easily accessible, whether found in local markets or common kitchen pantries.",
      "While this approach does narrow my target audience to individuals currently living in the Caribbean or those visiting it, this is a deliberate choice. My goal is to establish Dutchie as the premier recipe platform for both tourists and locals. I want users to feel assured that the dishes they prepare from our platform are genuinely authentic. Moreover, I view Dutchie as a vital resource for preserving Caribbean culinary cultures. With younger generations increasingly losing touch with traditional recipes, a significant portion of my mission is to reignite their passion for cooking and encourage the transmission of recipes across generations.",
      "To realize this vision, I embarked on a six-sprint agile development cycle and built Dutchie using a Turborepo monorepo structure featuring Next.js. I utilized TypeScript for the frontend, Node.js/Express for the backend, and PostgreSQL as the database provider, along with Redis for database caching and Socket.io to power a live chat system. Other technologies I employed include Tailwind, Docker, AWS S3, Sentry, Uptime Robot, and Prisma ORM, among others. However, the fundamental components remain Next.js, Node.js, and PostgreSQL. This core foundation enabled me to create a platform that is visually appealing while also being structurally sound and stable for its intended purpose.",
      "Once users register on the platform, they can immediately contribute their own recipes. To ensure authenticity, these recipes undergo a vetting process by community moderators. This rigorous scrutiny guarantees that only community-approved recipes are displayed. Furthermore, we implemented a reputation point system, which features various user tiers that signify a recipe contributor's expertise and ensure their creations can be trusted. Moderators can also award an \"authentication badge,\" indicating that they have replicated the recipe and can vouch for its adherence to traditional Caribbean cuisine.",
      "In addition to the recipe posting feature, Dutchie includes an upvote/downvote system, a star rating system ranging from one to five, and a comment section where users can share their thoughts on each recipe. The platform even features an \"I cooked this\" button, allowing users to upload photos of their culinary successes as proof that they followed the recipe. Participation in all features, except the comment section, grants reputation points to recipe contributors, boosting their standing within the community.",
      "Moreover, a live messaging system facilitates communication among users, fostering collaboration and engagement. Although this feature was initially added out of personal curiosity, the enjoyment of having a live chat option enhances user experience. Alongside the live chat, we have established a notification system that alerts users in real-time when someone interacts with their recipes, whether through likes or comments, as well as notifications for recipe approvals.",
      "While this summary only scratches the surface of what Dutchie offers, it highlights the platform's core features. Ultimately, I am thrilled to have a significant project in my portfolio that addresses a genuine need in my country and the wider Caribbean. As Dutchie continues to grow, it promises to become not only a valuable resource but also a staple in the culinary tourism industry for anyone eager to explore authentic Caribbean cuisine."
    ]
  },
  {
    id: "rasta-collections",
    title: "Rasta Collections",
    cmsUrl: "https://rastacollections.store/admin",
    shortDescription: "Custom e-commerce storefront with a password-protected CMS",
    description: "The client runs an eBay business selling collectible coins and rare rocks, and their original plan was to rely on word of mouth to drive traffic to their listings. When they came to me, I proposed something more useful: a dedicated website that acts as a polished catalogue for their products, with embedded links guiding visitors directly to the eBay listings to complete their purchases. The result is a full-stack storefront backed by a password-protected CMS where the client manages their own products, categories, and images without any developer involvement. Images are compressed to WebP and served via AWS S3, and the whole application ships as a single Docker container on Railway.",
    tech: {
      frontend: ["React 19", "TypeScript", "Tailwind CSS v4", "Vite 7", "Shadcn/UI", "TanStack Query v5", "React Hook Form", "Zod"],
      backend: ["Node.js", "Express 4", "TypeScript", "Prisma ORM", "PostgreSQL 18", "JWT Auth", "Sharp"],
      devops: ["Railway", "Docker", "AWS S3"]
    },
    role: "Fullstack Developer",
    status: "live",
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
    blogContent: [
      "Rasta Collections is a business built around rare coins and rocks with a distinct cultural identity rooted in Rastafarian and Jamaican heritage. When the client approached me, their model was simple. They posted items on eBay and relied on word of mouth to bring buyers to their listings. It worked to a degree, but it had a ceiling. There was no central place that represented their brand or gave potential buyers a reason to explore what they had available. They wanted a website, but they were not sure exactly what form it should take.",
      "I proposed building two things together: a public-facing storefront that functioned as a catalogue for their products, and a password-protected CMS that gave them full control over that catalogue without needing a developer for routine updates. The storefront would not handle purchases directly. Instead, each product listing would carry an embedded link to the corresponding eBay listing, keeping the transaction on a platform they already trusted. When I explained the CMS, the client understood the value immediately. Not depending on a developer every time they wanted to add a new coin or update a description was exactly what they needed.",
      "On the technical side, the project is a monorepo with shared Zod schemas across the frontend and backend, so validation logic lives in one place and both sides stay in sync. The frontend is built with React 19 and TypeScript on Vite, using Shadcn/UI and TanStack Query. The backend is Node.js and Express backed by PostgreSQL with Prisma ORM, and JWT authentication with access and refresh token rotation keeps the admin session secure. Images uploaded through the CMS are compressed to WebP via Sharp before being stored in and served from AWS S3.",
      "The most demanding part of the build was getting the single Docker container deployment right. The goal was to ship the entire application as one container on Railway, with automatic database migrations running on startup so the deployment process required no manual steps. Getting the build order, migration timing, and Railway configuration all working together cleanly took more iteration than the feature work did. Once it was right, it made the deployment process genuinely simple.",
      "Rasta Collections is live at rastacollections.store. The client manages most of the catalogue independently, adding new listings and uploading images when stock comes in. For anything more involved they check in, but the day-to-day is theirs. That independence was the whole point of building the CMS in the first place, and it is good to see it working the way it was intended."
    ]
  },
  {
    id: "reufolio",
    title: "Reufolio",
    shortDescription: "Modern, high-performance portfolio website",
    description: "Most developer portfolios look identical, featuring the same dark background, the same skills grid, and the same project cards copied from a template. I built Reufolio from scratch for two reasons: to stand out aesthetically, and to prove that I could. The site features a session-gated intro video, a spring physics scroll progress indicator, and per-project case study pages with lightbox galleries, all built with React 19, Framer Motion, and a data-driven architecture that keeps it easy to maintain.",
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
    blogContent: [
      "Reufolio is my personal portfolio, but the fact that it needed to feel personal is exactly the point. When I started planning it, I kept landing on other developer portfolios that all looked the same: the same dark background, the same three-column skills grid, and the same project cards arranged in a Bento box layout. Most of them were built from templates, and it showed. I did not want to compete in that space. I wanted to build something that communicated, before a visitor even read a word, that I care about craft.",
      "But aesthetics alone were not enough. A portfolio built on Webflow or a drag-and-drop builder can look polished, yet it does not prove anything about engineering skill. For a full stack developer, the portfolio itself should be the proof of work. So Reufolio had two jobs: look like it was designed with intention, and be built like it was engineered with intention. Both mattered equally, and I was not willing to compromise on either.",
      "One of the first decisions I made was the session-gated intro video. The idea came from a combination of things. I wanted to create a memorable first impression and give visitors a sense of who I am before they started reading about what I have built. I also wanted to see if I could pull it off in a cost-effective way. A video intro is the kind of thing most developer portfolios do not have, and I thought that alone made it worth doing. Gating it by session means it plays once and then disappears, so it never becomes annoying on repeat visits. It is a small detail, but it is the kind of detail people tend to remember.",
      "The spring physics scroll progress indicator was another deliberate choice. A standard CSS progress bar on a scroll-heavy page gives you information but no feel. Using Framer Motion's spring physics meant the bar has weight to it. It lags slightly behind the scroll position, accelerates, and overshoots just a little. Most visitors will not consciously notice that, but they will feel that the site is alive in a way a flat CSS version is not. I think those small things compound.",
      "The per-project case study pages were probably the most work, and also where I am most proud of what came out. Each project gets its own dedicated page with screenshots in a lightbox you can navigate using keyboard arrows, a tech stack breakdown, and a detailed write-up. The idea was that anyone seriously evaluating my work should not have to switch between five browser tabs to understand a project. Everything they need to make a judgment is in one place, with enough depth that it rewards actually reading it.",
      "Underneath all of this are decisions most visitors will never notice. Animations are GPU-accelerated using only transform and opacity to avoid triggering layout recalculations. Every Framer Motion sequence checks for the user's reduced motion preference before running. Mobile optimizations keep the experience smooth on lower-end devices. I think a lot about what a portfolio communicates implicitly. If your own site has janky animations or a poor Lighthouse score, that says something about the client work before a word is read.",
      "Reufolio is live at reufolio.online, and it is working. The site has directly contributed to landing freelance conversations that would not have happened otherwise, not because I pushed it, but because it shows up and holds up when people actually look at it. I am proud that the code is as considered as the design. And I am proud that it is genuinely mine."
    ]
  },
  {
    id: "bytegrade",
    title: "ByteGrade",
    shortDescription: "AI-powered automated code grading platform",
    description: "ByteGrade was my Final Year Major Project for BSc Computer Science at the University of Technology, Jamaica, built with a four-person team across our final semester. The idea grew from a problem every CS student watching their professor grade code assignments has noticed: manual code grading is slow, inconsistent, and does not scale. ByteGrade is an automated grading platform that lets professors define rubrics through a low-code interface and receive AI-generated, structured feedback on student submissions in C, C++, Python, and Java. The platform was very well received by the department, and leading the frontend gave me my first real experience of what it means to build software as part of a coordinated team.",
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
    blogContent: [
      "ByteGrade started as a direction rather than a brief. The university gave us a broad area to work within, and the team shaped the specific idea from there. The problem we landed on was one we had all experienced firsthand: manual code grading is time-consuming, inconsistent, and does not scale with class size. A professor grading 80 assignments by hand is not just slow. The quality of feedback degrades across the pile. We wanted to fix that.",
      "The platform works in two halves. Professors interact with a low-code rubric builder where they define the grading criteria for each assignment without writing code. Once submissions come in, the .NET backend sends them to OpenAI's API with the rubric as context, and structured feedback is returned instantly. Students receive a grade and an explanation in seconds, not days. The goal was to make feedback fast enough to actually be useful during the learning process, rather than arriving after a student had already moved on to the next topic.",
      "I led frontend development on a four-person team, which in practice meant doing more than just building screens. The split between a React frontend and a .NET backend written by the rest of the team meant I was constantly working at the boundary: aligning on API contracts, negotiating data shapes, and making sure that what the frontend expected was what the backend actually returned. It is the kind of coordination work that does not show up in a demo but shapes how the whole thing holds together.",
      "The most difficult thing to get right was the integration with the .NET backend. Working across a technology boundary with team members who had their own implementation priorities meant the API surface changed more than I would have liked during development. I learned to over-communicate early, push for agreed contracts before either side started building, and treat the integration layer as its own problem worth thinking about carefully, rather than something to sort out at the end.",
      "ByteGrade was very well received by the department. The AI-powered approach impressed the evaluation panel, and the project earned a strong grade as a capstone submission. More than the grade, what I took from it was the experience of owning a significant piece of a real engineering project in a team setting, making decisions under pressure, navigating dependencies I did not control, and delivering something that worked. That is harder to teach than any specific technology."
    ]
  },
  {
    id: "rws-website",
    title: "Reuel's Web Services",
    shortDescription: "Business portfolio and services showcase website",
    description: "Clients considering a significant investment in software development look for signals of professionalism before they make contact, and presenting as an individual freelancer was leaving the wrong first impression. Reuel's Web Services is the branded entity I built to change that: a clean, mobile-first site that clearly communicates a range of services across web development, UI/UX design, and technical consulting, serving Caribbean businesses and international clients alike. Since launching, consultation enquiries have increased by 60%, and the site consistently achieves 90-plus Lighthouse scores with zero backend infrastructure.",
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
    blogContent: [
      "Reuel's Web Services started as a practical decision. Early in my freelancing career, I noticed that introducing myself as an individual developer put a ceiling on certain conversations. Clients would ask if I had a team, or treat the engagement differently than they would with a named company. I was not running a company in the traditional sense, but I was delivering company-quality work. A branded entity was the signal that matched the reality of what I was already offering.",
      "The site is deliberately Caribbean-first. My primary focus is on businesses in Jamaica and across the region that need serious digital infrastructure but find traditional agencies either too expensive or too far removed from the local context. That said, I also work with international clients, since remote work erases geography for the right kind of project. The site speaks to both audiences without trying to be everything to everyone.",
      "RWS communicates 10 service offerings across three broad areas: web and application development, UI/UX design, and technical consulting and strategy. The range matters because most of my client conversations do not start with 'I need a website.' They start with 'I have this problem.' Having a clear articulation of the full scope of what I can do means those conversations can move somewhere useful quickly, without spending the first meeting establishing what I actually do.",
      "The same reasoning that led me to build Reufolio from scratch applies here. If I am asking clients to trust me with their web presence, my own web presence should be proof that I know what I am doing. A Squarespace landing page would have been faster, but it also would have been the wrong signal. RWS was built with React 19 and TypeScript, Tailwind CSS 4, and a serverless EmailJS contact form with real-time validation. It is SEO-optimized with JSON-LD LocalBusiness structured data, Open Graph, and Twitter Card meta tags baked directly into the HTML, because the site needed to rank, not just exist.",
      "The 60% increase in consultation conversions did not come from ads or outreach. It came from having a site that serious clients could actually evaluate. Before it existed, enquiries came through word of mouth and referrals from previous clients, and the first conversation was always spent establishing credibility. After launch, clients arrived having already read about the services, seen the portfolio, and made a preliminary decision about whether they wanted to work together. That shift changed the quality of every conversation.",
      "RWS is live at reuelswebservices.online, and it does its job. It is the face of how I show up professionally, a signal that the work I do for clients is held to the same standard as the work I do for myself."
    ]
  }
];

