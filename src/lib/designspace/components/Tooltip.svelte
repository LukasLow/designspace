<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    id,
    label,
    placement = 'top',
    open,
    children
  }: {
    id: string;
    label: string;
    placement?: 'top' | 'bottom' | 'left' | 'right';
    /** undefined = bei Hover und Fokus; true/false = fest gesteuert. */
    open?: boolean;
    children: Snippet;
  } = $props();
</script>

<span class="wrap" class:open={open === true} aria-describedby={id}>
  <span class="tip {placement}" role="tooltip" id={id}>{label}</span>
  {@render children()}
</span>

<style>
  /* Tooltip: kurzer Hinweis bei Hover und Fokus. Keine Interaktion,
     kein Fokusziel — der Trigger bleibt das einzige Ziel. */
  .wrap {
    position: relative;
    display: inline-flex;
    align-items: center;
  }

  .tip {
    position: absolute;
    z-index: 40;
    width: max-content;
    max-width: 28ch;
    padding: var(--ds-space-2) var(--ds-space-3);
    border: 1px solid var(--ds-line-strong);
    border-radius: var(--ds-radius-sm);
    background: var(--ds-surface-3);
    color: var(--ds-fg);
    font-size: var(--ds-text-sm);
    font-weight: var(--ds-weight-regular);
    line-height: var(--ds-leading-snug);
    text-align: center;
    pointer-events: none;
    opacity: 0;
    visibility: hidden;
    transition:
      opacity var(--ds-dur-1) var(--ds-ease-out),
      visibility var(--ds-dur-1) var(--ds-ease-out);
  }

  .top {
    bottom: calc(100% + var(--ds-space-2));
    left: 50%;
    transform: translateX(-50%);
  }

  .bottom {
    top: calc(100% + var(--ds-space-2));
    left: 50%;
    transform: translateX(-50%);
  }

  .left {
    right: calc(100% + var(--ds-space-2));
    top: 50%;
    transform: translateY(-50%);
  }

  .right {
    left: calc(100% + var(--ds-space-2));
    top: 50%;
    transform: translateY(-50%);
  }

  .wrap:hover .tip,
  .wrap:focus-within .tip,
  .wrap.open .tip {
    opacity: 1;
    visibility: visible;
  }

  @media (prefers-reduced-motion: reduce) {
    .tip {
      transition: none;
    }
  }
</style>
