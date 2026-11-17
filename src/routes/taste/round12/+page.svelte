<script lang="ts">
  import { resolve } from '$app/paths';
  import TypeDemo from '#lib/taste/TypeDemo.svelte';
  import type { TypeVariant } from '#lib/taste/type-variants';

  const types: Array<{ key: TypeVariant; no: string; title: string; note: string }> = [
    {
      key: 'leise',
      no: '01',
      title: 'Leise',
      note: 'Kleiner Titel, alles in Monospace. Technisch und dicht — nah an einem Terminal.'
    },
    {
      key: 'klar',
      no: '02',
      title: 'Klar',
      note: 'Mittlerer Titel, Labels in Sans. Die ruhige Mitte ohne Eigenheiten.'
    },
    {
      key: 'laut',
      no: '03',
      title: 'Laut',
      note: 'Großer Titel, kleiner Rest. Die Seite beginnt mit einem Namen, nicht mit einer Liste.'
    },
    {
      key: 'dual',
      no: '04',
      title: 'Dual',
      note: 'Titel links, Werte rechts in einer schmalen Spalte. Zwei Achsen statt einer.'
    },
    {
      key: 'app',
      no: '05',
      title: 'App',
      note: 'Alles nah beieinander, Label und Wert fast gleich groß. Wie eine Einstellungs-App.'
    }
  ];
</script>

<svelte:head>
  <title>Runde 12 — Taste — DesignSpace</title>
</svelte:head>

<div class="screen">
  <div class="wrap">
    <nav class="crumb">
      <a href={resolve('/taste')}>← Alle Runden</a>
      <span>Runde 12 · Typografie</span>
    </nav>

    <header class="head">
      <p class="kicker">Hierarchie</p>
      <h1>Wie laut sollen Titel sein?</h1>
      <p class="lede">
        Fünf Schriftsysteme auf demselben Inhalt. Es ändert sich nur Größe, Gewicht, Laufweite und
        der Anteil an Monospace — Farbe, Form und Material bleiben.
      </p>
    </header>

    <ol class="types">
      {#each types as type}
        <li>
          <div class="vhead">
            <span class="no">{type.no}</span>
            <h2>{type.title}</h2>
          </div>
          <p class="note">{type.note}</p>
          <TypeDemo variant={type.key} />
        </li>
      {/each}
    </ol>

    <footer class="foot">
      <p class="kicker">Was hier entschieden wird</p>
      <ul class="out">
        <li><strong>Die Hierarchie.</strong> Titelgröße, Labelstil, Anteil Monospace.</li>
        <li><strong>Nicht</strong> Farbe, Form oder Material.</li>
        <li><strong>Danach</strong> steht die Typografie für alle Vorlagen — Login bis Chat.</li>
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
  }

  h2 {
    font-size: 24px;
    letter-spacing: -0.02em;
  }

  .lede {
    max-width: 66ch;
    font-size: 16px;
    line-height: 1.6;
    color: #d0d0d0;
  }

  .types {
    display: grid;
    gap: var(--ds-space-8);
  }

  .types > li {
    padding-top: var(--ds-space-6);
    border-top: 1px solid rgba(255, 255, 255, 0.16);
  }

  .vhead {
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
</style>
