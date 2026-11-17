<script lang="ts">
  import { resolve } from '$app/paths';
  import RoleModel from '#lib/taste/RoleModel.svelte';
  import { roleModels } from '#lib/taste/role-models';
  import { palette } from '#lib/taste/palette';
</script>

<svelte:head>
  <title>Runde 6 — Taste — DesignSpace</title>
</svelte:head>

<svg class="filter-defs" aria-hidden="true" focusable="false">
  <filter id="deut">
    <feColorMatrix
      type="matrix"
      values="0.367 0.861 -0.228 0 0  0.280 0.673 0.047 0 0  -0.012 0.043 0.969 0 0  0 0 0 1 0"
    />
  </filter>
</svg>

<div class="screen">
  <div class="wrap">
    <nav class="crumb">
      <a href={resolve('/taste')}>← Alle Runden</a>
      <span>Runde 6 · Palette</span>
    </nav>

    <header class="head">
      <p class="kicker">Nach dem Ton</p>
      <h1>Wie laut spricht die Farbe?</h1>
      <p class="lede">
        Neon und Powerade sind gesetzt, Rot und Gold kommen dazu, Weiß bleibt Text. Die Frage ist
        nicht mehr der Ton, sondern die Rolle: Was darf gefüllt sein, was nur Kante, was nur Punkt?
      </p>
    </header>

    <section aria-labelledby="sheet-title">
      <h2 id="sheet-title">Der Satz</h2>
      <ul class="sheet">
        {#each palette as color}
          <li>
            <span class="swatch" style="background: {color.hex}"></span>
            <span class="name">{color.name}</span>
            <span class="hex">{color.hex}</span>
            <span class="role">{color.role}</span>
            <span class="ratio">{color.contrast}</span>
          </li>
        {/each}
      </ul>
    </section>

    <section aria-labelledby="test-title">
      <h2 id="test-title">Rot und Grün</h2>
      <p class="note">
        Beide unterscheiden sich nicht nur im Farbton, sondern in der Helligkeit: Neon liegt bei
        0,60, Rot bei 0,33. Selbst ohne Farbwahrnehmung bleiben sie trennbar.
      </p>

      <div class="tests">
        <div class="test">
          <p class="test-label">Normal</p>
          <div class="pair">
            <span class="tag ok">Erfolg</span>
            <span class="tag danger">Fehler</span>
            <span class="tag warn">Warnung</span>
            <span class="tag info">Info</span>
          </div>
        </div>

        <div class="test" style="filter: url(#deut)">
          <p class="test-label">Deuteranopie-Simulation</p>
          <div class="pair">
            <span class="tag ok">Erfolg</span>
            <span class="tag danger">Fehler</span>
            <span class="tag warn">Warnung</span>
            <span class="tag info">Info</span>
          </div>
        </div>
      </div>
    </section>

    <section aria-labelledby="roles-title">
      <h2 id="roles-title">Fünf Rollenmodelle</h2>
      <p class="note">Gleiche Farben, gleiche Form. Es ändert sich nur, wie viel Fläche die Farbe bekommt.</p>

      <ol class="models">
        {#each roleModels as model}
          <li>
            <div class="mhead">
              <span class="no">{model.no}</span>
              <h3>{model.title}</h3>
            </div>
            <p class="note">{model.note}</p>
            <RoleModel model={model.key} />
          </li>
        {/each}
      </ol>
    </section>

    <footer class="foot">
      <p class="kicker">Was noch fehlt</p>
      <ul class="out">
        <li><strong>Ein Neutral für Disabled.</strong> Nicht Grau, sondern Weiß mit weniger Deckung plus klarer Kante.</li>
        <li><strong>Eine Datenskala.</strong> Für Charts braucht es 4–6 unterscheidbare Reihen — Farbe allein reicht nicht, Helligkeit muss mitarbeiten.</li>
        <li><strong>Orange: nein.</strong> Es kollidiert mit Gold (Warnung) und Rot (Fehler). Drei warme Töne machen die Bedeutung unschärfer, nicht reicher.</li>
      </ul>
    </footer>
  </div>
</div>

<style>
  .filter-defs {
    position: absolute;
    width: 0;
    height: 0;
    overflow: hidden;
  }

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
    max-width: 24ch;
  }

  h2 {
    font-size: 24px;
    letter-spacing: -0.02em;
    margin-bottom: var(--ds-space-3);
  }

  h3 {
    font-size: 18px;
    letter-spacing: -0.02em;
  }

  .lede,
  .note {
    max-width: 68ch;
    font-size: 15px;
    line-height: 1.6;
    color: #d0d0d0;
  }

  section {
    padding: var(--ds-space-6) 0;
    border-top: 1px solid rgba(255, 255, 255, 0.16);
  }

  .sheet {
    display: grid;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
  }

  .sheet li {
    display: grid;
    grid-template-columns: 36px 110px 90px 1fr auto;
    gap: var(--ds-space-3);
    align-items: center;
    min-height: 52px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    font-size: 13px;
  }

  .swatch {
    width: 24px;
    height: 24px;
  }

  .name {
    font-weight: 700;
  }

  .hex,
  .ratio {
    font-family: var(--ds-font-mono);
    font-size: 11px;
    font-weight: 700;
    color: #d0d0d0;
  }

  .role {
    color: #d0d0d0;
  }

  .tests {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--ds-space-4);
    margin-top: var(--ds-space-4);
  }

  .test {
    padding: var(--ds-space-4);
    border: 1px solid rgba(255, 255, 255, 0.16);
  }

  .test-label {
    margin-bottom: var(--ds-space-3);
    font-family: var(--ds-font-mono);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #d0d0d0;
  }

  .pair {
    display: flex;
    flex-wrap: wrap;
    gap: var(--ds-space-2);
  }

  .tag {
    display: inline-flex;
    align-items: center;
    min-height: 34px;
    padding: 0 10px;
    border-radius: 0;
    font-family: var(--ds-font-mono);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .tag.ok {
    border: 1px solid #00e89a;
    background: rgba(0, 232, 154, 0.16);
    color: #00e89a;
  }

  .tag.danger {
    border: 1px solid #ff6b6b;
    background: rgba(255, 107, 107, 0.16);
    color: #ff6b6b;
  }

  .tag.warn {
    border: 1px solid #ffc24b;
    background: rgba(255, 194, 75, 0.16);
    color: #ffc24b;
  }

  .tag.info {
    border: 1px solid #00a8e8;
    background: rgba(0, 168, 232, 0.16);
    color: #00a8e8;
  }

  .models {
    display: grid;
    gap: var(--ds-space-5);
    margin-top: var(--ds-space-4);
  }

  .models > li {
    padding: var(--ds-space-4);
    border: 1px solid rgba(255, 255, 255, 0.12);
  }

  .mhead {
    display: flex;
    align-items: baseline;
    gap: var(--ds-space-3);
    margin-bottom: var(--ds-space-2);
  }

  .no {
    font-family: var(--ds-font-mono);
    font-size: 11px;
    font-weight: 700;
    color: #d0d0d0;
  }

  .models .note {
    margin-bottom: var(--ds-space-4);
    font-size: 13px;
  }

  .foot {
    margin-top: var(--ds-space-8);
    padding-top: var(--ds-space-6);
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

  @media (max-width: 760px) {
    .sheet li {
      grid-template-columns: 28px 1fr auto;
      row-gap: 2px;
    }

    .role {
      grid-column: 2 / -1;
    }

    .hex {
      display: none;
    }

    .tests {
      grid-template-columns: 1fr;
    }
  }
</style>
