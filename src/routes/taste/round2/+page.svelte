<script lang="ts">
  import RoundSheet from '#lib/taste/RoundSheet.svelte';

  const items = [
    {
      key: 'kante' as const,
      no: '01',
      title: 'Kante',
      spec: 'Radius 0 · Rahmen 2 px · harte Extrusion',
      note: 'Nichts ist weich. Die Kante selbst ist das Signal, der Schatten ist massiv statt diffus.',
      keeps: 'Klar, laut, unverwechselbar. Kostet Ruhe.',
      verdict: 'gut' as const
    },
    {
      key: 'weich' as const,
      no: '02',
      title: 'Weich',
      spec: 'Radius 28 px · Lichtkante 1 px · weicher Schatten',
      note: 'Tiefe entsteht aus Licht, nicht aus Linien. Flächen schweben, ohne zu schreien.',
      keeps: 'Ruhig und hochwertig, aber sehr zeitgeistig.',
      verdict: 'gut' as const
    },
    {
      key: 'organisch' as const,
      no: '03',
      title: 'Organisch',
      spec: 'Radius 30 px, eine Ecke 8 px · Tropfenformen',
      note: 'Eine Ecke bricht die Regel. Der Avatar ist keine Scheibe, das Feld kein Kasten.',
      keeps: 'Eigene Handschrift — hier aber nicht gewollt.',
      verdict: 'nein' as const
    },
    {
      key: 'raster' as const,
      no: '04',
      title: 'Raster',
      spec: 'Radius 6 px · Haarlinie · dichte Abstände',
      note: 'Alles sitzt auf einer engen Achse. Form ist zurückhaltend, Ordnung ist sichtbar.',
      keeps: 'Präzise und schnell lesbar. Sehr nah an Kante.',
      verdict: 'gut' as const
    },
    {
      key: 'flaeche' as const,
      no: '05',
      title: 'Fläche',
      spec: 'Keine Kästen · nur Linien und eine gefüllte Bahn',
      note: 'Struktur kommt aus Typografie und Trennlinien. Der einzige gefüllte Block ist die Hauptaktion.',
      keeps: 'Leicht und redaktionell — hier aber nicht gewollt.',
      verdict: 'nein' as const
    }
  ];
</script>

<RoundSheet
  round="Runde 2 · Form"
  title="Welche Form trägt?"
  lede="Gleicher Inhalt, gleiche Schrift, nur Weiß auf Schwarz. Es ändert sich ausschließlich die Form — Radius, Kante, Tiefe, Abstand. Farbe kommt erst danach."
  {items}
  out={[
    'Organisch — gebrochene Ecke, Tropfenformen.',
    'Fläche — keine Kästen, nur Linien.'
  ]}
/>
