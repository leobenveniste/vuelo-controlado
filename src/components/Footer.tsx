import React from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from '@iconify/react';
import { useTheme } from '../context/ThemeContext';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <footer className="text-slate-600 dark:text-slate-400 pt-24 pb-12 border-t border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-brand-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-8 items-start">
          {/* Logo - Left */}
          <div className="flex justify-center md:justify-start">
            <div className="h-12">
              <img 
                src={theme === 'dark' ? '/logo_blanco.png?v=1' : '/logo.png?v=1'} 
                alt="Logo" 
                className="h-full w-auto object-contain" 
              />
            </div>
          </div>

          {/* Instagram - Middle */}
          <div className="flex justify-center">
            <a 
              href="https://www.instagram.com/vuelocontrolado" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-3 text-slate-600 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors group"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-200 dark:bg-white/5 flex items-center justify-center group-hover:bg-primary-500/10 transition-all border border-slate-300 dark:border-white/5">
                <Icon icon="mdi:instagram" className="text-2xl" />
              </div>
              <span className="font-bold text-[10px] tracking-widest uppercase">@vuelocontrolado</span>
            </a>
          </div>

          {/* Contact - Right */}
          <div className="flex justify-center md:justify-end text-center md:text-right">
            <div>
              <h4 className="text-slate-900 dark:text-white font-black uppercase tracking-widest text-xs mb-6">{t('footer.contact')}</h4>
              <ul className="space-y-4 font-medium text-slate-600 dark:text-slate-400">
                <li className="flex flex-col space-y-2">
                  <a href="mailto:prensa@vuelocontrolado.org" className="hover:text-primary-500 transition-colors text-sm">prensa@vuelocontrolado.org</a>
                  <a href="mailto:rrhh@vuelocontrolado.org" className="hover:text-primary-500 transition-colors text-sm">rrhh@vuelocontrolado.org</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-4 flex justify-center items-center text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
          <p>© {new Date().getFullYear()} FUNDACIÓN VUELO CONTROLADO. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
