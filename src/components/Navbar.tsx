import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(nextLang);
  };

  const navLinks = [
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.mission'), path: '/mission' },
    { name: t('nav.projects'), path: '/projects' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 py-4 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-lg' 
          : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            <div className="h-8 md:h-10 transform group-hover:scale-105 transition-transform">
              <img src="/logo.png?v=1" alt="Fundación Vuelo Controlado" className="h-full w-auto object-contain" />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-black uppercase tracking-widest transition-colors ${
                  location.pathname === link.path ? 'text-primary-600' : 'text-slate-600 hover:text-primary-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-2 text-slate-600 hover:text-primary-500 transition-colors border-l border-slate-200 pl-6"
            >
              <Icon icon="material-symbols:language" width={20} />
              <span className="text-xs font-black uppercase">{i18n.language}</span>
            </button>

            <Link 
              to="/donate" 
              className={`bg-primary-500 text-[#0A0A0A] hover:bg-primary-400 px-6 py-2.5 rounded-xl text-sm font-black uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(0,255,0,0.15)] ${
                location.pathname === '/donate' ? 'ring-2 ring-primary-500 ring-offset-2' : ''
              }`}
            >
              {t('nav.donate')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
             <button onClick={toggleLanguage} className="text-slate-600 font-black uppercase text-xs">
               {i18n.language}
             </button>
             <button 
              onClick={() => setIsMenuOpen(true)}
              className="text-slate-900"
            >
              <Icon icon="material-symbols:menu-rounded" width={32} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-white z-[60] flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
               <div className="flex items-center">
                 <img src="/logo.png?v=1" alt="Logo" className="h-10 w-auto object-contain" />
               </div>
               <button onClick={() => setIsMenuOpen(false)} className="text-slate-900">
                 <Icon icon="material-symbols:close-rounded" width={40} />
               </button>
            </div>
            
            <div className="flex flex-col space-y-8 flex-grow">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl font-black uppercase tracking-tighter text-slate-900 hover:text-primary-600 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="pt-8 border-t border-slate-100">
                <Link 
                  to="/donate" 
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full bg-primary-500 text-[#0A0A0A] py-6 rounded-2xl text-2xl font-black text-center uppercase"
                >
                  {t('nav.donate')}
                </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
