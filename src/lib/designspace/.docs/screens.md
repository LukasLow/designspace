# Screens — Vertrag

Eine Vorlage ist ein ganzer Screen, gebaut **nur** aus Bibliotheksteilen.

## Aufbau

- Eine Vorlage = eine Route unter `/vorlagen/<slug>/`, ohne Website-Rahmen.
- Kein eigenes CSS für Grundformen: Abstände, Farben und Radien kommen aus Tokens.
- Komposition statt Erfindung: Wenn eine Form fehlt, wird sie zur Komponente — nicht
  inline in die Vorlage geschrieben.

## Was eine Vorlage zeigen muss

- Kopf mit Titel (ein großer Titel, 32–44 px).
- Den Hauptinhalt in der entschiedenen Dichte (Zeilen 84 px, Listen dicht).
- Alle Zustände, die im Alltag vorkommen: leer, laden, Fehler (als Karte), Info (als Toast).
- Mobil: unter 860 px kippt die Seite in eine Spalte; Marken-Hälften fallen weg.

## Reihenfolge der Entscheidungen

1. Layout (Liste + Karte, geteilt, mittig) — steht.
2. Dichte (grob) — steht.
3. Zustände — steht.
4. Farbe, Material, Form — stehen.

## Verboten

- Eine Vorlage mit neuen Tokens.
- Ein Screen, der nur auf dem Desktop funktioniert.
- Dekorative Bilder. Flächen tragen Korn, keine Fotos.
