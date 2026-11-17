/** Landing-Varianten (Runde 21). */

export type LandingVariant =
  | 'zentriert'
  | 'geteilt'
  | 'editorial'
  | 'bento'
  | 'ruhig'
  | 'bento-mitte';

export interface LandingEntry {
  slug: string;
  variant: LandingVariant;
  no: string;
  title: string;
  note: string;
}

export const landingEntries: LandingEntry[] = [
  {
    slug: '01-zentriert',
    variant: 'zentriert',
    no: '01',
    title: 'Zentriert',
    note: 'Hero mittig, Visual darunter, drei Spalten mit Eigenschaften.'
  },
  {
    slug: '02-geteilt',
    variant: 'geteilt',
    no: '02',
    title: 'Geteilt',
    note: 'Hero links, Visual rechts, Eigenschaften darunter. Zwei Spalten wie im Login.'
  },
  {
    slug: '03-editorial',
    variant: 'editorial',
    no: '03',
    title: 'Editorial',
    note: 'Riesen-Typo, eine Spalte, Eigenschaften als Nummernliste.'
  },
  {
    slug: '04-bento',
    variant: 'bento',
    no: '04',
    title: 'Bento',
    note: 'Hero oben, Eigenschaften als Raster aus Flächen.'
  },
  {
    slug: '05-ruhig',
    variant: 'ruhig',
    no: '05',
    title: 'Ruhig',
    note: 'Kleiner Hero, dichte Liste, wenig Bühne. Die Marke tritt zurück.'
  },
  {
    slug: '06-bento-mitte',
    variant: 'bento-mitte',
    no: '06',
    title: 'Bento mittig',
    note: 'Bento-Raster mit mittigem Hero — die Bühne von 01, die Flächen von 04.'
  }
];

export const landingBySlug = (slug: string): LandingEntry | undefined =>
  landingEntries.find((entry) => entry.slug === slug);
