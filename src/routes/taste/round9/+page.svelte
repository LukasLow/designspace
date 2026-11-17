<script lang="ts">
  import { resolve } from '$app/paths';
  import FormDemo from '#lib/taste/FormDemo.svelte';
  import type { FormVariant } from '#lib/taste/form-variants';

  const forms: Array<{
    key: FormVariant;
    no: string;
    title: string;
    spec: string;
    note: string;
  }> = [
    {
      key: 'kante',
      no: '01',
      title: 'Kante',
      spec: '0 px · 2 px Rahmen · keine Tiefe',
      note: 'Technisch und laut. Alles sitzt auf einer harten Achse.'
    },
    {
      key: 'raster',
      no: '02',
      title: 'Raster',
      spec: '6 px · Haarlinie',
      note: 'Präzise, aber schon weicher. Der Unterschied zu Kante ist klein.'
    },
    {
      key: 'weich',
      no: '03',
      title: 'Weich',
      spec: '18 px · Lichtkante · weicher Schatten',
      note: 'Ruhig und hochwertig. Zwischen Technik und App.'
    },
    {
      key: 'kissen',
      no: '04',
      title: 'Kissen',
      spec: '24 px · keine Rahmen · Innenlicht',
      note: 'Gefüllte Flächen statt Linien. Körperlich und appy.'
    },
    {
      key: 'pille',
      no: '05',
      title: 'Pille',
      spec: '28 px Karten · 999 px Buttons',
      note: 'Die Form von iOS-Apps. Maximal appy, am wenigsten eigen.'
    }
  ];
</script>

<svelte:head>
  <title>Runde 9 — Taste — DesignSpace</title>
</svelte:head>

<div class="screen">
  <div class="wrap">
    <nav class="crumb">
      <a href={resolve('/taste')}>← Alle Runden</a>
      <span>Runde 9 · Form</span>
    </nav>

    <header class="head">
      <p class="kicker">Korrektur</p>
      <h1>Technisch oder appy?</h1>
      <p class="lede">
        Die 0 px waren zu früh gesetzt. Nur weil die Kante in Runde 2 nicht rausgefallen ist, ist
        sie nicht entschieden — und „nicht rausgefallen" heißt nicht „appy". Hier fünf Formsprachen
        mit der echten Palette und gefüllten Flächen (Runde 6: Fläche).
      </p>
    </header>

    <ol class="forms">
      {#each forms as form}
        <li>
          <div class="vhead">
            <span class="no">{form.no}</span>
            <h2>{form.title}</h2>
            <span class="spec">{form.spec}</span>
          </div>
          <p class="note">{form.note}</p>
          <FormDemo variant={form.key} />
        </li>
      {/each}
    </ol>

    <footer class="foot">
      <p class="kicker">Ergebnis · Turnier</p>
      <ul class="out">
        <li><strong>05 Weich 18 gewinnt</strong> im Finale gegen 04 Weich 12.</li>
        <li><strong>Radius 18 px</strong> ist damit die Form für Buttons und Eingaben
          (<code>--ds-radius-control</code>).</li>
        <li><strong>Kante, Raster und Pille sind raus.</strong> Der Button bleibt gefüllt und matt.</li>
      </ul>
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

  .forms {
    display: grid;
    gap: var(--ds-space-9);
  }

  .forms > li {
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

  .spec {
    margin-left: auto;
    font-family: var(--ds-font-mono);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.06em;
    color: #d0d0d0;
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

  .out {
    display: grid;
    gap: var(--ds-space-2);
    max-width: 74ch;
    font-size: 14px;
    color: #d0d0d0;
  }

  .out strong {
    color: #fff;
  }

  @media (max-width: 700px) {
    .spec {
      margin-left: 0;
      width: 100%;
    }
  }
</style>
