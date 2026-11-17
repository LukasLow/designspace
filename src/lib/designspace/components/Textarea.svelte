<script lang="ts">
  let {
    id,
    label,
    value = $bindable(''),
    placeholder = '',
    hint = '',
    error = '',
    rows = 4,
    maxlength
  }: {
    id: string;
    label: string;
    value?: string;
    placeholder?: string;
    hint?: string;
    error?: string;
    rows?: number;
    maxlength?: number;
  } = $props();

  const describedBy = $derived(error ? `${id}-error` : hint ? `${id}-hint` : undefined);
</script>

<div class="field">
  <label for={id}>{label}</label>
  <textarea
    {id}
    bind:value
    {placeholder}
    {rows}
    {maxlength}
    aria-invalid={error ? 'true' : undefined}
    aria-describedby={describedBy}
  ></textarea>
  <div class="meta">
    {#if error}
      <p class="msg error" id={`${id}-error`}>{error}</p>
    {:else if hint}
      <p class="msg hint" id={`${id}-hint`}>{hint}</p>
    {:else}
      <span></span>
    {/if}
    {#if maxlength}
      <span class="count">{value.length} / {maxlength}</span>
    {/if}
  </div>
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

  textarea {
    width: 100%;
    min-height: calc(var(--ds-tap-min) * 2);
    padding: var(--ds-space-3) var(--ds-space-4);
    border: 1px solid var(--ds-line-strong);
    border-radius: var(--ds-radius-control);
    background: var(--ds-surface-2);
    color: var(--ds-fg);
    font-family: var(--ds-font-sans);
    font-size: var(--ds-text-sm);
    line-height: var(--ds-leading-normal);
    resize: vertical;
  }

  textarea::placeholder {
    color: var(--ds-fg-dim);
    opacity: 1;
  }

  textarea:focus-visible {
    outline: var(--ds-border-focus) solid var(--ds-brand);
    outline-offset: 2px;
    border-color: var(--ds-brand);
  }

  textarea[aria-invalid='true'] {
    border-color: var(--ds-danger);
  }

  .meta {
    display: flex;
    justify-content: space-between;
    gap: var(--ds-space-3);
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

  .count {
    font-family: var(--ds-font-mono);
    font-size: var(--ds-text-2xs);
    color: var(--ds-fg-dim);
  }
</style>
