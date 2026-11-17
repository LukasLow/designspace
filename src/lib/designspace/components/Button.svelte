<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    variant = 'primary',
    physics = 'feder',
    href,
    disabled = false,
    children
  }: {
    variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
    physics?: 'feder' | 'taste';
    href?: string;
    disabled?: boolean;
    children: Snippet;
  } = $props();
</script>

{#if href}
  <a
    class="btn {variant} {physics}"
    {href}
    aria-disabled={disabled ? 'true' : undefined}
    tabindex={disabled ? -1 : undefined}
  >
    {@render children()}
  </a>
{:else}
  <button class="btn {variant} {physics}" type="button" {disabled}>
    {@render children()}
  </button>
{/if}

<style>
  /* Form: Turnier-Sieger Runde 9 (Radius 18).
     Material: Runde 10 (matt, Korn, kein Glanzlicht, schwarze Schrift).
     Farbe: Runde 6 (Fläche). Druck: Runde 4 (senkrecht). */

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: var(--ds-tap-min);
    padding: 0 var(--ds-space-5);
    border: 2px solid transparent;
    border-radius: var(--ds-radius-control);
    background-color: transparent;
    color: var(--ds-fg);
    font-family: var(--ds-font-sans);
    font-size: var(--ds-text-sm);
    font-weight: var(--ds-weight-bold);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
  }

  .btn:focus-visible {
    outline: var(--ds-border-focus) solid var(--ds-focus);
    outline-offset: 3px;
  }

  .btn[disabled],
  .btn[aria-disabled='true'] {
    cursor: not-allowed;
    opacity: 0.45;
  }

  /* ------------------------------------------------------------ Fläche */

  .primary {
    background-color: var(--ds-brand-matte);
    color: #000000;
  }

  .danger {
    background-color: var(--ds-danger);
    color: var(--ds-danger-ink);
  }

  .secondary {
    background-color: rgba(0, 168, 232, 0.05);
    border-color: rgba(0, 168, 232, 0.3);
    color: var(--ds-fg);
  }

  .secondary:hover {
    background-color: rgba(0, 168, 232, 0.12);
    border-color: rgba(0, 168, 232, 0.5);
  }

  .ghost {
    padding-inline: var(--ds-space-3);
    color: var(--ds-fg);
  }

  .ghost:hover {
    border-color: var(--ds-line-strong);
  }

  /* ------------------------------------------------ Physik: senkrecht */

  .btn {
    transition:
      transform var(--ds-dur-1) var(--ds-ease-out),
      border-color var(--ds-dur-1) var(--ds-ease-out);
  }

  .feder:hover {
    transform: translateY(-1px);
  }

  .feder:active {
    transform: translateY(2px) scale(0.994);
  }

  .taste {
    box-shadow: inset 0 -5px 0 rgba(0, 0, 0, 0.22);
  }

  .taste:active {
    transform: translateY(3px);
    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.22);
  }

  @media (prefers-reduced-motion: reduce) {
    .btn {
      transition: none;
    }

    .btn:active {
      transform: none;
    }
  }
</style>
