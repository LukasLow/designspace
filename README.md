# DesignSpace

Eine eigene Design-Bibliothek statt eines gerenderten Durchschnitts.
Alles auf **100 % Schwarz**, gebaut für **Low Vision**, statisch exportiert und
über **GitHub Pages** online.

Der Sinn: Tokens, Formen und Komponenten, die in anderen Projekten
wiederverwendbar sind — und eine Formensprache, die nicht wie das übliche
AI-Default aussieht.

## Schnellstart

Node wird auf dem Host **nicht** gebraucht. Alles läuft im Container.

```bash
make build        # statischer Export nach ./dist (Dockerfile.build)
make local-8008   # bauen + auf http://localhost:8008 ansehen
make stop         # Container stoppen
make check        # svelte-check im Container
```

## Aufbau

```
src/lib/               Die Bibliothek — das Einzige, was wiederverwendbar ist
  tokens/              Farben, Typo, Raum, Bewegung (nur CSS-Variablen)
  styles/              Reset und Basis
  components/          Komponenten (entstehen erst nach der Taste-Phase)
  taste/               Richtungen als Daten (registry.ts), Demo-Daten, fünf Screens
  taste/screens/       je eine Datei pro Richtung, komplette Screens

src/routes/            Die Bühne
  /                    Start + Stand
  /showcase            Was die Bibliothek kann (Tokens, Komponenten)
  /taste               Die fünf Richtungen und die Vergleichsmethode
  /taste/form          Form-Runde: fünf Varianten, nur Weiß auf Schwarz
  /taste/<slug>        Kompletter Screen einer Richtung (ohne Website-Rahmen)

static/                favicon, .nojekyll, fonts/
deploy/nginx.conf      Auslieferung für Dockerfile.local
```

`src/lib` ist die einzige Quelle der Wahrheit. Routen enthalten keine
Design-Entscheidungen, die nicht in `src/lib` stehen.

## Regeln

- **Hintergrund immer `#000`.** Kein Anthrazit als Seitenfläche.
- **Kein Mittelgrau für Text.** Sekundäres über Größe und Gewicht, nicht über
  `#666`.
- **Mindestens fünf echte Varianten** pro Design-Entscheidung.
- **Nichts wird festgelegt**, bevor es gerendert und ausgewählt wurde.
- **Node nur im Container.** Kein `npm` auf dem Host.

## Schriften

Self-hosted, kein CDN: **Atkinson Hyperlegible** (Braille Institute, für Low
Vision optimiert) kommt über das Paket `@fontsource/atkinson-hyperlegible` und
wird beim Build mitgebündelt. Kein manuelles Kopieren, keine externen Requests.

## GitHub Pages

1. Repo auf GitHub anlegen und pushen.
2. Settings → Pages → Source: **GitHub Actions**.
3. Push auf `main` startet `.github/workflows/pages.yml`.

Der Workflow baut mit **demselben** `Dockerfile.build` wie lokal und setzt
`BASE_PATH` aus `actions/configure-pages`, damit die Seite unter
`https://<user>.github.io/designspace/` funktioniert.

## Nächster Schritt

Schritt 0 ist das Gerüst. Schritt 1 ist die Taste-Phase: dieselbe Aufgabe in
fünf Richtungen (Instrument, Membrane, Formwerk, Editorial, Signal), eine
Entscheidung pro Runde.
