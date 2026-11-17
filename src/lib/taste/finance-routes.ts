/** Finance-Varianten (Runde 17). */

export type FinanceVariant =
  | 'onvista'
  | 'detail'
  | 'karten'
  | 'fokus'
  | 'liste'
  | 'karte'
  | 'tabs'
  | 'terminal'
  | 'mobil'
  | 'umbau';

export interface FinanceEntry {
  slug: string;
  variant: FinanceVariant;
  no: string;
  title: string;
  note: string;
  /** 'page' = volle Kurseite (Logo, Tabs, Tiefe), 'demo' = einfache Fläche. */
  component?: 'demo' | 'page';
}

export const financeEntries: FinanceEntry[] = [
  {
    slug: '01-onvista',
    variant: 'onvista',
    no: '01',
    title: 'OnVista',
    note: 'Chart über die volle Breite, Kennzahlen im 3×2-Raster, Meldungen darunter.'
  },
  {
    slug: '02-detail',
    variant: 'detail',
    no: '02',
    title: 'Detail',
    note: 'Chart links, rechts eine stehende Spalte mit Kennzahlen und Meldungen.'
  },
  {
    slug: '03-karten',
    variant: 'karten',
    no: '03',
    title: 'Karten',
    note: 'Chart und Kennzahlen als zwei Flächen nebeneinander.'
  },
  {
    slug: '04-fokus',
    variant: 'fokus',
    no: '04',
    title: 'Fokus',
    note: 'Ein großer Kurs, ein kleiner Chart, keine Meldungen. Ruhig und knapp.'
  },
  {
    slug: '05-liste',
    variant: 'liste',
    no: '05',
    title: 'Liste',
    note: 'Dichte Kennzahlen-Liste führt, kleiner Chart, dichte Meldungen.'
  },
  {
    slug: '06-karte',
    variant: 'karte',
    no: '06',
    title: 'Karte',
    note: 'Eine Karte ohne graue Fläche: Logo, Kurs, Chart und Kennzahlen; Meldungen rechts angedockt.',
    component: 'page'
  },
  {
    slug: '07-onvista',
    variant: 'onvista',
    no: '07',
    title: 'OnVista nah',
    note: 'Logo, Stammdaten, Tabs, Tagesspanne, Geld/Brief mit Kaufen und Verkaufen, Chart, Kennzahlen, Meldungen.',
    component: 'page'
  },
  {
    slug: '08-tabs',
    variant: 'tabs',
    no: '08',
    title: 'Tabs',
    note: 'Die Tabs führen: Übersicht, Chart, Kennzahlen, News. Chart links, Meldungen rechts.',
    component: 'page'
  },
  {
    slug: '09-terminal',
    variant: 'terminal',
    no: '09',
    title: 'Terminal',
    note: 'Dichte Kennzahlen-Tabelle, Chart links, Meldungen und Geld/Brief rechts.',
    component: 'page'
  },
  {
    slug: '10-mobil',
    variant: 'mobil',
    no: '10',
    title: 'Mobil',
    note: 'Schmale Spalte, Tabs als Chips, Kurs groß, alles gestapelt.',
    component: 'page'
  },
  {
    slug: '11-umbau',
    variant: 'umbau',
    no: '11',
    title: 'Umbau',
    note: 'Neue Ordnung: oben Info, Kaufen/Verkaufen und Kurs; darunter Tabs; dann Chart mit Tagesspanne; unten Kennzahlen und Meldungen.',
    component: 'page'
  }
];

export const financeBySlug = (slug: string): FinanceEntry | undefined =>
  financeEntries.find((entry) => entry.slug === slug);
