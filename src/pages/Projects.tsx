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
      icon: <Icon icon="material-symbols:water-drop-outline" width={32} />,
      category: t('about.values.health')
    },
    {
      title: t('projects.items.rest.title'),
      desc: t('projects.items.rest.desc'),
      icon: <Icon icon="material-symbols:coffee-outline" width={32} />,
      category: t('about.values.network')
    },
    {
      title: t('projects.items.social.title'),
      desc: t('projects.items.social.desc'),
      icon: <Icon icon="material-symbols:ecg-heart-outline" width={32} />,
      category: t('about.values.health')
    },
    {
      title: t('projects.items.edu.title'),
      desc: t('projects.items.edu.desc'),
      icon: <Icon icon="material-symbols:psychology-outline" width={32} />,
      category: t('about.values.science')
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-6 tracking-tighter">{t('projects.title')}</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-slate-900/50 rounded-[2.5rem] border border-slate-800 p-10 hover:border-primary-500/50 hover:bg-slate-900 transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="p-4 bg-slate-800 rounded-2xl text-primary-500 border border-slate-700">
                  {project.icon}
                </div>
              </div>
              
              <div className="mb-2">
                <span className="px-3 py-1 bg-primary-500/10 text-primary-500 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">
                  {project.category}
                </span>
                <h3 className="text-3xl font-bold text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-lg text-slate-400 leading-relaxed font-medium">
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
