/**
 * Taste-Registry — die Fragen, die wir dem Auge stellen.
 *
 * Methode: Statt zu fragen „magst du Glas?" bauen wir fünf echte, klar
 * verschiedene Richtungen und zeigen dieselbe Aufgabe in jeder. Das Auge
 * antwortet schneller und ehrlicher als das Vokabular.
 *
 * Regeln:
 * - Eine Runde = eine Entscheidung.
 * - Mindestens fünf echte Varianten pro Entscheidung, keine Varianten, die
 *   nur Farbe tauschen.
 * - Nichts wird „endgültig", solange nicht entschieden.
 */

export type DirectionStatus =
  | 'geplant'
  | 'gebaut'
  | 'im-vergleich'
  | 'entschieden'
  | 'verworfen';

export interface Direction {
  slug: string;
  index: number;
  title: string;
  /** Was diese Richtung behauptet — in einem Satz. */
  thesis: string;
  /** Woher die DNA kommt. */
  dna: string[];
  /** Was diese Richtung testet (die eigentliche Frage an das Auge). */
  asks: string;
  /** Wo sie brechen kann. */
  risk: string;
  status: DirectionStatus;
}

export const directions: Direction[] = [
  {
    slug: 'instrument',
    index: 1,
    title: 'Instrument',
    thesis:
      'Dichte und Präzision erzeugen Vertrauen: enge Raster, 1-px-Linien, monochrom, ein einziger Signalton.',
    dna: ['1Password', 'Proton', 'Linear', 'Statuna design.md (Klarheit, keine Graustufen)'],
    asks: 'Fühlt sich Dichte kompetent an — oder eng?',
    risk: 'Kippt schnell in ein Admin-Tool. Ohne Farbe wird Hierarchie anstrengend.',
    status: 'verworfen'
  },
  {
    slug: 'membrane',
    index: 2,
    title: 'Membrane',
    thesis:
      'Tiefe entsteht aus Licht: schwarze Fläche, schwebende Ebenen, Lichtkanten statt harter Rahmen.',
    dna: ['DailyKonto (Mint, Glow, runde Karten)', 'Apple', 'visionOS-Materialien'],
    asks: 'Wirkt die Tiefe hochwertig — oder matschig?',
    risk: 'Blur und Glow fressen Kontrast und Performance. Für Low Vision gefährlich.',
    status: 'im-vergleich'
  },
  {
    slug: 'formwerk',
    index: 3,
    title: 'Formwerk',
    thesis:
      'Form trägt Bedeutung: Kreis, Dreieck, Vieleck und Kante sagen etwas — Farbe ist nur Verstärkung.',
    dna: ['Statuna Status-Icons', 'Dieter Rams', 'Bauhaus', '3D-Extrusion statt Schatten'],
    asks: 'Trägt Geometrie allein genug Information?',
    risk: 'Kann kühl und brutalistisch wirken; Wärme und Lesbarkeit müssen aktiv gebaut werden.',
    status: 'verworfen'
  },
  {
    slug: 'editorial',
    index: 4,
    title: 'Editorial',
    thesis:
      'Typografie ist der Hauptdarsteller: große Displayschrift, Creme/Sand als Zweitfarbe, fast keine Rahmen.',
    dna: ['Statuna look2 und look3', 'Magazin-Layout', 'DailyKonto (Premium-Ruhe)'],
    asks: 'Gibt große Schrift Orientierung — oder überfordert sie?',
    risk: 'Große Typo plus Low Vision ist ein Balanceakt; Dichte wird schwer.',
    status: 'im-vergleich'
  },
  {
    slug: 'signal',
    index: 5,
    title: 'Signal',
    thesis:
      'Farbe ist die Sprache: gesättigte Statusfarben auf Tiefschwarz, Chips und Werte tragen die Bedeutung.',
    dna: ['DailyKonto-Palette', 'Statuna Statussemantik', 'TradingView-Dichte'],
    asks: 'Hilft Farbe beim Lesen — oder wird es ein Regenbogen?',
    risk: 'Farbflut statt Hierarchie; Rot/Grün allein ist kein Signal.',
    status: 'im-vergleich'
  }
];

export const directionBySlug = (slug: string): Direction | undefined =>
  directions.find((direction) => direction.slug === slug);
