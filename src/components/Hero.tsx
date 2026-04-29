import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const DONATE_URL = "https://donaronline.org/fundacion-vuelo-controlado/comunidad-de-vuelo-la-fiesta-la-cuidamos-entre-todos?preview=true";

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Decorative ambient light */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-2 px-4 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-500 text-xs font-bold tracking-[0.2em] uppercase mb-8">
              {t('hero.tags')}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-display font-black text-white leading-[0.9] mb-10 tracking-tighter"
          >
            {t('hero.title').split(' ').map((word: string, i: number) => (
              <span key={i} className={['Riesgos', 'Cuidado', 'Risks', 'Care'].includes(word.replace(/[.,]/g, '')) ? 'text-primary-500' : ''}>
                {word}{' '}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-400 mb-12 leading-relaxed max-w-3xl mx-auto font-medium"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <a 
              href={DONATE_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn bg-primary-500 text-[#0A0A0A] hover:bg-primary-400 px-10 py-5 text-lg font-bold rounded-2xl group w-full sm:w-auto transition-all shadow-[0_0_30px_rgba(0,255,0,0.2)] flex items-center justify-center"
            >
              <span>{t('hero.donate')}</span>
              <Icon icon="material-symbols:favorite-outline" width={24} className="ml-2 group-hover:scale-110 transition-transform" />
            </a>
            <Link 
              to="/projects" 
              className="btn border-2 border-slate-700 text-white hover:bg-slate-900 px-10 py-5 text-lg font-bold rounded-2xl group w-full sm:w-auto flex items-center justify-center"
            >
              <span>{t('hero.cta')}</span>
              <Icon icon="material-symbols:arrow-forward-rounded" width={24} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-700"
      >
        <Icon icon="material-symbols:keyboard-double-arrow-down-rounded" width={40} />
      </motion.div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
    </section>
  );
};

export default Hero;
