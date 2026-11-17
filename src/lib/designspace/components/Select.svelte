<script lang="ts">
  import Icon from '#lib/designspace/icons/Icon.svelte';

  interface Option {
    value: string;
    label: string;
  }

  let {
    id,
    label,
    options,
    value = $bindable(''),
    placeholder = 'Bitte wählen',
    hint = '',
    error = '',
    disabled = false
  }: {
    id: string;
    label: string;
    options: Option[];
    value?: string;
    placeholder?: string;
    hint?: string;
    error?: string;
    disabled?: boolean;
  } = $props();

  const describedBy = $derived(error ? `${id}-error` : hint ? `${id}-hint` : undefined);
</script>

<div class="field">
  <label for={id}>{label}</label>
  <div class="control">
    <select
      {id}
      bind:value
      {disabled}
      aria-invalid={error ? 'true' : undefined}
      aria-describedby={describedBy}
    >
      <option value="" disabled={value !== ''}>{placeholder}</option>
      {#each options as option}
        <option value={option.value}>{option.label}</option>
      {/each}
    </select>
    <span class="chev" aria-hidden="true"><Icon name="Aufklappen" size={20} /></span>
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
    position: relative;
    display: flex;
    align-items: center;
  }

  select {
    width: 100%;
    min-height: var(--ds-tap-min);
    padding: 0 var(--ds-space-9) 0 var(--ds-space-4);
    border: 1px solid var(--ds-line-strong);
    border-radius: var(--ds-radius-control);
    background: var(--ds-surface-2);
    color: var(--ds-fg);
    font-family: var(--ds-font-sans);
    font-size: var(--ds-text-sm);
    appearance: none;
    cursor: pointer;
  }

  select:focus-visible {
    outline: var(--ds-border-focus) solid var(--ds-brand);
    outline-offset: 2px;
    border-color: var(--ds-brand);
  }

  select[aria-invalid='true'] {
    border-color: var(--ds-danger);
  }

  select:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }

  .chev {
    position: absolute;
    right: var(--ds-space-3);
    display: inline-flex;
    color: var(--ds-fg-dim);
    pointer-events: none;
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
</style>
