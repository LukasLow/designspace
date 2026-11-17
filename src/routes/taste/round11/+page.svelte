<script lang="ts">
  import { resolve } from '$app/paths';
  import ScreenDemo from '#lib/taste/ScreenDemo.svelte';
  import SettingsDemo from '#lib/taste/SettingsDemo.svelte';
  import type { ScreenLayout } from '#lib/taste/screen-layouts';

  const layouts: Array<{
    key: ScreenLayout;
    no: string;
    title: string;
    note: string;
  }> = [
    {
      key: 'seite',
      no: '01',
      title: 'Seitenleiste',
      note: 'Navigation links, Inhalt rechts. Der Aufbau von Proton und 1Password.'
    },
    {
      key: 'oben',
      no: '02',
      title: 'Oben',
      note: 'Navigation als Zeile, Inhalt zentriert. Ruhig, aber weniger Orientierung.'
    },
    {
      key: 'zwei',
      no: '03',
      title: 'Zwei Spalten',
      note: 'Inhalt links, Meta-Spalte rechts. Gut für Konto und Abrechnung.'
    },
    {
      key: 'blatt',
      no: '04',
      title: 'Blatt',
      note: 'Keine Navigation, ein Blatt in der Mitte. Mobil zuerst, auf Desktop leer.'
    },
    {
      key: 'raster',
      no: '05',
      title: 'Raster',
      note: 'Karten im Raster, alles gleichzeitig sichtbar. Dicht, aber ohne Reihenfolge.'
    },
    {
      key: 'sechs',
      no: '06',
      title: 'Liste + Karte',
      note: 'Zeilen statt Karten. Die Bearbeitung kommt als Karte von rechts — erst beim Klick. Bitte wirklich anklicken.'
    }
  ];
</script>

<svelte:head>
  <title>Runde 11 — Taste — DesignSpace</title>
</svelte:head>

<div class="screen">
  <div class="wrap">
    <nav class="crumb">
      <a href={resolve('/taste')}>← Alle Runden</a>
      <span>Runde 11 · Aufbau</span>
    </nav>

    <header class="head">
      <p class="kicker">Erste echte Fläche</p>
      <h1>Wie steht der Screen?</h1>
      <p class="lede">
        Fünf Anordnungen desselben Konto-Screens, gebaut aus den echten Bausteinen — Button, Card,
        Field, Chip. Es ändert sich nur die Komposition: Navigation, Spalten, Dichte.
      </p>
    </header>

    <ol class="layouts">
      {#each layouts as layout}
        <li>
          <div class="vhead">
            <span class="no">{layout.no}</span>
            <h2>{layout.title}</h2>
          </div>
          <p class="note">{layout.note}</p>
          {#if layout.key === 'sechs'}
            <SettingsDemo />
          {:else}
            <ScreenDemo layout={layout.key} />
          {/if}
        </li>
      {/each}
    </ol>

    <footer class="foot">
      <p class="kicker">Was hier entschieden wird</p>
      <ul class="out">
        <li><strong>Der Aufbau.</strong> Navigation, Spalten, Reihenfolge.</li>
        <li><strong>Nicht</strong> Farbe, Material, Form — die stehen.</li>
        <li><strong>Danach</strong> wird der gewählte Aufbau der erste echte Screen der Bibliothek.</li>
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

  .layouts {
    display: grid;
    gap: var(--ds-space-9);
  }

  .layouts > li {
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
