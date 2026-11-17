<script lang="ts">
  import type { Snippet } from 'svelte';

  type Tone = 'neutral' | 'brand' | 'info' | 'success' | 'category' | 'warning' | 'danger';

  let { tone = 'neutral', children }: { tone?: Tone; children: Snippet } = $props();
</script>

<span class="chip {tone}">
  {@render children()}
</span>

<style>
  .chip {
    --chip-color: var(--ds-fg-dim);
    --chip-soft: rgba(255, 255, 255, 0.08);

    display: inline-flex;
    align-items: center;
    gap: 6px;
    min-height: 30px;
    padding: 0 10px;
    border: 1px solid var(--chip-color);
    border-radius: var(--ds-radius-control);
    background: color-mix(in srgb, var(--chip-color) 10%, transparent);
    color: var(--chip-color);
    font-family: var(--ds-font-sans);
    font-size: var(--ds-text-2xs);
    font-weight: var(--ds-weight-bold);
    letter-spacing: 0.06em;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .brand {
    --chip-color: var(--ds-brand);
    --chip-soft: var(--ds-brand-soft);
  }

  .info {
    --chip-color: var(--ds-info);
    --chip-soft: var(--ds-info-soft);
  }

  .success {
    --chip-color: var(--ds-success);
    --chip-soft: var(--ds-success-soft);
  }

  .category {
    --chip-color: var(--ds-category);
    --chip-soft: var(--ds-category-soft);
  }

  .warning {
    --chip-color: var(--ds-warning);
    --chip-soft: var(--ds-warning-soft);
  }

  .danger {
    --chip-color: var(--ds-danger);
    --chip-soft: var(--ds-danger-soft);
  }
</style>
