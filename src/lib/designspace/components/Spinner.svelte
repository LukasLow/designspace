<script lang="ts">
  let {
    size = 'md',
    label = 'Lädt'
  }: {
    size?: 'sm' | 'md' | 'lg';
    label?: string;
  } = $props();
</script>

<span class="spinner {size}" role="status" aria-label={label}>
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle class="track" cx="12" cy="12" r="9" />
    <circle class="arc" cx="12" cy="12" r="9" />
  </svg>
</span>

<style>
  /* Laden ist eine Funktion, keine Dekoration: ein Ring, der sich dreht.
     Unter prefers-reduced-motion steht der Ring still — der Zustand bleibt. */
  .spinner {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: none;
    color: var(--ds-brand);
  }

  svg {
    width: 100%;
    height: 100%;
    fill: none;
    stroke-linecap: round;
    transform-origin: 50% 50%;
    animation: spin calc(var(--ds-dur-4) * 2.2) linear infinite;
  }

  .track {
    stroke: var(--ds-line-strong);
    stroke-width: 2.4;
  }

  .arc {
    stroke: currentColor;
    stroke-width: 2.4;
    stroke-dasharray: 15 42;
  }

  .sm {
    width: var(--ds-space-5);
    height: var(--ds-space-5);
  }

  .md {
    width: var(--ds-space-6);
    height: var(--ds-space-6);
  }

  .lg {
    width: var(--ds-space-9);
    height: var(--ds-space-9);
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    svg {
      animation: none;
    }
  }
</style>
