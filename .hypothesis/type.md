# Schrift und Dichte

## Status
fest (Skala), vermutet (Dichte pro Screen-Typ).

## Was gilt
- **Atkinson Hyperlegible, immer** — kein Mono für UI-Text, auch nicht für Labels.
- Größen: 13,5 (kleinste), 15 (Fließtext), 17 (Basis), 19, 24, 32, 44, Display.
- **Laut**: ein großer Titel (40 px) trägt den Screen, der Rest bleibt klein (Runde 12).
- **Grob**: Listenzeilen 84 px, Label 15, Wert 17, 32 px vor der Liste (Runde 13).
- Nie unter 13,5 px. Labels fett.

## Spektrum
Leise · Klar · Laut · Dual · App (getestet) ·
Zeilen 40/56/72/84 · Labels in Sans/Mono · Titel 20–60 px.

## Offene Fragen
- Gilt „Laut" auch für **dichte** Screens (Chat, Feed) oder nur für Profil/Übersicht?
- Wie lang darf eine **Textspalte** sein (62ch gesetzt, nie getestet)?
- Zahlen: tabellarische Ziffern für Geld und Zeiten?

## Erkenntnisse
- Runde 12: Laut gewinnt; Größen mussten auf das Minimum angehoben werden.
- Runde 13: Grob gewinnt, der Unterschied lag am Abstand, nicht an der Schrift.
- **Runde 15: Im Profil trägt der Name (32–44 px), nicht das Bild.** Auch ohne Bild
  bleibt der Name groß; er ist der Anker der Seite.
- **Runde 16: Lesetext ist schmal — 45 Zeichen**, nicht 62. Der Umbruch führt das Auge.

## Widersprüche
Keine. (Atkinson-Regel widersprach der Mono-Praxis; Runde 14 korrigiert.)

## Bauanleitung
Ein Screen beginnt mit **einem** Titel in 40 px, darunter 15 px Fließtext.
Jede Zeile: Label 15/700 in Sekundärton, Wert 17/700 in Weiß, Höhe 84 px.
