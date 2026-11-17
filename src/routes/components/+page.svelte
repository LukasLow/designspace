<script lang="ts">
  import { resolve } from '$app/paths';
  import { docs } from '#lib/components/docs';
</script>

<svelte:head>
  <title>Komponenten — DesignSpace</title>
</svelte:head>

<header class="head">
  <p class="ds-eyebrow">Komponenten</p>
  <h1>Die Teile, nicht die Vorlagen</h1>
  <p class="ds-measure ds-dim">
    Eine Komponente pro Seite, mit Props, Zuständen, Tastatur und einer funktionierenden
    Vorschau. Die Seiten benutzen dieselben Komponenten, die sie zeigen.
  </p>
</header>

<ol class="list">
  {#each docs as doc}
    <li>
      <a href={`${resolve('/components')}/${doc.slug}/`}>
        <span class="no">{doc.name}</span>
        <span class="body">
          <span class="title">{doc.name}</span>
          <span class="note">{doc.description}</span>
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

  .no {
    display: none;
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
