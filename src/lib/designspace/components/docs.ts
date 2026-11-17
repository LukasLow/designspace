/**
 * Doku-Quelle für /components. Eine Datei pro Komponente, mit Props, Zuständen
 * und Tastatur. Die Vorschau benutzt dieselben Komponenten.
 */

export interface ComponentDoc {
  slug: string;
  name: string;
  description: string;
  props: string[];
  states: string[];
  keyboard: string;
  source: string;
}

export const docs: ComponentDoc[] = [
  {
    slug: 'button',
    name: 'Button',
    description: 'Fläche in der Rollenfarbe, Radius 18, Druck senkrecht. Für eine Aktion pro Abschnitt.',
    props: ['variant: primary | secondary | ghost | danger', 'physics: feder | taste', 'href?: string', 'disabled?: boolean'],
    states: ['Standard', 'Hover', 'Aktiv (Druck)', 'Fokus', 'Disabled'],
    keyboard: 'Tab fokussiert, Leertaste drückt. Fokus 3 px weiß.',
    source: 'src/lib/components/Button.svelte'
  },
  {
    slug: 'card',
    name: 'Card',
    description: 'Fläche für einen Inhalt, Radius 22, Haarlinie. Kein Schatten.',
    props: ['padding: none | sm | md | lg'],
    states: ['Standard', 'mit Innenabstand sm/md/lg'],
    keyboard: 'Kein Fokus, solange die Karte nicht interaktiv ist.',
    source: 'src/lib/components/Card.svelte'
  },
  {
    slug: 'field',
    name: 'Field',
    description: 'Eingabe mit Label, Hinweis oder Fehler. Fokus als 3-px-Petrol-Ring.',
    props: ['label, id, type, value, placeholder, hint, error'],
    states: ['Leer', 'gefüllt', 'mit Hinweis', 'mit Fehler', 'Fokus'],
    keyboard: 'Tab in das Feld, Fehler bleibt sichtbar bis zur Korrektur.',
    source: 'src/lib/components/Field.svelte'
  },
  {
    slug: 'chip',
    name: 'Chip',
    description: 'Kurze Bedeutung als getönte Fläche. Fläche 10 % der Rollenfarbe, Schrift farbig.',
    props: ['tone: neutral | brand | info | success | category | warning | danger'],
    states: ['Standard', 'alle sieben Töne'],
    keyboard: 'Kein Fokus, wenn der Chip nicht klickbar ist.',
    source: 'src/lib/components/Chip.svelte'
  },
  {
    slug: 'avatar',
    name: 'Avatar',
    description: 'Initialen oder Bild. Drei Größen, Petrol-Ring für Menschen.',
    props: ['name, src?, size: sm | md | lg, tone: brand | neutral'],
    states: ['sm 32', 'md 48', 'lg 72', 'mit Bild'],
    keyboard: 'aria-label mit dem Namen, kein Fokus.',
    source: 'src/lib/components/Avatar.svelte'
  },
  {
    slug: 'switch',
    name: 'Switch',
    description: 'Ein/Aus mit 48-px-Ziel. Petrol wenn an, Knopf in Schwarz.',
    props: ['checked, label, id, disabled'],
    states: ['aus', 'an', 'disabled'],
    keyboard: 'Leertaste schaltet, Fokusring um die Leiste.',
    source: 'src/lib/components/Switch.svelte'
  },
  {
    slug: 'checkbox',
    name: 'Checkbox',
    description: 'Kasten 24 px, Haken in Schwarz auf Petrol. Ziel 48 px.',
    props: ['checked, label, id, disabled'],
    states: ['aus', 'an', 'disabled'],
    keyboard: 'Leertaste schaltet, Fokusring um den Kasten.',
    source: 'src/lib/components/Checkbox.svelte'
  },
  {
    slug: 'separator',
    name: 'Separator',
    description: 'Haarlinie horizontal oder vertikal. Nur als Struktur, nie als Dekoration.',
    props: ['vertical?: boolean'],
    states: ['horizontal', 'vertikal'],
    keyboard: 'role="separator", keine Interaktion.',
    source: 'src/lib/components/Separator.svelte'
  }
];

export const docBySlug = (slug: string): ComponentDoc | undefined =>
  docs.find((doc) => doc.slug === slug);
