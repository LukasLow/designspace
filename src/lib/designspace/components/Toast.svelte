<script lang="ts">
  import type { Snippet } from 'svelte';

  type Tone = 'info' | 'success' | 'warning' | 'danger';

  let {
    open = $bindable(true),
    tone = 'info',
    title,
    message = '',
    duration = 5000,
    inline = false,
    dismissible = true,
    action,
    onclose
  }: {
    open?: boolean;
    tone?: Tone;
    title: string;
    message?: string;
    /** 0 = bleibt stehen. Standard verschwindet nach fünf Sekunden. */
    duration?: number;
    inline?: boolean;
    dismissible?: boolean;
    action?: Snippet;
    onclose?: () => void;
  } = $props();

  const alert = $derived(tone === 'warning' || tone === 'danger');

  $effect(() => {
    if (!open || duration <= 0) return;
    const timer = setTimeout(() => {
      open = false;
      onclose?.();
    }, duration);
    return () => clearTimeout(timer);
  });

  function close() {
    open = false;
    onclose?.();
  }
</script>

{#if open}
  <div
    class="toast {tone}"
    class:inline
    role={alert ? 'alert' : 'status'}
    aria-live={alert ? 'assertive' : 'polite'}
    aria-atomic="true"
  >
    <span class="mark" aria-hidden="true"></span>

    <div class="content">
      <p class="title">{title}</p>
      {#if message}<p class="message">{message}</p>{/if}
      {#if action}<div class="action">{@render action()}</div>{/if}
    </div>

    {#if dismissible}
      <button class="close" type="button" aria-label="Hinweis schließen" onclick={close}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
    {/if}
  </div>
{/if}

<style>
  /* Info ist ein Toast (Runde 14): unten rechts, verschwindet.
     Die Rolle entscheidet über Farbe und aria-live; die Fläche bleibt ruhig. */
  .toast {
    --toast-color: var(--ds-info);

    position: fixed;
    right: var(--ds-space-4);
    bottom: var(--ds-space-4);
    z-index: 60;
    display: flex;
    align-items: flex-start;
    gap: var(--ds-space-3);
    width: min(100% - 2 * var(--ds-space-4), 380px);
    padding: var(--ds-space-4);
    border: 1px solid var(--toast-color);
    border-radius: var(--ds-radius-lg);
    background: var(--ds-surface-2);
    color: var(--ds-fg);
    animation: toast-in var(--ds-dur-2) var(--ds-ease-out);
  }

  .inline {
    position: static;
    width: 100%;
    max-width: 380px;
    margin: 0;
  }

  .success {
    --toast-color: var(--ds-success);
  }

  .warning {
    --toast-color: var(--ds-warning);
  }

  .danger {
    --toast-color: var(--ds-danger);
  }

  .mark {
    width: 10px;
    height: 10px;
    margin-top: 6px;
    flex: none;
    border-radius: var(--ds-radius-xs);
    background: var(--toast-color);
  }

  .content {
    display: grid;
    gap: 2px;
    min-width: 0;
    flex: 1;
  }

  .title {
    font-size: var(--ds-text-sm);
    font-weight: var(--ds-weight-bold);
    line-height: var(--ds-leading-snug);
  }

  .message {
    font-size: var(--ds-text-sm);
    color: var(--ds-fg-dim);
    overflow-wrap: anywhere;
  }

  .action {
    padding-top: var(--ds-space-2);
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

  @keyframes toast-in {
    from {
      opacity: 0;
      transform: translateY(12px);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .toast {
      animation: none;
    }
  }
</style>
