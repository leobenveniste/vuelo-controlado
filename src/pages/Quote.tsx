import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'framer-motion';

const QuotePage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    fecha: '',
    apertura: '',
    cierre: ''
  });
  
  const [activeDropdown, setActiveDropdown] = useState<'fecha' | 'apertura' | 'cierre' | null>(null);
  const [viewDate, setViewDate] = useState(new Date());
  
  const dropdownRef = useRef<HTMLDivElement>(null);

  const timeOptions = Array.from({ length: 24 * 4 }, (_, i) => {
    const hours = Math.floor(i / 4).toString().padStart(2, '0');
    const minutes = ((i % 4) * 15).toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const formatDisplayDate = (val: string) => {
    if (!val) return '';
    const [y, m, d] = val.split('-');
    return `${d}/${m}/${y}`;
  };

  const handleTimeSelect = (name: 'apertura' | 'cierre', val: string) => {
    setFormData(prev => ({ ...prev, [name]: val }));
    setActiveDropdown(null);
  };

  const generateCalendarDays = () => {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    // Adjust for Monday start (0=Sun -> 0=Mon)
    const offset = firstDay === 0 ? 6 : firstDay - 1;
    
    const days = [];
    for (let i = 0; i < offset; i++) days.push(null);
    for (let i = 1; i <= daysInMonth; i++) days.push(i);
    
    return days;
  };

  const handleDateSelect = (day: number) => {
    const year = viewDate.getFullYear();
    const month = (viewDate.getMonth() + 1).toString().padStart(2, '0');
    const d = day.toString().padStart(2, '0');
    setFormData(prev => ({ ...prev, fecha: `${year}-${month}-${d}` }));
    setActiveDropdown(null);
  };

  const changeMonth = (offset: number) => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + offset, 1));
  };

  // Using a placeholder SCRIPT_URL, we can update it if needed.
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyAHgQ86aBpStodGwy0cl7WV3GVhiMJi2gPm6ETDO9C48yWTNuBqCJBL75pqlgfhZ0r/exec';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const form = e.currentTarget;
    const data = new FormData(form);
    // Add target email to formData if backend supports it, or it's hardcoded in the script
    data.append('target_email', 'produccion@vuelocontrolado.org');

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: data,
      });
      setStatus('success');
      form.reset();
      setFormData({ fecha: '', apertura: '', cierre: '' });
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => setStatus('idle'), 8000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen text-slate-900 dark:text-slate-100 bg-white dark:bg-brand-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-primary-500 font-bold uppercase tracking-[0.3em] text-sm mb-6 block">{t('contact.events.title')}</span>
          <h1 className="text-5xl md:text-7xl font-display font-black text-slate-900 dark:text-white mb-8 tracking-tighter leading-none">
            {t('quote.title')}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 font-medium max-w-2xl mx-auto">
            {t('quote.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[3rem] p-8 md:p-16 relative overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col items-center justify-center text-center py-20"
              >
                <div className="w-24 h-24 bg-primary-500/10 rounded-full flex items-center justify-center text-primary-500 mb-8">
                  <Icon icon="material-symbols:check-circle-outline" width={56} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">{t('quote.form.success')}</h2>
                <p className="text-xl text-slate-600 dark:text-slate-400 font-medium max-w-md mx-auto">
                  {t('quote.form.successDesc')}
                </p>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Productora */}
                <div className="md:col-span-2 flex flex-col">
                  <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3 min-h-[2.5rem] flex items-end">{t('quote.form.productora')}</label>
                  <input required name="productora" type="text" className="input-field" />
                </div>

                {/* Ciudad */}
                <div className="flex flex-col">
                  <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3 min-h-[2.5rem] flex items-end">{t('quote.form.city')}</label>
                  <input required name="ciudad" type="text" className="input-field" />
                </div>

                {/* Nombre Evento */}
                <div className="flex flex-col">
                  <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3 min-h-[2.5rem] flex items-end">{t('quote.form.eventName')}</label>
                  <input required name="evento" type="text" className="input-field" />
                </div>

                {/* Fecha */}
                <div className="flex flex-col">
                  <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3 min-h-[2.5rem] flex items-end">{t('quote.form.date')}</label>
                  <div className="relative group" ref={activeDropdown === 'fecha' ? dropdownRef : null}>
                    <input type="hidden" name="fecha" value={formData.fecha} />
                    <div 
                      onClick={() => setActiveDropdown(activeDropdown === 'fecha' ? null : 'fecha')}
                      className={`input-field flex items-center justify-between cursor-pointer transition-all ${activeDropdown === 'fecha' ? 'border-primary-500 ring-1 ring-primary-500' : 'group-hover:border-primary-500'}`}
                    >
                      <span className={formData.fecha ? 'text-slate-900 dark:text-white' : 'text-slate-400 dark:text-slate-600'}>
                        {formData.fecha ? formatDisplayDate(formData.fecha) : 'dd/mm/yyyy'}
                      </span>
                      <Icon icon="material-symbols:calendar-today-outline" width={20} className="text-slate-400 group-hover:text-primary-500 transition-colors" />
                    </div>
                    
                    <AnimatePresence>
                      {activeDropdown === 'fecha' && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute z-50 w-[320px] mt-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl p-6"
                        >
                          <div className="flex items-center justify-between mb-6">
                            <h3 className="font-black text-slate-900 dark:text-white capitalize">
                              {viewDate.toLocaleDateString(i18n.language, { month: 'long', year: 'numeric' }).replace(/ de /g, ' ')}
                            </h3>
                            <div className="flex space-x-2">
                              <button type="button" onClick={() => changeMonth(-1)} className="p-2 hover:bg-slate-100 dark:hover:bg-white/5 rounded-lg text-slate-400 transition-colors">
                                <Icon icon="material-symbols:chevron-left" width={24} />
                              </button>
                              <button type="button" onClick={() => changeMonth(1)} className="p-2 hover:bg-slate-100 dark:hover:bg-white/5 rounded-lg text-slate-400 transition-colors">
                                <Icon icon="material-symbols:chevron-right" width={24} />
                              </button>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-7 gap-1 mb-2">
                            {['L', 'M', 'X', 'J', 'V', 'S', 'D'].map(d => (
                              <div key={d} className="text-center text-[10px] font-black text-slate-400 uppercase">{d}</div>
                            ))}
                          </div>
                          
                          <div className="grid grid-cols-7 gap-1">
                            {generateCalendarDays().map((day, i) => (
                              <div key={i}>
                                {day ? (
                                  <button
                                    type="button"
                                    onClick={() => handleDateSelect(day)}
                                    className={`w-full aspect-square flex items-center justify-center rounded-lg text-sm font-bold transition-all ${
                                      formData.fecha === `${viewDate.getFullYear()}-${(viewDate.getMonth() + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`
                                        ? 'bg-primary-500 text-brand-dark'
                                        : 'text-slate-600 dark:text-slate-400 hover:bg-primary-500/10 hover:text-primary-500'
                                    }`}
                                  >
                                    {day}
                                  </button>
                                ) : <div className="w-full aspect-square" />}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Asistentes */}
                <div className="flex flex-col">
                  <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3 min-h-[2.5rem] flex items-end">{t('quote.form.attendance')}</label>
                  <input required name="asistentes" type="text" className="input-field" />
                </div>

                {/* Horario Apertura */}
                <div className="flex flex-col">
                  <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3 min-h-[2.5rem] flex items-end">{t('quote.form.openTime')}</label>
                  <div className="relative group" ref={activeDropdown === 'apertura' ? dropdownRef : null}>
                    <input type="hidden" name="apertura" value={formData.apertura} />
                    <div 
                      onClick={() => setActiveDropdown(activeDropdown === 'apertura' ? null : 'apertura')}
                      className={`input-field flex items-center justify-between cursor-pointer transition-all ${activeDropdown === 'apertura' ? 'border-primary-500 ring-1 ring-primary-500' : 'group-hover:border-primary-500'}`}
                    >
                      <span className={formData.apertura ? 'text-slate-900 dark:text-white' : 'text-slate-400 dark:text-slate-600'}>
                        {formData.apertura || 'hh:mm'}
                      </span>
                      <Icon icon="material-symbols:schedule-outline" width={20} className="text-slate-400 group-hover:text-primary-500 transition-colors" />
                    </div>
                    
                    <AnimatePresence>
                      {activeDropdown === 'apertura' && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute z-50 w-full mt-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                        >
                          <div className="max-h-60 overflow-y-auto py-2 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-white/10">
                            {timeOptions.map((time) => (
                              <button
                                key={time}
                                type="button"
                                onClick={() => handleTimeSelect('apertura', time)}
                                className="w-full px-6 py-3 text-left hover:bg-primary-500/10 hover:text-primary-500 transition-colors font-bold text-slate-600 dark:text-slate-400"
                              >
                                {time}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Horario Cierre */}
                <div className="flex flex-col">
                  <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3 min-h-[2.5rem] flex items-end">{t('quote.form.closeTime')}</label>
                  <div className="relative group" ref={activeDropdown === 'cierre' ? dropdownRef : null}>
                    <input type="hidden" name="cierre" value={formData.cierre} />
                    <div 
                      onClick={() => setActiveDropdown(activeDropdown === 'cierre' ? null : 'cierre')}
                      className={`input-field flex items-center justify-between cursor-pointer transition-all ${activeDropdown === 'cierre' ? 'border-primary-500 ring-1 ring-primary-500' : 'group-hover:border-primary-500'}`}
                    >
                      <span className={formData.cierre ? 'text-slate-900 dark:text-white' : 'text-slate-400 dark:text-slate-600'}>
                        {formData.cierre || 'hh:mm'}
                      </span>
                      <Icon icon="material-symbols:schedule-outline" width={20} className="text-slate-400 group-hover:text-primary-500 transition-colors" />
                    </div>
                    
                    <AnimatePresence>
                      {activeDropdown === 'cierre' && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute z-50 w-full mt-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                        >
                          <div className="max-h-60 overflow-y-auto py-2 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-white/10">
                            {timeOptions.map((time) => (
                              <button
                                key={time}
                                type="button"
                                onClick={() => handleTimeSelect('cierre', time)}
                                className="w-full px-6 py-3 text-left hover:bg-primary-500/10 hover:text-primary-500 transition-colors font-bold text-slate-600 dark:text-slate-400"
                              >
                                {time}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Locacion */}
                <div className="md:col-span-2 flex flex-col">
                  <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3 min-h-[2.5rem] flex items-end">{t('quote.form.location')}</label>
                  <input required name="locacion" type="text" className="input-field" />
                </div>

                {/* Sistema de Salud */}
                <div className="md:col-span-2">
                  <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-4">{t('quote.form.healthSystem.label')}</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {['ambulance', 'post', 'nursing', 'vuelo', 'other'].map((opt) => (
                      <label key={opt} className="flex items-center space-x-3 cursor-pointer group">
                        <div className="relative flex items-center justify-center">
                          <input type="radio" name="sistema_salud" value={opt} className="peer appearance-none w-6 h-6 border-2 border-slate-200 dark:border-white/10 rounded-lg checked:border-primary-500 transition-all" required />
                          <div className="absolute w-3 h-3 bg-primary-500 rounded-sm scale-0 peer-checked:scale-100 transition-transform" />
                        </div>
                        <span className="text-sm font-bold text-slate-600 dark:text-slate-400 group-hover:text-primary-500 transition-colors">{t(`quote.form.healthSystem.${opt}`)}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Hidratacion */}
                <div className="md:col-span-2">
                  <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-4">{t('quote.form.hydration.label')}</label>
                  <div className="flex space-x-8">
                    {['yes', 'no'].map((opt) => (
                      <label key={opt} className="flex items-center space-x-3 cursor-pointer group">
                        <div className="relative flex items-center justify-center">
                          <input type="radio" name="hidratacion" value={opt} className="peer appearance-none w-6 h-6 border-2 border-slate-200 dark:border-white/10 rounded-lg checked:border-primary-500 transition-all" required />
                          <div className="absolute w-3 h-3 bg-primary-500 rounded-sm scale-0 peer-checked:scale-100 transition-transform" />
                        </div>
                        <span className="text-sm font-bold text-slate-600 dark:text-slate-400 group-hover:text-primary-500 transition-colors">{t(`quote.form.hydration.${opt}`)}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Contacto */}
                <div className="md:col-span-2 flex flex-col">
                  <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3 min-h-[2.5rem] flex items-end">{t('quote.form.contact')}</label>
                  <input required name="contacto" type="text" className="input-field" />
                </div>

                {/* Extra */}
                <div className="md:col-span-2 flex flex-col">
                  <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3 min-h-[2.5rem] flex items-end">{t('quote.form.extra')}</label>
                  <textarea name="info_extra" rows={4} className="input-field resize-none"></textarea>
                </div>

                <div className="md:col-span-2 pt-4">
                  <button 
                    disabled={status === 'loading'}
                    type="submit" 
                    className="w-full bg-primary-500 text-brand-dark py-6 rounded-2xl font-black uppercase tracking-[0.2em] group transition-all hover:bg-primary-400 disabled:opacity-50 text-lg shadow-xl shadow-primary-500/20 flex items-center justify-center space-x-4"
                  >
                    <span>{status === 'loading' ? t('quote.form.loading') : t('quote.form.submit')}</span>
                    {status !== 'loading' && <Icon icon="material-symbols:send-rounded" width={24} />}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .input-field {
          width: 100%;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 1.25rem;
          padding: 1rem 1.5rem;
          font-weight: 700;
          outline: none;
          transition: all 0.3s;
          box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.05);
        }
        .dark .input-field {
          background: rgba(15, 23, 42, 0.5);
          border-color: rgba(255, 255, 255, 0.1);
          color: white;
        }
        .dark .input-field::-webkit-calendar-picker-indicator {
          filter: invert(1);
          cursor: pointer;
        }
        .input-field:focus {
          ring: 1px;
          ring-color: #00ff00;
          border-color: transparent;
          box-shadow: 0 0 0 1px #00ff00;
        }
      `}} />
    </div>
  );
};

export default QuotePage;
