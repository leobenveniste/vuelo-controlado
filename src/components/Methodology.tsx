import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const Methodology: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-20">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2 relative"
        >
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="relative z-10 rounded-[3rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl shadow-primary-500/10 aspect-square md:aspect-video lg:aspect-square">
            <img 
              src="/intervencion.jpg" 
              alt="Intervención Vuelo Controlado" 
              className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
            />
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <span className="text-primary-500 font-bold uppercase tracking-[0.3em] text-sm mb-6 block">{t('mission.stats.reduction')}</span>
          <h2 className="text-5xl md:text-7xl font-display font-black text-slate-900 dark:text-white mb-8 tracking-tighter leading-none">
            {t('mission.methodology.title').split(' ').map((word, i) => (
              <span key={i} className={['Intervención', 'Intervention'].includes(word.replace(/[.,]/g, '')) ? 'text-primary-500' : ''}>
                {word}{' '}
              </span>
            ))}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed font-medium">
            {t('mission.methodology.subtitle')}
          </p>
          <div className="space-y-4">
            {(t('mission.methodology.steps', { returnObjects: true }) as string[]).map((step, i) => (
              <div key={i} className="flex items-start space-x-3">
                <CheckCircle2 className="text-primary-500 flex-shrink-0 mt-1" size={20} />
                <span className="text-lg text-slate-700 dark:text-slate-300 font-medium">{step}</span>
              </div>
            ))}
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 p-6 bg-primary-500/10 border-l-4 border-primary-500 text-slate-900 dark:text-white font-bold rounded-r-2xl"
          >
            {t('mission.methodology.summary')}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Methodology;
