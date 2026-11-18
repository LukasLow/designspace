<script lang="ts">
  import { resolve } from '$app/paths';
  import { page } from '$app/state';
  import Accordion from '#lib/components/Accordion.svelte';
  import AnchorLinks from '#lib/components/AnchorLinks.svelte';
  import ArticleSection from '#lib/components/ArticleSection.svelte';
  import Avatar from '#lib/components/Avatar.svelte';
  import BackLink from '#lib/components/BackLink.svelte';
  import BottomNav from '#lib/components/BottomNav.svelte';
  import BrandLockup from '#lib/components/BrandLockup.svelte';
  import Breadcrumb from '#lib/components/Breadcrumb.svelte';
  import Button from '#lib/components/Button.svelte';
  import Card from '#lib/components/Card.svelte';
  import ChatComposer from '#lib/components/ChatComposer.svelte';
  import Checkbox from '#lib/components/Checkbox.svelte';
  import Chip from '#lib/components/Chip.svelte';
  import CodeBlock from '#lib/components/CodeBlock.svelte';
  import ContextMenu from '#lib/components/ContextMenu.svelte';
  import CookieBanner from '#lib/components/CookieBanner.svelte';
  import CurrencyField from '#lib/components/CurrencyField.svelte';
  import DatePicker from '#lib/components/DatePicker.svelte';
  import DetailList from '#lib/components/DetailList.svelte';
  import Dialog from '#lib/components/Dialog.svelte';
  import EmptyState from '#lib/components/EmptyState.svelte';
  import Fab from '#lib/components/Fab.svelte';
  import Field from '#lib/components/Field.svelte';
  import FileUpload from '#lib/components/FileUpload.svelte';
  import FooterNav from '#lib/components/FooterNav.svelte';
  import InlineAlert from '#lib/components/InlineAlert.svelte';
  import Kanban from '#lib/components/Kanban.svelte';
  import Kbd from '#lib/components/Kbd.svelte';
  import KnowledgeGap from '#lib/components/KnowledgeGap.svelte';
  import LineChart from '#lib/components/LineChart.svelte';
  import ListRow from '#lib/components/ListRow.svelte';
  import MediaControls from '#lib/components/MediaControls.svelte';
  import MessageRow from '#lib/components/MessageRow.svelte';
  import NavRail from '#lib/components/NavRail.svelte';
  import PageHeader from '#lib/components/PageHeader.svelte';
  import PdfViewer from '#lib/components/PdfViewer.svelte';
  import PermissionDialog from '#lib/components/PermissionDialog.svelte';
  import PlanCard from '#lib/components/PlanCard.svelte';
  import Progress from '#lib/components/Progress.svelte';
  import ProgressRing from '#lib/components/ProgressRing.svelte';
  import RadioCards from '#lib/components/RadioCards.svelte';
  import RecordingIndicator from '#lib/components/RecordingIndicator.svelte';
  import Resizable from '#lib/components/Resizable.svelte';
  import ScrollArea from '#lib/components/ScrollArea.svelte';
  import SearchField from '#lib/components/SearchField.svelte';
  import Segmented from '#lib/components/Segmented.svelte';
  import Select from '#lib/components/Select.svelte';
  import Separator from '#lib/components/Separator.svelte';
  import Sheet from '#lib/components/Sheet.svelte';
  import Skeleton from '#lib/components/Skeleton.svelte';
  import Slider from '#lib/components/Slider.svelte';
  import Sparkline from '#lib/components/Sparkline.svelte';
  import Spinner from '#lib/components/Spinner.svelte';
  import Stat from '#lib/components/Stat.svelte';
  import StatusBadge from '#lib/components/StatusBadge.svelte';
  import StatusBar from '#lib/components/StatusBar.svelte';
  import StatusDot from '#lib/components/StatusDot.svelte';
  import Stepper from '#lib/components/Stepper.svelte';
  import StoreBadge from '#lib/components/StoreBadge.svelte';
  import Switch from '#lib/components/Switch.svelte';
  import Table from '#lib/components/Table.svelte';
  import Tabs from '#lib/components/Tabs.svelte';
  import Textarea from '#lib/components/Textarea.svelte';
  import Timeline from '#lib/components/Timeline.svelte';
  import Toast from '#lib/components/Toast.svelte';
  import Toolbar from '#lib/components/Toolbar.svelte';
  import Tooltip from '#lib/components/Tooltip.svelte';
  import TopBar from '#lib/components/TopBar.svelte';
  import TrustBadge from '#lib/components/TrustBadge.svelte';
  import ZoomControl from '#lib/components/ZoomControl.svelte';
  import { docBySlug } from '#lib/components/docs';

  const doc = $derived(docBySlug(page.params.slug ?? ''));

  let dialogOpen = $state(false);
  let bannerOpen = $state(true);
  let sliderValue = $state(64);
  let tabValue = $state('overview');
  let railValue = $state('start');
  let bottomValue = $state('start');
  let segmentedValue = $state('woche');
  let toolbarValue = $state('auswahl');
  let searchValue = $state('Rechnung');

  const railItems = [
    { id: 'start', label: 'Start', icon: 'Start' as const },
    { id: 'suche', label: 'Suche', icon: 'Suche' as const },
    { id: 'buch', label: 'Buch', icon: 'Buch' as const },
    { id: 'person', label: 'Person', icon: 'Person' as const }
  ];

  const bottomItems = [
    { id: 'start', label: 'Start', icon: 'Start' as const },
    { id: 'suche', label: 'Suche', icon: 'Suche' as const },
    { id: 'chat', label: 'Chat', icon: 'Chat' as const },
    { id: 'person', label: 'Person', icon: 'Person' as const }
  ];

  const segmentItems = [
    { id: 'tag', label: 'Tag' },
    { id: 'woche', label: 'Woche' },
    { id: 'monat', label: 'Monat' }
  ];

  const toolItems = [
    { id: 'auswahl', label: 'Auswählen', icon: 'Bearbeiten' as const },
    { id: 'raster', label: 'Raster', icon: 'Raster' as const },
    { id: 'regler', label: 'Regler', icon: 'Regler' as const },
    { id: 'suche', label: 'Suchen', icon: 'Suche' as const }
  ];

  const footerGroups = [
    { title: 'Produkt', links: [{ label: 'Komponenten', href: resolve('/components') }, { label: 'Vorlagen', href: resolve('/vorlagen') }] },
    { title: 'Projekt', links: [{ label: 'Runden', href: resolve('/taste') }, { label: 'Icons', href: resolve('/icons') }] },
    { title: 'Rechtliches', links: [{ label: 'Regeln', href: resolve('/rules') }, { label: 'Barrierefreiheit', href: resolve('/rules') }] }
  ];

  const tabItems = [
    { id: 'overview', label: 'Übersicht' },
    { id: 'activity', label: 'Aktivität' },
    { id: 'settings', label: 'Einstellungen' }
  ];

  let accordionOpen = $state(['preise']);
  let selectValue = $state('privat');
  let textareaValue = $state('Die Karte bleibt ruhig. Kein Schatten, keine zweite Schrift.');
  let stepValue = $state('adresse');
  let currencyValue = $state('1.240,00');
  let radioValue = $state('standard');
  let dateValue = $state('2026-11-18');
  let uploadFiles = $state([
    { name: 'bericht-november.pdf', size: '2,4 MB', status: 'fertig' as const },
    { name: 'notizen.txt', size: '12 KB', status: 'bereit' as const }
  ]);
  let sheetRight = $state(false);
  let sheetBottom = $state(false);
  let permissionOpen = $state(false);
  let contextResult = $state('Noch keine Auswahl');
  let chatValue = $state('');
  let mediaPlaying = $state(false);
  let mediaPosition = $state(42);
  let zoomValue = $state(100);
  let recording = $state(true);
  let recordSeconds = $state(37);
  let pdfPage = $state(2);

  const sampleCode = [
    'export function press(node: HTMLElement) {',
    '  const down = () => node.dataset.pressed = "true";',
    '  const up = () => delete node.dataset.pressed;',
    '  node.addEventListener("pointerdown", down);',
    '  node.addEventListener("pointerup", up);',
    '  return { destroy() {',
    '    node.removeEventListener("pointerdown", down);',
    '    node.removeEventListener("pointerup", up);',
    '  } };',
    '}'
  ].join('\n');

  const selectOptions = [
    { value: 'privat', label: 'Privat' },
    { value: 'team', label: 'Team' },
    { value: 'firma', label: 'Firma' }
  ];

  const stepItems = [
    { id: 'konto', label: 'Konto', description: 'Name und Adresse' },
    { id: 'adresse', label: 'Adresse', description: 'Lieferung' },
    { id: 'zahlung', label: 'Zahlung', description: 'Mittel wählen' },
    { id: 'fertig', label: 'Fertig', description: 'Bestätigung' }
  ];

  const radioItems = [
    { id: 'standard', title: 'Standard', description: 'Drei Werktage, ohne Aufpreis.', meta: '0,00 €' },
    { id: 'express', title: 'Express', description: 'Am nächsten Werktag bis 12 Uhr.', meta: '6,90 €' },
    { id: 'abholung', title: 'Abholung', description: 'Selbst abholen in der Filiale.', meta: '0,00 €' }
  ];

  const accordionItems = [
    { id: 'preise', title: 'Was kostet die Bibliothek?', content: 'Nichts. Die Lib wird kopiert, nicht lizenziert.' },
    { id: 'icons', title: 'Wie viele Icons gibt es?', content: 'Über 220 Motive in zwölf Gruppen, alle auf dem 24er-Raster.' },
    { id: 'farben', title: 'Warum so wenige Farben?', content: 'Jeder Ton trägt genau eine Bedeutung. Dekoration gibt es nicht.' }
  ];

  const tableColumns = [
    { key: 'name', label: 'Komponente' },
    { key: 'status', label: 'Status' },
    { key: 'varianten', label: 'Varianten', align: 'right' as const, numeric: true }
  ];

  const tableRows = [
    { id: 'button', cells: { name: 'Button', status: 'abgenommen', varianten: '4' } },
    { id: 'card', cells: { name: 'Card', status: 'entwurf', varianten: '3' } },
    { id: 'table', cells: { name: 'Table', status: 'entwurf', varianten: '5' } },
    { id: 'timeline', cells: { name: 'Timeline', status: 'entwurf', varianten: '5' } }
  ];

  const boardColumns = [
    {
      id: 'offen',
      title: 'Offen',
      items: [
        { id: 't1', title: 'Fokusringe prüfen', meta: 'Barrierefreiheit', tone: 'warning' as const },
        { id: 't2', title: 'Tabellen-Sortierung', meta: 'Datenanzeige' }
      ]
    },
    {
      id: 'arbeit',
      title: 'In Arbeit',
      items: [{ id: 't3', title: 'Kanban-Tastatur', meta: 'Bewegung', tone: 'brand' as const }]
    },
    { id: 'fertig', title: 'Fertig', items: [] }
  ];

  const lineSeries = [
    { label: 'Besuche', values: [12, 18, 15, 24, 30, 28, 36], tone: 'brand' as const },
    { label: 'Anmeldungen', values: [4, 6, 5, 9, 12, 11, 14], tone: 'info' as const }
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

{#snippet topNav()}
  <a href={resolve('/components')} aria-current="page">Komponenten</a>
  <a href={resolve('/vorlagen')}>Vorlagen</a>
  <a href={resolve('/taste')}>Runden</a>
{/snippet}

{#snippet topActions()}
  <Button variant="secondary" href={resolve('/rules')}>Regeln</Button>
{/snippet}

{#snippet pageActions()}
  <Button>Neue Datei</Button>
  <Button variant="ghost">Teilen</Button>
{/snippet}

{#snippet emptyAction()}
  <Button>Erste Datei anlegen</Button>
{/snippet}

{#snippet alertAction()}
  <Button variant="secondary">Erneut versuchen</Button>
{/snippet}

{#snippet gapAction()}
  <Button variant="ghost">Quelle ergänzen</Button>
{/snippet}

{#snippet rowAction()}
  <Button variant="ghost">Öffnen</Button>
{/snippet}

{#snippet articleBody()}
  <p>
    Ein Abschnitt trägt genau einen Gedanken. Der Text bleibt bei 62 Zeichen, damit das Auge die
    Zeile nicht verliert. Zwischenüberschriften gliedern, sie dekorieren nicht.
  </p>
  <p>
    Zahlen stehen in Mono und tragen eine Einheit. Alles andere bleibt in Atkinson Hyperlegible,
    weil eine Schrift genügt.
  </p>
{/snippet}

{#snippet articleAside()}
  <p><strong>Randnotiz</strong></p>
  <p>Ergänzender Inhalt steht neben dem Text, nie darin. Auf schmalen Geräten rutscht er darunter.</p>
{/snippet}

{#snippet sheetFooter()}
  <button class="demo" type="button" onclick={() => (sheetRight = false)}>Abbrechen</button>
  <Button onclick={() => (sheetRight = false)}>Übernehmen</Button>
{/snippet}

{#snippet sheetBottomFooter()}
  <Button onclick={() => (sheetBottom = false)}>Fertig</Button>
{/snippet}

{#snippet planCta()}
  <Button>Tarif wählen</Button>
{/snippet}

{#snippet resizableLeft()}
  <p class="strong">Navigation</p>
  <p class="muted">Der linke Bereich hält die Liste. Er lässt sich schmaler ziehen, bleibt aber lesbar.</p>
{/snippet}

{#snippet resizableRight()}
  <p class="strong">Inhalt</p>
  <p class="muted">Rechts steht die Arbeit. Die Trennung folgt dem Zeiger und den Pfeiltasten.</p>
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
        {:else if doc.slug === 'nav-rail'}
          <div class="rail-demo">
            <NavRail items={railItems} bind:value={railValue} />
            <div class="stack">
              <p class="strong">Vier Bereiche, ein aktiver</p>
              <p class="muted">
                Die aktive Zeile trägt Petrol-Soft und eine 3-px-Marke am linken Rand. Pfeil
                hoch/runter wechselt, jede Zeile ist 48 px hoch.
              </p>
            </div>
          </div>
        {:else if doc.slug === 'top-bar'}
          <div class="frame">
            <TopBar nav={topNav} actions={topActions} />
          </div>
        {:else if doc.slug === 'bottom-nav'}
          <div class="frame">
            <BottomNav items={bottomItems} bind:value={bottomValue} />
          </div>
        {:else if doc.slug === 'footer-nav'}
          <FooterNav groups={footerGroups} legal="© 2026 DesignSpace — eine Bibliothek, kein Produkt." />
        {:else if doc.slug === 'status-bar'}
          <div class="stack">
            <StatusBar
              items={[
                { label: 'Bereit' },
                { label: 'Objekte', value: '12' },
                { label: 'Zoom', value: '100 %' }
              ]}
            />
            <StatusBar
              items={[
                { label: 'Gespeichert', tone: 'success' },
                { label: 'Sync', value: 'vor 2 min', tone: 'info' },
                { label: 'Speicher', value: '86 %', tone: 'warning' }
              ]}
            />
            <StatusBar
              items={[
                { label: 'Getrennt', tone: 'danger' },
                { label: 'Wiederholung', value: 'automatisch' }
              ]}
            />
          </div>
        {:else if doc.slug === 'breadcrumb'}
          <div class="stack">
            <Breadcrumb items={[{ label: 'Start', href: resolve('/') }, { label: 'Komponenten', href: resolve('/components') }, { label: 'Breadcrumb' }]} />
            <Breadcrumb items={[{ label: 'Konto', href: '/' }, { label: 'Sicherheit', href: '/' }, { label: 'Geräte', href: '/' }, { label: 'Dieses Gerät' }]} />
          </div>
        {:else if doc.slug === 'page-header'}
          <PageHeader
            eyebrow="Bereich"
            title="Dateien und Freigaben"
            description="Alles, was das Team teilt, an einem Ort. Der Kopf entscheidet, der Inhalt arbeitet."
            meta={['12 Dateien', '3 Freigaben', 'zuletzt heute']}
            actions={pageActions}
          />
        {:else if doc.slug === 'brand-lockup'}
          <div class="stack">
            <div class="row">
              <BrandLockup name="DesignSpace" size="sm" />
              <BrandLockup name="DesignSpace" />
              <BrandLockup name="DesignSpace" size="lg" />
            </div>
            <BrandLockup name="DesignSpace" tagline="Bibliothek und Bühne" />
          </div>
        {:else if doc.slug === 'segmented'}
          <div class="stack">
            <Segmented id="seg-a" items={segmentItems} bind:value={segmentedValue} label="Zeitraum" />
            <p class="muted">
              Gewählt: {segmentItems.find((item) => item.id === segmentedValue)?.label}. Pfeiltasten
              wechseln, der Fokus bleibt in der Leiste.
            </p>
          </div>
        {:else if doc.slug === 'toolbar'}
          <Toolbar items={toolItems} bind:value={toolbarValue} label="Werkzeuge" />
        {:else if doc.slug === 'search-field'}
          <div class="fields">
            <SearchField
              id="search-a"
              bind:value={searchValue}
              hint="Vorschläge erscheinen beim Tippen."
              suggestions={['Rechnung März', 'Rechnung April', 'Bericht Quartal']}
            />
            <SearchField id="search-b" label="Leer" value="" placeholder="Ohne Eingabe" />
          </div>
        {:else if doc.slug === 'stat'}
          <div class="grid-3">
            <Stat label="Besuche" value="1 284" delta="12 %" trend="up" hint="gegenüber Vorwoche" />
            <Stat label="Abbruch" value="3,4 %" delta="0,8 %" trend="down" />
            <Stat label="Sitzungen" value="486" trend="flat" hint="unverändert" />
          </div>
        {:else if doc.slug === 'progress'}
          <div class="fields">
            <Progress value={0} label="Leer" hint="0 %" />
            <Progress value={40} label="Upload" hint="40 %" />
            <Progress value={100} label="Fertig" hint="100 %" tone="success" />
            <Progress value={80} label="Fast voll" hint="80 %" tone="warning" />
            <Progress value={62} label="Fehler" hint="abgebrochen" tone="danger" />
            <Progress indeterminate label="Unbekannte Dauer" />
          </div>
        {:else if doc.slug === 'progress-ring'}
          <div class="row">
            <ProgressRing value={25} label="Viertel" />
            <ProgressRing value={60} label="Sechzig Prozent" tone="info" />
            <ProgressRing value={100} label="Fertig" tone="success" />
            <ProgressRing value={72} label="Warnung" tone="warning" size={80} />
            <ProgressRing value={18} label="Fehler" tone="danger" />
          </div>
        {:else if doc.slug === 'status-badge'}
          <div class="row">
            <StatusBadge>Neutral</StatusBadge>
            <StatusBadge tone="brand">Aktiv</StatusBadge>
            <StatusBadge tone="info">Information</StatusBadge>
            <StatusBadge tone="success">Erfolg</StatusBadge>
            <StatusBadge tone="category">Kategorie</StatusBadge>
            <StatusBadge tone="warning">Warnung</StatusBadge>
            <StatusBadge tone="danger">Fehler</StatusBadge>
            <StatusBadge tone="brand" dot={false}>Ohne Punkt</StatusBadge>
          </div>
        {:else if doc.slug === 'status-dot'}
          <div class="row">
            <StatusDot label="Bereit" />
            <StatusDot label="Läuft" tone="brand" pulse />
            <StatusDot label="Synchron" tone="info" />
            <StatusDot label="Gespeichert" tone="success" />
            <StatusDot label="Knapp" tone="warning" />
            <StatusDot label="Getrennt" tone="danger" />
          </div>
        {:else if doc.slug === 'empty-state'}
          <div class="stack">
            <EmptyState
              title="Noch keine Dateien"
              description="Sobald das Team etwas teilt, erscheint es hier."
              icon="Ordner"
              action={emptyAction}
            />
            <EmptyState title="Keine Treffer" description="Der Filter ist zu eng." icon="Suche" />
          </div>
        {:else if doc.slug === 'inline-alert'}
          <div class="stack">
            <InlineAlert tone="info" title="Hinweis" action={alertAction}>
              Die Sitzung läuft in zehn Minuten ab.
            </InlineAlert>
            <InlineAlert tone="success" title="Gespeichert">
              Die Änderungen sind übernommen.
            </InlineAlert>
            <InlineAlert tone="warning" title="Fast voll">
              Der Speicher ist zu 90 Prozent belegt.
            </InlineAlert>
            <InlineAlert tone="danger" title="Nicht gesendet" action={alertAction}>
              Die Verbindung wurde unterbrochen.
            </InlineAlert>
            <InlineAlert tone="info" title="Callout" variant="callout">
              Die ruhige Form für einen wichtigen Absatz. Rolle als Fläche, Text bleibt weiß.
            </InlineAlert>
          </div>
        {:else if doc.slug === 'kbd'}
          <div class="row">
            <Kbd keys={['Enter']} />
            <Kbd keys={['Strg', 'K']} />
            <Kbd keys={['Shift', 'Alt', 'P']} />
          </div>
        {:else if doc.slug === 'table'}
          <div class="stack">
            <Table columns={tableColumns} rows={tableRows} caption="Komponenten" />
            <Table columns={tableColumns} rows={tableRows} dense sortable={false} />
          </div>
        {:else if doc.slug === 'accordion'}
          <Accordion items={accordionItems} multiple bind:open={accordionOpen} />
        {:else if doc.slug === 'list-row'}
          <div class="stack">
            <ListRow title="Konto" description="Profil, Sicherheit und Geräte" meta="3 Einträge" icon="Person" />
            <ListRow
              title="Bericht März"
              description="Freigegeben von Lena"
              meta="2,4 MB"
              icon="Dokument"
              href={resolve('/components/list-row')}
            />
            <ListRow title="Aktive Auswahl" description="Diese Zeile ist markiert" icon="Haken" active action={rowAction} />
          </div>
        {:else if doc.slug === 'detail-list'}
          <div class="stack">
            <DetailList
              items={[
                { label: 'Name', value: 'DesignSpace' },
                { label: 'Version', value: '0.4.0' },
                { label: 'Lizenz', value: 'Kopieren statt installieren' },
                { label: 'Letzte Änderung', value: '18. November 2026' }
              ]}
            />
            <DetailList
              columns={2}
              items={[
                { label: 'Farbe', value: 'Petrol' },
                { label: 'Radius', value: '18 px' },
                { label: 'Schrift', value: 'Atkinson' },
                { label: 'Fokus', value: '3 px' }
              ]}
            />
          </div>
        {:else if doc.slug === 'timeline'}
          <Timeline
            items={[
              { id: '1', title: 'Entwurf angelegt', time: '09:12', description: 'Lena hat die erste Fassung geteilt.', tone: 'brand' },
              { id: '2', title: 'Prüfung bestanden', time: '10:04', description: 'Kontrast und Ziele stimmen.', tone: 'success' },
              { id: '3', title: 'Hinweis ergänzt', time: '11:30', description: 'Der Speicher ist fast voll.', tone: 'warning' },
              { id: '4', title: 'Verbindung verloren', time: '11:42', tone: 'danger' },
              { id: '5', title: 'Wiederhergestellt', time: '11:44' }
            ]}
          />
        {:else if doc.slug === 'kanban'}
          <Kanban columns={boardColumns} label="Aufgaben" />
        {:else if doc.slug === 'anchor-links'}
          <div class="split">
            <AnchorLinks
              active="farben"
              index={['A', 'B', 'F', 'K', 'T', 'Z']}
              items={[
                { id: 'aufbau', label: 'Aufbau' },
                { id: 'bewegung', label: 'Bewegung' },
                { id: 'farben', label: 'Farben' },
                { id: 'kanten', label: 'Kanten' },
                { id: 'typen', label: 'Typografie' }
              ]}
            />
            <p class="muted">
              Der aktive Abschnitt trägt eine 3-px-Petrol-Kante. Der Alphabet-Index springt zu
              Buchstabengruppen, wenn eine lange Liste sortiert ist.
            </p>
          </div>
          <div class="targets" aria-hidden="true">
            {#each ['a', 'b', 'f', 'k', 't', 'z', 'aufbau', 'bewegung', 'farben', 'kanten', 'typen'] as target}
              <span id={target}></span>
            {/each}
          </div>
        {:else if doc.slug === 'article-section'}
          <ArticleSection
            id="abschnitt-a"
            eyebrow="Grundlage"
            title="Ein Gedanke pro Abschnitt"
            aside={articleAside}
          >
            {@render articleBody()}
          </ArticleSection>
        {:else if doc.slug === 'knowledge-gap'}
          <div class="stack">
            <KnowledgeGap
              title="Wie verhält sich der Fokus im Sheet?"
              description="Der Fokus bleibt im Sheet und kehrt zum Auslöser zurück. Für verschachtelte Sheets fehlt noch ein Beleg."
              sources={['Runde 11', 'WAI-ARIA Dialog']}
              action={gapAction}
            />
            <KnowledgeGap
              title="Keine Quelle"
              description="Ohne Beleg bleibt die Frage offen. Gold markiert die Lücke, nicht den Fehler."
            />
          </div>
        {:else if doc.slug === 'sparkline'}
          <div class="stack">
            <div class="row">
              <Sparkline values={[4, 6, 5, 9, 8, 12]} label="Steigend" />
              <Sparkline values={[12, 10, 11, 8, 6, 5]} label="Fallend" tone="danger" />
              <Sparkline values={[6, 6, 7, 6, 6, 6]} label="Flach" tone="info" />
              <Sparkline values={[3, 9, 4, 10, 6, 12, 8]} label="Unruhig" tone="success" />
            </div>
            <p class="muted">Ohne Achsen, ohne Raster. Der Wert steht im Label, nicht im Bild.</p>
          </div>
        {:else if doc.slug === 'line-chart'}
          <LineChart
            series={lineSeries}
            labels={['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So']}
            caption="Besuche und Anmeldungen, sieben Tage"
          />
        {:else if doc.slug === 'select'}
          <div class="fields">
            <Select id="select-a" label="Konto" options={selectOptions} bind:value={selectValue} hint="Wechselt die Ansicht, nicht die Rechte." />
            <Select id="select-b" label="Leer" options={selectOptions} value="" placeholder="Bitte wählen" />
            <Select id="select-c" label="Gesperrt" options={selectOptions} value="team" disabled />
            <Select id="select-d" label="Fehler" options={selectOptions} value="" error="Bitte eine Option wählen." />
          </div>
        {:else if doc.slug === 'textarea'}
          <div class="fields">
            <Textarea id="ta-a" label="Notiz" bind:value={textareaValue} hint="Bleibt in der Karte, bis du speicherst." />
            <Textarea id="ta-b" label="Mit Zähler" value="Kurz." maxlength={80} rows={3} />
            <Textarea id="ta-c" label="Fehler" value="" error="Die Notiz darf nicht leer sein." />
          </div>
        {:else if doc.slug === 'file-upload'}
          <div class="fields">
            <FileUpload
              id="upload-a"
              label="Dateien"
              hint="PDF oder Text, bis 10 MB."
              bind:files={uploadFiles}
            />
          </div>
        {:else if doc.slug === 'stepper'}
          <Stepper steps={stepItems} bind:value={stepValue} />
        {:else if doc.slug === 'currency-field'}
          <div class="fields">
            <CurrencyField id="money-a" label="Betrag" bind:value={currencyValue} hint="Brutto, inklusive Umsatzsteuer." />
            <CurrencyField id="money-b" label="Leer" value="" />
            <CurrencyField id="money-c" label="Gesperrt" value="49,00" disabled />
            <CurrencyField id="money-d" label="Fehler" value="" error="Bitte einen Betrag eintragen." />
          </div>
        {:else if doc.slug === 'radio-cards'}
          <RadioCards name="versand" legend="Versand" items={radioItems} bind:value={radioValue} />
        {:else if doc.slug === 'date-picker'}
          <div class="fields">
            <DatePicker id="date-a" label="Liefertermin" bind:value={dateValue} hint="Werktage, ohne Feiertage." />
            <DatePicker id="date-b" label="Fehler" value="" error="Bitte ein Datum wählen." />
            <DatePicker id="date-c" label="Mit Grenzen" value="2026-11-20" min="2026-11-18" max="2026-12-24" />
          </div>
        {:else if doc.slug === 'sheet'}
          <div class="row">
            <button class="demo" type="button" onclick={() => (sheetRight = true)}>
              Sheet von rechts
            </button>
            <button class="demo" type="button" onclick={() => (sheetBottom = true)}>
              Sheet von unten
            </button>
          </div>
          <Sheet bind:open={sheetRight} title="Filter" footer={sheetFooter}>
            <p class="muted">
              Das Sheet kommt von rechts, der Scrim dunkelt die Seite ab. Escape schließt, der Fokus
              bleibt im Sheet.
            </p>
          </Sheet>
          <Sheet bind:open={sheetBottom} title="Aktionen" side="bottom" footer={sheetBottomFooter}>
            <p class="muted">Von unten für Mobil: gleiche Fläche, andere Richtung.</p>
          </Sheet>
        {:else if doc.slug === 'context-menu'}
          <div class="stack">
            <ContextMenu
              items={[
                { id: 'oeffnen', label: 'Öffnen', icon: 'Weiter' },
                { id: 'umbenennen', label: 'Umbenennen', icon: 'Bearbeiten' },
                { id: 'teilen', label: 'Teilen', icon: 'Teilen' },
                { id: 'loeschen', label: 'Löschen', icon: 'Löschen', danger: true }
              ]}
              onselect={(id) => (contextResult = id)}
            >
              <p class="strong">Rechtsklick auf diese Fläche</p>
              <p class="muted">Das Menü öffnet am Zeiger, nicht am Rand des Feldes.</p>
            </ContextMenu>
            <p class="muted">Gewählt: {contextResult}</p>
          </div>
        {:else if doc.slug === 'permission-dialog'}
          <div class="stack">
            <button class="demo" type="button" onclick={() => (permissionOpen = true)}>
              Berechtigung anfragen
            </button>
            <PermissionDialog
              bind:open={permissionOpen}
              permission="Kamera und Mikrofon für Videoanrufe"
              description="Ohne diese Freigabe kann der Anruf nicht starten. Die Aufnahme beginnt erst nach deinem Klick."
            />
          </div>
        {:else if doc.slug === 'message-row'}
          <div class="stack">
            <MessageRow name="Lena Hoffmann" message="Der Fokusring liegt jetzt um das ganze Feld." time="09:12" />
            <MessageRow name="Mo Wagner" message="Gut. Ich prüfe noch die 375er Breite." time="09:14" />
            <MessageRow name="Du" message="Danke, ich baue danach den Build." time="09:15" own status="Gelesen" />
          </div>
        {:else if doc.slug === 'chat-composer'}
          <div class="stack">
            <ChatComposer bind:value={chatValue} onsend={() => {}} />
            <p class="muted">
              {chatValue ? `Entwurf: ${chatValue}` : 'Leer: Senden ist gesperrt. Enter sendet, Shift+Enter bricht um.'}
            </p>
          </div>
        {:else if doc.slug === 'code-block'}
          <CodeBlock code={sampleCode} language="ts" filename="press.ts" />
        {:else if doc.slug === 'pdf-viewer'}
          <div class="fields">
            <PdfViewer title="Markenhandbuch.pdf" pages={8} bind:page={pdfPage} />
          </div>
        {:else if doc.slug === 'media-controls'}
          <div class="stack">
            <MediaControls
              bind:playing={mediaPlaying}
              bind:position={mediaPosition}
              duration={214}
              label="Interview, Folge 3"
            />
            <p class="muted">
              {mediaPlaying ? 'Läuft' : 'Pausiert'} bei {Math.round(mediaPosition)} Sekunden.
            </p>
          </div>
        {:else if doc.slug === 'zoom-control'}
          <div class="stack">
            <div class="row">
              <ZoomControl bind:value={zoomValue} />
              <ZoomControl value={400} min={25} max={400} />
            </div>
            <p class="muted">Aktuell {zoomValue} Prozent. Der Prozentwert selbst setzt auf 100 zurück.</p>
          </div>
        {:else if doc.slug === 'recording-indicator'}
          <div class="stack">
            <div class="row">
              <RecordingIndicator bind:recording={recording} seconds={recordSeconds} />
              <RecordingIndicator recording={false} />
            </div>
            <p class="muted">Der Punkt pulsiert nur während der Aufnahme und steht bei reduzierter Bewegung still.</p>
          </div>
        {:else if doc.slug === 'resizable'}
          <Resizable left={resizableLeft} right={resizableRight} label="Liste und Inhalt" />
        {:else if doc.slug === 'scroll-area'}
          <ScrollArea maxHeight="220px" label="Lange Liste">
            <div class="scroll-demo">
              {#each Array.from({ length: 12 }, (_, index) => index + 1) as number}
                <p class="scroll-row">Zeile {number} — bleibt in der Fläche, der Balken ist dünn.</p>
              {/each}
            </div>
          </ScrollArea>
        {:else if doc.slug === 'plan-card'}
          <div class="grid-3">
            <PlanCard
              name="Starter"
              price="0 €"
              description="Für einzelne Seiten."
              features={['Alle Tokens', '220 Icons', 'Community']}
              cta={planCta}
            />
            <PlanCard
              name="Team"
              price="24 €"
              description="Für arbeitende Gruppen."
              features={['Alles aus Starter', 'Vorlagen', 'Priorität im Review']}
              highlighted
              cta={planCta}
            />
            <PlanCard name="Firma" price="89 €" current features={['Alles aus Team', 'Eigene Marke', 'Support']} cta={planCta} />
          </div>
        {:else if doc.slug === 'store-badge'}
          <div class="row">
            <StoreBadge store="apple" href="/" />
            <StoreBadge store="google" href="/" />
          </div>
        {:else if doc.slug === 'trust-badge'}
          <div class="stack">
            <TrustBadge title="Kein Tracking" description="Keine Cookies, keine Zählpixel." icon="Schild" />
            <TrustBadge title="14 Tage Rückgabe" description="Ohne Begründung, ohne Rückfragen." tone="success" icon="Haken" />
            <TrustBadge title="Verschlüsselt" description="TLS und verschlüsselte Ablage." tone="brand" icon="Tresor" />
          </div>
        {:else if doc.slug === 'fab'}
          <div class="row">
            <Fab label="Neue Aufgabe" />
            <Fab label="Neue Aufgabe" extended icon="Plus" />
            <Fab label="Teilen" icon="Teilen" extended />
          </div>
        {:else if doc.slug === 'back-link'}
          <div class="stack">
            <BackLink href={resolve('/components')} label="Zurück zu den Komponenten" />
            <BackLink href="/" label="Zur Startseite" />
          </div>
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
    overflow-wrap: anywhere;
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

  .frame {
    overflow: hidden;
    border: 1px solid var(--ds-line);
    border-radius: var(--ds-radius-md);
    background: var(--ds-bg);
  }

  .rail-demo {
    display: flex;
    flex-wrap: wrap;
    gap: var(--ds-space-5);
    align-items: stretch;
  }

  .rail-demo > :global(.rail) {
    min-height: 260px;
  }

  .grid-3 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: var(--ds-space-3);
  }

  .split {
    display: grid;
    grid-template-columns: minmax(0, 220px) minmax(0, 1fr);
    gap: var(--ds-space-5);
    align-items: start;
  }

  /* Nur Ziele für die Sprungmarken-Demo; unsichtbar, aber im Dokument vorhanden. */
  .targets {
    display: none;
  }

  .scroll-demo {
    display: grid;
    gap: var(--ds-space-2);
  }

  .scroll-row {
    padding: var(--ds-space-2) var(--ds-space-3);
    border: 1px solid var(--ds-line-faint);
    border-radius: var(--ds-radius-sm);
    font-size: var(--ds-text-sm);
  }

  @media (max-width: 560px) {
    .split {
      grid-template-columns: 1fr;
    }
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
