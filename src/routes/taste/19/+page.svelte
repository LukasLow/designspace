<script lang="ts">
  import { resolve } from '$app/paths';
  import { chatEntries } from '#lib/taste/chat-routes';
</script>

<svelte:head>
  <title>Runde 19 · Chat — DesignSpace</title>
</svelte:head>

<header class="head">
  <p class="ds-eyebrow">Runde 19 · Chat</p>
  <h1>Wie redet man?</h1>
  <p class="ds-measure ds-dim">
    Fünf Gruppenchats mit denselben vier Nachrichten. Hier handeln Icons zum ersten Mal ohne
    Text: Anhang, Senden, Mehr. Zeit steht neben dem Namen, Folgezeilen derselben Person
    laufen ohne Avatar weiter — wie in Discord.
  </p>
</header>

<ol class="list">
  {#each chatEntries as entry}
    <li>
      <a href={`${resolve('/taste/19')}/${entry.slug}/`}>
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
    font-weight: 700;
    color: var(--ds-fg-dim);
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

  @media (max-width: 700px) {
    .list a {
      grid-template-columns: 2.5rem 1fr;
    }

    .arrow {
      display: none;
    }
  }
</style>
