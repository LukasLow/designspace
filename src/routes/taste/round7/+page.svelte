<script lang="ts">
  import { resolve } from '$app/paths';
  import ExtraColorDemo from '#lib/taste/ExtraColorDemo.svelte';
  import { extraColors } from '#lib/taste/extra-colors';
</script>

<svelte:head>
  <title>Runde 7 — Taste — DesignSpace</title>
</svelte:head>

<div class="screen">
  <div class="wrap">
    <nav class="crumb">
      <a href={resolve('/taste')}>← Alle Runden</a>
      <span>Runde 7 · Sechste Farbe</span>
    </nav>

    <header class="head">
      <p class="kicker">Eine Farbe dazu</p>
      <h1>Welche kommt in den Mix?</h1>
      <p class="lede">
        Fünf Töne stehen: Neon, Powerade, Gold, Rot, Weiß. Fünf Kandidaten für den sechsten. Gezeigt
        wird jeder als Reihe im Diagramm, als Kategorie-Chip, als Wert und als Link — nicht als
        nackter Farbkreis.
      </p>
    </header>

    <ol class="extras">
      {#each extraColors as color}
        <li>
          <div class="vhead">
            <span class="no">{color.no}</span>
            <h2>{color.name}</h2>
            <span class="hex"><i style="background: {color.hex}"></i>{color.hex}</span>
            <span class="ratio">{color.contrast}</span>
          </div>
          <p class="note">{color.note}</p>
          <p class="risk"><span>Risiko:</span> {color.risk}</p>
          <div class="demo-wrap">
            <ExtraColorDemo hex={color.hex} ink={color.ink} />
          </div>
        </li>
      {/each}
    </ol>

    <footer class="foot">
      <p class="kicker">Meine Empfehlung</p>
      <p class="lede">
        <strong>Violett.</strong> Es ist der einzige Ton, der zu keinem der fünf anderen in
        Konkurrenz steht — nicht als Status, nicht als Handlung, nicht als Warnung. Damit kann es
        wirklich eine neue Bedeutung tragen: Kategorien und Datenreihen. Pink und Orange sind zu
        nah an Rot, Sand zu nah an Gold, Türkis zu nah an beiden Markenfarben.
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
    max-width: 66ch;
    font-size: 16px;
    line-height: 1.6;
    color: #d0d0d0;
  }

  .extras {
    display: grid;
    gap: var(--ds-space-7);
  }

  .extras > li {
    padding-top: var(--ds-space-5);
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
    font-size: 22px;
    letter-spacing: -0.02em;
  }

  .hex,
  .ratio {
    font-family: var(--ds-font-mono);
    font-size: 11px;
    font-weight: 700;
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

  .note,
  .risk {
    max-width: 68ch;
    font-size: 14px;
    line-height: 1.55;
    color: #d0d0d0;
  }

  .risk {
    margin-top: var(--ds-space-2);
  }

  .risk span {
    font-family: var(--ds-font-mono);
    font-size: 10.5px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-right: 6px;
  }

  .demo-wrap {
    margin-top: var(--ds-space-3);
  }

  .foot {
    margin-top: var(--ds-space-9);
    padding-top: var(--ds-space-6);
    border-top: 2px solid rgba(255, 255, 255, 0.4);
  }

  .foot strong {
    color: #fff;
  }

  @media (max-width: 700px) {
    .hex {
      margin-left: 0;
    }
  }
</style>
