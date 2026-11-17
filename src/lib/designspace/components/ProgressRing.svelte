<script lang="ts">
  let {
    value = 0,
    size = 64,
    label = '',
    tone = 'brand'
  }: {
    value?: number;
    size?: number;
    label?: string;
    tone?: 'brand' | 'info' | 'success' | 'warning' | 'danger';
  } = $props();

  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const percent = $derived(Math.min(100, Math.max(0, value)));
  const dash = $derived((percent / 100) * circumference);
</script>

<div class="ring" style="width: {size}px; height: {size}px">
  <svg viewBox="0 0 100 100" role="img" aria-label={label || `${percent} Prozent`}>
    <circle class="track" cx="50" cy="50" r={radius} />
    <circle
      class="fill {tone}"
      cx="50"
      cy="50"
      r={radius}
      stroke-dasharray="{dash} {circumference}"
    />
  </svg>
  <span class="value" aria-hidden="true">{Math.round(percent)}<span class="unit">%</span></span>
</div>

<style>
  .ring {
    position: relative;
    display: grid;
    place-items: center;
    flex: none;
  }

  svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    transform: rotate(-90deg);
  }

  circle {
    fill: none;
    stroke-width: 8;
  }

  .track {
    stroke: var(--ds-surface-3);
  }

  .fill {
    stroke: var(--ds-brand);
    stroke-linecap: round;
    transition: stroke-dasharray var(--ds-dur-2) var(--ds-ease-out);
  }

  .info {
    stroke: var(--ds-info);
  }

  .success {
    stroke: var(--ds-success);
  }

  .warning {
    stroke: var(--ds-warning);
  }

  .danger {
    stroke: var(--ds-danger);
  }

  .value {
    position: relative;
    font-size: var(--ds-text-sm);
    font-weight: var(--ds-weight-bold);
    color: var(--ds-fg);
  }

  .unit {
    font-size: var(--ds-text-2xs);
    color: var(--ds-fg-dim);
  }

  @media (prefers-reduced-motion: reduce) {
    .fill {
      transition: none;
    }
  }
</style>
