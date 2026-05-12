import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactPage: React.FC = () => {
  const { t } = useTranslation();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyAHgQ86aBpStodGwy0cl7WV3GVhiMJi2gPm6ETDO9C48yWTNuBqCJBL75pqlgfhZ0r/exec';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      });
      setStatus('success');
      form.reset();
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen text-slate-900 dark:text-slate-100 bg-white dark:bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Title & Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 lg:sticky lg:top-40"
          >
            <div className="text-left mb-16">
              <span className="text-primary-500 font-bold uppercase tracking-[0.3em] text-sm mb-6 block">{t('contact.label')}</span>
              <h1 className="text-5xl md:text-8xl font-display font-black text-slate-900 dark:text-white mb-8 tracking-tighter leading-none">
                {t('contact.title').split(' ').map((word, i) => (
                  <span key={i} className={['contacto', 'contact'].includes(word.toLowerCase().replace(/[.,]/g, '')) ? 'text-primary-500' : ''}>
                    {word}{' '}
                  </span>
                ))}
              </h1>
            </div>

            <div className="space-y-8">
              <div className="flex items-center space-x-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 flex items-center justify-center text-primary-500 group-hover:bg-primary-500 group-hover:text-brand-dark transition-all duration-300 shadow-sm">
                  <Icon icon="material-symbols:mail-outline" width={28} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">{t('contact.channels.prensa')}</p>
                  <a href="mailto:prensa@vuelocontrolado.org" className="text-lg font-bold text-slate-900 dark:text-white hover:text-primary-500 transition-colors">prensa@vuelocontrolado.org</a>
                </div>
              </div>

              <div className="flex items-center space-x-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 flex items-center justify-center text-primary-500 group-hover:bg-primary-500 group-hover:text-brand-dark transition-all duration-300 shadow-sm">
                  <Icon icon="material-symbols:mail-outline" width={28} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">{t('contact.channels.rrhh')}</p>
                  <a href="mailto:rrhh@vuelocontrolado.org" className="text-lg font-bold text-slate-900 dark:text-white hover:text-primary-500 transition-colors">rrhh@vuelocontrolado.org</a>
                </div>
              </div>

              <div className="flex items-center space-x-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 flex items-center justify-center text-primary-500 group-hover:bg-primary-500 group-hover:text-brand-dark transition-all duration-300 shadow-sm">
                  <Icon icon="mdi:instagram" width={28} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">{t('contact.channels.instagram')}</p>
                  <a href="https://www.instagram.com/vuelocontrolado" target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-slate-900 dark:text-white hover:text-primary-500 transition-colors">@vuelocontrolado</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Stacked Cards */}
          <div className="lg:col-span-7 space-y-12">
            {/* Events Card */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[3rem] p-10 md:p-14 shadow-sm"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary-500/10 flex items-center justify-center text-primary-500 shrink-0">
                  <Icon icon="material-symbols:event-available-outline" width={32} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">{t('contact.events.title')}</h2>
              </div>
              <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-10">
                {t('contact.events.desc')}
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <Link 
                  to="/quote"
                  className="bg-primary-500 text-brand-dark px-8 py-4 rounded-2xl font-black uppercase tracking-widest transition-all hover:bg-primary-400 flex items-center gap-3 shadow-lg shadow-primary-500/10"
                >
                  <Icon icon="material-symbols:request-quote-outline" width={24} />
                  <span>{t('contact.events.quote')}</span>
                </Link>

                <a 
                  href="mailto:produccion@vuelocontrolado.org" 
                  className="bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-white/20 px-8 py-4 rounded-2xl font-bold transition-all flex items-center gap-3 shadow-sm"
                >
                  <Icon icon="material-symbols:mail-outline" width={24} className="text-primary-500" />
                  <span>{t('contact.events.cta')}</span>
                </a>
              </div>
            </motion.div>

            {/* Schools & Universities Card */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[3rem] p-10 md:p-14 shadow-sm"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary-500/10 flex items-center justify-center text-primary-500 shrink-0">
                  <Icon icon="material-symbols:school-outline" width={32} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">{t('contact.schools.title')}</h2>
              </div>
              <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-10">
                {t('contact.schools.desc')}
              </p>
              <a 
                href="mailto:produccion@vuelocontrolado.org" 
                className="bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-white/20 px-8 py-4 rounded-2xl font-bold transition-all flex items-center gap-3 shadow-sm inline-flex w-fit"
              >
                <Icon icon="material-symbols:mail-outline" width={24} className="text-primary-500" />
                <span>{t('contact.schools.cta')}</span>
              </a>
            </motion.div>

            {/* Volunteer Form Card */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[3rem] p-10 md:p-14 relative overflow-hidden"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary-500/10 flex items-center justify-center text-primary-500 shrink-0">
                  <Icon icon="material-symbols:volunteer-activism-outline" width={32} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">{t('contact.volunteer.title')}</h2>
              </div>
              <p className="text-lg text-slate-600 dark:text-slate-400 font-medium mb-10">{t('contact.volunteer.desc')}</p>

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center text-center py-10"
                  >
                    <div className="w-20 h-20 bg-primary-500/10 rounded-full flex items-center justify-center text-primary-500 mb-6">
                      <Icon icon="material-symbols:check-circle-outline" width={48} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{t('contact.volunteer.success')}</h3>
                    <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">{t('contact.volunteer.successDesc')}</p>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3">{t('contact.form.name')}</label>
                        <input 
                          required
                          name="nombre"
                          type="text" 
                          className="w-full bg-white dark:bg-brand-dark border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 focus:ring-1 focus:ring-primary-500 focus:border-transparent transition-all outline-none text-slate-900 dark:text-white font-bold shadow-inner"
                          placeholder={t('contact.form.placeholderName')}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3">{t('contact.form.email')}</label>
                        <input 
                          required
                          name="email"
                          type="email" 
                          className="w-full bg-white dark:bg-brand-dark border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 focus:ring-1 focus:ring-primary-500 focus:border-transparent transition-all outline-none text-slate-900 dark:text-white font-bold shadow-inner"
                          placeholder={t('contact.form.placeholderEmail')}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3">{t('contact.form.city')}</label>
                      <input 
                        required
                        name="ciudad"
                        type="text" 
                        className="w-full bg-white dark:bg-brand-dark border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 focus:ring-1 focus:ring-primary-500 focus:border-transparent transition-all outline-none text-slate-900 dark:text-white font-bold shadow-inner"
                        placeholder={t('contact.form.placeholderCity')}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3">{t('contact.form.message')}</label>
                      <textarea 
                        required
                        name="mensaje"
                        rows={4} 
                        className="w-full bg-white dark:bg-brand-dark border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 focus:ring-1 focus:ring-primary-500 focus:border-transparent transition-all outline-none text-slate-900 dark:text-white font-bold shadow-inner"
                        placeholder={t('contact.volunteer.placeholderMsg')}
                      ></textarea>
                    </div>
                    <button 
                      disabled={status === 'loading'}
                      type="submit" 
                      className="w-full bg-primary-500 text-brand-dark py-6 rounded-2xl font-black uppercase tracking-[0.2em] group transition-all hover:bg-primary-400 disabled:opacity-50 text-lg shadow-xl shadow-primary-500/20"
                    >
                      <span>{status === 'loading' ? t('contact.volunteer.loading') : t('contact.volunteer.submit')}</span>
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
