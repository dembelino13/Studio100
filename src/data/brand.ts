// Studio100-Design der Marketing-Seite (www.studio-100.de) als gemeinsame Werte.
// GLEICHE DATEI in beiden Repos: studio-100/lib/brand.ts  <->  Studio100 website/src/data/brand.ts
// Bei Änderungen beide Dateien gleich halten. Die Werte entsprechen den Tailwind-Klassen der Marketing-Seite
// (neutral-*, blue-600, rounded-full/-xl/-3xl, Inter). Rein (keine Imports), damit beide Projekte sie nutzen können.

export const brand = {
  color: {
    bg: "#FFFFFF",
    bgSoft: "#FAFAFA", // neutral-50
    surface: "#FFFFFF",
    border: "#E5E5E5", // neutral-200
    borderStrong: "#D4D4D4", // neutral-300
    text: "#171717", // neutral-900
    textMut: "#525252", // neutral-600
    textFaint: "#737373", // neutral-500
    dark: "#0A0A0A", // neutral-950 (Fusszeile)
    darkLine: "#171717", // neutral-900
    darkText: "#A3A3A3", // neutral-400
    accent: "#2563EB", // blue-600
    accentSoft: "#EFF6FF", // blue-50
    ok: "#16A34A", // green-600
    okSoft: "#F0FDF4",
    danger: "#DC2626", // red-600
    dangerSoft: "#FEF2F2",
  },
  font: {
    sans: '"Inter", system-ui, -apple-system, "Segoe UI", sans-serif',
    googleCss: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
  },
  radius: { input: 12, card: 24, pill: 999, logo: 8 },
  shadow: { card: "0 1px 2px rgba(0,0,0,.04), 0 8px 24px rgba(0,0,0,.05)", button: "0 10px 15px -3px rgba(23,23,23,.10)" },
  maxWidth: 1280, // max-w-7xl
  gutter: "clamp(1rem, 4vw, 2.5rem)", // px-4 sm:px-6 lg:px-10
  marke: "Studio100",
  website: "https://www.studio-100.de",
  links: {
    impressum: "https://www.studio-100.de/impressum",
    datenschutz: "https://www.studio-100.de/datenschutz",
    digitalCheck: "https://check.studio-100.de/digital-check",
    kundenportal: "https://check.studio-100.de/kunden/login",
    email: "demian@studio-100.de",
  },
  firma: { name: "Rosiello Solutions GmbH", strasse: "Gotthardstrasse 14", plzOrt: "6300 Zug", markenZusatz: "Studio100 ist eine Marke der Rosiello Solutions" },
  claim: "Websites für Handwerksbetriebe, die Aufträge und Fachkräfte bringen – gebaut von einem Elektriker.",
} as const;

const c = brand.color;

/** Primärer Knopf (bg-neutral-900, rounded-full) */
export const btnPrimary = {
  display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
  background: c.text, color: "#FFFFFF", border: "none", borderRadius: brand.radius.pill,
  padding: "0.95rem 1.75rem", fontSize: "0.95rem", fontWeight: 500, fontFamily: "inherit",
  cursor: "pointer", textDecoration: "none", boxShadow: brand.shadow.button,
} as const;

/** Zweiter Knopf (weiss mit Rahmen, rounded-full) */
export const btnSecondary = {
  ...btnPrimary, background: "#FFFFFF", color: c.text, border: `1px solid ${c.border}`, boxShadow: "none",
} as const;

/** Eingabefeld (rounded-xl, neutral-200). fontSize >= 16px: kein Auto-Zoom auf dem iPhone. */
export const input = {
  width: "100%", boxSizing: "border-box", background: "#FFFFFF", color: c.text,
  border: `1px solid ${c.border}`, borderRadius: brand.radius.input, padding: "0.85rem 1rem",
  fontSize: "1rem", fontFamily: "inherit", outline: "none",
} as const;

/** Feldbeschriftung (klein, mittel) */
export const label = { display: "block", fontSize: "0.8rem", fontWeight: 500, color: c.textMut, marginBottom: "0.4rem" } as const;

/** Karte (weiss, rounded-3xl, neutral-200) */
export const cardStyle = {
  background: c.surface, border: `1px solid ${c.border}`, borderRadius: brand.radius.card,
  padding: "clamp(1.25rem, 4vw, 2.25rem)", boxShadow: brand.shadow.card,
} as const;

/** Kleiner Titel über Überschriften (text-xs, blue-600, uppercase, tracking 0.2em) */
export const eyebrow = { color: c.accent, fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase" } as const;

/** Überschrift (semibold, tracking-tight) */
export const heading = { color: c.text, fontWeight: 600, letterSpacing: "-0.025em", lineHeight: 1.1 } as const;
