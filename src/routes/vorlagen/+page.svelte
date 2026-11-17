<script lang="ts">
  import { resolve } from '$app/paths';
  import { vorlagen } from '#lib/vorlagen';
</script>

<svelte:head>
  <title>Vorlagen — DesignSpace</title>
</svelte:head>

<header class="head">
  <p class="ds-eyebrow">Vorlagen</p>
  <h1>Ganze Screens, nicht Teile</h1>
  <p class="ds-measure ds-dim">
    Jede Vorlage ist eine eigene Route ohne Website-Rahmen. Sie besteht ausschließlich aus
    Komponenten der Bibliothek — hier wird die Sprache zur Fläche.
  </p>
</header>

<ol class="list">
  {#each vorlagen as vorlage}
    <li>
      <a href={`${resolve('/vorlagen')}/${vorlage.slug}/`}>
        <span class="body">
          <span class="title">{vorlage.title}</span>
          <span class="note">{vorlage.note}</span>
        </span>
        <span class="arrow" aria-hidden="true">→</span>
      </a>
    </li>
  {/each}
</ol>

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

  .list {
    display: grid;
    border-top: var(--ds-border-hairline) solid var(--ds-line);
  }

  .list li {
    border-bottom: var(--ds-border-hairline) solid var(--ds-line);
  }

  .list a {
    display: grid;
    grid-template-columns: 1fr auto;
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

  .body {
    display: grid;
    gap: 2px;
  }

  .title {
    font-size: var(--ds-text-xl);
    font-weight: 700;
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
</style>
