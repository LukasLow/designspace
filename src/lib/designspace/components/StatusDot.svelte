<script lang="ts">
  let {
    label,
    tone = 'neutral',
    pulse = false
  }: {
    label: string;
    tone?: 'neutral' | 'brand' | 'info' | 'success' | 'warning' | 'danger';
    pulse?: boolean;
  } = $props();
</script>

<span class="status {tone}">
  <span class="dot" class:pulse aria-hidden="true"></span>
  <span>{label}</span>
</span>

<style>
  .status {
    display: inline-flex;
    align-items: center;
    gap: var(--ds-space-2);
    font-size: var(--ds-text-sm);
    color: var(--ds-fg-dim);
  }

  .dot {
    width: 10px;
    height: 10px;
    flex: none;
    border-radius: var(--ds-radius-pill);
    background: var(--ds-fg-dim);
  }

  .brand .dot {
    background: var(--ds-brand);
  }

  .info .dot {
    background: var(--ds-info);
  }

  .success .dot {
    background: var(--ds-success);
  }

  .warning .dot {
    background: var(--ds-warning);
  }

  .danger .dot {
    background: var(--ds-danger);
  }

  .pulse {
    animation: pulse 1.6s var(--ds-ease-in-out) infinite;
  }

  @keyframes pulse {
    50% {
      opacity: 0.35;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .pulse {
      animation: none;
    }
  }
</style>
