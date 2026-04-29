import React from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from '@iconify/react';

const ContactPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-32 pb-24 min-h-screen text-slate-900 dark:text-slate-100 bg-white dark:bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-20">
          <span className="text-primary-500 font-bold uppercase tracking-[0.3em] text-sm mb-6 block">{t('contact.title')}</span>
          <h1 className="text-4xl md:text-6xl font-display font-black text-slate-900 dark:text-white mb-6 tracking-tighter leading-none max-w-5xl">
            {t('contact.subtitle').split(' ').map((word, i) => (
              <span key={i} className={['evento', 'voluntario', 'event', 'volunteer'].includes(word.replace(/[.,¿?]/g, '').toLowerCase()) ? 'text-primary-500' : ''}>
                {word}{' '}
              </span>
            ))}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <div className="space-y-12">
              <div className="flex items-start space-x-6 group">
                <div className="w-16 h-16 rounded-[2rem] bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 flex items-center justify-center text-primary-500 group-hover:bg-primary-500/10 group-hover:scale-110 transition-all duration-500 shadow-sm">
                  <Icon icon="material-symbols:location-on-outline" width={32} />
                </div>
                <div>
                  <h3 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-2">Mendoza</h3>
                  <p className="text-xl font-bold text-slate-900 dark:text-white">Argentina</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-16 h-16 rounded-[2rem] bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 flex items-center justify-center text-primary-500 group-hover:bg-primary-500/10 group-hover:scale-110 transition-all duration-500 shadow-sm">
                  <Icon icon="material-symbols:mail-outline" width={32} />
                </div>
                <div>
                  <h3 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-2">Email</h3>
                  <a href="mailto:prensa@vuelocontrolado.org" className="text-xl font-bold text-slate-900 dark:text-white hover:text-primary-500 transition-colors">prensa@vuelocontrolado.org</a>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-16 h-16 rounded-[2rem] bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 flex items-center justify-center text-primary-500 group-hover:bg-primary-500/10 group-hover:scale-110 transition-all duration-500 shadow-sm">
                  <Icon icon="mdi:instagram" width={32} />
                </div>
                <div>
                  <h3 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-2">Instagram</h3>
                  <a href="https://www.instagram.com/vuelocontrolado" target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-slate-900 dark:text-white hover:text-primary-500 transition-colors">@vuelocontrolado</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[3rem] p-12 shadow-xl dark:shadow-none">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3">{t('contact.form.name')}</label>
                  <input 
                    type="text" 
                    className="w-full bg-white dark:bg-brand-dark border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 focus:ring-1 focus:ring-primary-500 focus:border-transparent transition-all outline-none text-slate-900 dark:text-white font-bold shadow-inner"
                    placeholder={t('contact.form.placeholderName')}
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3">{t('contact.form.email')}</label>
                  <input 
                    type="email" 
                    className="w-full bg-white dark:bg-brand-dark border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 focus:ring-1 focus:ring-primary-500 focus:border-transparent transition-all outline-none text-slate-900 dark:text-white font-bold shadow-inner"
                    placeholder={t('contact.form.placeholderEmail')}
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3">{t('contact.form.msg')}</label>
                <textarea 
                  rows={5} 
                  className="w-full bg-white dark:bg-brand-dark border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 focus:ring-1 focus:ring-primary-500 focus:border-transparent transition-all outline-none text-slate-900 dark:text-white font-bold shadow-inner"
                  placeholder={t('contact.form.placeholderMsg')}
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-primary-500 text-brand-dark py-6 rounded-2xl font-black uppercase tracking-[0.2em] group transition-all hover:bg-primary-400 hover:shadow-[0_0_30px_rgba(0,255,0,0.2)]">
                <span className="flex items-center justify-center">
                  {t('contact.form.submit')}
                  <Icon icon="material-symbols:send-outline" width={24} className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
