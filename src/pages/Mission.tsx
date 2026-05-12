import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Shield, HeartPulse, Scale, Lightbulb } from 'lucide-react';

const MissionPage: React.FC = () => {
  const { t } = useTranslation();

  const visionIcons = [
    <Shield className="text-primary-500" size={48} />,
    <HeartPulse className="text-primary-500" size={48} />,
    <Scale className="text-primary-500" size={48} />,
    <Lightbulb className="text-primary-500" size={48} />
  ];

  return (
    <div className="pt-32 pb-24 text-slate-900 dark:text-slate-100 bg-white dark:bg-brand-dark min-h-screen">
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary-500 font-bold uppercase tracking-[0.3em] text-sm mb-6 block"
          >
            {t('mission.vision.label')}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-display font-black mb-8 leading-[0.85] tracking-tighter dark:text-white"
          >
            {t('mission.vision.title').split(' ').map((word, i) => (
              <span key={i} className={['concientización', 'awareness', 'cuidado', 'care'].includes(word.replace(/[.,]/g, '').toLowerCase()) ? 'text-primary-500' : ''}>
                {word}{' '}
              </span>
            ))}
          </motion.h1>
        </div>
      </section>

      {/* Philosophy Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {(t('mission.vision.paragraphs', { returnObjects: true }) as string[]).map((para, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[3rem] p-10 md:p-14 hover:border-primary-500/30 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Decorative background element */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl group-hover:bg-primary-500/10 transition-colors duration-500" />
              
              <div className="relative z-10">
                <div className="mb-10 w-20 h-20 rounded-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  {visionIcons[i]}
                </div>
                
                <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  {para}
                </p>
              </div>

              {/* Number indicator */}
              <div className="absolute bottom-10 right-14 text-8xl font-display font-black opacity-[0.03] dark:opacity-[0.05] group-hover:opacity-[0.08] transition-opacity duration-500">
                0{i + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Action Footer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-brand-dark dark:bg-slate-50 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden border border-white/5 dark:border-slate-200"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(0,255,102,0.1),transparent)]" />
          <h2 className="text-4xl md:text-6xl font-display font-black text-white dark:text-slate-900 mb-10 relative z-10 tracking-tighter leading-none">
            Cuidamos la cultura, <br className="hidden md:block" /> entre todas y todos.
          </h2>
          <div className="w-24 h-1.5 bg-primary-500 mx-auto rounded-full mb-12 relative z-10" />
          <p className="text-slate-400 dark:text-slate-500 font-bold uppercase tracking-[0.4em] text-sm relative z-10">
            Fundación Vuelo Controlado
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default MissionPage;
