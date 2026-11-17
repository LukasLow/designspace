# components/

Hier liegen die Komponenten der Design-Bibliothek. Eine Komponente = eine Datei.

## Regel

Eine Komponente wird **erst** gebaut, wenn ihre Richtung in der Taste-Phase
entschieden ist. Keine Komponente auf Vorrat, keine „schon mal angelegte"
Button-Variante.

Jede Komponente muss im `manifest.ts` stehen und im Showcase mit allen
Zuständen erscheinen (Standard, Hover, Fokus, Disabled, Fehler — soweit
zutreffend).

## Aufbau

```
Button.svelte
  - Props typisiert
  - nur Tokens aus ../tokens/, keine Literale
  - Zustände als echte Props, nicht als CSS-Sonderfälle
```
