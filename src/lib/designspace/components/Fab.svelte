<script lang="ts">
  import Icon from '#lib/designspace/icons/Icon.svelte';
  import type { IconName } from '#lib/designspace/icons';

  let {
    label,
    icon = 'Plus',
    fixed = false,
    extended = false,
    onclick
  }: {
    label: string;
    icon?: IconName;
    fixed?: boolean;
    extended?: boolean;
    onclick?: () => void;
  } = $props();
</script>

<button type="button" class="fab" class:fixed class:extended aria-label={label} {onclick}>
  <Icon name={icon} size={24} />
  {#if extended}<span>{label}</span>{/if}
</button>

<style>
  .fab {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--ds-space-2);
    min-width: 56px;
    min-height: 56px;
    padding: 0 var(--ds-space-4);
    border: 0;
    border-radius: var(--ds-radius-pill);
    background: var(--ds-brand-matte);
    color: var(--ds-bg);
    font-family: var(--ds-font-sans);
    font-size: var(--ds-text-sm);
    font-weight: var(--ds-weight-bold);
    cursor: pointer;
  }

  .extended {
    padding-inline: var(--ds-space-5);
  }

  .fixed {
    position: fixed;
    right: var(--ds-space-5);
    bottom: var(--ds-space-5);
    z-index: 30;
  }

  .fab:hover {
    background: var(--ds-brand);
  }

  .fab:active {
    transform: translateY(2px);
  }

  .fab:focus-visible {
    outline: var(--ds-border-focus) solid var(--ds-focus);
    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    .fab:active {
      transform: none;
    }
  }
</style>
