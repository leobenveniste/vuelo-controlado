import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';


const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
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
          ? 'bg-brand-dark/95 dark:bg-white/95 backdrop-blur-xl border-b border-white/10 dark:border-slate-200 shadow-lg' 
          : 'bg-brand-dark dark:bg-white'
      }`}
    >
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            <div className="h-8 md:h-10 transform group-hover:scale-105 transition-transform">
              <img 
                src={theme === 'dark' ? '/logo.png?v=1' : '/logo_blanco.png'} 
                alt="Fundación Vuelo Controlado" 
                className="h-full w-auto object-contain" 
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-black uppercase tracking-widest transition-colors ${
                  location.pathname === link.path 
                    ? 'text-primary-500 dark:text-primary-600' 
                    : 'text-slate-400 dark:text-slate-600 hover:text-primary-400 dark:hover:text-primary-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex items-center space-x-6 border-l border-white/10 dark:border-slate-200 pl-6">
              <button 
                onClick={toggleLanguage}
                className="flex items-center text-slate-400 dark:text-slate-600 hover:text-primary-400 dark:hover:text-primary-500 transition-colors group"
              >
                <Icon 
                  icon={i18n.language === 'en' ? 'circle-flags:us' : 'circle-flags:ar'} 
                  width={24} 
                  className="group-hover:scale-110 transition-transform"
                />
              </button>

              <button 
                onClick={toggleTheme}
                className="text-slate-400 dark:text-slate-600 hover:text-primary-400 dark:hover:text-primary-500 transition-colors flex items-center text-2xl relative w-6 h-6"
              >
                <motion.div
                  initial={false}
                  animate={{ scale: theme === 'dark' ? 1 : 0, opacity: theme === 'dark' ? 1 : 0, rotate: theme === 'dark' ? 0 : 90 }}
                  transition={{ duration: 0.5, type: 'spring' }}
                  className="absolute inset-0"
                >
                  <Icon icon="material-symbols:dark-mode-outline" width={24} />
                </motion.div>
                <motion.div
                  initial={false}
                  animate={{ scale: theme === 'light' ? 1 : 0, opacity: theme === 'light' ? 1 : 0, rotate: theme === 'light' ? 0 : -90 }}
                  transition={{ duration: 0.5, type: 'spring' }}
                  className="absolute inset-0"
                >
                  <Icon icon="material-symbols:light-mode-outline" width={24} />
                </motion.div>
              </button>
            </div>

            <Link 
              to="/donate" 
              className={`bg-primary-500 text-brand-dark hover:bg-primary-400 px-6 py-2.5 rounded-xl text-sm font-black uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(0,255,0,0.15)] ${
                location.pathname === '/donate' ? 'ring-2 ring-primary-500 ring-offset-2' : ''
              }`}
            >
              {t('nav.donate')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
             <button onClick={toggleLanguage} className="flex items-center">
                <Icon 
                  icon={i18n.language === 'en' ? 'circle-flags:us' : 'circle-flags:ar'} 
                  width={20} 
                />
             </button>
             <button onClick={toggleTheme} className="text-white dark:text-slate-900 flex items-center relative w-6 h-6">
                <motion.div
                  initial={false}
                  animate={{ scale: theme === 'dark' ? 1 : 0, opacity: theme === 'dark' ? 1 : 0, rotate: theme === 'dark' ? 0 : 90 }}
                  transition={{ duration: 0.5, type: 'spring' }}
                  className="absolute inset-0"
                >
                  <Icon icon="material-symbols:dark-mode-outline" width={24} />
                </motion.div>
                <motion.div
                  initial={false}
                  animate={{ scale: theme === 'light' ? 1 : 0, opacity: theme === 'light' ? 1 : 0, rotate: theme === 'light' ? 0 : -90 }}
                  transition={{ duration: 0.5, type: 'spring' }}
                  className="absolute inset-0"
                >
                  <Icon icon="material-symbols:light-mode-outline" width={24} />
                </motion.div>
             </button>
             <button 
              onClick={() => setIsMenuOpen(true)}
              className="text-white dark:text-slate-900"
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
            className="fixed inset-0 bg-brand-dark dark:bg-white z-[60] flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
               <div className="flex items-center">
                 <img 
                   src={theme === 'dark' ? '/logo.png?v=1' : '/logo_blanco.png'} 
                   alt="Logo" 
                   className="h-10 w-auto object-contain" 
                 />
               </div>
               <button onClick={() => setIsMenuOpen(false)} className="text-white dark:text-slate-900">
                 <Icon icon="material-symbols:close-rounded" width={40} />
               </button>
            </div>
            
            <div className="flex flex-col space-y-8 flex-grow">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl font-black uppercase tracking-tighter text-white dark:text-slate-900 hover:text-primary-400 dark:hover:text-primary-600 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="pt-8 border-t border-white/10 dark:border-slate-100 mt-auto">
                <Link 
                  to="/donate" 
                  onClick={() => setIsMenuOpen(false)}
                  className="flex w-full items-center justify-center bg-primary-500 text-brand-dark py-6 rounded-2xl text-2xl font-black uppercase tracking-widest shadow-xl shadow-primary-500/20"
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
