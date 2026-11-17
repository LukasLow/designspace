<script lang="ts">
  import Avatar from './Avatar.svelte';

  let {
    name,
    message,
    time = '',
    own = false,
    status = ''
  }: {
    name: string;
    message: string;
    time?: string;
    own?: boolean;
    status?: string;
  } = $props();
</script>

<div class="row" class:own>
  <Avatar {name} size="sm" />
  <div class="bubble">
    <div class="head">
      <span class="name">{name}</span>
      {#if time}<span class="time">{time}</span>{/if}
    </div>
    <p class="text">{message}</p>
    {#if status}<p class="status">{status}</p>{/if}
  </div>
</div>

<style>
  .row {
    display: flex;
    gap: var(--ds-space-3);
    align-items: flex-start;
  }

  .own {
    flex-direction: row-reverse;
  }

  .bubble {
    display: grid;
    gap: 2px;
    max-width: min(60ch, 80%);
    padding: var(--ds-space-3) var(--ds-space-4);
    border: 1px solid var(--ds-line);
    border-radius: var(--ds-radius-lg);
    background: var(--ds-surface);
  }

  .own .bubble {
    border-color: var(--ds-brand);
    background: var(--ds-brand-soft);
  }

  .head {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: var(--ds-space-2);
  }

  .own .head {
    justify-content: flex-end;
  }

  .name {
    font-size: var(--ds-text-sm);
    font-weight: var(--ds-weight-bold);
  }

  .time {
    font-family: var(--ds-font-mono);
    font-size: var(--ds-text-2xs);
    color: var(--ds-fg-dim);
  }

  .text {
    font-size: var(--ds-text-sm);
    color: var(--ds-fg);
    overflow-wrap: anywhere;
  }

  .own .text {
    text-align: right;
  }

  .status {
    font-size: var(--ds-text-2xs);
    font-weight: var(--ds-weight-bold);
    text-align: right;
    color: var(--ds-fg-dim);
  }
</style>
