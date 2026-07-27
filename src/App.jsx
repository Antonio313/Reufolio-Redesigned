import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import IntroVideo from './components/IntroVideo';
import ScrollProgress from './components/ScrollProgress';
import ProjectDetail from './pages/ProjectDetail';
import { useLenis } from './hooks/useLenis';
import { scrollToSection, scrollToTop } from './utils/scrollTo';

const HomePage = () => {
  // Handle hash-based scroll when navigating back from a project detail page
  // e.g. navigate('/#projects') triggers this
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const timer = setTimeout(() => scrollToSection(hash), 100);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="bg-canvas min-h-screen">
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
  useLenis();
  const location = useLocation();

  // Scroll to top on every route change, except when the URL carries a
  // hash (e.g. navigating back to '/#projects') — HomePage's own hash
  // effect handles scrolling to that section instead.
  useEffect(() => {
    if (!location.hash) scrollToTop();
  }, [location.pathname, location.hash]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects/:projectId" element={<ProjectDetail />} />
    </Routes>
  );
}

export default App;
