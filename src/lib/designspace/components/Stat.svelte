<script lang="ts">
  let {
    label,
    value,
    delta = '',
    trend = 'flat',
    hint = ''
  }: {
    label: string;
    value: string;
    delta?: string;
    trend?: 'up' | 'down' | 'flat';
    hint?: string;
  } = $props();

  const arrow = $derived(trend === 'up' ? '↑' : trend === 'down' ? '↓' : '→');
</script>

<div class="stat">
  <p class="label">{label}</p>
  <p class="value">{value}</p>
  {#if delta}
    <p class="delta {trend}">
      <span aria-hidden="true">{arrow}</span>
      <span>{delta}</span>
    </p>
  {/if}
  {#if hint}<p class="hint">{hint}</p>{/if}
</div>

<style>
  .stat {
    display: grid;
    gap: var(--ds-space-1);
    padding: var(--ds-space-4);
    border: 1px solid var(--ds-line);
    border-radius: var(--ds-radius-lg);
    background: var(--ds-surface);
  }

  .label {
    font-size: var(--ds-text-2xs);
    font-weight: var(--ds-weight-bold);
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--ds-fg-dim);
  }

  .value {
    font-size: var(--ds-text-2xl);
    font-weight: var(--ds-weight-bold);
    letter-spacing: var(--ds-tracking-tight);
    line-height: 1.1;
  }

  .delta {
    display: inline-flex;
    gap: 4px;
    align-items: baseline;
    font-size: var(--ds-text-sm);
    font-weight: var(--ds-weight-bold);
    color: var(--ds-fg-dim);
  }

  .up {
    color: var(--ds-success);
  }

  .down {
    color: var(--ds-danger);
  }

  .hint {
    font-size: var(--ds-text-xs);
    color: var(--ds-fg-dim);
  }
</style>
