export const projects = [
  {
    id: "pongs-shipping",
    title: "Pongs Shipping Company",
    shortDescription: "Full-stack freight forwarding management system",
    description: "Full-stack freight forwarding management system connecting Florida to Jamaica. Customers receive personal Florida shipping addresses, create package prealerts, and track shipments in real-time. Staff dashboard features comprehensive package management, status tracking, automated transfer lists, package history, and revenue/package analytics. Built with role-based access controls and permissions system.",
    tech: {
      frontend: ["React", "JavaScript", "Tailwind CSS"],
      backend: ["Node.js", "Express", "PostgreSQL"],
      devops: ["Railway", "AWS S3", "SendGrid"]
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
    description: "Three-tier system for luxury jewelry business: headless CMS for content management, customer-facing storefront, and TypeScript-powered backend API. Features custom lead scoring algorithm that tracks visitor engagement and classifies leads (hot/cold). Integrated multi-channel communications (WhatsApp, phone, email) enable seamless admin-to-customer interactions. Purpose-built to convert website visitors into lifelong customers.",
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
      "Custom lead scoring",
      "Multi-channel comms",
      "Headless CMS"
    ]
  },
  {
    id: "reufolio",
    title: "Reufolio",
    shortDescription: "Modern, high-performance portfolio website",
    description: "Modern portfolio website showcasing software engineering expertise. Built with React 19 and Vite 7 for optimal performance, featuring smooth Framer Motion animations, responsive Tailwind CSS design, and serverless contact form via EmailJS. Demonstrates proficiency in modern frontend development, UI/UX design principles, deployment automation, and performance optimization.",
    tech: {
      frontend: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
      backend: ["EmailJS (serverless)"],
      devops: ["Railway", "CI/CD"]
    },
    role: "Solo Developer & Designer",
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
    description: "Enterprise-grade automated grading platform for evaluating student code submissions in C, C++, Python, and Java. Led frontend development creating an intuitive low-code interface for professors to configure grading rubrics without technical expertise. System provides instant feedback to students, comprehensive assignment management, and scalable infrastructure for multi-language code execution.",
    tech: {
      frontend: ["React", "TypeScript", "Material-UI"],
      backend: ["Node.js", "PostgreSQL"],
      devops: ["AWS"]
    },
    role: "Frontend Lead Developer",
    status: "live",
    featured: true,
    github: "",
    live: "https://bytegrade.online",
    metrics: [
      "Multi-language support",
      "Instant feedback",
      "Low-code interface"
    ]
  }
];
