<script lang="ts">
  import Icon from '#lib/designspace/icons/Icon.svelte';

  let {
    code,
    language = 'ts',
    filename = ''
  }: {
    code: string;
    language?: string;
    filename?: string;
  } = $props();

  let copied = $state(false);

  const lines = $derived(code.replace(/\n$/, '').split('\n'));

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      copied = true;
      setTimeout(() => (copied = false), 1600);
    } catch {
      copied = false;
    }
  }
</script>

<figure class="code">
  <figcaption>
    <span class="file">{filename || language}</span>
    <span class="lang">{language}</span>
    <button type="button" onclick={copy} aria-label="Code kopieren">
      <Icon name={copied ? 'Haken' : 'Kopieren'} size={16} />
      <span>{copied ? 'Kopiert' : 'Kopieren'}</span>
    </button>
  </figcaption>
  <pre><code>{#each lines as line, index}<span class="line"><span class="no" aria-hidden="true">{index + 1}</span><span class="src">{line}</span></span>{/each}</code></pre>
</figure>

<style>
  .code {
    margin: 0;
    overflow: hidden;
    border: 1px solid var(--ds-line);
    border-radius: var(--ds-radius-md);
    background: var(--ds-surface);
  }

  figcaption {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--ds-space-2);
    padding: var(--ds-space-2) var(--ds-space-2) var(--ds-space-2) var(--ds-space-4);
    border-bottom: 1px solid var(--ds-line);
  }

  .file {
    flex: 1;
    font-family: var(--ds-font-mono);
    font-size: var(--ds-text-2xs);
    color: var(--ds-fg);
  }

  .lang {
    padding: 2px 8px;
    border-radius: var(--ds-radius-pill);
    background: var(--ds-category-soft);
    color: var(--ds-category);
    font-size: var(--ds-text-2xs);
    font-weight: var(--ds-weight-bold);
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  figcaption button {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    min-height: var(--ds-tap-min);
    padding: 0 var(--ds-space-3);
    border: 0;
    border-radius: var(--ds-radius-control);
    background: transparent;
    color: var(--ds-fg);
    font-family: var(--ds-font-sans);
    font-size: var(--ds-text-2xs);
    font-weight: var(--ds-weight-bold);
    cursor: pointer;
  }

  figcaption button:hover {
    background: var(--ds-surface-3);
  }

  figcaption button:focus-visible {
    outline: var(--ds-border-focus) solid var(--ds-focus);
    outline-offset: 2px;
  }

  pre {
    margin: 0;
    max-height: 320px;
    overflow: auto;
    padding: var(--ds-space-3) 0;
  }

  code {
    display: grid;
    font-family: var(--ds-font-mono);
    font-size: var(--ds-text-xs);
    line-height: 1.7;
  }

  .line {
    display: grid;
    grid-template-columns: 3.5rem 1fr;
    gap: var(--ds-space-2);
  }

  .line:hover {
    background: var(--ds-surface-2);
  }

  .no {
    padding-right: var(--ds-space-2);
    border-right: 1px solid var(--ds-line-faint);
    text-align: right;
    color: var(--ds-fg-dim);
    user-select: none;
  }

  .src {
    padding-right: var(--ds-space-4);
    color: var(--ds-fg);
    white-space: pre;
  }
</style>
