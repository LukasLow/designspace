<script lang="ts">
  import Chip from '#lib/components/Chip.svelte';
  import Field from '#lib/components/Field.svelte';
  import type { DirectoryVariant } from './directory-routes';

  let { variant }: { variant: DirectoryVariant } = $props();

  let view = $state<'liste' | 'karten'>('liste');

  const people = [
    { name: 'Mira Vogt', initials: 'MV', role: 'Produktdesign', city: 'Berlin', active: true },
    { name: 'Jonas Kern', initials: 'JK', role: 'Typografie', city: 'Hamburg', active: true },
    { name: 'Lena Hoffmann', initials: 'LH', role: 'Design Systems', city: 'Berlin', active: true },
    { name: 'Aylin Demir', initials: 'AD', role: 'Frontend', city: 'Köln', active: false },
    { name: 'Tom Weber', initials: 'TW', role: 'Illustration', city: 'Leipzig', active: true },
    { name: 'Sofia Marin', initials: 'SM', role: 'Research', city: 'München', active: false }
  ];
</script>

<div class="demo" data-d={variant}>
  <header class="top">
    <h3>Verzeichnis</h3>

    {#if variant === 'umschalter'}
      <div class="view" role="group" aria-label="Ansicht">
        <button class:on={view === 'liste'} onclick={() => (view = 'liste')} type="button">Liste</button>
        <button class:on={view === 'karten'} onclick={() => (view = 'karten')} type="button">Karten</button>
      </div>
    {/if}

    <div class="filters">
      <Chip tone="brand">Alle</Chip>
      <Chip>Aktiv</Chip>
      <Chip>Design</Chip>
    </div>
  </header>

  <div class="search">
    <Field id={`search-${variant}`} label="Personen suchen" placeholder="Name, Rolle oder Ort" />
  </div>

  <ul class="people" class:grid={variant === 'umschalter' && view === 'karten'}>
    {#each people as person}
      <li class="person">
        <span class="pa" aria-hidden="true">{person.initials}</span>
        <div class="who">
          <p class="pname">{person.name}</p>
          <p class="prole">{person.role} · {person.city}</p>
        </div>
        <span class="pstate" class:on={person.active}>{person.active ? 'aktiv' : 'ruhig'}</span>
        <span class="follow">Folgen</span>
      </li>
    {/each}
  </ul>
</div>

<style>
  .demo {
    padding: var(--ds-space-6);
    background: #000;
    border: 1px solid var(--ds-line);
    border-radius: var(--ds-radius-lg);
  }

  .top {
    display: flex;
    align-items: center;
    gap: var(--ds-space-4);
    flex-wrap: wrap;
  }

  h3 {
    font-size: 28px;
    letter-spacing: -0.03em;
  }

  .filters {
    display: flex;
    gap: 6px;
    margin-left: auto;
    flex-wrap: wrap;
  }

  .search {
    margin-top: var(--ds-space-4);
    max-width: 420px;
  }

  .people {
    margin-top: var(--ds-space-4);
    border-top: 1px solid var(--ds-line);
  }

  .person {
    display: grid;
    grid-template-columns: 40px minmax(0, 1fr) auto auto;
    gap: var(--ds-space-3);
    align-items: center;
    min-height: 64px;
    padding: 8px 0;
    border-bottom: 1px solid var(--ds-line-faint);
  }

  .pa {
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    border-radius: 11px;
    background: var(--ds-surface-2);
    color: var(--ds-fg-dim);
    font-size: var(--ds-text-2xs);
    font-weight: 700;
  }

  .who {
    min-width: 0;
  }

  .pname {
    font-size: var(--ds-text-sm);
    font-weight: 700;
  }

  .prole {
    font-size: var(--ds-text-xs);
    color: var(--ds-fg-dim);
  }

  .pstate {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: var(--ds-text-2xs);
    font-weight: 700;
    color: var(--ds-fg-dim);
  }

  .pstate::before {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 999px;
    background: var(--ds-fg-dim);
  }

  .pstate.on::before {
    background: var(--ds-success);
  }

  .follow {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 40px;
    padding: 0 12px;
    border: 1px solid rgba(0, 168, 232, 0.35);
    background: rgba(0, 168, 232, 0.05);
    border-radius: var(--ds-radius-control);
    font-size: var(--ds-text-xs);
    font-weight: 700;
  }

  /* ------------------------------------------------------------ karten */

  .demo[data-d='karten'] .people {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--ds-space-3);
    border-top: 0;
    margin-top: var(--ds-space-5);
  }

  .demo[data-d='karten'] .person {
    display: grid;
    grid-template-columns: 40px 1fr;
    gap: var(--ds-space-3);
    min-height: 0;
    padding: var(--ds-space-4);
    border: 1px solid var(--ds-line);
    border-radius: var(--ds-radius-lg);
    background: var(--ds-surface);
  }

  .demo[data-d='karten'] .pstate {
    grid-column: 2;
  }

  .demo[data-d='karten'] .follow {
    grid-column: 1 / -1;
    margin-top: var(--ds-space-2);
  }

  /* ----------------------------------------------------------- tabelle */

  .demo[data-d='tabelle'] .person {
    grid-template-columns: minmax(0, 1.2fr) 1fr 0.8fr auto;
  }

  .demo[data-d='tabelle'] .pa,
  .demo[data-d='tabelle'] .pstate {
    display: none;
  }

  /* ------------------------------------------------------------- fokus */

  .demo[data-d='fokus'] .person:first-child {
    grid-template-columns: 72px 1fr;
    min-height: 0;
    padding: var(--ds-space-5) 0;
    border-bottom: 1px solid var(--ds-line);
  }

  .demo[data-d='fokus'] .person:first-child .pa {
    width: 72px;
    height: 72px;
    font-size: 20px;
    border-radius: 18px;
    background: var(--ds-brand-soft);
    color: var(--ds-brand);
  }

  .demo[data-d='fokus'] .person:first-child .pname {
    font-size: 32px;
    letter-spacing: -0.03em;
  }

  .demo[data-d='fokus'] .person:first-child .pstate,
  .demo[data-d='fokus'] .person:first-child .follow {
    display: none;
  }

  /* ----------------------------------------------------------- kompakt */

  .demo[data-d='kompakt'] .person {
    grid-template-columns: minmax(0, 1fr) auto;
    min-height: 40px;
    padding: 4px 0;
  }

  .demo[data-d='kompakt'] .pa,
  .demo[data-d='kompakt'] .follow {
    display: none;
  }

  .demo[data-d='kompakt'] .prole {
    display: inline;
    margin-left: 6px;
  }

  /* -------------------------------------------------------- umschalter */

  .view {
    display: flex;
    gap: 2px;
    padding: 3px;
    border: 1px solid var(--ds-line);
    border-radius: var(--ds-radius-control);
    background: var(--ds-surface);
  }

  .view button {
    min-height: 34px;
    padding: 0 12px;
    border: 0;
    border-radius: 14px;
    background: transparent;
    color: var(--ds-fg-dim);
    font: inherit;
    font-size: var(--ds-text-xs);
    font-weight: 700;
    cursor: pointer;
  }

  .view button.on {
    background: var(--ds-brand);
    color: #000;
  }

  .people.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--ds-space-3);
    border-top: 0;
    margin-top: var(--ds-space-5);
  }

  .people.grid .person {
    display: grid;
    grid-template-columns: 40px 1fr;
    gap: var(--ds-space-3);
    min-height: 0;
    padding: var(--ds-space-4);
    border: 1px solid var(--ds-line);
    border-radius: var(--ds-radius-lg);
    background: var(--ds-surface);
  }

  .people.grid .pstate {
    grid-column: 2;
  }

  .people.grid .follow {
    grid-column: 1 / -1;
    margin-top: var(--ds-space-2);
  }

  @media (max-width: 820px) {
    .demo[data-d='karten'] .people {
      grid-template-columns: 1fr 1fr;
    }

    .filters {
      margin-left: 0;
    }
  }

  @media (max-width: 560px) {
    .demo[data-d='karten'] .people {
      grid-template-columns: 1fr;
    }

    .person {
      grid-template-columns: 40px minmax(0, 1fr) auto;
    }

    .follow {
      display: none;
    }
  }
</style>
