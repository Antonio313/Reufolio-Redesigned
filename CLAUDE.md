# CLAUDE.md — Reufolio Redesigned

This file provides comprehensive context for AI assistants working on this codebase.

---

## Project Overview

**Reufolio** is a personal portfolio website for **Reuel Richards**, a Full Stack Software Engineer based in St. Ann, Jamaica. It is a modern, single-page application showcasing skills, projects, and experience. The site is production-deployed on Railway at `reufolio.online`.

---

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| UI Framework | React | 19.1.1 |
| Build Tool | Vite | 7.1.7 |
| Styling | Tailwind CSS | 3.4.18 |
| Animations | Framer Motion | 12.23.22 |
| Icons | React Icons | 5.5.0 |
| Email | @emailjs/browser | 4.4.1 |
| Node.js | — | 22.12.0 |

**Dev tools:** ESLint, PostCSS, Autoprefixer

---

## Project Structure

```
src/
├── components/
│   ├── sections/
│   │   ├── Hero.jsx         # Landing section with animated background and CTAs
│   │   ├── About.jsx        # Bio, skills grid, experience/education cards
│   │   ├── Projects.jsx     # Featured project cards with tech stack, metrics
│   │   └── Contact.jsx      # Contact form (EmailJS) + contact info
│   ├── Navbar.jsx           # Fixed nav with smooth scroll, mobile menu, resume download
│   └── Footer.jsx           # Brand info, quick links, social links, particles
├── data/
│   ├── index.js             # Re-exports all data
│   ├── personal.js          # Name, contact info, social links, resume path
│   ├── projects.js          # Array of project objects (title, desc, tech, links, metrics)
│   └── skills.js            # Categorized skills with icons
├── assets/
│   └── react.svg
├── App.jsx                  # Root component — composes all sections
├── App.css
├── main.jsx
└── index.css                # Global styles, custom scrollbar, GPU acceleration hints

public/
├── logo.svg                 # Reufolio logo (used in Navbar + Footer)
├── favicon.svg
├── resume.pdf               # Downloadable resume
├── robots.txt
└── sitemap.xml
```

---

## Architecture

- **Single Page Application (SPA)** — no router, navigation is smooth scroll to section IDs
- **Section IDs:** `#home`, `#about`, `#projects`, `#contact`
- All content is **data-driven** — edit files in `src/data/` to update content without touching components
- No backend — EmailJS handles contact form delivery entirely from the browser

---

## Content Data

### Personal Info (`src/data/personal.js`)
- **Name:** Reuel Richards
- **Title:** Full Stack Software Engineer
- **Location:** St. Ann, Jamaica
- **Email:** reuelrichards1@gmail.com
- **Phone:** +1 (876) 573-8748
- **GitHub:** https://github.com/Antonio313
- **LinkedIn:** https://linkedin.com/in/reuel-richards-876b221aa/
- **Resume:** `/resume.pdf`
- **Company:** Reuel's Web Services (RWS), 2024 – Present
- **Education:** BSc Computer Science, University of Technology, Jamaica (2025)

### Projects (`src/data/projects.js`)
Five featured projects, each with: `title`, `description`, `role`, `status` (Live/WIP/Shelved/Featured), `techStack` (categorized), `githubUrl`, `liveUrl`, `metrics`.

| Project | Status | Stack Highlights |
|---------|--------|-----------------|
| Pongs Shipping Company | Live + Featured | React, Node/Express, PostgreSQL, Railway, AWS, SendGrid |
| Jewels and Time | WIP + Featured | React, TypeScript, Node, Railway |
| Reufolio | Live + Featured | React, Tailwind, Framer Motion, EmailJS, Railway |
| ByteGrade | Shelved + Featured | React, .NET/C#, OpenAI API, PostgreSQL, AWS |
| Reuel's Web Services | Live + Featured | React, TypeScript, Tailwind, Railway, EmailJS |

### Skills (`src/data/skills.js`)
Grouped categories with React Icons icons:
- **Languages & Runtime:** TypeScript, JavaScript (ES6+), Node.js, Python, Java, PHP, C#, HTML5, CSS3
- **Frontend Frameworks:** React, Next.js, Vue.js, Tailwind CSS
- **Backend & Databases:** PostgreSQL, MongoDB, MySQL, RESTful APIs
- **DevOps & Cloud:** Docker, AWS, GCP, Railway, Git, GitHub, CI/CD
- **Professional Practices:** Agile, Testing, Code Reviews, Documentation

---

## Styling Conventions

- **Primary approach:** Tailwind CSS utility classes inline on JSX elements
- **Color palette:**
  - Background: `gray-900` (#111827), `gray-800` (#1f2937)
  - Primary accent: `cyan-400` / `cyan-500` (#06b6d4 / #22d3ee)
  - Secondary accent: `blue-500` / `blue-400`
  - Text: `white`, `gray-300`, `gray-400`
  - Gradients: cyan→blue, white→cyan, purple→pink
- **Gradient text:** `bg-gradient-to-r ... bg-clip-text text-transparent`
- **Responsive breakpoints:** `md:` (768px), `lg:` (1024px)
- **Custom CSS** in `index.css`: smooth scroll, custom scrollbar (cyan theme), GPU hints (`translateZ(0)`, `backface-visibility: hidden`), mobile blur optimization

---

## Animation Patterns

All animations use **Framer Motion**. Common patterns used throughout the codebase:

```jsx
// Staggered container + items (used in About, Projects)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

// Scroll-triggered animations (used on sections)
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  variants={containerVariants}
>

// Hover + tap interactions (used on buttons/cards)
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}

// Reduced motion — always use useReducedMotion() before heavy animations
const prefersReducedMotion = useReducedMotion();
```

---

## EmailJS Integration

Contact form uses EmailJS (no backend required).

**Environment variables (`.env`):**
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

**Template variables:** `from_name`, `from_email`, `message`, `to_email`

The `.env` file is gitignored. `.env.example` is committed as a reference.

---

## Deployment

**Platform:** Railway
**Domain:** `reufolio.online` (custom domain via GoDaddy + Cloudflare)
**Node version:** 22.12.0 (locked in `.nvmrc` and `nixpacks.toml`)

**Build command:**
```
npm ci --cache /tmp/.npm --prefer-offline --no-audit && npm run build
```

**Start command:**
```
npm run preview -- --host 0.0.0.0 --port $PORT
```

**Allowed hosts** (in `vite.config.js`):
- `reufolio-redesigned-production.up.railway.app`
- `www.reufolio.online`
- `reufolio.online`
- `.railway.app`, `.up.railway.app`

---

## NPM Scripts

| Script | Command | Purpose |
|--------|---------|---------|
| `dev` | `vite` | Start development server |
| `build` | `vite build` | Production build |
| `preview` | `vite preview` | Preview production build locally |
| `lint` | `eslint .` | Run ESLint |
| `start` | `vite preview --host 0.0.0.0 --port $PORT` | Start for Railway |

---

## Path Aliases (vite.config.js)

```js
@ → /src
@/data → /src/data
@/components → /src/components
```

---

## SEO & Meta (index.html)

- Open Graph tags (og:type="profile", og:title, og:image, og:description)
- Twitter Card tags
- JSON-LD structured data (Person schema)
- Theme color, geolocation, language meta tags
- Canonical URL, robots, sitemap linked

---

## Key Conventions & Notes

- **No TypeScript** — project uses plain `.jsx` and `.js` files
- **No router** — pure SPA with scroll navigation
- **Content updates** go in `src/data/` files, not components
- **New sections** should follow the same animation/variant pattern as existing sections
- **Mobile first** — always consider responsive behavior; some decorative elements are hidden on mobile (`hidden md:block`)
- **Accessibility** — respect `useReducedMotion()` before adding animations
- Always test with `npm run dev` before building
- Resume file lives at `public/resume.pdf` and is served as a static asset

---

## Related Docs

- `README.md` — Project overview and setup guide
- `DEPLOYMENT.md` — Full Railway + custom domain deployment guide
- `QUICK_START.md` — Quick setup for EmailJS and local dev
- `.env.example` — Required environment variable template
