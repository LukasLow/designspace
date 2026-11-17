/** Feed-Varianten (Runde 22). */

export type FeedVariant = 'zeilen' | 'karten' | 'raster' | 'fokus' | 'dicht';

export interface FeedEntry {
  slug: string;
  variant: FeedVariant;
  no: string;
  title: string;
  note: string;
}

export const feedEntries: FeedEntry[] = [
  {
    slug: '01-zeilen',
    variant: 'zeilen',
    no: '01',
    title: 'Zeilen',
    note: 'Beiträge als Zeilen mit Haarlinien, Aktionen darunter.'
  },
  {
    slug: '02-karten',
    variant: 'karten',
    no: '02',
    title: 'Karten',
    note: 'Jeder Beitrag eine Fläche mit Rahmen und Radius.'
  },
  {
    slug: '03-raster',
    variant: 'raster',
    no: '03',
    title: 'Raster',
    note: 'Zwei Spalten aus Karten, dichter Überblick.'
  },
  {
    slug: '04-fokus',
    variant: 'fokus',
    no: '04',
    title: 'Fokus',
    note: 'Ein Beitrag groß, der Rest ausgeblendet.'
  },
  {
    slug: '05-dicht',
    variant: 'dicht',
    no: '05',
    title: 'Dicht',
    note: 'Kompakte Zeilen, Aktionen rechts in der Zeile.'
  }
];

export const feedBySlug = (slug: string): FeedEntry | undefined =>
  feedEntries.find((entry) => entry.slug === slug);
