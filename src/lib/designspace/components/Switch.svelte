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

  .track {
    position: relative;
    display: inline-block;
    width: 52px;
    height: 30px;
    flex: none;
    border: 1px solid var(--ds-line-strong);
    border-radius: 999px;
    background: var(--ds-surface-2);
    transition: background var(--ds-dur-2) var(--ds-ease-out), border-color var(--ds-dur-2) var(--ds-ease-out);
  }

  .knob {
    position: absolute;
    top: 3px;
    left: 3px;
    width: 22px;
    height: 22px;
    border-radius: 999px;
    background: var(--ds-fg);
    transition: transform var(--ds-dur-2) var(--ds-ease-out), background var(--ds-dur-2) var(--ds-ease-out);
  }

  input:checked + .track {
    background: var(--ds-brand-matte);
    border-color: var(--ds-brand-matte);
  }

  input:checked + .track .knob {
    transform: translateX(22px);
    background: #000000;
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
