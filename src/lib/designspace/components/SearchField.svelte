<script lang="ts">
  import Icon from '#lib/designspace/icons/Icon.svelte';

  let {
    id,
    label = 'Suche',
    value = $bindable(''),
    placeholder = 'Suchen',
    hint = '',
    suggestions = [],
    onselect
  }: {
    id: string;
    label?: string;
    value?: string;
    placeholder?: string;
    hint?: string;
    suggestions?: string[];
    onselect?: (value: string) => void;
  } = $props();

  const open = $derived(value.trim().length > 0 && suggestions.length > 0);

  function pick(suggestion: string) {
    value = suggestion;
    onselect?.(suggestion);
  }
</script>

<div class="search">
  <label for={id}>{label}</label>
  <div class="control">
    <span class="icon" aria-hidden="true"><Icon name="Suche" size={20} /></span>
    <input
      {id}
      type="search"
      bind:value
      {placeholder}
      aria-describedby={hint ? `${id}-hint` : undefined}
      autocomplete="off"
    />
    {#if value}
      <button type="button" class="clear" aria-label="Eingabe löschen" onclick={() => (value = '')}>
        <Icon name="Schließen" size={20} />
      </button>
    {/if}
  </div>
  {#if hint}<p class="hint" id={`${id}-hint`}>{hint}</p>{/if}
  {#if open}
    <ul class="suggest" role="listbox" aria-label="Vorschläge">
      {#each suggestions as suggestion}
        <li>
          <button type="button" role="option" aria-selected="false" onclick={() => pick(suggestion)}>
            <Icon name="Suche" size={16} />
            <span>{suggestion}</span>
          </button>
        </li>
      {/each}
    </ul>
  {/if}
</div>

<style>
  .search {
    display: grid;
    gap: 6px;
    position: relative;
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
    padding-left: var(--ds-space-4);
    border: 1px solid var(--ds-line-strong);
    border-radius: var(--ds-radius-control);
    background: var(--ds-surface-2);
  }

  .control:focus-within {
    border-color: var(--ds-brand);
    outline: var(--ds-border-focus) solid var(--ds-brand);
    outline-offset: 2px;
  }

  .icon {
    display: inline-flex;
    color: var(--ds-fg-dim);
  }

  input {
    flex: 1;
    min-width: 0;
    min-height: var(--ds-tap-min);
    border: 0;
    background: transparent;
    color: var(--ds-fg);
    font-family: var(--ds-font-sans);
    font-size: var(--ds-text-sm);
  }

  input:focus-visible {
    outline: none;
  }

  input::placeholder {
    color: var(--ds-fg-dim);
    opacity: 1;
  }

  input::-webkit-search-cancel-button {
    display: none;
  }

  .clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--ds-tap-min);
    height: var(--ds-tap-min);
    border: 0;
    border-radius: var(--ds-radius-control);
    background: transparent;
    color: var(--ds-fg-dim);
    cursor: pointer;
  }

  .clear:hover {
    color: var(--ds-fg);
    background: var(--ds-surface-3);
  }

  .clear:focus-visible {
    outline: var(--ds-border-focus) solid var(--ds-focus);
    outline-offset: -3px;
  }

  .hint {
    font-size: var(--ds-text-xs);
    color: var(--ds-fg-dim);
  }

  .suggest {
    position: absolute;
    top: 100%;
    inset-inline: 0;
    z-index: 5;
    display: grid;
    margin: 4px 0 0;
    padding: var(--ds-space-1);
    list-style: none;
    border: 1px solid var(--ds-line-strong);
    border-radius: var(--ds-radius-md);
    background: var(--ds-surface-2);
  }

  .suggest button {
    display: flex;
    align-items: center;
    gap: var(--ds-space-3);
    width: 100%;
    min-height: var(--ds-tap-min);
    padding: 0 var(--ds-space-3);
    border: 0;
    border-radius: var(--ds-radius-sm);
    background: transparent;
    color: var(--ds-fg);
    font-family: var(--ds-font-sans);
    font-size: var(--ds-text-sm);
    text-align: left;
    cursor: pointer;
  }

  .suggest button:hover {
    background: var(--ds-surface-3);
  }

  .suggest button:focus-visible {
    outline: var(--ds-border-focus) solid var(--ds-focus);
    outline-offset: -3px;
  }
</style>
