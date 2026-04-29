import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'es',
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          nav: {
            home: 'Home',
            about: 'About',
            mission: 'Mission',
            projects: 'Impact',
            contact: 'Contact',
            donate: 'Donate'
          },
          hero: {
            title: 'Reducing Risks, Enhancing Care',
            subtitle: 'We promote health and harm reduction in cultural and nightlife events. Because caring for ourselves is part of the celebration.',
            cta: 'Our Impact',
            donate: 'Support our mission',
            tags: 'Harm Reduction • Health • Care',
            pillars: {
              goals: { title: 'Health First', desc: 'Promoting well-being and risk reduction in every intervention.' },
              community: { title: 'Safe Space', desc: 'Creating environments where everyone feels cared for and respected.' },
              education: { title: 'Awareness', desc: 'Empowering through scientific and clear information about risks.' },
              impact: { title: 'Direct Impact', desc: 'Immediate assistance and support in the heart of the celebration.' }
            }
          },
          mission: {
            title: 'Health & Harm Reduction',
            description: 'We work to mitigate risks associated with substance use and promote self-care in cultural events.',
            vision: {
              label: 'Our Vision',
              title: 'A safer and healthier leisure environment.',
              quote: 'We work to mitigate the risks associated with substance use and promote self-care in cultural events.'
            },
            pillars: {
              title: 'Our Pillars',
              judgment: {
                title: 'Non-Judgment',
                desc: 'We address consumption without prejudice, focusing on health and well-being.'
              },
              empathy: {
                title: 'Empathy & Care',
                desc: 'We provide support and accompaniment in moments of vulnerability.'
              },
              info: {
                title: 'Information-Based',
                desc: 'We promote conscious decisions through clear and scientific information.'
              }
            },
            methodology: {
              title: 'Intervention Methodology',
              subtitle: 'We implement comprehensive devices that combine logistics, health, and education.',
              steps: [
                'Preventive situation diagnosis',
                'Rest and chill-out zones',
                'Hydration and fresh fruit points',
                'Psychological support and assistance',
                'Coordination with emergency services'
              ]
            },
            stats: {
              hydration: 'Free Hydration',
              founded: 'Foundation',
              team: 'Multidisciplinary Team',
              reduction: 'Harm Reduction'
            }
          },
          about: {
            label: 'Our Story',
            title: 'We care for the Culture.',
            story1: 'Fundación Vuelo Controlado was born in Mendoza in 2018 with a clear goal: to transform the night into a space of care and health.',
            story2: 'Driven by psychologist Verónica Chrabolowsky, our organization brings together professionals from psychology, medicine, social work, and education to mitigate risks and promote self-care.',
            stats: {
              care: 'Non-punitive Care',
              events: 'Cared Events'
            },
            values: {
              health: 'Health',
              science: 'Science',
              impact: 'Impact',
              network: 'Network'
            },
            team: {
              title: 'Multidisciplinary Team',
              subtitle: 'We combine experience in mental health and prevention to provide the best assistance.',
              veronica: { name: 'Veronica Chrabolowsky', role: 'Founder and Director' },
              paula: { name: 'Paula Vera', role: 'Communication and Press' },
              evan: { name: 'Evan Morris', role: 'Production and Human Resources' }
            }
          },
          projects: {
            title: 'Our Impact',
            subtitle: 'We implement care devices in the most important festivals of the region.',
            items: {
              hydration: {
                title: 'Hydration Points',
                desc: 'Free provision of fresh water, fruit, and rehydration salts in massive events.'
              },
              rest: {
                title: 'Rest Zones',
                desc: 'Chill-out areas designed for physical and mental recovery in high-stimulation environments.'
              },
              social: {
                title: 'Psychosocial Support',
                desc: 'Direct assistance by mental health professionals in times of crisis or distress.'
              },
              edu: {
                title: 'Risk Education',
                desc: 'Workshops and informative material on substances and harm prevention.'
              }
            },
            learnMore: 'Learn more'
          },
          contact: {
            title: 'Get in Touch',
            subtitle: 'Want Vuelo Controlado at your event? Or join as a volunteer?',
            info: {
              write: 'Write us',
              follow: 'Follow us',
              location: 'Location'
            },
            organizer: {
              title: 'Are you an organizer?',
              desc: 'We offer personalized diagnostics for every type of cultural or entertainment event.',
              cta: 'Request Quote'
            },
            form: {
              name: 'Name',
              email: 'Email',
              message: 'Message',
              submit: 'Send Message',
              placeholderName: 'Your name',
              placeholderEmail: 'your@email.com',
              placeholderMsg: 'Tell us about your inquiry...'
            }
          },
          donate: {
            title: 'Support our mission',
            subtitle: 'Your contribution directly supports our mission to promote health and care in cultural events.',
            select: 'Select Donation Amount',
            custom: 'Custom Amount',
            btn: 'Donate ${{amount}} Now',
            secure: 'Secure Payment',
            impact: 'Instant Impact',
            transparency: 'Transparency'
          },
          footer: {
            rights: 'All rights reserved.',
            tagline: 'Promoting health and care in cultural events.',
            nav: 'Navigation',
            contact: 'Contact',
            newsletter: {
              title: 'Newsletter',
              desc: 'Join us to receive information on care and health.',
              placeholder: 'Email',
              btn: 'OK'
            },
            privacy: 'Privacy',
            terms: 'Terms'
          }
        }
      },
      es: {
        translation: {
          nav: {
            home: 'Inicio',
            about: 'Nosotros',
            mission: 'Misión',
            projects: 'Impacto',
            contact: 'Contacto',
            donate: 'Donar'
          },
          hero: {
            title: 'Reduciendo Riesgos, Potenciando el Cuidado',
            subtitle: 'Promovemos la salud y la reducción de daños en eventos culturales y de ocio nocturno. Porque cuidarnos también es parte de la fiesta.',
            cta: 'Nuestro Impacto',
            donate: 'Apoyá nuestra misión',
            tags: 'Reducción de Daños • Salud • Cuidado',
            pillars: {
              goals: { title: 'Salud Primero', desc: 'Promoviendo el bienestar y la reducción de riesgos en cada intervención.' },
              community: { title: 'Espacio Seguro', desc: 'Creando entornos donde todos se sientan cuidados y respetados.' },
              education: { title: 'Conciencia', desc: 'Empoderando a través de información científica y clara sobre riesgos.' },
              impact: { title: 'Impacto Directo', desc: 'Asistencia inmediata y contención en el corazón de la fiesta.' }
            }
          },
          mission: {
            title: 'Salud y Reducción de Daños',
            description: 'Mitigamos los riesgos asociados al consumo de sustancias a través del cuidado, la información y la asistencia directa en entornos de ocio.',
            vision: {
              label: 'Nuestra Visión',
              title: 'Un entorno de ocio más seguro y saludable.',
              quote: 'Trabajamos para mitigar los riesgos asociados al consumo de sustancias y promover el autocuidado en eventos culturales.'
            },
            pillars: {
              title: 'Nuestros Pilares',
              judgment: {
                title: 'No Juicio',
                desc: 'Abordamos el consumo sin prejuicios, enfocándonos en la salud y el bienestar de las personas.'
              },
              empathy: {
                title: 'Empatía y Cuidado',
                desc: 'Brindamos contención y acompañamiento en momentos de vulnerabilidad.'
              },
              info: {
                title: 'Basado en Información',
                desc: 'Promovemos decisiones conscientes a través de información clara y científica.'
              }
            },
            methodology: {
              title: 'Metodología de Intervención',
              subtitle: 'Implementamos dispositivos integrales que combinan logística, salud y educación.',
              steps: [
                'Diagnóstico de situación preventivo',
                'Zonas de descanso y chill-out',
                'Puntos de hidratación y fruta fresca',
                'Asistencia psicológica y contención',
                'Coordinación con servicios de emergencia'
              ]
            },
            stats: {
              hydration: 'Hidratación Gratuita',
              founded: 'Fundación',
              team: 'Equipo Multidisciplinario',
              reduction: 'Reducción de Daños'
            }
          },
          about: {
            label: 'Nuestra Historia',
            title: 'Cuidamos la Cultura.',
            story1: 'Fundación Vuelo Controlado nació en Mendoza en 2018 con un objetivo claro: transformar la noche en un espacio de cuidado y salud.',
            story2: 'Impulsada por la psicóloga Verónica Chrabolowsky, nuestra organización reúne a profesionales de la psicología, medicina, trabajo social y educación para mitigar riesgos y promover el autocuidado.',
            stats: {
              care: 'Cuidado No Punitivo',
              events: 'Eventos Cuidados'
            },
            values: {
              health: 'Salud',
              science: 'Ciencia',
              impact: 'Impacto',
              network: 'Red'
            },
            team: {
              title: 'Equipo Multidisciplinario',
              subtitle: 'Combinamos experiencia en salud mental y prevención para brindar la mejor asistencia.',
              veronica: { name: 'Veronica Chrabolowsky', role: 'Fundadora y Directora' },
              paula: { name: 'Paula Vera', role: 'Comunicación y Prensa' },
              evan: { name: 'Evan Morris', role: 'Producción y Recursos Humanos' }
            }
          },
          projects: {
            title: 'Nuestro Impacto',
            subtitle: 'Implementamos dispositivos de cuidado en los festivales más importantes de la región.',
            items: {
              hydration: {
                title: 'Puntos de Hidratación',
                desc: 'Provisión gratuita de agua fresca, fruta y sales de rehidratación en eventos multitudinarios.'
              },
              rest: {
                title: 'Zonas de Descanso',
                desc: 'Áreas de "chill-out" diseñadas para la recuperación física y mental en entornos de alta estimulación.'
              },
              social: {
                title: 'Asistencia Psicosocial',
                desc: 'Contención directa por profesionales de la salud mental ante crisis o malestar.'
              },
              edu: {
                title: 'Educación en Riesgos',
                desc: 'Talleres y material informativo sobre sustancias y prevención de daños.'
              }
            },
            learnMore: 'Saber más'
          },
          contact: {
            title: 'Ponete en contacto',
            subtitle: '¿Querés que Vuelo Controlado esté en tu evento? ¿O sumarte como voluntario?',
            info: {
              write: 'Escríbinos',
              follow: 'Seguinos',
              location: 'Ubicación'
            },
            organizer: {
              title: '¿Sos organizador?',
              desc: 'Ofrecemos diagnósticos personalizados para cada tipo de evento cultural o de entretenimiento.',
              cta: 'Pedir Presupuesto'
            },
            form: {
              name: 'Nombre',
              email: 'Correo Electrónico',
              message: 'Mensaje',
              submit: 'Enviar Mensaje',
              placeholderName: 'Tu nombre',
              placeholderEmail: 'tu@email.com',
              placeholderMsg: 'Contanos sobre tu consulta...'
            }
          },
          donate: {
            title: 'Apoyá nuestra misión',
            subtitle: 'Tu contribución apoya directamente nuestra misión de promover la salud y el cuidado en eventos culturales.',
            select: 'Seleccioná el monto',
            custom: 'Monto personalizado',
            btn: 'Donar ${{amount}} ahora',
            secure: 'Pago Seguro',
            impact: 'Impacto Inmediato',
            transparency: 'Transparencia'
          },
          footer: {
            rights: 'Todos los derechos reservados.',
            tagline: 'Promoviendo la salud y el cuidado en eventos culturales.',
            nav: 'Navegación',
            contact: 'Contacto',
            newsletter: {
              title: 'Newsletter',
              desc: 'Sumate para recibir información sobre cuidado y salud.',
              placeholder: 'Email',
              btn: 'OK'
            },
            privacy: 'Privacidad',
            terms: 'Términos'
          }
        }
      }
    }
  });

export default i18n;
