# Regeln — DesignSpace Lib

Diese Regeln gelten für alles, was aus der Bibliothek kommt.

## Hintergrund und Text

- Seitenhintergrund immer **#000000**.
- Text nie in mittleren Graustufen (`#666`, `#888`). Sekundäres wird über
  Größe und Gewicht unterschieden.
- Fließtext mindestens **15 px**, Labels **13,5 px** und fett.
- Tap-Ziele **48 px**, Fokus immer sichtbar (3 px).

## Schrift

**Atkinson Hyperlegible** (400/700), selbst gehostet über Fontsource.
Kein Schriftwechsel, auch keine Monospace für UI-Text. Monospace nur für Code.

## Farbe

Jede Farbe hat genau eine Rolle:

| Ton | Rolle |
|---|---|
| Petrol `#37B5BE` | Handlung |
| Powerade `#00A8E8` | Information |
| Neon `#00E89A` | Erfolg |
| Violett `#C4A4FF` | Kategorie |
| Gold `#FFC24B` | Warnung |
| Rot `#FF0000` | Fehler |

Aktionen und Status sind **gefüllt**, nicht nur umrandet.
Rot und Neon werden auch über Helligkeit getrennt, nicht nur über Farbton.
**Kein Orange** (kollidiert mit Gold und Rot).

## Form

- **Symmetrie ist Pflicht.** Keine gebrochenen Ecken, keine asymmetrischen Radien.
- Radius **18 px** für Controls, **22 px** für Karten.
- Druck ist **senkrecht** — nach unten oder minimal kleiner, nie seitlich.

## Material

Buttons und Aktionen sind **flach**. Das Korn ist eine Option für große Flächen,
keine Pflicht. Kein Glanzlicht, kein Glas, keine Wurfschatten.

## Zustände

- **Fehler** als Karte mit Titel, Erklärung und Aktion.
- **Info** als Toast unten rechts, verschwindet.
- **Laden** als Korn-Skeleton, ohne Schimmer.

## Bewegung

Druck 120 ms · Sheet/Toast 200 ms · Seitenwechsel 320 ms, `ease-out`.
`prefers-reduced-motion` schaltet alle Übergänge ab, Zustände bleiben.

## Icons

Strich **1,8 px**, 24er-Raster, runde Enden, runde Ecken, keine Füllung.
Gefüllt ist nur die Hauptaktion (z. B. Senden). Form vor Stil: unklare Form ist ein Fehler.

## Daten

Reihen: Petrol, Powerade, Violett, Neon, Gold. Rot bleibt für negativ.
Höchstens fünf Reihen; Achsen als Haarlinien, keine Flächenverläufe.
