<script lang="ts">
  import Avatar from '#lib/components/Avatar.svelte';
  import Button from '#lib/components/Button.svelte';
  import Card from '#lib/components/Card.svelte';
  import Checkbox from '#lib/components/Checkbox.svelte';
  import Chip from '#lib/components/Chip.svelte';
  import Field from '#lib/components/Field.svelte';
  import Separator from '#lib/components/Separator.svelte';
  import Switch from '#lib/components/Switch.svelte';
  import { components } from '#lib/components/manifest';

  const colors = [
    { token: '--ds-bg', note: 'Seitenfläche, immer #000' },
    { token: '--ds-surface', note: 'Karten, Panels' },
    { token: '--ds-surface-2', note: 'erhöhte Fläche' },
    { token: '--ds-surface-3', note: 'aktive Fläche' },
    { token: '--ds-fg', note: 'Text' },
    { token: '--ds-fg-dim', note: 'Sekundärtext, hell' },
    { token: '--ds-line', note: 'Rahmen' },
    { token: '--ds-line-strong', note: 'kräftiger Rahmen' },
    { token: '--ds-brand', note: 'Petrol · Handlung als Fläche' },
    { token: '--ds-info', note: 'Powerade · Information als Linie' },
    { token: '--ds-success', note: 'Neon · Erfolg als Punkt' },
    { token: '--ds-category', note: 'Violett · Kategorien, Daten' },
    { token: '--ds-warning', note: 'Gold · Warnung' },
    { token: '--ds-danger', note: 'Rot · Fehler' }
  ];

  const type = [
    { token: '--ds-text-2xs', sample: 'Label 13,5 px', weight: 700 },
    { token: '--ds-text-xs', sample: 'Meta 14 px', weight: 400 },
    { token: '--ds-text-sm', sample: 'Fließtext klein 15 px', weight: 400 },
    { token: '--ds-text-base', sample: 'Fließtext 17 px', weight: 400 },
    { token: '--ds-text-lg', sample: 'Lead 19 px', weight: 400 },
    { token: '--ds-text-xl', sample: 'Zwischentitel 24 px', weight: 700 },
    { token: '--ds-text-2xl', sample: 'Abschnitt 32 px', weight: 700 },
    { token: '--ds-text-3xl', sample: 'Kapitel 44 px', weight: 700 }
  ];

  const spaces = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  const radii = ['xs', 'sm', 'md', 'lg', 'xl', 'pill'];
</script>

<svelte:head>
  <title>Showcase — DesignSpace</title>
</svelte:head>

<header class="head">
  <p class="ds-eyebrow">Showcase</p>
  <h1>Was die Bibliothek kann</h1>
  <p class="ds-measure ds-dim">
    Der Showcase zeigt nur, was wirklich in <code>src/lib</code> liegt. Tokens sind sichtbar,
    Komponenten erscheinen erst nach der Taste-Phase.
  </p>
</header>

<section aria-labelledby="components-title">
  <h2 id="components-title">Komponenten</h2>

  {#if components.length === 0}
    <div class="empty">
      <p class="empty-title">Noch keine Komponente abgenommen.</p>
      <p class="ds-dim ds-measure">
        Das ist Absicht. Erst wenn eine Richtung aus der Taste-Phase gewählt ist, entstehen
        Komponenten — dann aber mit allen Zuständen und mindestens fünf verglichenen Varianten.
      </p>
    </div>
  {:else}
    <ul class="list">
      {#each components as entry}
        <li>
          <span class="kind">{entry.kind ?? 'component'}</span>
          <span class="name">{entry.name}</span>
          <span class="ds-dim">{entry.description}</span>
          <span class="tag">{entry.status}</span>
        </li>
      {/each}
    </ul>
  {/if}
</section>

<section aria-labelledby="button-title">
  <h2 id="button-title">Button</h2>
  <p class="ds-dim note">
    Farbe als Fläche (Runde 6), Material matt (Runde 10), Radius 18 (Runde 9), Druck senkrecht
    (Runde 4). Die Physik ist noch offen — Feder und Taste stehen im Vergleich.
  </p>

  <div class="groups">
    <div class="group">
      <p class="token">physics="feder"</p>
      <div class="btn-row">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="danger">Danger</Button>
      </div>
    </div>

    <div class="group">
      <p class="token">physics="taste"</p>
      <div class="btn-row">
        <Button physics="taste">Primary</Button>
        <Button variant="secondary" physics="taste">Secondary</Button>
        <Button variant="ghost" physics="taste">Ghost</Button>
        <Button variant="danger" physics="taste">Danger</Button>
      </div>
    </div>

    <div class="group">
      <p class="token">disabled</p>
      <div class="btn-row">
        <Button disabled>Primary</Button>
        <Button variant="secondary" disabled>Secondary</Button>
        <Button variant="danger" disabled>Danger</Button>
      </div>
    </div>
  </div>
</section>

<section aria-labelledby="parts-title">
  <h2 id="parts-title">Bausteine</h2>
  <p class="ds-dim note">
    Card, Field und Chip — die Teile, aus denen ein Konto-Panel entsteht. Alle nach denselben
    Entscheidungen: Fläche, matt, Radius 18 für Controls.
  </p>

  <div class="parts">
    <Card>
      <h3>Konto</h3>
      <Field
        id="demo-mail"
        label="E-Mail"
        type="email"
        value="lena.hoffmann@example.com"
        hint="Wird nicht veröffentlicht."
      />
      <div class="chips">
        <Chip tone="brand">Pro</Chip>
        <Chip tone="success">aktiv</Chip>
        <Chip tone="warning">offen</Chip>
        <Chip tone="danger">Fehler</Chip>
      </div>
      <div class="btn-row">
        <Button>Speichern</Button>
        <Button variant="secondary">Abbrechen</Button>
      </div>
    </Card>

    <Card>
      <h3>Field-Zustände</h3>
      <Field id="demo-normal" label="Normal" value="Lena Hoffmann" />
      <Field
        id="demo-hint"
        label="Mit Hinweis"
        value=""
        placeholder="name@domain"
        hint="Format: name@domain"
      />
      <Field
        id="demo-error"
        label="Fehler"
        value="lena@"
        error="Keine gültige E-Mail-Adresse."
      />
    </Card>
  </div>

  <div class="chip-row">
    <Chip>Chip</Chip>
    <Chip tone="brand">Petrol</Chip>
    <Chip tone="info">Info</Chip>
    <Chip tone="success">Erfolg</Chip>
    <Chip tone="category">Kategorie</Chip>
    <Chip tone="warning">Warnung</Chip>
    <Chip tone="danger">Fehler</Chip>
  </div>
</section>

<section aria-labelledby="new-title">
  <h2 id="new-title">Avatar, Switch, Checkbox</h2>
  <p class="ds-dim note">Alle mit demselben Fokusring und demselben Petrol.</p>

  <div class="newrow">
    <Avatar name="Lena Hoffmann" size="sm" />
    <Avatar name="Lena Hoffmann" />
    <Avatar name="Lena Hoffmann" size="lg" />
    <Switch id="sw-a" label="Benachrichtigungen" checked />
    <Switch id="sw-b" label="Newsletter" />
    <Switch id="sw-c" label="Gesperrt" checked disabled />
    <Checkbox id="cb-a" label="AGB akzeptiert" checked />
    <Checkbox id="cb-b" label="Angemeldet bleiben" />
  </div>

  <div class="sep-demo">
    <Separator />
  </div>
</section>

<section aria-labelledby="color-title">
  <h2 id="color-title">Farbe</h2>
  <p class="ds-dim note">
    Provisorisches Gerüst. Die Palette wird in Schritt 1 entschieden; die Semantik-Slots sind
    absichtlich noch weiß.
  </p>
  <ul class="swatches">
    {#each colors as color}
      <li>
        <span class="chip" style="background: var({color.token})"></span>
        <span class="token">{color.token}</span>
        <span class="ds-dim">{color.note}</span>
      </li>
    {/each}
  </ul>
</section>

<section aria-labelledby="type-title">
  <h2 id="type-title">Typografie</h2>
  <p class="ds-dim note">Atkinson Hyperlegible, 400 und 700, self-hosted. Kein Text unter 13,5 px.</p>
  <ul class="scale">
    {#each type as row}
      <li>
        <span class="token">{row.token}</span>
        <span style="font-size: var({row.token}); font-weight: {row.weight}">{row.sample}</span>
      </li>
    {/each}
  </ul>
</section>

<section aria-labelledby="space-title">
  <h2 id="space-title">Raum und Radius</h2>
  <ul class="space">
    {#each spaces as step}
      <li>
        <span class="token">--ds-space-{step}</span>
        <span class="bar" style="width: var(--ds-space-{step})"></span>
      </li>
    {/each}
  </ul>
  <ul class="radii">
    {#each radii as radius}
      <li>
        <span class="corner" style="border-radius: var(--ds-radius-{radius})"></span>
        <span class="token">--ds-radius-{radius}</span>
      </li>
    {/each}
  </ul>
</section>

<style>
  .head {
    padding-bottom: var(--ds-space-8);
  }

  h1 {
    margin: var(--ds-space-3) 0 var(--ds-space-4);
    font-size: var(--ds-text-3xl);
    letter-spacing: -0.03em;
  }

  h2 {
    margin: 0 0 var(--ds-space-3);
    font-size: var(--ds-text-xl);
  }

  section {
    padding: var(--ds-space-7) 0;
    border-top: var(--ds-border-hairline) solid var(--ds-line);
  }

  .note {
    margin-bottom: var(--ds-space-5);
    font-size: var(--ds-text-sm);
  }

  .groups {
    display: grid;
    gap: var(--ds-space-5);
  }

  .group {
    padding: var(--ds-space-4);
    border: var(--ds-border-hairline) solid var(--ds-line);
    background: var(--ds-surface);
  }

  .btn-row {
    display: flex;
    flex-wrap: wrap;
    gap: var(--ds-space-3);
    margin-top: var(--ds-space-3);
  }

  .parts {
    display: grid;
    grid-template-columns: 1.1fr 1fr;
    gap: var(--ds-space-4);
  }

  .parts h3 {
    margin-bottom: var(--ds-space-4);
    font-size: var(--ds-text-lg);
  }

  .parts :global(.field) + :global(.field) {
    margin-top: var(--ds-space-3);
  }

  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: var(--ds-space-2);
    margin-top: var(--ds-space-4);
  }

  .chip-row {
    display: flex;
    flex-wrap: wrap;
    gap: var(--ds-space-2);
    margin-top: var(--ds-space-4);
  }

  .newrow {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--ds-space-5);
  }

  .sep-demo {
    margin-top: var(--ds-space-5);
  }

  @media (max-width: 860px) {
    .parts {
      grid-template-columns: 1fr;
    }
  }

  code {
    font-family: var(--ds-font-mono);
    font-size: 0.95em;
  }

  .empty {
    padding: var(--ds-space-6);
    border: var(--ds-border-hairline) dashed var(--ds-line-strong);
    border-radius: var(--ds-radius-md);
  }

  .empty-title {
    font-weight: var(--ds-weight-bold);
    font-size: var(--ds-text-lg);
    margin-bottom: var(--ds-space-3);
  }

  .swatches {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: var(--ds-space-3);
  }

  .swatches li {
    display: grid;
    grid-template-columns: 44px 1fr;
    grid-template-rows: auto auto;
    gap: 2px var(--ds-space-3);
    align-items: center;
    font-size: var(--ds-text-xs);
  }

  .chip {
    grid-row: span 2;
    width: 44px;
    height: 44px;
    border: var(--ds-border-hairline) solid var(--ds-line-strong);
    border-radius: var(--ds-radius-sm);
  }

  .token {
    font-family: var(--ds-font-mono);
    font-size: var(--ds-text-2xs);
    font-weight: var(--ds-weight-bold);
  }

  .scale li {
    display: grid;
    gap: var(--ds-space-2);
    padding: var(--ds-space-3) 0;
    border-bottom: var(--ds-border-hairline) solid var(--ds-line-faint);
  }

  .space {
    display: grid;
    gap: var(--ds-space-2);
    margin-bottom: var(--ds-space-7);
  }

  .space li {
    display: flex;
    align-items: center;
    gap: var(--ds-space-4);
  }

  .space .token {
    width: 130px;
    flex: none;
  }

  .bar {
    height: 12px;
    background: var(--ds-fg);
    border-radius: 2px;
  }

  .radii {
    display: flex;
    flex-wrap: wrap;
    gap: var(--ds-space-5);
  }

  .radii li {
    display: grid;
    gap: var(--ds-space-2);
    justify-items: start;
  }

  .corner {
    width: 64px;
    height: 64px;
    border: var(--ds-border-strong) solid var(--ds-line-strong);
    background: var(--ds-surface-2);
  }

  .list li {
    display: flex;
    gap: var(--ds-space-4);
    align-items: center;
    padding: var(--ds-space-3) 0;
    border-bottom: var(--ds-border-hairline) solid var(--ds-line-faint);
  }

  .kind {
    min-width: 84px;
    font-size: var(--ds-text-2xs);
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--ds-fg-dim);
  }

  .name {
    font-weight: var(--ds-weight-bold);
    min-width: 160px;
  }

  .tag {
    margin-left: auto;
    font-size: var(--ds-text-2xs);
    font-weight: var(--ds-weight-bold);
    text-transform: uppercase;
    letter-spacing: var(--ds-tracking-wide);
  }
</style>
