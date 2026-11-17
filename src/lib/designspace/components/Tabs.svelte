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
  let indicator = $state({ left: 0, width: 0 });

  // Der Strich folgt dem aktiven Tab. Gemessen wird nach dem Rendern,
  // damit die Bewegung zwischen zwei echten Positionen läuft.
  $effect(() => {
    const index = items.findIndex((item) => item.id === value);
    const el = tabEls[index];
    if (el) {
      indicator = { left: el.offsetLeft, width: el.offsetWidth };
    }
  });

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
  <span
    class="indicator"
    aria-hidden="true"
    style="transform: translateX({indicator.left}px); width: {indicator.width}px"
  ></span>

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
  /* Tabs wie in der Kursvorlage: Unterstrich-Leiste, der aktive Strich
     gleitet mit 200 ms zwischen den Tabs. Kein Pill, keine Fläche. */
  .tabs {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    gap: 2px;
    border-bottom: 1px solid var(--ds-line);
  }

  .indicator {
    position: absolute;
    left: 0;
    bottom: -1px;
    height: 2px;
    background: var(--ds-brand);
    transition:
      transform var(--ds-dur-2) var(--ds-ease-out),
      width var(--ds-dur-2) var(--ds-ease-out);
  }

  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: var(--ds-tap-min);
    padding: 0 var(--ds-space-4);
    border: 1px solid transparent;
    border-radius: var(--ds-radius-control) var(--ds-radius-control) 0 0;
    background: transparent;
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
    background: var(--ds-surface-2);
    color: var(--ds-fg);
  }

  button.active {
    color: var(--ds-fg);
  }

  button:focus-visible {
    outline: var(--ds-border-focus) solid var(--ds-focus);
    outline-offset: -3px;
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
    .indicator,
    button {
      transition: none;
    }
  }
</style>
