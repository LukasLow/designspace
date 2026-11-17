/** Chat-Varianten (Runde 19). */

export type ChatVariant = 'zeilen' | 'blasen' | 'karten' | 'geteilt' | 'fokus' | 'element';

export interface ChatEntry {
  slug: string;
  variant: ChatVariant;
  no: string;
  title: string;
  note: string;
}

export const chatEntries: ChatEntry[] = [
  {
    slug: '01-zeilen',
    variant: 'zeilen',
    no: '01',
    title: 'Zeilen',
    note: 'Nachrichten als Zeilen mit Avatar und Zeit. Composer als Leiste unten.'
  },
  {
    slug: '02-blasen',
    variant: 'blasen',
    no: '02',
    title: 'Blasen',
    note: 'Klassische Blasen links und rechts, Composer als Pille. Die iOS-Form.'
  },
  {
    slug: '03-karten',
    variant: 'karten',
    no: '03',
    title: 'Karten',
    note: 'Jede Nachricht eine eigene Karte, der Composer ebenfalls.'
  },
  {
    slug: '04-geteilt',
    variant: 'geteilt',
    no: '04',
    title: 'Geteilt',
    note: 'Konversationsliste links, Thread rechts. Der Chat als Arbeitsfläche.'
  },
  {
    slug: '05-fokus',
    variant: 'fokus',
    no: '05',
    title: 'Fokus',
    note: 'Eine Unterhaltung, große Schrift, wenige Icons, viel Luft.'
  },
  {
    slug: '06-element',
    variant: 'element',
    no: '06',
    title: 'Element X',
    note: 'Der Compound-Look: Gruppe im Kopf, ruhige Blasen mit großem Radius, Reaktionen, runde Eingabe.'
  }
];

export const chatBySlug = (slug: string): ChatEntry | undefined =>
  chatEntries.find((entry) => entry.slug === slug);
