import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const DonatePage: React.FC = () => {
  const { t } = useTranslation();
  const [amount, setAmount] = useState<number | null>(null);

  const predefinedAmounts = [1000, 2000, 5000, 10000, 20000, 50000];

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
          <p className="text-xl text-slate-400 font-medium">
            {t('donate.subtitle')}
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-16">
          <div className="space-y-12">
            <div>
              <label className="block text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-8 text-center">{t('donate.selectAmount')}</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {predefinedAmounts.map((amt) => (
                  <button
                    key={amt}
                    onClick={() => setAmount(amt)}
                    className={`py-6 px-4 rounded-2xl text-2xl font-black transition-all duration-300 border-2 ${
                      amount === amt 
                        ? 'bg-primary-500 border-primary-500 text-[#0A0A0A] scale-105 shadow-[0_0_30px_rgba(0,255,0,0.2)]' 
                        : 'bg-[#0A0A0A] border-white/5 text-slate-400 hover:border-primary-500/50'
                    }`}
                  >
                    ${amt.toLocaleString()}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-6 top-1/2 -translate-y-1/2 text-2xl font-black text-slate-500">$</div>
              <input 
                type="number" 
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full bg-[#0A0A0A] border-2 border-white/5 rounded-2xl pl-12 pr-6 py-6 text-3xl font-black text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                placeholder="0"
              />
            </div>

            <button className="w-full bg-primary-500 text-[#0A0A0A] py-8 rounded-[2rem] text-2xl font-black uppercase tracking-[0.2em] group transition-all hover:bg-primary-400 hover:shadow-[0_0_40px_rgba(0,255,0,0.3)]">
              <span className="flex items-center justify-center">
                {t('donate.btn', { amount: (amount || 0).toLocaleString() })}
                <Icon icon="material-symbols:favorite-outline" width={28} className="ml-4 group-hover:scale-125 transition-transform" />
              </span>
            </button>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center pt-10 border-t border-white/5">
              <div className="flex flex-col items-center group">
                <div className="p-4 bg-[#0A0A0A] rounded-2xl border border-white/5 mb-4 text-primary-500 group-hover:scale-110 transition-transform">
                  <Icon icon="material-symbols:shield-outline" width={28} />
                </div>
                <span className="text-xs font-black text-slate-500 uppercase tracking-[0.2em]">{t('donate.secure')}</span>
              </div>
              <div className="flex flex-col items-center group">
                <div className="p-4 bg-[#0A0A0A] rounded-2xl border border-white/5 mb-4 text-primary-500 group-hover:scale-110 transition-transform">
                  <Icon icon="material-symbols:bolt-outline" width={28} />
                </div>
                <span className="text-xs font-black text-slate-500 uppercase tracking-[0.2em]">{t('donate.impact')}</span>
              </div>
              <div className="flex flex-col items-center group">
                <div className="p-4 bg-[#0A0A0A] rounded-2xl border border-white/5 mb-4 text-primary-500 group-hover:scale-110 transition-transform">
                  <Icon icon="material-symbols:verified-outline" width={28} />
                </div>
                <span className="text-xs font-black text-slate-500 uppercase tracking-[0.2em]">{t('donate.transparency')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;
