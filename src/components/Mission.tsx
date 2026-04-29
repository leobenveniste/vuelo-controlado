import React from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const Mission: React.FC = () => {
  const { t } = useTranslation();

  const cards = [
    {
      icon: "material-symbols:target",
      title: t('hero.pillars.goals.title'),
      description: t('hero.pillars.goals.desc')
    },
    {
      icon: "material-symbols:shield-outline",
      title: t('hero.pillars.community.title'),
      description: t('hero.pillars.community.desc')
    },
    {
      icon: "material-symbols:book-2-outline",
      title: t('hero.pillars.education.title'),
      description: t('hero.pillars.education.desc')
    },
    {
      icon: "material-symbols:bolt-outline",
      title: t('hero.pillars.impact.title'),
      description: t('hero.pillars.impact.desc')
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 dark:text-white mb-6 tracking-tighter">{t('mission.title')}</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
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
              className="p-10 rounded-[2.5rem] border border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 hover:border-primary-500/20 transition-all duration-500 group text-center"
            >
              <div className="mb-10 flex justify-center">
                <Icon 
                  icon={card.icon} 
                  width={64} 
                  className="text-primary-500 group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 tracking-tight leading-tight">{card.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
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
