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
  },
  {
    slug: 'nav-rail',
    name: 'NavRail',
    description:
      'Schmale Leiste für viele Bereiche: Icon über Label, aktive Zeile in Petrol-Soft mit 3-px-Marke.',
    props: ['items: { id, label, icon }[]', 'value?, label?'],
    states: ['aktiv', 'inaktiv', 'Hover', 'Fokus', 'lange Liste'],
    keyboard: 'Pfeil hoch/runter wechselt, Home und End springen. Jede Zeile ist 48 px hoch.',
    source: 'src/lib/designspace/components/NavRail.svelte'
  },
  {
    slug: 'top-bar',
    name: 'TopBar',
    description:
      'Kopfleiste mit Marke, Navigation und Aktionen. Unter 640 px weicht die Navigation der mobilen Leiste.',
    props: ['brand?, home?, sticky?', 'nav?: Snippet, actions?: Snippet'],
    states: ['Standard', 'sticky', 'mit Aktionen', 'mobil ohne Navigation'],
    keyboard: 'Marke und Ziele sind normale Links mit 48-px-Ziel und 3-px-Fokusring.',
    source: 'src/lib/designspace/components/TopBar.svelte'
  },
  {
    slug: 'bottom-nav',
    name: 'BottomNav',
    description:
      'Mobile Hauptnavigation am unteren Rand. Aktiver Bereich über 3-px-Kante und Petrol.',
    props: ['items: { id, label, icon }[]', 'value?, label?, fixed?'],
    states: ['aktiv', 'inaktiv', 'Hover', 'Fokus', 'fixed'],
    keyboard: 'Tab erreicht jede Fläche; jede ist mindestens 48 px hoch.',
    source: 'src/lib/designspace/components/BottomNav.svelte'
  },
  {
    slug: 'footer-nav',
    name: 'FooterNav',
    description:
      'Fußnavigation mit Gruppen, sekundären Zielen und Rechtstext. Ziele bleiben 48 px hoch.',
    props: ['groups: { title, links }[]', 'legal?, note?: Snippet'],
    states: ['drei Gruppen', 'mit Hinweis', 'nur Rechtstext'],
    keyboard: 'Alle Ziele sind Links mit sichtbarem 3-px-Fokus.',
    source: 'src/lib/designspace/components/FooterNav.svelte'
  },
  {
    slug: 'status-bar',
    name: 'StatusBar',
    description:
      'Statusleiste am Rand: Zustand, Auswahl und Werte in Mono. Farbe nur für die Rolle des Werts.',
    props: ['items: { label, value?, tone? }[]', 'label?'],
    states: ['neutral', 'Info', 'Erfolg', 'Warnung', 'Fehler'],
    keyboard: 'Nicht interaktiv. Die Leiste meldet sich als role="status".',
    source: 'src/lib/designspace/components/StatusBar.svelte'
  },
  {
    slug: 'breadcrumb',
    name: 'Breadcrumb',
    description:
      'Pfad als Mono-Zeile mit Trennern. Die letzte Station trägt aria-current und ist kein Link.',
    props: ['items: { label, href? }[]', 'label?'],
    states: ['zwei Stufen', 'drei Stufen', 'langer Pfad mit Umbruch'],
    keyboard: 'Links sind per Tab erreichbar, die aktuelle Seite ist nicht fokussierbar.',
    source: 'src/lib/designspace/components/Breadcrumb.svelte'
  },
  {
    slug: 'page-header',
    name: 'PageHeader',
    description:
      'Hero eines Bereichs: Eyebrow, Titel, Beschreibung, Meta und Aktionen. Eine Entscheidung pro Kopf.',
    props: ['eyebrow?, title, description?, meta?, actions?: Snippet'],
    states: ['nur Titel', 'mit Beschreibung', 'mit Meta', 'mit Aktionen'],
    keyboard: 'Enthält keine eigenen Ziele; Aktionen bringen ihre Tastatur mit.',
    source: 'src/lib/designspace/components/PageHeader.svelte'
  },
  {
    slug: 'brand-lockup',
    name: 'BrandLockup',
    description:
      'Marke als Zeichen und Wortmarke, drei Größen. Das Zeichen trägt die Petrol-Fläche mit schwarzer Schrift.',
    props: ['name?, tagline?, href?, size: sm | md | lg'],
    states: ['sm', 'md', 'lg', 'mit Zusatz', 'als Link'],
    keyboard: 'Als Link fokussierbar mit 3-px-Ring; ohne href reine Auszeichnung.',
    source: 'src/lib/designspace/components/BrandLockup.svelte'
  },
  {
    slug: 'segmented',
    name: 'Segmented',
    description:
      'Drei bis fünf Optionen in einer Leiste. Die gewählte Option ist eine gefüllte Petrol-Fläche.',
    props: ['id, items: { id, label }[]', 'value?, label?'],
    states: ['links aktiv', 'Mitte aktiv', 'rechts aktiv', 'Hover', 'Fokus'],
    keyboard: 'Pfeiltasten wechseln, Home und End springen. role="radiogroup" mit einem Tab-Stopp.',
    source: 'src/lib/designspace/components/Segmented.svelte'
  },
  {
    slug: 'toolbar',
    name: 'Toolbar',
    description:
      'Reihe von Werkzeugen über einer Fläche. Aktives Werkzeug als getönte Petrol-Fläche, mobil nur Icons.',
    props: ['items: { id, label, icon }[]', 'value?, label?'],
    states: ['aktiv', 'inaktiv', 'Hover', 'Fokus', 'mobil mit Scroll'],
    keyboard: 'Pfeiltasten wandern durch die Werkzeuge, role="toolbar" mit einem Tab-Stopp.',
    source: 'src/lib/designspace/components/Toolbar.svelte'
  },
  {
    slug: 'search-field',
    name: 'SearchField',
    description:
      'Suchfeld mit Lupe, Löschen und optionaler Vorschlagsliste. Fokusring liegt um das ganze Feld.',
    props: ['id, label?, value?, placeholder?, hint?', 'suggestions?: string[], onselect?'],
    states: ['leer', 'gefüllt', 'mit Vorschlägen', 'mit Hinweis', 'Fokus'],
    keyboard: 'Tab erreicht Feld und Löschen; Vorschläge sind eigene 48-px-Ziele.',
    source: 'src/lib/designspace/components/SearchField.svelte'
  },
  {
    slug: 'stat',
    name: 'Stat',
    description: 'Kennzahl mit Label, Wert und Veränderung. Die Richtung trägt die Rolle, nicht die Zahl.',
    props: ['label, value', 'delta?, trend: up | down | flat', 'hint?'],
    states: ['ohne Veränderung', 'Anstieg', 'Rückgang', 'mit Hinweis'],
    keyboard: 'Nicht interaktiv, keine Fokusziele.',
    source: 'src/lib/designspace/components/Stat.svelte'
  },
  {
    slug: 'progress',
    name: 'Progress',
    description:
      'Balken mit Wert und Beschriftung. Unbestimmt nur, wenn die Dauer wirklich unbekannt ist.',
    props: ['value?, max?, label?, hint?', 'tone: brand | info | success | warning | danger', 'indeterminate?'],
    states: ['0 %', '40 %', '100 %', 'Warnung', 'Fehler', 'unbestimmt'],
    keyboard: 'Nicht fokussierbar; role="progressbar" meldet Wert und Grenzen.',
    source: 'src/lib/designspace/components/Progress.svelte'
  },
  {
    slug: 'progress-ring',
    name: 'ProgressRing',
    description: 'Anteil als geschlossener Ring mit Prozentwert in der Mitte, fünf Rollen.',
    props: ['value, size?, label?', 'tone: brand | info | success | warning | danger'],
    states: ['25 %', '60 %', '100 %', 'Fehler', 'reduziert ohne Übergang'],
    keyboard: 'Nicht fokussierbar; role="img" mit Prozentwert als Label.',
    source: 'src/lib/designspace/components/ProgressRing.svelte'
  },
  {
    slug: 'status-badge',
    name: 'StatusBadge',
    description:
      'Marke mit Rolle, Punkt und kurzem Text. Farbe als Fläche und Kante, nie nur als Textfarbe.',
    props: ['tone: neutral | brand | info | success | category | warning | danger', 'dot?, children'],
    states: ['alle sieben Rollen', 'mit Punkt', 'ohne Punkt'],
    keyboard: 'Kein Fokus, solange die Marke nicht klickbar ist.',
    source: 'src/lib/designspace/components/StatusBadge.svelte'
  },
  {
    slug: 'status-dot',
    name: 'StatusDot',
    description: 'Punkt mit Text für einen Zustand. Puls nur bei laufender Arbeit, nie als Dekoration.',
    props: ['label', 'tone: neutral | brand | info | success | warning | danger', 'pulse?'],
    states: ['neutral', 'Erfolg', 'Warnung', 'Fehler', 'pulsierend', 'reduziert ohne Puls'],
    keyboard: 'Nicht interaktiv.',
    source: 'src/lib/designspace/components/StatusDot.svelte'
  },
  {
    slug: 'empty-state',
    name: 'EmptyState',
    description:
      'Leerer Zustand mit einem Satz und einer Handlung. Keine Illustration, nur ein ruhiges Zeichen.',
    props: ['title, description?', 'icon?: IconName', 'action?: Snippet'],
    states: ['ohne Handlung', 'mit Handlung', 'anderes Zeichen'],
    keyboard: 'Enthält keine eigenen Ziele; die Handlung bringt ihre Tastatur mit.',
    source: 'src/lib/designspace/components/EmptyState.svelte'
  },
  {
    slug: 'inline-alert',
    name: 'InlineAlert',
    description:
      'Hinweis im Fluss mit Rolle, Zeichen und optionaler Aktion. Callout ist die ruhige, größere Form.',
    props: ['tone: info | success | warning | danger', 'title, variant: inline | callout', 'action?, children?'],
    states: ['Info', 'Erfolg', 'Warnung', 'Fehler', 'Callout'],
    keyboard: 'Die Aktion ist ein eigener Fokuspunkt; role="alert" nur bei Fehlern.',
    source: 'src/lib/designspace/components/InlineAlert.svelte'
  },
  {
    slug: 'kbd',
    name: 'Kbd',
    description: 'Tastenkürzel als Taste mit 3-px-Unterkante. Mehrere Tasten durch Plus getrennt.',
    props: ['keys: string[]', 'label?'],
    states: ['eine Taste', 'Kombination aus zwei', 'Kombination aus drei'],
    keyboard: 'Nicht fokussierbar; aria-label liest die Kombination vor.',
    source: 'src/lib/designspace/components/Kbd.svelte'
  },
  {
    slug: 'table',
    name: 'Table',
    description:
      'Datenzeilen mit Kopf und Sortierung. Ziffern in Mono, Haarlinien statt Rahmen pro Zelle.',
    props: ['columns: { key, label, align?, numeric? }[]', 'rows: { id, cells }[]', 'caption?, dense?, sortable?'],
    states: ['Standard', 'dicht', 'sortiert aufsteigend', 'sortiert absteigend', 'ohne Sortierung'],
    keyboard: 'Kopfzellen sind Knöpfe: Tab fokussiert, Enter sortiert und aria-sort meldet die Richtung.',
    source: 'src/lib/designspace/components/Table.svelte'
  },
  {
    slug: 'accordion',
    name: 'Accordion',
    description:
      'Aufklappbare Abschnitte, einer oder mehrere offen. Der Pfeil dreht senkrecht, nichts springt.',
    props: ['items: { id, title, content }[]', 'multiple?', 'open?: string[]'],
    states: ['geschlossen', 'offen', 'mehrere offen', 'Fokus'],
    keyboard: 'Enter oder Leertaste schaltet; aria-expanded und aria-controls verbinden Kopf und Panel.',
    source: 'src/lib/designspace/components/Accordion.svelte'
  },
  {
    slug: 'list-row',
    name: 'ListRow',
    description:
      'Zeile mit Icon, Titel, Beschreibung, Meta und optionaler Aktion. Als Link mit Chevron.',
    props: ['title, description?, meta?, href?', 'icon?: IconName, active?', 'action?: Snippet'],
    states: ['einfach', 'mit Icon', 'aktiv', 'als Link', 'mit Aktion'],
    keyboard: 'Als Link per Tab erreichbar, 48-px-Ziel und 3-px-Fokusring.',
    source: 'src/lib/designspace/components/ListRow.svelte'
  },
  {
    slug: 'detail-list',
    name: 'DetailList',
    description: 'Objektfelder als Bezeichnung-Wert-Paare, ein- oder zweispaltig, ohne Karten.',
    props: ['items: { label, value }[]', 'columns: 1 | 2', 'label?'],
    states: ['eine Spalte', 'zwei Spalten', 'mobil eine Spalte'],
    keyboard: 'Nicht interaktiv.',
    source: 'src/lib/designspace/components/DetailList.svelte'
  },
  {
    slug: 'timeline',
    name: 'Timeline',
    description:
      'Ereignisse in Zeitfolge mit Marker in der Rolle des Zustands. Die Linie ist Struktur, kein Schmuck.',
    props: ['items: { id, title, time?, description?, tone? }[]', 'label?'],
    states: ['neutral', 'Handlung', 'Erfolg', 'Warnung', 'Fehler'],
    keyboard: 'Nicht interaktiv.',
    source: 'src/lib/designspace/components/Timeline.svelte'
  },
  {
    slug: 'kanban',
    name: 'Kanban',
    description:
      'Spalten mit Karten. Ziehen und Ablegen am Zeiger, Pfeiltasten verschieben am Fokus.',
    props: ['columns: { id, title, items: Task[] }[]', 'label?'],
    states: ['volle Spalte', 'leere Spalte', 'Karte gezogen', 'Karte fokussiert'],
    keyboard: 'Karten sind fokussierbar; Pfeil links/rechts verschiebt sie in die Nachbarspalte.',
    source: 'src/lib/designspace/components/Kanban.svelte'
  },
  {
    slug: 'anchor-links',
    name: 'AnchorLinks',
    description:
      'Sprungmarken zu Abschnitten, optional mit alphabetischem Index. Der aktive Abschnitt ist Petrol.',
    props: ['items: { id, label }[]', 'active?, index?: string[]', 'label?'],
    states: ['ohne Index', 'mit Alphabet', 'aktiver Abschnitt', 'Fokus'],
    keyboard: 'Links mit 48-px-Ziel; aria-current="location" markiert die Position.',
    source: 'src/lib/designspace/components/AnchorLinks.svelte'
  },
  {
    slug: 'article-section',
    name: 'ArticleSection',
    description:
      'Abschnitt eines Artikels mit Eyebrow, Titel, Fließtext und optionaler Randnotiz in 62 Zeichen.',
    props: ['id, title, eyebrow?', 'children, aside?: Snippet'],
    states: ['nur Text', 'mit Randnotiz', 'mobil einspaltig'],
    keyboard: 'Nicht interaktiv; die Überschrift trägt die Verankerung.',
    source: 'src/lib/designspace/components/ArticleSection.svelte'
  },
  {
    slug: 'knowledge-gap',
    name: 'KnowledgeGap',
    description:
      'Markiert eine offene Frage mit Quelle und Handlung. Gold als Fläche, nie als Fließtextfarbe.',
    props: ['title, description', 'sources?: string[]', 'action?: Snippet'],
    states: ['ohne Quellen', 'mit Quellen', 'mit Handlung'],
    keyboard: 'Die Handlung ist ein eigener Fokuspunkt.',
    source: 'src/lib/designspace/components/KnowledgeGap.svelte'
  },
  {
    slug: 'sparkline',
    name: 'Sparkline',
    description: 'Kleine Linie ohne Achsen für einen Verlauf im Fließtext oder in einer Kennzahl.',
    props: ['values: number[]', 'label?, tone?, height?'],
    states: ['steigend', 'fallend', 'flach', 'fünf Rollen'],
    keyboard: 'Nicht fokussierbar; role="img" mit den Werten als Label.',
    source: 'src/lib/designspace/components/Sparkline.svelte'
  },
  {
    slug: 'line-chart',
    name: 'LineChart',
    description:
      'Verlauf über eine Zeitachse als Linie mit ruhigen Hilfslinien und Legende. Sechs Reihenfarben.',
    props: ['series: { label, values, tone? }[]', 'labels?, caption?, height?'],
    states: ['eine Reihe', 'zwei Reihen', 'drei Reihen', 'reduziert ohne Übergang'],
    keyboard: 'Nicht interaktiv; role="img" plus Legende als Text.',
    source: 'src/lib/designspace/components/LineChart.svelte'
  },
  {
    slug: 'select',
    name: 'Select',
    description:
      'Auswahl im Feld mit derselben Kante und demselben Fokus wie Field. Natives Element, eigene Optik.',
    props: ['id, label, options: { value, label }[]', 'value?, placeholder?, hint?, error?, disabled?'],
    states: ['leer', 'gewählt', 'Hover', 'Fokus', 'Disabled', 'Fehler'],
    keyboard: 'Tab fokussiert, Pfeiltasten wählen, Enter bestätigt. Natives Verhalten bleibt erhalten.',
    source: 'src/lib/designspace/components/Select.svelte'
  },
  {
    slug: 'textarea',
    name: 'Textarea',
    description:
      'Mehrzeilig, gleiche Kante und Fokus wie Field, mit optionalem Zeichenzähler in Mono.',
    props: ['id, label, value?, placeholder?, hint?, error?', 'rows?, maxlength?'],
    states: ['leer', 'gefüllt', 'mit Hinweis', 'mit Fehler', 'mit Zähler', 'Fokus'],
    keyboard: 'Tab in das Feld; die Größe lässt sich an der Ecke ziehen.',
    source: 'src/lib/designspace/components/Textarea.svelte'
  },
  {
    slug: 'file-upload',
    name: 'FileUpload',
    description:
      'Ablage mit Zustand pro Datei: bereit, lädt, fertig, Fehler. Entfernen ist ein 48-px-Ziel.',
    props: ['id, label?, hint?, accept?, multiple?', 'files?: { name, size, status? }[]'],
    states: ['leer', 'Datei bereit', 'lädt', 'fertig', 'Fehler', 'mehrere Dateien'],
    keyboard: 'Die Fläche ist ein Label für das Dateifeld: Tab fokussiert, Enter öffnet die Auswahl.',
    source: 'src/lib/designspace/components/FileUpload.svelte'
  },
  {
    slug: 'stepper',
    name: 'Stepper',
    description:
      'Schritte mit Nummern, erledigt als Haken, aktueller Schritt als Petrol-Fläche. Ein Weg, keine Navigation.',
    props: ['steps: { id, label, description? }[]', 'value?, label?'],
    states: ['erster Schritt', 'mittlerer Schritt', 'letzter Schritt', 'Fokus'],
    keyboard: 'Jeder Schritt ist ein 48-px-Knopf; aria-current="step" markiert die Position.',
    source: 'src/lib/designspace/components/Stepper.svelte'
  },
  {
    slug: 'currency-field',
    name: 'CurrencyField',
    description:
      'Betrag mit Währungssymbol und Code, Ziffern in Mono. Drei Währungen, Hinweis und Fehler.',
    props: ['id, label, value?, currency: EUR | USD | CHF', 'hint?, error?, disabled?'],
    states: ['leer', 'gefüllt', 'Fokus', 'Disabled', 'Fehler'],
    keyboard: 'Tab in das Feld, inputmode decimal öffnet die Zifferntastatur.',
    source: 'src/lib/designspace/components/CurrencyField.svelte'
  },
  {
    slug: 'radio-cards',
    name: 'RadioCards',
    description:
      'Auswahl als große Karten mit Titel, Erklärung und Meta. Gewählt ist eine Petrol-Fläche.',
    props: ['name, legend, items: { id, title, description?, meta? }[]', 'value?'],
    states: ['erste gewählt', 'andere gewählt', 'Hover', 'Fokus'],
    keyboard: 'Pfeiltasten wechseln innerhalb der Gruppe, die Karte bleibt ein Tab-Stopp.',
    source: 'src/lib/designspace/components/RadioCards.svelte'
  },
  {
    slug: 'date-picker',
    name: 'DatePicker',
    description:
      'Datum im Feld mit Schnellwahl für heute, morgen und in einer Woche. Kein eigener Kalender.',
    props: ['id, label, value?, hint?, error?, min?, max?'],
    states: ['leer', 'gewählt', 'Fokus', 'Fehler', 'mit Grenzen'],
    keyboard: 'Tab in das Feld; die Schnellwahl ist per Tab und Enter erreichbar.',
    source: 'src/lib/designspace/components/DatePicker.svelte'
  },
  {
    slug: 'sheet',
    name: 'Sheet',
    description:
      'Karte von rechts oder unten über einem Scrim. Natives <dialog>, Escape und Fokus bleiben im Sheet.',
    props: ['open, title, side: right | bottom', 'footer?, children'],
    states: ['rechts', 'unten', 'offen', 'geschlossen', 'Escape'],
    keyboard: 'Escape schließt, der Fokus bleibt im Sheet und kehrt zum Auslöser zurück.',
    source: 'src/lib/designspace/components/Sheet.svelte'
  },
  {
    slug: 'context-menu',
    name: 'ContextMenu',
    description:
      'Aktionen per Rechtsklick an der Zeigerposition. Schließen per Klick daneben, Escape oder Auswahl.',
    props: ['items: { id, label, icon?, danger?, disabled? }[]', 'label?, onselect?, children'],
    states: ['geschlossen', 'offen', 'Eintrag gefährlich', 'Eintrag gesperrt'],
    keyboard: 'Escape schließt, der erste Eintrag bekommt den Fokus; jeder Eintrag ist 48 px hoch.',
    source: 'src/lib/designspace/components/ContextMenu.svelte'
  },
  {
    slug: 'permission-dialog',
    name: 'PermissionDialog',
    description:
      'Fragt eine Berechtigung mit einem klaren Nein und einem klaren Ja. Baut auf dem Dialog auf.',
    props: ['open, title?, description?, permission', 'allowLabel?, denyLabel?, onallow?, ondeny?'],
    states: ['geschlossen', 'offen', 'erlaubt', 'abgelehnt', 'Fokus'],
    keyboard: 'Escape und das Nein schließen ohne Wirkung; Tab läuft zwischen den beiden Handlungen.',
    source: 'src/lib/designspace/components/PermissionDialog.svelte'
  },
  {
    slug: 'message-row',
    name: 'MessageRow',
    description:
      'Nachrichtenzeile mit Avatar, Name, Zeit und Text. Eigene Nachrichten stehen rechts in Petrol-Soft.',
    props: ['name, message, time?, own?, status?'],
    states: ['fremd', 'eigen', 'mit Zeit', 'mit Status'],
    keyboard: 'Nicht interaktiv.',
    source: 'src/lib/designspace/components/MessageRow.svelte'
  },
  {
    slug: 'chat-composer',
    name: 'Chat Composer',
    description:
      'Eingabeleiste mit wachsendem Feld und gefülltem Senden-Knopf. Enter sendet, Shift+Enter bricht um.',
    props: ['value?, placeholder?, sendLabel?, disabled?, onsend?'],
    states: ['leer', 'gefüllt', 'gesperrt', 'Fokus', 'gesendet'],
    keyboard: 'Enter sendet, Shift+Enter macht eine neue Zeile. Senden ist ein 48-px-Ziel.',
    source: 'src/lib/designspace/components/ChatComposer.svelte'
  },
  {
    slug: 'code-block',
    name: 'Code Block',
    description:
      'Code mit Zeilennummern, Sprache und Kopieren. Ziffern in Mono, Zeilen ruhig statt bunt.',
    props: ['code, language?, filename?'],
    states: ['mit Dateinamen', 'nur Sprache', 'kopiert', 'lange Zeilen mit Scroll'],
    keyboard: 'Kopieren ist ein 48-px-Knopf; nach dem Klick meldet er „Kopiert“.',
    source: 'src/lib/designspace/components/CodeBlock.svelte'
  },
  {
    slug: 'pdf-viewer',
    name: 'PdfViewer',
    description:
      'Blättert durch Seiten eines Dokuments mit Seitenzahl und zwei 48-px-Pfeilen. Kein Zoom.',
    props: ['title?, pages?, page?'],
    states: ['erste Seite', 'mittlere Seite', 'letzte Seite', 'reduziert ohne Übergang'],
    keyboard: 'Die Pfeile sind Knöpfe: Tab fokussiert, Enter blättert. An den Grenzen sind sie gesperrt.',
    source: 'src/lib/designspace/components/PdfViewer.svelte'
  },
  {
    slug: 'media-controls',
    name: 'MediaControls',
    description:
      'Bündelt Abspielen, Springen und Position. Zeiten in Mono, Position als Regler mit 3-px-Fokus.',
    props: ['playing?, position?, duration?, label?'],
    states: ['pausiert', 'läuft', 'Anfang', 'Ende', 'Fokus'],
    keyboard: 'Leertaste auf dem Knopf schaltet; der Regler folgt den Pfeiltasten.',
    source: 'src/lib/designspace/components/MediaControls.svelte'
  },
  {
    slug: 'zoom-control',
    name: 'ZoomControl',
    description:
      'Vergrößert und verkleinert in Stufen. Der Prozentwert setzt auf 100 zurück, an den Grenzen sperren die Knöpfe.',
    props: ['value?, min?, max?, step?, label?'],
    states: ['Minimum', '100 %', 'Maximum', 'Fokus', 'gesperrt'],
    keyboard: 'Beide Knöpfe sind 48 px; der Wert ist selbst ein Knopf für 100 %.',
    source: 'src/lib/designspace/components/ZoomControl.svelte'
  },
  {
    slug: 'recording-indicator',
    name: 'RecordingIndicator',
    description:
      'Signalisiert eine laufende Aufnahme mit rotem Punkt, Zeit und Stopp. Ohne Bewegung steht der Punkt still.',
    props: ['recording?, seconds?, label?, onstop?'],
    states: ['bereit', 'Aufnahme läuft', 'gestoppt', 'reduziert ohne Blinken'],
    keyboard: 'Stopp ist ein 48-px-Knopf und nur während der Aufnahme aktiv.',
    source: 'src/lib/designspace/components/RecordingIndicator.svelte'
  },
  {
    slug: 'resizable',
    name: 'Resizable',
    description:
      'Zwei Bereiche mit ziehbarer Trennung. Der Griff hat ein 48-px-Ziel, auch wenn er schmal aussieht.',
    props: ['left, right', 'initial?, min?, max?, label?'],
    states: ['links schmal', 'Mitte', 'rechts schmal', 'gezogen', 'Fokus'],
    keyboard: 'Pfeil links/rechts verschiebt die Trennung, Home und End springen an die Grenzen.',
    source: 'src/lib/designspace/components/Resizable.svelte'
  },
  {
    slug: 'scroll-area',
    name: 'ScrollArea',
    description:
      'Eigener, dünner Scrollbalken in einer Fläche mit fester Höhe. Der Bereich ist per Tastatur fokussierbar.',
    props: ['maxHeight?, label?', 'children'],
    states: ['kurz ohne Scrollen', 'lang mit Scrollen', 'Fokus'],
    keyboard: 'Tab fokussiert den Bereich; Pfeiltasten und Bild-Tasten scrollen.',
    source: 'src/lib/designspace/components/ScrollArea.svelte'
  },
  {
    slug: 'plan-card',
    name: 'PlanCard',
    description:
      'Tarifkarte mit Preis, Zeitraum, Merkmalen und einer Handlung. Empfohlen ist eine Petrol-Fläche.',
    props: ['name, price, period?, description?', 'features?: string[], highlighted?, current?', 'cta?: Snippet'],
    states: ['Standard', 'empfohlen', 'aktuell', 'ohne Merkmale'],
    keyboard: 'Die Handlung bringt ihre eigene Tastatur mit; die Karte selbst ist nicht fokussierbar.',
    source: 'src/lib/designspace/components/PlanCard.svelte'
  },
  {
    slug: 'store-badge',
    name: 'StoreBadge',
    description:
      'Verweis auf App Store oder Google Play mit Zeichen, Hinweis und Ziel. Zwei Märkte, eine Form.',
    props: ['store: apple | google', 'href?'],
    states: ['App Store', 'Google Play', 'Hover', 'Fokus'],
    keyboard: 'Ein Link mit 48-px-Ziel und 3-px-Fokusring.',
    source: 'src/lib/designspace/components/StoreBadge.svelte'
  },
  {
    slug: 'trust-badge',
    name: 'TrustBadge',
    description:
      'Belegt Sicherheit oder Rückgabe mit Zeichen, Titel und kurzem Satz. Drei Rollen, nie mehr.',
    props: ['title, description?', 'tone: info | success | brand', 'icon?: IconName'],
    states: ['Info', 'Erfolg', 'Marke', 'ohne Beschreibung'],
    keyboard: 'Nicht interaktiv.',
    source: 'src/lib/designspace/components/TrustBadge.svelte'
  },
  {
    slug: 'fab',
    name: 'Fab',
    description:
      'Schwebender Aktionsknopf für die eine Hauptaktion. 56 px, Petrol, optional mit Text.',
    props: ['label, icon?, fixed?, extended?', 'onclick?'],
    states: ['rund', 'mit Text', 'fixed', 'Hover', 'Druck', 'Fokus'],
    keyboard: 'Ein Knopf mit aria-label; Druck geht senkrecht, reduziert ohne Bewegung.',
    source: 'src/lib/designspace/components/Fab.svelte'
  },
  {
    slug: 'back-link',
    name: 'BackLink',
    description: 'Führt eine Ebene zurück, mit Pfeil und Ziel im Text. Kein Icon ohne Beschriftung.',
    props: ['href?, label?'],
    states: ['Standard', 'Hover', 'Fokus'],
    keyboard: 'Ein Link mit 48-px-Ziel und sichtbarem 3-px-Fokus.',
    source: 'src/lib/designspace/components/BackLink.svelte'
  }
];

export const docBySlug = (slug: string): ComponentDoc | undefined =>
  docs.find((doc) => doc.slug === slug);
