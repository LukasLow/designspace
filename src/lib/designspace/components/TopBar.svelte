<script lang="ts">
  import type { Snippet } from 'svelte';
  import BrandLockup from './BrandLockup.svelte';

  let {
    brand = 'DesignSpace',
    home = '',
    sticky = false,
    nav,
    actions
  }: {
    brand?: string;
    home?: string;
    sticky?: boolean;
    nav?: Snippet;
    actions?: Snippet;
  } = $props();
</script>

<header class="bar" class:sticky>
  <div class="inner">
    <a class="brand" href={home} aria-label={`${brand} — Start`}>
      <BrandLockup name={brand} size="sm" />
    </a>
    {#if nav}<nav class="nav" aria-label="Hauptnavigation">{@render nav()}</nav>{/if}
    {#if actions}<div class="actions">{@render actions()}</div>{/if}
  </div>
</header>

<style>
  .bar {
    border-bottom: var(--ds-border-hairline) solid var(--ds-line);
    background: var(--ds-bg);
  }

  .sticky {
    position: sticky;
    top: 0;
    z-index: 10;
  }

  .inner {
    display: flex;
    align-items: center;
    gap: var(--ds-space-4);
    min-height: var(--ds-tap-min);
    padding: var(--ds-space-2) var(--ds-space-4);
  }

  .brand {
    display: inline-flex;
    text-decoration: none;
  }

  .brand:focus-visible {
    outline: var(--ds-border-focus) solid var(--ds-focus);
    outline-offset: 3px;
    border-radius: var(--ds-radius-sm);
  }

  .nav {
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    gap: var(--ds-space-1);
  }

  .nav :global(a),
  .nav :global(button) {
    display: inline-flex;
    align-items: center;
    min-height: var(--ds-tap-min);
    padding: 0 var(--ds-space-3);
    border: 0;
    border-radius: var(--ds-radius-control);
    background: transparent;
    color: var(--ds-fg-dim);
    font-family: var(--ds-font-sans);
    font-size: var(--ds-text-sm);
    font-weight: var(--ds-weight-bold);
    text-decoration: none;
    cursor: pointer;
  }

  .nav :global(a:hover),
  .nav :global(button:hover) {
    background: var(--ds-surface-2);
    color: var(--ds-fg);
  }

  .nav :global(a:focus-visible),
  .nav :global(button:focus-visible) {
    outline: var(--ds-border-focus) solid var(--ds-focus);
    outline-offset: 3px;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: var(--ds-space-2);
    align-items: center;
    margin-left: auto;
  }

  @media (max-width: 640px) {
    .nav {
      display: none;
    }
  }
</style>
