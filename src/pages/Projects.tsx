import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const ProjectsPage: React.FC = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: t('projects.items.hydration.title'),
      desc: t('projects.items.hydration.desc'),
      icon: <Icon icon="material-symbols:water-drop-outline" width={64} />,
      category: t('about.values.health')
    },
    {
      title: t('projects.items.rest.title'),
      desc: t('projects.items.rest.desc'),
      icon: <Icon icon="material-symbols:coffee-outline" width={64} />,
      category: t('about.values.network')
    },
    {
      title: t('projects.items.social.title'),
      desc: t('projects.items.social.desc'),
      icon: <Icon icon="material-symbols:ecg-heart-outline" width={64} />,
      category: t('about.values.health')
    },
    {
      title: t('projects.items.edu.title'),
      desc: t('projects.items.edu.desc'),
      icon: <Icon icon="material-symbols:psychology-outline" width={64} />,
      category: t('about.values.science')
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white dark:bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="text-left">
              <span className="text-primary-500 font-bold uppercase tracking-[0.3em] text-sm mb-6 block">{t('projects.title')}</span>
              <h1 className="text-4xl md:text-6xl font-display font-black text-slate-900 dark:text-white mb-6 tracking-tighter leading-none">
                {t('projects.subtitle').split(' ').map((word, i) => (
                  <span key={i} className={['cuidado', 'festivales', 'care', 'festivals'].includes(word.replace(/[.,]/g, '').toLowerCase()) ? 'text-primary-500' : ''}>
                    {word}{' '}
                  </span>
                ))}
              </h1>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="relative z-10 rounded-[3rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl shadow-primary-500/10 aspect-[4/3] md:aspect-square">
              <img 
                src="/impacto.jpeg" 
                alt="Impacto Vuelo Controlado" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-slate-50 dark:bg-slate-900/50 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 p-10 hover:border-primary-500/50 dark:hover:bg-slate-900 transition-all duration-500 shadow-sm dark:shadow-none"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-6">
                <div className="flex flex-col gap-2">
                  <span className="w-fit px-3 py-1 bg-primary-500/10 text-primary-500 rounded-full text-xs font-bold uppercase tracking-widest">
                    {project.category}
                  </span>
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-2">
                    {project.title}
                  </h3>
                </div>
                <div className="text-primary-500 group-hover:scale-110 transition-transform duration-500 flex-shrink-0 self-start">
                  {project.icon}
                </div>
              </div>
              
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                {project.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
