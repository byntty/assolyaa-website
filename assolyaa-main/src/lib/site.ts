export const STUDIO_EMAIL = "nurdaulet.bekzhan@gmail.com";

/** Studio WhatsApp number in international format, without the leading plus. */
export const STUDIO_WHATSAPP = "77770011686";

/** Build a wa.me link that opens WhatsApp with a ready-to-send message. */
export function whatsappLink(message: string) {
  return `https://wa.me/${STUDIO_WHATSAPP}?text=${encodeURIComponent(message)}`;
}

/** Build a mailto: link to the studio inbox — the site has no form backend yet. */
export function mailtoLink(subject: string, body: string) {
  return `mailto:${STUDIO_EMAIL}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}
