/** Login-Varianten (Runde 18). */

export type LoginVariant = 'karte' | 'zwei-spalten' | 'blatt' | 'geteilt' | 'kompakt';

export interface LoginEntry {
  slug: string;
  variant: LoginVariant;
  no: string;
  title: string;
  note: string;
}

export const loginEntries: LoginEntry[] = [
  {
    slug: '01-karte',
    variant: 'karte',
    no: '01',
    title: 'Karte',
    note: 'Eine Karte von 440 px, Logo mittig, Felder, Anmelden, Registrieren.'
  },
  {
    slug: '02-zwei-spalten',
    variant: 'zwei-spalten',
    no: '02',
    title: 'Zwei Spalten',
    note: 'Links der Anspruch, rechts das Formular. Die Marke bekommt Raum.'
  },
  {
    slug: '03-blatt',
    variant: 'blatt',
    no: '03',
    title: 'Blatt',
    note: 'Kein Rahmen, 380 px, Logo oben. Nur Felder und ein Satz.'
  },
  {
    slug: '04-geteilt',
    variant: 'geteilt',
    no: '04',
    title: 'Geteilt',
    note: 'Volle Höhe: links eine Fläche mit Korn und Anspruch, rechts das Formular.'
  },
  {
    slug: '05-kompakt',
    variant: 'kompakt',
    no: '05',
    title: 'Kompakt',
    note: '340 px, kein Logo, kleine Überschrift, dicht. Für Werkzeuge, nicht für Marken.'
  }
];

export const loginBySlug = (slug: string): LoginEntry | undefined =>
  loginEntries.find((entry) => entry.slug === slug);
