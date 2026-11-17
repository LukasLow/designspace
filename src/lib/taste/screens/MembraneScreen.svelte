<script lang="ts">
  import { resolve } from '$app/paths';
  import { account, devices, events, sessions } from '#lib/taste/demo';
</script>

<div class="screen">
  <div class="glow" aria-hidden="true"></div>

  <div class="wrap">
    <nav class="crumb">
      <a href={resolve('/taste')}>← Vergleich</a>
      <span>02 · Membrane</span>
    </nav>

    <header class="hero">
      <div class="avatar" aria-hidden="true">{account.initials}</div>
      <div class="who">
        <p class="kicker">Konto</p>
        <h1>{account.name}</h1>
        <p class="mail">{account.email}</p>
        <span class="chip">{account.plan} · seit {account.memberSince}</span>
      </div>
      <button class="btn primary" type="button">Profil bearbeiten</button>
    </header>

    <div class="grid">
      <section class="card">
        <div class="card-head">
          <h2>Sicherheit</h2>
          <span class="pill ok">Geschützt</span>
        </div>
        <ul class="items">
          <li>
            <span class="label">Passwort</span>
            <span class="value">12. November 2026</span>
            <button class="ghost" type="button">Ändern</button>
          </li>
          <li>
            <span class="label">Zwei Faktoren</span>
            <span class="value">Authenticator-App</span>
            <button class="ghost" type="button">Verwalten</button>
          </li>
          <li>
            <span class="label">Wiederherstellung</span>
            <span class="value warn">Codes fehlen</span>
            <button class="ghost" type="button">Erzeugen</button>
          </li>
        </ul>
      </section>

      <section class="card">
        <div class="card-head">
          <h2>Aktivität</h2>
          <span class="meta">30 Tage</span>
        </div>
        <ul class="bars">
          {#each sessions as row}
            <li>
              <span class="label">{row.label}</span>
              <span class="track"><span class="fill" style="width: {Math.min(row.value * 4, 100)}%"></span></span>
              <span class="value">{row.value}</span>
            </li>
          {/each}
        </ul>
      </section>
    </div>

    <section class="card wide">
      <div class="card-head">
        <h2>Geräte</h2>
        <span class="meta">{devices.length} angemeldet</span>
      </div>
      <ul class="devices">
        {#each devices as device}
          <li>
            <span class="dot" class:on={device.active}></span>
            <span class="device">
              <strong>{device.name}</strong>
              <span class="label">{device.place}</span>
            </span>
            <span class="value">{device.last}</span>
            <button class="ghost" type="button" disabled={!device.active}>Abmelden</button>
          </li>
        {/each}
      </ul>
    </section>

    <section class="card wide">
      <div class="card-head">
        <h2>Verlauf</h2>
        <span class="meta">letzte Einträge</span>
      </div>
      <ul class="events">
        {#each events as event}
          <li>
            <span class="dot" class:on={event.tone === 'ok'} class:warn={event.tone === 'warn'} class:danger={event.tone === 'danger'}></span>
            <span class="event">{event.label}</span>
            <span class="value">{event.date}</span>
          </li>
        {/each}
      </ul>
    </section>

    <section class="card wide danger">
      <h2>Konto löschen</h2>
      <p>Entfernt alle Daten endgültig. Das lässt sich nicht rückgängig machen.</p>
      <button class="btn danger" type="button">Konto löschen</button>
    </section>
  </div>
</div>

<style>
  .screen {
    --mint: #6fe89e;
    --violet: #c4a4ff;
    --gold: #ffbf5c;
    --red: #ff7b7b;
    --ink: #ffffff;
    --dim: #d0d0d0;
    --edge: rgba(255, 255, 255, 0.14);
    --edge-soft: rgba(255, 255, 255, 0.07);

    position: relative;
    min-height: 100dvh;
    background: #000;
    color: var(--ink);
    overflow: hidden;
  }

  .glow {
    position: absolute;
    inset: -20% -10% auto;
    height: 620px;
    background:
      radial-gradient(420px 320px at 22% 20%, rgba(111, 232, 158, 0.16), transparent 70%),
      radial-gradient(520px 380px at 78% 0%, rgba(196, 164, 255, 0.12), transparent 72%);
    pointer-events: none;
  }

  .wrap {
    position: relative;
    width: min(100% - 2 * var(--ds-space-6), 960px);
    margin-inline: auto;
    padding: var(--ds-space-5) 0 var(--ds-space-11);
  }

  .crumb {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: var(--ds-font-mono);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--dim);
    padding-bottom: var(--ds-space-5);
  }

  .crumb a {
    display: inline-flex;
    align-items: center;
    min-height: var(--ds-tap-min);
    color: var(--dim);
    text-decoration: none;
  }

  .crumb a:hover {
    color: var(--ink);
  }

  .hero {
    display: flex;
    align-items: center;
    gap: var(--ds-space-6);
    flex-wrap: wrap;
    padding: var(--ds-space-7);
    border: 1px solid var(--edge);
    border-radius: 30px;
    background:
      linear-gradient(160deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0) 46%),
      radial-gradient(120% 140% at 0% 0%, #191919, #0a0a0a 62%);
    box-shadow:
      0 40px 90px rgba(0, 0, 0, 0.7),
      inset 0 1px 0 rgba(255, 255, 255, 0.12);
  }

  .avatar {
    width: 92px;
    height: 92px;
    flex: none;
    display: grid;
    place-items: center;
    border-radius: 999px;
    background: linear-gradient(150deg, #2a2a2a, #111);
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow:
      0 0 0 8px rgba(111, 232, 158, 0.08),
      0 18px 40px rgba(0, 0, 0, 0.8),
      inset 0 1px 0 rgba(255, 255, 255, 0.24);
    font-size: 32px;
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  .who {
    flex: 1;
    min-width: 220px;
  }

  .kicker {
    font-family: var(--ds-font-mono);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--mint);
    margin-bottom: var(--ds-space-2);
  }

  h1 {
    font-size: 36px;
    line-height: 1.05;
    letter-spacing: -0.03em;
  }

  .mail {
    margin-top: var(--ds-space-1);
    font-size: 15px;
    color: var(--dim);
  }

  .chip {
    display: inline-flex;
    align-items: center;
    margin-top: var(--ds-space-3);
    padding: 5px 12px;
    border: 1px solid rgba(111, 232, 158, 0.42);
    border-radius: 999px;
    background: rgba(111, 232, 158, 0.1);
    color: var(--mint);
    font-size: 13px;
    font-weight: 700;
  }

  .grid {
    display: grid;
    grid-template-columns: 1.35fr 1fr;
    gap: var(--ds-space-4);
    margin-top: var(--ds-space-4);
  }

  .card {
    padding: var(--ds-space-6);
    border: 1px solid var(--edge-soft);
    border-radius: 26px;
    background:
      linear-gradient(160deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0) 40%),
      #0b0b0b;
    box-shadow:
      0 30px 70px rgba(0, 0, 0, 0.6),
      inset 0 1px 0 rgba(255, 255, 255, 0.08);
  }

  .wide {
    margin-top: var(--ds-space-4);
  }

  .card-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--ds-space-3);
    margin-bottom: var(--ds-space-4);
  }

  h2 {
    font-size: 19px;
    letter-spacing: -0.015em;
  }

  .meta,
  .pill {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .meta {
    color: var(--dim);
  }

  .pill {
    padding: 4px 10px;
    border-radius: 999px;
    border: 1px solid rgba(111, 232, 158, 0.4);
    background: rgba(111, 232, 158, 0.1);
    color: var(--mint);
  }

  .items li,
  .devices li,
  .events li {
    display: flex;
    align-items: center;
    gap: var(--ds-space-3);
    min-height: 56px;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
  }

  .items li,
  .devices li {
    justify-content: space-between;
  }

  .label {
    font-size: 13px;
    font-weight: 700;
    color: var(--dim);
  }

  .value {
    font-size: 14px;
    font-weight: 700;
  }

  .value.warn {
    color: var(--gold);
  }

  .bars {
    display: grid;
    gap: var(--ds-space-3);
  }

  .bars li {
    display: grid;
    grid-template-columns: 100px 1fr 32px;
    align-items: center;
    gap: var(--ds-space-3);
  }

  .track {
    height: 10px;
    border-radius: 999px;
    background: #1b1b1b;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.8);
    overflow: hidden;
  }

  .fill {
    display: block;
    height: 100%;
    border-radius: 999px;
    background: linear-gradient(90deg, rgba(111, 232, 158, 0.55), var(--mint));
    box-shadow: 0 0 18px rgba(111, 232, 158, 0.4);
  }

  .bars .value {
    text-align: right;
  }

  .device {
    display: grid;
    gap: 2px;
    flex: 1;
    font-size: 15px;
  }

  .devices .value {
    min-width: 110px;
  }

  .events .event {
    flex: 1;
    font-size: 15px;
  }

  .dot {
    width: 10px;
    height: 10px;
    flex: none;
    border-radius: 999px;
    background: #333;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.04);
  }

  .dot.on {
    background: var(--mint);
    box-shadow: 0 0 12px rgba(111, 232, 158, 0.6);
  }

  .dot.warn {
    background: var(--gold);
    box-shadow: 0 0 12px rgba(255, 191, 92, 0.5);
  }

  .dot.danger {
    background: var(--red);
    box-shadow: 0 0 12px rgba(255, 123, 123, 0.5);
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: var(--ds-tap-min);
    padding: 0 var(--ds-space-5);
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.22);
    background: rgba(255, 255, 255, 0.04);
    color: var(--ink);
    font-size: 14px;
    font-weight: 700;
  }

  .btn.primary {
    background: var(--mint);
    border-color: var(--mint);
    color: #04140b;
    box-shadow: 0 16px 36px rgba(111, 232, 158, 0.22);
  }

  .btn.danger {
    border-color: rgba(255, 123, 123, 0.5);
    color: var(--red);
    background: rgba(255, 123, 123, 0.07);
  }

  .ghost {
    display: inline-flex;
    align-items: center;
    min-height: var(--ds-tap-min);
    padding: 0 var(--ds-space-3);
    border-radius: 999px;
    border: 1px solid transparent;
    background: transparent;
    color: var(--dim);
    font-size: 13px;
    font-weight: 700;
  }

  .ghost:hover {
    border-color: rgba(255, 255, 255, 0.2);
    color: var(--ink);
  }

  .ghost:disabled {
    opacity: 0.5;
  }

  .danger h2 {
    margin-bottom: var(--ds-space-2);
  }

  .danger p {
    max-width: 52ch;
    font-size: 14px;
    color: var(--dim);
    margin-bottom: var(--ds-space-4);
  }

  @media (max-width: 820px) {
    .grid {
      grid-template-columns: 1fr;
    }

    .hero {
      padding: var(--ds-space-5);
    }

    h1 {
      font-size: 28px;
    }

    .items li {
      flex-wrap: wrap;
      padding: var(--ds-space-2) 0;
    }

    .devices .value {
      min-width: 0;
    }
  }
</style>
