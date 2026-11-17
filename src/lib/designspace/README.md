# DesignSpace Lib

Eine kopierbare Bibliothek, **kein npm-Paket**. Alles liegt in diesem Ordner:
Tokens, Styles, Komponenten, Icons, Bewegung und Regeln.

## Installieren

```sh
sh tools/install-designspace.sh src/lib/designspace
```

Das klont `LukasLow/designspace` nach `/tmp`, kopiert `src/lib/designspace` in
dein Projekt und löscht den Klon. Updates: dasselbe Kommando erneut.

## Abhängigkeiten

**Svelte 5. Kein Tailwind, kein Motion-Paket, kein Font-CDN.**
Schrift: Atkinson Hyperlegible (über Fontsource, selbst gehostet).

## Was drin ist

| Ordner | Inhalt |
|---|---|
| `tokens/` | Farben, Schrift, Raum, Radius, Bewegung |
| `styles/` | Reset, Basis, Material |
| `components/` | Komponenten, je eine Datei |
| `icons/` | Icon-Set mit Raster und Strichstärke |
| `motion/` | Übergänge |
| `.docs/` | Regeln, Props, Beispiele |

## Regeln

Siehe `.docs/skill.md` und `.docs/regeln.md`. Die wichtigsten: Schwarz `#000`, Atkinson immer,
kein Mittelgrau für Text, Symmetrie, Druck senkrecht, Radius 18 für Controls,
Fehler als Karte, Info als Toast, Icons als Strich.
