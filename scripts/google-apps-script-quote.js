/**
 * ==============================================================================
 * FUNDACIÓN VUELO CONTROLADO - BACKEND GOOGLE APPS SCRIPT
 * Formulario de Presupuesto para Eventos (Quote)
 * ==============================================================================
 * 
 * INSTRUCCIONES DE INSTALACIÓN Y ACTUALIZACIÓN:
 * 1. Abrir la Hoja de Cálculo de Google (Google Sheets) donde se reciben las respuestas.
 * 2. Ir al menú superior: Extensiones > Apps Script.
 * 3. Pegar el código de este archivo reemplazando el contenido existente.
 * 4. (Opcional) Enviar un email de prueba ejecutando la función 'testEmail()' desde el editor.
 * 5. Hacer clic en "Implementar" (Deploy) > "Nueva implementación" (New deployment).
 *    - Tipo: Aplicación web (Web app).
 *    - Ejecutar como: Yo (tu cuenta de Google).
 *    - Quién tiene acceso: Cualquier usuario (Anyone), incluso anónimo.
 * 6. Copiar la URL de la aplicación web generada (termina en /exec) y pegarla en Quote.tsx (SCRIPT_URL).
 */

const CONFIG = {
  DEFAULT_RECIPIENT: 'produccion@vuelocontrolado.org',
  BRAND_NAME: 'Fundación Vuelo Controlado',
  PRIMARY_COLOR: '#22c55e',       // Verde característico de la fundación
  DARK_BG: '#0b0f19',             // Fondo oscuro de la identidad
  CARD_BG: '#161e2e',             // Fondo de tarjeta
  TEXT_MUTED: '#94a3b8',          // Texto secundario
  TEXT_LIGHT: '#f8fafc',          // Texto principal claro
};

function doPost(e) {
  try {
    const p = (e && e.parameter) ? e.parameter : {};

    // 1. Extraer los campos enviados desde el formulario
    const nombre = p.nombre || p.name || 'No especificado';
    const telefono = p.telefono || p.phone || 'No especificado';
    const email = p.email || p.correo || 'No especificado';
    const productora = p.productora || 'No especificada';
    const ciudad = p.ciudad || 'No especificada';
    const evento = p.evento || 'No especificado';
    const fecha = p.fecha || 'No especificada';
    const apertura = p.apertura || 'No especificado';
    const cierre = p.cierre || 'No especificado';
    const locacion = p.locacion || 'No especificada';
    const asistentes = p.asistentes || 'No especificado';
    const sistemaSalud = p.sistema_salud || 'No especificado';
    const hidratacion = p.hidratacion === 'yes' ? 'Sí' : (p.hidratacion === 'no' ? 'No' : (p.hidratacion || 'No especificado'));
    const infoExtra = p.info_extra || 'Sin comentarios adicionales';
    const recipient = p.target_email || CONFIG.DEFAULT_RECIPIENT;

    // 2. Guardar en Google Sheet si el script está asociado a una planilla
    try {
      const sheet = SpreadsheetApp.getActiveSpreadsheet();
      if (sheet) {
        let targetSheet = sheet.getSheetByName('Presupuestos') || sheet.getSheets()[0];
        
        // Crear encabezados si la hoja está vacía
        if (targetSheet.getLastRow() === 0) {
          targetSheet.appendRow([
            'Fecha Registro', 'Nombre', 'Teléfono', 'Email', 'Productora', 
            'Ciudad', 'Evento', 'Fecha Evento', 'Apertura', 'Cierre', 
            'Locación', 'Asistentes', 'Sistema Salud', 'Hidratación', 'Info Extra'
          ]);
          targetSheet.getRange(1, 1, 1, 15).setFontWeight('bold').setBackground('#22c55e').setFontColor('#0b0f19');
        }

        targetSheet.appendRow([
          new Date(),
          nombre,
          telefono,
          email,
          productora,
          ciudad,
          evento,
          fecha,
          apertura,
          cierre,
          locacion,
          asistentes,
          sistemaSalud,
          hidratacion,
          infoExtra
        ]);
      }
    } catch (sheetError) {
      Logger.log('Aviso al guardar en Sheet: ' + sheetError.toString());
    }

    // 3. Generar número limpio para enlace directo de WhatsApp
    const cleanPhone = telefono.replace(/[^\d]/g, '');
    const whatsappUrl = cleanPhone.length >= 8 ? 'https://wa.me/' + cleanPhone : null;

    // 4. Construir el correo en Texto Plano (Fallback)
    const textBody = 
`NUEVO PEDIDO DE PRESUPUESTO - FUNDACIÓN VUELO CONTROLADO
=========================================================

DATOS DE CONTACTO:
------------------
• Nombre y Apellido: ${nombre}
• Teléfono: ${telefono}
• Email: ${email}

DETALLES DEL EVENTO:
--------------------
• Productora / Organizador: ${productora}
• Ciudad / Provincia: ${ciudad}
• Evento / Artista: ${evento}
• Fecha: ${fecha}
• Horario: ${apertura} a ${cierre}
• Locación: ${locacion}
• Asistentes estimados: ${asistentes}
• Sistema de salud: ${sistemaSalud}
• Puestos de hidratación: ${hidratacion}

INFORMACIÓN EXTRA:
------------------
${infoExtra}

Enviado desde el formulario oficial en vuelocontrolado.org`;

    // 5. Construir el Correo HTML Profesional y Responsive
    const htmlBody = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nuevo Pedido de Presupuesto</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0b0f19; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #f8fafc;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #0b0f19; width: 100%; padding: 30px 10px;">
    <tr>
      <td align="center">
        <!-- Container -->
        <table role="presentation" width="100%" max-width="640" style="max-width: 640px; background-color: #121826; border: 1px solid #1f293d; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.5);">
          
          <!-- Header -->
          <tr>
            <td style="padding: 35px 35px 25px 35px; background: linear-gradient(180deg, #162032 0%, #121826 100%); border-bottom: 2px solid #22c55e;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <span style="font-size: 11px; font-weight: 800; letter-spacing: 2px; color: #22c55e; text-transform: uppercase;">
                      FUNDACIÓN VUELO CONTROLADO
                    </span>
                    <h1 style="margin: 8px 0 0 0; font-size: 24px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px;">
                      Nuevo Pedido de Presupuesto
                    </h1>
                    <p style="margin: 6px 0 0 0; font-size: 14px; color: #94a3b8;">
                      Solicitud recibida para intervención y cuidado en eventos
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Contact Highlight Card -->
          <tr>
            <td style="padding: 25px 35px 15px 35px;">
              <div style="background-color: #1a2235; border: 1px solid #2a364f; border-radius: 14px; padding: 22px;">
                <span style="font-size: 11px; font-weight: 800; color: #22c55e; text-transform: uppercase; letter-spacing: 1.5px; display: block; margin-bottom: 12px;">
                  👤 Datos de Contacto
                </span>
                
                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="font-size: 15px;">
                  <tr>
                    <td style="padding: 6px 0; color: #94a3b8; width: 100px;">Nombre:</td>
                    <td style="padding: 6px 0; color: #ffffff; font-weight: 700;">${nombre}</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #94a3b8;">Teléfono:</td>
                    <td style="padding: 6px 0; color: #ffffff; font-weight: 700;">
                      <a href="tel:${telefono}" style="color: #22c55e; text-decoration: none;">${telefono}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #94a3b8;">Email:</td>
                    <td style="padding: 6px 0; color: #ffffff; font-weight: 700;">
                      <a href="mailto:${email}" style="color: #22c55e; text-decoration: none;">${email}</a>
                    </td>
                  </tr>
                </table>

                <!-- Action Buttons -->
                <div style="margin-top: 18px; padding-top: 15px; border-top: 1px solid #28354d;">
                  ${whatsappUrl ? `
                    <a href="${whatsappUrl}" target="_blank" style="display: inline-block; background-color: #22c55e; color: #0b0f19; font-size: 13px; font-weight: 800; text-decoration: none; padding: 10px 18px; border-radius: 8px; margin-right: 8px; text-transform: uppercase; letter-spacing: 0.5px;">
                      💬 Abrir WhatsApp
                    </a>
                  ` : ''}
                  <a href="mailto:${email}?subject=Presupuesto%20Vuelo%20Controlado%20-%20${encodeURIComponent(evento)}" style="display: inline-block; background-color: #2a364f; color: #ffffff; font-size: 13px; font-weight: 700; text-decoration: none; padding: 10px 18px; border-radius: 8px;">
                    ✉️ Responder por Mail
                  </a>
                </div>
              </div>
            </td>
          </tr>

          <!-- Event Details Table -->
          <tr>
            <td style="padding: 10px 35px 25px 35px;">
              <h2 style="font-size: 14px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; color: #94a3b8; margin: 15px 0 15px 0;">
                🎪 Ficha del Evento
              </h2>

              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; font-size: 14px;">
                <tr style="border-bottom: 1px solid #1f293d;">
                  <td style="padding: 12px 10px; color: #94a3b8; width: 40%;">Productora / Organizador</td>
                  <td style="padding: 12px 10px; color: #ffffff; font-weight: 600;">${productora}</td>
                </tr>
                <tr style="border-bottom: 1px solid #1f293d;">
                  <td style="padding: 12px 10px; color: #94a3b8;">Ciudad / Provincia</td>
                  <td style="padding: 12px 10px; color: #ffffff; font-weight: 600;">${ciudad}</td>
                </tr>
                <tr style="border-bottom: 1px solid #1f293d;">
                  <td style="padding: 12px 10px; color: #94a3b8;">Nombre del Evento</td>
                  <td style="padding: 12px 10px; color: #22c55e; font-weight: 700;">${evento}</td>
                </tr>
                <tr style="border-bottom: 1px solid #1f293d;">
                  <td style="padding: 12px 10px; color: #94a3b8;">Fecha</td>
                  <td style="padding: 12px 10px; color: #ffffff; font-weight: 600;">${fecha}</td>
                </tr>
                <tr style="border-bottom: 1px solid #1f293d;">
                  <td style="padding: 12px 10px; color: #94a3b8;">Horario</td>
                  <td style="padding: 12px 10px; color: #ffffff; font-weight: 600;">${apertura} - ${cierre}</td>
                </tr>
                <tr style="border-bottom: 1px solid #1f293d;">
                  <td style="padding: 12px 10px; color: #94a3b8;">Locación</td>
                  <td style="padding: 12px 10px; color: #ffffff; font-weight: 600;">${locacion}</td>
                </tr>
                <tr style="border-bottom: 1px solid #1f293d;">
                  <td style="padding: 12px 10px; color: #94a3b8;">Asistentes Estimados</td>
                  <td style="padding: 12px 10px; color: #ffffff; font-weight: 600;">${asistentes}</td>
                </tr>
                <tr style="border-bottom: 1px solid #1f293d;">
                  <td style="padding: 12px 10px; color: #94a3b8;">Sistema de Salud</td>
                  <td style="padding: 12px 10px; color: #ffffff; font-weight: 600;">${sistemaSalud}</td>
                </tr>
                <tr style="border-bottom: 1px solid #1f293d;">
                  <td style="padding: 12px 10px; color: #94a3b8;">Puestos de Hidratación</td>
                  <td style="padding: 12px 10px; color: #ffffff; font-weight: 600;">${hidratacion}</td>
                </tr>
              </table>

              <!-- Extra info -->
              <div style="margin-top: 25px; background-color: #0b0f19; border: 1px solid #1f293d; border-radius: 12px; padding: 18px;">
                <span style="font-size: 11px; font-weight: 800; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px;">
                  📝 Información Adicional / Comentarios
                </span>
                <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #cbd5e1; white-space: pre-wrap;">${infoExtra}</p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 20px 35px; background-color: #0b0f19; border-top: 1px solid #1f293d; text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #64748b;">
                Fundación Vuelo Controlado • Reducción de riesgos y daños en espacios de ocio
              </p>
              <p style="margin: 6px 0 0 0; font-size: 11px; color: #475569;">
                Para responder a esta consulta podés responder directamente a este correo.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

    // 6. Enviar el correo usando MailApp con replyTo configurado al remitente
    const emailOptions = {
      name: 'Web Vuelo Controlado',
      body: textBody,
      htmlBody: htmlBody
    };

    if (email && email.indexOf('@') !== -1) {
      emailOptions.replyTo = email;
    }

    MailApp.sendEmail(
      recipient,
      'Nuevo Pedido de Presupuesto: ' + evento + ' (' + productora + ')',
      textBody,
      emailOptions
    );

    // 7. Retornar respuesta exitosa
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success', message: 'Pedido recibido correctamente' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Función para probar el envío del correo desde el editor de Apps Script
 */
function testEmail() {
  const dummyEvent = {
    parameter: {
      nombre: 'Leonardo Benveniste',
      telefono: '+54 9 261 555-1234',
      email: 'produccion@vuelocontrolado.org',
      productora: 'Productora Test',
      ciudad: 'Mendoza',
      evento: 'Festival Lunar 2026',
      fecha: '2026-11-15',
      apertura: '22:00',
      cierre: '06:00',
      locacion: 'Espacio Cultural Al Aire Libre',
      asistentes: '1500 - 2500',
      sistema_salud: 'Ambulancia + Puesto Sanitario',
      hidratacion: 'yes',
      info_extra: 'Evento con música electrónica, queremos coordinar un puesto de hidratación y reducción de daños con el equipo de voluntarios.',
      target_email: 'produccion@vuelocontrolado.org'
    }
  };
  
  doPost(dummyEvent);
}
