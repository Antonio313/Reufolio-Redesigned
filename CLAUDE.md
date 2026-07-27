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
| Smooth scroll | Lenis | latest |
| Routing | React Router DOM | 6.x |
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
│   │   └── Contact.jsx      # Terminal-style contact form (EmailJS) + contact info
│   ├── Navbar.jsx           # Fixed nav, mobile menu, resume download, theme toggle
│   ├── Footer.jsx           # Brand info, quick links, social links
│   ├── EditorWindow.jsx     # Shared editor-chrome wrapper (traffic lights + tab strip)
│   ├── EditorTabs.jsx       # Clickable tab strip used inside EditorWindow
│   ├── ThemeToggle.jsx      # Dark/light theme switch button
│   ├── IntroVideo.jsx       # Session-gated intro video overlay
│   ├── ScrollProgress.jsx   # Spring-physics scroll progress bar
│   └── Lightbox.jsx         # Fullscreen image viewer for project screenshots
├── pages/
│   └── ProjectDetail.jsx    # Per-project case study page (/projects/:projectId)
├── context/
│   └── ThemeContext.jsx     # ThemeProvider + useTheme() — dark default, localStorage
├── hooks/
│   └── useLenis.js          # Mounts Lenis smooth-scroll, skipped under reduced motion
├── utils/
│   └── scrollTo.js          # Shared scrollToSection() helper (Lenis-aware)
├── data/
│   ├── index.js             # Re-exports all data
│   ├── personal.js          # Name, contact info, social links, resume path
│   ├── projects.js          # Array of project objects (title, desc, tech, links, metrics)
│   └── skills.js            # Categorized skills with icons
├── assets/
│   └── react.svg
├── App.jsx                  # Root component — routes + composes all sections
├── App.css
├── main.jsx                 # Wraps App in ThemeProvider + BrowserRouter
└── index.css                # Theme tokens, global styles, custom scrollbar, GPU hints

public/
├── logo.svg                 # Reufolio logo (used in Navbar + Footer)
├── favicon.svg
├── resume.pdf               # Downloadable resume
├── robots.txt
└── sitemap.xml
```

---

## Architecture

- **Mostly a single-page app** — the homepage (`/`) is one scrolling page (`#home`, `#about`, `#projects`, `#contact` section IDs), navigated via the shared `scrollToSection()` helper (Lenis-aware smooth scroll)
- **React Router** is used only for per-project case study pages (`/projects/:projectId` → `src/pages/ProjectDetail.jsx`); linking back to the homepage sections uses `navigate('/#section')` + the hash-scroll effect in `App.jsx`
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

Redesigned to a **terminal/IDE aesthetic** with a dark-default, light-toggleable theme system (see below). The old hardcoded `gray-900`/`cyan-400` palette has been fully replaced by semantic tokens.

- **Primary approach:** Tailwind CSS utility classes inline on JSX elements, using **semantic color tokens** (not raw Tailwind colors like `gray-900` or `cyan-400`)
- **Theme system:** CSS custom properties defined in `src/index.css` (`:root` = dark defaults, `:root[data-theme='light']` = light overrides), consumed via `tailwind.config.js` color extensions using `rgb(var(--color-x) / <alpha-value>)` so opacity modifiers (e.g. `bg-canvas/50`) work normally. Toggled via `src/context/ThemeContext.jsx` (`useTheme()` hook), persisted to `localStorage`, default is **dark**.
- **Color tokens** (use these class names, never raw Tailwind colors):
  - `bg-canvas` / `text-text-primary` / `text-text-secondary` — page background & text
  - `bg-surface` / `bg-surface-raised` / `border-border` — cards, panels, editor-window chrome
  - `text-accent-cyan`, `text-accent-purple`, `text-accent-green`, `text-accent-amber`, `text-accent-red` — accent colors (cyan = primary/links, purple = keywords/secondary emphasis, green = success/"live" status, amber = warning/"in progress" status, red = errors)
- **Typography:** `font-mono` (JetBrains Mono, loaded via Google Fonts in `index.html`) for headings, code-styled content, labels, and nav; `font-sans` (Inter) for long-form body paragraphs (About bio, Contact copy)
- **Signature motif — the "editor window":** `src/components/EditorWindow.jsx` + `src/components/EditorTabs.jsx` render the traffic-light-dots + clickable tab-strip chrome (`hero.tsx` / `about.md` / `projects/` / `contact.ts`) used at the top of every main section (Hero, About, Projects, Contact). Reuse this pattern for any new top-level section instead of inventing new chrome.
- **Responsive breakpoints:** `md:` (768px), `lg:` (1024px)
- **Custom CSS** in `index.css`: smooth scroll fallback, custom scrollbar (accent-cyan themed), GPU hints (`translateZ(0)`, `backface-visibility: hidden`), `.no-scrollbar` utility (hides scrollbars on horizontally-scrolling strips like the tab bar), `.cursor-blink` (CSS-only blinking cursor used in Hero's code block and typewriter tagline)

---

## Animation Patterns

Animations use **Framer Motion** for entrance/hover/tap, plus **Lenis** (`src/hooks/useLenis.js`, mounted once in `App.jsx`) for smooth scrolling. Section navigation (Navbar, Footer, EditorTabs, Hero) all funnel through the shared `scrollToSection()` helper in `src/utils/scrollTo.js`, which uses Lenis when available and falls back to native `scrollIntoView`.

**Important — avoid the animate-pulse + blur-3xl combo.** The pre-redesign version caused visible scroll hitching by running `animate-pulse` on large `blur-3xl` background orbs. Background ambience should now be **static** (a single non-animated blurred glow is fine) or **transform/opacity-only**; reserve `animate-pulse` for small, non-blurred elements only (status dots, badges).

```jsx
// Scroll-triggered stagger — keep it light. Don't stagger large item counts
// (About's skills used to animate ~30 individual icons; now each category
// group fades in once as a unit instead of per-icon).
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

// Hover + tap interactions (used on buttons/cards) — gate transforms behind
// prefersReducedMotion so reduced-motion users don't get whileHover transforms
whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
whileTap={{ scale: 0.95 }}

// Reduced motion — always check before entrance transforms and any looping animation
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
- **Router used sparingly** — React Router only powers `/projects/:projectId`; the homepage itself is still scroll-navigated, not route-per-section
- **Content updates** go in `src/data/` files, not components
- **New sections** should reuse `EditorWindow`/`EditorTabs` for chrome and follow the same token/animation conventions as existing sections
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
