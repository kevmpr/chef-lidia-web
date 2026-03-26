/**
 * WhatsApp utility function to generate wa.me links with pre-filled messages
 * Supports both B2C (individual customers) and B2B (corporate inquiries)
 */

export type WhatsAppLinkType = 'b2c' | 'b2b';

const WHATSAPP_PHONE = '5491128240324'; // +54 9 11 2824-0324

const MESSAGES: Record<WhatsAppLinkType, string> = {
  b2c: 'Hola Lidia! Vi la web y me gustaría consultar por el menú del día.',
  b2b: 'Hola! Soy de [Empresa] en Parque Patricios. Me interesa el servicio de viandas corporativas. ¿Podrían enviarme información sobre precios y logística?',
};

/**
 * Generates a WhatsApp link with pre-filled message
 * @param type - 'b2c' for individual customers, 'b2b' for corporate inquiries
 * @returns Complete wa.me URL with URL-encoded message
 */
export function generateWhatsAppLink(type: WhatsAppLinkType): string {
  const message = MESSAGES[type];
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`;
}
