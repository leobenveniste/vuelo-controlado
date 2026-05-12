import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white dark:bg-brand-dark">
      {/* Decorative ambient light */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary-500/10 dark:bg-primary-500/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-primary-500/5 dark:bg-primary-500/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />

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
            className="text-6xl md:text-8xl font-display font-black text-slate-900 dark:text-white leading-[0.9] mb-10 tracking-tighter flex flex-wrap justify-center items-center gap-x-4 gap-y-2"
          >
            <span className="flex items-center whitespace-nowrap">
              <span>-</span>
              <span className="text-primary-500 bg-slate-900 dark:bg-black/40 px-4 py-1 rounded-2xl inline-block mx-2 my-1">
                {t('hero.title').toLowerCase().includes('risk') ? 'risk' : 'riesgo'}
              </span>
            </span>
            
            {/* Force break on mobile */}
            <div className="basis-full h-0 md:hidden" />

            <span className="flex items-center whitespace-nowrap">
              <span>+</span>
              <span className="text-primary-500 bg-slate-900 dark:bg-black/40 px-4 py-1 rounded-2xl inline-block mx-2 my-1">
                {t('hero.title').toLowerCase().includes('fun') ? 'fun' : 'diversión'}
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed max-w-3xl mx-auto font-medium"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link 
              to="/donate" 
              className="btn bg-primary-500 text-brand-dark hover:bg-primary-400 px-10 py-5 text-lg font-bold rounded-2xl group w-full sm:w-auto transition-all shadow-[0_0_30px_rgba(0,255,0,0.2)] flex items-center justify-center"
            >
              <span>{t('hero.donate')}</span>
              <Icon icon="material-symbols:favorite-outline" width={24} className="ml-2 group-hover:scale-110 transition-transform" />
            </Link>
            <Link 
              to="/projects" 
              className="btn border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-900 px-10 py-5 text-lg font-bold rounded-2xl group w-full sm:w-auto flex items-center justify-center transition-colors"
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
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 dark:text-slate-700"
      >
        <Icon icon="material-symbols:keyboard-double-arrow-down-rounded" width={40} />
      </motion.div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
    </section>
  );
};

export default Hero;
