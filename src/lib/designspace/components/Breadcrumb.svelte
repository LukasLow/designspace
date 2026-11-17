<script lang="ts">
  interface Crumb {
    label: string;
    href?: string;
  }

  let {
    items,
    label = 'Pfad'
  }: {
    items: Crumb[];
    label?: string;
  } = $props();
</script>

<nav aria-label={label}>
  <ol>
    {#each items as item, index}
      <li>
        {#if item.href && index < items.length - 1}
          <a href={item.href}>{item.label}</a>
        {:else}
          <span aria-current={index === items.length - 1 ? 'page' : undefined}>
            {item.label}
          </span>
        {/if}
        {#if index < items.length - 1}<span class="sep" aria-hidden="true">/</span>{/if}
      </li>
    {/each}
  </ol>
</nav>

<style>
  ol {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--ds-space-1);
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: var(--ds-text-2xs);
    font-weight: var(--ds-weight-bold);
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  li {
    display: inline-flex;
    align-items: center;
    gap: var(--ds-space-1);
  }

  a,
  span[aria-current] {
    display: inline-flex;
    align-items: center;
    min-height: var(--ds-tap-min);
    color: var(--ds-fg-dim);
    text-decoration: none;
  }

  a:hover {
    color: var(--ds-fg);
    text-decoration: underline;
  }

  span[aria-current] {
    color: var(--ds-fg);
  }

  a:focus-visible {
    outline: var(--ds-border-focus) solid var(--ds-focus);
    outline-offset: 3px;
  }

  .sep {
    color: var(--ds-fg-dim);
  }
</style>
