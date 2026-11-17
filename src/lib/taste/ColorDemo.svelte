<script lang="ts">
  import type { ColorVariant } from './color-variants';

  let { variant }: { variant: ColorVariant } = $props();
</script>

<div class="demo" data-c={variant}>
  <div class="panel">
    <div class="top">
      <span class="kicker">Konto</span>
      <span class="chip">geschützt</span>
    </div>

    <p class="big">14</p>
    <p class="sub">Sitzungen diese Woche · <span class="acc">+3</span></p>

    <div class="row">
      <button class="primary" type="button">Speichern</button>
      <button class="ghost" type="button">Abbrechen</button>
    </div>

    <label class="field">
      <span>E-Mail</span>
      <input value="lena.hoffmann@example.com" readonly />
    </label>

    <ul class="states">
      <li><span class="dot ok"></span>Passwort gesetzt</li>
      <li><span class="dot warn"></span>Wiederherstellungscodes fehlen</li>
      <li><span class="dot danger"></span>Anmeldung fehlgeschlagen</li>
    </ul>

    <div class="meter" aria-hidden="true"><span></span></div>

    <a class="link" href="#top">Alle Sitzungen ansehen →</a>
  </div>
</div>

<style>
  .demo {
    --acc: #00c98a;
    --ink: #00140d;
    --soft: rgba(0, 201, 138, 0.12);
    --line: rgba(0, 201, 138, 0.45);
    --glow: none;

    display: grid;
  }

  .demo[data-c='blatt'] {
    --acc: #3fbf6f;
    --ink: #04130a;
    --soft: rgba(63, 191, 111, 0.12);
    --line: rgba(63, 191, 111, 0.45);
  }

  .demo[data-c='mitte'] {
    --acc: #00c98a;
    --ink: #00140d;
    --soft: rgba(0, 201, 138, 0.12);
    --line: rgba(0, 201, 138, 0.45);
  }

  .demo[data-c='neon'] {
    --acc: #00e89a;
    --ink: #00170f;
    --soft: rgba(0, 232, 154, 0.14);
    --line: rgba(0, 232, 154, 0.5);
    --glow: 0 0 26px rgba(0, 232, 154, 0.32);
  }

  .demo[data-c='powerade'] {
    --acc: #00a8e8;
    --ink: #001018;
    --soft: rgba(0, 168, 232, 0.13);
    --line: rgba(0, 168, 232, 0.45);
  }

  .demo[data-c='tief'] {
    --acc: #0e9f78;
    --ink: #00120c;
    --soft: rgba(14, 159, 120, 0.14);
    --line: rgba(14, 159, 120, 0.5);
  }

  .panel {
    padding: var(--ds-space-5);
    border: 1px solid rgba(255, 255, 255, 0.14);
    background: #080808;
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
    padding: 3px 9px;
    border: 1px solid var(--line);
    background: var(--soft);
    color: var(--acc);
    font-family: var(--ds-font-mono);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .big {
    margin-top: var(--ds-space-4);
    font-size: 56px;
    font-weight: 700;
    line-height: 0.9;
    letter-spacing: -0.05em;
    color: var(--acc);
    text-shadow: var(--glow);
  }

  .sub {
    margin-top: var(--ds-space-2);
    font-size: 13px;
    color: #d0d0d0;
  }

  .acc {
    color: var(--acc);
    font-weight: 700;
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
    border-radius: 0;
    cursor: pointer;
  }

  .primary {
    border: 2px solid var(--acc);
    background: var(--acc);
    color: var(--ink);
    box-shadow: var(--glow);
  }

  .ghost {
    border: 2px solid var(--line);
    background: transparent;
    color: var(--acc);
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
    min-height: 46px;
    padding: 0 12px;
    border: 2px solid var(--line);
    border-radius: 0;
    background: #000;
    color: #fff;
    font: inherit;
    font-size: 14px;
  }

  .field input:focus-visible {
    outline: 3px solid var(--acc);
    outline-offset: 2px;
  }

  .states {
    margin-top: var(--ds-space-4);
    display: grid;
    gap: 2px;
  }

  .states li {
    display: flex;
    align-items: center;
    gap: var(--ds-space-2);
    min-height: 32px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    font-size: 13px;
    color: #d0d0d0;
  }

  .dot {
    width: 8px;
    height: 8px;
    flex: none;
  }

  .dot.ok {
    background: var(--acc);
    box-shadow: var(--glow);
  }

  .dot.warn {
    background: #ffbf5c;
  }

  .dot.danger {
    background: #ff7b7b;
  }

  .meter {
    margin-top: var(--ds-space-4);
    height: 8px;
    background: #161616;
  }

  .meter span {
    display: block;
    width: 62%;
    height: 100%;
    background: var(--acc);
    box-shadow: var(--glow);
  }

  .link {
    display: inline-flex;
    align-items: center;
    min-height: var(--ds-tap-min);
    margin-top: var(--ds-space-2);
    color: var(--acc);
    font-size: 13px;
    font-weight: 700;
    text-decoration: none;
    border-bottom: 1.5px solid var(--line);
  }

  .link:hover {
    border-color: var(--acc);
  }
</style>
