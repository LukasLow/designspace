<script lang="ts">
  interface Column {
    key: string;
    label: string;
    align?: 'left' | 'right';
    numeric?: boolean;
  }

  interface Row {
    id: string;
    cells: Record<string, string>;
  }

  let {
    columns,
    rows,
    caption = '',
    dense = false,
    sortable = true
  }: {
    columns: Column[];
    rows: Row[];
    caption?: string;
    dense?: boolean;
    sortable?: boolean;
  } = $props();

  let sortKey = $state('');
  let direction = $state<'asc' | 'desc'>('asc');

  const sorted = $derived.by(() => {
    if (!sortKey) return rows;
    const copy = [...rows];
    copy.sort((a, b) => {
      const left = a.cells[sortKey] ?? '';
      const right = b.cells[sortKey] ?? '';
      const result = left.localeCompare(right, 'de', { numeric: true });
      return direction === 'asc' ? result : -result;
    });
    return copy;
  });

  function sortBy(key: string) {
    if (!sortable) return;
    if (sortKey === key) direction = direction === 'asc' ? 'desc' : 'asc';
    else {
      sortKey = key;
      direction = 'asc';
    }
  }
</script>

<div class="wrap">
  <table class:dense>
    {#if caption}<caption>{caption}</caption>{/if}
    <thead>
      <tr>
        {#each columns as column}
          <th
            scope="col"
            class:numeric={column.numeric}
            style:text-align={column.align ?? 'left'}
            aria-sort={sortKey === column.key ? (direction === 'asc' ? 'ascending' : 'descending') : undefined}
          >
            {#if sortable}
              <button type="button" onclick={() => sortBy(column.key)}>
                {column.label}
                <span class="mark" aria-hidden="true">
                  {sortKey === column.key ? (direction === 'asc' ? '↑' : '↓') : '↕'}
                </span>
              </button>
            {:else}
              {column.label}
            {/if}
          </th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each sorted as row (row.id)}
        <tr>
          {#each columns as column}
            <td class:numeric={column.numeric} style:text-align={column.align ?? 'left'}>
              {row.cells[column.key] ?? ''}
            </td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
  .wrap {
    overflow-x: auto;
    border: 1px solid var(--ds-line);
    border-radius: var(--ds-radius-md);
  }

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: var(--ds-text-sm);
  }

  caption {
    padding: var(--ds-space-3) var(--ds-space-4);
    text-align: left;
    font-size: var(--ds-text-2xs);
    font-weight: var(--ds-weight-bold);
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--ds-fg-dim);
  }

  th {
    border-bottom: 1px solid var(--ds-line-strong);
    background: var(--ds-surface-2);
    font-size: var(--ds-text-2xs);
    font-weight: var(--ds-weight-bold);
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--ds-fg-dim);
  }

  th button {
    display: flex;
    align-items: center;
    gap: 6px;
    width: 100%;
    min-height: var(--ds-tap-min);
    padding: 0 var(--ds-space-4);
    border: 0;
    background: transparent;
    color: inherit;
    font: inherit;
    text-align: inherit;
    cursor: pointer;
  }

  th button:hover {
    color: var(--ds-fg);
  }

  th button:focus-visible {
    outline: var(--ds-border-focus) solid var(--ds-focus);
    outline-offset: -3px;
  }

  .mark {
    color: var(--ds-brand);
  }

  td {
    height: var(--ds-row-normal);
    padding: 0 var(--ds-space-4);
    border-bottom: 1px solid var(--ds-line-faint);
    color: var(--ds-fg);
  }

  .dense td {
    height: var(--ds-row-compact);
  }

  tbody tr:last-child td {
    border-bottom: 0;
  }

  tbody tr:hover td {
    background: var(--ds-surface);
  }

  .numeric {
    font-family: var(--ds-font-mono);
    font-variant-numeric: tabular-nums;
  }
</style>
