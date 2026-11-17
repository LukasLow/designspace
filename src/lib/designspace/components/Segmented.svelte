<script lang="ts">
  interface SegmentItem {
    id: string;
    label: string;
  }

  let {
    id,
    items,
    value = $bindable(items[0]?.id ?? ''),
    label = 'Auswahl'
  }: {
    id: string;
    items: SegmentItem[];
    value?: string;
    label?: string;
  } = $props();

  let buttons: (HTMLButtonElement | null)[] = [];

  function focusAt(index: number) {
    value = items[index].id;
    requestAnimationFrame(() => buttons[index]?.focus());
  }

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
    focusAt(next);
  }
</script>

<div
  class="seg"
  id={id}
  role="radiogroup"
  aria-label={label}
  tabindex="-1"
  onkeydown={onKey}
>
  {#each items as item, index}
    <button
      bind:this={buttons[index]}
      type="button"
      role="radio"
      aria-checked={value === item.id}
      tabindex={value === item.id ? 0 : -1}
      class:active={value === item.id}
      onclick={() => (value = item.id)}
    >
      {item.label}
    </button>
  {/each}
</div>

<style>
  .seg {
    display: inline-flex;
    flex-wrap: wrap;
    gap: 2px;
    padding: 3px;
    border: 1px solid var(--ds-line-strong);
    border-radius: var(--ds-radius-control);
    background: var(--ds-surface);
  }

  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 42px;
    padding: 0 var(--ds-space-4);
    border: 0;
    border-radius: var(--ds-radius-md);
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
    background: var(--ds-brand-matte);
    color: var(--ds-bg);
  }

  button:focus-visible {
    outline: var(--ds-border-focus) solid var(--ds-focus);
    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: no-preference) {
    button {
      transition:
        background var(--ds-dur-1) var(--ds-ease-out),
        color var(--ds-dur-1) var(--ds-ease-out);
    }
  }
</style>
