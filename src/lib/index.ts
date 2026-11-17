/**
 * DesignSpace — öffentliche Bibliothek.
 *
 * Was hier exportiert wird, darf in anderen Projekten verwendet werden.
 * `src/lib` ist die einzige Quelle der Wahrheit für Tokens, Styles und
 * Komponenten; die Routen unter `src/routes` sind nur die Bühne.
 *
 * Regeln:
 * - Eine Komponente = eine Datei in components/.
 * - Eine Komponente wird erst gebaut, wenn ihre Richtung in der Taste-Phase
 *   entschieden ist. Keine Komponente „auf Vorrat".
 * - Tokens sind CSS-Variablen, keine JS-Werte.
 */

export * from './taste/registry.js';
