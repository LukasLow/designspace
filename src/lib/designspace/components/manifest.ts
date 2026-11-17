/**
 * Komponenten-Manifest — die einzige Liste, aus der der Showcase liest.
 *
 * `abgenommen`  = entschieden und gebaut
 * `entwurf`     = gebaut, aber noch nicht durch eine Runde bestätigt
 * `geplant`     = gehört zur Abdeckung, existiert noch nicht
 *
 * Ziel: dieselbe Bandbreite wie shadcn/ui, aber in DesignSpace-Sprache.
 */

export type ComponentStatus = 'geplant' | 'entwurf' | 'abgenommen';

/** Designlib++: nicht nur Komponenten, sondern auch Screens, Icons, Bewegung, Paletten. */
export type ComponentKind = 'component' | 'screen' | 'icon' | 'animation' | 'palette';

export interface ComponentEntry {
  slug: string;
  name: string;
  status: ComponentStatus;
  /** Wie viele echte Varianten gebaut und verglichen wurden. */
  variants: number;
  description: string;
  kind?: ComponentKind;
}

const planned = (
  slug: string,
  name: string,
  description: string,
  kind: ComponentKind = 'component'
): ComponentEntry => ({
  slug,
  name,
  status: 'geplant',
  variants: 0,
  description,
  kind
});

export const components: ComponentEntry[] = [
  {
    slug: 'button',
    name: 'Button',
    status: 'entwurf',
    variants: 4,
    description:
      'Vier Varianten, Fläche matt (Runde 10), Radius 18 (Runde 9), Druck senkrecht. Physik umschaltbar: Feder oder Taste.'
  },
  {
    slug: 'card',
    name: 'Card',
    status: 'entwurf',
    variants: 3,
    description: 'Fläche mit Radius 22 und Haarlinie, vier Innenabstände. Kein Schatten.'
  },
  {
    slug: 'field',
    name: 'Field',
    status: 'entwurf',
    variants: 3,
    description:
      'Label, Eingabe mit Radius 18, Hinweis und Fehlerzustand. Fokus als 3-px-Ring in Petrol.'
  },
  {
    slug: 'chip',
    name: 'Chip',
    status: 'entwurf',
    variants: 7,
    description: 'Sieben Bedeutungen als getönte Fläche mit farbiger Schrift und Kante.'
  },

  {
    slug: 'avatar',
    name: 'Avatar',
    status: 'entwurf',
    variants: 3,
    description: 'Initialen oder Bild, drei Größen (32 / 48 / 72), Petrol-Ring.'
  },
  {
    slug: 'switch',
    name: 'Switch',
    status: 'entwurf',
    variants: 3,
    description: 'Ein/Aus mit 48-px-Ziel, Petrol wenn an, Knopf in Schwarz.'
  },
  {
    slug: 'checkbox',
    name: 'Checkbox',
    status: 'entwurf',
    variants: 3,
    description: 'Kasten mit Haken, 24 px, Ziel 48 px, Petrol wenn gesetzt.'
  },
  {
    slug: 'separator',
    name: 'Separator',
    status: 'entwurf',
    variants: 2,
    description: 'Haarlinie horizontal und vertikal, nie dekorativ.'
  },
  {
    slug: 'spinner',
    name: 'Spinner',
    status: 'entwurf',
    variants: 3,
    description: 'Ladeanzeige als Ring in Petrol, drei Größen. Reduced motion hält den Ring an.'
  },
  {
    slug: 'slider',
    name: 'Slider',
    status: 'entwurf',
    variants: 4,
    description: 'Regler mit 48-px-Ziel, Petrol-Füllung, Wertanzeige, Hinweis und Fehler.'
  },
  {
    slug: 'skeleton',
    name: 'Skeleton',
    status: 'entwurf',
    variants: 3,
    description: 'Platzhalter mit Korn statt Shimmer, als Zeile, Absatz oder Block.'
  },
  {
    slug: 'toast',
    name: 'Toast',
    status: 'entwurf',
    variants: 4,
    description: 'Kurze Rückmeldung unten rechts, vier Rollen, verschwindet von selbst.'
  },
  {
    slug: 'dialog',
    name: 'Dialog',
    status: 'entwurf',
    variants: 3,
    description: 'Karte in der Mitte, Scrim, nativer Fokus und Escape.'
  },
  {
    slug: 'cookie-banner',
    name: 'CookieBanner',
    status: 'entwurf',
    variants: 3,
    description: 'Einwilligung als Region mit zwei gleich großen Handlungen und Einstellungen-Link.'
  },
  {
    slug: 'tooltip',
    name: 'Tooltip',
    status: 'entwurf',
    variants: 4,
    description: 'Kurzer Hinweis bei Fokus und Hover, vier Platzierungen.'
  },
  {
    slug: 'tabs',
    name: 'Tabs',
    status: 'entwurf',
    variants: 3,
    description: 'Bereiche wechseln, aktive Fläche in Petrol, Pfeiltasten und Home/End.'
  },

  planned('radio-group', 'Radio Group', 'Eine Auswahl aus wenigen, als Zeilen oder Karten.'),
  planned('select', 'Select', 'Auswahl im Feld, gleiche Optik wie Field.'),
  planned('textarea', 'Textarea', 'Mehrzeilig, gleiche Kante und Fokus wie Field.'),
  planned('label', 'Label', 'Mono-Label mit 0,12 em Laufweite.'),
  planned('accordion', 'Accordion', 'Aufklappbare Abschnitte, einer oder mehrere offen.'),
  planned('collapsible', 'Collapsible', 'Ein Abschnitt, ein Schalter.'),
  planned('sheet', 'Sheet', 'Karte von rechts oder unten — Grundlage des Konto-Screens.'),
  planned('drawer', 'Drawer', 'Von unten, für Mobil.'),
  planned('popover', 'Popover', 'Kleine Fläche an einem Anker.'),
  planned('dropdown-menu', 'Dropdown Menu', 'Aktionen hinter einem Knopf.'),
  planned('context-menu', 'Context Menu', 'Aktionen per Rechtsklick.'),
  planned('menubar', 'Menubar', 'Zeile aus Menüs, für Desktop-Werkzeuge.'),
  planned('navigation-menu', 'Navigation Menu', 'Hauptnavigation mit Untermenüs.'),
  planned('breadcrumb', 'Breadcrumb', 'Pfad als Mono-Zeile mit Trennern.'),
  planned('pagination', 'Pagination', 'Seitenwechsel als Zahlen und Pfeile.'),
  planned('sidebar', 'Sidebar', 'Navigation mit Icons und aktiver Zeile.'),
  planned('command', 'Command', 'Befehlspalette mit Suche und Gruppen.'),
  planned('combobox', 'Combobox', 'Suche und Auswahl in einem Feld.'),
  planned('form', 'Form', 'Feldgruppe mit Validierung und Zusammenfassung.'),
  planned('input-otp', 'Input OTP', 'Sechs Einzelfelder für Codes.'),
  planned('table', 'Table', 'Datenzeilen mit Kopf, Sortierung und dichter Variante.'),
  planned('data-table', 'Data Table', 'Tabelle mit Auswahl, Filtern, Spalten.'),
  planned('calendar', 'Calendar', 'Monatsraster, heute und Auswahl.'),
  planned('date-picker', 'Date Picker', 'Datum im Feld, Kalender im Popover.'),
  planned('carousel', 'Carousel', 'Horizontale Reihe mit Punkten.'),
  planned('resizable', 'Resizable', 'Zwei Bereiche mit ziehbarer Trennung.'),
  planned('scroll-area', 'Scroll Area', 'Eigener Scrollbalken, dünn und ruhig.'),
  planned('progress', 'Progress', 'Balken mit Wert und Beschriftung.'),
  planned('toggle', 'Toggle', 'An/Aus als Fläche.'),
  planned('toggle-group', 'Toggle Group', 'Mehrere Toggles, eine Auswahl.'),
  planned('alert', 'Alert', 'Hinweis mit Rolle, Symbol und Aktion.'),
  planned('aspect-ratio', 'Aspect Ratio', 'Feste Proportion für Medien.'),
  planned('hover-card', 'Hover Card', 'Vorschau bei Hover oder Fokus.'),

  /* --- Designlib++ — Komponenten, die shadcn nicht hat ------------------ */

  planned('stepper', 'Stepper', 'Schritte mit Nummern, aktueller Schritt gefüllt.'),
  planned('timeline', 'Timeline', 'Ereignisse in Zeitfolge, Marker in Zuständen.'),
  planned('tree-view', 'Tree View', 'Verschachtelte Liste mit Aufklappen.'),
  planned('split-button', 'Split Button', 'Aktion plus Menü in einem Control.'),
  planned('segmented', 'Segmented Control', 'Drei bis fünf Optionen in einer Leiste.'),
  planned('rating', 'Rating', 'Bewertung als Punkte oder Sterne, ohne Farbe.'),
  planned('tag-input', 'Tag Input', 'Mehrere Werte als Chips in einem Feld.'),
  planned('file-upload', 'File Upload', 'Ablage mit Zustand pro Datei.'),
  planned('color-picker', 'Color Picker', 'Ton wählen, mit Kontrastanzeige.'),
  planned('number-input', 'Number Input', 'Zahl mit Schritt-Knöpfen, tabellarisch.'),
  planned('rich-text', 'Rich Text', 'Editor mit Werkzeugleiste.'),
  planned('code-block', 'Code Block', 'Code mit Zeilennummern und Kopieren.'),
  planned('kbd', 'Kbd', 'Tastenkürzel als Taste.'),
  planned('avatar-group', 'Avatar Group', 'Mehrere Personen, gestapelt.'),
  planned('empty-state', 'Empty State', 'Leerer Zustand mit Handlung (Runde 14).'),
  planned('error-state', 'Error State', 'Fehler als Karte mit Aktion (Runde 14).'),
  planned('stat', 'Stat', 'Kennzahl mit Label und Veränderung.'),
  planned('sparkline', 'Sparkline', 'Kleine Linie ohne Achsen.'),
  planned('gauge', 'Gauge', 'Zeiger oder Bogen für einen Wert.'),
  planned('kanban', 'Kanban', 'Spalten mit Karten, Ziehen und Ablegen.'),
  planned('gantt', 'Gantt', 'Zeitstrahl mit Balken.'),
  planned('chat-composer', 'Chat Composer', 'Eingabeleiste wie in Runde 19.'),
  planned('message-row', 'Message Row', 'Nachrichtenzeile mit Avatar, Name, Zeit.'),

  /* --- Screens (Vorlagen) ---------------------------------------------- */

  planned('screen-settings', 'Einstellungen', 'Liste + Karte, live unter /konto (Runde 11).', 'screen'),
  planned('screen-login', 'Login', 'Geteilte Seite, mobil ohne Markenhälfte (Runde 18).', 'screen'),
  planned('screen-register', 'Registrierung', 'Wie Login, ein Schritt (Runde 20).', 'screen'),
  planned('screen-profile', 'Profil', 'Name trägt, Banner optional (Runde 15).', 'screen'),
  planned('screen-article', 'Artikel', '45 Zeichen, Inhalt rechts, 3 Spalten (Runde 16).', 'screen'),
  planned('screen-finance', 'Kurs', 'Info + Handeln + Kurs, Tabs, Chart + Spanne (Runde 17).', 'screen'),
  planned('screen-chat', 'Chat', 'Zeilen mit Gruppe im Kopf (Runde 19).', 'screen'),
  planned('screen-feed', 'Feed', 'Beiträge als Liste oder Karten.', 'screen'),
  planned('screen-directory', 'Verzeichnis', 'Personen, Suche, Filter.', 'screen'),
  planned('screen-landing', 'Landing', 'Shell, Navigation oben, große Typo.', 'screen'),
  planned('screen-checkout', 'Checkout', 'Warenkorb, Adresse, Zahlung.', 'screen'),
  planned('screen-404', '404', 'Nicht gefunden, mit Weg zurück.', 'screen'),

  /* --- Icons ----------------------------------------------------------- */

  planned('icons-stroke', 'Icon-Set (Strich)', '24er-Raster, 1,8 px, runde Enden, keine Füllung.', 'icon'),
  planned('icons-sizes', 'Icon-Größen', '16 / 20 / 24 / 28, im Text und allein.', 'icon'),
  planned('icons-filled', 'Icon-Füllung', 'Wann ein Icon gefüllt sein darf (nur Hauptaktion).', 'icon'),

  /* --- Bewegung -------------------------------------------------------- */

  planned('motion-press', 'Druck', 'Senkrecht, 90–120 ms, nie seitlich.', 'animation'),
  planned('motion-sheet', 'Karte von rechts', 'Einblenden mit Scrim, Escape.', 'animation'),
  planned('motion-toast', 'Toast', 'Kurz, unten rechts, verschwindet.', 'animation'),
  planned('motion-page', 'Seitenwechsel', 'Übergang zwischen Routen, kurz.', 'animation'),

  /* --- Paletten -------------------------------------------------------- */

  planned('palette-core', 'Kernpalette', 'Petrol, Powerade, Neon, Violett, Gold, Rot (Runde 8).', 'palette'),
  planned('palette-series', 'Datenreihen', 'Vier bis sechs unterscheidbare Reihen inkl. Helligkeit.', 'palette'),
  planned('palette-tints', 'Töne', 'Soft-Varianten für Flächen und Chips.', 'palette')
];
