import type { DensityVariant } from './density-variants';

/** Eine Route pro Dichte, damit jede einzeln und groß angesehen werden kann. */

export interface DensityEntry {
  slug: string;
  variant: DensityVariant;
  no: string;
  title: string;
  note: string;
}

export const densityEntries: DensityEntry[] = [
  {
    slug: '01-kompakt',
    variant: 'kompakt',
    no: '01',
    title: 'Kompakt',
    note: '40 px Zeilenhöhe, 16 px vor der Liste. Viel Inhalt pro Bildschirm — Richtung Gmail und Zoho.'
  },
  {
    slug: '02-normal',
    variant: 'normal',
    no: '02',
    title: 'Normal',
    note: '56 px Zeilenhöhe, 28 px vor der Liste. Der ruhige Standard.'
  },
  {
    slug: '03-luftig',
    variant: 'luftig',
    no: '03',
    title: 'Luftig',
    note: '72 px Zeilenhöhe, 40 px vor der Liste. Weniger pro Bildschirm, klarer zu treffen.'
  },
  {
    slug: '04-gemischt',
    variant: 'gemischt',
    no: '04',
    title: 'Gemischt',
    note: 'Enge Zeilen (38 px), weite Abschnitte (44 px). Dichte Liste mit klaren Kapiteln.'
  },
  {
    slug: '05-grob',
    variant: 'grob',
    no: '05',
    title: 'Grob',
    note: '84 px Zeilenhöhe, größere Schrift. Für Berührung und schlechte Augen.'
  }
];

export const densityBySlug = (slug: string): DensityEntry | undefined =>
  densityEntries.find((entry) => entry.slug === slug);
