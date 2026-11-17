<script lang="ts">
  import Icon from '#lib/designspace/icons/Icon.svelte';

  let {
    title = 'Dokument',
    pages = 8,
    page = $bindable(1)
  }: {
    title?: string;
    pages?: number;
    page?: number;
  } = $props();

  const clamped = $derived(Math.min(pages, Math.max(1, page)));

  function go(next: number) {
    page = Math.min(pages, Math.max(1, next));
  }
</script>

<div class="viewer">
  <header>
    <span class="name"><Icon name="Dokument" size={20} />{title}</span>
    <span class="count">Seite {clamped} von {pages}</span>
  </header>
  <div class="paper" role="img" aria-label={`Seite ${clamped} von ${pages}`}>
    <span class="page-no">{clamped}</span>
    <div class="lines" aria-hidden="true">
      {#each [92, 84, 96, 70, 88, 60] as width}
        <span style="width: {width}%"></span>
      {/each}
    </div>
  </div>
  <footer>
    <button type="button" aria-label="Vorherige Seite" disabled={clamped <= 1} onclick={() => go(clamped - 1)}>
      <Icon name="Zurück" size={20} />
    </button>
    <button type="button" aria-label="Nächste Seite" disabled={clamped >= pages} onclick={() => go(clamped + 1)}>
      <Icon name="Weiter" size={20} />
    </button>
    <span class="hint">Blättern mit den Pfeilen, Zoom fehlt bewusst.</span>
  </footer>
</div>

<style>
  .viewer {
    display: grid;
    gap: var(--ds-space-3);
  }

  header {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: var(--ds-space-3);
  }

  .name {
    display: inline-flex;
    align-items: center;
    gap: var(--ds-space-2);
    font-size: var(--ds-text-sm);
    font-weight: var(--ds-weight-bold);
  }

  .count {
    font-family: var(--ds-font-mono);
    font-size: var(--ds-text-2xs);
    color: var(--ds-fg-dim);
  }

  .paper {
    position: relative;
    display: grid;
    place-items: center;
    aspect-ratio: 3 / 4;
    max-height: 380px;
    border: 1px solid var(--ds-line-strong);
    border-radius: var(--ds-radius-sm);
    background: var(--ds-surface-2);
  }

  .page-no {
    position: absolute;
    top: var(--ds-space-3);
    right: var(--ds-space-4);
    font-family: var(--ds-font-mono);
    font-size: var(--ds-text-2xs);
    color: var(--ds-fg-dim);
  }

  .lines {
    display: grid;
    gap: var(--ds-space-2);
    width: 70%;
  }

  .lines span {
    height: 6px;
    border-radius: var(--ds-radius-pill);
    background: var(--ds-surface-3);
  }

  footer {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--ds-space-2);
  }

  footer button {
    display: grid;
    place-items: center;
    width: var(--ds-tap-min);
    height: var(--ds-tap-min);
    border: 1px solid var(--ds-line-strong);
    border-radius: var(--ds-radius-control);
    background: transparent;
    color: var(--ds-fg);
    cursor: pointer;
  }

  footer button:hover:not(:disabled) {
    border-color: var(--ds-brand);
    color: var(--ds-brand);
  }

  footer button:focus-visible {
    outline: var(--ds-border-focus) solid var(--ds-focus);
    outline-offset: 3px;
  }

  footer button:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .hint {
    font-size: var(--ds-text-2xs);
    color: var(--ds-fg-dim);
  }
</style>
