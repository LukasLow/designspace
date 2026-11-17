<script lang="ts">
  import Icon from '#lib/designspace/icons/Icon.svelte';

  let {
    value = $bindable(100),
    min = 25,
    max = 400,
    step = 25,
    label = 'Zoom'
  }: {
    value?: number;
    min?: number;
    max?: number;
    step?: number;
    label?: string;
  } = $props();

  function change(amount: number) {
    value = Math.min(max, Math.max(min, value + amount));
  }
</script>

<div class="zoom" role="group" aria-label={label}>
  <button type="button" aria-label="Verkleinern" disabled={value <= min} onclick={() => change(-step)}>
    <Icon name="Minus" size={20} />
  </button>
  <button type="button" class="value" aria-label={`${value} Prozent, auf 100 zurücksetzen`} onclick={() => (value = 100)}>
    {value} %
  </button>
  <button type="button" aria-label="Vergrößern" disabled={value >= max} onclick={() => change(step)}>
    <Icon name="Plus" size={20} />
  </button>
</div>

<style>
  .zoom {
    display: inline-flex;
    align-items: center;
    gap: 2px;
    padding: 2px;
    border: 1px solid var(--ds-line-strong);
    border-radius: var(--ds-radius-control);
    background: var(--ds-surface);
  }

  button {
    display: grid;
    place-items: center;
    min-width: var(--ds-tap-min);
    height: var(--ds-tap-min);
    padding: 0 var(--ds-space-2);
    border: 0;
    border-radius: var(--ds-radius-md);
    background: transparent;
    color: var(--ds-fg);
    font-family: var(--ds-font-mono);
    font-size: var(--ds-text-sm);
    cursor: pointer;
  }

  button:hover:not(:disabled) {
    background: var(--ds-surface-3);
  }

  button:focus-visible {
    outline: var(--ds-border-focus) solid var(--ds-focus);
    outline-offset: 3px;
  }

  button:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .value {
    min-width: 76px;
    font-weight: var(--ds-weight-bold);
  }
</style>
