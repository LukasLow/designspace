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

<label class="check" for={id}>
  <input {id} type="checkbox" bind:checked {disabled} />
  <span class="box" aria-hidden="true">
    <svg viewBox="0 0 24 24">
      <path d="M5 12.5 10 17.5 19 7" />
    </svg>
  </span>
  {#if label}<span class="text">{label}</span>{/if}
</label>

<style>
  .check {
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

  .box {
    display: grid;
    place-items: center;
    width: 24px;
    height: 24px;
    flex: none;
    border: 2px solid var(--ds-line-strong);
    border-radius: 6px;
    background: transparent;
    transition: background var(--ds-dur-1) var(--ds-ease-out), border-color var(--ds-dur-1) var(--ds-ease-out);
  }

  .box svg {
    width: 16px;
    height: 16px;
    fill: none;
    stroke: #000000;
    stroke-width: 2.6;
    stroke-linecap: round;
    stroke-linejoin: round;
    opacity: 0;
  }

  input:checked + .box {
    background: var(--ds-brand-matte);
    border-color: var(--ds-brand-matte);
  }

  input:checked + .box svg {
    opacity: 1;
  }

  input:focus-visible + .box {
    outline: var(--ds-border-focus) solid var(--ds-brand);
    outline-offset: 3px;
  }

  input:disabled + .box {
    opacity: 0.45;
  }

  .check:has(input:disabled) {
    cursor: not-allowed;
  }

  .text {
    font-size: var(--ds-text-sm);
    font-weight: var(--ds-weight-bold);
  }

  @media (prefers-reduced-motion: reduce) {
    .box {
      transition: none;
    }
  }
</style>
