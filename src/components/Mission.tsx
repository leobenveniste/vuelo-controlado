import React from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const Mission: React.FC = () => {
  const { t } = useTranslation();

  const cards = [
    {
      icon: "material-symbols:health-and-safety-outline",
      title: t('mission.pillars.health.title'),
      description: t('mission.pillars.health.desc')
    },
    {
      icon: "material-symbols:night-shelter-outline",
      title: t('mission.pillars.recovery.title'),
      description: t('mission.pillars.recovery.desc')
    },
    {
      icon: "material-symbols:support-agent",
      title: t('mission.pillars.support.title'),
      description: t('mission.pillars.support.desc')
    },
    {
      icon: "material-symbols:visibility-outline",
      title: t('mission.pillars.detection.title'),
      description: t('mission.pillars.detection.desc')
    }
  ];

  return (
    <section className="py-24 bg-brand-dark dark:bg-white transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-black text-white dark:text-slate-900 mb-6 tracking-tighter">{t('mission.title')}</h2>
          <p className="text-xl text-slate-300 dark:text-slate-600 max-w-2xl mx-auto font-medium">
            {t('mission.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-[2.5rem] border border-white/5 dark:border-slate-100 bg-white/5 dark:bg-slate-50 hover:bg-white/10 dark:hover:bg-slate-100 hover:border-primary-500/20 transition-all duration-500 group text-center"
            >
              <div className="mb-10 flex justify-center">
                <Icon 
                  icon={card.icon} 
                  width={64} 
                  className="text-primary-500 group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <h3 className="text-2xl font-black text-white dark:text-slate-900 mb-4 tracking-tight leading-tight">{card.title}</h3>
              <p className="text-slate-300 dark:text-slate-600 leading-relaxed font-medium">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
