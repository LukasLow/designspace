<script lang="ts">
  interface RadioCard {
    id: string;
    title: string;
    description?: string;
    meta?: string;
  }

  let {
    name,
    legend,
    items,
    value = $bindable(items[0]?.id ?? '')
  }: {
    name: string;
    legend: string;
    items: RadioCard[];
    value?: string;
  } = $props();
</script>

<fieldset class="cards">
  <legend>{legend}</legend>
  <div class="grid">
    {#each items as item}
      <label class="card" class:checked={value === item.id}>
        <input
          type="radio"
          {name}
          value={item.id}
          checked={value === item.id}
          onchange={() => (value = item.id)}
        />
        <span class="body">
          <span class="title">{item.title}</span>
          {#if item.description}<span class="desc">{item.description}</span>{/if}
          {#if item.meta}<span class="meta">{item.meta}</span>{/if}
        </span>
        <span class="mark" aria-hidden="true"></span>
      </label>
    {/each}
  </div>
</fieldset>

<style>
  .cards {
    margin: 0;
    padding: 0;
    border: 0;
  }

  legend {
    margin-bottom: var(--ds-space-2);
    padding: 0;
    font-size: var(--ds-text-2xs);
    font-weight: var(--ds-weight-bold);
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--ds-fg-dim);
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--ds-space-3);
  }

  .card {
    position: relative;
    display: flex;
    gap: var(--ds-space-3);
    align-items: flex-start;
    min-height: var(--ds-tap-min);
    padding: var(--ds-space-4);
    border: 1px solid var(--ds-line-strong);
    border-radius: var(--ds-radius-md);
    background: var(--ds-surface);
    cursor: pointer;
  }

  .card:hover {
    border-color: var(--ds-brand);
  }

  .card:has(input:focus-visible) {
    outline: var(--ds-border-focus) solid var(--ds-focus);
    outline-offset: 3px;
  }

  .checked {
    border-color: var(--ds-brand);
    background: var(--ds-brand-soft);
  }

  input {
    position: absolute;
    width: 1px;
    height: 1px;
    opacity: 0;
  }

  .body {
    display: grid;
    flex: 1;
    gap: 2px;
  }

  .title {
    font-size: var(--ds-text-sm);
    font-weight: var(--ds-weight-bold);
  }

  .desc {
    font-size: var(--ds-text-xs);
    color: var(--ds-fg-dim);
  }

  .meta {
    margin-top: var(--ds-space-1);
    font-family: var(--ds-font-mono);
    font-size: var(--ds-text-2xs);
    color: var(--ds-fg);
  }

  .mark {
    width: 20px;
    height: 20px;
    flex: none;
    margin-top: 2px;
    border: 2px solid var(--ds-line-strong);
    border-radius: var(--ds-radius-pill);
    background: transparent;
  }

  .checked .mark {
    border: 6px solid var(--ds-brand);
    background: var(--ds-bg);
  }
</style>
