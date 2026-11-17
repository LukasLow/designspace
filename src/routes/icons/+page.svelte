<script lang="ts">
  import { iconCount, iconGroups, icons, type IconGroupId } from '#lib/designspace/icons';
  import Icon from '#lib/designspace/icons/Icon.svelte';

  let query = $state('');
  let size = $state<16 | 20 | 24>(24);

  const sizes = [16, 20, 24] as const;

  const needle = $derived(query.trim().toLowerCase());

  const groupLabel = (id: IconGroupId) =>
    iconGroups.find((group) => group.id === id)?.label ?? id;

  const filtered = $derived(
    needle
      ? icons.filter(
          (icon) =>
            icon.name.toLowerCase().includes(needle) ||
            groupLabel(icon.group).toLowerCase().includes(needle)
        )
      : icons
  );

  const grouped = $derived(
    iconGroups
      .map((group) => ({
        ...group,
        items: filtered.filter((icon) => icon.group === group.id)
      }))
      .filter((group) => group.items.length > 0)
  );
</script>

<svelte:head>
  <title>Icons — DesignSpace</title>
</svelte:head>

<header class="head">
  <p class="ds-eyebrow">Icons</p>
  <h1>Strich, 1,8 px, 24er-Raster</h1>
  <p class="ds-measure ds-dim">
    {iconCount} Icons in zwölf Gruppen. Runde Enden, runde Ecken, keine Füllung.
    Gefüllt ist nur die Hauptaktion. Größen: 16 px im Text, 20 px in Zeilen,
    24 px allein stehend.
  </p>
</header>

<section class="controls" aria-labelledby="search-title">
  <h2 id="search-title" class="visually-hidden">Icons durchsuchen</h2>

  <div class="search">
    <label for="icon-search">Suche</label>
    <input
      id="icon-search"
      type="search"
      placeholder="Name oder Gruppe"
      bind:value={query}
      autocomplete="off"
      spellcheck="false"
    />
  </div>

  <div class="size" role="group" aria-label="Icon-Größe">
    {#each sizes as value}
      <button
        type="button"
        class="size-button"
        aria-pressed={size === value}
        onclick={() => (size = value)}
      >
        {value}
      </button>
    {/each}
  </div>

  <p class="count" aria-live="polite">
    {filtered.length} von {iconCount}
  </p>
</section>

{#each grouped as group (group.id)}
  <section aria-labelledby={`group-${group.id}`}>
    <div class="group-head">
      <h2 id={`group-${group.id}`}>{group.label}</h2>
      <span class="group-count">{group.items.length}</span>
    </div>

    <ul class="grid">
      {#each group.items as icon (icon.name)}
        <li>
          <span class="tile">
            <Icon name={icon.name} {size} />
          </span>
          <span class="name">{icon.name}</span>
        </li>
      {/each}
    </ul>
  </section>
{:else}
  <p class="empty">Kein Icon gefunden. Suchbegriff löschen.</p>
{/each}

<style>
  .head {
    padding-bottom: var(--ds-space-8);
  }

  h1 {
    margin: var(--ds-space-3) 0 var(--ds-space-4);
    font-size: var(--ds-text-3xl);
    letter-spacing: -0.03em;
    max-width: 22ch;
  }

  h2 {
    margin-bottom: var(--ds-space-4);
    font-size: var(--ds-text-xl);
  }

  section {
    padding: var(--ds-space-5) 0;
    border-top: 1px solid var(--ds-line);
  }

  .controls {
    display: flex;
    flex-wrap: wrap;
    align-items: end;
    gap: var(--ds-space-4);
    border-top: 1px solid var(--ds-line);
  }

  .search {
    display: grid;
    gap: 6px;
    flex: 1 1 240px;
    min-width: 0;
  }

  .search label {
    font-size: var(--ds-text-2xs);
    font-weight: var(--ds-weight-bold);
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--ds-fg-dim);
  }

  .search input {
    width: 100%;
    min-width: 0;
    min-height: var(--ds-tap-min);
    padding: 0 var(--ds-space-4);
    border: 1px solid var(--ds-line-strong);
    border-radius: var(--ds-radius-control);
    background: var(--ds-surface);
    color: var(--ds-fg);
    font-family: var(--ds-font-sans);
    font-size: var(--ds-text-sm);
  }

  .search input::placeholder {
    color: var(--ds-fg-dim);
    opacity: 1;
  }

  .search input:focus-visible {
    outline: var(--ds-border-focus) solid var(--ds-brand);
    outline-offset: 2px;
    border-color: var(--ds-brand);
  }

  .size {
    display: flex;
    gap: var(--ds-space-1);
  }

  .size-button {
    min-width: var(--ds-tap-min);
    min-height: var(--ds-tap-min);
    padding: 0 var(--ds-space-3);
    border: 1px solid var(--ds-line-strong);
    border-radius: var(--ds-radius-sm);
    background: transparent;
    color: var(--ds-fg-dim);
    font-family: var(--ds-font-sans);
    font-size: var(--ds-text-2xs);
    font-weight: var(--ds-weight-bold);
    font-variant-numeric: tabular-nums;
    cursor: pointer;
  }

  .size-button:hover {
    color: var(--ds-fg);
    background: var(--ds-surface-2);
  }

  .size-button[aria-pressed='true'] {
    border-color: var(--ds-brand);
    background: var(--ds-brand-soft);
    color: var(--ds-fg);
  }

  .size-button:focus-visible {
    outline: var(--ds-border-focus) solid var(--ds-brand);
    outline-offset: 2px;
  }

  .count {
    margin-left: auto;
    padding-bottom: var(--ds-space-2);
    font-size: var(--ds-text-2xs);
    font-weight: var(--ds-weight-bold);
    color: var(--ds-fg-dim);
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
  }

  .group-head {
    display: flex;
    align-items: baseline;
    gap: var(--ds-space-3);
    margin-bottom: var(--ds-space-4);
  }

  .group-head h2 {
    margin: 0;
  }

  .group-count {
    font-size: var(--ds-text-2xs);
    font-weight: var(--ds-weight-bold);
    color: var(--ds-fg-dim);
    font-variant-numeric: tabular-nums;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(128px, 1fr));
    gap: var(--ds-space-2);
  }

  .grid li {
    display: grid;
    gap: 6px;
    justify-items: start;
    min-width: 0;
    padding: var(--ds-space-3);
    border: 1px solid var(--ds-line);
    border-radius: var(--ds-radius-md);
    background: var(--ds-surface);
  }

  .tile {
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    border-radius: 12px;
    background: var(--ds-surface-2);
    color: var(--ds-fg);
  }

  .name {
    max-width: 100%;
    font-size: var(--ds-text-2xs);
    font-weight: var(--ds-weight-bold);
    line-height: var(--ds-leading-snug);
    hyphens: auto;
    overflow-wrap: break-word;
  }

  .empty {
    padding: var(--ds-space-6) 0;
    font-size: var(--ds-text-sm);
    color: var(--ds-fg-dim);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }

  @media (max-width: 480px) {
    .count {
      margin-left: 0;
    }

    .grid {
      grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    }
  }
</style>
