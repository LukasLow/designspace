/** Registrierungs-Varianten (Runde 20). */

export type RegisterVariant = 'geteilt' | 'karte' | 'schritte' | 'blatt' | 'kompakt';

export interface RegisterEntry {
  slug: string;
  variant: RegisterVariant;
  no: string;
  title: string;
  note: string;
}

export const registerEntries: RegisterEntry[] = [
  {
    slug: '01-geteilt',
    variant: 'geteilt',
    no: '01',
    title: 'Geteilt',
    note: 'Links Marke als Hälfte, rechts das Formular — wie beim Login.'
  },
  {
    slug: '02-karte',
    variant: 'karte',
    no: '02',
    title: 'Karte',
    note: 'Eine Karte 460 px, alle drei Felder auf einmal, ein Knopf.'
  },
  {
    slug: '03-schritte',
    variant: 'schritte',
    no: '03',
    title: 'Schritte',
    note: 'Zwei Schritte mit Fortschritt oben: erst Daten, dann Passwort.'
  },
  {
    slug: '04-blatt',
    variant: 'blatt',
    no: '04',
    title: 'Blatt',
    note: 'Kein Rahmen, 400 px, Logo oben. Nur Felder und ein Satz.'
  },
  {
    slug: '05-kompakt',
    variant: 'kompakt',
    no: '05',
    title: 'Kompakt',
    note: '360 px, kein Logo, kleine Überschrift, dicht.'
  }
];

export const registerBySlug = (slug: string): RegisterEntry | undefined =>
  registerEntries.find((entry) => entry.slug === slug);
