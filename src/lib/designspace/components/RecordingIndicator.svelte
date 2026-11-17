<script lang="ts">
  let {
    recording = $bindable(false),
    seconds = 0,
    label = 'Aufnahme läuft',
    onstop
  }: {
    recording?: boolean;
    seconds?: number;
    label?: string;
    onstop?: () => void;
  } = $props();

  function time(value: number) {
    const minutes = Math.floor(value / 60);
    const rest = value % 60;
    return `${String(minutes).padStart(2, '0')}:${String(rest).padStart(2, '0')}`;
  }

  function stop() {
    recording = false;
    onstop?.();
  }
</script>

<div class="rec" class:active={recording} role="status">
  <span class="dot" aria-hidden="true"></span>
  <span class="label">{recording ? label : 'Bereit'}</span>
  <span class="time">{time(seconds)}</span>
  <button type="button" disabled={!recording} onclick={stop}>
    <span class="square" aria-hidden="true"></span>
    Stopp
  </button>
</div>

<style>
  .rec {
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--ds-space-2);
    padding: var(--ds-space-2) var(--ds-space-2) var(--ds-space-2) var(--ds-space-3);
    border: 1px solid var(--ds-line-strong);
    border-radius: var(--ds-radius-pill);
    background: var(--ds-surface);
  }

  .active {
    border-color: var(--ds-danger);
    background: var(--ds-danger-soft);
  }

  .dot {
    width: 10px;
    height: 10px;
    border-radius: var(--ds-radius-pill);
    background: var(--ds-fg-dim);
  }

  .active .dot {
    background: var(--ds-danger);
    animation: blink 1.2s var(--ds-ease-in-out) infinite;
  }

  .label {
    font-size: var(--ds-text-sm);
    font-weight: var(--ds-weight-bold);
  }

  .time {
    font-family: var(--ds-font-mono);
    font-size: var(--ds-text-sm);
    font-variant-numeric: tabular-nums;
    color: var(--ds-fg-dim);
  }

  button {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    min-height: var(--ds-tap-min);
    padding: 0 var(--ds-space-3);
    border: 0;
    border-radius: var(--ds-radius-pill);
    background: var(--ds-surface-3);
    color: var(--ds-fg);
    font-family: var(--ds-font-sans);
    font-size: var(--ds-text-2xs);
    font-weight: var(--ds-weight-bold);
    cursor: pointer;
  }

  .active button {
    background: var(--ds-danger);
    color: var(--ds-danger-ink);
  }

  button:focus-visible {
    outline: var(--ds-border-focus) solid var(--ds-focus);
    outline-offset: 3px;
  }

  button:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }

  .square {
    width: 10px;
    height: 10px;
    border-radius: var(--ds-radius-xs);
    background: currentColor;
  }

  @keyframes blink {
    50% {
      opacity: 0.3;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .active .dot {
      animation: none;
    }
  }
</style>
