<script lang="ts">
  let {
    label,
    id,
    value = $bindable(0),
    min = 0,
    max = 100,
    step = 1,
    unit = '',
    hint = '',
    error = '',
    disabled = false
  }: {
    label: string;
    id: string;
    value?: number;
    min?: number;
    max?: number;
    step?: number;
    unit?: string;
    hint?: string;
    error?: string;
    disabled?: boolean;
  } = $props();

  const percent = $derived(
    max === min ? 0 : Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100))
  );

  const describedBy = $derived(
    error ? `${id}-slider-error` : hint ? `${id}-slider-hint` : undefined
  );
</script>

<div class="slider" class:disabled>
  <div class="top">
    <label for={id}>{label}</label>
    <output for={id} class="value">{value}{unit}</output>
  </div>

  <input
    {id}
    type="range"
    {min}
    {max}
    {step}
    bind:value
    {disabled}
    style="--fill: {percent}%"
    aria-invalid={error ? 'true' : undefined}
    aria-describedby={describedBy}
  />

  {#if error}
    <p class="msg error" id={`${id}-slider-error`}>{error}</p>
  {:else if hint}
    <p class="msg hint" id={`${id}-slider-hint`}>{hint}</p>
  {/if}
</div>

<style>
  /* Regler: 48-px-Ziel, Füllung in Petrol, Knopf als gefüllte Fläche.
     Kein Verlauf als Dekoration — die Füllung zeigt den Wert. */
  .slider {
    display: grid;
    gap: var(--ds-space-2);
  }

  .slider.disabled {
    opacity: 0.45;
  }

  .top {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: var(--ds-space-3);
  }

  label {
    font-size: var(--ds-text-2xs);
    font-weight: var(--ds-weight-bold);
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--ds-fg-dim);
  }

  .value {
    font-size: var(--ds-text-sm);
    font-weight: var(--ds-weight-bold);
    color: var(--ds-fg);
    font-variant-numeric: tabular-nums;
  }

  input {
    --slider-fill: var(--ds-brand);

    width: 100%;
    min-height: var(--ds-tap-min);
    margin: 0;
    background: transparent;
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
  }

  input[aria-invalid='true'] {
    --slider-fill: var(--ds-danger);
  }

  input:disabled {
    cursor: not-allowed;
  }

  input:focus-visible {
    outline: var(--ds-border-focus) solid var(--ds-brand);
    outline-offset: 3px;
    border-radius: var(--ds-radius-pill);
  }

  input[aria-invalid='true']:focus-visible {
    outline-color: var(--ds-danger);
  }

  /* WebKit */
  input::-webkit-slider-runnable-track {
    height: 8px;
    border-radius: var(--ds-radius-pill);
    background: linear-gradient(
      90deg,
      var(--slider-fill) 0 var(--fill),
      var(--ds-line-strong) var(--fill) 100%
    );
  }

  input::-webkit-slider-thumb {
    width: 28px;
    height: 28px;
    margin-top: -10px;
    border: var(--ds-border-strong) solid var(--ds-bg);
    border-radius: var(--ds-radius-sm);
    background: var(--slider-fill);
    appearance: none;
    -webkit-appearance: none;
    transition: transform var(--ds-dur-1) var(--ds-ease-out);
  }

  input:active::-webkit-slider-thumb {
    transform: scale(0.94);
  }

  /* Firefox */
  input::-moz-range-track {
    height: 8px;
    border-radius: var(--ds-radius-pill);
    background: var(--ds-line-strong);
  }

  input::-moz-range-progress {
    height: 8px;
    border-radius: var(--ds-radius-pill);
    background: var(--slider-fill);
  }

  input::-moz-range-thumb {
    width: 28px;
    height: 28px;
    border: var(--ds-border-strong) solid var(--ds-bg);
    border-radius: var(--ds-radius-sm);
    background: var(--slider-fill);
    transition: transform var(--ds-dur-1) var(--ds-ease-out);
  }

  input:active::-moz-range-thumb {
    transform: scale(0.94);
  }

  .msg {
    font-size: var(--ds-text-xs);
    font-weight: var(--ds-weight-bold);
  }

  .hint {
    color: var(--ds-fg-dim);
    font-weight: var(--ds-weight-regular);
  }

  .error {
    color: var(--ds-danger);
  }

  @media (prefers-reduced-motion: reduce) {
    input::-webkit-slider-thumb,
    input::-moz-range-thumb {
      transition: none;
    }

    input:active::-webkit-slider-thumb,
    input:active::-moz-range-thumb {
      transform: none;
    }
  }
</style>
