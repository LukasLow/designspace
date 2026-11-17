# Parameter-Übersicht

| Datei | Parameter | Status | Sicherheit |
|---|---|---|---|
| `colors.md` | Palette, Rollen, Kontrast | fest | hoch |
| `shapes.md` | Radius, Kante, Druck, Symmetrie | fest | hoch |
| `type.md` | Schrift, Skala, Labels, Dichte | fest | mittel |
| `material.md` | Korn, Glanz, Glas, Effekte, Bewegung | fest | mittel |
| `layout.md` | Aufbau, Navigation, Zustände | fest | mittel |
| `icons.md` | Icons: Strich, Grid, Füllung | vermutet | niedrig |
| `forms.md` | Formulare, Validierung, Feedback | offen | niedrig |
| `data.md` | Tabellen, Charts, Kalender | offen | keine |

**Konvergenz:** drei Screens in Folge ohne Änderung. Noch nicht erreicht.

**Nächster Screen:** Social Profile (`screens.md`, Platz 1) — **erledigt.**

## Entschieden (simuliert)

- **Icons:** Strich 1,8 px, gefüllt nur die Hauptaktion, 24er-Grid.
- **Bewegung:** 120 / 200 / 320 ms, ease-out, reduced-motion aus.
- **Daten:** fünf Reihen (Petrol, Powerade, Violett, Neon, Gold), Rot nur negativ.

## Der Plan danach

Die Lib ist **kein npm-Paket**, sondern ein Ordner zum Kopieren:
`src/lib/designspace/` mit Tokens, Styles, Komponenten, Icons, Bewegung und `docs/`.
Installieren per `tools/install-designspace.sh`. Kein Tailwind, kein Motion-Paket.

Die Website wird zu vier Bereichen: **Components · Screens · Icons · Rules**.
Screens bekommen eigene Routen (kein iframe). Rules kommen aus einem buch.
Die Runden bleiben als **Archiv** online.
