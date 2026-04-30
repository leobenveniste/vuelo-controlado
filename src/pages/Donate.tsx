import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const DonatePage: React.FC = () => {
  const { t } = useTranslation();
  const DONATE_URL = "https://donaronline.org/fundacion-vuelo-controlado/comunidad-de-vuelo-la-fiesta-la-cuidamos-entre-todos?preview=true";

  return (
    <div className="pt-32 pb-24 min-h-screen text-slate-900 dark:text-slate-100 bg-white dark:bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start mb-16 space-x-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-4 bg-primary-500/10 rounded-full flex-shrink-0"
          >
            <Icon icon="material-symbols:volunteer-activism-outline" width={48} className="text-primary-500" />
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-display font-black text-slate-900 dark:text-white tracking-tighter text-left">{t('donate.title')}</h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="text-left space-y-6 text-lg text-slate-600 dark:text-slate-400 font-medium">
            <p>
              En Fundación Vuelo Controlado, pensamos que la fiesta debe ser un espacio de disfrute, libertad y, sobre todo, bienestar. Desde hace años, nuestro equipo recorre las pistas de Argentina para transformar la nocturnidad en un entorno más seguro, creando espacios de recuperación y brindando información y asistencia profesional sin prejuicios.
            </p>
            
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white pt-4">¿Por qué necesitamos tu apoyo?</h2>
            <p>
              Para que nuestro trabajo siga siendo independiente y profesional, lanzamos la Comunidad de Vuelo. Con tu donación mensual, nos ayudás a sostener e impulsar tres pilares fundamentales:
            </p>
            
            <ul className="list-disc pl-6 space-y-3">
              <li><strong className="text-slate-900 dark:text-white">Más intervenciones:</strong> Para llevar nuestros dispositivos de reducción de daños a cada vez más puntos del país.</li>
              <li><strong className="text-slate-900 dark:text-white">Investigación Científica:</strong> Generar datos locales sobre consumos en Argentina para diseñar mejores intervenciones y proponer nuevas estrategias en materia de salud pública.</li>
              <li><strong className="text-slate-900 dark:text-white">Formación Continua:</strong> Fortalecer la formación de nuestros voluntarios y profesionales para brindarte la mejor asistencia en la pista y fuera de ella.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white pt-4">Tu impacto es real</h2>
            <p>
              ¿Sabías que tu aporte mensual equivale aproximadamente al valor de una botella de agua en una fiesta? Con ese pequeño gesto, vos hacés posible que estemos presentes en el próximo evento, cuidándote a vos, a tus amigos y a tus amigas.
            </p>
            <p>
              Sumate hoy a la Comunidad de Vuelo. Porque la fiesta se disfruta más cuando nos cuidamos entre todos.
            </p>
            <p className="font-bold text-primary-600 dark:text-primary-500 text-2xl text-center pt-8">
              ¡Gracias por sumarte a esta comunidad!
            </p>
          </div>

          <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl shadow-primary-500/10 border border-slate-200 dark:border-white/10 h-[800px] relative w-full sticky top-32">
           {/* Loader for the iframe */}
           <div className="absolute inset-0 flex items-center justify-center bg-slate-50 dark:bg-brand-dark -z-10">
              <div className="loader"></div>
           </div>
           
           <iframe 
             src={DONATE_URL}
             width="100%" 
             height="1300px" 
             style={{ marginTop: '-600px' }}
             frameBorder="0" 
             allowTransparency={true}
             className="w-full relative z-10"
             title="Donar Online"
           ></iframe>
        </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-center pt-10 border-t border-slate-100 dark:border-white/5">
          <div className="flex flex-col items-center group">
            <div className="p-4 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/5 mb-4 text-primary-500 group-hover:scale-110 transition-transform">
              <Icon icon="material-symbols:shield-outline" width={28} />
            </div>
            <span className="text-xs font-black text-slate-500 uppercase tracking-[0.2em]">{t('donate.secure')}</span>
          </div>
          <div className="flex flex-col items-center group">
            <div className="p-4 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/5 mb-4 text-primary-500 group-hover:scale-110 transition-transform">
              <Icon icon="material-symbols:bolt-outline" width={28} />
            </div>
            <span className="text-xs font-black text-slate-500 uppercase tracking-[0.2em]">{t('donate.impact')}</span>
          </div>
          <div className="flex flex-col items-center group">
            <div className="p-4 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/5 mb-4 text-primary-500 group-hover:scale-110 transition-transform">
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
