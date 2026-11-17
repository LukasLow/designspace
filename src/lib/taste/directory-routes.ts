/** Verzeichnis-Varianten (Runde 23). */

export type DirectoryVariant =
  | 'zeilen'
  | 'karten'
  | 'tabelle'
  | 'fokus'
  | 'kompakt'
  | 'umschalter';

export interface DirectoryEntry {
  slug: string;
  variant: DirectoryVariant;
  no: string;
  title: string;
  note: string;
}

export const directoryEntries: DirectoryEntry[] = [
  {
    slug: '01-zeilen',
    variant: 'zeilen',
    no: '01',
    title: 'Zeilen',
    note: 'Dichte Zeilen mit Avatar, Rolle und Folgen-Knopf.'
  },
  {
    slug: '02-karten',
    variant: 'karten',
    no: '02',
    title: 'Karten',
    note: 'Raster aus Personenkarten mit Avatar, Rolle und Aktion.'
  },
  {
    slug: '03-tabelle',
    variant: 'tabelle',
    no: '03',
    title: 'Tabelle',
    note: 'Spalten: Name, Rolle, Ort, Status. Für Verwaltung, nicht für Menschen.'
  },
  {
    slug: '04-fokus',
    variant: 'fokus',
    no: '04',
    title: 'Fokus',
    note: 'Eine Person groß, der Rest als Liste. Der Einstieg über einen Menschen.'
  },
  {
    slug: '05-kompakt',
    variant: 'kompakt',
    no: '05',
    title: 'Kompakt',
    note: 'Kontaktliste ohne Avatare, sehr dicht, Status als Punkt.'
  },
  {
    slug: '06-umschalter',
    variant: 'umschalter',
    no: '06',
    title: 'Umschalter',
    note: 'Zeilen und Karten in einer Ansicht: ein Umschalter wechselt zwischen Liste und Raster.'
  }
];

export const directoryBySlug = (slug: string): DirectoryEntry | undefined =>
  directoryEntries.find((entry) => entry.slug === slug);
