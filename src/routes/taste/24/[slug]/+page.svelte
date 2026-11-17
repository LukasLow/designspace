<script lang="ts">
  import { resolve } from '$app/paths';
  import { page } from '$app/state';
  import ToolbarDemo from '#lib/taste/ToolbarDemo.svelte';
  import { toolbarBySlug } from '#lib/taste/toolbar-routes';

  const entry = $derived(toolbarBySlug(page.params.slug ?? ''));
</script>

<svelte:head>
  <title>{entry ? entry.title : 'Werkzeuggruppe'} — DesignSpace</title>
</svelte:head>

<div class="page">
  {#if entry}
    <nav class="crumb">
      <a href={resolve('/taste/24')}>← Alle Gruppen</a>
      <span>{entry.no} · {entry.title}</span>
    </nav>

    <p class="note">{entry.note}</p>

    <ToolbarDemo variant={entry.variant} />
  {:else}
    <p>Diese Variante gibt es nicht. <a href={resolve('/taste/24')}>Zurück zur Übersicht</a></p>
  {/if}
</div>

<style>
  .page {
    width: 100%;
    max-width: 900px;
    margin-inline: auto;
  }

  .crumb {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--ds-space-4);
    font-size: var(--ds-text-2xs);
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--ds-fg-dim);
    padding-bottom: var(--ds-space-4);
    border-bottom: var(--ds-border-hairline) solid var(--ds-line);
  }

  .crumb a {
    display: inline-flex;
    align-items: center;
    min-height: var(--ds-tap-min);
    color: var(--ds-fg-dim);
    text-decoration: none;
  }

  .crumb a:hover {
    color: var(--ds-fg);
  }

  .note {
    margin: var(--ds-space-5) 0 var(--ds-space-6);
    max-width: 70ch;
    font-size: var(--ds-text-sm);
    color: var(--ds-fg-dim);
    line-height: 1.6;
  }
</style>
