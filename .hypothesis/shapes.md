# Form und Druck

## Status
fest für Controls, offen für Flächen über 40 px.

## Was gilt
- **Symmetrie ist Pflicht** (Runde 2/9): keine gebrochenen Ecken, keine schrägen Bausteine.
- **Radius 18** für Buttons und Eingaben (Runde 9, Turnier 05 Weich 18).
- **Radius 22** für Karten (gesetzt, nicht getestet).
- **Druck ist senkrecht**: nach unten oder minimal kleiner, nie seitlich (Runde 4).
- Zwei Physiken bleiben: `feder` (hebt, federt) und `taste` (Sockel, drückt).

## Spektrum
Radius 0 · 4 · 6 · 8 · 12 · 14 · 18 · 22 · 28 · Pille ·
Kante 0/1/2 px · Sockel · Innenkante · Wurfschatten (verboten) · Glas (verworfen).

## Offene Fragen
- Bekommen **Karten** einen anderen Radius als Controls (22 vs 18) oder denselben?
- Wie verhält sich der Radius bei **großen Flächen** (Hero, Sheet, Dialog)?
- Bleibt `feder` oder `taste` Standard?

## Erkenntnisse
- Runde 2: Kante, Weich, Raster bleiben; Organisch und Fläche raus.
- Runde 9: 18 px gewinnt im Turnier, Kante und Pille verlieren.

## Widersprüche
Keine. (Kartenradius 22 ist vermutet, nicht gemessen.)

## Bauanleitung
Control: `min-height 48`, `border 2px transparent`, `radius 18`,
Fläche in der Rollenfarbe, Text in `-ink`.
Karte: `radius 22`, `border 1px line`, kein Schatten.
