<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    children,
    padding = 'md'
  }: {
    children: Snippet;
    padding?: 'none' | 'sm' | 'md' | 'lg';
  } = $props();
</script>

<div class="card {padding}">
  {@render children()}
</div>

<style>
  /* Fläche: Runde 6 (Fläche). Material: Runde 10 (flach, kein Wurfschatten).
     Flächen sind nicht interaktiv, deshalb ohne Korn. */
  .card {
    background: var(--ds-surface);
    border: 1px solid var(--ds-line);
    border-radius: var(--ds-radius-lg);
  }

  .none {
    padding: 0;
  }

  .sm {
    padding: var(--ds-space-4);
  }

  .md {
    padding: var(--ds-space-6);
  }

  .lg {
    padding: var(--ds-space-7);
  }
</style>
