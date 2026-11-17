<script lang="ts">
  import type { Snippet } from 'svelte';

  interface TabItem {
    id: string;
    label: string;
  }

  let {
    id,
    items,
    value = $bindable(items[0]?.id ?? ''),
    label = 'Bereiche',
    panel
  }: {
    id: string;
    items: TabItem[];
    value?: string;
    label?: string;
    panel?: Snippet<[string]>;
  } = $props();

  let tabEls: (HTMLButtonElement | null)[] = [];

  function onKey(event: KeyboardEvent) {
    const current = items.findIndex((item) => item.id === value);
    if (current < 0) return;

    let next = current;

    if (event.key === 'ArrowRight') next = (current + 1) % items.length;
    else if (event.key === 'ArrowLeft') next = (current - 1 + items.length) % items.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = items.length - 1;
    else return;

    event.preventDefault();
    value = items[next].id;
    requestAnimationFrame(() => tabEls[next]?.focus());
  }
</script>

<div class="tabs" role="tablist" tabindex="-1" aria-label={label} onkeydown={onKey}>
  {#each items as item, index}
    <button
      bind:this={tabEls[index]}
      type="button"
      role="tab"
      id={`${id}-tab-${item.id}`}
      aria-selected={value === item.id}
      aria-controls={`${id}-panel-${item.id}`}
      tabindex={value === item.id ? 0 : -1}
      class:active={value === item.id}
      onclick={() => (value = item.id)}
    >
      {item.label}
    </button>
  {/each}
</div>

<div
  class="panel"
  role="tabpanel"
  id={`${id}-panel-${value}`}
  aria-labelledby={`${id}-tab-${value}`}
  tabindex="0"
>
  {#if panel}{@render panel(value)}{/if}
</div>

<style>
  /* Tabs wechseln Bereiche. Aktiv ist eine gefüllte Fläche, kein Unterstrich.
     Pfeiltasten, Home und End wechseln; der Fokus folgt dem aktiven Tab. */
  .tabs {
    display: flex;
    flex-wrap: wrap;
    gap: var(--ds-space-2);
  }

  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: var(--ds-tap-min);
    padding: 0 var(--ds-space-4);
    border: 1px solid transparent;
    border-radius: var(--ds-radius-control);
    background: var(--ds-surface-2);
    color: var(--ds-fg-dim);
    font-family: var(--ds-font-sans);
    font-size: var(--ds-text-sm);
    font-weight: var(--ds-weight-bold);
    white-space: nowrap;
    transition:
      background var(--ds-dur-1) var(--ds-ease-out),
      color var(--ds-dur-1) var(--ds-ease-out);
  }

  button:hover {
    background: var(--ds-surface-3);
    color: var(--ds-fg);
  }

  button.active {
    background: var(--ds-brand-matte);
    border-color: var(--ds-brand-matte);
    color: var(--ds-brand-ink);
  }

  button:focus-visible {
    outline: var(--ds-border-focus) solid var(--ds-focus);
    outline-offset: 3px;
  }

  .panel {
    padding-top: var(--ds-space-4);
    font-size: var(--ds-text-sm);
  }

  .panel:focus-visible {
    outline: var(--ds-border-focus) solid var(--ds-focus);
    outline-offset: 3px;
    border-radius: var(--ds-radius-xs);
  }

  @media (prefers-reduced-motion: reduce) {
    button {
      transition: none;
    }
  }
</style>
