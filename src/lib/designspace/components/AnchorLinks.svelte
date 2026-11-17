<script lang="ts">
  interface AnchorItem {
    id: string;
    label: string;
  }

  let {
    items,
    active = '',
    index = [],
    label = 'Sprungmarken'
  }: {
    items: AnchorItem[];
    active?: string;
    index?: string[];
    label?: string;
  } = $props();
</script>

<nav class="anchors" aria-label={label}>
  {#if index.length}
    <ul class="alphabet" aria-label="Alphabetischer Index">
      {#each index as letter}
        <li>
          <a href={`#${letter.toLowerCase()}`} aria-label={`Abschnitt ${letter}`}>{letter}</a>
        </li>
      {/each}
    </ul>
  {/if}
  <ul class="list">
    {#each items as item}
      <li>
        <a
          href={`#${item.id}`}
          class:active={active === item.id}
          aria-current={active === item.id ? 'location' : undefined}
        >
          {item.label}
        </a>
      </li>
    {/each}
  </ul>
</nav>

<style>
  .anchors {
    display: grid;
    gap: var(--ds-space-3);
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 2px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .list {
    display: grid;
  }

  a {
    display: flex;
    align-items: center;
    min-height: var(--ds-tap-min);
    padding: 0 var(--ds-space-3);
    border-left: 3px solid transparent;
    color: var(--ds-fg-dim);
    font-size: var(--ds-text-sm);
    text-decoration: none;
  }

  a:hover {
    color: var(--ds-fg);
    background: var(--ds-surface);
  }

  a.active {
    border-left-color: var(--ds-brand);
    color: var(--ds-brand);
    font-weight: var(--ds-weight-bold);
  }

  a:focus-visible {
    outline: var(--ds-border-focus) solid var(--ds-focus);
    outline-offset: 3px;
  }

  .alphabet {
    gap: var(--ds-space-1);
    padding-bottom: var(--ds-space-2);
    border-bottom: 1px solid var(--ds-line);
  }

  .alphabet a {
    justify-content: center;
    min-width: var(--ds-tap-min);
    padding: 0 var(--ds-space-2);
    border: 1px solid var(--ds-line);
    border-radius: var(--ds-radius-sm);
    font-family: var(--ds-font-mono);
    font-size: var(--ds-text-2xs);
    font-weight: var(--ds-weight-bold);
  }
</style>
