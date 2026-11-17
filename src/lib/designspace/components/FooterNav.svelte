<script lang="ts">
  import type { Snippet } from 'svelte';

  interface FooterLink {
    label: string;
    href: string;
  }

  interface FooterGroup {
    title: string;
    links: FooterLink[];
  }

  let {
    groups = [],
    legal = '',
    note
  }: {
    groups?: FooterGroup[];
    legal?: string;
    note?: Snippet;
  } = $props();
</script>

<footer class="foot">
  {#if note}<div class="note">{@render note()}</div>{/if}
  <div class="grid">
    {#each groups as group}
      <div class="group">
        <h2>{group.title}</h2>
        <ul>
          {#each group.links as link}
            <li><a href={link.href}>{link.label}</a></li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>
  {#if legal}<p class="legal">{legal}</p>{/if}
</footer>

<style>
  .foot {
    display: grid;
    gap: var(--ds-space-6);
    padding: var(--ds-space-6) 0;
    border-top: var(--ds-border-hairline) solid var(--ds-line);
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: var(--ds-space-5);
  }

  h2 {
    margin-bottom: var(--ds-space-2);
    font-size: var(--ds-text-2xs);
    font-weight: var(--ds-weight-bold);
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--ds-fg-dim);
  }

  ul {
    display: grid;
    gap: 2px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    display: inline-flex;
    align-items: center;
    min-height: var(--ds-tap-min);
    color: var(--ds-fg);
    font-size: var(--ds-text-sm);
    text-decoration: none;
  }

  a:hover {
    color: var(--ds-brand);
    text-decoration: underline;
  }

  a:focus-visible {
    outline: var(--ds-border-focus) solid var(--ds-focus);
    outline-offset: 3px;
  }

  .legal {
    font-size: var(--ds-text-2xs);
    font-weight: var(--ds-weight-bold);
    letter-spacing: 0.04em;
    color: var(--ds-fg-dim);
  }

  .note {
    font-size: var(--ds-text-sm);
    color: var(--ds-fg-dim);
  }
</style>
