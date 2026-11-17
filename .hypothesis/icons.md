# Icons

## Status
**fest (simuliert).** Keine eigene Runde — aus den Tests in Runde 11 und 19 abgeleitet.

## Was gilt (entschieden)
- **Strich 1,8 px**, 24er-Grid, runde Enden, runde Ecken (2 px), **keine Füllung**.
- **Gefüllt nur die Hauptaktion** (Senden). Alles andere bleibt Strich.
- Größen: 16 px im Text, 20 px in Zeilen, 24 px allein stehend.
- Unklare Formen sind Fehler, nicht Geschmack (Büroklammer → Plus).

## Begründung
1,5 px war bei 13,5-px-Text zu dünn für Low Vision; 2,0 px wirkt in einer Reihe schwer.
1,8 px hat in Sidebar und Chatkopf getragen.

## Spektrum
Strich 1,25 / 1,5 / 1,75 / 2 / 2,5 ·
Enden rund / eckig · Ecken rund / scharf ·
gefüllt / Strich / duotone ·
24er / 20er / 16er Grid · 1 px/2 px Rand ·
Icon-only-Buttons (48 px) · Icon + Text.

## Offene Fragen
- **Strichstärke**: 1,5 (fein), 1,8 (jetzt), 2,0 (kräftig) — was trägt bei Low Vision?
- **Füllung**: dürfen aktive Icons gefüllt sein oder bleibt Strich + Fläche?
- **Ecken**: runde Enden (jetzt) oder eckige, passend zur kantigen Form?

## Erkenntnisse
- Runde 11: Icons in der Sidebar ergänzt, keine Varianten getestet.
- **Runde 19: Strich 1,8 funktioniert ohne Text.** Telefon und Video im Chatkopf wurden
  akzeptiert; die Hauptaktion (Senden) bleibt gefüllt, alles andere Strich.
  Eine unklare Form (Büroklammer) wurde sofort als Fehler gelesen — Form vor Stil.

## Widersprüche
Keine — aber der Parameter ist zu wenig getestet für „fest".

## Bauanleitung
```
Grid 24×24, Safe-Area 2 px
Strich 1,8 px, Linienenden rund, Ecken rund (2 px)
Keine Füllung; Fläche nur über die Kachel
Kachel 28×28, Radius 8
```
Ein neues Icon muss auf diesem Raster sitzen und ohne Beschriftung erkennbar sein.
