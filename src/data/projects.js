export const projects = [
  {
    id: "pongs-shipping",
    title: "Pongs Shipping Company",
    shortDescription: "Full-stack freight forwarding management system",
    description: "Full-stack freight forwarding management platform connecting U.S. E-commerce with the people of Jamaica. The customer-facing interface provides dedicated Florida shipping addresses, package pre-alert submission, and real-time shipment tracking. On the operations side, a staff dashboard enables comprehensive package management, detailed status tracking, automated transfer list generation, package history lookup, and revenue-per-package analytics. The application is secured with robust role-based access control and a granular permissions system to support secure, efficient workflows across different user roles.",
    tech: {
      frontend: ["React", "JavaScript", "Tailwind CSS"],
      backend: ["Node.js", "Express", "PostgreSQL"],
      devops: ["Railway", "AWS", "SendGrid"]
    },
    role: "Fullstack Developer",
    status: "live",
    featured: true,
    github: "",
    live: "https://pongsshipping.com",
    metrics: [
      "80% efficiency improvement",
      "Real-time tracking",
      "Automated notifications"
    ]
  },
  {
    id: "jewels-and-time",
    title: "Jewels and Time",
    shortDescription: "Custom e-commerce platform with intelligent lead scoring",
    description: "Three-tier system for luxury jewelry business: headless CMS for content management, customer-facing storefront, and TypeScript-powered backend API. Features custom lead scoring algorithm that tracks visitor engagement and classifies leads (hot/cold). Integrated multi-channel communications (WhatsApp, phone, email) enables a seamless admin-to-customer interactions. Purpose-built to convert website visitors into lifelong customers.",
    
    tech: {
      frontend: ["React", "TypeScript", "Tailwind CSS"],
      backend: ["Node.js", "TypeScript"],
      devops: ["Railway"]
    },
    role: "Fullstack Developer",
    status: "wip",
    featured: true,
    github: "",
    live: "https://jewelsandtime-production.up.railway.app/",
    metrics: [
      "Custom lead algorithm",
      "Multi-channel comms",
      "Headless CMS"
    ]
  },
  {
    id: "reufolio",
    title: "Reufolio",
    shortDescription: "Modern, high-performance portfolio website",
    description: "Modern portfolio website showcasing software engineering expertise. Built with ReactJS, featuring smooth Framer Motion animations, responsive Tailwind CSS design, and serverless contact form via EmailJS. Demonstrates proficiency in modern frontend development, UI/UX design principles, deployment automation, and performance optimization.",
    tech: {
      frontend: ["React", "Javascript", "Tailwind CSS", "Framer Motion"],
      backend: ["EmailJS"],
      devops: ["Railway"]
    },
    role: "Fullstack Developer",
    status: "live",
    featured: true,
    github: "https://github.com/Antonio313",
    live: "https://reufolio.online",
    metrics: [
      "Performance optimized",
      "Serverless architecture",
      "Fully responsive"
    ]
  },
  {
    id: "bytegrade",
    title: "ByteGrade",
    shortDescription: "AI-powered automated code grading platform",
    description: "Automated grading platform for evaluating student code submissions in C, C++, Python, and Java. Led frontend development creating an intuitive low-code interface for professors to configure grading rubrics without technical expertise. System provides instant feedback to students, comprehensive assignment management, and scalable infrastructure for multi-language code execution.",
    tech: {
      frontend: ["React", "JavaScript", "Framer Motion", "Tailwind CSS"],
      backend: [".NET", "C#", "OpenAI API", "PostgreSQL"],
      devops: ["AWS"]
    },
    role: "Lead Frontend Developer",
    status: "shelved",
    featured: true,
    github: "",
    live: "",
    metrics: [
      "Multi-language support",
      "Instant feedback",
      "LMS-like interface"
    ]
  },

  {
    id: "rws-website",
    title: "Reuel's Web Services",
    shortDescription: "Modern business portfolio and services showcase website",
    description: "A modern, fully responsive business website that showcases end-to-end web development services, from e-commerce platforms and inventory management tools to appointment scheduling systems and custom database solutions. It features a dedicated portfolio section highlighting completed projects, SEO-optimized pages with comprehensive meta tags and JSON-LD structured data, and an integrated contact form powered by EmailJS for consultation requests. Built with a mobile-first approach, the site delivers a fast, seamless experience across all devices.",
    tech: {
      frontend: ["React", "TypeScript", "Tailwind CSS"],
      backend: [],
      devops: ["Railway", "EmailJS"]
    },
    role: "Fullstack Developer",
    status: "live",
    featured: true,
    github: "https://github.com/Antonio313/RWS",
    live: "https://reuelswebservices.online",
    metrics: [
      "SEO Optimized",
      "60% conversion increase",
      "Mobile-first responsive design"
    ]
  }
];
