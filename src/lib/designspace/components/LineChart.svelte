<script lang="ts">
  interface Series {
    label: string;
    values: number[];
    tone?: 'brand' | 'info' | 'success' | 'warning' | 'danger' | 'category';
  }

  let {
    series,
    labels = [],
    caption = '',
    height = 160
  }: {
    series: Series[];
    labels?: string[];
    caption?: string;
    height?: number;
  } = $props();

  const width = 480;
  const pad = { top: 12, right: 8, bottom: 20, left: 32 };

  const allValues = $derived(series.flatMap((entry) => entry.values));
  const min = $derived(Math.min(0, ...allValues));
  const max = $derived(Math.max(1, ...allValues));
  const count = $derived(Math.max(...series.map((entry) => entry.values.length), 2));

  function points(values: number[]) {
    const span = max - min || 1;
    return values
      .map((value, index) => {
        const x = pad.left + (index / (count - 1)) * (width - pad.left - pad.right);
        const y = height - pad.bottom - ((value - min) / span) * (height - pad.top - pad.bottom);
        return `${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(' ');
  }
</script>

<figure class="chart">
  <svg
    viewBox="0 0 {width} {height}"
    role="img"
    aria-label={caption || 'Liniendiagramm'}
  >
    <line class="axis" x1={pad.left} y1={height - pad.bottom} x2={width - pad.right} y2={height - pad.bottom} />
    <line class="axis" x1={pad.left} y1={pad.top} x2={pad.left} y2={height - pad.bottom} />
    {#if labels.length}
      {#each labels as label, index}
        {#if count > 1}
          <text
            x={pad.left + (index / (count - 1)) * (width - pad.left - pad.right)}
            y={height - 4}
            text-anchor="middle"
          >
            {label}
          </text>
        {/if}
      {/each}
    {/if}
    {#each series as entry}
      <polyline class="line {entry.tone ?? 'brand'}" points={points(entry.values)} />
    {/each}
  </svg>
  {#if caption}<figcaption>{caption}</figcaption>{/if}
  <ul class="legend">
    {#each series as entry}
      <li class={entry.tone ?? 'brand'}>
        <span class="dot" aria-hidden="true"></span>
        {entry.label}
      </li>
    {/each}
  </ul>
</figure>

<style>
  .chart {
    display: grid;
    gap: var(--ds-space-2);
    margin: 0;
    width: 100%;
  }

  svg {
    display: block;
    width: 100%;
    height: auto;
  }

  .axis {
    stroke: var(--ds-line);
    stroke-width: 1;
  }

  text {
    fill: var(--ds-fg-dim);
    font-family: var(--ds-font-sans);
    font-size: var(--ds-text-2xs);
  }

  .line {
    fill: none;
    stroke: var(--ds-brand);
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    vector-effect: non-scaling-stroke;
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

  .category {
    stroke: var(--ds-category);
  }

  figcaption {
    font-size: var(--ds-text-2xs);
    font-weight: var(--ds-weight-bold);
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--ds-fg-dim);
  }

  .legend {
    display: flex;
    flex-wrap: wrap;
    gap: var(--ds-space-3);
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: var(--ds-text-xs);
    color: var(--ds-fg-dim);
  }

  .legend li {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  .dot {
    width: 10px;
    height: 10px;
    border-radius: var(--ds-radius-pill);
    background: var(--ds-brand);
  }

  .legend .info .dot {
    background: var(--ds-info);
  }

  .legend .success .dot {
    background: var(--ds-success);
  }

  .legend .warning .dot {
    background: var(--ds-warning);
  }

  .legend .danger .dot {
    background: var(--ds-danger);
  }

  .legend .category .dot {
    background: var(--ds-category);
  }
</style>
