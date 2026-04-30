import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ShieldCheck, HeartHandshake, Droplets, Info, Users } from 'lucide-react';

const MissionPage: React.FC = () => {
  const { t } = useTranslation();

  const values = [
    {
      title: t('mission.pillars.judgment.title'),
      desc: t('mission.pillars.judgment.desc'),
      icon: <ShieldCheck className="text-primary-500" size={64} />
    },
    {
      title: t('mission.pillars.empathy.title'),
      desc: t('mission.pillars.empathy.desc'),
      icon: <HeartHandshake className="text-primary-500" size={64} />
    },
    {
      title: t('mission.pillars.info.title'),
      desc: t('mission.pillars.info.desc'),
      icon: <Info className="text-primary-500" size={64} />
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
      <section className="bg-brand-dark dark:bg-white py-24 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-display font-bold text-white dark:text-slate-900">{t('mission.pillars.title')}</h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[2.5rem] border border-white/5 dark:border-slate-100 bg-white/5 dark:bg-slate-50 hover:bg-white/10 dark:hover:bg-slate-100 hover:border-primary-500/20 transition-all duration-500 group text-center shadow-sm dark:shadow-none"
              >
                <div className="mb-10 flex justify-center">
                  <div className="text-primary-500 group-hover:scale-110 transition-transform duration-500">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-black text-white dark:text-slate-900 mb-4 tracking-tight leading-tight">{value.title}</h3>
                <p className="text-slate-300 dark:text-slate-600 leading-relaxed font-medium">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default MissionPage;
