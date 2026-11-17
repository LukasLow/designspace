/**
 * DesignSpace — Icon-Verzeichnis
 *
 * Ein Raster, eine Sprache: 24er-Raster, Strich 1,8, runde Enden, keine
 * Füllung. Jedes Icon ist genau ein Pfad; Farbe und Größe setzt die
 * Komponente. Die Liste ist die einzige Quelle für /icons.
 */

export type IconGroupId =
  | 'navigation'
  | 'aktion'
  | 'datei'
  | 'medien'
  | 'kommunikation'
  | 'handel'
  | 'wetter'
  | 'geraet'
  | 'person'
  | 'status'
  | 'pfeil'
  | 'system';

export interface IconGroup {
  id: IconGroupId;
  label: string;
}

export interface IconEntry {
  name: string;
  group: IconGroupId;
  /** Ein oder mehrere Unterpfade im 24er-Raster. */
  path: string;
}

export const iconGroups = [
  { id: 'navigation', label: 'Navigation' },
  { id: 'aktion', label: 'Aktion' },
  { id: 'datei', label: 'Datei' },
  { id: 'medien', label: 'Medien' },
  { id: 'kommunikation', label: 'Kommunikation' },
  { id: 'handel', label: 'Handel' },
  { id: 'wetter', label: 'Wetter' },
  { id: 'geraet', label: 'Gerät' },
  { id: 'person', label: 'Person' },
  { id: 'status', label: 'Status' },
  { id: 'pfeil', label: 'Pfeil' },
  { id: 'system', label: 'System' }
] as const satisfies readonly IconGroup[];

export const icons = [
  /* --- Navigation (20) ------------------------------------------------ */
  { name: 'Start', group: 'navigation', path: 'M4 11 12 4l8 7M6 9.5V20h12V9.5M10 20v-5h4v5' },
  { name: 'Menü', group: 'navigation', path: 'M4 7h16M4 12h16M4 17h16' },
  { name: 'Zurück', group: 'navigation', path: 'M15 5l-7 7 7 7' },
  { name: 'Weiter', group: 'navigation', path: 'M9 5l7 7-7 7' },
  { name: 'Aufklappen', group: 'navigation', path: 'M5 9l7 7 7-7' },
  { name: 'Zuklappen', group: 'navigation', path: 'M5 15l7-7 7 7' },
  { name: 'Erste Seite', group: 'navigation', path: 'M6 5v14M18 5l-8 7 8 7' },
  { name: 'Letzte Seite', group: 'navigation', path: 'M18 5v14M6 5l8 7-8 7' },
  { name: 'Externer Link', group: 'navigation', path: 'M14 4h6v6M20 4l-9 9M9 5H5v14h14v-4' },
  {
    name: 'Kompass',
    group: 'navigation',
    path: 'M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16M15 9l-2 4-4 2 2-4z'
  },
  { name: 'Karte', group: 'navigation', path: 'M9 4 4 6v14l5-2 6 2 5-2V4l-5 2zM9 4v14M15 6v14' },
  {
    name: 'Standort',
    group: 'navigation',
    path: 'M12 21s-6-5.5-6-10a6 6 0 0 1 12 0c0 4.5-6 10-6 10zM12 9a2 2 0 1 0 0 4 2 2 0 0 0 0-4'
  },
  {
    name: 'Route',
    group: 'navigation',
    path: 'M6 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM18 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM8 6h6a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h7'
  },
  {
    name: 'Anker',
    group: 'navigation',
    path: 'M12 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM12 7v13M5 13a7 7 0 0 0 14 0M5 13h4M15 13h4'
  },
  {
    name: 'Globus',
    group: 'navigation',
    path: 'M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16M4 12h16M12 4c2.5 2.2 3.8 5 3.8 8s-1.3 5.8-3.8 8c-2.5-2.2-3.8-5-3.8-8S9.5 6.2 12 4z'
  },
  {
    name: 'Gebäude',
    group: 'navigation',
    path: 'M4 21V6l8-3 8 3v15M8 21v-4h8v4M8 9h.01M12 9h.01M16 9h.01M8 13h.01M12 13h.01M16 13h.01'
  },
  { name: 'Ebenen', group: 'navigation', path: 'M12 4 3 9l9 5 9-5zM3 13l9 5 9-5M3 17l9 5 9-5' },
  { name: 'Kartenpfeil', group: 'navigation', path: 'M12 3 21 21l-9-5-9 5z' },
  { name: 'Pfad', group: 'navigation', path: 'M4 7h4l2 4h10M4 17h5l2-4' },
  { name: 'Seitenleiste', group: 'navigation', path: 'M3 4h18v16H3zM9 4v16M6 8h.01M6 12h.01M6 16h.01' },

  /* --- Aktion (26) ---------------------------------------------------- */
  { name: 'Plus', group: 'aktion', path: 'M12 5v14M5 12h14' },
  { name: 'Minus', group: 'aktion', path: 'M5 12h14' },
  { name: 'Schließen', group: 'aktion', path: 'M6 6l12 12M18 6 6 18' },
  { name: 'Suche', group: 'aktion', path: 'M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM20 20l-4-4' },
  {
    name: 'Teilen',
    group: 'aktion',
    path: 'M12 16V4M8 8l4-4 4 4M5 14v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4'
  },
  { name: 'Filter', group: 'aktion', path: 'M4 5h16l-6 8v6l-4 2v-8z' },
  { name: 'Sortieren', group: 'aktion', path: 'M4 7h10M4 12h7M4 17h4M17 5v14M14 16l3 3 3-3' },
  {
    name: 'Löschen',
    group: 'aktion',
    path: 'M4 7h16M10 4h4M6 7l1 13h10l1-13M10 11v6M14 11v6'
  },
  { name: 'Bearbeiten', group: 'aktion', path: 'M4 20h4L20 8l-4-4L4 16zM14 6l4 4' },
  { name: 'Kopieren', group: 'aktion', path: 'M9 9h10v10H9zM5 15V5h10' },
  {
    name: 'Ausschneiden',
    group: 'aktion',
    path: 'M6 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM6 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM7.6 7.4 18 18M7.6 16.6 18 6'
  },
  {
    name: 'Einfügen',
    group: 'aktion',
    path: 'M8 5H6v16h12V5h-2M9 3h6v4H9zM9 12h6M9 16h4'
  },
  { name: 'Rückgängig', group: 'aktion', path: 'M9 7 4 12l5 5M4 12h9a6 6 0 0 1 6 6' },
  { name: 'Wiederholen', group: 'aktion', path: 'M15 7l5 5-5 5M20 12h-9a6 6 0 0 0-6 6' },
  { name: 'Aktualisieren', group: 'aktion', path: 'M20 12a8 8 0 1 1-2.3-5.7M20 4v5h-5' },
  { name: 'Herunterladen', group: 'aktion', path: 'M12 4v11M7 10l5 5 5-5M5 20h14' },
  { name: 'Hochladen', group: 'aktion', path: 'M12 20V9M7 14l5-5 5 5M5 4h14' },
  {
    name: 'Speichern',
    group: 'aktion',
    path: 'M5 4h11l3 3v13H5zM8 4v6h7V4M8 20v-6h8v6'
  },
  {
    name: 'Drucken',
    group: 'aktion',
    path: 'M7 8V4h10v4M7 17H5v-6h14v6h-2M7 14h10v6H7z'
  },
  {
    name: 'Einstellungen',
    group: 'aktion',
    path: 'M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6 7 7M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4'
  },
  { name: 'Sperren', group: 'aktion', path: 'M7 11V8a5 5 0 0 1 10 0v3M5 11h14v10H5zM12 15v3' },
  {
    name: 'Entsperren',
    group: 'aktion',
    path: 'M7 11V8a5 5 0 0 1 9.5-2M5 11h14v10H5zM12 15v3'
  },
  { name: 'Anheften', group: 'aktion', path: 'M9 4h6l-1 6 3 3H7l3-3zM12 13v8' },
  { name: 'Absenden', group: 'aktion', path: 'M3 11 21 3l-8 18-2-8zM11 13l10-10' },
  { name: 'Skalieren', group: 'aktion', path: 'M4 9V4h5M20 15v5h-5M4 4l6 6M20 20l-6-6' },
  {
    name: 'Verschieben',
    group: 'aktion',
    path: 'M12 3v18M3 12h18M9 6l3-3 3 3M9 18l3 3 3-3M6 9l-3 3 3 3M18 9l3 3-3 3'
  },

  /* --- Datei (20) ----------------------------------------------------- */
  { name: 'Archiv', group: 'datei', path: 'M3 5h18v4H3zM5 9v11h14V9M10 13h4' },
  { name: 'Datei', group: 'datei', path: 'M6 3h8l4 4v14H6zM14 3v4h4M9 13h6M9 17h4' },
  { name: 'Ordner', group: 'datei', path: 'M3 6h6l2 2h10v11H3z' },
  { name: 'Ordner offen', group: 'datei', path: 'M3 8h7l2 2h9v3M3 8v11h16l3-8H7z' },
  { name: 'Dokument', group: 'datei', path: 'M7 3h7l4 4v14H7zM14 3v4h4M10 12h5M10 16h5' },
  {
    name: 'Bilddatei',
    group: 'datei',
    path: 'M6 4h12v16H6zM6 15l4-4 4 4 2-2 2 2M9 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z'
  },
  {
    name: 'PDF',
    group: 'datei',
    path: 'M7 3h7l4 4v14H7zM14 3v4h4M9 12h1.5a1.5 1.5 0 0 1 0 3H9v-3zM9 15v3M14 12v6M14 12h2M14 15h2'
  },
  { name: 'Tabelle', group: 'datei', path: 'M4 4h16v16H4zM4 9h16M4 14h16M10 4v16M15 4v16' },
  { name: 'Kalender', group: 'datei', path: 'M4 6h16v14H4zM4 10h16M8 3v4M16 3v4' },
  { name: 'Uhr', group: 'datei', path: 'M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM12 8v4l3 2' },
  { name: 'Notiz', group: 'datei', path: 'M5 3h10l4 4v14H5zM15 3v4h4M8 12h8M8 16h5' },
  { name: 'Lesezeichen', group: 'datei', path: 'M7 3h10v18l-5-4-5 4z' },
  {
    name: 'Büroklammer',
    group: 'datei',
    path: 'M16 7v9a4 4 0 0 1-8 0V6a2.5 2.5 0 0 1 5 0v10a1.5 1.5 0 0 1-3 0V8'
  },
  {
    name: 'Link',
    group: 'datei',
    path: 'M10 14a4 4 0 0 1 0-5l2-2a4 4 0 0 1 5 5l-1 1M14 10a4 4 0 0 1 0 5l-2 2a4 4 0 0 1-5-5l1-1'
  },
  { name: 'Anhang', group: 'datei', path: 'M7 3h7l4 4v14H7zM14 3v4h4M12 11v6M9 14h6' },
  {
    name: 'Cloud-Speicher',
    group: 'datei',
    path: 'M7 19h10a3 3 0 0 0 .5-6 5 5 0 0 0-9.5 1.5A3.5 3.5 0 0 0 7 19zM12 13v6M9 16l3-3 3 3'
  },
  { name: 'Komprimiert', group: 'datei', path: 'M6 3h12v18H6zM10 7h4M10 11h4M10 15h4M12 19h.01' },
  { name: 'Entpacken', group: 'datei', path: 'M5 4h9l5 5v11H5zM14 4v5h5M9 13l3-3 3 3M12 10v6' },
  {
    name: 'Code-Datei',
    group: 'datei',
    path: 'M7 3h7l4 4v14H7zM14 3v4h4M10 12l-2 2 2 2M14 12l2 2-2 2'
  },
  {
    name: 'Datenbank',
    group: 'datei',
    path: 'M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6'
  },

  /* --- Medien (16) ---------------------------------------------------- */
  { name: 'Video', group: 'medien', path: 'M3 6h12v12H3zM15 10l6-4v12l-6-4' },
  {
    name: 'Bild',
    group: 'medien',
    path: 'M4 5h16v14H4zM4 16l5-5 4 4 2-2 5 5M9 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z'
  },
  {
    name: 'Musik',
    group: 'medien',
    path: 'M9 18V6l10-2v12M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM19 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM9 9l10-2'
  },
  { name: 'Play', group: 'medien', path: 'M8 5l11 7-11 7z' },
  { name: 'Pause', group: 'medien', path: 'M8 5v14M16 5v14' },
  { name: 'Stop', group: 'medien', path: 'M6 6h12v12H6z' },
  { name: 'Nächstes', group: 'medien', path: 'M5 5l7 7-7 7M12 5l7 7-7 7' },
  { name: 'Vorheriges', group: 'medien', path: 'M19 5l-7 7 7 7M12 5l-7 7 7 7' },
  {
    name: 'Mikrofon',
    group: 'medien',
    path: 'M12 4a3 3 0 0 1 3 3v5a3 3 0 0 1-6 0V7a3 3 0 0 1 3-3zM6 12a6 6 0 0 0 12 0M12 18v3M9 21h6'
  },
  {
    name: 'Kopfhörer',
    group: 'medien',
    path: 'M4 14v-2a8 8 0 0 1 16 0v2M4 14h3v6H5a1 1 0 0 1-1-1zM20 14h-3v6h2a1 1 0 0 0 1-1z'
  },
  {
    name: 'Lautsprecher',
    group: 'medien',
    path: 'M4 9h4l5-4v14l-5-4H4zM16 9a4 4 0 0 1 0 6M19 7a7 7 0 0 1 0 10'
  },
  {
    name: 'Kamera',
    group: 'medien',
    path: 'M3 7h4l2-2h6l2 2h4v12H3zM12 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z'
  },
  {
    name: 'Feed',
    group: 'medien',
    path: 'M12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM8 17a6 6 0 0 1 0-8M16 9a6 6 0 0 1 0 8M5 20a10 10 0 0 1 0-14M19 6a10 10 0 0 1 0 14'
  },
  {
    name: 'Wiedergabeliste',
    group: 'medien',
    path: 'M4 6h10M4 11h10M4 16h6M17 8v9M17 17a2 2 0 1 0 0 4 2 2 0 0 0 0-4'
  },
  { name: 'Stumm', group: 'medien', path: 'M4 9h4l5-4v14l-5-4H4zM16 9l5 6M21 9l-5 6' },
  {
    name: 'Film',
    group: 'medien',
    path: 'M3 5h18v14H3zM7 5v14M17 5v14M3 9h4M3 15h4M17 9h4M17 15h4'
  },

  /* --- Kommunikation (16) --------------------------------------------- */
  {
    name: 'Telefon',
    group: 'kommunikation',
    path: 'M7 4h3l2 5-2 1a12 12 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 5 6a2 2 0 0 1 2-2z'
  },
  {
    name: 'Kommentar',
    group: 'kommunikation',
    path: 'M21 12a8 8 0 0 1-8 8H7l-4 2V12a8 8 0 0 1 8-8h2a8 8 0 0 1 8 8z'
  },
  { name: 'Nachricht', group: 'kommunikation', path: 'M4 5h16v11H8l-4 4zM8 9h8M8 12h5' },
  { name: 'E-Mail', group: 'kommunikation', path: 'M3 6h18v12H3zM3 7l9 6 9-6' },
  {
    name: 'Brief',
    group: 'kommunikation',
    path: 'M4 5h16v14H4zM4 6l8 6 8-6M4 19l6-6M20 19l-6-6'
  },
  { name: 'Chat', group: 'kommunikation', path: 'M4 5h11v8H8l-4 3zM15 8h5v8h-3l-2 2v-2h-1' },
  { name: 'Antwort', group: 'kommunikation', path: 'M9 7 4 12l5 5M4 12h10a6 6 0 0 1 6 6' },
  {
    name: 'Weiterleiten',
    group: 'kommunikation',
    path: 'M15 7l5 5-5 5M20 12H10a6 6 0 0 0-6 6'
  },
  {
    name: 'Erwähnen',
    group: 'kommunikation',
    path: 'M12 4a8 8 0 1 0 5.7 13.7M12 8a4 4 0 1 0 0 8M16 12v3a2 2 0 0 0 4 0v-3a8 8 0 0 0-8-8'
  },
  {
    name: 'Benachrichtigung',
    group: 'kommunikation',
    path: 'M6 10a6 6 0 0 1 12 0c0 4 2 5 2 5H4s2-1 2-5zM10 19a2 2 0 0 0 4 0'
  },
  {
    name: 'Glocke aus',
    group: 'kommunikation',
    path: 'M6 10a6 6 0 0 1 9.5-4.9M18 12v3l2 2H4s2-1 2-5M10 19a2 2 0 0 0 4 0M4 4l16 16'
  },
  {
    name: 'Kontakt',
    group: 'kommunikation',
    path: 'M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM5 20a7 7 0 0 1 14 0M3 4h18v16H3z'
  },
  {
    name: 'Sprechblasen',
    group: 'kommunikation',
    path: 'M3 5h11v8H7l-4 3zM9 9h11v7h-2v3l-3-3H9z'
  },
  {
    name: 'Videoanruf',
    group: 'kommunikation',
    path: 'M3 7h11v10H3zM14 10l6-3v10l-6-3'
  },
  {
    name: 'Senden',
    group: 'kommunikation',
    path: 'M3 12h13M12 8l4 4-4 4M20 6v12'
  },
  {
    name: 'Kontaktbuch',
    group: 'kommunikation',
    path: 'M6 3h12v18H6zM6 7H4v10h2M10 9h4M10 13h4'
  },

  /* --- Handel (16) ---------------------------------------------------- */
  { name: 'Tag', group: 'handel', path: 'M4 4h9l7 7-9 9-7-7zM8 8h.01' },
  {
    name: 'Warenkorb',
    group: 'handel',
    path: 'M3 4h2l2.5 11h10L20 7H6M9 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM17 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2z'
  },
  { name: 'Tasche', group: 'handel', path: 'M5 8h14v12H5zM9 8V6a3 3 0 0 1 6 0v2' },
  { name: 'Kreditkarte', group: 'handel', path: 'M3 6h18v12H3zM3 10h18M7 15h3' },
  {
    name: 'Geldschein',
    group: 'handel',
    path: 'M3 7h18v10H3zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6'
  },
  {
    name: 'Münze',
    group: 'handel',
    path: 'M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM12 8v8M9.5 10h4a1.5 1.5 0 0 1 0 3h-3a1.5 1.5 0 0 0 0 3h4'
  },
  {
    name: 'Geschenk',
    group: 'handel',
    path: 'M4 9h16v11H4zM3 5h18v4H3zM12 5v15M12 5C10 3 7 3 7 5.5S10 9 12 9M12 5c2-2 5-2 5 .5S14 9 12 9'
  },
  { name: 'Rabatt', group: 'handel', path: 'M4 4h7l9 9-7 7-9-9zM8 8h.01M15 15l3-3-3-3' },
  { name: 'Lager', group: 'handel', path: 'M3 4h18v6H3zM5 10v10h14V10M9 14h6' },
  {
    name: 'Lieferung',
    group: 'handel',
    path: 'M3 6h11v9H3zM14 9h4l3 3v3h-7M7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM18 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'
  },
  { name: 'Gutschein', group: 'handel', path: 'M3 7h18v10H3zM9 7v10' },
  {
    name: 'Rechnung',
    group: 'handel',
    path: 'M6 3h12v18l-3-2-3 2-3-2-3 2zM9 8h6M9 12h6'
  },
  {
    name: 'Prozent',
    group: 'handel',
    path: 'M6 18 18 6M7 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM17 15a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z'
  },
  { name: 'Paket', group: 'handel', path: 'M12 3 21 8v8l-9 5-9-5V8zM3 8l9 5 9-5M12 13v8' },
  { name: 'Barcode', group: 'handel', path: 'M4 5v14M7 5v14M10 5v10M13 5v14M16 5v10M19 5v14' },
  { name: 'Börse', group: 'handel', path: 'M3 20h18M5 20V9M10 20V5M15 20v-7M20 20V11' },

  /* --- Wetter (14) ---------------------------------------------------- */
  {
    name: 'Sonne',
    group: 'wetter',
    path: 'M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19'
  },
  { name: 'Mond', group: 'wetter', path: 'M20 14a8 8 0 0 1-10-10 8 8 0 1 0 10 10z' },
  {
    name: 'Wolke',
    group: 'wetter',
    path: 'M7 19h10a3 3 0 0 0 .4-6A5 5 0 0 0 7.6 14 2.5 2.5 0 0 0 7 19z'
  },
  {
    name: 'Wolke Regen',
    group: 'wetter',
    path: 'M7 16h10a3 3 0 0 0 .4-6A5 5 0 0 0 7.6 11 2.5 2.5 0 0 0 7 16zM8 19l-1 2M12 19l-1 2M16 19l-1 2'
  },
  {
    name: 'Wolke Schnee',
    group: 'wetter',
    path: 'M7 15h10a3 3 0 0 0 .4-6A5 5 0 0 0 7.6 10 2.5 2.5 0 0 0 7 15zM8 18v2M12 18v2M16 18v2'
  },
  {
    name: 'Gewitter',
    group: 'wetter',
    path: 'M7 15h10a3 3 0 0 0 .4-6A5 5 0 0 0 7.6 10 2.5 2.5 0 0 0 7 15zM11 16l-1 3h3l-2 3'
  },
  {
    name: 'Wind',
    group: 'wetter',
    path: 'M4 8h9a3 3 0 1 0-3-3M4 12h13a3 3 0 1 1-3 3M4 16h6'
  },
  { name: 'Tropfen', group: 'wetter', path: 'M12 3s6 6.5 6 10.5a6 6 0 0 1-12 0C6 9.5 12 3 12 3z' },
  {
    name: 'Thermometer',
    group: 'wetter',
    path: 'M14 14V5a2 2 0 0 0-4 0v9a4 4 0 1 0 4 0zM12 9v5'
  },
  {
    name: 'Schneeflocke',
    group: 'wetter',
    path: 'M12 3v18M4 7l16 10M20 7 4 17M9 5l3 2 3-2M9 19l3-2 3 2'
  },
  { name: 'Nebel', group: 'wetter', path: 'M4 8h16M3 12h18M6 16h12M8 20h8' },
  {
    name: 'Regenbogen',
    group: 'wetter',
    path: 'M3 17a9 9 0 0 1 18 0M6 17a6 6 0 0 1 12 0M9 17a3 3 0 0 1 6 0'
  },
  {
    name: 'Sonnenuntergang',
    group: 'wetter',
    path: 'M4 18h16M6 14a6 6 0 0 1 12 0M12 6v2M4 10l1.5 1.5M20 10l-1.5 1.5M2 22h20'
  },
  {
    name: 'Wolke Sonne',
    group: 'wetter',
    path: 'M12 4v2M5 7l1.5 1.5M19 7l-1.5 1.5M4 14a3 3 0 0 1 3-3 5 5 0 0 1 9.5 1.5A2.5 2.5 0 0 1 16 19H7a3 3 0 0 1-3-3z'
  },

  /* --- Gerät (14) ----------------------------------------------------- */
  { name: 'Monitor', group: 'geraet', path: 'M3 6h18v10H3zM8 20h8M12 16v4' },
  { name: 'Smartphone', group: 'geraet', path: 'M8 3h8v18H8zM11 18h2' },
  { name: 'Tablet', group: 'geraet', path: 'M6 3h12v18H6zM11 18h2' },
  { name: 'Laptop', group: 'geraet', path: 'M5 6h14v9H5zM3 19h18l-2-4H5z' },
  {
    name: 'Tastatur',
    group: 'geraet',
    path: 'M3 7h18v10H3zM6 10h.01M9 10h.01M12 10h.01M15 10h.01M18 10h.01M7 14h10'
  },
  {
    name: 'Maus',
    group: 'geraet',
    path: 'M12 3a5 5 0 0 1 5 5v8a5 5 0 0 1-10 0V8a5 5 0 0 1 5-5zM12 7v4'
  },
  {
    name: 'Chip',
    group: 'geraet',
    path: 'M7 7h10v10H7zM10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4'
  },
  {
    name: 'Server',
    group: 'geraet',
    path: 'M4 4h16v6H4zM4 14h16v6H4zM8 7h.01M8 17h.01M12 7h4M12 17h4'
  },
  {
    name: 'Router',
    group: 'geraet',
    path: 'M3 13h18v6H3zM6 19v2M18 19v2M6 16h.01M9 16h.01M12 10V7M8 7a5 5 0 0 1 8 0'
  },
  { name: 'Bluetooth', group: 'geraet', path: 'M12 3v18l6-4-6-5 6-5-6-4z' },
  {
    name: 'WLAN',
    group: 'geraet',
    path: 'M4 9a12 12 0 0 1 16 0M7 12a8 8 0 0 1 10 0M10 15a4 4 0 0 1 4 0M12 18h.01'
  },
  { name: 'Akku', group: 'geraet', path: 'M4 8h14v8H4zM18 11v2M7 11v2M10 11v2' },
  { name: 'Stecker', group: 'geraet', path: 'M9 3v5M15 3v5M6 8h12v3a6 6 0 0 1-12 0zM12 17v4' },
  { name: 'USB', group: 'geraet', path: 'M12 3v18M12 7l-4-2M12 11l4-2M8 7v3M12 21l-2-2M12 21l2-2' },

  /* --- Person (14) ---------------------------------------------------- */
  {
    name: 'Person',
    group: 'person',
    path: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21c0-4 3.6-6 8-6s8 2 8 6'
  },
  {
    name: 'Personen',
    group: 'person',
    path: 'M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM3 20c0-3 2.7-5 6-5s6 2 6 5M16 5a3 3 0 0 1 0 6M17 15c2.5.5 4 2.2 4 5'
  },
  {
    name: 'Person plus',
    group: 'person',
    path: 'M10 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM4 20c0-3.5 2.7-5.5 6-5.5s6 2 6 5.5M18 9v6M15 12h6'
  },
  {
    name: 'Person minus',
    group: 'person',
    path: 'M10 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM4 20c0-3.5 2.7-5.5 6-5.5s6 2 6 5.5M15 12h6'
  },
  {
    name: 'Person Haken',
    group: 'person',
    path: 'M10 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM4 20c0-3.5 2.7-5.5 6-5.5 1.4 0 2.6.3 3.6.8M16 12l2 2 4-5'
  },
  {
    name: 'Gruppe',
    group: 'person',
    path: 'M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM16 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM2 20c0-3 2.7-5 6-5s6 2 6 5M13 16c.8-.7 1.9-1 3-1 3.3 0 6 2 6 5'
  },
  {
    name: 'Ausweis',
    group: 'person',
    path: 'M3 5h18v14H3zM8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM5 16c0-2 1.3-3 3-3s3 1 3 3M14 9h4M14 13h4'
  },
  {
    name: 'Profil',
    group: 'person',
    path: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM5 21a7 7 0 0 1 14 0'
  },
  {
    name: 'Herz',
    group: 'person',
    path: 'M12 20s-7-4.5-7-9a4 4 0 0 1 7-2.5A4 4 0 0 1 19 11c0 4.5-7 9-7 9z'
  },
  {
    name: 'Stern',
    group: 'person',
    path: 'M12 3l2.8 5.7 6.2.9-4.5 4.4 1 6.2-5.5-2.9-5.5 2.9 1-6.2L3 9.6l6.2-.9z'
  },
  {
    name: 'Lächeln',
    group: 'person',
    path: 'M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM8.5 10h.01M15.5 10h.01M8.5 14a4.5 4.5 0 0 0 7 0'
  },
  {
    name: 'Fingerabdruck',
    group: 'person',
    path: 'M12 4a8 8 0 0 0-8 8v2M12 4a8 8 0 0 1 8 8v1M12 8a4 4 0 0 0-4 4v4M12 8a4 4 0 0 1 4 4v2M12 12v6M8 20a8 8 0 0 1-1-4M16 18a8 8 0 0 0 1-4'
  },
  {
    name: 'Barrierefreiheit',
    group: 'person',
    path: 'M12 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5 8l7 2 7-2M12 10v5M9 21l3-6 3 6'
  },
  {
    name: 'Person Herz',
    group: 'person',
    path: 'M10 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM4 20c0-3.5 2.7-5.5 6-5.5M18 20s-4-2.5-4-5a2.2 2.2 0 0 1 4-1.4 2.2 2.2 0 0 1 4 1.4c0 2.5-4 5-4 5z'
  },

  /* --- Status (16) ---------------------------------------------------- */
  { name: 'Haken', group: 'status', path: 'M5 12.5 10 17.5 19 7' },
  {
    name: 'Schild',
    group: 'status',
    path: 'M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z'
  },
  {
    name: 'Schild Haken',
    group: 'status',
    path: 'M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6zM9 12l2 2 4-4'
  },
  { name: 'Warnung', group: 'status', path: 'M12 3 22 20H2zM12 9v5M12 17h.01' },
  {
    name: 'Info',
    group: 'status',
    path: 'M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM12 11v5M12 8h.01'
  },
  {
    name: 'Fehler',
    group: 'status',
    path: 'M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM9 9l6 6M15 9l-6 6'
  },
  {
    name: 'Frage',
    group: 'status',
    path: 'M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM9.5 9a2.5 2.5 0 0 1 5 0c0 1.5-2.5 1.8-2.5 3.5M12 16h.01'
  },
  {
    name: 'Erfolg',
    group: 'status',
    path: 'M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM8.5 12l2.5 2.5 4.5-5'
  },
  {
    name: 'Sanduhr',
    group: 'status',
    path: 'M6 3h12M6 21h12M7 3c0 5 5 5 5 9s-5 4-5 9M17 3c0 5-5 5-5 9s5 4 5 9'
  },
  {
    name: 'Verboten',
    group: 'status',
    path: 'M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM5.5 5.5l13 13'
  },
  { name: 'Blitz', group: 'status', path: 'M13 3 5 13h6l-1 8 8-10h-6z' },
  {
    name: 'Feuer',
    group: 'status',
    path: 'M12 3c4 4 6 7 6 10a6 6 0 0 1-12 0c0-2 1-4 3-6 0 2 1 3 2 3 1-3 1-5 1-7z'
  },
  {
    name: 'Auge',
    group: 'status',
    path: 'M2 12s4-6 10-6 10 6 10 6-4 6-10 6S2 12 2 12zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z'
  },
  {
    name: 'Auge aus',
    group: 'status',
    path: 'M3 3l18 18M10.6 6.2A10.9 10.9 0 0 1 12 6c6 0 10 6 10 6a17 17 0 0 1-3 3.7M6.2 6.3A17 17 0 0 0 2 12s4 6 10 6a10 10 0 0 0 4.3-1M9.9 9.9a3 3 0 0 0 4.2 4.2'
  },
  {
    name: 'Aktiv',
    group: 'status',
    path: 'M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z'
  },
  { name: 'Leer', group: 'status', path: 'M4 4h16v16H4zM8 12h8' },

  /* --- Pfeil (18) ----------------------------------------------------- */
  { name: 'Pfeil hoch', group: 'pfeil', path: 'M12 20V5M5 12l7-7 7 7' },
  { name: 'Pfeil runter', group: 'pfeil', path: 'M12 4v15M5 12l7 7 7-7' },
  { name: 'Pfeil links', group: 'pfeil', path: 'M20 12H5M12 5l-7 7 7 7' },
  { name: 'Pfeil rechts', group: 'pfeil', path: 'M4 12h15M12 5l7 7-7 7' },
  { name: 'Pfeil oben rechts', group: 'pfeil', path: 'M7 17 17 7M9 7h8v8' },
  { name: 'Pfeil unten links', group: 'pfeil', path: 'M17 7 7 17M15 17H7V9' },
  { name: 'Pfeil oben links', group: 'pfeil', path: 'M17 17 7 7M7 15V7h8' },
  { name: 'Pfeil unten rechts', group: 'pfeil', path: 'M7 7l10 10M17 9v8H9' },
  { name: 'Chevron links', group: 'pfeil', path: 'M14 6l-6 6 6 6' },
  { name: 'Chevron rechts', group: 'pfeil', path: 'M10 6l6 6-6 6' },
  {
    name: 'Chevron doppelt links',
    group: 'pfeil',
    path: 'M12 6l-6 6 6 6M19 6l-6 6 6 6'
  },
  {
    name: 'Chevron doppelt rechts',
    group: 'pfeil',
    path: 'M5 6l6 6-6 6M12 6l6 6-6 6'
  },
  {
    name: 'Rücklauf',
    group: 'pfeil',
    path: 'M4 12h12a4 4 0 0 1 0 8H8M8 8l-4 4 4 4'
  },
  {
    name: 'Vorlauf',
    group: 'pfeil',
    path: 'M20 12H8a4 4 0 0 0 0 8h8M16 8l4 4-4 4'
  },
  { name: 'Tausch', group: 'pfeil', path: 'M4 8h13l-3-3M20 16H7l3 3' },
  {
    name: 'Sortierpfeil',
    group: 'pfeil',
    path: 'M8 5v14M5 8l3-3 3 3M16 19V5M13 16l3 3 3-3'
  },
  {
    name: 'Auseinander',
    group: 'pfeil',
    path: 'M8 8 4 4M4 8V4h4M16 8l4-4M20 8V4h-4M8 16l-4 4M4 16v4h4M16 16l4 4M20 16v4h-4'
  },
  {
    name: 'Zusammen',
    group: 'pfeil',
    path: 'M4 4l5 5M9 4H4v5M20 4l-5 5M15 4h5v5M4 20l5-5M9 20H4v-5M20 20l-5-5M15 20h5v-5'
  },

  /* --- System (10) ---------------------------------------------------- */
  {
    name: 'Raster',
    group: 'system',
    path: 'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z'
  },
  {
    name: 'Liste',
    group: 'system',
    path: 'M9 6h11M9 12h11M9 18h11M5 6h.01M5 12h.01M5 18h.01'
  },
  { name: 'Code', group: 'system', path: 'M9 6 3 12l6 6M15 6l6 6-6 6' },
  { name: 'Terminal', group: 'system', path: 'M4 4h16v16H4zM7 9l3 3-3 3M13 15h4' },
  {
    name: 'Netzwerk',
    group: 'system',
    path: 'M12 4v6M12 14v6M4 12h6M14 12h6M9 9h6v6H9z'
  },
  {
    name: 'Schlüssel',
    group: 'system',
    path: 'M15 8a4 4 0 1 0-3 3.9L4 20v-3h3v-3h3l2.1-2.1A4 4 0 0 0 15 8z'
  },
  {
    name: 'Sitemap',
    group: 'system',
    path: 'M9 3h6v4H9zM3 17h6v4H3zM15 17h6v4h-6zM12 7v5M6 12h12M6 17v-5M18 17v-5'
  },
  {
    name: 'Befehl',
    group: 'system',
    path: 'M9 9h6v6H9zM9 9H7a2 2 0 1 1 2-2zM15 9V7a2 2 0 1 1 2 2zM15 15h2a2 2 0 1 1-2 2zM9 15H7a2 2 0 1 0 2 2z'
  },
  {
    name: 'Schalter',
    group: 'system',
    path: 'M8 6h8a6 6 0 0 1 0 12H8A6 6 0 0 1 8 6zM8 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6'
  },
  { name: 'Kontrast', group: 'system', path: 'M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM12 4v16' }
] as const satisfies readonly IconEntry[];

export type IconName = (typeof icons)[number]['name'];

export const iconsByName = Object.fromEntries(
  icons.map((icon) => [icon.name, icon])
) as Record<IconName, IconEntry>;

export const iconCount = icons.length;
