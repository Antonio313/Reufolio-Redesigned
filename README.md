# Reufolio - Digital Portfolio

A modern, responsive portfolio website showcasing software engineering projects and skills. Built with React.js and featuring smooth animations, a contact form with EmailJS integration, and optimized for deployment on Railway.

## 🚀 Features

- **Modern Design**: Dark-themed, professional design with animated backgrounds and smooth transitions
- **Fully Responsive**: Works flawlessly on all devices - desktop, tablet, and mobile
- **Projects Showcase**: Display featured projects with detailed descriptions and live demos
- **Contact Form**: Email integration via EmailJS - no backend required
- **Resume Download**: One-click resume download functionality
- **Animated Backgrounds**: Gradient orbs, floating particles, and code symbols throughout
- **SEO Optimized**: Meta tags and semantic HTML for better search engine visibility
- **Fast Performance**: Built with Vite for lightning-fast development and optimized production builds

## 📁 Project Structure

```
reufolio/
├── src/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.jsx         # Landing section with CTA
│   │   │   ├── About.jsx        # Skills and bio section
│   │   │   ├── Projects.jsx     # Featured projects showcase
│   │   │   └── Contact.jsx      # Contact form with EmailJS
│   │   ├── Navbar.jsx           # Navigation with smooth scroll
│   │   └── Footer.jsx           # Footer with social links
│   ├── App.jsx                  # Main application component
│   ├── main.jsx                 # React entry point
│   └── index.css                # Global styles and Tailwind directives
├── public/
│   ├── logo.svg                 # Custom Reufolio logo
│   ├── favicon.svg              # Custom favicon
│   └── resume.pdf               # Downloadable resume
├── railway.json                 # Railway deployment config
├── tailwind.config.js           # Tailwind CSS configuration
└── package.json                 # Dependencies and scripts
```

## 🛠️ Tech Stack

- **React 19.1.1** - UI library
- **Vite 7.1.7** - Build tool and dev server
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Framer Motion 12.23** - Animation library
- **React Icons 5.5** - Icon components
- **EmailJS** - Frontend email service (no backend needed)

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/reufolio.git
cd reufolio
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

4. Configure EmailJS environment variables in `.env`:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

See [EMAILJS_SETUP.md](./EMAILJS_SETUP.md) for detailed EmailJS configuration instructions.

5. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 📧 EmailJS Setup

EmailJS allows you to send emails directly from the frontend without a backend server.

**Quick Setup:**

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Add an email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{message}}`
   - `{{to_email}}`
4. Get your Service ID, Template ID, and Public Key
5. Add them to your `.env` file

For detailed step-by-step instructions, see [EMAILJS_SETUP.md](./EMAILJS_SETUP.md).

## 🚂 Railway Deployment

This project is pre-configured for easy deployment on Railway.

**Quick Deploy:**

1. Push your code to GitHub
2. Go to [Railway](https://railway.app) and create a new project
3. Connect your GitHub repository
4. Add environment variables (EmailJS credentials)
5. Deploy automatically!

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

### Environment Variables for Production

In Railway dashboard, add these variables:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 🏗️ Building for Production

Build the production-ready application:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

The build output will be in the `dist` directory.

## 📝 Customization

### Update Personal Information

Edit these files to personalize your portfolio:

- **[Hero.jsx](./src/components/sections/Hero.jsx)** - Name, title, tagline, and CTA
- **[About.jsx](./src/components/sections/About.jsx)** - Bio, skills, and technologies
- **[Projects.jsx](./src/components/sections/Projects.jsx)** - Project details, descriptions, and links
- **[Footer.jsx](./src/components/Footer.jsx)** - Social media links
- **[index.html](./index.html)** - SEO meta tags, title, description

### Add Your Resume

1. Replace `public/resume.pdf` with your resume
2. The download link in the navbar will automatically use it

### Customize Colors

The portfolio uses a cyan/blue gradient theme. To customize:

- Edit color classes in component files (e.g., `text-cyan-400`, `from-cyan-500`)
- Modify `tailwind.config.js` for global color scheme changes

### Add/Remove Skills

Edit the `skills` array in [About.jsx](./src/components/sections/About.jsx:67-82):

```jsx
const skills = [
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
  // Add your skills here
];
```

### Add More Projects

Edit the `projects` array in [Projects.jsx](./src/components/sections/Projects.jsx:223-308) to add or modify projects.

## 📱 Responsive Design

Fully responsive and tested on:
- **Desktop**: 1920px+
- **Laptop**: 1024px - 1919px
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## 🎨 Design Features

- **Smooth Scroll Navigation** - Seamless section transitions
- **Framer Motion Animations** - Fade-ins, slides, and parallax effects
- **Animated Backgrounds** - Gradient orbs, floating shapes, particles
- **Interactive Elements** - Hover effects, scale transforms, gradient glows
- **Custom Scrollbar** - Cyan-themed scrollbar design
- **Loading States** - Visual feedback for form submission
- **Success/Error Notifications** - User-friendly form feedback

## 🔒 Security

- Environment variables for sensitive API keys
- `.gitignore` configured to exclude `.env` files
- Input validation on contact form
- EmailJS handles email sanitization

## 📄 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 📚 Documentation

- [DEPLOYMENT.md](./DEPLOYMENT.md) - Detailed deployment guide for Railway
- [EMAILJS_SETUP.md](./EMAILJS_SETUP.md) - Complete EmailJS configuration
- [BACKEND_REMOVED.md](./BACKEND_REMOVED.md) - Notes on backend removal

## 👤 Author

**Reuel Richards**
- Email: reuelrichards1@gmail.com
- LinkedIn: [reuel-richards-876b221aa](https://linkedin.com/in/reuel-richards-876b221aa/)
- GitHub: [@Antonio313](https://github.com/Antonio313)

## 🙏 Acknowledgments

- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations from [Framer Motion](https://www.framer.com/motion/)
- Email service by [EmailJS](https://www.emailjs.com/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)
- Built with [Vite](https://vite.dev/)

---

Built with ❤️ using React & Tailwind CSS
