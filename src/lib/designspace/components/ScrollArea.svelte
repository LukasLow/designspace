<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    maxHeight = '260px',
    label = 'Bereich mit eigenem Scrollbalken',
    children
  }: {
    maxHeight?: string;
    label?: string;
    children: Snippet;
  } = $props();
</script>

<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
<div class="scroll" style="max-height: {maxHeight}" tabindex="0" role="region" aria-label={label}>
  {@render children()}
</div>

<style>
  .scroll {
    overflow: auto;
    padding-right: var(--ds-space-2);
    scrollbar-width: thin;
    scrollbar-color: var(--ds-line-strong) transparent;
    border-radius: var(--ds-radius-sm);
  }

  .scroll:focus-visible {
    outline: var(--ds-border-focus) solid var(--ds-focus);
    outline-offset: 3px;
  }

  .scroll::-webkit-scrollbar {
    width: 8px;
  }

  .scroll::-webkit-scrollbar-track {
    background: transparent;
  }

  .scroll::-webkit-scrollbar-thumb {
    border-radius: var(--ds-radius-pill);
    background: var(--ds-line-strong);
  }
</style>
