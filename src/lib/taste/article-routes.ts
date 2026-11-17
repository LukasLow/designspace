/** Artikel-Varianten (Runde 16). */

export type ArticleVariant =
  | 'klassisch'
  | 'buch'
  | 'zwei-spalten'
  | 'fliessend'
  | 'dicht'
  | 'kombi'
  | 'dreispaltig';

export interface ArticleEntry {
  slug: string;
  variant: ArticleVariant;
  no: string;
  title: string;
  note: string;
}

export const articleEntries: ArticleEntry[] = [
  {
    slug: '01-klassisch',
    variant: 'klassisch',
    no: '01',
    title: 'Klassisch',
    note: 'Inhaltsverzeichnis links stehend, Text 62 Zeichen breit, Infobox im Fluss.'
  },
  {
    slug: '02-buch',
    variant: 'buch',
    no: '02',
    title: 'Buch',
    note: 'Eine Spalte mit 45 Zeichen, kein Inhaltsverzeichnis, Kapitelnummern vor den Abschnitten.'
  },
  {
    slug: '03-zwei-spalten',
    variant: 'zwei-spalten',
    no: '03',
    title: 'Zwei Spalten',
    note: 'Text links, rechts eine stehende Spalte mit Inhalt und Fakten.'
  },
  {
    slug: '04-fliessend',
    variant: 'fliessend',
    no: '04',
    title: 'Fließend',
    note: 'Volle 720 px, das Inhaltsverzeichnis als Karte oben, keine Randspalte.'
  },
  {
    slug: '05-dicht',
    variant: 'dicht',
    no: '05',
    title: 'Dicht',
    note: '720 px, Inhaltsverzeichnis als Chip-Zeile, dichte Tabelle, kurze Absätze.'
  },
  {
    slug: '06-kombi',
    variant: 'kombi',
    no: '06',
    title: 'Kombi',
    note: 'Die Antworten zusammengeführt: 45 Zeichen Text, Inhalt rechts stehend, Tabelle und Fakten im Fluss.'
  },
  {
    slug: '07-dreispaltig',
    variant: 'dreispaltig',
    no: '07',
    title: 'Dreispaltig',
    note: 'Inhalt in der Mitte, Inhalt links, Fakten rechts. Die ganze Fläche breiter, der Text bleibt schmal.'
  }
];

export const articleBySlug = (slug: string): ArticleEntry | undefined =>
  articleEntries.find((entry) => entry.slug === slug);
