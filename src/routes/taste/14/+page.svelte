<script lang="ts">
  import { resolve } from '$app/paths';
  import { stateEntries } from '#lib/taste/state-routes';
</script>

<svelte:head>
  <title>Runde 14 · Zustände — DesignSpace</title>
</svelte:head>

<header class="head">
  <p class="ds-eyebrow">Runde 14 · Zustände</p>
  <h1>Wo lebt die Rückmeldung?</h1>
  <p class="ds-measure ds-dim">
    Fünf Wege, denselben Zustand zu zeigen: eine Zeile lädt, eine ist fehlgeschlagen, eine ist
    fertig. Geh sie einzeln durch — die Frage ist nicht, ob man es sieht, sondern wo es sitzt.
  </p>
</header>

<ol class="list">
  {#each stateEntries as entry}
    <li>
      <a href={`${resolve('/taste/14')}/${entry.slug}/`}>
        <span class="no">{entry.no}</span>
        <span class="body">
          <span class="title">{entry.title}</span>
          <span class="note">{entry.note}</span>
        </span>
        <span class="arrow" aria-hidden="true">→</span>
      </a>
    </li>
  {/each}
</ol>

<footer class="foot">
  <p class="kicker">Entschieden</p>
  <ul class="out">
    <li><strong>Fehler als Karte</strong> — mit Titel, Erklärung und Aktion.</li>
    <li><strong>Info als Toast</strong> — kurz, unten rechts, verschwindet.</li>
    <li><strong>Laden</strong> als Korn-Skeleton, ohne Schimmer.</li>
  </ul>
</footer>

<style>
  .head {
    padding-bottom: var(--ds-space-8);
  }

  h1 {
    margin: var(--ds-space-3) 0 var(--ds-space-4);
    font-size: var(--ds-text-3xl);
    letter-spacing: -0.03em;
  }

  .list {
    display: grid;
    border-top: var(--ds-border-hairline) solid var(--ds-line);
  }

  .list li {
    border-bottom: var(--ds-border-hairline) solid var(--ds-line);
  }

  .list a {
    display: grid;
    grid-template-columns: 3.5rem 1fr auto;
    gap: var(--ds-space-4);
    align-items: center;
    min-height: 96px;
    padding: var(--ds-space-4) 0;
    color: var(--ds-fg);
    text-decoration: none;
  }

  .list a:hover {
    background: var(--ds-surface);
    padding-inline: var(--ds-space-4);
    margin-inline: calc(-1 * var(--ds-space-4));
  }

  .no {
    font-size: var(--ds-text-sm);
    font-weight: var(--ds-weight-bold);
    color: var(--ds-fg-dim);
  }

  .body {
    display: grid;
    gap: 2px;
  }

  .title {
    font-size: var(--ds-text-xl);
    font-weight: var(--ds-weight-bold);
    letter-spacing: -0.02em;
  }

  .note {
    font-size: var(--ds-text-sm);
    color: var(--ds-fg-dim);
    max-width: 70ch;
  }

  .arrow {
    font-size: var(--ds-text-xl);
  }

  .foot {
    margin-top: var(--ds-space-9);
    padding-top: var(--ds-space-6);
    border-top: 2px solid var(--ds-line-strong);
  }

  .kicker {
    font-size: var(--ds-text-2xs);
    font-weight: var(--ds-weight-bold);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--ds-fg-dim);
    margin-bottom: var(--ds-space-3);
  }

  .out {
    display: grid;
    gap: var(--ds-space-2);
    max-width: 74ch;
    font-size: var(--ds-text-sm);
    color: var(--ds-fg-dim);
  }

  .out strong {
    color: var(--ds-fg);
  }

  @media (max-width: 700px) {
    .list a {
      grid-template-columns: 2.5rem 1fr;
    }

    .arrow {
      display: none;
    }
  }
</style>
