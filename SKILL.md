# DesignSpace — Installation

Kein npm, keine Registry. **Klonen, einen Ordner verschieben, fertig.**

```sh
git clone --depth 1 https://github.com/LukasLow/designspace.git /tmp/designspace
mkdir -p src/lib/designspace
mv /tmp/designspace/src/lib/designspace src/lib/designspace
rm -rf /tmp/designspace
```

Danach liegt die Bibliothek unter `src/lib/designspace/` — Tokens, Styles,
Komponenten, Icons, Bewegung und `docs/`.

**Abhängigkeiten:** Svelte 5, reines CSS. Kein Tailwind, kein Motion-Paket.
Schrift: Atkinson Hyperlegible über `@fontsource/atkinson-hyperlegible`.

**Update:** dasselbe Kommando erneut — der Ordner wird überschrieben.

**Regeln:** `src/lib/designspace/.docs/skill.md`. Die Regeln gelten für jede
Komponente, die du mit dieser Bibliothek baust.
