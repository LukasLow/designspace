<script lang="ts">
  import type { Snippet } from 'svelte';
  import Icon from '#lib/designspace/icons/Icon.svelte';

  let {
    title,
    description,
    sources = [],
    action
  }: {
    title: string;
    description: string;
    sources?: string[];
    action?: Snippet;
  } = $props();
</script>

<aside class="gap" aria-labelledby="gap-title">
  <span class="mark" aria-hidden="true"><Icon name="Glühbirne" size={20} /></span>
  <div class="body">
    <p class="eyebrow">Wissenslücke</p>
    <h2 id="gap-title">{title}</h2>
    <p class="text">{description}</p>
    {#if sources.length}
      <p class="sources">
        <span>Offen:</span>
        {sources.join(' · ')}
      </p>
    {/if}
    {#if action}<div class="action">{@render action()}</div>{/if}
  </div>
</aside>

<style>
  .gap {
    display: flex;
    gap: var(--ds-space-3);
    padding: var(--ds-space-4);
    border: 1px solid var(--ds-warning);
    border-radius: var(--ds-radius-lg);
    background: var(--ds-warning-soft);
  }

  .mark {
    display: grid;
    place-items: center;
    width: 36px;
    height: 36px;
    flex: none;
    border-radius: var(--ds-radius-pill);
    background: var(--ds-warning);
    color: var(--ds-warning-ink);
  }

  .body {
    display: grid;
    gap: var(--ds-space-1);
  }

  .eyebrow {
    font-size: var(--ds-text-2xs);
    font-weight: var(--ds-weight-bold);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--ds-warning);
  }

  h2 {
    font-size: var(--ds-text-lg);
    font-weight: var(--ds-weight-bold);
  }

  .text {
    font-size: var(--ds-text-sm);
    color: var(--ds-fg);
  }

  .sources {
    font-size: var(--ds-text-xs);
    color: var(--ds-fg-dim);
  }

  .sources span {
    font-weight: var(--ds-weight-bold);
  }

  .action {
    margin-top: var(--ds-space-2);
  }
</style>
