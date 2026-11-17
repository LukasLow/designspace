<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    id,
    title,
    eyebrow = '',
    children,
    aside
  }: {
    id: string;
    title: string;
    eyebrow?: string;
    children: Snippet;
    aside?: Snippet;
  } = $props();
</script>

<section class="section" aria-labelledby={`${id}-title`}>
  <header>
    {#if eyebrow}<p class="eyebrow">{eyebrow}</p>{/if}
    <h2 id={`${id}-title`}>{title}</h2>
  </header>
  <div class="grid" class:with-aside={Boolean(aside)}>
    <div class="body">{@render children()}</div>
    {#if aside}<div class="aside">{@render aside()}</div>{/if}
  </div>
</section>

<style>
  .section {
    padding: var(--ds-space-6) 0;
    border-top: 1px solid var(--ds-line);
  }

  header {
    display: grid;
    gap: var(--ds-space-1);
    margin-bottom: var(--ds-space-4);
  }

  h2 {
    font-size: var(--ds-text-xl);
    letter-spacing: var(--ds-tracking-tight);
  }

  .eyebrow {
    font-size: var(--ds-text-2xs);
    font-weight: var(--ds-weight-bold);
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--ds-brand);
  }

  .grid {
    display: grid;
    gap: var(--ds-space-5);
  }

  .with-aside {
    grid-template-columns: minmax(0, 1fr) minmax(0, 280px);
    align-items: start;
  }

  .body {
    max-width: var(--ds-measure);
    font-size: var(--ds-text-base);
    line-height: var(--ds-leading-normal);
  }

  .aside {
    padding: var(--ds-space-4);
    border: 1px solid var(--ds-line);
    border-radius: var(--ds-radius-md);
    background: var(--ds-surface);
    font-size: var(--ds-text-sm);
  }

  @media (max-width: 760px) {
    .with-aside {
      grid-template-columns: 1fr;
    }
  }
</style>
