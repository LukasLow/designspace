<script lang="ts">
  let {
    label,
    id,
    type = 'text',
    value = $bindable(''),
    placeholder = '',
    hint = '',
    error = ''
  }: {
    label: string;
    id: string;
    type?: string;
    value?: string;
    placeholder?: string;
    hint?: string;
    error?: string;
  } = $props();

  const describedBy = $derived(error ? `${id}-error` : hint ? `${id}-hint` : undefined);
</script>

<div class="field">
  <label for={id}>{label}</label>
  <input
    {id}
    {type}
    bind:value
    {placeholder}
    aria-invalid={error ? 'true' : undefined}
    aria-describedby={describedBy}
  />
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
    font-family: var(--ds-font-sans);
    font-size: var(--ds-text-2xs);
    font-weight: var(--ds-weight-bold);
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--ds-fg-dim);
  }

  input {
    width: 100%;
    min-height: var(--ds-tap-min);
    padding: 0 var(--ds-space-4);
    border: 1px solid var(--ds-line-strong);
    border-radius: var(--ds-radius-control);
    background: #050505;
    color: var(--ds-fg);
    font-family: var(--ds-font-sans);
    font-size: var(--ds-text-sm);
  }

  input::placeholder {
    color: var(--ds-fg-dim);
    opacity: 1;
  }

  input:focus-visible {
    outline: var(--ds-border-focus) solid var(--ds-brand);
    outline-offset: 2px;
    border-color: var(--ds-brand);
  }

  input[aria-invalid='true'] {
    border-color: var(--ds-danger);
  }

  input[aria-invalid='true']:focus-visible {
    outline-color: var(--ds-danger);
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
