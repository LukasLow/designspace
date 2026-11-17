<script lang="ts">
  let {
    id,
    label,
    value = $bindable(''),
    hint = '',
    error = '',
    min = '',
    max = ''
  }: {
    id: string;
    label: string;
    value?: string;
    hint?: string;
    error?: string;
    min?: string;
    max?: string;
  } = $props();

  const describedBy = $derived(error ? `${id}-error` : hint ? `${id}-hint` : undefined);

  function today(offset = 0) {
    const date = new Date();
    date.setDate(date.getDate() + offset);
    return date.toISOString().slice(0, 10);
  }
</script>

<div class="field">
  <label for={id}>{label}</label>
  <div class="control">
    <input
      {id}
      type="date"
      bind:value
      {min}
      {max}
      aria-invalid={error ? 'true' : undefined}
      aria-describedby={describedBy}
    />
  </div>
  <div class="quick" role="group" aria-label="Schnellwahl">
    <button type="button" onclick={() => (value = today())}>Heute</button>
    <button type="button" onclick={() => (value = today(1))}>Morgen</button>
    <button type="button" onclick={() => (value = today(7))}>In einer Woche</button>
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
  }

  input {
    width: 100%;
    min-height: var(--ds-tap-min);
    padding: 0 var(--ds-space-4);
    border: 1px solid var(--ds-line-strong);
    border-radius: var(--ds-radius-control);
    background: var(--ds-surface-2);
    color: var(--ds-fg);
    font-family: var(--ds-font-sans);
    font-size: var(--ds-text-sm);
  }

  input::-webkit-calendar-picker-indicator {
    filter: invert(1);
    opacity: 0.7;
    cursor: pointer;
  }

  input:focus-visible {
    outline: var(--ds-border-focus) solid var(--ds-brand);
    outline-offset: 2px;
    border-color: var(--ds-brand);
  }

  input[aria-invalid='true'] {
    border-color: var(--ds-danger);
  }

  .quick {
    display: flex;
    flex-wrap: wrap;
    gap: var(--ds-space-2);
  }

  .quick button {
    min-height: var(--ds-tap-min);
    padding: 0 var(--ds-space-3);
    border: 1px solid var(--ds-line-strong);
    border-radius: var(--ds-radius-control);
    background: transparent;
    color: var(--ds-fg-dim);
    font-family: var(--ds-font-sans);
    font-size: var(--ds-text-xs);
    font-weight: var(--ds-weight-bold);
    cursor: pointer;
  }

  .quick button:hover {
    border-color: var(--ds-brand);
    color: var(--ds-fg);
  }

  .quick button:focus-visible {
    outline: var(--ds-border-focus) solid var(--ds-focus);
    outline-offset: 3px;
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
