import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, HeartHandshake, Droplets, Info, Users } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const MissionPage: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const values = [
    {
      title: t('mission.pillars.judgment.title'),
      desc: t('mission.pillars.judgment.desc'),
      icon: <ShieldCheck className="text-primary-500" size={40} />
    },
    {
      title: t('mission.pillars.empathy.title'),
      desc: t('mission.pillars.empathy.desc'),
      icon: <HeartHandshake className="text-primary-500" size={40} />
    },
    {
      title: t('mission.pillars.info.title'),
      desc: t('mission.pillars.info.desc'),
      icon: <Info className="text-primary-500" size={40} />
    }
  ];

  return (
    <div className="pt-32 pb-24 text-slate-900 dark:text-slate-100 bg-white dark:bg-brand-dark">
      {/* Vision Statement */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <span className="text-primary-500 font-bold uppercase tracking-widest text-sm mb-4 block">{t('mission.vision.label')}</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight dark:text-white">
              {t('mission.vision.title').split(' ').map((word, i) => (
                <span key={i} className={['seguro', 'saludable', 'safer', 'healthier'].includes(word.replace(/[.,]/g, '').toLowerCase()) ? 'text-primary-500' : ''}>
                  {word}{' '}
                </span>
              ))}
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed italic border-l-4 border-primary-500 pl-6">
              "{t('mission.vision.quote')}"
            </p>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-square bg-slate-50 dark:bg-slate-900 rounded-3xl flex flex-col items-center justify-center p-8 border border-slate-200 dark:border-slate-800">
                <Droplets size={48} className="text-primary-500 mb-4" />
                <p className="text-center font-bold text-slate-900 dark:text-white">{t('mission.stats.hydration')}</p>
              </div>
              <div className="p-8 bg-primary-600 text-brand-dark rounded-3xl">
                <p className="text-3xl font-display font-bold">2018</p>
                <p className="text-sm opacity-80 uppercase font-bold tracking-widest">{t('mission.stats.founded')}</p>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="p-8 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-3xl border border-slate-200 dark:border-slate-700">
                <Users size={32} className="text-primary-500 mb-2" />
                <p className="text-sm uppercase font-bold tracking-widest">{t('mission.stats.team')}</p>
              </div>
              <div className="aspect-square bg-slate-50 dark:bg-slate-900 rounded-3xl flex flex-col items-center justify-center p-8 border border-slate-200 dark:border-slate-800">
                <Info size={48} className="text-primary-500 mb-4" />
                <p className="text-center font-bold text-slate-900 dark:text-white">{t('mission.stats.reduction')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-24 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white">{t('mission.pillars.title')}</h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center space-y-6 bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 hover:border-primary-500/50 transition-all shadow-sm dark:shadow-none"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-2xl mb-2">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{value.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-gradient-to-br from-slate-100 to-white dark:from-slate-900 dark:to-brand-dark rounded-[3rem] p-12 md:p-20 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center gap-12 shadow-xl dark:shadow-none">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">{t('mission.methodology.title')}</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-8">
              {t('mission.methodology.subtitle')}
            </p>
            <div className="space-y-4">
              {(t('mission.methodology.steps', { returnObjects: true }) as string[]).map((step, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <CheckCircle2 className="text-primary-500 flex-shrink-0" />
                  <span className="text-lg text-slate-700 dark:text-slate-300">{step}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="aspect-video bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-200 dark:border-slate-700 overflow-hidden relative p-12 shadow-inner">
               <div className="absolute inset-0 bg-primary-500/5 animate-pulse" />
               <img 
                 src={theme === 'dark' ? '/logo_blanco.png?v=1' : '/logo.png?v=1'} 
                 alt="Logo" 
                 className="w-full h-full object-contain relative z-10 opacity-30 dark:opacity-30 group-hover:opacity-100 transition-all duration-500" 
               />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionPage;
