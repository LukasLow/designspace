<script lang="ts">
  import type { Snippet } from 'svelte';
  import Icon from '#lib/designspace/icons/Icon.svelte';
  import type { IconName } from '#lib/designspace/icons';

  let {
    tone = 'info',
    title,
    variant = 'inline',
    action,
    children
  }: {
    tone?: 'info' | 'success' | 'warning' | 'danger';
    title: string;
    variant?: 'inline' | 'callout';
    action?: Snippet;
    children?: Snippet;
  } = $props();

  const icon: Record<string, IconName> = {
    info: 'Info',
    success: 'Erfolg',
    warning: 'Warnung',
    danger: 'Fehler'
  };
</script>

<div class="alert {tone} {variant}" role={tone === 'danger' ? 'alert' : 'status'}>
  <span class="icon" aria-hidden="true"><Icon name={icon[tone]} size={20} /></span>
  <div class="body">
    <p class="title">{title}</p>
    {#if children}<div class="text">{@render children()}</div>{/if}
    {#if action}<div class="action">{@render action()}</div>{/if}
  </div>
</div>

<style>
  .alert {
    display: flex;
    gap: var(--ds-space-3);
    padding: var(--ds-space-3) var(--ds-space-4);
    border: 1px solid var(--ds-line-strong);
    border-left-width: 4px;
    border-radius: var(--ds-radius-md);
    background: var(--ds-surface);
  }

  .callout {
    padding: var(--ds-space-5);
    border-left-width: 1px;
    border-radius: var(--ds-radius-lg);
  }

  .icon {
    display: inline-flex;
    padding-top: 2px;
    color: var(--ds-info);
  }

  .title {
    font-size: var(--ds-text-sm);
    font-weight: var(--ds-weight-bold);
  }

  .text {
    margin-top: 4px;
    font-size: var(--ds-text-sm);
    color: var(--ds-fg-dim);
  }

  .action {
    margin-top: var(--ds-space-3);
  }

  .info {
    border-color: var(--ds-info);
    background: var(--ds-info-soft);
  }

  .success {
    border-color: var(--ds-success);
    background: var(--ds-success-soft);
  }

  .success .icon {
    color: var(--ds-success);
  }

  .warning {
    border-color: var(--ds-warning);
    background: var(--ds-warning-soft);
  }

  .warning .icon {
    color: var(--ds-warning);
  }

  .danger {
    border-color: var(--ds-danger);
    background: var(--ds-danger-soft);
  }

  .danger .icon {
    color: var(--ds-danger);
  }

  .callout .title {
    font-size: var(--ds-text-lg);
  }
</style>
