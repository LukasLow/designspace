<script lang="ts">
  import Button from '#lib/components/Button.svelte';
  import Chip from '#lib/components/Chip.svelte';
  import Field from '#lib/components/Field.svelte';

  type Panel = 'mail' | 'pass' | 'codes' | 'devices' | null;

  let { frame = false }: { frame?: boolean } = $props();

  let open = $state<Panel>(null);
  let mail = $state('lena.hoffmann@example.com');
  let pass = $state('');

  const rows = [
    { id: 'mail' as const, label: 'E-Mail', value: 'lena.hoffmann@example.com' },
    { id: 'pass' as const, label: 'Passwort', value: 'zuletzt 12.11.2026' },
    { id: 'codes' as const, label: 'Wiederherstellungscodes', value: 'fehlen' },
    { id: 'devices' as const, label: 'Geräte', value: '3 angemeldet' }
  ];

  const titles: Record<Exclude<Panel, null>, string> = {
    mail: 'E-Mail ändern',
    pass: 'Passwort ändern',
    codes: 'Wiederherstellungscodes',
    devices: 'Geräte'
  };
</script>

<svelte:window onkeydown={(e) => e.key === 'Escape' && (open = null)} />

<div class="screen" class:frame>
  <nav class="nav" aria-label="Konto">
    <span class="brand">Konto</span>

    <span class="item on" aria-current="page">
      <span class="ico">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="8" r="4" />
          <path d="M4 20c0-4 3.6-6 8-6s8 2 8 6" />
        </svg>
      </span>
      Profil
    </span>

    <span class="item">
      <span class="ico">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
        </svg>
      </span>
      Sicherheit
    </span>

    <span class="item">
      <span class="ico">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <path d="M8 20h8M12 16v4" />
        </svg>
      </span>
      Geräte
    </span>
  </nav>

  <div class="body">
    <header class="head">
      <div>
        <p class="kick">Konto</p>
        <h1>Lena Hoffmann</h1>
        <p class="sub">lena.hoffmann@example.com</p>
      </div>
      <Chip tone="brand">Pro</Chip>
    </header>

    <ul class="rows">
      {#each rows as row}
        <li>
          <button class="row" type="button" onclick={() => (open = row.id)}>
            <span class="label">{row.label}</span>
            <span class="value" class:warn={row.id === 'codes'}>{row.value}</span>
            <span class="chev" aria-hidden="true">›</span>
          </button>
        </li>
      {/each}
    </ul>

    <p class="hint">Zeile anklicken, um sie zu ändern.</p>
  </div>

  {#if open}
    <button class="scrim" type="button" aria-label="Schließen" onclick={() => (open = null)}></button>

    <div class="sheet" role="dialog" aria-modal="true" aria-labelledby="sheet-title">
      <div class="sheet-head">
        <h2 id="sheet-title">{titles[open]}</h2>
        <button class="close" type="button" aria-label="Schließen" onclick={() => (open = null)}>
          ×
        </button>
      </div>

      {#if open === 'mail'}
        <Field id="sheet-mail" label="E-Mail" type="email" bind:value={mail} />
        <div class="acts">
          <Button onclick={() => (open = null)}>Speichern</Button>
          <Button variant="secondary" onclick={() => (open = null)}>Abbrechen</Button>
        </div>
      {:else if open === 'pass'}
        <Field id="sheet-pass" label="Neues Passwort" type="password" bind:value={pass} />
        <div class="acts">
          <Button onclick={() => (open = null)}>Speichern</Button>
          <Button variant="secondary" onclick={() => (open = null)}>Abbrechen</Button>
        </div>
      {:else if open === 'codes'}
        <p class="sheet-text">
          Es sind keine Codes hinterlegt. Erzeuge zehn Einmalcodes und lege sie außerhalb des
          Geräts ab.
        </p>
        <div class="acts">
          <Button onclick={() => (open = null)}>Codes erzeugen</Button>
        </div>
      {:else}
        <ul class="devices">
          <li><span>MacBook Pro</span><Chip tone="success">aktiv</Chip></li>
          <li><span>iPhone 15</span><Chip tone="success">aktiv</Chip></li>
          <li><span>iPad Air</span><Chip tone="brand">ruht</Chip></li>
        </ul>
        <div class="acts">
          <Button variant="danger" onclick={() => (open = null)}>Alle abmelden</Button>
        </div>
      {/if}
    </div>
  {/if}
</div>

<style>
  .screen {
    position: relative;
    display: grid;
    grid-template-columns: 220px 1fr;
    gap: 0;
    min-height: 100dvh;
    padding: 0;
    background: #000;
    overflow: hidden;
  }

  .screen.frame {
    grid-template-columns: 148px 1fr;
    min-height: 430px;
    border: 1px solid var(--ds-line);
    border-radius: var(--ds-radius-lg);
  }

  .nav {
    display: grid;
    gap: 4px;
    align-content: start;
    padding: 28px 18px;
    border-right: 1px solid var(--ds-line);
  }

  .frame .nav {
    padding: 16px 14px;
  }

  .brand {
    font-family: var(--ds-font-sans);
    font-size: var(--ds-text-2xs);
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--ds-fg);
    padding-bottom: 8px;
  }

  .frame .brand {
    padding-bottom: 6px;
  }

  .item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 7px 8px;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 700;
    color: var(--ds-fg-dim);
  }

  .frame .item {
    gap: 8px;
    padding: 5px 6px;
    font-size: 12.5px;
  }

  .item:hover {
    background: var(--ds-surface-2);
    color: var(--ds-fg);
  }

  .ico {
    display: grid;
    place-items: center;
    width: 28px;
    height: 28px;
    flex: none;
    border-radius: 8px;
    background: var(--ds-surface-2);
    color: var(--ds-fg-dim);
  }

  .frame .ico {
    width: 24px;
    height: 24px;
    border-radius: 7px;
  }

  .ico svg {
    width: 16px;
    height: 16px;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.8;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .frame .ico svg {
    width: 14px;
    height: 14px;
  }

  .item.on {
    background: var(--ds-surface-3);
    color: var(--ds-fg);
  }

  .item.on .ico {
    background: var(--ds-brand-soft);
    color: var(--ds-brand);
  }

  .body {
    min-width: 0;
    max-width: 720px;
    padding: 32px;
  }

  .frame .body {
    max-width: 640px;
    padding: 18px;
  }

  .head {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;
  }

  .kick {
    font-family: var(--ds-font-sans);
    font-size: var(--ds-text-2xs);
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--ds-fg-dim);
    margin-bottom: 4px;
  }

  h1 {
    font-size: 40px;
    line-height: 0.98;
    letter-spacing: -0.045em;
  }

  .frame h1 {
    font-size: 28px;
  }

  .sub {
    margin-top: 6px;
    font-size: var(--ds-text-sm);
    color: var(--ds-fg-dim);
  }

  .frame .sub {
    font-size: 12px;
  }

  .rows {
    margin-top: 32px;
    border-top: 1px solid var(--ds-line);
  }

  .frame .rows {
    margin-top: 18px;
  }

  .row {
    display: grid;
    grid-template-columns: 1fr auto 14px;
    gap: 12px;
    align-items: center;
    width: 100%;
    min-height: var(--ds-row-large);
    padding: 16px 0;
    border: 0;
    border-bottom: 1px solid var(--ds-line-faint);
    background: transparent;
    color: var(--ds-fg);
    font: inherit;
    text-align: left;
    cursor: pointer;
  }

  .frame .row {
    min-height: 54px;
    padding: 0;
    gap: 10px;
  }

  .row:hover {
    background: var(--ds-surface-2);
    padding-inline: 10px;
  }

  .row:focus-visible {
    outline: var(--ds-border-focus) solid var(--ds-brand);
    outline-offset: -3px;
  }

  .label {
    font-family: var(--ds-font-sans);
    font-size: var(--ds-text-sm);
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--ds-fg-dim);
  }

  .frame .label {
    font-size: 12px;
  }

  .value {
    font-family: var(--ds-font-sans);
    font-size: var(--ds-text-base);
    font-weight: 700;
    color: var(--ds-fg);
  }

  .value.warn {
    color: var(--ds-warning);
  }

  .chev {
    font-size: 18px;
    line-height: 1;
    color: var(--ds-fg-dim);
  }

  .hint {
    margin-top: 12px;
    font-size: 12px;
    color: var(--ds-fg-dim);
  }

  /* ------------------------------------------------------- Karte rechts */

  .scrim {
    position: absolute;
    inset: 0;
    border: 0;
    background: rgba(0, 0, 0, 0.6);
    cursor: pointer;
  }

  .sheet {
    position: absolute;
    top: 24px;
    right: 24px;
    bottom: 24px;
    width: min(380px, calc(100% - 48px));
    display: grid;
    gap: 16px;
    align-content: start;
    padding: 20px;
    background: var(--ds-surface-3);
    border: 1px solid var(--ds-line-strong);
    border-radius: var(--ds-radius-lg);
  }

  .frame .sheet {
    top: 12px;
    right: 12px;
    bottom: 12px;
    width: min(340px, calc(100% - 24px));
    gap: 14px;
    padding: 16px;
  }

  .sheet-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }

  .sheet-head h2 {
    font-size: 18px;
    letter-spacing: -0.02em;
  }

  .frame .sheet-head h2 {
    font-size: 16px;
  }

  .close {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border: 1px solid var(--ds-line-strong);
    border-radius: var(--ds-radius-control);
    background: transparent;
    color: var(--ds-fg);
    font-size: 20px;
    line-height: 1;
    cursor: pointer;
  }

  .frame .close {
    width: 36px;
    height: 36px;
    font-size: 18px;
  }

  .close:hover {
    border-color: var(--ds-fg);
  }

  .acts {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .sheet-text {
    font-size: 14px;
    line-height: 1.55;
    color: var(--ds-fg-dim);
  }

  .devices {
    display: grid;
    gap: 2px;
  }

  .devices li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    min-height: 44px;
    border-bottom: 1px solid var(--ds-line-faint);
    font-size: 14px;
    font-weight: 700;
  }

  @media (max-width: 720px) {
    .screen,
    .screen.frame {
      grid-template-columns: 1fr;
      min-height: 100dvh;
      border-radius: 0;
      border: 0;
    }

    .nav {
      display: flex;
      gap: 16px;
      padding: 14px;
      border-right: 0;
      border-bottom: 1px solid var(--ds-line);
    }

    .brand {
      padding-bottom: 0;
    }

    .item,
    .frame .item {
      padding: 0;
    }

    .body,
    .frame .body {
      padding: 16px;
    }

    .sheet {
      top: auto;
      left: 12px;
      right: 12px;
      bottom: 12px;
      width: auto;
      max-height: 70%;
      overflow: auto;
    }
  }
</style>
