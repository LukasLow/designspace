<script lang="ts">
  import type { FormVariant } from './form-variants';

  let { variant }: { variant: FormVariant } = $props();
</script>

<div class="demo" data-v={variant}>
  <div class="card">
    <div class="top">
      <span class="kicker">Konto</span>
      <span class="chip">Pro</span>
    </div>

    <p class="big">14</p>
    <p class="sub">Sitzungen diese Woche · <span class="ok">+3</span></p>

    <label class="field">
      <span>E-Mail</span>
      <input value="lena.hoffmann@example.com" readonly />
    </label>

    <div class="row">
      <button class="primary" type="button">Speichern</button>
      <button class="ghost" type="button">Abbrechen</button>
    </div>

    <ul class="rows">
      <li><span class="dot ok"></span>Passwort geändert</li>
      <li><span class="dot warn"></span>Wiederherstellungscodes fehlen</li>
    </ul>
  </div>
</div>

<style>
  .demo {
    --brand: #37b5be;
    --brand-ink: #001416;
    --success: #00e89a;
    --warn: #ffc24b;
    --line: rgba(255, 255, 255, 0.16);

    display: grid;
  }

  .card {
    padding: var(--ds-space-5);
    background: #070707;
    color: #fff;
  }

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--ds-space-3);
  }

  .kicker {
    font-family: var(--ds-font-mono);
    font-size: 10.5px;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: #d0d0d0;
  }

  .chip {
    padding: 3px 10px;
    background: var(--brand);
    color: var(--brand-ink);
    font-family: var(--ds-font-mono);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .big {
    margin-top: var(--ds-space-4);
    font-size: 52px;
    font-weight: 700;
    line-height: 0.9;
    letter-spacing: -0.05em;
    color: var(--brand);
  }

  .sub {
    margin-top: var(--ds-space-1);
    font-size: 12.5px;
    color: #d0d0d0;
  }

  .ok {
    color: var(--success);
    font-weight: 700;
  }

  .field {
    display: block;
    margin-top: var(--ds-space-4);
  }

  .field > span {
    display: block;
    margin-bottom: 5px;
    font-family: var(--ds-font-mono);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #d0d0d0;
  }

  .field input {
    width: 100%;
    min-height: var(--ds-tap-min);
    padding: 0 12px;
    background: #000;
    border: 1px solid var(--line);
    color: #fff;
    font: inherit;
    font-size: 14px;
  }

  .row {
    display: flex;
    gap: var(--ds-space-2);
    margin-top: var(--ds-space-4);
  }

  .primary,
  .ghost {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: var(--ds-tap-min);
    padding: 0 var(--ds-space-4);
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
  }

  .primary {
    background: var(--brand);
    border: 1px solid var(--brand);
    color: var(--brand-ink);
  }

  .ghost {
    background: transparent;
    border: 1px solid var(--line);
    color: #fff;
  }

  .rows {
    margin-top: var(--ds-space-4);
  }

  .rows li {
    display: flex;
    align-items: center;
    gap: var(--ds-space-2);
    min-height: 34px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    font-size: 12.5px;
    color: #d0d0d0;
  }

  .dot {
    width: 8px;
    height: 8px;
    flex: none;
  }

  .dot.ok {
    background: var(--success);
  }

  .dot.warn {
    background: var(--warn);
  }

  /* -------------------------------------------------------- 01 Kante */

  .demo[data-v='kante'] .card {
    border: 2px solid #fff;
    border-radius: 0;
  }

  .demo[data-v='kante'] .chip,
  .demo[data-v='kante'] .field input,
  .demo[data-v='kante'] .primary,
  .demo[data-v='kante'] .ghost {
    border-radius: 0;
  }

  .demo[data-v='kante'] .field input {
    border: 2px solid #fff;
  }

  .demo[data-v='kante'] .primary {
    border: 2px solid var(--brand);
  }

  .demo[data-v='kante'] .ghost {
    border: 2px solid rgba(255, 255, 255, 0.4);
  }

  /* ------------------------------------------------------- 02 Raster */

  .demo[data-v='raster'] .card {
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 6px;
  }

  .demo[data-v='raster'] .chip,
  .demo[data-v='raster'] .field input,
  .demo[data-v='raster'] .primary,
  .demo[data-v='raster'] .ghost {
    border-radius: 4px;
  }

  /* -------------------------------------------------------- 03 Weich */

  .demo[data-v='weich'] .card {
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 18px;
    background:
      linear-gradient(160deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0) 44%),
      #0b0b0b;
    box-shadow: 0 22px 50px rgba(0, 0, 0, 0.6);
  }

  .demo[data-v='weich'] .chip {
    border-radius: 999px;
  }

  .demo[data-v='weich'] .field input {
    border: 0;
    border-radius: 12px;
    background: #131313;
  }

  .demo[data-v='weich'] .primary,
  .demo[data-v='weich'] .ghost {
    border-radius: 12px;
  }

  /* ------------------------------------------------------- 04 Kissen */

  .demo[data-v='kissen'] .card {
    border: 0;
    border-radius: 24px;
    background: #0d0d0d;
    box-shadow:
      0 26px 60px rgba(0, 0, 0, 0.65),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }

  .demo[data-v='kissen'] .chip {
    border-radius: 999px;
  }

  .demo[data-v='kissen'] .field input {
    border: 0;
    border-radius: 16px;
    background: #050505;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.9);
  }

  .demo[data-v='kissen'] .primary {
    border: 0;
    border-radius: 16px;
    box-shadow: 0 10px 24px rgba(55, 181, 190, 0.22);
  }

  .demo[data-v='kissen'] .ghost {
    border: 0;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.06);
  }

  .demo[data-v='kissen'] .rows li {
    border-top: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }

  /* -------------------------------------------------------- 05 Pille */

  .demo[data-v='pille'] .card {
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 28px;
    background: #0a0a0a;
  }

  .demo[data-v='pille'] .chip {
    border-radius: 999px;
  }

  .demo[data-v='pille'] .field input {
    border: 0;
    border-radius: 18px;
    background: #131313;
  }

  .demo[data-v='pille'] .primary,
  .demo[data-v='pille'] .ghost {
    border-radius: 999px;
    padding-inline: var(--ds-space-5);
  }

  .demo[data-v='pille'] .rows li {
    border-top: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  }
</style>
