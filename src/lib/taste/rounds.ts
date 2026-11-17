/**
 * Die Runden-Liste — EINE Quelle für /taste.
 *
 * Neue Runde? Hier eintragen. Sonst fehlt sie in der Übersicht.
 * `slug` ist der Pfad unter /taste, z. B. '14' → /taste/14/ oder 'round12' → /taste/round12/.
 */

export interface RoundEntry {
  no: string;
  slug: string;
  title: string;
  question: string;
  result: string;
  open: boolean;
}

export const rounds: RoundEntry[] = [
  {
    no: '01',
    slug: 'round1',
    title: 'Fünf Richtungen',
    question: 'Welche Richtung?',
    result: 'Entschieden · 3 bleiben, 2 verworfen',
    open: false
  },
  {
    no: '02',
    slug: 'round2',
    title: 'Fünf Formen',
    question: 'Welche Form trägt?',
    result: 'Entschieden · 1, 2 und 4 bleiben, 3 und 5 verworfen',
    open: false
  },
  {
    no: '03',
    slug: 'round3',
    title: 'Button-Physik',
    question: 'Fühlt sich der Druck richtig an?',
    result: 'Entschieden · 3 und 4 bleiben, 2 verworfen, 5 fast',
    open: false
  },
  {
    no: '04',
    slug: 'round4',
    title: 'Druck',
    question: 'Wie soll sich der Druck anfühlen?',
    result: 'Entschieden · 2 Feder und 4 Taste bleiben',
    open: false
  },
  {
    no: '05',
    slug: 'round5',
    title: 'Farbe',
    question: 'Welche Farbe trägt?',
    result: 'Entschieden · Neon und Powerade, gemeinsam',
    open: false
  },
  {
    no: '06',
    slug: 'round6',
    title: 'Palette',
    question: 'Wie laut spricht die Farbe?',
    result: 'Entschieden · 01 Fläche — Aktionen und Status sind gefüllt',
    open: false
  },
  {
    no: '07',
    slug: 'round7',
    title: 'Sechste Farbe',
    question: 'Welche kommt in den Mix?',
    result: 'Entschieden · Violett',
    open: false
  },
  {
    no: '08',
    slug: 'round8',
    title: 'Satz',
    question: 'Welche Farbe trägt die Hauptrolle?',
    result: 'Entschieden · Petrol, Powerade und Neon, getrennte Rollen',
    open: false
  },
  {
    no: '09',
    slug: 'round9',
    title: 'Form',
    question: 'Technisch oder appy?',
    result: 'Entschieden · 05 Weich 18 — Radius 18 für Controls',
    open: false
  },
  {
    no: '10',
    slug: 'round10',
    title: 'Material',
    question: 'Glanz, Matt oder Glas?',
    result: 'Entschieden · Matt mit Korn, schwarze Schrift',
    open: false
  },
  {
    no: '11',
    slug: 'round11',
    title: 'Aufbau',
    question: 'Wie steht der Screen?',
    result: 'Entschieden · Liste + Karte (06), live unter /konto',
    open: false
  },
  {
    no: '12',
    slug: 'round12',
    title: 'Typografie',
    question: 'Wie laut sollen Titel sein?',
    result: 'Entschieden · 03 Laut, Größen auf Minimum angehoben',
    open: false
  },
  {
    no: '13',
    slug: '13',
    title: 'Dichte',
    question: 'Wie viel Luft?',
    result: 'Entschieden · 05 Grob — 84 px Zeilen, größere Schrift',
    open: false
  },
  {
    no: '14',
    slug: '14',
    title: 'Zustände',
    question: 'Wo lebt die Rückmeldung?',
    result: 'Entschieden · Fehler als Karte, Info als Toast',
    open: false
  },
  {
    no: '15',
    slug: '15',
    title: 'Social Profile',
    question: 'Wie sieht ein Mensch aus?',
    result: 'Entschieden · 01, 04, 05 — Banner optional, Name groß, Aktionen rechts',
    open: false
  },
  {
    no: '16',
    slug: '16',
    title: 'Artikel',
    question: 'Wie liest sich ein langer Text?',
    result: 'Entschieden · 45 Zeichen, Inhalt rechts, Tabellen im Fluss (06)',
    open: false
  },
  {
    no: '17',
    slug: '17',
    title: 'Finance',
    question: 'Wie liest man einen Kurs?',
    result: 'Entschieden · 11 Umbau, mobil = 10 (unter 860 px)',
    open: false
  },
  {
    no: '18',
    slug: '18',
    title: 'Login',
    question: 'Wie kommt man rein?',
    result: 'Entschieden · 04 Geteilt, mobil ohne linke Hälfte',
    open: false
  },
  {
    no: '19',
    slug: '19',
    title: 'Chat',
    question: 'Wie redet man?',
    result: 'Entschieden · 01 Zeilen — Gruppe im Kopf, Zeit neben dem Namen',
    open: false
  },
  {
    no: '20',
    slug: '20',
    title: 'Registrierung',
    question: 'Wie entsteht ein Konto?',
    result: 'Entschieden · 01 Geteilt — wie der Login',
    open: false
  },
  {
    no: '21',
    slug: '21',
    title: 'Landing',
    question: 'Wie beginnt eine Seite?',
    result: 'Entschieden · 06 Bento mittig — mittiger Hero, Raster darunter',
    open: false
  },
  {
    no: '22',
    slug: '22',
    title: 'Feed',
    question: 'Wie sieht ein Beitrag aus?',
    result: 'Entschieden · 05 Dicht — Zeilen, Aktionen rechts',
    open: false
  },
  {
    no: '23',
    slug: '23',
    title: 'Verzeichnis',
    question: 'Wie findet man Menschen?',
    result: 'Entschieden · 06 Umschalter — Liste und Karten in einer Ansicht',
    open: false
  },
  {
    no: '24',
    slug: '24',
    title: 'Werkzeuggruppen',
    question: 'Wie docken Aktionen an?',
    result: 'Entschieden · 04 Zwei Gruppen — Gruppierung folgt dem Kontext',
    open: false
  }
];
