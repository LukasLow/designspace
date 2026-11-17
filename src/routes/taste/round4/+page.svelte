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
      key: 'gesenkt',
      no: '01',
      title: 'Gesenkt',
      note: 'Liegt in der Fläche und sinkt beim Drücken tiefer ein.',
      feels: 'Wie eine Taste an einem Gerät. Direkt und ruhig.'
    },
    {
      key: 'feder',
      no: '02',
      title: 'Feder',
      note: 'Weicher Schatten, hebt sich leicht, federt beim Drücken nach unten.',
      feels: 'Weich und hochwertig. Nah am Zeitgeist.'
    },
    {
      key: 'doppelt-y',
      no: '03',
      title: 'Doppelt',
      note: 'Zwei Lagen, jetzt nur senkrecht: der Deckel legt sich nach unten auf die Basis.',
      feels: 'Körperlich, ohne Verwischen. Kein seitlicher Weg.'
    },
    {
      key: 'taste',
      no: '04',
      title: 'Taste',
      note: 'Eine dicke Unterkante wie bei einer Tastatur-Taste. Beim Drücken wird sie zusammengedrückt.',
      feels: 'Mechanisch und klar. Der Hub ist sichtbar, ohne Bewegung im Raum.'
    },
    {
      key: 'schrumpf',
      no: '05',
      title: 'Schrumpf',
      note: 'Kein Weg, nur Größe: der Knopf wird beim Drücken minimal kleiner.',
      feels: 'Sehr leise. Man spürt den Druck mehr, als man ihn sieht.'
    }
  ];
</script>

<svelte:head>
  <title>Runde 4 — Taste — DesignSpace</title>
</svelte:head>

<div class="screen">
  <div class="wrap">
    <nav class="crumb">
      <a href={resolve('/taste')}>← Alle Runden</a>
      <span>Runde 4 · Druck</span>
    </nav>

    <header class="head">
      <p class="kicker">Korrektur aus Runde 3</p>
      <h1>Wie soll sich der Druck anfühlen?</h1>
      <p class="lede">
        Alle fünf bewegen sich ausschließlich nach unten oder werden kleiner — nie seitlich, nie
        diagonal. Das war deine Rückmeldung: rechts unten fühlt sich falsch an.
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
        <li><strong>2 Feder</strong> — bleibt.</li>
        <li><strong>4 Taste</strong> — bleibt.</li>
        <li><strong>1 Gesenkt</strong> — raus.</li>
        <li><strong>3 Doppelt</strong> — raus.</li>
        <li><strong>5 Schrumpf</strong> — raus.</li>
      </ul>
      <p class="kicker second">Regel</p>
      <p class="lede">
        Druck geht nach unten oder macht das Element minimal kleiner. Niemals seitlich, niemals
        diagonal. Alles bleibt symmetrisch.
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
    max-width: 24ch;
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

  .kicker.second {
    margin-top: var(--ds-space-6);
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
