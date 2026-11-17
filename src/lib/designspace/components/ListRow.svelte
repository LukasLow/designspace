<script lang="ts">
  import type { Snippet } from 'svelte';
  import Icon from '#lib/designspace/icons/Icon.svelte';
  import type { IconName } from '#lib/designspace/icons';

  let {
    title,
    description = '',
    meta = '',
    href,
    icon,
    active = false,
    action
  }: {
    title: string;
    description?: string;
    meta?: string;
    href?: string;
    icon?: IconName;
    active?: boolean;
    action?: Snippet;
  } = $props();
</script>

<svelte:element this={href ? 'a' : 'div'} {href} class="row" class:active>
  {#if icon}
    <span class="icon" aria-hidden="true"><Icon name={icon} size={20} /></span>
  {/if}
  <span class="body">
    <span class="title">{title}</span>
    {#if description}<span class="desc">{description}</span>{/if}
  </span>
  {#if meta}<span class="meta">{meta}</span>{/if}
  {#if action}<span class="action">{@render action()}</span>{/if}
  {#if href}<span class="chev" aria-hidden="true"><Icon name="Weiter" size={20} /></span>{/if}
</svelte:element>

<style>
  .row {
    display: flex;
    align-items: center;
    gap: var(--ds-space-3);
    min-height: var(--ds-row-large);
    padding: var(--ds-space-3) var(--ds-space-4);
    border: 1px solid transparent;
    border-bottom-color: var(--ds-line);
    background: transparent;
    color: var(--ds-fg);
    text-decoration: none;
  }

  a.row {
    cursor: pointer;
  }

  a.row:hover,
  .row.active {
    background: var(--ds-surface);
    border-color: var(--ds-line);
    border-radius: var(--ds-radius-md);
  }

  a.row:focus-visible,
  div.row:focus-visible {
    outline: var(--ds-border-focus) solid var(--ds-focus);
    outline-offset: -3px;
    border-radius: var(--ds-radius-md);
  }

  .icon {
    display: grid;
    place-items: center;
    width: 36px;
    height: 36px;
    flex: none;
    border-radius: var(--ds-radius-sm);
    background: var(--ds-surface-3);
    color: var(--ds-fg-dim);
  }

  .body {
    display: grid;
    flex: 1;
    gap: 2px;
    min-width: 0;
  }

  .title {
    font-size: var(--ds-text-sm);
    font-weight: var(--ds-weight-bold);
  }

  .desc {
    font-size: var(--ds-text-xs);
    color: var(--ds-fg-dim);
    overflow-wrap: anywhere;
  }

  .meta {
    flex: none;
    font-family: var(--ds-font-mono);
    font-size: var(--ds-text-2xs);
    color: var(--ds-fg-dim);
  }

  .action {
    display: inline-flex;
    flex: none;
  }

  .chev {
    display: inline-flex;
    flex: none;
    color: var(--ds-fg-dim);
  }
</style>
