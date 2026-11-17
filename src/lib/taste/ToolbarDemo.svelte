<script lang="ts">
  import type { ToolbarVariant } from './toolbar-routes';

  let { variant }: { variant: ToolbarVariant } = $props();

  const primary = [
    { label: 'Archiv', d: 'M4 7h16M6 7v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7M9 3h6v4H9z' },
    { label: 'Löschen', d: 'M4 7h16M9 7V4h6v3M7 7l1 13h8l1-13' },
    { label: 'Tag', d: 'M4 4h9l7 7-9 9-7-7z' },
    { label: 'Snooze', d: 'M12 8v5l3 2' },
    { label: 'Mehr', d: 'M5 12h.01M12 12h.01M19 12h.01' }
  ];

  const share = [
    { label: 'Teilen', d: 'M12 16V4M8 8l4-4 4 4M5 14v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4' },
    { label: 'Weiterleiten', d: 'M14 5l6 7-6 7M20 12H4' }
  ];

  const searchLeft = [
    { label: 'Filter', d: 'M4 5h16l-6 8v6l-4 2v-8z' },
    { label: 'Sortieren', d: 'M4 7h10M4 12h7M4 17h4M17 5v14M14 16l3 3 3-3' },
    { label: 'Auswahl', d: 'M4 4h16v16H4zM8 12l3 3 5-6' }
  ];

  const searchRight = [{ label: 'Schließen', d: 'M6 6l12 12M18 6L6 18' }];

  let mode = $state<'postfach' | 'suche'>('postfach');

  const left = $derived(
    variant === 'kontext'
      ? mode === 'postfach'
        ? primary.slice(0, 3)
        : searchLeft
      : variant === 'zwei-gruppen'
        ? primary.slice(0, 3)
        : primary
  );

  const right = $derived(variant === 'kontext' && mode === 'suche' ? searchRight : share);
  const rightWithText = $derived(variant === 'zwei-gruppen' || variant === 'kontext');
</script>

<div class="demo" data-t={variant}>
  {#if variant === 'kontext'}
    <div class="mode" role="group" aria-label="Kontext">
      <button class:on={mode === 'postfach'} onclick={() => (mode = 'postfach')} type="button">
        Postfach
      </button>
      <button class:on={mode === 'suche'} onclick={() => (mode = 'suche')} type="button">Suche</button>
    </div>
  {/if}

  <div class="row">
    <div class="group">
      {#each left as action}
        <button type="button">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d={action.d} /></svg>
          {#if variant === 'mit-text'}<span>{action.label}</span>{/if}
        </button>
      {/each}
    </div>

    {#if variant === 'zwei-gruppen' || variant === 'kontext'}
      <div class="group">
        {#each right as action}
          <button type="button">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d={action.d} /></svg>
            {#if rightWithText}<span>{action.label}</span>{/if}
          </button>
        {/each}
      </div>
    {/if}
  </div>
</div>

<style>
  .demo {
    padding: var(--ds-space-5);
    background: #000;
    border: 1px solid var(--ds-line);
    border-radius: var(--ds-radius-lg);
  }

  .row {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  .group {
    display: flex;
  }

  .group button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    min-height: var(--ds-tap-min);
    padding: 0 14px;
    border: 0;
    background: transparent;
    color: var(--ds-fg);
    font: inherit;
    font-size: var(--ds-text-sm);
    font-weight: 700;
    cursor: pointer;
  }

  .group button:hover {
    background: var(--ds-surface-2);
  }

  .group button:focus-visible {
    outline: var(--ds-border-focus) solid var(--ds-brand);
    outline-offset: -3px;
  }

  svg {
    width: 18px;
    height: 18px;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.8;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  /* ---------------------------------------------------------- angedockt */

  .demo[data-t='angedockt'] .group,
  .demo[data-t='mit-text'] .group,
  .demo[data-t='zwei-gruppen'] .group,
  .demo[data-t='kontext'] .group {
    overflow: hidden;
    border: 1px solid var(--ds-line-strong);
    border-radius: var(--ds-radius-control);
    background: var(--ds-surface);
  }

  .demo[data-t='angedockt'] .group button,
  .demo[data-t='mit-text'] .group button,
  .demo[data-t='zwei-gruppen'] .group button,
  .demo[data-t='kontext'] .group button {
    border-right: 1px solid var(--ds-line);
  }

  .demo[data-t='angedockt'] .group button:last-child,
  .demo[data-t='mit-text'] .group button:last-child,
  .demo[data-t='zwei-gruppen'] .group button:last-child,
  .demo[data-t='kontext'] .group button:last-child {
    border-right: 0;
  }

  /* ------------------------------------------------------------ kontext */

  .mode {
    display: flex;
    gap: 2px;
    width: fit-content;
    padding: 3px;
    margin-bottom: var(--ds-space-4);
    border: 1px solid var(--ds-line);
    border-radius: var(--ds-radius-control);
    background: var(--ds-surface);
  }

  .mode button {
    min-height: 34px;
    padding: 0 12px;
    border: 0;
    border-radius: 14px;
    background: transparent;
    color: var(--ds-fg-dim);
    font: inherit;
    font-size: var(--ds-text-xs);
    font-weight: 700;
    cursor: pointer;
  }

  .mode button.on {
    background: var(--ds-brand);
    color: #000;
  }

  /* ------------------------------------------------------------ einzeln */

  .demo[data-t='einzeln'] .group {
    gap: 6px;
  }

  .demo[data-t='einzeln'] .group button {
    border: 1px solid var(--ds-line-strong);
    border-radius: 14px;
    background: var(--ds-surface);
  }

  /* ------------------------------------------------------------- kanten */

  .demo[data-t='kanten'] .group {
    gap: 1px;
    padding: 1px;
    background: var(--ds-line-strong);
    border: 1px solid var(--ds-line-strong);
    border-radius: var(--ds-radius-control);
    overflow: hidden;
  }

  .demo[data-t='kanten'] .group button {
    background: #000;
  }
</style>
