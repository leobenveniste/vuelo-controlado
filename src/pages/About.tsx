import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-32 pb-24 min-h-screen text-slate-900 dark:text-slate-100 bg-white dark:bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="text-primary-500 font-bold uppercase tracking-[0.3em] text-sm mb-6 block">{t('about.label')}</span>
            <h1 className="text-5xl md:text-8xl font-display font-black text-slate-900 dark:text-white mb-8 tracking-tighter leading-none">
              {t('about.title').split(' ').map((word, i) => (
                <span key={i} className={['Cultura', 'Culture'].includes(word.replace(/[.,]/g, '')) ? 'text-primary-500' : ''}>
                  {word}{' '}
                </span>
              ))}
            </h1>
          </motion.div>
        </section>

        {/* Hero Image Section (Landscape) */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-24 relative"
        >
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="relative z-10 rounded-[4rem] overflow-hidden border border-slate-200 dark:border-white/5 shadow-2xl shadow-primary-500/10 aspect-[21/9] md:aspect-[21/7]">
            <img 
              src="/nosotros.jpg" 
              alt="Vuelo Controlado" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </motion.section>

        {/* Story Content Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 space-y-8"
          >
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              {t('about.story1')}
            </p>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              {t('about.story2')}
            </p>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              {t('about.story3')}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-12 bg-slate-50 dark:bg-white/5 p-12 rounded-[3rem] border border-slate-100 dark:border-white/10"
          >
            <div>
              <p className="text-6xl font-display font-black text-slate-900 dark:text-white mb-2 tracking-tighter">100%</p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-loose">{t('about.stats.care')}</p>
            </div>
            <div className="w-12 h-0.5 bg-primary-500/30" />
            <div>
              <p className="text-6xl font-display font-black text-primary-500 mb-2 tracking-tighter">200+</p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-loose">{t('about.stats.events')}</p>
            </div>
          </motion.div>
        </section>

        {/* Team Section */}
        <section className="mb-32">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-black text-slate-900 dark:text-white mb-6 tracking-tighter">{t('about.team.title')}</h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-10 rounded-full" />
            <p className="text-slate-600 dark:text-slate-400 max-w-4xl mx-auto font-medium text-lg md:text-xl leading-relaxed">
              {t('about.team.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
            {[
              { 
                name: t('about.team.veronica.name'), 
                role: t('about.team.veronica.role'), 
                img: '/vero.png' 
              },
              { 
                name: t('about.team.paula.name'), 
                role: t('about.team.paula.role'), 
                img: '/paula.jpeg' 
              },
              { 
                name: t('about.team.evan.name'), 
                role: t('about.team.evan.role'), 
                img: '/evan.jpeg' 
              }
            ].map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="mb-10 relative">
                  <div className="absolute inset-0 bg-primary-500 rounded-[3rem] rotate-3 group-hover:rotate-6 transition-transform duration-500 opacity-10" />
                  <div className="relative overflow-hidden rounded-[3rem] aspect-[4/5] grayscale group-hover:grayscale-0 transition-all duration-700 shadow-xl border border-slate-100 dark:border-white/5">
                    <img 
                      src={member.img} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">{member.name}</h3>
                <p className="text-primary-500 font-bold uppercase text-xs tracking-[0.2em]">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Volunteer Stat Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-primary-500/10 blur-[120px] rounded-full" />
            <div className="relative z-10 px-16 py-24 rounded-[5rem] border border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-white/5 shadow-2xl">
              <p className="text-8xl md:text-[12rem] font-display font-black text-primary-500 mb-6 tracking-tighter leading-none">100+</p>
              <p className="text-sm md:text-lg font-bold text-slate-500 dark:text-slate-400 uppercase tracking-[0.5em]">
                {t('about.stats.volunteers')}
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutPage;
