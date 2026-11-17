<script lang="ts">
  import Button from '#lib/components/Button.svelte';
  import Card from '#lib/components/Card.svelte';
  import Chip from '#lib/components/Chip.svelte';
  import Field from '#lib/components/Field.svelte';
  import type { ScreenLayout } from './screen-layouts';

  let { layout }: { layout: ScreenLayout } = $props();
</script>

{#if layout === 'drei'}
  <div class="screen" data-l="drei">
    <nav class="nav" aria-hidden="true">
      <span class="brand">Konto</span>
      <span class="item on">Profil</span>
      <span class="item">Sicherheit</span>
      <span class="item">Geräte</span>
    </nav>

    <div class="list" aria-hidden="true">
      <p class="k">Einstellungen</p>
      <span class="lrow on"><span>E-Mail</span><span class="val">lena@…</span></span>
      <span class="lrow"><span>Passwort</span><span class="val">12.11.2026</span></span>
      <span class="lrow"><span>Zwei Faktoren</span><Chip tone="success">aktiv</Chip></span>
      <span class="lrow"><span>Geräte</span><span class="val">3</span></span>
    </div>

    <div class="detail">
      <p class="k">E-Mail ändern</p>
      <Field id="drei-mail" label="E-Mail" value="lena.hoffmann@example.com" />
      <div class="row">
        <Button>Speichern</Button>
        <Button variant="secondary">Abbrechen</Button>
      </div>
      <div class="danger">
        <p class="dk">Konto löschen</p>
        <Button variant="danger">Löschen</Button>
      </div>
    </div>
  </div>
{:else}
<div class="screen" data-l={layout}>
  <nav class="nav" aria-hidden="true">
    <span class="brand">Konto</span>
    <span class="item on">Profil</span>
    <span class="item">Sicherheit</span>
    <span class="item">Geräte</span>
  </nav>

  <div class="body">
    <header class="head">
      <div>
        <p class="kick">Konto</p>
        <h3>Lena Hoffmann</h3>
        <p class="sub">lena.hoffmann@example.com</p>
      </div>
      <Chip tone="brand">Pro</Chip>
    </header>

    <Card padding="sm">
      <Field id={`mail-${layout}`} label="E-Mail" value="lena.hoffmann@example.com" />
      <div class="row">
        <Button>Speichern</Button>
        <Button variant="secondary">Abbrechen</Button>
      </div>
    </Card>

    <Card padding="sm">
      <p class="k">Sicherheit</p>
      <ul class="rows">
        <li><Chip tone="success">aktiv</Chip><span>Zwei Faktoren</span></li>
        <li><Chip tone="warning">offen</Chip><span>Wiederherstellungscodes</span></li>
      </ul>
    </Card>

    <Card padding="sm">
      <p class="k">Geräte</p>
      <ul class="rows">
        <li><Chip tone="success">aktiv</Chip><span>MacBook Pro</span></li>
        <li><Chip tone="brand">ruht</Chip><span>iPad Air</span></li>
      </ul>
    </Card>

    <aside class="meta">
      <p><span>Mitglied seit</span><strong>2024</strong></p>
      <p><span>Sitzungen</span><strong>14</strong></p>
    </aside>
  </div>
</div>
{/if}

<style>
  .screen {
    display: grid;
    gap: 12px;
    padding: 14px;
    background: #000;
    border-radius: var(--ds-radius-lg);
    border: 1px solid var(--ds-line);
  }

  .nav {
    display: grid;
    gap: 4px;
    align-content: start;
  }

  .brand {
    font-family: var(--ds-font-mono);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--ds-fg);
    padding-bottom: 6px;
  }

  .item {
    padding: 6px 0;
    font-size: 12.5px;
    font-weight: 700;
    color: var(--ds-fg-dim);
  }

  .item.on {
    color: var(--ds-fg);
  }

  .body {
    display: grid;
    gap: 10px;
    align-content: start;
    min-width: 0;
  }

  .head {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
  }

  .kick {
    font-family: var(--ds-font-mono);
    font-size: 9.5px;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--ds-fg-dim);
    margin-bottom: 3px;
  }

  h3 {
    font-size: 18px;
    letter-spacing: -0.02em;
  }

  .sub {
    margin-top: 2px;
    font-size: 12px;
    color: var(--ds-fg-dim);
  }

  .row {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-top: 12px;
  }

  .k {
    font-family: var(--ds-font-mono);
    font-size: 9.5px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--ds-fg-dim);
    margin-bottom: 8px;
  }

  .rows li {
    display: flex;
    align-items: center;
    gap: 8px;
    min-height: 34px;
    border-top: 1px solid var(--ds-line-faint);
    font-size: 12.5px;
  }

  .rows li:first-child {
    border-top: 0;
  }

  .meta {
    display: flex;
    gap: 18px;
    flex-wrap: wrap;
  }

  .meta p {
    display: grid;
    gap: 1px;
  }

  .meta span {
    font-family: var(--ds-font-mono);
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--ds-fg-dim);
  }

  .meta strong {
    font-size: 14px;
    color: var(--ds-fg);
  }

  /* --------------------------------------------------- 01 Seitenleiste */

  .screen[data-l='seite'] {
    grid-template-columns: 148px 1fr;
  }

  .screen[data-l='seite'] .nav {
    padding-right: 12px;
    border-right: 1px solid var(--ds-line);
  }

  /* Karten nicht über die ganze Breite laufen lassen. */
  .screen[data-l='seite'] .body {
    max-width: 620px;
  }

  /* ---------------------------------------------- 06 Drei Spalten */

  .screen[data-l='drei'] {
    grid-template-columns: 132px minmax(0, 0.9fr) minmax(0, 1.1fr);
    gap: 0;
    padding: 0;
    max-width: 900px;
    margin-inline: auto;
  }

  .screen[data-l='drei'] .nav {
    padding: 14px 12px;
    border-right: 1px solid var(--ds-line);
  }

  .list {
    display: grid;
    gap: 2px;
    align-content: start;
    padding: 14px;
    border-right: 1px solid var(--ds-line);
  }

  .lrow {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    min-height: 42px;
    padding: 0 8px;
    border-radius: 10px;
    font-size: 12.5px;
    font-weight: 700;
    color: var(--ds-fg-dim);
  }

  .lrow.on {
    background: var(--ds-surface-2);
    color: var(--ds-fg);
  }

  .val {
    font-family: var(--ds-font-mono);
    font-size: 11px;
    font-weight: 700;
    color: var(--ds-fg-dim);
  }

  .detail {
    display: grid;
    gap: 12px;
    align-content: start;
    padding: 14px;
  }

  .danger {
    display: grid;
    gap: 8px;
    justify-items: start;
    margin-top: 4px;
    padding-top: 12px;
    border-top: 1px solid var(--ds-line);
  }

  .dk {
    font-family: var(--ds-font-mono);
    font-size: 9.5px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--ds-fg-dim);
  }

  /* -------------------------------------------------------- 02 Oben */

  .screen[data-l='oben'] .nav {
    display: flex;
    align-items: baseline;
    gap: 16px;
    padding-bottom: 8px;
    border-bottom: 1px solid var(--ds-line);
  }

  .screen[data-l='oben'] .brand {
    padding-bottom: 0;
  }

  .screen[data-l='oben'] .item {
    padding: 0;
  }

  .screen[data-l='oben'] .body {
    width: 100%;
    max-width: 600px;
    margin-inline: auto;
  }

  /* -------------------------------------------------- 03 Zwei Spalten */

  .screen[data-l='zwei'] .nav {
    display: flex;
    align-items: baseline;
    gap: 16px;
    padding-bottom: 8px;
    border-bottom: 1px solid var(--ds-line);
  }

  .screen[data-l='zwei'] .brand {
    padding-bottom: 0;
  }

  .screen[data-l='zwei'] .item {
    padding: 0;
  }

  .screen[data-l='zwei'] .body {
    grid-template-columns: 1fr 190px;
  }

  .screen[data-l='zwei'] .body > :not(.meta) {
    grid-column: 1;
  }

  .screen[data-l='zwei'] .meta {
    grid-column: 2;
    grid-row: 1 / span 4;
    display: grid;
    align-content: start;
    gap: 14px;
    padding-left: 14px;
    border-left: 1px solid var(--ds-line);
  }

  /* -------------------------------------------------------- 04 Blatt */

  .screen[data-l='blatt'] .nav {
    display: none;
  }

  .screen[data-l='blatt'] .body {
    width: 100%;
    max-width: 520px;
    margin-inline: auto;
  }

  .screen[data-l='blatt'] .meta {
    justify-content: space-between;
  }

  /* -------------------------------------------------------- 05 Raster */

  .screen[data-l='raster'] .nav {
    display: flex;
    align-items: baseline;
    gap: 16px;
    padding-bottom: 8px;
    border-bottom: 1px solid var(--ds-line);
  }

  .screen[data-l='raster'] .brand {
    padding-bottom: 0;
  }

  .screen[data-l='raster'] .item {
    padding: 0;
  }

  .screen[data-l='raster'] .body {
    grid-template-columns: 1fr 1fr;
  }

  .screen[data-l='raster'] .head {
    grid-column: 1 / -1;
  }

  .screen[data-l='raster'] .meta {
    grid-column: 1 / -1;
    padding-top: 8px;
    border-top: 1px solid var(--ds-line);
  }
</style>
