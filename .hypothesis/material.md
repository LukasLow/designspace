# Material, Effekte, Bewegung

## Status
fest (Matt), offen (Glow, Effekte, Übergänge).

## Was gilt
- **Matt** mit feinem Korn, 81 % Deckkraft (Runde 10, zweimal um 10 % reduziert).
- Kein Glanzlicht, kein Wurfschatten, kein Glas (Runde 10 verworfen).
- Aktionsflächen tragen Korn; reine Textflächen nicht.
- Bewegung: kurz, funktional; `prefers-reduced-motion` immer respektieren.

## Spektrum
Matt · Glanz · Glas · Samt · Metall (getestet) ·
Korn 0 / 30 / 60 / 100 % · Glow an/aus · Schatten 0 / weich / hart.

## Bewegung (entschieden, simuliert)
- **Druck:** 120 ms, `ease-out`, senkrecht.
- **Karte/Sheet:** 200 ms einblenden, Scrim 200 ms.
- **Toast:** 200 ms rein, 3–4 s stehen, 200 ms raus.
- **Seitenwechsel:** 320 ms, nur Deckkraft und 4 px Versatz.
- `prefers-reduced-motion`: alle Übergänge aus, Zustände bleiben.

## Offene Fragen
- Ist **Glow** als Bedeutung erlaubt („läuft", „live") oder bleibt er verboten?
- Brauchen Charts **Verläufe** (Fläche unter der Linie)?

## Erkenntnisse
- Runde 10: Matt Petrol gewinnt, 30 % stärkeres Korn, schwarze Schrift.
- Runde 14: Korn nochmals −10 % auf 81 %.
- Glas wirkte wie ein Bedienteil, nicht wie ein Button.

## Widersprüche
Keine.

## Bauanleitung
Matt = Flächenfarbe + `--ds-grain` (SVG-Rauschen, overlay) + `box-shadow: none`
+ Text in Schwarz. Kein Verlauf nach oben, keine helle Innenkante.
