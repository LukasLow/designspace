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
  },
  {
    slug: 'spinner',
    name: 'Spinner',
    description:
      'Ladeanzeige als Ring in Petrol. Drei Größen, role="status". Ohne Bewegung unter prefers-reduced-motion.',
    props: ['size: sm | md | lg', 'label?: string'],
    states: ['sm 24', 'md 32', 'lg 48', 'reduziert: stehender Ring'],
    keyboard: 'Kein Fokus. role="status" mit aria-label meldet den Zustand.',
    source: 'src/lib/designspace/components/Spinner.svelte'
  },
  {
    slug: 'slider',
    name: 'Slider',
    description:
      'Regler mit 48-px-Ziel, Petrol-Füllung und Wertanzeige. Fehler wechselt die Füllung auf Rot.',
    props: [
      'label, id, value, min, max, step',
      'unit?, hint?, error?, disabled?'
    ],
    states: ['Standard', 'Hover', 'Fokus', 'Aktiv (Druck)', 'Disabled', 'Fehler'],
    keyboard: 'Tab fokussiert den Regler. Pfeiltasten ändern den Wert, Home und End springen an die Grenzen.',
    source: 'src/lib/designspace/components/Slider.svelte'
  },
  {
    slug: 'skeleton',
    name: 'Skeleton',
    description:
      'Platzhalter mit feinem Korn statt Schimmer. Eine Fläche oder ein Absatz aus Zeilen, ohne Bewegung.',
    props: ['width?, height?, radius: sm | md | control | lg | pill', 'lines?: number', 'label?: string'],
    states: ['Zeile', 'Absatz aus drei Zeilen', 'Block', 'Karte'],
    keyboard: 'Keine Interaktion. Ohne Label aria-hidden, mit Label role="status".',
    source: 'src/lib/designspace/components/Skeleton.svelte'
  },
  {
    slug: 'toast',
    name: 'Toast',
    description:
      'Kurze Rückmeldung unten rechts, verschwindet nach fünf Sekunden. Rolle steuert Farbe und aria-live.',
    props: [
      'open, tone: info | success | warning | danger',
      'title, message?, duration?, inline?, dismissible?, action?'
    ],
    states: ['Info', 'Erfolg', 'Warnung', 'Fehler', 'inline', 'geschlossen'],
    keyboard: 'Schließen ist ein 48-px-Knopf: Tab fokussiert, Enter oder Leertaste schließt.',
    source: 'src/lib/designspace/components/Toast.svelte'
  },
  {
    slug: 'dialog',
    name: 'Dialog',
    description:
      'Karte in der Mitte mit Scrim. Natives <dialog>, Fokus bleibt im Fenster, Escape und Scrim-Klick schließen.',
    props: ['open, id?, title, description?', 'children, footer?, onclose?'],
    states: ['geschlossen', 'offen', 'Fokus im Dialog', 'Escape', 'Scrim-Klick'],
    keyboard: 'Escape schließt. Tab läuft im Dialog, der Fokus kehrt zum Auslöser zurück.',
    source: 'src/lib/designspace/components/Dialog.svelte'
  },
  {
    slug: 'cookie-banner',
    name: 'CookieBanner',
    description:
      'Einwilligung als Region, nicht als Blocker. Akzeptieren und Ablehnen sind gleich große Handlungen.',
    props: [
      'open, title?, description?',
      'acceptLabel?, declineLabel?, settingsHref?, inline?',
      'onaccept?, ondecline?'
    ],
    states: ['offen', 'inline', 'akzeptiert', 'abgelehnt', 'mit Einstellungen-Link'],
    keyboard: 'Tab erreicht beide 48-px-Knöpfe und den Einstellungen-Link. Enter oder Leertaste wählt.',
    source: 'src/lib/designspace/components/CookieBanner.svelte'
  },
  {
    slug: 'tooltip',
    name: 'Tooltip',
    description:
      'Kurzer Hinweis bei Hover und Fokus. Keine Interaktion, der Trigger bleibt das einzige Ziel.',
    props: ['id, label, placement: top | bottom | left | right', 'open?, children'],
    states: ['oben', 'unten', 'links', 'rechts', 'Hover', 'Fokus', 'fest offen'],
    keyboard: 'Nur der Trigger ist fokussierbar; der Tooltip erscheint bei Fokus und verschwindet wieder.',
    source: 'src/lib/designspace/components/Tooltip.svelte'
  },
  {
    slug: 'tabs',
    name: 'Tabs',
    description:
      'Bereiche wechseln, aktiv ist eine gefüllte Petrol-Fläche statt eines Unterstrichs. Pfeiltasten wechseln.',
    props: ['id, items: { id, label }[]', 'value?, label?, panel?: Snippet'],
    states: ['aktiv', 'inaktiv', 'Hover', 'Fokus', 'Panel'],
    keyboard: 'Pfeil links/rechts wechselt, Home und End springen. Der Fokus folgt dem aktiven Tab.',
    source: 'src/lib/designspace/components/Tabs.svelte'
  }
];

export const docBySlug = (slug: string): ComponentDoc | undefined =>
  docs.find((doc) => doc.slug === slug);
