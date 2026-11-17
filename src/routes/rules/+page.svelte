<script lang="ts">
  const sections = [
    {
      title: 'Hintergrund und Text',
      points: [
        'Seitenhintergrund immer #000000.',
        'Kein Mittelgrau für Text — Sekundäres über Größe und Gewicht.',
        'Fließtext 15 px, Labels 13,5 px und fett.',
        'Tap-Ziele 48 px, Fokus 3 px und immer sichtbar.'
      ]
    },
    {
      title: 'Schrift',
      points: [
        'Atkinson Hyperlegible, 400 und 700, selbst gehostet.',
        'Keine Monospace für UI-Text — nur für Code.',
        'Ein großer Titel trägt den Screen (32–44 px).',
        'Lesetext ist schmal: 45 Zeichen.'
      ]
    },
    {
      title: 'Form und Druck',
      points: [
        'Symmetrie ist Pflicht — keine gebrochenen Ecken, keine schrägen Bausteine.',
        'Radius 18 für Controls, 22 für Karten.',
        'Druck ist senkrecht: nach unten oder minimal kleiner, nie seitlich.'
      ]
    },
    {
      title: 'Material',
      points: [
        'Buttons sind flach. Korn ist eine Option für große Flächen, keine Pflicht.',
        'Kein Glanzlicht, kein Glas, keine Wurfschatten.'
      ]
    },
    {
      title: 'Zustände',
      points: [
        'Fehler als Karte mit Titel, Erklärung und Aktion.',
        'Info als Toast unten rechts, verschwindet.',
        'Laden als Korn-Skeleton, ohne Schimmer.'
      ]
    },
    {
      title: 'Bewegung',
      points: [
        'Druck 120 ms, Sheet und Toast 200 ms, Seitenwechsel 320 ms.',
        'ease-out; prefers-reduced-motion schaltet alles ab, Zustände bleiben.'
      ]
    },
    {
      title: 'Icons',
      points: [
        'Strich 1,8 px, 24er-Raster, runde Enden, keine Füllung.',
        'Gefüllt nur die Hauptaktion (z. B. Senden).',
        'Form vor Stil: eine unklare Form ist ein Fehler.'
      ]
    },
    {
      title: 'Daten',
      points: [
        'Reihen: Petrol, Powerade, Violett, Neon, Gold — Rot nur negativ.',
        'Höchstens fünf Reihen, Achsen als Haarlinien, keine Flächenverläufe.'
      ]
    }
  ];

  const colors = [
    { tone: 'Petrol', hex: '#37B5BE', role: 'Handlung' },
    { tone: 'Powerade', hex: '#00A8E8', role: 'Information' },
    { tone: 'Neon', hex: '#00E89A', role: 'Erfolg' },
    { tone: 'Violett', hex: '#C4A4FF', role: 'Kategorie' },
    { tone: 'Gold', hex: '#FFC24B', role: 'Warnung' },
    { tone: 'Rot', hex: '#FF0000', role: 'Fehler' }
  ];
</script>

<svelte:head>
  <title>Regeln — DesignSpace</title>
</svelte:head>

<header class="head">
  <p class="ds-eyebrow">Regeln</p>
  <h1>Was nicht zur Abstimmung steht</h1>
  <p class="ds-measure ds-dim">
    Jede Regel ist in einer Runde entschieden und belegt. Sie gilt für jede Komponente und jede
    Vorlage — auch in fremden Projekten.
  </p>
</header>

<section aria-labelledby="farbe-title">
  <h2 id="farbe-title">Farbe</h2>
  <ul class="tones">
    {#each colors as color}
      <li>
        <span class="swatch" style="background: {color.hex}"></span>
        <span class="tone">{color.tone}</span>
        <span class="hex">{color.hex}</span>
        <span class="role">{color.role}</span>
      </li>
    {/each}
  </ul>
  <p class="note">Aktionen und Status sind gefüllt, nicht nur umrandet. Kein Orange.</p>
</section>

{#each sections as section}
  <section>
    <h2>{section.title}</h2>
    <ul class="points">
      {#each section.points as point}
        <li>{point}</li>
      {/each}
    </ul>
  </section>
{/each}

<style>
  .head {
    padding-bottom: var(--ds-space-8);
  }

  h1 {
    margin: var(--ds-space-3) 0 var(--ds-space-4);
    font-size: var(--ds-text-3xl);
    letter-spacing: -0.03em;
    max-width: 22ch;
  }

  h2 {
    margin-bottom: var(--ds-space-3);
    font-size: var(--ds-text-xl);
  }

  section {
    padding: var(--ds-space-5) 0;
    border-top: 1px solid var(--ds-line);
  }

  .tones {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: var(--ds-space-3);
  }

  .tones li {
    display: grid;
    grid-template-columns: 28px 1fr;
    grid-template-rows: auto auto;
    gap: 2px var(--ds-space-3);
    align-items: center;
  }

  .swatch {
    grid-row: span 2;
    width: 28px;
    height: 28px;
    border-radius: 8px;
  }

  .tone {
    font-size: var(--ds-text-sm);
    font-weight: 700;
  }

  .hex,
  .role {
    font-size: var(--ds-text-2xs);
    font-weight: 700;
    color: var(--ds-fg-dim);
  }

  .note {
    margin-top: var(--ds-space-4);
    font-size: var(--ds-text-sm);
    color: var(--ds-fg-dim);
  }

  .points {
    display: grid;
    gap: var(--ds-space-2);
    max-width: 70ch;
    font-size: var(--ds-text-sm);
    line-height: 1.6;
    color: var(--ds-fg-dim);
  }
</style>
