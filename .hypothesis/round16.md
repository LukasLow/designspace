# Runde 16 — Artikel

**Status:** läuft · **Screen 2 von 10** · Route `/taste/16/`

## Hypothesen

### H1 — Textmaß
Lange Artikel brauchen eine schmale Spalte (max. 62 Zeichen), sonst verliert das Auge die Zeile.
**Gegenprobe:** Bei Low Vision ist ein breiteres Maß mit größerer Schrift besser als eine enge
Spalte, die ständig umbricht. **Testet:** `type.md`.
**Varianten:** 01 = 62ch · 02 = 45ch · 03 = 62ch + Randspalte · 04 = 720px · 05 = 720px dicht.

### H2 — Inhaltsverzeichnis
Ein Inhaltsverzeichnis gehört als **stehende Spalte** neben den Text, damit man springen kann.
**Gegenprobe:** Ein TOC als Karte am Anfang reicht und hält die Seite ruhig.
**Testet:** `layout.md`.
**Varianten:** 01 links stehend · 02 keins · 03 rechts stehend · 04 Karte oben · 05 Chips-Zeile.

### H3 — Tabellen und Infobox
Tabellen und Faktenkästen brauchen eigenen Raum (Rand oder Kasten), nicht den Fließtext.
**Gegenprobe:** Dicht im Fluss gelesen ist schneller als jedes Springen.
**Testet:** `data.md`, `density.md`.

## Fünf Varianten

| # | Slug | Was anders ist |
|---|---|---|
| 01 | `01-klassisch` | TOC links stehend, Text 62ch, Infobox im Fluss |
| 02 | `02-buch` | eine Spalte 45ch, keine TOC, Kapitelnummern |
| 03 | `03-zwei-spalten` | Text links, TOC und Infobox rechts |
| 04 | `04-fliessend` | 720px, TOC als Karte oben |
| 05 | `05-dicht` | 720px, TOC als Chips, dichte Tabelle |

## Ergebnis

**Keine Variante allein.** Die drei Antworten ergeben eine Kombination:

- **Textmaß: 45 Zeichen** (aus 02) — schmaler als 62, buchnah.
- **Inhaltsverzeichnis: rechts stehend** (aus 03).
- **Tabelle und Fakten: im Fließtext** (aus 01).

Als `06-kombi` gebaut, damit die Entscheidung sichtbar ist.

- **H1 Textmaß — bestätigt, aber schmaler als gedacht.** 45 Zeichen gewinnen gegen 62.
- **H2 Inhaltsverzeichnis — bestätigt, aber rechts.** Stehend ja, links nein.
- **H3 Tabellen — bestätigt.** Im Fluss, nicht in einer Randspalte, nicht am Ende.

## Erkenntnisse

1. Lesetext ist **schmal** (45 Zeichen), nicht „übliche 62".
2. Ein Inhaltsverzeichnis sitzt **rechts** — der Text beginnt links, das Verzeichnis begleitet.
3. Tabellen und Fakten bleiben im Text; sie brauchen keinen eigenen Raum.

