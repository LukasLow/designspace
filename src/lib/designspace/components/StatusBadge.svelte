<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    tone = 'neutral',
    dot = true,
    children
  }: {
    tone?: 'neutral' | 'brand' | 'info' | 'success' | 'category' | 'warning' | 'danger';
    dot?: boolean;
    children: Snippet;
  } = $props();
</script>

<span class="badge {tone}">
  {#if dot}<span class="dot" aria-hidden="true"></span>{/if}
  {@render children()}
</span>

<style>
  .badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    min-height: 26px;
    padding: 0 var(--ds-space-3);
    border: 1px solid var(--ds-line-strong);
    border-radius: var(--ds-radius-pill);
    background: var(--ds-surface-2);
    color: var(--ds-fg);
    font-size: var(--ds-text-2xs);
    font-weight: var(--ds-weight-bold);
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .dot {
    width: 8px;
    height: 8px;
    border-radius: var(--ds-radius-pill);
    background: currentColor;
  }

  .brand {
    border-color: var(--ds-brand);
    background: var(--ds-brand-soft);
    color: var(--ds-brand);
  }

  .info {
    border-color: var(--ds-info);
    background: var(--ds-info-soft);
    color: var(--ds-info);
  }

  .success {
    border-color: var(--ds-success);
    background: var(--ds-success-soft);
    color: var(--ds-success);
  }

  .category {
    border-color: var(--ds-category);
    background: var(--ds-category-soft);
    color: var(--ds-category);
  }

  .warning {
    border-color: var(--ds-warning);
    background: var(--ds-warning-soft);
    color: var(--ds-warning);
  }

  .danger {
    border-color: var(--ds-danger);
    background: var(--ds-danger-soft);
    color: var(--ds-danger);
  }
</style>
