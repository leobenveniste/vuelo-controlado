import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
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
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          {/* Left Column: Shorter Title & Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-5/12"
          >
            <div className="text-left mb-12">
              <span className="text-primary-500 font-bold uppercase tracking-[0.3em] text-sm mb-6 block">Hablemos</span>
              <h1 className="text-5xl md:text-8xl font-display font-black text-slate-900 dark:text-white mb-8 tracking-tighter leading-none">
                {t('contact.title').split(' ').map((word, i) => (
                  <span key={i} className={['contacto', 'contact'].includes(word.toLowerCase().replace(/[.,]/g, '')) ? 'text-primary-500' : ''}>
                    {word}{' '}
                  </span>
                ))}
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-md">
                {t('contact.subtitle')}
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 flex items-center justify-center text-primary-500 group-hover:bg-primary-500/10 group-hover:scale-110 transition-all duration-500 shadow-sm">
                  <Icon icon="material-symbols:mail-outline" width={28} />
                </div>
                <div>
                  <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-1">Prensa</h3>
                  <a href="mailto:prensa@vuelocontrolado.org" className="text-lg font-bold text-slate-900 dark:text-white hover:text-primary-500 transition-colors">prensa@vuelocontrolado.org</a>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 flex items-center justify-center text-primary-500 group-hover:bg-primary-500/10 group-hover:scale-110 transition-all duration-500 shadow-sm">
                  <Icon icon="material-symbols:mail-outline" width={28} />
                </div>
                <div>
                  <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-1">Recursos Humanos</h3>
                  <a href="mailto:rrhh@vuelocontrolado.org" className="text-lg font-bold text-slate-900 dark:text-white hover:text-primary-500 transition-colors">rrhh@vuelocontrolado.org</a>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 flex items-center justify-center text-primary-500 group-hover:bg-primary-500/10 group-hover:scale-110 transition-all duration-500 shadow-sm">
                  <Icon icon="mdi:instagram" width={28} />
                </div>
                <div>
                  <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-1">Instagram</h3>
                  <a href="https://www.instagram.com/vuelocontrolado" target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-slate-900 dark:text-white hover:text-primary-500 transition-colors">@vuelocontrolado</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-7/12 w-full"
          >
            <div className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-primary-500/5 dark:shadow-none relative overflow-hidden">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="h-full flex flex-col items-center justify-center text-center py-20"
                  >
                    <div className="w-20 h-20 bg-primary-500/10 rounded-full flex items-center justify-center text-primary-500 mb-6">
                      <Icon icon="material-symbols:check-circle-outline" width={48} />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">¡Mensaje enviado!</h3>
                    <p className="text-xl text-slate-600 dark:text-slate-400 font-medium">Gracias por contactarnos. Te responderemos a la brevedad.</p>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit} 
                    className="space-y-8"
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
                          className="w-full bg-white dark:bg-brand-dark border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-5 focus:ring-1 focus:ring-primary-500 focus:border-transparent transition-all outline-none text-slate-900 dark:text-white font-bold shadow-inner text-lg"
                          placeholder={t('contact.form.placeholderName')}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3">{t('contact.form.email')}</label>
                        <input 
                          required
                          name="email"
                          type="email" 
                          className="w-full bg-white dark:bg-brand-dark border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-5 focus:ring-1 focus:ring-primary-500 focus:border-transparent transition-all outline-none text-slate-900 dark:text-white font-bold shadow-inner text-lg"
                          placeholder={t('contact.form.placeholderEmail')}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3">{t('contact.form.msg')}</label>
                      <textarea 
                        required
                        name="mensaje"
                        rows={6} 
                        className="w-full bg-white dark:bg-brand-dark border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-5 focus:ring-1 focus:ring-primary-500 focus:border-transparent transition-all outline-none text-slate-900 dark:text-white font-bold shadow-inner text-lg"
                        placeholder={t('contact.form.placeholderMsg')}
                      ></textarea>
                    </div>
                    <button 
                      disabled={status === 'loading'}
                      type="submit" 
                      className="w-full bg-primary-500 text-brand-dark py-7 rounded-2xl font-black uppercase tracking-[0.3em] group transition-all hover:bg-primary-400 hover:shadow-[0_0_40px_rgba(0,255,0,0.3)] disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                    >
                      <span className="flex items-center justify-center">
                        {status === 'loading' ? 'Enviando...' : t('contact.form.submit')}
                        {status !== 'loading' && <Icon icon="material-symbols:send-outline" width={24} className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                      </span>
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
