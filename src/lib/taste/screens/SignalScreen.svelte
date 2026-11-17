<script lang="ts">
  import { resolve } from '$app/paths';
  import { account, devices, events, sessions } from '#lib/taste/demo';

  const stats = [
    { label: 'Sitzungen', value: String(sessions[0].value), tone: 'mint' },
    { label: 'Geräte', value: String(devices.length), tone: 'violet' },
    { label: 'Offen', value: '1', tone: 'gold' },
    { label: 'Plan', value: account.plan, tone: 'blue' }
  ];

  const toneOf = (tone: 'ok' | 'warn' | 'danger') =>
    tone === 'ok' ? 'mint' : tone === 'warn' ? 'gold' : 'red';
</script>

<div class="screen">
  <div class="wrap">
    <nav class="crumb">
      <a href={resolve('/taste')}>← Vergleich</a>
      <span>05 · Signal</span>
    </nav>

    <header class="head">
      <div class="avatar" aria-hidden="true">{account.initials}</div>
      <div class="who">
        <h1>{account.name}</h1>
        <p>{account.email}</p>
      </div>
      <span class="chip mint">Pro</span>
      <button class="btn" type="button">Bearbeiten</button>
    </header>

    <ul class="stats">
      {#each stats as stat}
        <li class="stat {stat.tone}">
          <span class="stat-label">{stat.label}</span>
          <span class="stat-value">{stat.value}</span>
        </li>
      {/each}
    </ul>

    <div class="grid">
      <section class="card mint">
        <div class="card-head">
          <h2>Sicherheit</h2>
          <span class="chip mint">geschützt</span>
        </div>
        <ul class="rows">
          <li class="mint">
            <span class="k">Passwort</span>
            <span class="v">12. November 2026</span>
            <span class="chip mint">ok</span>
          </li>
          <li class="mint">
            <span class="k">Zwei Faktoren</span>
            <span class="v">Authenticator-App</span>
            <span class="chip mint">ok</span>
          </li>
          <li class="gold">
            <span class="k">Wiederherstellung</span>
            <span class="v">Codes fehlen</span>
            <span class="chip gold">offen</span>
          </li>
        </ul>
        <div class="acts">
          <button class="btn" type="button">Passwort ändern</button>
          <button class="btn solid" type="button">Codes erzeugen</button>
        </div>
      </section>

      <section class="card violet">
        <div class="card-head">
          <h2>Geräte</h2>
          <span class="chip violet">{devices.length}</span>
        </div>
        <ul class="rows">
          {#each devices as device}
            <li class={device.active ? 'mint' : 'violet'}>
              <span class="k">{device.name}</span>
              <span class="v">{device.place}</span>
              <span class="chip" class:mint={device.active} class:violet={!device.active}>
                {device.active ? 'aktiv' : 'inaktiv'}
              </span>
            </li>
          {/each}
        </ul>
        <p class="foot">Zuletzt: {devices[0].last}</p>
      </section>

      <section class="card blue wide">
        <div class="card-head">
          <h2>Aktivität</h2>
          <span class="chip blue">30 Tage</span>
        </div>
        <div class="chart" role="img" aria-label="Sitzungen pro Woche: 14, 9, 21">
          {#each sessions as row}
            <div class="col">
              <span class="bar" style="height: {row.value * 4}px"></span>
              <span class="cap">{row.label}</span>
              <span class="count">{row.value}</span>
            </div>
          {/each}
        </div>
      </section>

      <section class="card wide">
        <div class="card-head">
          <h2>Verlauf</h2>
          <span class="chip">letzte Einträge</span>
        </div>
        <ul class="events">
          {#each events as event}
            <li>
              <span class="chip {toneOf(event.tone)}">{event.tone === 'ok' ? 'ok' : event.tone === 'warn' ? 'warn' : 'fehler'}</span>
              <span class="v">{event.label}</span>
              <span class="date">{event.date}</span>
            </li>
          {/each}
        </ul>
      </section>

      <section class="card red wide">
        <div class="card-head">
          <h2>Konto löschen</h2>
          <span class="chip red">endgültig</span>
        </div>
        <p class="foot">Entfernt alle Daten dauerhaft. Das lässt sich nicht rückgängig machen.</p>
        <button class="btn danger" type="button">Konto löschen</button>
      </section>
    </div>
  </div>
</div>

<style>
  .screen {
    --ink: #ffffff;
    --dim: #d2d2d2;
    --edge: rgba(255, 255, 255, 0.12);
    --mint: #6fe89e;
    --violet: #c4a4ff;
    --gold: #ffbf5c;
    --red: #ff7b7b;
    --blue: #79b8ff;

    min-height: 100dvh;
    background: #000;
    color: var(--ink);
  }

  .wrap {
    width: min(100% - 2 * var(--ds-space-6), 1120px);
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
    padding-bottom: var(--ds-space-4);
    border-bottom: 1px solid var(--edge);
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

  .head {
    display: flex;
    align-items: center;
    gap: var(--ds-space-4);
    flex-wrap: wrap;
    padding: var(--ds-space-6) 0;
    border-bottom: 1px solid var(--edge);
  }

  .avatar {
    width: 64px;
    height: 64px;
    flex: none;
    display: grid;
    place-items: center;
    border-radius: 18px;
    border: 1px solid rgba(111, 232, 158, 0.4);
    background: linear-gradient(150deg, rgba(111, 232, 158, 0.18), rgba(121, 184, 255, 0.12));
    font-size: 22px;
    font-weight: 700;
  }

  .who {
    flex: 1;
    min-width: 200px;
  }

  h1 {
    font-size: 30px;
    letter-spacing: -0.03em;
    line-height: 1.05;
  }

  .who p {
    margin-top: 2px;
    font-size: 14px;
    color: var(--dim);
  }

  .stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--ds-space-3);
    padding: var(--ds-space-5) 0;
  }

  .stat {
    display: grid;
    gap: 2px;
    padding: var(--ds-space-3) var(--ds-space-4);
    border: 1px solid var(--edge);
    border-left: 3px solid currentColor;
    border-radius: 10px;
    background: #0a0a0a;
  }

  .stat-label {
    font-family: var(--ds-font-mono);
    font-size: 10.5px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--dim);
  }

  .stat-value {
    font-size: 26px;
    font-weight: 700;
    letter-spacing: -0.03em;
    color: var(--ink);
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--ds-space-3);
  }

  .card {
    padding: var(--ds-space-5);
    border: 1px solid var(--edge);
    border-left: 3px solid currentColor;
    border-radius: 14px;
    background: #080808;
  }

  .wide {
    grid-column: 1 / -1;
  }

  .card-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--ds-space-3);
    margin-bottom: var(--ds-space-3);
  }

  h2 {
    font-size: 18px;
    color: var(--ink);
  }

  .rows li,
  .events li {
    display: grid;
    grid-template-columns: 1.1fr 1fr auto;
    gap: var(--ds-space-3);
    align-items: center;
    min-height: 52px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    color: var(--ink);
  }

  .k {
    font-size: 13px;
    font-weight: 700;
    color: var(--dim);
  }

  .v {
    font-size: 14px;
    font-weight: 700;
  }

  .chip {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 3px 9px;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.22);
    background: rgba(255, 255, 255, 0.05);
    color: var(--ink);
    font-family: var(--ds-font-mono);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .chip.mint,
  .mint .chip.mint {
    color: #04140b;
    background: var(--mint);
    border-color: var(--mint);
  }

  .chip.gold {
    color: #241600;
    background: var(--gold);
    border-color: var(--gold);
  }

  .chip.violet {
    color: #120a24;
    background: var(--violet);
    border-color: var(--violet);
  }

  .chip.red {
    color: #240404;
    background: var(--red);
    border-color: var(--red);
  }

  .chip.blue {
    color: #04121f;
    background: var(--blue);
    border-color: var(--blue);
  }

  .mint {
    color: var(--mint);
  }

  .violet {
    color: var(--violet);
  }

  .gold {
    color: var(--gold);
  }

  .red {
    color: var(--red);
  }

  .blue {
    color: var(--blue);
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: var(--ds-tap-min);
    padding: 0 var(--ds-space-4);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    background: transparent;
    color: var(--ink);
    font-size: 14px;
    font-weight: 700;
  }

  .btn:hover {
    border-color: var(--ink);
    background: #121212;
  }

  .btn.solid {
    background: var(--mint);
    border-color: var(--mint);
    color: #04140b;
  }

  .btn.danger {
    border-color: rgba(255, 123, 123, 0.6);
    color: var(--red);
    background: rgba(255, 123, 123, 0.08);
  }

  .acts {
    display: flex;
    flex-wrap: wrap;
    gap: var(--ds-space-2);
    margin-top: var(--ds-space-4);
  }

  .foot {
    margin-top: var(--ds-space-3);
    font-size: 13px;
    color: var(--dim);
  }

  .chart {
    display: flex;
    align-items: flex-end;
    gap: var(--ds-space-6);
    height: 170px;
    padding-top: var(--ds-space-3);
  }

  .col {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    gap: 4px;
  }

  .bar {
    display: block;
    width: 100%;
    border-radius: 6px 6px 0 0;
    background: linear-gradient(180deg, var(--blue), rgba(121, 184, 255, 0.35));
  }

  .cap {
    font-size: 12px;
    color: var(--dim);
  }

  .count {
    font-size: 18px;
    font-weight: 700;
    color: var(--blue);
  }

  .events li {
    grid-template-columns: 86px 1fr auto;
  }

  .date {
    font-family: var(--ds-font-mono);
    font-size: 12px;
    color: var(--dim);
    white-space: nowrap;
  }

  @media (max-width: 860px) {
    .stats {
      grid-template-columns: repeat(2, 1fr);
    }

    .grid {
      grid-template-columns: 1fr;
    }

    .rows li,
    .events li {
      grid-template-columns: 1fr auto;
      gap: 2px var(--ds-space-3);
      padding: var(--ds-space-2) 0;
    }

    .k {
      grid-column: 1 / -1;
    }

    .events li {
      grid-template-columns: 1fr;
    }

    .events .date {
      grid-column: 1;
    }
  }
</style>
