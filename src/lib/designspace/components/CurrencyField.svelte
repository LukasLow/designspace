<script lang="ts">
  let {
    id,
    label,
    value = $bindable(''),
    currency = 'EUR',
    hint = '',
    error = '',
    disabled = false
  }: {
    id: string;
    label: string;
    value?: string;
    currency?: 'EUR' | 'USD' | 'CHF';
    hint?: string;
    error?: string;
    disabled?: boolean;
  } = $props();

  const symbol = $derived(currency === 'USD' ? '$' : currency === 'CHF' ? 'CHF' : '€');
  const describedBy = $derived(error ? `${id}-error` : hint ? `${id}-hint` : undefined);
</script>

<div class="field">
  <label for={id}>{label}</label>
  <div class="control">
    <span class="symbol" aria-hidden="true">{symbol}</span>
    <input
      {id}
      type="text"
      inputmode="decimal"
      bind:value
      {disabled}
      placeholder="0,00"
      aria-invalid={error ? 'true' : undefined}
      aria-describedby={describedBy}
    />
    <span class="code">{currency}</span>
  </div>
  {#if error}
    <p class="msg error" id={`${id}-error`}>{error}</p>
  {:else if hint}
    <p class="msg hint" id={`${id}-hint`}>{hint}</p>
  {/if}
</div>

<style>
  .field {
    display: grid;
    gap: 6px;
  }

  label {
    font-size: var(--ds-text-2xs);
    font-weight: var(--ds-weight-bold);
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--ds-fg-dim);
  }

  .control {
    display: flex;
    align-items: center;
    gap: var(--ds-space-2);
    padding: 0 var(--ds-space-4);
    border: 1px solid var(--ds-line-strong);
    border-radius: var(--ds-radius-control);
    background: var(--ds-surface-2);
  }

  .control:focus-within {
    border-color: var(--ds-brand);
    outline: var(--ds-border-focus) solid var(--ds-brand);
    outline-offset: 2px;
  }

  .symbol {
    font-family: var(--ds-font-mono);
    font-size: var(--ds-text-sm);
    color: var(--ds-fg-dim);
  }

  input {
    flex: 1;
    min-width: 0;
    min-height: var(--ds-tap-min);
    border: 0;
    background: transparent;
    color: var(--ds-fg);
    font-family: var(--ds-font-mono);
    font-size: var(--ds-text-base);
    font-variant-numeric: tabular-nums;
  }

  input:focus-visible {
    outline: none;
  }

  input::placeholder {
    color: var(--ds-fg-dim);
    opacity: 1;
  }

  input:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }

  .code {
    font-size: var(--ds-text-2xs);
    font-weight: var(--ds-weight-bold);
    letter-spacing: 0.06em;
    color: var(--ds-fg-dim);
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

  .field:has(.control:focus-within) .msg {
    color: var(--ds-fg-dim);
  }
</style>
