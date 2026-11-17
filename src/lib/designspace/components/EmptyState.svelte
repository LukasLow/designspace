<script lang="ts">
  import type { Snippet } from 'svelte';
  import Icon from '#lib/designspace/icons/Icon.svelte';
  import type { IconName } from '#lib/designspace/icons';

  let {
    title,
    description = '',
    icon = 'Leer',
    action
  }: {
    title: string;
    description?: string;
    icon?: IconName;
    action?: Snippet;
  } = $props();
</script>

<div class="empty">
  <span class="mark" aria-hidden="true"><Icon name={icon} size={24} /></span>
  <p class="title">{title}</p>
  {#if description}<p class="text">{description}</p>{/if}
  {#if action}<div class="action">{@render action()}</div>{/if}
</div>

<style>
  .empty {
    display: grid;
    justify-items: center;
    gap: var(--ds-space-3);
    padding: var(--ds-space-8) var(--ds-space-4);
    border: 1px dashed var(--ds-line-strong);
    border-radius: var(--ds-radius-lg);
    text-align: center;
  }

  .mark {
    display: grid;
    place-items: center;
    width: var(--ds-tap-min);
    height: var(--ds-tap-min);
    border-radius: var(--ds-radius-pill);
    background: var(--ds-surface-3);
    color: var(--ds-fg-dim);
  }

  .title {
    font-size: var(--ds-text-lg);
    font-weight: var(--ds-weight-bold);
  }

  .text {
    max-width: 46ch;
    font-size: var(--ds-text-sm);
    color: var(--ds-fg-dim);
  }

  .action {
    margin-top: var(--ds-space-2);
  }
</style>
