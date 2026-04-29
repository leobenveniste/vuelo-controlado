import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const DonatePage: React.FC = () => {
  const { t } = useTranslation();
  const DONATE_URL = "https://donaronline.org/fundacion-vuelo-controlado/comunidad-de-vuelo-la-fiesta-la-cuidamos-entre-todos?preview=true";

  return (
    <div className="pt-32 pb-24 min-h-screen text-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block p-4 bg-primary-500/10 rounded-full mb-6"
          >
            <Icon icon="material-symbols:volunteer-activism-outline" width={48} className="text-primary-500" />
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-6 tracking-tighter">{t('donate.title')}</h1>
          <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto">
            {t('donate.subtitle')}
          </p>
        </div>

        <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl shadow-primary-500/10 border border-white/10 min-h-[800px] relative">
           {/* Loader for the iframe */}
           <div className="absolute inset-0 flex items-center justify-center bg-[#0A0A0A] -z-10">
              <div className="loader"></div>
           </div>
           
           <iframe 
             src={DONATE_URL}
             width="100%" 
             height="800px" 
             frameBorder="0" 
             allowTransparency={true}
             className="w-full relative z-10"
             title="Donar Online"
           ></iframe>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center pt-10 border-t border-white/5">
          <div className="flex flex-col items-center group">
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5 mb-4 text-primary-500 group-hover:scale-110 transition-transform">
              <Icon icon="material-symbols:shield-outline" width={28} />
            </div>
            <span className="text-xs font-black text-slate-500 uppercase tracking-[0.2em]">{t('donate.secure')}</span>
          </div>
          <div className="flex flex-col items-center group">
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5 mb-4 text-primary-500 group-hover:scale-110 transition-transform">
              <Icon icon="material-symbols:bolt-outline" width={28} />
            </div>
            <span className="text-xs font-black text-slate-500 uppercase tracking-[0.2em]">{t('donate.impact')}</span>
          </div>
          <div className="flex flex-col items-center group">
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5 mb-4 text-primary-500 group-hover:scale-110 transition-transform">
              <Icon icon="material-symbols:verified-outline" width={28} />
            </div>
            <span className="text-xs font-black text-slate-500 uppercase tracking-[0.2em]">{t('donate.transparency')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;
