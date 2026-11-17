<script lang="ts">
  import Icon from '#lib/designspace/icons/Icon.svelte';
  import type { IconName } from '#lib/designspace/icons';

  let {
    title,
    description = '',
    tone = 'info',
    icon = 'Schild'
  }: {
    title: string;
    description?: string;
    tone?: 'info' | 'success' | 'brand';
    icon?: IconName;
  } = $props();
</script>

<div class="trust {tone}">
  <span class="mark" aria-hidden="true"><Icon name={icon} size={20} /></span>
  <div class="body">
    <p class="title">{title}</p>
    {#if description}<p class="desc">{description}</p>{/if}
  </div>
</div>

<style>
  .trust {
    display: flex;
    align-items: center;
    gap: var(--ds-space-3);
    padding: var(--ds-space-3);
    border: 1px solid var(--ds-line);
    border-radius: var(--ds-radius-md);
    background: var(--ds-surface);
  }

  .mark {
    display: grid;
    place-items: center;
    width: 36px;
    height: 36px;
    flex: none;
    border-radius: var(--ds-radius-pill);
    background: var(--ds-info-soft);
    color: var(--ds-info);
  }

  .success .mark {
    background: var(--ds-success-soft);
    color: var(--ds-success);
  }

  .brand .mark {
    background: var(--ds-brand-soft);
    color: var(--ds-brand);
  }

  .title {
    font-size: var(--ds-text-sm);
    font-weight: var(--ds-weight-bold);
  }

  .desc {
    margin-top: 1px;
    font-size: var(--ds-text-xs);
    color: var(--ds-fg-dim);
  }
</style>
