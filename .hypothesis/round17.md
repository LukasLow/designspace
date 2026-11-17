# Runde 17 — Finance

**Status:** läuft · **Screen 3 von 10** · Route `/taste/17/`

## Hypothesen

### H1 — Chart
Der Kursverlauf ist das Bild der Seite und gehört **groß und oben**, quer über die Breite.
**Gegenprobe:** Ein kleiner Chart reicht; die Zahlen sind die Information, nicht die Linie.
**Testet:** `data.md`, `layout.md`.
**Varianten:** 01 voll · 02 links neben den Zahlen · 03 als eigene Karte · 04 klein · 05 klein, Liste führt.

### H2 — Kennzahlen
Sechs Werte gehören in ein **Raster über drei Spalten**, damit man sie in einem Blick liest.
**Gegenprobe:** Eine stehende Spalte rechts ist schneller zu überfliegen als ein Raster.
**Testet:** `data.md`, `type.md`.
**Varianten:** 01 Raster 3×2 · 02 rechte Spalte · 03 eigene Karte · 04 Raster 2×3 · 05 dichte Liste 2 Spalten.

### H3 — Nachrichten
Meldungen stehen **unter dem Chart**, als Liste mit Zeit.
**Gegenprobe:** Rechts neben dem Chart, damit der Kurs oben bleibt.
**Testet:** `layout.md`.
**Varianten:** 01 unten · 02 rechts · 03 unten · 04 keine · 05 dichte Liste.

## Fünf Varianten

| # | Slug | Was anders ist |
|---|---|---|
| 01 | `01-onvista` | Chart volle Breite, Kennzahlen 3×2, News darunter (OnVista-nah) |
| 02 | `02-detail` | Chart links, Kennzahlen und News in einer rechten Spalte |
| 03 | `03-karten` | Chart und Kennzahlen als zwei Karten nebeneinander |
| 04 | `04-fokus` | ein großer Kurs, kleiner Chart, keine News |
| 05 | `05-liste` | dichte Kennzahlen-Liste führt, kleiner Chart, dichte News |

## Ergebnis

**11 Umbau ist die Kurseite.** 10 Mobil ist dieselbe Seite unter 860 px:
gleiche Reihenfolge, nur gestapelt und mit Chips statt Tabs.

- **H1 Chart — bestätigt.** Groß und oben, unter den Tabs.
- **H2 Kennzahlen — bestätigt.** Eigener Block, links unter dem Chart.
- **H3 Meldungen — bestätigt.** Rechts, neben Chart und Kennzahlen.
- **H4 Andocken — bestätigt** (06): Meldungen ohne graue Fläche an die Kurskarte.
- **H5 Tabs — bestätigt.** Ohne Tabs wird die Seite zu lang.
- **H6 Geld/Brief — bestätigt.** Gehört sichtbar in den Kopf, neben Kurs und Info.

## Erkenntnisse

1. Eine Kurseite ist **eine** Seite mit fester Reihenfolge: Info + Handeln + Kurs,
   Tabs, Chart + Tagesspanne, Kennzahlen + Meldungen.
2. Mobil ist keine zweite Gestaltung, sondern dieselbe bei 860 px gekippt.
3. Der Chart trägt die Seite: volle Breite links, die Spanne rechts daneben.



