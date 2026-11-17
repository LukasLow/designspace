/** Werkzeuggruppen-Varianten (Runde 24). */

export type ToolbarVariant =
  | 'angedockt'
  | 'einzeln'
  | 'mit-text'
  | 'zwei-gruppen'
  | 'kanten'
  | 'kontext';

export interface ToolbarEntry {
  slug: string;
  variant: ToolbarVariant;
  no: string;
  title: string;
  note: string;
}

export const toolbarEntries: ToolbarEntry[] = [
  {
    slug: '01-angedockt',
    variant: 'angedockt',
    no: '01',
    title: 'Angedockt',
    note: 'Eine Gruppe: fünf Aktionen teilen sich Trennlinien, Radius nur außen.'
  },
  {
    slug: '02-einzeln',
    variant: 'einzeln',
    no: '02',
    title: 'Einzeln',
    note: 'Fünf einzelne Buttons mit Abstand — der heutige Stand.'
  },
  {
    slug: '03-mit-text',
    variant: 'mit-text',
    no: '03',
    title: 'Mit Text',
    note: 'Angedockt, aber jede Aktion mit Wort. Mehr Klarheit, mehr Breite.'
  },
  {
    slug: '04-zwei-gruppen',
    variant: 'zwei-gruppen',
    no: '04',
    title: 'Zwei Gruppen',
    note: 'Links Werkzeug, rechts Teilen und Weiterleiten — zwei Objekte.'
  },
  {
    slug: '05-kanten',
    variant: 'kanten',
    no: '05',
    title: 'Kanten',
    note: 'Angedockt mit 1-px-Fugen statt durchgehender Linien.'
  },
  {
    slug: '06-kontext',
    variant: 'kontext',
    no: '06',
    title: 'Kontext',
    note: 'Die Gruppen wechseln mit der Aufgabe: Postfach zeigt Werkzeug, Suche zeigt Filter und Auswahl.'
  }
];

export const toolbarBySlug = (slug: string): ToolbarEntry | undefined =>
  toolbarEntries.find((entry) => entry.slug === slug);
