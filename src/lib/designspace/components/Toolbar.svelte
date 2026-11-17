<script lang="ts">
  import Icon from '#lib/designspace/icons/Icon.svelte';
  import type { IconName } from '#lib/designspace/icons';

  interface ToolItem {
    id: string;
    label: string;
    icon: IconName;
  }

  let {
    items,
    value = $bindable(items[0]?.id ?? ''),
    label = 'Werkzeuge'
  }: {
    items: ToolItem[];
    value?: string;
    label?: string;
  } = $props();

  let buttons: (HTMLButtonElement | null)[] = [];

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
    requestAnimationFrame(() => buttons[next]?.focus());
  }
</script>

<div class="toolbar" role="toolbar" aria-label={label} tabindex="-1" onkeydown={onKey}>
  {#each items as item, index}
    <button
      bind:this={buttons[index]}
      type="button"
      class:active={value === item.id}
      aria-pressed={value === item.id}
      tabindex={value === item.id ? 0 : -1}
      title={item.label}
      onclick={() => (value = item.id)}
    >
      <Icon name={item.icon} size={20} />
      <span>{item.label}</span>
    </button>
  {/each}
</div>

<style>
  .toolbar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--ds-space-1);
    padding: var(--ds-space-1);
    border: 1px solid var(--ds-line);
    border-radius: var(--ds-radius-md);
    background: var(--ds-surface);
  }

  button {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    min-height: var(--ds-tap-min);
    padding: 0 var(--ds-space-3);
    border: 1px solid transparent;
    border-radius: var(--ds-radius-sm);
    background: transparent;
    color: var(--ds-fg-dim);
    font-family: var(--ds-font-sans);
    font-size: var(--ds-text-sm);
    font-weight: var(--ds-weight-bold);
    cursor: pointer;
  }

  button:hover {
    background: var(--ds-surface-2);
    color: var(--ds-fg);
  }

  button.active {
    background: var(--ds-brand-soft);
    border-color: var(--ds-brand-soft);
    color: var(--ds-brand);
  }

  button:focus-visible {
    outline: var(--ds-border-focus) solid var(--ds-focus);
    outline-offset: 3px;
  }

  @media (max-width: 480px) {
    .toolbar {
      flex-wrap: nowrap;
      overflow-x: auto;
    }

    button span {
      display: none;
    }

    button {
      justify-content: center;
      min-width: var(--ds-tap-min);
    }
  }
</style>
