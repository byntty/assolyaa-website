export const STUDIO_EMAIL = "nurdaulet.bekzhan@gmail.com";

/** Build a mailto: link to the studio inbox — the site has no form backend yet. */
export function mailtoLink(subject: string, body: string) {
  return `mailto:${STUDIO_EMAIL}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}
