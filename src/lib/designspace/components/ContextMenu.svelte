<script lang="ts">
  import type { Snippet } from 'svelte';
  import Icon from '#lib/designspace/icons/Icon.svelte';
  import type { IconName } from '#lib/designspace/icons';

  interface MenuItem {
    id: string;
    label: string;
    icon?: IconName;
    danger?: boolean;
    disabled?: boolean;
  }

  let {
    items,
    label = 'Aktionen',
    onselect,
    children
  }: {
    items: MenuItem[];
    label?: string;
    onselect?: (id: string) => void;
    children: Snippet;
  } = $props();

  let open = $state(false);
  let x = $state(0);
  let y = $state(0);
  let buttons: (HTMLButtonElement | null)[] = [];

  function show(event: MouseEvent) {
    event.preventDefault();
    x = Math.min(event.clientX, window.innerWidth - 240);
    y = Math.min(event.clientY, window.innerHeight - items.length * 52 - 16);
    open = true;
  }

  function choose(id: string) {
    onselect?.(id);
    open = false;
  }

  $effect(() => {
    if (!open) return;
    requestAnimationFrame(() => buttons[0]?.focus());
    const close = () => (open = false);
    const key = (event: KeyboardEvent) => {
      if (event.key === 'Escape') open = false;
    };
    window.addEventListener('click', close);
    window.addEventListener('keydown', key);
    return () => {
      window.removeEventListener('click', close);
      window.removeEventListener('keydown', key);
    };
  });
</script>

<div class="target" oncontextmenu={show} role="presentation">{@render children()}</div>

{#if open}
  <div class="menu" role="menu" aria-label={label} style="left: {x}px; top: {y}px">
    {#each items as item, index}
      <button
        bind:this={buttons[index]}
        type="button"
        role="menuitem"
        class:danger={item.danger}
        disabled={item.disabled}
        onclick={() => choose(item.id)}
      >
        {#if item.icon}<Icon name={item.icon} size={20} />{/if}
        <span>{item.label}</span>
      </button>
    {/each}
  </div>
{/if}

<style>
  .target {
    padding: var(--ds-space-8) var(--ds-space-4);
    border: 1px dashed var(--ds-line-strong);
    border-radius: var(--ds-radius-lg);
    text-align: center;
    font-size: var(--ds-text-sm);
    color: var(--ds-fg-dim);
  }

  .menu {
    position: fixed;
    z-index: 50;
    display: grid;
    min-width: 220px;
    padding: var(--ds-space-1);
    border: 1px solid var(--ds-line-strong);
    border-radius: var(--ds-radius-md);
    background: var(--ds-surface-2);
  }

  .menu button {
    display: flex;
    align-items: center;
    gap: var(--ds-space-3);
    min-height: var(--ds-tap-min);
    padding: 0 var(--ds-space-3);
    border: 0;
    border-radius: var(--ds-radius-sm);
    background: transparent;
    color: var(--ds-fg);
    font-family: var(--ds-font-sans);
    font-size: var(--ds-text-sm);
    text-align: left;
    cursor: pointer;
  }

  .menu button:hover {
    background: var(--ds-surface-3);
  }

  .menu button:focus-visible {
    outline: var(--ds-border-focus) solid var(--ds-focus);
    outline-offset: -3px;
  }

  .menu button.danger {
    color: var(--ds-danger);
  }

  .menu button:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
</style>
