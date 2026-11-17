<script lang="ts">
  import { resolve } from '$app/paths';
  import PhysicalButton from '#lib/taste/PhysicalButton.svelte';
  import type { ButtonPhysics } from '#lib/taste/button-physics';

  const physics: Array<{
    key: ButtonPhysics;
    no: string;
    title: string;
    note: string;
    feels: string;
  }> = [
    {
      key: 'flach',
      no: '01',
      title: 'Flach',
      note: 'Keine Tiefe. Beim Drücken ändert sich nur die Farbe.',
      feels: 'Ruhig und billig. Der Klick ist nicht zu spüren.'
    },
    {
      key: 'stempel',
      no: '02',
      title: 'Stempel',
      note: 'Ein massiver Schatten. Beim Drücken wandert der Knopf in den Schatten hinein.',
      feels: 'Sehr direkt. Man sieht die Strecke, die der Finger drückt.'
    },
    {
      key: 'gesenkt',
      no: '03',
      title: 'Gesenkt',
      note: 'Der Knopf liegt in der Fläche. Beim Drücken sinkt er tiefer ein.',
      feels: 'Wie eine Taste an einem Gerät. Braucht Kontrast, sonst wirkt es flach.'
    },
    {
      key: 'feder',
      no: '04',
      title: 'Feder',
      note: 'Weicher Schatten, leichtes Anheben. Beim Drücken federt der Knopf zurück.',
      feels: 'Weich und hochwertig. Nah am Zeitgeist.'
    },
    {
      key: 'doppelt',
      no: '05',
      title: 'Doppelt',
      note: 'Zwei echte Lagen statt Schatten: der Deckel legt sich beim Drücken auf die Basis.',
      feels: 'Körperlich, ohne Verwischen. Der klarste Gegenstand von den fünf.'
    }
  ];
</script>

<svelte:head>
  <title>Runde 3 — Taste — DesignSpace</title>
</svelte:head>

<div class="screen">
  <div class="wrap">
    <nav class="crumb">
      <a href={resolve('/taste')}>← Alle Runden</a>
      <span>Runde 3 · Physik</span>
    </nav>

    <header class="head">
      <p class="kicker">Komponenten-Ebene</p>
      <h1>Fühlt sich der Druck richtig an?</h1>
      <p class="lede">
        3D heißt hier nicht schräge Ecken. Es heißt: das Element verhält sich wie ein Gegenstand.
        Alle fünf haben dieselbe Form und dieselbe Farbe — nur die Physik ändert sich. Klick
        drauf, oder Tab und Leertaste.
      </p>
    </header>

    <ol class="physics">
      {#each physics as p}
        <li>
          <div class="text">
            <div class="top">
              <span class="no">{p.no}</span>
              <h2>{p.title}</h2>
            </div>
            <p>{p.note}</p>
            <p class="feels"><span>Gefühl:</span> {p.feels}</p>
          </div>
          <div class="stage">
            <PhysicalButton variant={p.key} label={p.title} />
          </div>
        </li>
      {/each}
    </ol>

    <footer class="foot">
      <p class="kicker">Ergebnis dieser Runde</p>
      <ul class="out">
        <li><strong>1 Flach</strong> — raus. Keine Physik, kein Gefühl.</li>
        <li><strong>2 Stempel</strong> — nein. Verschiebung nach rechts unten.</li>
        <li><strong>3 Gesenkt</strong> — bleibt.</li>
        <li><strong>4 Feder</strong> — bleibt.</li>
        <li><strong>5 Doppelt</strong> — fast. Ohne die seitliche Verschiebung wäre es besser.</li>
      </ul>
      <p class="next">
        <a href={resolve('/taste/round4')}>Weiter zu Runde 4 · Druck <span aria-hidden="true">→</span></a>
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
    width: min(100% - 2 * var(--ds-space-6), 980px);
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

  .physics {
    display: grid;
  }

  .physics li {
    display: grid;
    grid-template-columns: 1fr 260px;
    gap: var(--ds-space-6);
    align-items: center;
    padding: var(--ds-space-6) 0;
    border-top: 1px solid rgba(255, 255, 255, 0.16);
  }

  .top {
    display: flex;
    align-items: baseline;
    gap: var(--ds-space-3);
    margin-bottom: var(--ds-space-2);
  }

  .no {
    font-family: var(--ds-font-mono);
    font-size: 12px;
    font-weight: 700;
    color: #d0d0d0;
  }

  h2 {
    font-size: 22px;
    letter-spacing: -0.02em;
  }

  .text p {
    max-width: 58ch;
    font-size: 14px;
    line-height: 1.55;
    color: #d0d0d0;
  }

  .feels {
    margin-top: var(--ds-space-2);
  }

  .feels span {
    font-family: var(--ds-font-mono);
    font-size: 10.5px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-right: 6px;
  }

  .stage {
    display: flex;
    justify-content: flex-end;
  }

  .foot {
    margin-top: var(--ds-space-9);
    padding-top: var(--ds-space-6);
    border-top: 2px solid rgba(255, 255, 255, 0.4);
  }

  .out {
    display: grid;
    gap: var(--ds-space-2);
    max-width: 72ch;
    font-size: 14px;
    color: #d0d0d0;
  }

  .out strong {
    color: #fff;
  }

  .next {
    margin-top: var(--ds-space-5);
    font-size: 14px;
  }

  .next a {
    display: inline-flex;
    align-items: center;
    gap: var(--ds-space-2);
    min-height: var(--ds-tap-min);
    color: #fff;
    font-weight: 700;
    text-decoration: none;
    border-bottom: 2px solid #fff;
  }

  .next a:hover {
    background: #fff;
    color: #000;
    padding: 0 var(--ds-space-3);
    margin-inline: calc(-1 * var(--ds-space-3));
  }

  @media (max-width: 760px) {
    .physics li {
      grid-template-columns: 1fr;
      gap: var(--ds-space-4);
    }

    .stage {
      justify-content: flex-start;
    }
  }
</style>
