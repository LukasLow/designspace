# Komponenten — Vertrag

Jede Komponente in `components/` hält diesen Vertrag ein.

## Aufbau

```
ComponentName.svelte
```

- Eine Komponente = eine Datei.
- Props typisiert, mit sinnvollen Vorgaben.
- Kinder über `Snippet` (`children`), nicht über Slots.
- Kein globaler Zustand, kein Store. Die Komponente kennt nur ihre Props.

## Stil

- **Nur Tokens.** Keine Hex-Werte, keine Pixel-Literale für Farbe oder Radius.
- Radius: `var(--ds-radius-control)` für interaktive Teile, `var(--ds-radius-lg)` für Karten.
- Fokus: `outline: var(--ds-border-focus) solid var(--ds-brand); outline-offset: 3px`.
- Mindesthöhe interaktiver Teile: `var(--ds-tap-min)` (48 px).
- Übergänge: `var(--ds-dur-1)`/`--ds-dur-2`, `--ds-ease-out`; `prefers-reduced-motion`
  schaltet sie ab.

## Pflicht-Zustände

Jede interaktive Komponente liefert mindestens: Standard, Hover, Fokus, Aktiv (Druck),
Disabled. Wo es Sinn ergibt zusätzlich: Fehler, Geladen, Leer.

## Dokumentation

- Eintrag in `components/manifest.ts` (Name, Status, Beschreibung).
- Eintrag in `components/docs.ts` (Props, Zustände, Tastatur, Quelldatei).
- Die Seite `/components/<slug>/` zeigt beides und eine echte Vorschau.

## Verboten

- Eine Komponente „auf Vorrat" ohne entschiedene Richtung.
- Eigene Farben oder Radien, die nicht in `tokens/` stehen.
- Schatten als Tiefe (nur Karten dürfen eine Haarlinie tragen).
- Text unter 13,5 px, Ziele unter 48 px.
