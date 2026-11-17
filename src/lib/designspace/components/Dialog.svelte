<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    open = $bindable(false),
    id = 'ds-dialog',
    title,
    description = '',
    children,
    footer,
    onclose
  }: {
    open?: boolean;
    id?: string;
    title: string;
    description?: string;
    children: Snippet;
    footer?: Snippet;
    onclose?: () => void;
  } = $props();

  let dialogEl = $state<HTMLDialogElement | null>(null);

  $effect(() => {
    const el = dialogEl;
    if (!el) return;

    if (open && !el.open) {
      el.showModal();
    } else if (!open && el.open) {
      el.close();
    }
  });

  function close() {
    if (dialogEl?.open) {
      dialogEl.close();
    } else {
      open = false;
    }
  }

  function handleClose() {
    // Nur ein vom Nutzer ausgelöstes Schließen (Escape, Scrim) meldet sich.
    if (open) {
      open = false;
      onclose?.();
    }
  }

  function handleBackdrop(event: MouseEvent) {
    if (event.target === dialogEl) close();
  }
</script>

<dialog
  bind:this={dialogEl}
  class="dialog"
  aria-labelledby={`${id}-title`}
  aria-describedby={description ? `${id}-desc` : undefined}
  onclose={handleClose}
  onclick={handleBackdrop}
>
  <div class="inner">
    <header>
      <h2 id={`${id}-title`}>{title}</h2>
      <button class="close" type="button" aria-label="Dialog schließen" onclick={close}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
    </header>

    {#if description}<p class="desc" id={`${id}-desc`}>{description}</p>{/if}

    <div class="body">
      {@render children()}
    </div>

    {#if footer}
      <div class="actions">{@render footer()}</div>
    {/if}
  </div>
</dialog>

<style>
  /* Dialog: Karte in der Mitte, Scrim, Escape schließt (nativ).
     Der Fokus bleibt im Dialog, weil <dialog> showModal() ihn einschließt. */
  .dialog {
    width: min(100% - 2 * var(--ds-space-4), 520px);
    max-width: 520px;
    max-height: calc(100dvh - 2 * var(--ds-space-5));
    margin: auto;
    padding: 0;
    border: 1px solid var(--ds-line-strong);
    border-radius: var(--ds-radius-lg);
    background: var(--ds-surface-2);
    color: var(--ds-fg);
  }

  .dialog[open] {
    animation: dialog-in var(--ds-dur-2) var(--ds-ease-out);
  }

  .dialog::backdrop {
    background: var(--ds-scrim);
  }

  .inner {
    display: grid;
    gap: var(--ds-space-4);
    padding: var(--ds-space-5);
  }

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--ds-space-3);
  }

  h2 {
    font-size: var(--ds-text-xl);
    line-height: var(--ds-leading-snug);
  }

  .close {
    display: inline-grid;
    place-items: center;
    width: var(--ds-tap-min);
    height: var(--ds-tap-min);
    margin: calc(-1 * var(--ds-space-2)) calc(-1 * var(--ds-space-2)) 0 0;
    flex: none;
    border-radius: var(--ds-radius-control);
    color: var(--ds-fg);
  }

  .close:hover {
    background: var(--ds-surface-3);
  }

  .close:focus-visible {
    outline: var(--ds-border-focus) solid var(--ds-focus);
    outline-offset: 0;
  }

  .close svg {
    width: 20px;
    height: 20px;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.8;
    stroke-linecap: round;
  }

  .desc {
    font-size: var(--ds-text-sm);
    color: var(--ds-fg-dim);
  }

  .body {
    max-height: 50dvh;
    overflow: auto;
    font-size: var(--ds-text-sm);
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: var(--ds-space-3);
    padding-top: var(--ds-space-4);
    border-top: 1px solid var(--ds-line);
  }

  @keyframes dialog-in {
    from {
      opacity: 0;
      transform: translateY(8px) scale(0.98);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .dialog[open] {
      animation: none;
    }
  }
</style>
