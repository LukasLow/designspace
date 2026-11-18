# AGENTS.md — DesignSpace

Gilt für alles unter diesem Verzeichnis. Die globalen Regeln
(`~/.config/opencode/AGENTS.md`) gelten zusätzlich.

## 1. Zweck

DesignSpace ist eine **wiederverwendbare Design-Bibliothek** und ihre Bühne.
Kein Produkt, keine App mit Fachlogik. Alles, was hier entsteht, muss in einem
anderen Projekt übernehmbar sein.

## 2. Stack

- **SvelteKit 3** mit **adapter-static**. Vollständig vorgerendert
  (`prerender = true`, `trailingSlash = 'always'`).
- **Kein Node auf dem Host.** Builds laufen über Docker:
  `make build` (Dockerfile.build) und `make local-8008` (Dockerfile.local).
- SvelteKit-Konfiguration liegt in `vite.config.ts`. **`svelte.config.js` wird
  von SvelteKit 3 nicht mehr unterstützt.**
- GitHub Pages über `.github/workflows/pages.yml`, `BASE_PATH` kommt aus
  `actions/configure-pages`.

## 3. Harte Design-Regeln (nicht abstimmbar)

- **Seitenhintergrund immer `#000000`.**
- **Kein Mittelgrau für Text.** Kein `#666`, `#888`, `rgba(0,0,0,.6)`.
  Sekundäres wird über Größe und Gewicht unterschieden.
- **Mindestgrößen:** Fließtext 15 px, Labels 13,5 px und 700.
- **Tap-Ziele ≥ 48 px.** Fokus immer sichtbar (3 px, nicht 1 px).
- **Farbe trägt Bedeutung, nie Dekoration.** Jede Farbe hat genau eine Rolle:
  Petrol = Handlung, Powerade = Information, Neon = Erfolg, Violett = Kategorie,
  Gold = Warnung, Rot = Fehler.
- **Farbe als Fläche (Runde 6).** Aktionen und Status sind gefüllt; Rahmen
  verstärken nur. Neon bleibt als Punkt.
- **Symmetrie ist Pflicht.** Keine gebrochenen Ecken, keine asymmetrischen
  Radien, keine schräg gestellten Bausteine. Ein Objekt darf nur durch
  Licht/Schatten und durch Druckverhalten „körperlich" wirken.
- **3D heißt Physik, nicht Geometrie.** Gemeint ist: ein Element sieht aus wie
  ein Gegenstand oder reagiert beim Drücken wie einer. Das ist eine
  Komponenten-Frage (Button, Switch, Karte), keine Form-Frage.
- **Druck ist senkrecht.** Beim Drücken geht es nach unten oder das Element wird
  minimal kleiner — **nie** seitlich, nie diagonal.
- **Material trägt eine Lichtkante (Runde 11, ersetzt Runde 10).** Interaktive
  Flächen haben einen feinen Verlauf von oben (`--ds-brand-top`, `--ds-gloss`);
  kein Wurfschatten, kein Glas, kein Korn-Zwang.
- Atkinson Hyperlegible, **immer** (400/700), self-hosted über Fontsource.
  Kein Font-CDN, kein Schriftwechsel.
- `prefers-reduced-motion` respektieren.

## 4. Arbeitsweise (wichtig)

- **Nichts wird einfach festgelegt.** Jede Design-Entscheidung bekommt
  **mindestens fünf echte, klar verschiedene Varianten** und wird gerendert,
  bevor sie gilt. Varianten, die nur den Akzent tauschen, zählen nicht.
- **Eine Runde = eine Entscheidung.** Nicht alles gleichzeitig.
- **Erst sehen, dann reden.** Screens als echte Routen bauen, nicht als
  Beschreibung.
- **Keine Komponente auf Vorrat.** Eine Komponente entsteht erst, wenn ihre
  Richtung entschieden ist.

## 5. Struktur

```
src/lib/tokens/      CSS-Variablen. Einzige Quelle für Farbe/Typo/Raum/Bewegung.
src/lib/styles/      Reset + Basis. Keine Komponenten-Optik.
src/lib/components/  Eine Komponente = eine Datei. Manifest pflegen.
src/lib/taste/       Richtungen als Daten (registry.ts).
src/routes/          Bühne: Start, Showcase, Taste. Keine neuen Design-Tokens.
```

- Komponenten benutzen **nur** Tokens, keine Farb- oder Pixel-Literale.
- Jede neue Komponente steht in `src/lib/components/manifest.ts` und erscheint
  im Showcase mit allen Zuständen.
- **Jede neue Runde steht in `src/lib/taste/rounds.ts`.** Die Seite `/taste`
  liest ausschließlich diese Liste — ohne Eintrag fehlt die Runde in der
  Übersicht. Ergebnis und `open` dort aktualisieren, nicht nur im Chat.
- Tokens werden nicht in Komponenten überschrieben, sondern in `tokens/`
  erweitert.

## 6. Befehle

- `make build` — statischer Export nach `./dist`.
- `make local-8008` — lokal auf Port 8008 ansehen.
- `make check` — `svelte-check` im Container.
- `make lock` — `package-lock.json` erzeugen (nur wenn sich Dependencies ändern).

Es gibt kein `npm`/`node` auf dem Host. Nicht versuchen.

## 7. Sprache und Stil

- UI-Texte und Dokumentation: **Deutsch**. Bezeichner im Code: Englisch.
- Dateinamen tragen ihre Rolle. Eine Seite = eine Datei.
- Kommentare erklären **warum**, nicht **was**.
- Keine Emojis in Code oder UI, außer auf ausdrückliche Anweisung.

## 8. Die Lib

Alles Wiederverwendbare liegt in `src/lib/designspace/`. Die Regeln dafür stehen
in `src/lib/designspace/.docs/skill.md` — **die gelten auch für dieses Projekt**.
Kein npm-Paket, kein Tailwind, kein Motion-Paket. Die Lib wird kopiert, nicht
installiert.
