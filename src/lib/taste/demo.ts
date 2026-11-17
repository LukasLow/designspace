/**
 * Gemeinsame Daten für alle Taste-Screens.
 *
 * Wichtig: Alle fünf Richtungen zeigen exakt denselben Inhalt. Sonst
 * vergleicht man Text statt Form.
 */

export const account = {
  name: 'Lena Hoffmann',
  email: 'lena.hoffmann@example.com',
  plan: 'Pro',
  memberSince: '2024',
  initials: 'LH'
};

export const sections = ['Profil', 'Sicherheit', 'Benachrichtigungen', 'Abrechnung', 'Geräte'];

export const devices = [
  { name: 'MacBook Pro', place: 'Berlin', last: 'vor 2 Minuten', active: true },
  { name: 'iPhone 15', place: 'Berlin', last: 'vor 1 Stunde', active: true },
  { name: 'iPad Air', place: 'Hamburg', last: 'vor 12 Tagen', active: false }
];

export const events = [
  { label: 'Passwort geändert', date: '12. November 2026', tone: 'ok' as const },
  { label: 'Neues Gerät angemeldet', date: '3. November 2026', tone: 'warn' as const },
  { label: 'Anmeldung fehlgeschlagen', date: '28. Oktober 2026', tone: 'danger' as const }
];

export const sessions = [
  { label: 'Diese Woche', value: 14 },
  { label: 'Letzte Woche', value: 9 },
  { label: 'Oktober', value: 21 }
];
