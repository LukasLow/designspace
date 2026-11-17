<script lang="ts">
  type Radius = 'sm' | 'md' | 'control' | 'lg' | 'pill';

  let {
    width = '100%',
    height = 'var(--ds-space-4)',
    radius = 'sm',
    lines = 0,
    label = ''
  }: {
    width?: string;
    height?: string;
    radius?: Radius;
    /** 0 = eine einzelne Fläche, > 1 = Absatz aus Zeilen. */
    lines?: number;
    label?: string;
  } = $props();

  function lineWidth(index: number, count: number): string {
    if (index === count - 1 && count > 1) return '68%';
    if (index === count - 2 && count > 2) return '88%';
    return '100%';
  }
</script>

{#if lines > 0}
  <div
    class="group"
    role={label ? 'status' : undefined}
    aria-label={label || undefined}
    aria-hidden={label ? undefined : 'true'}
  >
    {#each Array.from({ length: lines }) as _, index}
      <span
        class="block radius-{radius}"
        style="width: {lineWidth(index, lines)}; height: {height};"
      ></span>
    {/each}
  </div>
{:else}
  <span
    class="block radius-{radius}"
    style="width: {width}; height: {height};"
    role={label ? 'status' : undefined}
    aria-label={label || undefined}
    aria-hidden={label ? undefined : 'true'}
  ></span>
{/if}

<style>
  /* Laden als Korn-Skeleton, ohne Schimmer und ohne Bewegung.
     Das ist die entschiedene Form aus Runde 14 (Korn statt Shimmer). */
  .group {
    display: grid;
    gap: var(--ds-space-2);
    width: 100%;
  }

  .block {
    display: block;
    max-width: 100%;
    border: 1px solid var(--ds-line-faint);
    background-color: var(--ds-surface-3);
    background-image: var(--ds-grain);
    background-size: 140px 140px;
    background-blend-mode: overlay;
    background-repeat: repeat;
    overflow: hidden;
  }

  .radius-sm {
    border-radius: var(--ds-radius-sm);
  }

  .radius-md {
    border-radius: var(--ds-radius-md);
  }

  .radius-control {
    border-radius: var(--ds-radius-control);
  }

  .radius-lg {
    border-radius: var(--ds-radius-lg);
  }

  .radius-pill {
    border-radius: var(--ds-radius-pill);
  }

  /* Keine Animation — reduced motion ändert daher nichts, der Zustand bleibt. */
  @media (prefers-reduced-motion: reduce) {
    .block {
      transition: none;
    }
  }
</style>
