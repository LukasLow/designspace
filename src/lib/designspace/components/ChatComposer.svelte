<script lang="ts">
  import Icon from '#lib/designspace/icons/Icon.svelte';

  let {
    value = $bindable(''),
    placeholder = 'Nachricht schreiben',
    sendLabel = 'Senden',
    disabled = false,
    onsend
  }: {
    value?: string;
    placeholder?: string;
    sendLabel?: string;
    disabled?: boolean;
    onsend?: (value: string) => void;
  } = $props();

  let input: HTMLTextAreaElement;

  const canSend = $derived(value.trim().length > 0 && !disabled);

  function send() {
    if (!canSend) return;
    onsend?.(value.trim());
    value = '';
    input?.focus();
  }

  function onKey(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      send();
    }
  }

  function grow() {
    if (!input) return;
    input.style.height = 'auto';
    input.style.height = `${Math.min(input.scrollHeight, 160)}px`;
  }
</script>

<div class="composer">
  <textarea
    bind:this={input}
    bind:value
    {placeholder}
    rows={1}
    name="message"
    aria-label={placeholder}
    {disabled}
    onkeydown={onKey}
    oninput={grow}
  ></textarea>
  <button type="button" class="send" aria-label={sendLabel} disabled={!canSend} onclick={send}>
    <Icon name="Senden" size={20} />
  </button>
</div>

<style>
  .composer {
    display: flex;
    align-items: flex-end;
    gap: var(--ds-space-2);
    padding: var(--ds-space-2);
    border: 1px solid var(--ds-line-strong);
    border-radius: var(--ds-radius-lg);
    background: var(--ds-surface);
  }

  .composer:focus-within {
    border-color: var(--ds-brand);
    outline: var(--ds-border-focus) solid var(--ds-brand);
    outline-offset: 2px;
  }

  textarea {
    flex: 1;
    min-height: var(--ds-tap-min);
    max-height: 160px;
    padding: var(--ds-space-3);
    border: 0;
    background: transparent;
    color: var(--ds-fg);
    font-family: var(--ds-font-sans);
    font-size: var(--ds-text-sm);
    line-height: var(--ds-leading-normal);
    resize: none;
  }

  textarea:focus-visible {
    outline: none;
  }

  textarea::placeholder {
    color: var(--ds-fg-dim);
    opacity: 1;
  }

  .send {
    display: grid;
    place-items: center;
    width: var(--ds-tap-min);
    height: var(--ds-tap-min);
    flex: none;
    border: 0;
    border-radius: var(--ds-radius-control);
    background: var(--ds-brand-matte);
    color: var(--ds-bg);
    cursor: pointer;
  }

  .send:disabled {
    background: var(--ds-surface-3);
    color: var(--ds-fg-dim);
    cursor: not-allowed;
  }

  .send:focus-visible {
    outline: var(--ds-border-focus) solid var(--ds-focus);
    outline-offset: 3px;
  }
</style>
