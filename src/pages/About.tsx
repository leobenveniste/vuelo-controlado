import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-32 pb-24 min-h-screen text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20 mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="relative z-10 rounded-[3rem] overflow-hidden border border-slate-800 shadow-2xl shadow-primary-500/10 aspect-square">
              <img 
                src="/nosotros.jpg" 
                alt="Vuelo Controlado" 
                className="w-full h-full object-cover transition-all duration-700"
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="text-primary-500 font-bold uppercase tracking-[0.3em] text-sm mb-6 block">{t('about.label')}</span>
            <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-8 tracking-tighter leading-none">
              {t('about.title').split(' ').map((word, i) => (
                <span key={i} className={['Cultura', 'Culture'].includes(word.replace(/[.,]/g, '')) ? 'text-primary-500' : ''}>
                  {word}{' '}
                </span>
              ))}
            </h1>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed font-medium">
              {t('about.story1')}
            </p>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed font-medium">
              {t('about.story2')}
            </p>
            <div className="grid grid-cols-2 gap-10">
              <div>
                <p className="text-5xl font-display font-black text-white mb-2 tracking-tighter">100%</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{t('about.stats.care')}</p>
              </div>
              <div>
                <p className="text-5xl font-display font-black text-primary-500 mb-2 tracking-tighter">200+</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{t('about.stats.events')}</p>
              </div>
            </div>
          </motion.div>
        </div>


        {/* Team Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-display font-black text-white mb-6 tracking-tighter">{t('about.team.title')}</h2>
          <p className="text-slate-400 max-w-2xl mx-auto font-medium text-lg">
            {t('about.team.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
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
              className="group text-center"
            >
              <div className="mb-8 relative mx-auto max-w-[280px]">
                <div className="absolute inset-0 bg-primary-500 rounded-[2.5rem] rotate-6 group-hover:rotate-12 transition-transform duration-500 opacity-20" />
                <div className="relative overflow-hidden rounded-[2.5rem] aspect-square grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">{member.name}</h3>
              <p className="text-primary-500 font-bold uppercase text-xs tracking-widest">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
