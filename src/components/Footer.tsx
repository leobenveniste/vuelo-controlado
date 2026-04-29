import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useTheme } from '../context/ThemeContext';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <footer className="text-slate-600 dark:text-slate-400 pt-24 pb-12 border-t border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-brand-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20">
          <div className="space-y-8">
            <div className="flex items-center">
              <div className="h-12">
                <img 
                  src={theme === 'dark' ? '/logo_blanco.png?v=1' : '/logo.png?v=1'} 
                  alt="Logo" 
                  className="h-full w-auto object-contain" 
                />
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <a 
                href="https://www.instagram.com/vuelocontrolado" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-slate-600 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-200 dark:bg-white/5 flex items-center justify-center group-hover:bg-primary-500/10 transition-all border border-slate-300 dark:border-white/5">
                  <Icon icon="mdi:instagram" className="text-2xl" />
                </div>
                <span className="font-bold text-sm tracking-widest uppercase">@vuelocontrolado</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white font-black uppercase tracking-widest text-xs mb-8">{t('footer.nav')}</h4>
            <ul className="space-y-4 font-bold uppercase text-xs tracking-wider">
              <li><Link to="/" className="hover:text-primary-500 transition-colors">{t('nav.home')}</Link></li>
              <li><Link to="/about" className="hover:text-primary-500 transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/projects" className="hover:text-primary-500 transition-colors">{t('nav.projects')}</Link></li>
              <li><Link to="/contact" className="hover:text-primary-500 transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white font-black uppercase tracking-widest text-xs mb-8">{t('footer.contact')}</h4>
            <ul className="space-y-6 font-medium text-slate-600 dark:text-slate-400">
              <li className="flex items-center space-x-4">
                <Icon icon="material-symbols:location-on-outline" className="text-primary-500 text-2xl shrink-0" />
                <span>Mendoza, Argentina</span>
              </li>
              <li className="flex items-center space-x-4">
                <Icon icon="material-symbols:mail-outline" className="text-primary-500 text-2xl shrink-0" />
                <a href="mailto:prensa@vuelocontrolado.org" className="hover:text-primary-500 transition-colors">prensa@vuelocontrolado.org</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
          <p>© {new Date().getFullYear()} FUNDACIÓN VUELO CONTROLADO. {t('footer.rights')}</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-primary-500 transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-primary-500 transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
