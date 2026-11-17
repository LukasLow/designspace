/** Die Vorlagen: je ein Screen, erreichbar unter /vorlagen/<slug>. */

export interface Vorlage {
  slug: string;
  title: string;
  note: string;
  source: string;
}

export const vorlagen: Vorlage[] = [
  {
    slug: 'einstellungen',
    title: 'Einstellungen',
    note: 'Navigation links, Zeilen mit Karte von rechts. Der Konto-Screen.',
    source: 'src/lib/screens/KontoScreen.svelte'
  },
  {
    slug: 'login',
    title: 'Login',
    note: 'Geteilte Seite: Marke links, Formular rechts; mobil nur das Formular.',
    source: 'LoginDemo · geteilt'
  },
  {
    slug: 'registrieren',
    title: 'Registrieren',
    note: 'Wie der Login, ein Feld mehr. Kein eigener Seitentyp.',
    source: 'RegisterDemo · geteilt'
  },
  {
    slug: 'profil',
    title: 'Profil',
    note: 'Name trägt, Banner optional, Aktionen rechts.',
    source: 'ProfileDemo · twitter'
  },
  {
    slug: 'artikel',
    title: 'Artikel',
    note: '45 Zeichen Text, Inhalt links, Fakten rechts.',
    source: 'ArticleDemo · dreispaltig'
  },
  {
    slug: 'kurs',
    title: 'Kurs',
    note: 'Info + Handeln + Kurs, Tabs, Chart mit Tagesspanne, Kennzahlen und Meldungen.',
    source: 'FinancePage · umbau'
  },
  {
    slug: 'chat',
    title: 'Chat',
    note: 'Zeilen mit Gruppe im Kopf, Zeit neben dem Namen.',
    source: 'ChatDemo · zeilen'
  },
  {
    slug: 'feed',
    title: 'Feed',
    note: 'Dichte Zeilen, Aktionen rechts, Filter als Chips.',
    source: 'FeedDemo · dicht'
  },
  {
    slug: 'verzeichnis',
    title: 'Verzeichnis',
    note: 'Liste und Karten mit Umschalter, Suche und Chips.',
    source: 'DirectoryDemo · umschalter'
  },
  {
    slug: 'landing',
    title: 'Landing',
    note: 'Mittiger Hero mit Bento-Raster, Shell oben.',
    source: 'LandingDemo · bento-mitte'
  }
];

export const vorlageBySlug = (slug: string): Vorlage | undefined =>
  vorlagen.find((vorlage) => vorlage.slug === slug);
