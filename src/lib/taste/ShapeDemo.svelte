<script lang="ts">
  import type { ShapeVariant } from './shape-variants';

  let { variant }: { variant: ShapeVariant } = $props();

  const rows = [
    { label: 'Passwort', value: '12.11.2026', tone: 'ok' },
    { label: 'Zwei Faktoren', value: 'App', tone: 'ok' },
    { label: 'Wiederherstellung', value: 'offen', tone: 'warn' }
  ];
</script>

<div class="demo" data-v={variant}>
  <div class="card">
    <div class="row">
      <span class="avatar">LH</span>
      <span class="who">
        <strong>Lena Hoffmann</strong>
        <span>Pro · seit 2024</span>
      </span>
      <span class="chip">aktiv</span>
    </div>

    <label class="field">
      <span>E-Mail</span>
      <input value="lena.hoffmann@example.com" readonly />
    </label>

    <div class="acts">
      <button class="b1" type="button">Speichern</button>
      <button class="b2" type="button">Abbrechen</button>
    </div>
  </div>

  <div class="card">
    <p class="kicker">Sicherheit</p>
    <ul class="rows">
      {#each rows as row}
        <li>
          <span class="dot" class:warn={row.tone === 'warn'}></span>
          <span class="label">{row.label}</span>
          <span class="value">{row.value}</span>
        </li>
      {/each}
    </ul>
    <p class="stat"><span>14</span>Sitzungen diese Woche</p>
  </div>
</div>

<style>
  .demo {
    display: grid;
    grid-template-columns: 1.15fr 1fr;
    gap: var(--ds-space-4);
    align-items: start;
  }

  .card {
    padding: var(--ds-space-5);
    min-height: 100%;
  }

  .row {
    display: flex;
    align-items: center;
    gap: var(--ds-space-3);
  }

  .avatar {
    width: 46px;
    height: 46px;
    flex: none;
    display: grid;
    place-items: center;
    font-size: 15px;
    font-weight: 700;
  }

  .who {
    display: grid;
    flex: 1;
    min-width: 0;
  }

  .who strong {
    font-size: 16px;
    letter-spacing: -0.01em;
  }

  .who span,
  .value,
  .stat {
    font-size: 12.5px;
  }

  .who span {
    opacity: 0.84;
  }

  .chip {
    padding: 3px 9px;
    font-family: var(--ds-font-mono);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .field {
    display: block;
    margin-top: var(--ds-space-5);
  }

  .field > span {
    display: block;
    margin-bottom: 5px;
    font-family: var(--ds-font-mono);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .field input {
    width: 100%;
    min-height: 44px;
    padding: 0 12px;
    font-size: 14px;
    background: transparent;
    color: inherit;
  }

  .acts {
    display: flex;
    gap: var(--ds-space-2);
    margin-top: var(--ds-space-4);
  }

  .acts button {
    min-height: var(--ds-tap-min);
    padding: 0 16px;
    font-size: 13px;
    font-weight: 700;
  }

  .kicker {
    font-family: var(--ds-font-mono);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    opacity: 0.8;
    margin-bottom: var(--ds-space-2);
  }

  .rows li {
    display: grid;
    grid-template-columns: 10px 1fr auto;
    gap: var(--ds-space-2);
    align-items: center;
    min-height: 40px;
  }

  .label {
    font-size: 13px;
    font-weight: 700;
  }

  .value {
    font-family: var(--ds-font-mono);
    font-weight: 700;
  }

  .dot {
    width: 8px;
    height: 8px;
  }

  .stat {
    margin-top: var(--ds-space-4);
  }

  .stat span {
    margin-right: 6px;
    font-size: 28px;
    font-weight: 700;
    letter-spacing: -0.03em;
  }

  /* ------------------------------------------------ 01 Kante: 0 px, 2 px */

  .demo[data-v='kante'] .card {
    border: 2px solid #fff;
    background: #000;
    border-radius: 0;
  }

  .demo[data-v='kante'] .avatar {
    border: 2px solid #fff;
    border-radius: 0;
  }

  .demo[data-v='kante'] .chip {
    border: 2px solid #fff;
    border-radius: 0;
  }

  .demo[data-v='kante'] .field input {
    border: 2px solid #fff;
    border-radius: 0;
  }

  .demo[data-v='kante'] .b1 {
    border: 2px solid #fff;
    border-radius: 0;
    background: #fff;
    color: #000;
    box-shadow: 4px 4px 0 rgba(255, 255, 255, 0.7);
  }

  .demo[data-v='kante'] .b2 {
    border: 2px solid #fff;
    border-radius: 0;
    background: #000;
    color: #fff;
  }

  .demo[data-v='kante'] .rows li {
    border-bottom: 1px solid rgba(255, 255, 255, 0.28);
  }

  .demo[data-v='kante'] .dot {
    border: 1.5px solid #fff;
  }

  .demo[data-v='kante'] .dot.warn {
    background: #fff;
  }

  /* --------------------------------------------- 02 Weich: 28 px, Licht */

  .demo[data-v='weich'] .card {
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 28px;
    background:
      linear-gradient(160deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0) 42%),
      #0b0b0b;
    box-shadow:
      0 30px 70px rgba(0, 0, 0, 0.7),
      inset 0 1px 0 rgba(255, 255, 255, 0.12);
  }

  .demo[data-v='weich'] .avatar {
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: linear-gradient(150deg, #2a2a2a, #111);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.24);
  }

  .demo[data-v='weich'] .chip {
    border: 1px solid rgba(255, 255, 255, 0.28);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.06);
  }

  .demo[data-v='weich'] .field input {
    border: 1px solid rgba(255, 255, 255, 0.16);
    border-radius: 14px;
    background: #131313;
  }

  .demo[data-v='weich'] .b1,
  .demo[data-v='weich'] .b2 {
    border-radius: 999px;
  }

  .demo[data-v='weich'] .b1 {
    border: 1px solid #fff;
    background: #fff;
    color: #000;
    box-shadow: 0 14px 30px rgba(255, 255, 255, 0.12);
  }

  .demo[data-v='weich'] .b2 {
    border: 1px solid rgba(255, 255, 255, 0.24);
    background: rgba(255, 255, 255, 0.04);
  }

  .demo[data-v='weich'] .rows li {
    border-top: 1px solid rgba(255, 255, 255, 0.07);
  }

  .demo[data-v='weich'] .dot {
    border-radius: 999px;
    background: #fff;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  }

  .demo[data-v='weich'] .dot.warn {
    background: #ffbf5c;
    box-shadow: 0 0 10px rgba(255, 191, 92, 0.5);
  }

  /* ------------------------------- 06 Organisch (Runde 2, verworfen) */

  .demo[data-v='organisch'] .card {
    border: 1px solid rgba(255, 255, 255, 0.16);
    border-radius: 30px 30px 30px 8px;
    background: #0a0a0a;
    box-shadow: 10px 10px 0 rgba(255, 255, 255, 0.06);
  }

  .demo[data-v='organisch'] .avatar {
    width: 50px;
    height: 50px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 42% 58% 55% 45% / 50% 45% 55% 50%;
    background: #1a1a1a;
  }

  .demo[data-v='organisch'] .chip {
    border: 1px solid rgba(255, 255, 255, 0.24);
    border-radius: 999px 999px 999px 4px;
    background: rgba(255, 255, 255, 0.05);
  }

  .demo[data-v='organisch'] .field input {
    border: 1px solid rgba(255, 255, 255, 0.16);
    border-radius: 18px 18px 18px 4px;
    background: #121212;
  }

  .demo[data-v='organisch'] .b1 {
    border: 1px solid #fff;
    border-radius: 999px;
    background: #fff;
    color: #000;
  }

  .demo[data-v='organisch'] .b2 {
    border: 1px solid rgba(255, 255, 255, 0.24);
    border-radius: 999px 999px 999px 4px;
  }

  .demo[data-v='organisch'] .rows li {
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  .demo[data-v='organisch'] .dot {
    border-radius: 999px;
    background: #fff;
  }

  .demo[data-v='organisch'] .dot.warn {
    background: #ffbf5c;
    border-radius: 2px;
  }

  /* ------------------------------------------------- 04 Raster: 6 px, dicht */

  .demo[data-v='raster'] {
    gap: var(--ds-space-3);
  }

  .demo[data-v='raster'] .card {
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 6px;
    background: #050505;
    padding: var(--ds-space-4);
  }

  .demo[data-v='raster'] .avatar {
    width: 40px;
    height: 40px;
    border: 1px solid rgba(255, 255, 255, 0.36);
    border-radius: 4px;
  }

  .demo[data-v='raster'] .chip {
    border: 1px solid rgba(255, 255, 255, 0.36);
    border-radius: 4px;
  }

  .demo[data-v='raster'] .field {
    margin-top: var(--ds-space-4);
  }

  .demo[data-v='raster'] .field input {
    border: 1px solid rgba(255, 255, 255, 0.36);
    border-radius: 4px;
    min-height: 40px;
  }

  .demo[data-v='raster'] .b1,
  .demo[data-v='raster'] .b2 {
    border-radius: 4px;
  }

  .demo[data-v='raster'] .b1 {
    background: #fff;
    border: 1px solid #fff;
    color: #000;
  }

  .demo[data-v='raster'] .b2 {
    border: 1px solid rgba(255, 255, 255, 0.4);
  }

  .demo[data-v='raster'] .rows li {
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    min-height: 34px;
  }

  .demo[data-v='raster'] .dot {
    border: 1px solid #fff;
  }

  .demo[data-v='raster'] .dot.warn {
    background: #fff;
  }

  /* ------------------------------- 07 Fläche (Runde 2, verworfen) */

  .demo[data-v='flaeche'] .card {
    padding: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.4);
  }

  .demo[data-v='flaeche'] .row {
    padding-top: var(--ds-space-3);
  }

  .demo[data-v='flaeche'] .avatar {
    width: auto;
    height: auto;
    font-size: 22px;
    letter-spacing: -0.03em;
    color: #fff;
  }

  .demo[data-v='flaeche'] .chip,
  .demo[data-v='flaeche'] .field input {
    border: 0;
  }

  .demo[data-v='flaeche'] .chip {
    border-radius: 0;
    padding: 0;
    font-size: 10px;
    color: #d9d2c2;
  }

  .demo[data-v='flaeche'] .field {
    margin-top: var(--ds-space-4);
  }

  .demo[data-v='flaeche'] .field input {
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 0;
    padding: 0;
  }

  .demo[data-v='flaeche'] .acts {
    margin-top: var(--ds-space-3);
    gap: var(--ds-space-4);
  }

  .demo[data-v='flaeche'] .b1 {
    flex: 1;
    border: 0;
    border-radius: 0;
    background: #fff;
    color: #000;
  }

  .demo[data-v='flaeche'] .b2 {
    border: 0;
    border-bottom: 1.5px solid rgba(255, 255, 255, 0.6);
    padding: 0;
    border-radius: 0;
    background: transparent;
  }

  .demo[data-v='flaeche'] .rows li {
    border-top: 1px solid rgba(255, 255, 255, 0.14);
    min-height: 36px;
  }

  .demo[data-v='flaeche'] .dot {
    width: 6px;
    height: 6px;
    border-radius: 999px;
    background: #fff;
  }

  .demo[data-v='flaeche'] .dot.warn {
    border-radius: 0;
    background: #ffbf5c;
  }

  .demo[data-v='flaeche'] .stat {
    border-top: 1px solid rgba(255, 255, 255, 0.14);
    padding-top: var(--ds-space-2);
  }

  .demo[data-v='flaeche'] .stat span {
    color: #d9d2c2;
  }

  @media (max-width: 760px) {
    .demo {
      grid-template-columns: 1fr;
    }
  }
</style>
