import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import IntroVideo from './components/IntroVideo';
import ScrollProgress from './components/ScrollProgress';
import ProjectDetail from './pages/ProjectDetail';

const HomePage = () => {
  // Handle hash-based scroll when navigating back from a project detail page
  // e.g. navigate('/#projects') triggers this
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const timer = setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen">
      <IntroVideo />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects/:projectId" element={<ProjectDetail />} />
    </Routes>
  );
}

export default App;
