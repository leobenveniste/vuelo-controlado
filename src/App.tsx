import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Footer from './components/Footer';
import AboutPage from './pages/About';
import MissionPage from './pages/Mission';
import ProjectsPage from './pages/Projects';
import ContactPage from './pages/Contact';
import DonatePage from './pages/Donate';
import ScrollToTop from './components/ScrollToTop';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Mission />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#0A0A0A]">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/mission" element={<MissionPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/donate" element={<DonatePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
