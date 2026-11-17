# DesignSpace — Regeln und Benutzung

Diese Datei gilt für jedes Projekt, das `designspace` benutzt. Sie ist der
Vertrag zwischen der Bibliothek und dem Code, der sie importiert.

## Die harten Regeln

- **Hintergrund immer `#000`.** Kein Anthrazit als Seitenfläche.
- **Kein Mittelgrau für Text.** Sekundäres über Größe und Gewicht.
- **Fließtext 15 px**, Labels 13,5 px und fett, Tap-Ziele **48 px**.
- **Atkinson Hyperlegible, immer.** Keine Monospace für UI-Text.
- **Farbe trägt Bedeutung.** Petrol = Handlung, Powerade = Info, Neon = Erfolg,
  Violett = Kategorie, Gold = Warnung, Rot = Fehler. Keine Farbe zur Dekoration.
- **Symmetrie ist Pflicht.** Keine gebrochenen Ecken, keine asymmetrischen Radien.
- **Druck ist senkrecht** — nach unten oder minimal kleiner, nie seitlich.
- **Radius 18** für Controls, **22** für Karten.
- **Buttons sind flach.** Korn ist eine Option für große Flächen, keine Pflicht.
- **Fehler als Karte**, **Info als Toast**, **Laden** als Korn-Skeleton.
- **Icons als Strich 1,8 px**, 24er-Raster, keine Füllung — gefüllt nur die Hauptaktion.
- **Bewegung:** 120 / 200 / 320 ms, `ease-out`; `prefers-reduced-motion` schaltet ab.

## Benutzung

Importiere aus dem kopierten Ordner, nicht aus dem Projekt-`lib`:

```svelte
<script>
  import Button from '$lib/designspace/components/Button.svelte';
</script>
```

Komponenten benutzen **nur Tokens**, keine Farb- oder Pixel-Literale.
Eine neue Komponente kommt ins Manifest (`manifest.ts`) und bekommt Doku
unter `docs/`.

## Was fehlt, fehlt absichtlich

Kein Form-Framework, kein State-Management, kein Tailwind. Die Bibliothek ist
Form und Verhalten, nicht die App-Logik.
