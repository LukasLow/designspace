<script lang="ts">
  interface DetailItem {
    label: string;
    value: string;
  }

  let {
    items,
    columns = 1,
    label = 'Details'
  }: {
    items: DetailItem[];
    columns?: 1 | 2;
    label?: string;
  } = $props();
</script>

<dl class="details" class:two={columns === 2} aria-label={label}>
  {#each items as item}
    <div class="pair">
      <dt>{item.label}</dt>
      <dd>{item.value}</dd>
    </div>
  {/each}
</dl>

<style>
  .details {
    display: grid;
    gap: 0;
    margin: 0;
    border-top: 1px solid var(--ds-line);
  }

  .two {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: var(--ds-space-6);
  }

  .pair {
    display: grid;
    gap: 2px;
    padding: var(--ds-space-3) 0;
    border-bottom: 1px solid var(--ds-line-faint);
    min-width: 0;
  }

  dt {
    font-size: var(--ds-text-2xs);
    font-weight: var(--ds-weight-bold);
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--ds-fg-dim);
  }

  dd {
    margin: 0;
    font-size: var(--ds-text-sm);
    color: var(--ds-fg);
    overflow-wrap: anywhere;
  }

  @media (max-width: 560px) {
    .two {
      grid-template-columns: 1fr;
    }
  }
</style>
