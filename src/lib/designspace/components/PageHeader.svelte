<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    eyebrow = '',
    title,
    description = '',
    meta = [],
    actions
  }: {
    eyebrow?: string;
    title: string;
    description?: string;
    meta?: string[];
    actions?: Snippet;
  } = $props();
</script>

<header class="head">
  {#if eyebrow}<p class="eyebrow">{eyebrow}</p>{/if}
  <div class="row">
    <h1>{title}</h1>
    {#if actions}<div class="actions">{@render actions()}</div>{/if}
  </div>
  {#if description}<p class="lead">{description}</p>{/if}
  {#if meta.length}
    <ul class="meta">
      {#each meta as item}<li>{item}</li>{/each}
    </ul>
  {/if}
</header>

<style>
  .head {
    display: grid;
    gap: var(--ds-space-3);
    padding: var(--ds-space-7) 0 var(--ds-space-6);
    border-bottom: var(--ds-border-hairline) solid var(--ds-line);
  }

  .eyebrow {
    font-size: var(--ds-text-2xs);
    font-weight: var(--ds-weight-bold);
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--ds-brand);
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: space-between;
    gap: var(--ds-space-4);
  }

  h1 {
    max-width: 24ch;
    font-size: var(--ds-text-3xl);
    letter-spacing: -0.03em;
    line-height: var(--ds-leading-tight);
  }

  .lead {
    max-width: var(--ds-measure);
    font-size: var(--ds-text-base);
    color: var(--ds-fg-dim);
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: var(--ds-space-2);
  }

  .meta {
    display: flex;
    flex-wrap: wrap;
    gap: var(--ds-space-4);
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: var(--ds-text-2xs);
    font-weight: var(--ds-weight-bold);
    letter-spacing: 0.04em;
    color: var(--ds-fg-dim);
  }
</style>
