<script lang="ts">
  interface StatusItem {
    label: string;
    value?: string;
    tone?: 'neutral' | 'info' | 'success' | 'warning' | 'danger';
  }

  let {
    items = [],
    label = 'Status'
  }: {
    items?: StatusItem[];
    label?: string;
  } = $props();
</script>

<div class="bar" role="status" aria-label={label}>
  {#each items as item}
    <span class="item {item.tone ?? 'neutral'}">
      {#if item.value}<span class="label">{item.label}</span>{/if}
      <span class="value">{item.value ?? item.label}</span>
    </span>
  {/each}
</div>

<style>
  .bar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--ds-space-3);
    min-height: var(--ds-tap-min);
    padding: var(--ds-space-2) var(--ds-space-4);
    border-top: var(--ds-border-hairline) solid var(--ds-line);
    background: var(--ds-surface);
    font-size: var(--ds-text-2xs);
    font-weight: var(--ds-weight-bold);
    letter-spacing: 0.04em;
  }

  .item {
    display: inline-flex;
    gap: 6px;
    align-items: baseline;
    color: var(--ds-fg-dim);
  }

  .item + .item::before {
    content: '·';
    margin-right: var(--ds-space-3);
    color: var(--ds-fg-dim);
  }

  .label {
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  .value {
    color: var(--ds-fg);
    font-family: var(--ds-font-mono);
  }

  .info .value {
    color: var(--ds-info);
  }

  .success .value {
    color: var(--ds-success);
  }

  .warning .value {
    color: var(--ds-warning);
  }

  .danger .value {
    color: var(--ds-danger);
  }
</style>
