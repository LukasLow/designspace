<script lang="ts">
  let {
    checked = $bindable(false),
    label = '',
    id,
    disabled = false
  }: {
    checked?: boolean;
    label?: string;
    id: string;
    disabled?: boolean;
  } = $props();
</script>

<label class="switch" for={id}>
  <input {id} type="checkbox" role="switch" bind:checked {disabled} />
  <span class="track" aria-hidden="true"><span class="knob"></span></span>
  {#if label}<span class="text">{label}</span>{/if}
</label>

<style>
  .switch {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    min-height: var(--ds-tap-min);
    cursor: pointer;
  }

  input {
    position: absolute;
    width: 1px;
    height: 1px;
    opacity: 0;
    pointer-events: none;
  }

  /* Bahn: abgerundetes Rechteck, kein Pill. */
  .track {
    position: relative;
    display: inline-block;
    width: 58px;
    height: 38px;
    flex: none;
    border: 1px solid var(--ds-line-strong);
    border-radius: 13px;
    background: var(--ds-surface-2);
    transition:
      background var(--ds-dur-2) var(--ds-ease-out),
      border-color var(--ds-dur-2) var(--ds-ease-out);
  }

  /* Knopf: weißes Quadrat mit weichem Rand, kein Kreis. */
  .knob {
    position: absolute;
    top: 3px;
    left: 3px;
    width: 30px;
    height: 30px;
    border-radius: 10px;
    background: linear-gradient(180deg, #ffffff 60%, #e6e6e6 100%);
    box-shadow:
      0 1px 3px rgba(0, 0, 0, 0.55),
      inset 0 1px 0 rgba(255, 255, 255, 0.9);
    transition: transform var(--ds-dur-2) var(--ds-ease-out);
  }

  input:checked + .track {
    background: var(--ds-category);
    border-color: var(--ds-category);
  }

  input:checked + .track .knob {
    transform: translateX(20px);
  }

  input:focus-visible + .track {
    outline: var(--ds-border-focus) solid var(--ds-brand);
    outline-offset: 3px;
  }

  input:disabled + .track {
    opacity: 0.45;
  }

  .switch:has(input:disabled) {
    cursor: not-allowed;
  }

  .text {
    font-size: var(--ds-text-sm);
    font-weight: var(--ds-weight-bold);
  }

  @media (prefers-reduced-motion: reduce) {
    .track,
    .knob {
      transition: none;
    }
  }
</style>
