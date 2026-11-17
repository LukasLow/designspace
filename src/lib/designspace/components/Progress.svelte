<script lang="ts">
  let {
    value = 0,
    max = 100,
    label = '',
    hint = '',
    tone = 'brand',
    indeterminate = false
  }: {
    value?: number;
    max?: number;
    label?: string;
    hint?: string;
    tone?: 'brand' | 'info' | 'success' | 'warning' | 'danger';
    indeterminate?: boolean;
  } = $props();

  const percent = $derived(Math.min(100, Math.max(0, (value / max) * 100)));
</script>

<div class="progress">
  {#if label || hint}
    <div class="head">
      {#if label}<span class="label">{label}</span>{/if}
      {#if hint}<span class="hint">{hint}</span>{/if}
    </div>
  {/if}
  <div
    class="track"
    role="progressbar"
    aria-label={label || 'Fortschritt'}
    aria-valuemin="0"
    aria-valuemax={max}
    aria-valuenow={indeterminate ? undefined : value}
  >
    <span class="fill {tone}" class:indeterminate style="--value: {percent}%"></span>
  </div>
</div>

<style>
  .progress {
    display: grid;
    gap: 6px;
    width: 100%;
  }

  .head {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: var(--ds-space-2);
    font-size: var(--ds-text-xs);
  }

  .label {
    font-weight: var(--ds-weight-bold);
    color: var(--ds-fg);
  }

  .hint {
    color: var(--ds-fg-dim);
  }

  .track {
    height: 10px;
    overflow: hidden;
    border-radius: var(--ds-radius-pill);
    background: var(--ds-surface-3);
  }

  .fill {
    display: block;
    height: 100%;
    width: var(--value);
    border-radius: var(--ds-radius-pill);
    background: var(--ds-brand);
    transition: width var(--ds-dur-2) var(--ds-ease-out);
  }

  .info {
    background: var(--ds-info);
  }

  .success {
    background: var(--ds-success);
  }

  .warning {
    background: var(--ds-warning);
  }

  .danger {
    background: var(--ds-danger);
  }

  .indeterminate {
    width: 35%;
    background: var(--ds-brand);
    animation: slide 1.2s var(--ds-ease-in-out) infinite alternate;
  }

  @keyframes slide {
    from {
      margin-left: 0;
    }
    to {
      margin-left: 65%;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .fill {
      transition: none;
    }

    .indeterminate {
      width: 100%;
      margin-left: 0;
      animation: none;
    }
  }
</style>
