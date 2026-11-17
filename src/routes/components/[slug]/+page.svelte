<script lang="ts">
  import { resolve } from '$app/paths';
  import { page } from '$app/state';
  import Avatar from '#lib/components/Avatar.svelte';
  import Button from '#lib/components/Button.svelte';
  import Card from '#lib/components/Card.svelte';
  import Checkbox from '#lib/components/Checkbox.svelte';
  import Chip from '#lib/components/Chip.svelte';
  import Field from '#lib/components/Field.svelte';
  import Separator from '#lib/components/Separator.svelte';
  import Switch from '#lib/components/Switch.svelte';
  import { docBySlug } from '#lib/components/docs';

  const doc = $derived(docBySlug(page.params.slug ?? ''));
</script>

<svelte:head>
  <title>{doc ? doc.name : 'Komponente'} — DesignSpace</title>
</svelte:head>

{#if doc}
  <div class="page">
    <nav class="crumb">
      <a href={resolve('/components')}>← Alle Komponenten</a>
      <span>{doc.name}</span>
    </nav>

    <header class="head">
      <h1>{doc.name}</h1>
      <p class="ds-measure ds-dim">{doc.description}</p>
    </header>

    <section aria-labelledby="preview-title">
      <h2 id="preview-title">Vorschau</h2>
      <div class="preview">
        {#if doc.slug === 'button'}
          <div class="row">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
            <Button disabled>Disabled</Button>
          </div>
        {:else if doc.slug === 'card'}
          <Card>
            <p class="strong">Karte</p>
            <p class="muted">Fläche mit Radius 22 und Haarlinie.</p>
          </Card>
        {:else if doc.slug === 'field'}
          <div class="fields">
            <Field id="demo-a" label="E-Mail" value="lena@example.com" hint="Wird nicht veröffentlicht." />
            <Field id="demo-b" label="Fehler" value="lena@" error="Keine gültige Adresse." />
          </div>
        {:else if doc.slug === 'chip'}
          <div class="row">
            <Chip>Chip</Chip>
            <Chip tone="brand">Petrol</Chip>
            <Chip tone="info">Info</Chip>
            <Chip tone="success">Erfolg</Chip>
            <Chip tone="category">Kategorie</Chip>
            <Chip tone="warning">Warnung</Chip>
            <Chip tone="danger">Fehler</Chip>
          </div>
        {:else if doc.slug === 'avatar'}
          <div class="row">
            <Avatar name="Lena Hoffmann" size="sm" />
            <Avatar name="Lena Hoffmann" />
            <Avatar name="Lena Hoffmann" size="lg" />
          </div>
        {:else if doc.slug === 'switch'}
          <div class="row">
            <Switch id="sw-a" label="An" checked />
            <Switch id="sw-b" label="Aus" />
            <Switch id="sw-c" label="Gesperrt" checked disabled />
          </div>
        {:else if doc.slug === 'checkbox'}
          <div class="row">
            <Checkbox id="cb-a" label="Gesetzt" checked />
            <Checkbox id="cb-b" label="Leer" />
          </div>
        {:else if doc.slug === 'separator'}
          <Separator />
        {/if}
      </div>
    </section>

    <section aria-labelledby="props-title">
      <h2 id="props-title">Props</h2>
      <ul class="props">
        {#each doc.props as prop}
          <li><code>{prop}</code></li>
        {/each}
      </ul>
    </section>

    <section aria-labelledby="states-title">
      <h2 id="states-title">Zustände</h2>
      <p class="ds-dim">{doc.states.join(' · ')}</p>
    </section>

    <section aria-labelledby="keys-title">
      <h2 id="keys-title">Tastatur</h2>
      <p class="ds-dim">{doc.keyboard}</p>
    </section>

    <footer class="foot">
      <span>Quelle</span>
      <code>{doc.source}</code>
    </footer>
  </div>
{:else}
  <p>Diese Komponente gibt es nicht. <a href={resolve('/components')}>Zurück zur Liste</a></p>
{/if}

<style>
  .page {
    width: 100%;
    max-width: 860px;
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

  .head {
    padding: var(--ds-space-7) 0 var(--ds-space-6);
  }

  h1 {
    margin-bottom: var(--ds-space-3);
    font-size: var(--ds-text-3xl);
    letter-spacing: -0.03em;
  }

  h2 {
    margin-bottom: var(--ds-space-3);
    font-size: var(--ds-text-xl);
  }

  section {
    padding: var(--ds-space-5) 0;
    border-top: 1px solid var(--ds-line);
  }

  .preview {
    padding: var(--ds-space-5);
    border: 1px solid var(--ds-line);
    border-radius: var(--ds-radius-lg);
    background: var(--ds-surface);
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    gap: var(--ds-space-3);
    align-items: center;
  }

  .fields {
    display: grid;
    gap: var(--ds-space-4);
    max-width: 420px;
  }

  .strong {
    font-weight: 700;
  }

  .muted {
    margin-top: 4px;
    font-size: var(--ds-text-sm);
    color: var(--ds-fg-dim);
  }

  .props {
    display: grid;
    gap: var(--ds-space-2);
  }

  .props code,
  .foot code {
    font-family: var(--ds-font-mono);
    font-size: var(--ds-text-sm);
    color: var(--ds-fg);
  }

  .foot {
    display: flex;
    gap: var(--ds-space-3);
    align-items: baseline;
    margin-top: var(--ds-space-6);
    padding-top: var(--ds-space-4);
    border-top: 1px solid var(--ds-line);
    font-size: var(--ds-text-sm);
    color: var(--ds-fg-dim);
  }
</style>
