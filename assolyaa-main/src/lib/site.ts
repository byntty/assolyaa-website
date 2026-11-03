export const STUDIO_EMAIL = "nurdaulet.bekzhan@gmail.com";

/** Studio WhatsApp number in international format, without the leading plus. */
export const STUDIO_WHATSAPP = "77770011686";

/** Build a wa.me link that opens WhatsApp with a ready-to-send message. */
export function whatsappLink(message: string) {
  return `https://wa.me/${STUDIO_WHATSAPP}?text=${encodeURIComponent(message)}`;
}

/** Official profiles — single source of truth for Footer and Contact.
 *  (YouTube has no verified channel of her own; @assolyaa there belongs to an
 *  unrelated account, so the link searches her name instead.) */
export const socialLinks = [
  {
    label: "Instagram",
    url: "https://www.instagram.com/assolyaa/",
    handle: "@assolyaa",
  },
  { label: "TikTok", url: "https://www.tiktok.com/@assolyaa", handle: "@assolyaa" },
  {
    label: "YouTube",
    url: "https://www.youtube.com/results?search_query=assolyaa",
    handle: "Assolyaa",
  },
];

/** Build a mailto: link to the studio inbox — the site has no form backend yet. */
export function mailtoLink(subject: string, body: string) {
  return `mailto:${STUDIO_EMAIL}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}
