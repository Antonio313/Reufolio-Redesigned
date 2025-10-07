# Reufolio - Digital Portfolio

A modern, responsive portfolio website showcasing software engineering projects and skills. Built with React.js and Node.js, featuring smooth animations, a contact form with email integration, and optimized for deployment on Railway.

![Portfolio Preview](./preview.png)

## 🚀 Features

- **Modern Design**: Dark-themed, professional design with smooth animations
- **Responsive**: Fully responsive layout that works on all devices
- **Projects Showcase**: Display your best work with detailed project cards
- **Contact Form**: Integrated with SendGrid for email notifications
- **Resume Download**: Easy access to downloadable resume
- **SEO Optimized**: Meta tags and semantic HTML for better search engine visibility
- **Fast Performance**: Built with Vite for lightning-fast development and optimized builds

## 📁 Project Structure

```
Reufolio Redesigned/
├── reufolio/              # Frontend React application
│   ├── src/
│   │   ├── components/
│   │   │   ├── sections/
│   │   │   │   ├── Hero.jsx
│   │   │   │   ├── About.jsx
│   │   │   │   ├── Projects.jsx
│   │   │   │   └── Contact.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── public/
│   └── package.json
└── backend/               # Backend Node.js/Express server
    ├── server.js
    ├── .env.example
    └── package.json
```

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Icons** - Icon library
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **SendGrid** - Email service
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- SendGrid account (for email functionality)

### Frontend Setup

1. Navigate to the frontend directory:
```bash
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

4. Update the `.env` file with your backend URL:
```env
VITE_API_URL=http://localhost:5000
```

5. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

4. Configure your environment variables:
```env
SENDGRID_API_KEY=your_sendgrid_api_key_here
SENDGRID_FROM_EMAIL=noreply@reufolio.com
PORT=5000
```

5. Start the server:
```bash
npm start
```

The backend will be available at `http://localhost:5000`

## 🚂 Railway Deployment

### Deploy Backend

1. Create a new Railway project for the backend
2. Connect your GitHub repository
3. Set the root directory to `/backend`
4. Add environment variables:
   - `SENDGRID_API_KEY`
   - `SENDGRID_FROM_EMAIL`
   - `PORT` (Railway will set this automatically)
5. Deploy!

### Deploy Frontend

1. Create a new Railway project for the frontend
2. Connect your GitHub repository
3. Set the root directory to `/reufolio`
4. Add environment variable:
   - `VITE_API_URL` (your backend Railway URL)
5. Deploy!

## 📧 SendGrid Setup

1. Create a [SendGrid account](https://sendgrid.com/)
2. Verify your sender email address
3. Create an API key with "Mail Send" permissions
4. Add the API key to your backend `.env` file
5. Update `SENDGRID_FROM_EMAIL` with your verified email

## 📝 Customization

### Update Personal Information

Edit the following files to personalize your portfolio:

- `reufolio/src/components/sections/Hero.jsx` - Name, title, and bio
- `reufolio/src/components/sections/About.jsx` - About section and skills
- `reufolio/src/components/sections/Projects.jsx` - Project details
- `reufolio/index.html` - SEO meta tags

### Add Your Resume

1. Add your resume PDF to `reufolio/public/resume.pdf`
2. The download link is already configured in the Navbar

### Change Colors

Edit `reufolio/tailwind.config.js` to customize the color scheme.

## 🏗️ Building for Production

### Frontend
```bash
cd reufolio
npm run build
```

The build output will be in the `dist` directory.

### Preview Production Build
```bash
npm run preview
```

## 📱 Mobile Responsive

The portfolio is fully responsive and tested on:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎨 Design Features

- Smooth scroll navigation
- Animated section transitions
- Hover effects on interactive elements
- Custom scrollbar
- Loading states for forms
- Success/Error notifications

## 🔒 Security

- Environment variables for sensitive data
- CORS configuration
- Input validation on contact form
- Email sanitization

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Reuel Richards**
- Email: reuelrichards1@gmail.com
- LinkedIn: [reuel-richards-876b221aa](https://linkedin.com/in/reuel-richards-876b221aa/)
- GitHub: [@Antonio313](https://github.com/Antonio313)

## 🙏 Acknowledgments

- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations from [Framer Motion](https://www.framer.com/motion/)
- Email service by [SendGrid](https://sendgrid.com/)

---

Built with ❤️ using React & Tailwind CSS
