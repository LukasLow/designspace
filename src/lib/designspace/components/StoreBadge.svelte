<script lang="ts">
  import Icon from '#lib/designspace/icons/Icon.svelte';

  let {
    store = 'apple',
    href = '#'
  }: {
    store?: 'apple' | 'google';
    href?: string;
  } = $props();

  const label = $derived(store === 'apple' ? 'Laden im App Store' : 'Jetzt bei Google Play');
  const hint = $derived(store === 'apple' ? 'App Store' : 'Google Play');
</script>

<a class="badge" {href}>
  <span class="mark" aria-hidden="true"><Icon name="Geräte" size={24} /></span>
  <span class="text">
    <span class="hint">{hint}</span>
    <span class="label">{label}</span>
  </span>
</a>

<style>
  .badge {
    display: inline-flex;
    align-items: center;
    gap: var(--ds-space-3);
    min-height: var(--ds-tap-min);
    padding: var(--ds-space-2) var(--ds-space-4);
    border: 1px solid var(--ds-line-strong);
    border-radius: var(--ds-radius-md);
    background: var(--ds-surface-2);
    color: var(--ds-fg);
    text-decoration: none;
  }

  .badge:hover {
    border-color: var(--ds-brand);
  }

  .badge:focus-visible {
    outline: var(--ds-border-focus) solid var(--ds-focus);
    outline-offset: 3px;
  }

  .mark {
    display: inline-flex;
    color: var(--ds-fg);
  }

  .text {
    display: grid;
    gap: 1px;
  }

  .hint {
    font-size: var(--ds-text-2xs);
    color: var(--ds-fg-dim);
  }

  .label {
    font-size: var(--ds-text-sm);
    font-weight: var(--ds-weight-bold);
  }
</style>
