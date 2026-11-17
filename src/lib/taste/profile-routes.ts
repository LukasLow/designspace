/** Social-Profile-Varianten (Runde 15). */

export type ProfileVariant = 'twitter' | 'ruhig' | 'editorial' | 'dicht' | 'karte';

export interface ProfileEntry {
  slug: string;
  variant: ProfileVariant;
  no: string;
  title: string;
  note: string;
}

export const profileEntries: ProfileEntry[] = [
  {
    slug: '01-twitter',
    variant: 'twitter',
    no: '01',
    title: 'Twitter-nah',
    note: 'Titelbild, Avatar überlappend, Name darunter, Kennzahlen als Zeile. Die Aktionen sitzen rechts.'
  },
  {
    slug: '02-ruhig',
    variant: 'ruhig',
    no: '02',
    title: 'Ruhig',
    note: 'Kein Titelbild. Avatar links, Name 32 px, Kennzahlen als Zeilen. Viel Weißraum.'
  },
  {
    slug: '03-editorial',
    variant: 'editorial',
    no: '03',
    title: 'Editorial',
    note: 'Großes Porträt, Name 44 px, Bio als Lead. Die Seite beginnt mit dem Menschen.'
  },
  {
    slug: '04-dicht',
    variant: 'dicht',
    no: '04',
    title: 'Dicht',
    note: 'Kompakter Kopf, Kennzahlen als Chips, Beiträge als dichte Zeilen.'
  },
  {
    slug: '05-karte',
    variant: 'karte',
    no: '05',
    title: 'Karte',
    note: 'Das Profil ist eine schwebende Karte auf Schwarz, Aktionen als volle Breite.'
  }
];

export const profileBySlug = (slug: string): ProfileEntry | undefined =>
  profileEntries.find((entry) => entry.slug === slug);
