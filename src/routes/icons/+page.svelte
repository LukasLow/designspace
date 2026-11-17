<script lang="ts">
  const icons = [
    { name: 'Person', d: 'M12 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 20c0-4 3.6-6 8-6s8 2 8 6' },
    { name: 'Schild', d: 'M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z' },
    { name: 'Monitor', d: 'M3 6h18v10H3zM8 20h8M12 16v4' },
    { name: 'Telefon', d: 'M7 4h3l2 5-2 1a12 12 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 5 6a2 2 0 0 1 2-2z' },
    { name: 'Video', d: 'M3 6h12v12H3zM15 10l6-4v12l-6-4' },
    { name: 'Plus', d: 'M12 5v14M5 12h14' },
    { name: 'Herz', d: 'M12 20s-7-4.5-7-9a4 4 0 0 1 7-2.5A4 4 0 0 1 19 11c0 4.5-7 9-7 9z' },
    { name: 'Kommentar', d: 'M21 12a8 8 0 0 1-8 8H7l-4 2V12a8 8 0 0 1 8-8h2a8 8 0 0 1 8 8z' },
    { name: 'Teilen', d: 'M12 16V4M8 8l4-4 4 4M5 14v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4' },
    { name: 'Archiv', d: 'M4 7h16M6 7v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7M9 3h6v4H9z' },
    { name: 'Löschen', d: 'M4 7h16M9 7V4h6v3M7 7l1 13h8l1-13' },
    { name: 'Tag', d: 'M4 4h9l7 7-9 9-7-7z' },
    { name: 'Filter', d: 'M4 5h16l-6 8v6l-4 2v-8z' },
    { name: 'Sortieren', d: 'M4 7h10M4 12h7M4 17h4M17 5v14M14 16l3 3 3-3' },
    { name: 'Haken', d: 'M5 12.5 10 17.5 19 7' },
    { name: 'Schließen', d: 'M6 6l12 12M18 6L6 18' },
    { name: 'Suche', d: 'M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM20 20l-4-4' }
  ];
</script>

<svelte:head>
  <title>Icons — DesignSpace</title>
</svelte:head>

<header class="head">
  <p class="ds-eyebrow">Icons</p>
  <h1>Strich, 1,8 px, 24er-Raster</h1>
  <p class="ds-measure ds-dim">
    Runde Enden, runde Ecken, keine Füllung. Gefüllt ist nur die Hauptaktion.
    Größen: 16 px im Text, 20 px in Zeilen, 24 px allein stehend.
  </p>
</header>

<section aria-labelledby="set-title">
  <h2 id="set-title">Das Set</h2>
  <ul class="grid">
    {#each icons as icon}
      <li>
        <span class="tile">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d={icon.d} /></svg>
        </span>
        <span class="name">{icon.name}</span>
        <span class="spec">24 / 1,8</span>
      </li>
    {/each}
  </ul>
</section>

<section aria-labelledby="sizes-title">
  <h2 id="sizes-title">Größen</h2>
  <div class="sizes">
    <span><svg viewBox="0 0 24 24" aria-hidden="true" class="s16"><path d={icons[11].d} /></svg>16</span>
    <span><svg viewBox="0 0 24 24" aria-hidden="true" class="s20"><path d={icons[11].d} /></svg>20</span>
    <span><svg viewBox="0 0 24 24" aria-hidden="true" class="s24"><path d={icons[11].d} /></svg>24</span>
  </div>
</section>

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
    margin-bottom: var(--ds-space-4);
    font-size: var(--ds-text-xl);
  }

  section {
    padding: var(--ds-space-5) 0;
    border-top: 1px solid var(--ds-line);
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: var(--ds-space-3);
  }

  .grid li {
    display: grid;
    gap: 6px;
    justify-items: start;
    padding: var(--ds-space-4);
    border: 1px solid var(--ds-line);
    border-radius: var(--ds-radius-lg);
    background: var(--ds-surface);
  }

  .tile {
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    border-radius: 12px;
    background: var(--ds-surface-2);
  }

  svg {
    width: 24px;
    height: 24px;
    fill: none;
    stroke: var(--ds-fg);
    stroke-width: 1.8;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .name {
    font-size: var(--ds-text-sm);
    font-weight: 700;
  }

  .spec {
    font-size: var(--ds-text-2xs);
    font-weight: 700;
    color: var(--ds-fg-dim);
  }

  .sizes {
    display: flex;
    gap: var(--ds-space-6);
    align-items: end;
    font-size: var(--ds-text-2xs);
    font-weight: 700;
    color: var(--ds-fg-dim);
  }

  .sizes span {
    display: grid;
    gap: 6px;
    justify-items: center;
  }

  .s16 { width: 16px; height: 16px; }
  .s20 { width: 20px; height: 20px; }
  .s24 { width: 24px; height: 24px; }
</style>
