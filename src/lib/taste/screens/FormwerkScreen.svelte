<script lang="ts">
  import { resolve } from '$app/paths';
  import { account, devices, events, sections, sessions } from '#lib/taste/demo';
</script>

<div class="screen">
  <div class="wrap">
    <nav class="crumb">
      <a href={resolve('/taste')}>← Vergleich</a>
      <span>03 · Formwerk</span>
    </nav>

    <header class="head">
      <p class="kicker">Konto / {account.plan}</p>
      <h1>{account.name}</h1>
      <p class="sub">{account.email}</p>
      <span class="stamp">seit {account.memberSince}</span>
    </header>

    <div class="cols">
      <div class="main">
        <section>
          <div class="sec">
            <span class="num">01</span>
            <h2>Profil</h2>
          </div>
          <div class="rows">
            <div><span class="k">Name</span><span class="v">{account.name}</span></div>
            <div><span class="k">E-Mail</span><span class="v">{account.email}</span></div>
            <div><span class="k">Plan</span><span class="v">{account.plan}</span></div>
          </div>
          <button class="btn" type="button">Bearbeiten</button>
        </section>

        <section>
          <div class="sec">
            <span class="num">02</span>
            <h2>Sicherheit</h2>
          </div>
          <ul class="flags">
            <li>
              <svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="12" /></svg>
              <span class="v">Passwort gesetzt</span>
              <span class="date">12.11.2026</span>
            </li>
            <li>
              <svg viewBox="0 0 32 32" aria-hidden="true"><rect x="6" y="6" width="20" height="20" /></svg>
              <span class="v">Zwei Faktoren aktiv</span>
              <span class="date">App</span>
            </li>
            <li>
              <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 4 30 28H2Z" /></svg>
              <span class="v">Wiederherstellungscodes fehlen</span>
              <span class="date">Aktion</span>
            </li>
          </ul>
          <div class="acts">
            <button class="btn" type="button">Passwort ändern</button>
            <button class="btn" type="button">Codes erzeugen</button>
          </div>
        </section>

        <section>
          <div class="sec">
            <span class="num">03</span>
            <h2>Geräte</h2>
          </div>
          <ul class="devices">
            {#each devices as device}
              <li class:off={!device.active}>
                <svg viewBox="0 0 32 32" aria-hidden="true">
                  {#if device.active}
                    <rect x="7" y="7" width="18" height="18" />
                  {:else}
                    <path d="M16 4 30 28H2Z" />
                  {/if}
                </svg>
                <span class="v">{device.name}</span>
                <span class="place">{device.place}</span>
                <span class="date">{device.last}</span>
              </li>
            {/each}
          </ul>
        </section>

        <section class="danger">
          <div class="sec">
            <span class="num">04</span>
            <h2>Konto löschen</h2>
          </div>
          <p>Entfernt alle Daten endgültig. Nicht rückgängig zu machen.</p>
          <button class="btn danger" type="button">Konto löschen</button>
        </section>
      </div>

      <aside class="side">
        <div class="panel">
          <p class="k">Bereiche</p>
          <ul class="index">
            {#each sections as section}
              <li>{section}</li>
            {/each}
          </ul>
        </div>

        <div class="panel">
          <p class="k">Aktivität</p>
          <ul class="chart">
            {#each sessions as row}
              <li>
                <span class="bar" style="height: {row.value * 4}px"></span>
                <span class="chart-label">{row.value}</span>
              </li>
            {/each}
          </ul>
          <p class="chart-foot">Sitzungen pro Woche</p>
        </div>

        <div class="panel">
          <p class="k">Verlauf</p>
          <ul class="ev">
            {#each events as event}
              <li>
                <span class="mark" class:ok={event.tone === 'ok'} class:warn={event.tone === 'warn'} class:danger={event.tone === 'danger'}></span>
                <span>{event.label}</span>
                <span class="date">{event.date}</span>
              </li>
            {/each}
          </ul>
        </div>
      </aside>
    </div>
  </div>
</div>

<style>
  .screen {
    --ink: #ffffff;
    --dim: #cfcfcf;
    --line: rgba(255, 255, 255, 0.55);
    --line-hard: #ffffff;
    --grid: rgba(255, 255, 255, 0.14);
    --red: #ff7b7b;

    min-height: 100dvh;
    color: var(--ink);
    background-color: #000;
    /* Punktraster statt Linien: weniger Unruhe, gleiche Orientierung. */
    background-image: radial-gradient(var(--grid) 1px, transparent 1.2px);
    background-size: 26px 26px;
    background-position: 0 0;
  }

  .wrap {
    width: min(100% - 2 * var(--ds-space-6), 1160px);
    margin-inline: auto;
    padding: var(--ds-space-5) 0 var(--ds-space-11);
  }

  .crumb {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid var(--line-hard);
    font-family: var(--ds-font-mono);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    padding-bottom: var(--ds-space-3);
  }

  .crumb a {
    display: inline-flex;
    align-items: center;
    min-height: var(--ds-tap-min);
    color: var(--ink);
    text-decoration: none;
  }

  .head {
    position: relative;
    padding: var(--ds-space-7) 0 var(--ds-space-6);
    border-bottom: 2px solid var(--line-hard);
  }

  .kicker {
    font-family: var(--ds-font-mono);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    margin-bottom: var(--ds-space-2);
  }

  h1 {
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    line-height: 0.92;
    letter-spacing: -0.045em;
    text-transform: uppercase;
  }

  .sub {
    margin-top: var(--ds-space-2);
    font-size: 15px;
    color: var(--dim);
  }

  .stamp {
    position: absolute;
    right: 0;
    top: var(--ds-space-7);
    padding: 6px 12px;
    border: 2px solid var(--line-hard);
    font-family: var(--ds-font-mono);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    transform: rotate(-4deg);
  }

  .cols {
    display: grid;
    grid-template-columns: 1.7fr 1fr;
    gap: var(--ds-space-8);
    padding-top: var(--ds-space-6);
  }

  section {
    padding: var(--ds-space-5) 0;
    border-bottom: 1px solid var(--line);
  }

  .sec {
    display: flex;
    align-items: baseline;
    gap: var(--ds-space-3);
    margin-bottom: var(--ds-space-4);
  }

  .num {
    font-family: var(--ds-font-mono);
    font-size: 13px;
    font-weight: 700;
    border: 1.5px solid var(--line-hard);
    padding: 1px 5px;
  }

  h2 {
    font-size: 20px;
    letter-spacing: -0.01em;
    text-transform: uppercase;
    letter-spacing: 0.02em;
  }

  .rows {
    display: grid;
  }

  .rows > div {
    display: grid;
    grid-template-columns: 150px 1fr;
    gap: var(--ds-space-4);
    min-height: 46px;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.14);
  }

  .k {
    font-family: var(--ds-font-mono);
    font-size: 10.5px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--dim);
  }

  .v {
    font-size: 15px;
    font-weight: 700;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: var(--ds-tap-min);
    margin-top: var(--ds-space-4);
    padding: 0 var(--ds-space-4);
    border: 2px solid var(--line-hard);
    border-radius: 0;
    background: #000;
    color: var(--ink);
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    box-shadow: 5px 5px 0 rgba(255, 255, 255, 0.85);
    transition: transform 120ms ease, box-shadow 120ms ease;
  }

  .btn:hover {
    transform: translate(-2px, -2px);
    box-shadow: 7px 7px 0 #fff;
  }

  .btn:active {
    transform: translate(3px, 3px);
    box-shadow: 1px 1px 0 #fff;
  }

  .btn.danger {
    border-color: var(--red);
    color: var(--red);
    box-shadow: 5px 5px 0 rgba(255, 123, 123, 0.8);
  }

  .acts {
    display: flex;
    flex-wrap: wrap;
    gap: var(--ds-space-3);
  }

  .flags li,
  .devices li {
    display: grid;
    grid-template-columns: 26px 1fr auto;
    gap: var(--ds-space-3);
    align-items: center;
    min-height: 48px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.14);
  }

  .devices li {
    grid-template-columns: 26px 1.2fr 0.8fr auto;
  }

  svg {
    width: 20px;
    height: 20px;
    fill: none;
    stroke: var(--ink);
    stroke-width: 2.4;
  }

  .date {
    font-family: var(--ds-font-mono);
    font-size: 12px;
    font-weight: 700;
  }

  .place {
    font-size: 13px;
    color: var(--dim);
  }

  .off .v,
  .off .date {
    color: var(--dim);
  }

  .danger p {
    max-width: 46ch;
    font-size: 14px;
    color: var(--dim);
  }

  .side {
    display: grid;
    gap: var(--ds-space-4);
    align-content: start;
    padding-top: var(--ds-space-5);
  }

  .panel {
    border: 2px solid var(--line-hard);
    padding: var(--ds-space-4);
    background: #000;
  }

  .panel .k {
    margin-bottom: var(--ds-space-3);
  }

  .index li {
    min-height: 36px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.14);
    font-size: 14px;
    font-weight: 700;
  }

  .chart {
    display: flex;
    align-items: flex-end;
    gap: var(--ds-space-3);
    height: 110px;
    border-bottom: 2px solid var(--line-hard);
    padding-bottom: 2px;
  }

  .chart li {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 4px;
    flex: 1;
  }

  .bar {
    display: block;
    width: 100%;
    background: var(--ink);
  }

  .chart-label {
    font-family: var(--ds-font-mono);
    font-size: 11px;
    font-weight: 700;
  }

  .chart-foot {
    margin-top: var(--ds-space-2);
    font-size: 12px;
    color: var(--dim);
  }

  .ev li {
    display: grid;
    grid-template-columns: 12px 1fr;
    gap: var(--ds-space-2);
    padding: var(--ds-space-2) 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.14);
    font-size: 13px;
  }

  .ev .date {
    grid-column: 2;
    color: var(--dim);
  }

  .mark {
    width: 10px;
    height: 10px;
    margin-top: 4px;
    border: 2px solid var(--ink);
  }

  .mark.ok {
    background: var(--ink);
    border-radius: 999px;
  }

  .mark.warn {
    transform: rotate(45deg);
  }

  .mark.danger {
    border-color: var(--red);
    background: var(--red);
  }

  @media (max-width: 900px) {
    .cols {
      grid-template-columns: 1fr;
      gap: var(--ds-space-5);
    }

    .stamp {
      position: static;
      display: inline-block;
      margin-top: var(--ds-space-3);
    }

    .rows > div {
      grid-template-columns: 1fr;
      gap: 2px;
      padding: var(--ds-space-2) 0;
    }

    .devices li {
      grid-template-columns: 26px 1fr auto;
    }

    .place {
      display: none;
    }
  }
</style>
