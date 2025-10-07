# Quick Start - Reufolio

## 🚀 Start Development

```bash
npm run dev
```

Visit: http://localhost:5173 (or whatever port Vite assigns)

## 📧 Setup Contact Form (Required)

1. Go to [emailjs.com](https://www.emailjs.com/) and create a free account
2. Get your Service ID, Template ID, and Public Key
3. Create `.env` file in this folder:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Restart dev server

**Full instructions**: See `../EMAILJS_SETUP.md`

## 📄 Add Your Resume

Place your resume PDF at: `public/resume.pdf`

## 🎨 Customize Content

- **Personal info**: [src/components/sections/Hero.jsx](src/components/sections/Hero.jsx)
- **About & Skills**: [src/components/sections/About.jsx](src/components/sections/About.jsx)
- **Projects**: [src/components/sections/Projects.jsx](src/components/sections/Projects.jsx)
- **SEO**: [index.html](index.html)

## 🏗️ Build for Production

```bash
npm run build
```

Output: `dist/` folder

## 🚂 Deploy to Railway

1. Push to GitHub
2. Connect Railway to your repo
3. Add environment variables in Railway:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
4. Deploy!

## 📚 Documentation

- [EMAILJS_SETUP.md](../EMAILJS_SETUP.md) - Email setup guide
- [RESUME_INSTRUCTIONS.md](../RESUME_INSTRUCTIONS.md) - How to add resume
- [README.md](../README.md) - Full documentation

## ✨ Features

- ✅ Modern gradient design
- ✅ Smooth animations
- ✅ Responsive (mobile, tablet, desktop)
- ✅ Contact form with EmailJS
- ✅ Resume download
- ✅ SEO optimized
- ✅ No backend needed!

---

Need help? Check the docs above or visit the portfolio at http://localhost:5173
