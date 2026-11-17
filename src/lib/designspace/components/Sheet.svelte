<script lang="ts">
  import type { Snippet } from 'svelte';
  import Icon from '#lib/designspace/icons/Icon.svelte';

  let {
    open = $bindable(false),
    title,
    side = 'right',
    footer,
    children
  }: {
    open?: boolean;
    title: string;
    side?: 'right' | 'bottom';
    footer?: Snippet;
    children: Snippet;
  } = $props();

  let dialog: HTMLDialogElement;

  $effect(() => {
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    else if (!open && dialog.open) dialog.close();
  });

  function onCancel(event: Event) {
    event.preventDefault();
    open = false;
  }
</script>

<dialog
  bind:this={dialog}
  class="sheet {side}"
  aria-labelledby="sheet-title"
  oncancel={onCancel}
  onclose={() => (open = false)}
>
  <div class="inner">
    <header>
      <h2 id="sheet-title">{title}</h2>
      <button type="button" aria-label="Schließen" onclick={() => (open = false)}>
        <Icon name="Schließen" size={20} />
      </button>
    </header>
    <div class="body">{@render children()}</div>
    {#if footer}<footer>{@render footer()}</footer>{/if}
  </div>
</dialog>

<style>
  .sheet {
    padding: 0;
    border: 0;
    background: var(--ds-surface);
    color: var(--ds-fg);
  }

  .sheet::backdrop {
    background: var(--ds-scrim);
  }

  .right {
    margin: 0 0 0 auto;
    width: min(420px, 100%);
    max-width: 100%;
    height: 100dvh;
    max-height: 100dvh;
    border-left: 1px solid var(--ds-line-strong);
  }

  .bottom {
    margin: auto 0 0;
    width: 100%;
    max-width: 100%;
    max-height: 80dvh;
    border-top: 1px solid var(--ds-line-strong);
    border-radius: var(--ds-radius-lg) var(--ds-radius-lg) 0 0;
  }

  .inner {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--ds-space-3);
    padding: var(--ds-space-4);
    border-bottom: 1px solid var(--ds-line);
  }

  h2 {
    font-size: var(--ds-text-lg);
    font-weight: var(--ds-weight-bold);
  }

  header button {
    display: grid;
    place-items: center;
    width: var(--ds-tap-min);
    height: var(--ds-tap-min);
    border: 0;
    border-radius: var(--ds-radius-control);
    background: transparent;
    color: var(--ds-fg-dim);
    cursor: pointer;
  }

  header button:hover {
    background: var(--ds-surface-3);
    color: var(--ds-fg);
  }

  header button:focus-visible {
    outline: var(--ds-border-focus) solid var(--ds-focus);
    outline-offset: -3px;
  }

  .body {
    flex: 1;
    overflow: auto;
    padding: var(--ds-space-4);
    font-size: var(--ds-text-sm);
  }

  footer {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: var(--ds-space-2);
    padding: var(--ds-space-4);
    border-top: 1px solid var(--ds-line);
  }

  @media (prefers-reduced-motion: no-preference) {
    .sheet[open] {
      animation: enter var(--ds-dur-2) var(--ds-ease-out);
    }

    @keyframes enter {
      from {
        transform: translateX(24px);
        opacity: 0;
      }
    }

    .bottom[open] {
      animation-name: enter-bottom;
    }

    @keyframes enter-bottom {
      from {
        transform: translateY(24px);
        opacity: 0;
      }
    }
  }
</style>
