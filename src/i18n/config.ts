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
              events: 'Cared Events',
              volunteers: 'Active Volunteers'
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
            label: 'Let\'s talk',
            title: 'Get in Touch',
            subtitle: 'Want Vuelo Controlado at your event? Or join as a volunteer?',
            info: {
              write: 'Write us',
              follow: 'Follow us',
              location: 'Location'
            },
            channels: {
              prensa: 'Press',
              rrhh: 'HR',
              instagram: 'Instagram'
            },
            events: {
              title: 'Events & Schools',
              desc: 'Want Vuelo Controlado at your event or to give a talk at your school? We bring our harm reduction devices and professional information where it is needed most.',
              cta: 'Contact Production',
              quote: 'Request Quote'
            },
            volunteer: {
              title: 'Join Us',
              desc: 'Complete the form to join as a volunteer.',
              success: 'Request sent!',
              successDesc: 'We will respond soon.',
              placeholderMsg: 'Why would you like to join?',
              submit: 'Send Request',
              loading: 'Sending...'
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
          quote: {
            title: 'Request a Quote',
            subtitle: 'Tell us about your event to receive a personalized proposal.',
            form: {
              productora: 'Production Company / Organizer',
              city: 'City / Province',
              eventName: 'Event Name / Main DJ',
              date: 'Date',
              openTime: 'Opening Time',
              closeTime: 'Closing Time',
              location: 'Venue: Name, indoor/outdoor/both',
              attendance: 'Estimated attendance (Min/max)',
              healthSystem: {
                label: 'What will be the health system?',
                ambulance: 'Ambulance',
                post: 'Sanitary Post',
                nursing: 'Nursing',
                vuelo: 'Vuelo Controlado manages',
                other: 'Other'
              },
              hydration: {
                label: 'Will there be free hydration points?',
                yes: 'Yes',
                no: 'No'
              },
              contact: 'Contact Name and Phone',
              extra: 'Tell us more about the event',
              submit: 'Send Quote Request',
              loading: 'Sending...',
              success: 'Request Received!',
              successDesc: 'We will analyze your event and contact you with a proposal soon.'
            }
          },
          donate: {
            title: 'Support our mission',
            subtitle: 'Your contribution directly supports our mission to promote health and care in cultural events.',
            intro: 'At Fundación Vuelo Controlado, we believe that celebrations should be spaces of enjoyment, freedom and, above all, well-being. For years, our team has been touring Argentina\'s dancefloors to transform nightlife into a safer environment, creating recovery spaces and providing professional information and assistance without judgment.',
            whyTitle: 'Why do we need your support?',
            whyDesc: 'For our work to remain independent and professional, we have launched the Vuelo Community. With your monthly donation, you help us sustain and boost three fundamental pillars:',
            pillars: {
              interventions: {
                title: 'More Interventions',
                desc: 'To bring our harm reduction devices to more parts of the country.'
              },
              research: {
                title: 'Scientific Research',
                desc: 'Generate local data on consumption in Argentina to design better interventions and propose new public health strategies.'
              },
              training: {
                title: 'Continuous Training',
                desc: 'Strengthen the training of our volunteers and professionals to provide you with the best assistance on and off the dancefloor.'
              }
            },
            impactTitle: 'Your impact is real',
            impactDesc: 'Did you know that your monthly contribution is approximately equivalent to the value of a bottle of water at a party? With that small gesture, you make it possible for us to be present at the next event, taking care of you and your friends.',
            sumate: 'Join the Vuelo Community today. Because celebrations are enjoyed more when we take care of each other.',
            thanks: 'Thank you for joining this community!',
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
              events: 'Eventos Cuidados',
              volunteers: 'Voluntarios Activos'
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
            label: 'Hablemos',
            title: 'Ponete en contacto',
            subtitle: '¿Querés que Vuelo Controlado esté en tu evento? ¿O sumarte como voluntario?',
            info: {
              write: 'Escríbinos',
              follow: 'Seguinos',
              location: 'Ubicación'
            },
            channels: {
              prensa: 'Prensa',
              rrhh: 'RRHH',
              instagram: 'Instagram'
            },
            events: {
              title: 'Eventos y Escuelas',
              desc: '¿Querés que Vuelo Controlado esté en tu evento o brinde una charla en tu escuela? Llevamos nuestros dispositivos de reducción de riesgos e información profesional a donde más se necesita.',
              cta: 'Contactar a Producción',
              quote: 'Solicitar Presupuesto'
            },
            volunteer: {
              title: 'Sumate',
              desc: 'Completá el formulario para sumarte como voluntario.',
              success: '¡Solicitud enviada!',
              successDesc: 'Te responderemos pronto.',
              placeholderMsg: '¿Por qué te gustaría sumarte?',
              submit: 'Enviar Solicitud',
              loading: 'Enviando...'
            },
            organizer: {
              title: '¿Sos organizador?',
              desc: 'Ofrecemos diagnósticos personalizados para cada tipo de evento cultural o de entretenimiento.',
              cta: 'Solicitar Presupuesto'
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
          quote: {
            title: 'Pedir Presupuesto',
            subtitle: 'Contanos sobre tu evento para recibir una propuesta personalizada.',
            form: {
              productora: 'Productora / Organizador',
              city: 'Ciudad / Provincia',
              eventName: 'Nombre del Evento / DJ Principal',
              date: 'Fecha',
              openTime: 'Horario de Apertura',
              closeTime: 'Horario de Cierre',
              location: 'Locación: Nombre, espacio cerrado/abierto/ambos',
              attendance: 'Cantidad estimada de asistentes (Min/max)',
              healthSystem: {
                label: '¿Cuál será el sistema de salud?',
                ambulance: 'Ambulancia',
                post: 'Puesto Sanitario',
                nursing: 'Enfermería',
                vuelo: 'Vuelo Controlado gestiona',
                other: 'Otro'
              },
              hydration: {
                label: '¿Contará con puestos gratuitos de hidratación?',
                yes: 'Sí',
                no: 'No'
              },
              contact: 'Nombre y teléfono de contacto',
              extra: '¿Querés contarnos algo más sobre el evento?',
              submit: 'Enviar pedido de presupuesto',
              loading: 'Enviando...',
              success: '¡Pedido Recibido!',
              successDesc: 'Analizaremos tu evento y nos pondremos en contacto pronto con una propuesta.'
            }
          },
          donate: {
            title: 'Apoyá nuestra misión',
            subtitle: 'Tu contribución apoya directamente nuestra misión de promover la salud y el cuidado en eventos culturales.',
            intro: 'En Fundación Vuelo Controlado, pensamos que la fiesta debe ser un espacio de disfrute, libertad y, sobre todo, bienestar. Desde hace años, nuestro equipo recorre las pistas de Argentina para transformar la nocturnidad en un entorno más seguro, creando espacios de recuperación y brindando información y asistencia profesional sin prejuicios.',
            whyTitle: '¿Por qué necesitamos tu apoyo?',
            whyDesc: 'Para que nuestro trabajo siga siendo independiente y profesional, lanzamos la Comunidad de Vuelo. Con tu donación mensual, nos ayudás a sostener e impulsar tres pilares fundamentales:',
            pillars: {
              interventions: {
                title: 'Más intervenciones',
                desc: 'Para llevar nuestros dispositivos de reducción de daños a cada vez más puntos del país.'
              },
              research: {
                title: 'Investigación Científica',
                desc: 'Generar datos locales sobre consumos en Argentina para diseñar mejores intervenciones y proponer nuevas estrategias en materia de salud pública.'
              },
              training: {
                title: 'Formación Continua',
                desc: 'Fortalecer la formación de nuestros voluntarios y profesionales para brindarte la mejor asistencia en la pista y fuera de ella.'
              }
            },
            impactTitle: 'Tu impacto es real',
            impactDesc: '¿Sabías que tu aporte mensual equivale aproximadamente al valor de una botella de agua en una fiesta? Con ese pequeño gesto, vos hacés posible que estemos presentes en el próximo evento, cuidándote a vos, a tus amigos y a tus amigas.',
            sumate: 'Sumate hoy a la Comunidad de Vuelo. Porque la fiesta se disfruta más cuando nos cuidamos entre todos.',
            thanks: '¡Gracias por sumarte a esta comunidad!',
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
