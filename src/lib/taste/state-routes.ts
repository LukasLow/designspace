/** Zustands-Varianten für Runde 14. */

export type StateVariant = 'inline' | 'band' | 'karte' | 'toast' | 'still';

export interface StateEntry {
  slug: string;
  variant: StateVariant;
  no: string;
  title: string;
  note: string;
}

export const stateEntries: StateEntry[] = [
  {
    slug: '01-inline',
    variant: 'inline',
    no: '01',
    title: 'Inline',
    note: 'Die Rückmeldung sitzt in der Zeile selbst: Fehlertext darunter, Erfolg als Chip. Nichts schwebt.'
  },
  {
    slug: '02-band',
    variant: 'band',
    no: '02',
    title: 'Band',
    note: 'Ein Band über der Liste fasst zusammen („1 Sendung fehlgeschlagen"), die Zeilen zeigen das Detail.'
  },
  {
    slug: '03-karte',
    variant: 'karte',
    no: '03',
    title: 'Karte',
    note: 'Der Zustand wird zur Karte mit Titel, Erklärung und Aktion. Mehr Platz, mehr Gewicht.'
  },
  {
    slug: '04-toast',
    variant: 'toast',
    no: '04',
    title: 'Toast',
    note: 'Kurze Rückmeldung schwebt unten rechts und verschwindet. Die Liste bleibt ruhig.'
  },
  {
    slug: '05-still',
    variant: 'still',
    no: '05',
    title: 'Still',
    note: 'Keine zusätzliche Fläche: Punkt, Wort, fertig. Am leisesten, am schwersten zu übersehen.'
  }
];

export const stateBySlug = (slug: string): StateEntry | undefined =>
  stateEntries.find((entry) => entry.slug === slug);
