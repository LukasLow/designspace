<script lang="ts">
  import Icon from '#lib/designspace/icons/Icon.svelte';
  import type { IconName } from '#lib/designspace/icons';

  interface BottomNavItem {
    id: string;
    label: string;
    icon: IconName;
  }

  let {
    items,
    value = $bindable(items[0]?.id ?? ''),
    label = 'Hauptnavigation',
    fixed = false
  }: {
    items: BottomNavItem[];
    value?: string;
    label?: string;
    fixed?: boolean;
  } = $props();
</script>

<nav class="bottom" class:fixed aria-label={label}>
  {#each items as item}
    <button
      type="button"
      class:active={value === item.id}
      aria-current={value === item.id ? 'page' : undefined}
      onclick={() => (value = item.id)}
    >
      <Icon name={item.icon} size={24} />
      <span>{item.label}</span>
    </button>
  {/each}
</nav>

<style>
  .bottom {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    border-top: var(--ds-border-hairline) solid var(--ds-line);
    background: var(--ds-surface);
  }

  .fixed {
    position: fixed;
    inset-inline: 0;
    bottom: 0;
    z-index: 20;
  }

  button {
    display: grid;
    justify-items: center;
    gap: 2px;
    min-height: var(--ds-tap-min);
    padding: var(--ds-space-2) var(--ds-space-1);
    border: 0;
    border-top: 3px solid transparent;
    background: transparent;
    color: var(--ds-fg-dim);
    font-family: var(--ds-font-sans);
    font-size: var(--ds-text-2xs);
    font-weight: var(--ds-weight-bold);
    cursor: pointer;
  }

  button:hover {
    background: var(--ds-surface-2);
    color: var(--ds-fg);
  }

  button.active {
    border-top-color: var(--ds-brand);
    color: var(--ds-brand);
  }

  button:focus-visible {
    outline: var(--ds-border-focus) solid var(--ds-focus);
    outline-offset: -3px;
  }

  @media (prefers-reduced-motion: no-preference) {
    button {
      transition:
        color var(--ds-dur-1) var(--ds-ease-out),
        background var(--ds-dur-1) var(--ds-ease-out);
    }
  }
</style>
