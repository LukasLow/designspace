<script lang="ts">
  import Icon from '#lib/designspace/icons/Icon.svelte';
  import type { IconName } from '#lib/designspace/icons';

  interface NavRailItem {
    id: string;
    label: string;
    icon: IconName;
  }

  let {
    items,
    value = $bindable(items[0]?.id ?? ''),
    label = 'Bereiche'
  }: {
    items: NavRailItem[];
    value?: string;
    label?: string;
  } = $props();

  function onKey(event: KeyboardEvent) {
    const current = items.findIndex((item) => item.id === value);
    if (current < 0) return;
    let next = current;
    if (event.key === 'ArrowDown') next = (current + 1) % items.length;
    else if (event.key === 'ArrowUp') next = (current - 1 + items.length) % items.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = items.length - 1;
    else return;
    event.preventDefault();
    value = items[next].id;
    const el = document.getElementById(`rail-${items[next].id}`);
    el?.focus();
  }
</script>

<nav class="rail" aria-label={label}>
  <ul role="list">
    {#each items as item}
      <li>
        <button
          id={`rail-${item.id}`}
          type="button"
          class:active={value === item.id}
          aria-current={value === item.id ? 'page' : undefined}
          onclick={() => (value = item.id)}
          onkeydown={onKey}
        >
          <Icon name={item.icon} size={24} />
          <span>{item.label}</span>
        </button>
      </li>
    {/each}
  </ul>
</nav>

<style>
  .rail {
    width: 88px;
    padding: var(--ds-space-2);
    border-right: var(--ds-border-hairline) solid var(--ds-line);
    background: var(--ds-surface);
  }

  ul {
    display: grid;
    gap: var(--ds-space-1);
    margin: 0;
    padding: 0;
    list-style: none;
  }

  button {
    position: relative;
    display: grid;
    justify-items: center;
    gap: 2px;
    width: 100%;
    min-height: var(--ds-tap-min);
    padding: var(--ds-space-2) var(--ds-space-1);
    border: 1px solid transparent;
    border-radius: var(--ds-radius-md);
    background: transparent;
    color: var(--ds-fg-dim);
    font-family: var(--ds-font-sans);
    font-size: var(--ds-text-2xs);
    font-weight: var(--ds-weight-bold);
    cursor: pointer;
    transition:
      background var(--ds-dur-1) var(--ds-ease-out),
      color var(--ds-dur-1) var(--ds-ease-out);
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

  button.active::before {
    content: '';
    position: absolute;
    inset-block: var(--ds-space-2);
    left: 0;
    width: 3px;
    border-radius: var(--ds-radius-pill);
    background: var(--ds-brand);
  }

  button:focus-visible {
    outline: var(--ds-border-focus) solid var(--ds-focus);
    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    button {
      transition: none;
    }
  }
</style>
