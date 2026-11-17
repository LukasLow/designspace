<script lang="ts">
  import type { TypeVariant } from './type-variants';

  let { variant }: { variant: TypeVariant } = $props();

  const rows = [
    { label: 'E-Mail', value: 'lena.hoffmann@example.com' },
    { label: 'Passwort', value: 'zuletzt 12.11.2026' },
    { label: 'Geräte', value: '3 angemeldet' }
  ];
</script>

<div class="demo" data-t={variant}>
  <p class="kick">Konto</p>
  <h3>Lena Hoffmann</h3>
  <p class="sub">lena.hoffmann@example.com</p>

  <ul>
    {#each rows as row}
      <li>
        <span class="l">{row.label}</span>
        <span class="v">{row.value}</span>
      </li>
    {/each}
  </ul>

  <p class="meta">Mitglied seit 2024 · 14 Sitzungen</p>
</div>

<style>
  .demo {
    padding: var(--ds-space-6);
    background: #000;
    border: 1px solid var(--ds-line);
    border-radius: var(--ds-radius-lg);
  }

  .kick {
    font-family: var(--ds-font-mono);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--ds-fg-dim);
  }

  h3 {
    letter-spacing: -0.03em;
    line-height: 1.02;
  }

  .sub {
    color: var(--ds-fg-dim);
  }

  ul {
    margin-top: var(--ds-space-5);
    border-top: 1px solid var(--ds-line);
  }

  li {
    display: grid;
    grid-template-columns: 150px 1fr;
    gap: var(--ds-space-4);
    align-items: baseline;
    padding: var(--ds-space-3) 0;
    border-bottom: 1px solid var(--ds-line-faint);
  }

  .l {
    font-weight: 700;
    color: var(--ds-fg-dim);
  }

  .v {
    font-weight: 700;
  }

  .meta {
    margin-top: var(--ds-space-4);
    font-family: var(--ds-font-mono);
    font-size: 10.5px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--ds-fg-dim);
  }

  /* ------------------------------------------------------------- leise */

  .demo[data-t='leise'] h3 {
    font-size: 20px;
    margin-top: 6px;
  }

  .demo[data-t='leise'] .sub {
    margin-top: 4px;
    font-size: 12px;
  }

  .demo[data-t='leise'] li {
    padding: 7px 0;
  }

  .demo[data-t='leise'] .l {
    font-family: var(--ds-font-mono);
    font-size: 10.5px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .demo[data-t='leise'] .v {
    font-family: var(--ds-font-mono);
    font-size: 12px;
  }

  /* -------------------------------------------------------------- klar */

  .demo[data-t='klar'] h3 {
    font-size: 26px;
    margin-top: 8px;
  }

  .demo[data-t='klar'] .sub {
    margin-top: 5px;
    font-size: 13.5px;
  }

  .demo[data-t='klar'] li {
    padding: 12px 0;
  }

  .demo[data-t='klar'] .l {
    font-size: 13.5px;
  }

  .demo[data-t='klar'] .v {
    font-size: 14px;
  }

  /* -------------------------------------------------------------- laut */

  .demo[data-t='laut'] h3 {
    font-size: 40px;
    margin-top: 12px;
  }

  .demo[data-t='laut'] .sub {
    margin-top: 8px;
    font-size: 12px;
  }

  .demo[data-t='laut'] ul {
    margin-top: var(--ds-space-6);
  }

  .demo[data-t='laut'] li {
    padding: 10px 0;
  }

  .demo[data-t='laut'] .l {
    font-family: var(--ds-font-mono);
    font-size: 10px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .demo[data-t='laut'] .v {
    font-size: 13px;
  }

  /* -------------------------------------------------------------- dual */

  .demo[data-t='dual'] {
    display: grid;
    grid-template-columns: 1fr 200px;
    gap: var(--ds-space-5);
    align-items: start;
  }

  .demo[data-t='dual'] .kick {
    grid-column: 1 / -1;
  }

  .demo[data-t='dual'] h3 {
    font-size: 30px;
  }

  .demo[data-t='dual'] .sub {
    margin-top: 5px;
    font-size: 13px;
    grid-column: 1;
  }

  .demo[data-t='dual'] ul {
    grid-column: 2;
    grid-row: 2 / span 2;
    margin-top: 0;
    border-top: 0;
  }

  .demo[data-t='dual'] li {
    grid-template-columns: 1fr;
    gap: 2px;
    padding: 7px 0;
    border-top: 1px solid var(--ds-line-faint);
    border-bottom: 0;
  }

  .demo[data-t='dual'] .l {
    font-family: var(--ds-font-mono);
    font-size: 9.5px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .demo[data-t='dual'] .v {
    font-size: 13px;
  }

  .demo[data-t='dual'] .meta {
    grid-column: 1 / -1;
    margin-top: 0;
  }

  /* --------------------------------------------------------------- app */

  .demo[data-t='app'] h3 {
    font-size: 22px;
    margin-top: 6px;
  }

  .demo[data-t='app'] .sub {
    margin-top: 4px;
    font-size: 13px;
  }

  .demo[data-t='app'] li {
    padding: 11px 0;
  }

  .demo[data-t='app'] .l {
    font-size: 14px;
    color: var(--ds-fg);
  }

  .demo[data-t='app'] .v {
    font-size: 13px;
    color: var(--ds-fg-dim);
    text-align: right;
  }

  .demo[data-t='app'] .meta {
    display: none;
  }
</style>
