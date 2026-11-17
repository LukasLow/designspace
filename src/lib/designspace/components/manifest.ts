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

export const entries: ComponentEntry[] = [
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

  {
    slug: 'icons-stroke',
    name: 'Icon-Set (Strich)',
    status: 'entwurf',
    variants: 200,
    description:
      '200 Icons in zwölf Gruppen. 24er-Raster, 1,8 px, runde Enden, keine Füllung. Quelle: icons/index.ts.',
    kind: 'icon'
  },
  {
    slug: 'icons-sizes',
    name: 'Icon-Größen',
    status: 'entwurf',
    variants: 3,
    description: '16 / 20 / 24 px, umschaltbar auf /icons. Im Text, in Zeilen und allein.',
    kind: 'icon'
  },
  planned('icons-filled', 'Icon-Füllung', 'Wann ein Icon gefüllt sein darf (nur Hauptaktion).', 'icon'),

  /* --- Bewegung -------------------------------------------------------- */

  planned('motion-press', 'Druck', 'Senkrecht, 90–120 ms, nie seitlich.', 'animation'),
  planned('motion-sheet', 'Karte von rechts', 'Einblenden mit Scrim, Escape.', 'animation'),
  planned('motion-toast', 'Toast', 'Kurz, unten rechts, verschwindet.', 'animation'),
  planned('motion-page', 'Seitenwechsel', 'Übergang zwischen Routen, kurz.', 'animation'),

  /* --- Paletten -------------------------------------------------------- */

  planned('palette-core', 'Kernpalette', 'Petrol, Powerade, Neon, Violett, Gold, Rot (Runde 8).', 'palette'),
  planned('palette-series', 'Datenreihen', 'Vier bis sechs unterscheidbare Reihen inkl. Helligkeit.', 'palette'),
  planned('palette-tints', 'Töne', 'Soft-Varianten für Flächen und Chips.', 'palette'),

  /* --- Charts ----------------------------------------------------------- */

  planned('bar-chart', 'Balkendiagramm', 'Vergleicht Werte als senkrechte Balken mit einer gemeinsamen Nulllinie.'),
  planned('line-chart', 'Liniendiagramm', 'Zeigt Verläufe über eine Zeitachse als Linie mit Punkten.'),
  planned('area-chart', 'Flächendiagramm', 'Betont die Menge unter einer Linie als getönte Fläche.'),
  planned('donut-chart', 'Ringdiagramm', 'Teilt ein Ganzes als Ring mit benannten Segmenten.'),
  planned('pie-chart', 'Kreisdiagramm', 'Teilt ein Ganzes als Tortenstücke, nur bei wenigen Anteilen.'),
  planned('stacked-bar-chart', 'Gestapelte Balken', 'Summiert Kategorien in einem Balken und trennt sie farblich.'),
  planned('grouped-bar-chart', 'Gruppierte Balken', 'Stellt Kategorien nebeneinander statt übereinander gegenüber.'),
  planned('scatter-plot', 'Streudiagramm', 'Trägt zwei Werte je Punkt auf, um Zusammenhänge zu zeigen.'),
  planned('heatmap', 'Heatmap', 'Färbt ein Raster nach Wertdichte, ohne Zahlen in jeder Zelle.'),
  planned('treemap', 'Treemap', 'Packt Anteile als verschachtelte Rechtecke nach Größe.'),
  planned('waterfall-chart', 'Wasserfalldiagramm', 'Zeigt, wie einzelne Beiträge einen Startwert verändern.'),
  planned('radar-chart', 'Netzdiagramm', 'Vergleicht mehrere Merkmale auf gemeinsamen Achsen.'),
  planned('funnel-chart', 'Trichterdiagramm', 'Zeigt Abschnitte einer Strecke mit abnehmender Menge.'),
  planned('candlestick-chart', 'Kerzenchart', 'Stellt Eröffnung, Hoch, Tief und Schluss je Zeitraum dar.'),
  planned('box-plot', 'Boxplot', 'Zeigt Streuung und Ausreißer einer Verteilung.'),
  planned('histogram', 'Histogramm', 'Zählt Werte in Klassen und zeigt die Verteilung als Balken.'),
  planned('bullet-chart', 'Bullet Chart', 'Stellt einen Ist-Wert gegen Ziel und Spanne dar.'),
  planned('chart-legend', 'Diagramm-Legende', 'Erklärt Reihen über Farbe und Namen, umschaltbar.'),
  planned('chart-axis', 'Achsenraster', 'Beschriftet Werte und Zeit mit ruhigen Hilfslinien.'),
  planned('chart-annotation', 'Datenpunkt-Marke', 'Setzt einen kommentierten Punkt in eine Reihe.'),

  /* --- Laden/Fortschritt ------------------------------------------------ */

  planned('progress-ring', 'Fortschrittsring', 'Zeigt einen Anteil als geschlossenen Ring mit Prozentwert.'),
  planned('progress-segments', 'Segmentierter Fortschritt', 'Teilt einen Fortschritt in gleich große, einzeln gefüllte Segmente.'),
  planned('top-loading-bar', 'Ladeleiste oben', 'Dünner Balken am Seitenrand, der einen Routenwechsel anzeigt.'),
  planned('loading-dots', 'Punkte-Lader', 'Drei ruhige Punkte signalisieren Arbeit ohne Wert.'),
  planned('loading-button', 'Knopf mit Ladezustand', 'Hält die Aktion im Knopf und sperrt weitere Klicks.'),
  planned('loading-overlay', 'Lade-Überlagerung', 'Legt einen Scrim mit Anzeige über den wartenden Bereich.'),
  planned('pending-row', 'Wartende Zeile', 'Zeile mit gedämpftem Inhalt, solange der Server antwortet.'),
  planned('upload-progress', 'Upload-Fortschritt', 'Zeigt pro Datei den übertragenen Anteil.'),
  planned('download-progress', 'Download-Fortschritt', 'Zeigt den Fortschritt eines laufenden Downloads.'),
  planned('indeterminate-bar', 'Unbestimmter Balken', 'Bewegter Balken ohne Wert, wenn die Dauer unbekannt ist.'),
  planned('countdown-timer', 'Countdown', 'Zählt eine Frist sichtbar herunter und warnt am Ende.'),
  planned('busy-indicator', 'Beschäftigt-Anzeige', 'Kleine Anzeige im Kopf, wenn im Hintergrund gearbeitet wird.'),
  planned('refresh-indicator', 'Aktualisieren-Anzeige', 'Zeigt den Zeitpunkt der letzten Aktualisierung und dreht beim Laden.'),
  planned('queue-progress', 'Warteschlangen-Fortschritt', 'Zeigt Position und verbleibende Arbeit in einer Schlange.'),
  planned('lazy-placeholder', 'Nachlade-Platzhalter', 'Hält Platz für nachgeladene Inhalte in der finalen Größe.'),

  /* --- Overlays --------------------------------------------------------- */

  planned('confirm-dialog', 'Bestätigungsdialog', 'Fragt vor einer folgenreichen Aktion mit zwei klaren Wegen.'),
  planned('form-dialog', 'Formular-Dialog', 'Kleines Formular im Dialog, ohne die Seite zu verlassen.'),
  planned('fullscreen-dialog', 'Vollbild-Dialog', 'Nimmt die ganze Fläche für eine konzentrierte Aufgabe.'),
  planned('action-sheet', 'Aktionsblatt', 'Listet Aktionen von unten, für Mobil statt Kontextmenü.'),
  planned('lightbox', 'Bild-Überlagerung', 'Zeigt ein Medium groß über der Seite mit Schließen.'),
  planned('floating-panel', 'Schwebendes Panel', 'Kleines Panel, das über dem Inhalt stehen bleibt.'),
  planned('notification-center', 'Benachrichtigungszentrum', 'Sammelt eingegangene Meldungen in einer Fläche.'),
  planned('alert-dialog', 'Alarmdialog', 'Unterbricht für einen Fehler, der eine Entscheidung verlangt.'),
  planned('coach-mark', 'Hinweis-Sprechblase', 'Erklärt ein neues Bedienelement an seinem Ort.'),
  planned('onboarding-tour', 'Geführte Tour', 'Führt in Schritten durch eine Oberfläche mit Marken.'),
  planned('spotlight-overlay', 'Fokus-Overlay', 'Dunkelt alles außer dem erklärten Bereich ab.'),
  planned('scrim', 'Abdunkelung', 'Legt eine Fläche hinter Overlays und schließt per Klick.'),
  planned('popconfirm', 'Bestätigung am Anker', 'Kleine Rückfrage direkt am auslösenden Element.'),
  planned('inline-edit-popover', 'Inline-Bearbeitung', 'Bearbeitet einen Wert an seiner Stelle im Text.'),
  planned('filter-popover', 'Filter-Panel', 'Filter neben dem Knopf, ohne die Liste zu verlassen.'),
  planned('settings-popover', 'Einstellungen am Knopf', 'Schnelle Einstellungen als kleine Fläche.'),
  planned('share-sheet', 'Teilen-Blatt', 'Bietet Zielkanäle zum Teilen eines Inhalts.'),
  planned('media-viewer', 'Medienbetrachter', 'Öffnet Bild oder Video mit Steuerung und Wechsel.'),
  planned('modal-stack', 'Geschichtete Dialoge', 'Stapelt Folge-Dialoge über dem ersten, mit klarer Rückkehr.'),
  planned('drawer-stack', 'Karten-Stapel', 'Öffnet eine zweite Karte über der ersten, ohne Kontextverlust.'),

  /* --- Datenanzeige ----------------------------------------------------- */

  planned('definition-list', 'Beschreibungsliste', 'Paart Bezeichnung und Wert als ruhige Definitionsliste.'),
  planned('property-list', 'Eigenschaftsliste', 'Listet Merkmale eines Objekts mit Label und Wert.'),
  planned('key-value-grid', 'Schlüssel-Wert-Raster', 'Ordnet viele Paare in einem zweispaltigen Raster.'),
  planned('delta-badge', 'Veränderungsmarke', 'Zeigt Anstieg oder Rückgang als kleine Marke mit Zeitraum.'),
  planned('trend-indicator', 'Trendanzeige', 'Verdichtet eine Reihe zu Richtung und Stärke.'),
  planned('comparison-bar', 'Vergleichsbalken', 'Stellt zwei Werte gegen eine gemeinsame Skala.'),
  planned('distribution-bar', 'Verteilungsbalken', 'Zeigt die Streuung mehrerer Werte in einem Balken.'),
  planned('pivot-table', 'Pivot-Tabelle', 'Gruppiert Zeilen und Spalten und summiert Zellen.'),
  planned('tree-table', 'Baumtabelle', 'Verbindet Tabellenzeilen mit aufklappbarer Hierarchie.'),
  planned('detail-list', 'Detailzeilen', 'Zeigt Objektfelder als Zeilen mit optionaler Aktion.'),
  planned('log-viewer', 'Protokollansicht', 'Zeigt Ereignisse mit Zeit, Stufe und Text, filterbar.'),
  planned('diff-view', 'Vergleichsansicht', 'Stellt zwei Fassungen Zeile für Zeile gegenüber.'),
  planned('json-viewer', 'JSON-Ansicht', 'Klappt strukturierte Daten lesbar auf.'),
  planned('schema-view', 'Schema-Anzeige', 'Zeigt Felder und Typen einer Struktur.'),
  planned('audit-trail', 'Änderungsverlauf', 'Listet, wer was wann geändert hat.'),
  planned('activity-feed', 'Aktivitätsstrom', 'Mischt aktuelle Ereignisse zu einem lesbaren Strom.'),
  planned('leaderboard', 'Rangliste', 'Ordnet Teilnehmer nach Wert mit Platz und Veränderung.'),
  planned('scoreboard', 'Ergebnisbrett', 'Zeigt mehrere Kennzahlen eines Wettbewerbs nebeneinander.'),
  planned('status-matrix', 'Statusmatrix', 'Kreuzt Zeilen und Spalten zu einem Statusraster.'),
  planned('attribute-table', 'Merkmalstabelle', 'Vergleicht Objekte über gemeinsame Merkmale.'),

  /* --- Formular --------------------------------------------------------- */

  planned('search-field', 'Suchfeld', 'Feld mit Lupe, Löschen und optionaler Vorschlagsliste.'),
  planned('password-field', 'Passwortfeld', 'Verdeckt Eingaben und erlaubt kurzes Anzeigen.'),
  planned('phone-field', 'Telefonfeld', 'Trennt Ländervorwahl und Nummer mit Prüfung.'),
  planned('currency-field', 'Betragsfeld', 'Nimmt Geldbeträge mit Währung und Trennzeichen auf.'),
  planned('percent-field', 'Prozentfeld', 'Nimmt Anteile zwischen null und hundert auf.'),
  planned('masked-field', 'Maskiertes Feld', 'Formatiert Eingaben nach einer Maske, etwa Datum oder Konto.'),
  planned('autocomplete-field', 'Vervollständigungsfeld', 'Schlägt beim Tippen Treffer aus einer Quelle vor.'),
  planned('multi-select', 'Mehrfachauswahl', 'Wählt mehrere Werte und zeigt sie als Chips.'),
  planned('checkbox-group', 'Checkbox-Gruppe', 'Mehrere Kästchen mit gemeinsamem Label und Fehler.'),
  planned('radio-cards', 'Auswahlkarten', 'Radio-Auswahl als große, beschriftete Karten.'),
  planned('switch-row', 'Schalterzeile', 'Schalter mit Titel und Erklärung in einer Zeile.'),
  planned('fieldset', 'Feldgruppe', 'Rahmen mit Legende für zusammengehörige Felder.'),
  planned('form-section', 'Formularabschnitt', 'Trennt ein langes Formular in benannte Abschnitte.'),
  planned('form-summary', 'Fehlerzusammenfassung', 'Sammelt alle Fehler oben mit Sprungmarken.'),
  planned('validation-message', 'Prüfhinweis', 'Zeigt Regel, Fehler und Korrektur am Feld.'),
  planned('character-counter', 'Zeichenzähler', 'Zählt Zeichen und warnt vor dem Limit.'),
  planned('input-addon', 'Feld-Zusatz', 'Hängt Einheit oder Symbol an ein Feld.'),
  planned('input-group', 'Zusammengesetztes Feld', 'Verbindet mehrere Felder und Knöpfe zu einer Einheit.'),
  planned('address-field', 'Adressblock', 'Nimmt Straße, Ort und Land in fester Reihenfolge.'),
  planned('signature-pad', 'Unterschriftsfeld', 'Nimmt eine gezeichnete Unterschrift auf.'),
  planned('avatar-upload', 'Bild-Upload', 'Lädt ein Profilbild mit Zuschnitt und Vorschau.'),
  planned('range-dual', 'Doppelregler', 'Setzt Unter- und Obergrenze in einem Regler.'),
  planned('time-field', 'Zeitfeld', 'Nimmt eine Uhrzeit mit Schrittweite auf.'),
  planned('date-range-picker', 'Zeitraumwahl', 'Wählt Start und Ende in einem Kalender.'),
  planned('form-draft', 'Entwurfssicherung', 'Sichert Eingaben als Entwurf und stellt sie beim Zurückkehren wieder her.'),

  /* --- Navigation ------------------------------------------------------- */

  planned('top-bar', 'Kopfleiste', 'Obere Leiste mit Marke, Navigation und Konto.'),
  planned('bottom-nav', 'Untere Leiste', 'Mobile Hauptnavigation am unteren Rand.'),
  planned('nav-rail', 'Schmale Leiste', 'Icon-Leiste für viele Bereiche auf wenig Breite.'),
  planned('nav-pills', 'Pillen-Navigation', 'Wechselt Bereiche über gefüllte Pillen.'),
  planned('anchor-links', 'Sprungmarken', 'Springt zu Abschnitten einer langen Seite.'),
  planned('table-of-contents', 'Inhaltsverzeichnis', 'Zeigt Abschnitte und markiert die aktuelle Position.'),
  planned('back-link', 'Zurück-Verweis', 'Führt eine Ebene zurück mit Ziel im Text.'),
  planned('skip-link', 'Sprung zum Inhalt', 'Überspringt die Navigation für Tastaturnutzung.'),
  planned('section-nav', 'Abschnittsnavigation', 'Wechselt zwischen Abschnitten einer Ansicht.'),
  planned('mega-menu', 'Großes Untermenü', 'Zeigt viele Ziele in Spalten unter einem Punkt.'),
  planned('footer-nav', 'Fußnavigation', 'Sammelt rechtliche und sekundäre Ziele unten.'),
  planned('account-menu', 'Konto-Menü', 'Bündelt Profil, Einstellungen und Abmelden.'),
  planned('language-switcher', 'Sprachwahl', 'Wechselt die Sprache mit sichtbarem aktuellen Wert.'),
  planned('quick-jump', 'Schnellsprung', 'Springt per Suchfeld zu einem Ziel.'),
  planned('history-nav', 'Verlauf zurück und vor', 'Blättert durch die besuchten Ansichten.'),
  planned('scroll-spy-nav', 'Mitlaufende Navigation', 'Hebt den Abschnitt hervor, der gerade sichtbar ist.'),
  planned('prev-next', 'Zurück und Weiter', 'Führt sequenziell durch Kapitel oder Schritte.'),
  planned('overflow-menu', 'Überlaufmenü', 'Verbirgt Ziele, die nicht mehr in die Leiste passen.'),
  planned('fab', 'Schwebender Aktionsknopf', 'Hebt die eine Hauptaktion über den Inhalt.'),
  planned('dock', 'Andock-Leiste', 'Sammelt App-Symbole am Bildschirmrand.'),

  /* --- Rückmeldung ------------------------------------------------------ */

  planned('inline-alert', 'Inline-Hinweis', 'Hinweis direkt im Fluss, mit Rolle und Aktion.'),
  planned('banner', 'Seitenbanner', 'Breite Meldung über der Seite, schließbar.'),
  planned('callout', 'Hervorgehobener Hinweis', 'Hebt einen wichtigen Absatz mit Rolle und Symbol.'),
  planned('status-dot', 'Statuspunkt', 'Punkt mit Text für einen Zustand.'),
  planned('status-badge', 'Statusmarke', 'Marke mit Rolle und kurzem Text.'),
  planned('notification-badge', 'Zählmarke', 'Kleine Zahl an einem Symbol.'),
  planned('undo-bar', 'Rückgängig-Leiste', 'Bietet kurze Zeit die Umkehr einer Aktion.'),
  planned('save-indicator', 'Speicheranzeige', 'Zeigt, ob Änderungen gesichert sind.'),
  planned('sync-status', 'Abgleichstatus', 'Zeigt, wann zuletzt abgeglichen wurde.'),
  planned('connection-status', 'Verbindungsstatus', 'Meldet online, offline oder eingeschränkt.'),
  planned('success-check', 'Erfolgshaken', 'Bestätigt einen Abschluss mit Haken und Text.'),
  planned('rate-limit-notice', 'Drosselungshinweis', 'Erklärt eine Wartezeit vor dem nächsten Versuch.'),
  planned('maintenance-notice', 'Wartungshinweis', 'Kündigt eine geplante Pause an.'),
  planned('feedback-prompt', 'Rückmeldungsaufforderung', 'Fragt kurz nach Zufriedenheit und Grund.'),
  planned('announcement-bar', 'Ankündigungsleiste', 'Kündigt Neues an, einmalig schließbar.'),

  /* --- Medien ----------------------------------------------------------- */

  planned('framed-image', 'Bild mit Rahmen', 'Zeigt ein Bild mit fester Proportion und Haarlinie.'),
  planned('image-grid', 'Bildraster', 'Ordnet viele Bilder in einem gleichmäßigen Raster.'),
  planned('image-compare', 'Vorher und Nachher', 'Vergleicht zwei Bilder mit ziehbarer Trennung.'),
  planned('video-player', 'Videoplayer', 'Spielt Video mit Steuerung und Tastatur.'),
  planned('audio-player', 'Audioplayer', 'Spielt Ton mit Zeit, Lautstärke und Sprung.'),
  planned('waveform', 'Wellenform', 'Zeigt den Verlauf einer Tonspur mit Position.'),
  planned('media-thumbnail', 'Vorschaubild', 'Kleines Bild mit Abspiel- oder Typmarke.'),
  planned('gallery', 'Galerie', 'Zeigt eine Reihe von Medien mit Wechsel.'),
  planned('photo-caption', 'Bildunterschrift', 'Ergänzt ein Bild um Quelle und Text.'),
  planned('figure', 'Abbildung', 'Fasst Medium und Erklärung als Einheit.'),
  planned('map-view', 'Kartenansicht', 'Zeigt Orte auf einer Karte mit Marken.'),
  planned('pdf-viewer', 'PDF-Ansicht', 'Blättert durch Seiten eines Dokuments.'),
  planned('file-preview', 'Dateivorschau', 'Zeigt Inhalt oder Symbol einer Datei.'),
  planned('recording-indicator', 'Aufnahmeanzeige', 'Signalisiert eine laufende Aufnahme deutlich.'),
  planned('media-controls', 'Mediensteuerung', 'Bündelt Abspielen, Springen und Lautstärke.'),

  /* --- Handel ----------------------------------------------------------- */

  planned('product-card', 'Produktkarte', 'Zeigt Produkt, Preis und eine Handlung.'),
  planned('product-grid', 'Produktraster', 'Listet Produkte als Karten mit Filter.'),
  planned('price-tag', 'Preisschild', 'Zeigt Preis, Währung und optionalen Streichpreis.'),
  planned('price-range', 'Preisspanne', 'Stellt einen Bereich statt eines Einzelpreises dar.'),
  planned('cart-item', 'Warenkorbzeile', 'Zeigt Position mit Menge, Preis und Entfernen.'),
  planned('cart-summary', 'Warenkorb-Summe', 'Fasst Zwischensumme, Versand und Gesamt zusammen.'),
  planned('quantity-stepper', 'Mengenwahl', 'Erhöht und senkt eine Menge mit Grenzen.'),
  planned('add-to-cart', 'In den Warenkorb', 'Eine gefüllte Hauptaktion mit Rückmeldung.'),
  planned('order-summary', 'Bestellübersicht', 'Zeigt Positionen und Adresse vor dem Abschluss.'),
  planned('order-status', 'Bestellstatus', 'Zeigt den Stand einer Bestellung in Schritten.'),
  planned('shipping-option', 'Versandoption', 'Wählt Tempo und Preis der Lieferung.'),
  planned('payment-method', 'Zahlungsart', 'Wählt ein hinterlegtes Zahlungsmittel.'),
  planned('coupon-field', 'Gutscheinfeld', 'Löst einen Code ein und zeigt das Ergebnis.'),
  planned('stock-indicator', 'Bestandsanzeige', 'Zeigt Verfügbarkeit und warnt bei Knappheit.'),
  planned('trust-badge', 'Vertrauensmarke', 'Belegt Sicherheit oder Rückgabe mit kurzem Text.'),

  /* --- Layout ----------------------------------------------------------- */

  planned('page-shell', 'Seitenrahmen', 'Setzt Breite, Ränder und Hintergrund einer Seite.'),
  planned('grid-layout', 'Raster', 'Ordnet Inhalte in Spalten mit festen Abständen.'),
  planned('stack', 'Stapel', 'Stapelt Kinder vertikal mit einheitlichem Abstand.'),
  planned('cluster', 'Gruppe', 'Ordnet Kinder nebeneinander mit Umbruch.'),
  planned('two-column', 'Zwei Spalten', 'Teilt Inhalt in Haupt- und Nebenfläche.'),
  planned('section-block', 'Abschnitt', 'Trennt Inhalte mit Abstand und Überschrift.'),
  planned('spacer', 'Abstandshalter', 'Setzt einen definierten Abstand im Fluss.'),
  planned('panel', 'Fläche', 'Fasst Inhalte auf einer abgesetzten Fläche.'),
  planned('header-block', 'Kopfbereich', 'Führt Titel, Meta und Aktionen zusammen.'),
  planned('footer-block', 'Fußbereich', 'Schließt eine Seite mit sekundären Zielen.'),
  planned('aside-block', 'Seitenspalte', 'Hält ergänzenden Inhalt neben der Hauptspalte.'),
  planned('sticky-header', 'Haftender Kopf', 'Bleibt beim Scrollen sichtbar, ohne zu verdecken.'),
  planned('sticky-footer', 'Haftender Fuß', 'Hält die Hauptaktion am unteren Rand.'),
  planned('scroll-shadow', 'Scrollschatten', 'Zeigt an, dass Inhalt weiterläuft.'),
  planned('masonry', 'Mauerwerk-Raster', 'Ordnet Karten unterschiedlicher Höhe lückenlos.'),

  /* --- Werkzeug --------------------------------------------------------- */

  planned('toolbar', 'Werkzeugleiste', 'Reihe von Werkzeugen über oder neben einer Fläche.'),
  planned('tool-button', 'Werkzeugknopf', 'Knopf mit Icon, aktivem Zustand und Hinweis.'),
  planned('tool-palette', 'Werkzeugpalette', 'Wählbare Werkzeuge als senkrechte Leiste.'),
  planned('zoom-control', 'Zoomsteuerung', 'Vergrößert und verkleinert mit Prozentwert.'),
  planned('pan-control', 'Verschiebewerkzeug', 'Bewegt eine Fläche per Ziehen oder Tasten.'),
  planned('ruler', 'Lineal', 'Misst Abstände an einer Kante.'),
  planned('grid-overlay', 'Rasteroverlay', 'Legt ein Hilfsraster über den Inhalt.'),
  planned('snap-guide', 'Einrasthilfe', 'Zeigt Linien, an denen Objekte einrasten.'),
  planned('selection-box', 'Auswahlrahmen', 'Zieht einen Rahmen um mehrere Objekte.'),
  planned('inspector', 'Eigenschaftenpanel', 'Bearbeitet Werte des ausgewählten Objekts.'),
  planned('layer-list', 'Ebenenliste', 'Ordnet Objekte, schaltet Sichtbarkeit und Reihenfolge.'),
  planned('history-panel', 'Verlaufspanel', 'Springt zwischen Bearbeitungsschritten.'),
  planned('minimap', 'Minikarte', 'Zeigt die ganze Fläche klein mit Ausschnitt.'),
  planned('comment-pin', 'Kommentar-Marke', 'Setzt einen Kommentar an eine Stelle.'),
  planned('annotation-tool', 'Beschriftungswerkzeug', 'Zieht Text und Pfeile in eine Ansicht.'),
  planned('measurement-tool', 'Messwerkzeug', 'Misst Länge und Winkel zwischen Punkten.'),
  planned('crop-tool', 'Zuschneiden', 'Begrenzt ein Medium auf einen Ausschnitt.'),
  planned('brush-tool', 'Pinsel', 'Malt mit Größe und Deckkraft.'),
  planned('shortcut-panel', 'Tastenübersicht', 'Listet Tastenkürzel nach Bereich.'),
  planned('status-bar', 'Statusleiste', 'Zeigt Zustand, Auswahl und Hinweise am Rand.')
];

/**
 * Gebaute Komponenten. Sie ersetzen gleichnamige geplante Einträge, damit die
 * Liste keine Doppelungen zeigt, auch wenn oben noch ein Platzhalter steht.
 */
const built: ComponentEntry[] = [
  {
    slug: 'nav-rail',
    name: 'NavRail',
    status: 'entwurf',
    variants: 4,
    description: 'Schmale Leiste mit Icon und Label, aktive Zeile in Petrol-Soft und 3-px-Marke.'
  },
  {
    slug: 'top-bar',
    name: 'TopBar',
    status: 'entwurf',
    variants: 4,
    description: 'Kopfleiste mit Marke, Navigation und Aktionen; mobil ohne Navigationszeile.'
  },
  {
    slug: 'bottom-nav',
    name: 'BottomNav',
    status: 'entwurf',
    variants: 3,
    description: 'Mobile Hauptnavigation mit 48-px-Flächen, aktiver Bereich als Petrol-Kante.'
  },
  {
    slug: 'footer-nav',
    name: 'FooterNav',
    status: 'entwurf',
    variants: 3,
    description: 'Fußnavigation mit Gruppen, Hinweis und Rechtstext, Ziele 48 px hoch.'
  },
  {
    slug: 'status-bar',
    name: 'StatusBar',
    status: 'entwurf',
    variants: 5,
    description: 'Statusleiste mit Mono-Werten und Rollenfarbe nur für den Wert.'
  },
  {
    slug: 'breadcrumb',
    name: 'Breadcrumb',
    status: 'entwurf',
    variants: 3,
    description: 'Pfad als Mono-Zeile, letzte Station mit aria-current statt Link.'
  },
  {
    slug: 'page-header',
    name: 'PageHeader',
    status: 'entwurf',
    variants: 4,
    description: 'Hero mit Eyebrow, Titel, Beschreibung, Meta und Aktionen.'
  },
  {
    slug: 'brand-lockup',
    name: 'BrandLockup',
    status: 'entwurf',
    variants: 5,
    description: 'Marke als Zeichen und Wortmarke in drei Größen, optional als Link.'
  },
  {
    slug: 'segmented',
    name: 'Segmented',
    status: 'entwurf',
    variants: 3,
    description: 'Drei bis fünf Optionen, gewählte Fläche in Petrol, Pfeiltasten wechseln.'
  },
  {
    slug: 'toolbar',
    name: 'Toolbar',
    status: 'entwurf',
    variants: 5,
    description: 'Werkzeugreihe mit aktivem Zustand, mobil nur Icons mit waagerechtem Scroll.'
  },
  {
    slug: 'search-field',
    name: 'SearchField',
    status: 'entwurf',
    variants: 5,
    description: 'Suchfeld mit Lupe, Löschen und Vorschlägen, Fokusring um das ganze Feld.'
  },
  {
    slug: 'stat',
    name: 'Stat',
    status: 'entwurf',
    variants: 4,
    description: 'Kennzahl mit Label, Wert und Veränderung, Richtung in der Rollenfarbe.'
  },
  {
    slug: 'progress',
    name: 'Progress',
    status: 'entwurf',
    variants: 6,
    description: 'Balken mit Wert, Beschriftung und fünf Rollen, unbestimmt nur ohne Dauer.'
  },
  {
    slug: 'progress-ring',
    name: 'ProgressRing',
    status: 'entwurf',
    variants: 5,
    description: 'Anteil als Ring mit Prozentwert, fünf Rollen und ruhigem Übergang.'
  },
  {
    slug: 'status-badge',
    name: 'StatusBadge',
    status: 'entwurf',
    variants: 3,
    description: 'Marke mit Punkt und kurzem Text in sieben Rollen.'
  },
  {
    slug: 'status-dot',
    name: 'StatusDot',
    status: 'entwurf',
    variants: 6,
    description: 'Statuspunkt mit Text, Puls nur bei laufender Arbeit.'
  },
  {
    slug: 'empty-state',
    name: 'EmptyState',
    status: 'entwurf',
    variants: 3,
    description: 'Leerer Zustand mit einem Satz und einer Handlung, ohne Illustration.'
  },
  {
    slug: 'inline-alert',
    name: 'InlineAlert',
    status: 'entwurf',
    variants: 5,
    description: 'Hinweis im Fluss in vier Rollen, zusätzlich als ruhiger Callout.'
  },
  {
    slug: 'kbd',
    name: 'Kbd',
    status: 'entwurf',
    variants: 3,
    description: 'Tastenkürzel als Taste mit Unterkante, eine oder mehrere Tasten.'
  },
  {
    slug: 'table',
    name: 'Table',
    status: 'entwurf',
    variants: 5,
    description: 'Datenzeilen mit sortierbarem Kopf, dichter Variante und Mono-Ziffern.'
  },
  {
    slug: 'accordion',
    name: 'Accordion',
    status: 'entwurf',
    variants: 4,
    description: 'Aufklappbare Abschnitte, einer oder mehrere offen, Pfeil dreht senkrecht.'
  },
  {
    slug: 'list-row',
    name: 'ListRow',
    status: 'entwurf',
    variants: 5,
    description: 'Zeile mit Icon, Text, Meta und Aktion, als Link mit Chevron.'
  },
  {
    slug: 'detail-list',
    name: 'DetailList',
    status: 'entwurf',
    variants: 3,
    description: 'Bezeichnung-Wert-Paare ein- oder zweispaltig, ohne Karten.'
  },
  {
    slug: 'timeline',
    name: 'Timeline',
    status: 'entwurf',
    variants: 5,
    description: 'Ereignisse in Zeitfolge, Marker in der Rolle des Zustands.'
  },
  {
    slug: 'kanban',
    name: 'Kanban',
    status: 'entwurf',
    variants: 4,
    description: 'Spalten mit Karten, Ziehen am Zeiger und Verschieben per Pfeiltaste.'
  },
  {
    slug: 'anchor-links',
    name: 'AnchorLinks',
    status: 'entwurf',
    variants: 4,
    description: 'Sprungmarken mit optionalem Alphabet-Index und markiertem Abschnitt.'
  },
  {
    slug: 'article-section',
    name: 'ArticleSection',
    status: 'entwurf',
    variants: 3,
    description: 'Artikelabschnitt mit Eyebrow, Titel, Fließtext und Randnotiz.'
  },
  {
    slug: 'knowledge-gap',
    name: 'KnowledgeGap',
    status: 'entwurf',
    variants: 3,
    description: 'Offene Frage als Gold-Fläche mit Quelle und Handlung.'
  },
  {
    slug: 'sparkline',
    name: 'Sparkline',
    status: 'entwurf',
    variants: 5,
    description: 'Kleine Linie ohne Achsen, fünf Rollen, Label mit den Werten.'
  },
  {
    slug: 'line-chart',
    name: 'LineChart',
    status: 'entwurf',
    variants: 4,
    description: 'Verlauf über eine Zeitachse mit Hilfslinien, Legende und sechs Farben.'
  },
  {
    slug: 'select',
    name: 'Select',
    status: 'entwurf',
    variants: 6,
    description: 'Auswahl im Feld mit nativer Tastatur und eigener Optik.'
  },
  {
    slug: 'textarea',
    name: 'Textarea',
    status: 'entwurf',
    variants: 6,
    description: 'Mehrzeiliges Feld mit Hinweis, Fehler und Zeichenzähler.'
  },
  {
    slug: 'file-upload',
    name: 'FileUpload',
    status: 'entwurf',
    variants: 6,
    description: 'Ablage mit Zustand pro Datei und 48-px-Entfernen.'
  },
  {
    slug: 'stepper',
    name: 'Stepper',
    status: 'entwurf',
    variants: 4,
    description: 'Schritte mit Nummern, Haken für erledigt und Petrol für den aktuellen Schritt.'
  },
  {
    slug: 'currency-field',
    name: 'CurrencyField',
    status: 'entwurf',
    variants: 5,
    description: 'Betrag mit Symbol und Code in drei Währungen, Ziffern in Mono.'
  },
  {
    slug: 'radio-cards',
    name: 'RadioCards',
    status: 'entwurf',
    variants: 4,
    description: 'Radio-Auswahl als große Karten, gewählte Karte in Petrol.'
  },
  {
    slug: 'date-picker',
    name: 'DatePicker',
    status: 'entwurf',
    variants: 5,
    description: 'Datum im Feld mit Schnellwahl und Grenzen, ohne eigenen Kalender.'
  },
  {
    slug: 'sheet',
    name: 'Sheet',
    status: 'entwurf',
    variants: 5,
    description: 'Karte von rechts oder unten über Scrim, nativer Fokus und Escape.'
  },
  {
    slug: 'context-menu',
    name: 'ContextMenu',
    status: 'entwurf',
    variants: 4,
    description: 'Aktionen am Zeiger, gefährliche und gesperrte Einträge inklusive.'
  },
  {
    slug: 'permission-dialog',
    name: 'PermissionDialog',
    status: 'entwurf',
    variants: 5,
    description: 'Berechtigung mit klarem Nein, klarem Ja und sichtbarer Rolle.'
  },
  {
    slug: 'message-row',
    name: 'MessageRow',
    status: 'entwurf',
    variants: 4,
    description: 'Nachrichtenzeile mit Avatar, eigene Nachricht rechts in Petrol-Soft.'
  },
  {
    slug: 'chat-composer',
    name: 'Chat Composer',
    status: 'entwurf',
    variants: 5,
    description: 'Eingabeleiste mit wachsendem Feld, Enter sendet, Senden 48 px.'
  },
  {
    slug: 'code-block',
    name: 'Code Block',
    status: 'entwurf',
    variants: 4,
    description: 'Code mit Zeilennummern, Sprache und Kopieren mit Rückmeldung.'
  },
  {
    slug: 'pdf-viewer',
    name: 'PdfViewer',
    status: 'entwurf',
    variants: 4,
    description: 'Dokumentseiten blättern mit Seitenzahl und gesperrten Grenzen.'
  },
  {
    slug: 'media-controls',
    name: 'MediaControls',
    status: 'entwurf',
    variants: 5,
    description: 'Abspielen, Springen und Position mit Mono-Zeiten und Regler.'
  },
  {
    slug: 'zoom-control',
    name: 'ZoomControl',
    status: 'entwurf',
    variants: 5,
    description: 'Zoom in Stufen mit Prozentwert als 100-%-Knopf und Grenzen.'
  },
  {
    slug: 'recording-indicator',
    name: 'RecordingIndicator',
    status: 'entwurf',
    variants: 4,
    description: 'Aufnahme mit rotem Punkt, Zeit und Stopp, ohne Blinken bei reduzierter Bewegung.'
  },
  {
    slug: 'resizable',
    name: 'Resizable',
    status: 'entwurf',
    variants: 5,
    description: 'Zwei Bereiche mit ziehbarer Trennung, 48-px-Griff und Tastatur.'
  },
  {
    slug: 'scroll-area',
    name: 'ScrollArea',
    status: 'entwurf',
    variants: 3,
    description: 'Fläche mit dünnem eigenem Scrollbalken und Tastaturfokus.'
  },
  {
    slug: 'plan-card',
    name: 'PlanCard',
    status: 'entwurf',
    variants: 4,
    description: 'Tarifkarte mit Preis, Merkmalen, empfohlenem und aktuellem Zustand.'
  },
  {
    slug: 'store-badge',
    name: 'StoreBadge',
    status: 'entwurf',
    variants: 3,
    description: 'App-Store- und Play-Verweis mit Zeichen, Hinweis und 48-px-Ziel.'
  },
  {
    slug: 'trust-badge',
    name: 'TrustBadge',
    status: 'entwurf',
    variants: 4,
    description: 'Vertrauensmarke mit Zeichen, Titel und Satz in drei Rollen.'
  },
  {
    slug: 'fab',
    name: 'Fab',
    status: 'entwurf',
    variants: 6,
    description: 'Schwebender Aktionsknopf, 56 px, rund oder mit Text, Druck senkrecht.'
  },
  {
    slug: 'back-link',
    name: 'BackLink',
    status: 'entwurf',
    variants: 3,
    description: 'Zurück-Verweis mit Pfeil, 48-px-Ziel und sichtbarem Fokus.'
  }
];

const builtSlugs = new Set(built.map((entry) => entry.slug));

export const components: ComponentEntry[] = [
  ...entries.filter((entry) => !(entry.status === 'geplant' && builtSlugs.has(entry.slug))),
  ...built
];
