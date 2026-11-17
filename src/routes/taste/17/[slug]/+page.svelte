<script lang="ts">
  import { resolve } from '$app/paths';
  import { page } from '$app/state';
  import FinanceDemo from '#lib/taste/FinanceDemo.svelte';
  import FinancePage from '#lib/taste/FinancePage.svelte';
  import { financeBySlug } from '#lib/taste/finance-routes';

  const entry = $derived(financeBySlug(page.params.slug ?? ''));
</script>

<svelte:head>
  <title>{entry ? entry.title : 'Finance'} — DesignSpace</title>
</svelte:head>

<div class="page">
  {#if entry}
    <nav class="crumb">
      <a href={resolve('/taste/17')}>← Alle Kurse</a>
      <span>{entry.no} · {entry.title}</span>
    </nav>

    <p class="note">{entry.note}</p>

    {#if entry.component === 'page'}
      <FinancePage variant={entry.variant} />
    {:else}
      <FinanceDemo variant={entry.variant} />
    {/if}
  {:else}
    <p>Diese Variante gibt es nicht. <a href={resolve('/taste/17')}>Zurück zur Übersicht</a></p>
  {/if}
</div>

<style>
  .page {
    width: 100%;
    max-width: 1000px;
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
