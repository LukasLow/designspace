<script lang="ts">
  import { resolve } from '$app/paths';
  import ColorDemo from '#lib/taste/ColorDemo.svelte';
  import type { ColorVariant } from '#lib/taste/color-variants';

  const colors: Array<{
    key: ColorVariant;
    no: string;
    title: string;
    hex: string;
    contrast: string;
    note: string;
  }> = [
    {
      key: 'blatt',
      no: '01',
      title: 'Blatt',
      hex: '#3FBF6F',
      contrast: '8,9:1',
      note: 'Der grüne Rand der Achse. Ruhig, aber nah am üblichen Erfolgs-Grün.'
    },
    {
      key: 'mitte',
      no: '02',
      title: 'Mitte',
      hex: '#00C98A',
      contrast: '9,7:1',
      note: 'Die Mitte: grün genug für Blatt, kühl genug für Powerade.'
    },
    {
      key: 'neon',
      no: '03',
      title: 'Neon',
      hex: '#00E89A',
      contrast: '13,0:1',
      note: 'Heller und leuchtender. Mehr Signal — und mehr Anstrengung für die Augen.'
    },
    {
      key: 'powerade',
      no: '04',
      title: 'Powerade',
      hex: '#00A8E8',
      contrast: '7,8:1',
      note: 'Der blaue Rand. Kühl und technisch, weiter weg vom Blatt.'
    },
    {
      key: 'tief',
      no: '05',
      title: 'Tief',
      hex: '#0E9F78',
      contrast: '6,3:1',
      note: 'Dunkler und ruhiger. Angenehm auf Schwarz, aber weniger Energie.'
    }
  ];
</script>

<svelte:head>
  <title>Runde 5 — Taste — DesignSpace</title>
</svelte:head>

<div class="screen">
  <div class="wrap">
    <nav class="crumb">
      <a href={resolve('/taste')}>← Alle Runden</a>
      <span>Runde 5 · Farbe</span>
    </nav>

    <header class="head">
      <p class="kicker">Deine Richtung</p>
      <h1>Welche Farbe trägt?</h1>
      <p class="lede">
        Blattgrün und Powerade-Blau, die Mitte. Fünf Punkte auf dieser Achse. Form, Schrift und
        Anordnung bleiben gleich; Warn und Fehler bleiben unverändert. Nur der Akzent ändert sich.
      </p>
    </header>

    <ol class="colors">
      {#each colors as c}
        <li>
          <div class="vhead">
            <span class="no">{c.no}</span>
            <h2>{c.title}</h2>
            <span class="hex"><i style="background: {c.hex}"></i>{c.hex}</span>
            <span class="contrast">Kontrast {c.contrast}</span>
          </div>
          <p class="note">{c.note}</p>
          <ColorDemo variant={c.key} />
        </li>
      {/each}
    </ol>

    <footer class="foot">
      <p class="kicker">Nächster Schritt nach dem Ton</p>
      <p class="lede">
        Erst der Ton, dann die Rolle: trägt die Farbe nur Handlung und Status, oder auch Flächen,
        Linien und Daten? Das wird die Runde danach — nicht diese.
      </p>
    </footer>
  </div>
</div>

<style>
  .screen {
    min-height: 100dvh;
    background: #000;
    color: #fff;
  }

  .wrap {
    width: min(100% - 2 * var(--ds-space-6), 1060px);
    margin-inline: auto;
    padding: var(--ds-space-5) 0 var(--ds-space-11);
  }

  .crumb {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: var(--ds-font-mono);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #d0d0d0;
    padding-bottom: var(--ds-space-4);
    border-bottom: 1px solid rgba(255, 255, 255, 0.16);
  }

  .crumb a {
    display: inline-flex;
    align-items: center;
    min-height: var(--ds-tap-min);
    color: #d0d0d0;
    text-decoration: none;
  }

  .crumb a:hover {
    color: #fff;
  }

  .head {
    padding: var(--ds-space-8) 0 var(--ds-space-7);
  }

  .kicker {
    font-family: var(--ds-font-mono);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #d0d0d0;
    margin-bottom: var(--ds-space-3);
  }

  h1 {
    font-size: clamp(2.2rem, 5vw, 3.4rem);
    line-height: 1;
    letter-spacing: -0.04em;
    margin-bottom: var(--ds-space-4);
    max-width: 22ch;
  }

  .lede {
    max-width: 62ch;
    font-size: 16px;
    line-height: 1.6;
    color: #d0d0d0;
  }

  .colors {
    display: grid;
    gap: var(--ds-space-9);
  }

  .colors > li {
    padding-top: var(--ds-space-6);
    border-top: 1px solid rgba(255, 255, 255, 0.16);
  }

  .vhead {
    display: flex;
    align-items: baseline;
    gap: var(--ds-space-3);
    flex-wrap: wrap;
    margin-bottom: var(--ds-space-2);
  }

  .no {
    font-family: var(--ds-font-mono);
    font-size: 12px;
    font-weight: 700;
    color: #d0d0d0;
  }

  h2 {
    font-size: 24px;
    letter-spacing: -0.02em;
  }

  .hex,
  .contrast {
    font-family: var(--ds-font-mono);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.06em;
    color: #d0d0d0;
  }

  .hex {
    margin-left: auto;
    display: inline-flex;
    align-items: center;
    gap: var(--ds-space-2);
  }

  .hex i {
    width: 14px;
    height: 14px;
    display: inline-block;
  }

  .note {
    max-width: 66ch;
    font-size: 14px;
    line-height: 1.55;
    color: #d0d0d0;
    margin-bottom: var(--ds-space-4);
  }

  .foot {
    margin-top: var(--ds-space-10);
    padding-top: var(--ds-space-7);
    border-top: 2px solid rgba(255, 255, 255, 0.4);
  }

  @media (max-width: 700px) {
    .hex {
      margin-left: 0;
    }
  }
</style>
