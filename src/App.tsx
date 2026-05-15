import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Methodology from './components/Methodology';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LoadingScreen from './components/LoadingScreen';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';

// Lazy load pages
const AboutPage = lazy(() => import('./pages/About'));
const MissionPage = lazy(() => import('./pages/Mission'));
const ProjectsPage = lazy(() => import('./pages/Projects'));
const ContactPage = lazy(() => import('./pages/Contact'));
const DonatePage = lazy(() => import('./pages/Donate'));
const QuotePage = lazy(() => import('./pages/Quote'));


const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Mission />
      <Methodology />
    </>
  );
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const { i18n } = useTranslation();
  
  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 500);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <AnimatePresence>
          {loading && <LoadingScreen />}
        </AnimatePresence>
        <div className={`flex flex-col min-h-screen bg-white dark:bg-brand-dark transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
          <Navbar />
          <main className="flex-grow">
            <Suspense fallback={<div className="h-screen bg-white dark:bg-brand-dark" />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/vision" element={<MissionPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/donate" element={<DonatePage />} />
                <Route path="/quote" element={<QuotePage />} />
              </Routes>
            </Suspense>
          </main>

          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
