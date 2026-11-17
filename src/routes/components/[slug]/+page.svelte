<script lang="ts">
  import { resolve } from '$app/paths';
  import { page } from '$app/state';
  import Avatar from '#lib/components/Avatar.svelte';
  import Button from '#lib/components/Button.svelte';
  import Card from '#lib/components/Card.svelte';
  import Checkbox from '#lib/components/Checkbox.svelte';
  import Chip from '#lib/components/Chip.svelte';
  import CookieBanner from '#lib/components/CookieBanner.svelte';
  import Dialog from '#lib/components/Dialog.svelte';
  import Field from '#lib/components/Field.svelte';
  import Separator from '#lib/components/Separator.svelte';
  import Skeleton from '#lib/components/Skeleton.svelte';
  import Slider from '#lib/components/Slider.svelte';
  import Spinner from '#lib/components/Spinner.svelte';
  import Switch from '#lib/components/Switch.svelte';
  import Tabs from '#lib/components/Tabs.svelte';
  import Toast from '#lib/components/Toast.svelte';
  import Tooltip from '#lib/components/Tooltip.svelte';
  import { docBySlug } from '#lib/components/docs';

  const doc = $derived(docBySlug(page.params.slug ?? ''));

  let dialogOpen = $state(false);
  let bannerOpen = $state(true);
  let sliderValue = $state(64);
  let tabValue = $state('overview');

  const tabItems = [
    { id: 'overview', label: 'Übersicht' },
    { id: 'activity', label: 'Aktivität' },
    { id: 'settings', label: 'Einstellungen' }
  ];
</script>

<svelte:head>
  <title>{doc ? doc.name : 'Komponente'} — DesignSpace</title>
</svelte:head>

{#snippet dialogFooter()}
  <button class="demo" type="button" onclick={() => (dialogOpen = false)}>Abbrechen</button>
  <button class="demo danger" type="button" onclick={() => (dialogOpen = false)}>Löschen</button>
{/snippet}

{#snippet tabPanel(id: string)}
  {#if id === 'overview'}
    <p class="muted">
      Übersicht: Der aktive Bereich ist eine gefüllte Petrol-Fläche. Die anderen Tabs bleiben ruhig
      und sind per Pfeiltaste erreichbar.
    </p>
  {:else if id === 'activity'}
    <p class="muted">
      Aktivität: Der Inhalt wechselt ohne Seitenwechsel. Der Fokus bleibt auf dem aktiven Tab.
    </p>
  {:else}
    <p class="muted">
      Einstellungen: Drei Tabs reichen für diesen Bereich. Mehr wären eine Navigation, keine Tabs.
    </p>
  {/if}
{/snippet}

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
        {:else if doc.slug === 'spinner'}
          <div class="stack">
            <div class="row">
              <Spinner size="sm" label="Kleine Ladeanzeige" />
              <Spinner label="Ladeanzeige" />
              <Spinner size="lg" label="Große Ladeanzeige" />
            </div>
            <p class="muted">
              Drei Größen: 24, 32 und 48 px. Unter prefers-reduced-motion steht der Ring still,
              der Zustand bleibt sichtbar.
            </p>
          </div>
        {:else if doc.slug === 'slider'}
          <div class="fields">
            <Slider
              id="slider-a"
              label="Lautstärke"
              bind:value={sliderValue}
              unit=" %"
              hint="Pfeiltasten ändern den Wert, Home und End springen."
            />
            <Slider id="slider-b" label="Gesperrt" value={30} disabled />
            <Slider
              id="slider-c"
              label="Fehler"
              value={10}
              error="Der Wert muss mindestens 20 sein."
            />
          </div>
        {:else if doc.slug === 'skeleton'}
          <div class="fields">
            <Skeleton width="72%" />
            <Skeleton lines={3} />
            <Skeleton height="calc(var(--ds-space-9) * 2.5)" radius="lg" />
          </div>
        {:else if doc.slug === 'toast'}
          <div class="stack">
            <Toast
              inline
              open
              tone="info"
              title="Hinweis"
              message="Die Sitzung läuft in zehn Minuten ab."
              duration={0}
            />
            <Toast
              inline
              open
              tone="success"
              title="Gespeichert"
              message="Die Änderungen sind übernommen."
              duration={0}
            />
            <Toast
              inline
              open
              tone="warning"
              title="Fast voll"
              message="Der Speicher ist zu 90 Prozent belegt."
              duration={0}
            />
            <Toast
              inline
              open
              tone="danger"
              title="Nicht gesendet"
              message="Die Verbindung wurde unterbrochen."
              duration={0}
            />
          </div>
        {:else if doc.slug === 'dialog'}
          <div class="stack">
            <button class="demo" type="button" onclick={() => (dialogOpen = true)}>
              Dialog öffnen
            </button>
            <Dialog
              bind:open={dialogOpen}
              id="demo-dialog"
              title="Konto löschen?"
              description="Diese Handlung kann nicht rückgängig gemacht werden."
              footer={dialogFooter}
            >
              <p class="muted">
                Alle Daten, Nachrichten und Einstellungen werden dauerhaft entfernt. Der Fokus
                bleibt im Dialog, Escape schließt ihn.
              </p>
            </Dialog>
          </div>
        {:else if doc.slug === 'cookie-banner'}
          <div class="stack">
            {#if !bannerOpen}
              <button class="demo" type="button" onclick={() => (bannerOpen = true)}>
                Banner erneut zeigen
              </button>
            {/if}
            <CookieBanner
              bind:open={bannerOpen}
              inline
              settingsHref={`${resolve('/rules')}/`}
              description="Wir speichern nur, was für den Betrieb nötig ist. Alles andere braucht deine Zustimmung."
            />
          </div>
        {:else if doc.slug === 'tooltip'}
          <div class="stack">
            <div class="row tooltip-row">
              <Tooltip id="tip-top" label="Oben: kurzer Hinweis">
                <button class="demo" type="button">Hover oder Fokus</button>
              </Tooltip>
              <Tooltip id="tip-bottom" label="Unten: kurzer Hinweis" placement="bottom">
                <button class="demo" type="button">Unten</button>
              </Tooltip>
              <Tooltip id="tip-open" label="Fest offen für die Vorschau" placement="bottom" open>
                <button class="demo" type="button">Fest offen</button>
              </Tooltip>
            </div>
            <p class="muted">
              Der Tooltip erscheint bei Hover und Tastaturfokus. Er ist nicht interaktiv und
              verschwindet wieder; der Trigger bleibt das einzige Ziel.
            </p>
          </div>
        {:else if doc.slug === 'tabs'}
          <Tabs id="demo-tabs" items={tabItems} bind:value={tabValue} panel={tabPanel} />
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

  .stack {
    display: grid;
    gap: var(--ds-space-4);
  }

  /* Platz für den fest offenen Tooltip, damit er den Text darunter nicht deckt. */
  .tooltip-row {
    padding-bottom: var(--ds-space-8);
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
    overflow-wrap: anywhere;
  }

  .foot {
    display: flex;
    flex-wrap: wrap;
    gap: var(--ds-space-3);
    align-items: baseline;
    margin-top: var(--ds-space-6);
    padding-top: var(--ds-space-4);
    border-top: 1px solid var(--ds-line);
    font-size: var(--ds-text-sm);
    color: var(--ds-fg-dim);
  }

  /* Nur für die Vorschau: ein echter Knopf in Bibliotheks-Optik, damit
     Dialog und Tooltip einen Auslöser haben. */
  .demo {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: var(--ds-tap-min);
    padding: 0 var(--ds-space-5);
    border: 2px solid var(--ds-line-strong);
    border-radius: var(--ds-radius-control);
    background: var(--ds-surface-2);
    color: var(--ds-fg);
    font-family: var(--ds-font-sans);
    font-size: var(--ds-text-sm);
    font-weight: var(--ds-weight-bold);
    line-height: 1;
    cursor: pointer;
  }

  .demo:hover {
    background: var(--ds-surface-3);
  }

  .demo:focus-visible {
    outline: var(--ds-border-focus) solid var(--ds-focus);
    outline-offset: 3px;
  }

  .demo.danger {
    border-color: var(--ds-danger);
    background: var(--ds-danger);
    color: var(--ds-danger-ink);
  }
</style>
