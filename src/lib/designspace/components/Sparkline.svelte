<script lang="ts">
  let {
    values,
    label = 'Verlauf',
    tone = 'brand',
    height = 48
  }: {
    values: number[];
    label?: string;
    tone?: 'brand' | 'info' | 'success' | 'warning' | 'danger';
    height?: number;
  } = $props();

  const width = 240;
  const points = $derived.by(() => {
    if (values.length < 2) return '';
    const min = Math.min(...values);
    const max = Math.max(...values);
    const span = max - min || 1;
    return values
      .map((value, index) => {
        const x = (index / (values.length - 1)) * width;
        const y = height - 4 - ((value - min) / span) * (height - 8);
        return `${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(' ');
  });
</script>

<svg
  class="spark {tone}"
  viewBox="0 0 {width} {height}"
  preserveAspectRatio="none"
  role="img"
  aria-label={`${label}: ${values.join(', ')}`}
>
  <polyline points={points} />
</svg>

<style>
  .spark {
    display: block;
    width: 100%;
    max-width: 240px;
    height: auto;
    overflow: visible;
  }

  polyline {
    fill: none;
    stroke: var(--ds-brand);
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    vector-effect: non-scaling-stroke;
  }

  .info polyline {
    stroke: var(--ds-info);
  }

  .success polyline {
    stroke: var(--ds-success);
  }

  .warning polyline {
    stroke: var(--ds-warning);
  }

  .danger polyline {
    stroke: var(--ds-danger);
  }
</style>
