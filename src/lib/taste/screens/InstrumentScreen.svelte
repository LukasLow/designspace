<script lang="ts">
  import { resolve } from '$app/paths';
  import { account, devices, events, sections } from '#lib/taste/demo';
</script>

<div class="screen">
  <div class="wrap">
    <nav class="crumb">
      <a href={resolve('/taste')}>← Vergleich</a>
      <span>01 · Instrument</span>
    </nav>

    <header class="head">
      <div>
        <p class="kicker">Konto</p>
        <h1>{account.name}</h1>
        <p class="sub">{account.email} · {account.plan} seit {account.memberSince}</p>
      </div>
      <button class="btn primary" type="button">Speichern</button>
    </header>

    <div class="cols">
      <nav class="rail" aria-label="Konto-Bereiche">
        {#each sections as section, i}
          <button type="button" class:on={i === 0} aria-current={i === 0 ? 'page' : undefined}>
            {section}
          </button>
        {/each}
      </nav>

      <div class="body">
        <section id="Profil">
          <div class="sec">
            <h2>Profil</h2>
            <span class="n">01</span>
          </div>
          <dl class="rows">
            <div><dt>Name</dt><dd>{account.name}</dd></div>
            <div><dt>E-Mail</dt><dd>{account.email}</dd></div>
            <div><dt>Plan</dt><dd class="val">{account.plan}</dd></div>
            <div><dt>Mitglied seit</dt><dd class="val">{account.memberSince}</dd></div>
          </dl>
        </section>

        <section id="Sicherheit">
          <div class="sec">
            <h2>Sicherheit</h2>
            <span class="n">02</span>
          </div>
          <dl class="rows">
            <div><dt>Passwort</dt><dd>zuletzt geändert 12.11.2026</dd></div>
            <div>
              <dt>Zwei Faktoren</dt>
              <dd><span class="dot ok"></span>Aktiv · App</dd>
            </div>
            <div>
              <dt>Wiederherstellung</dt>
              <dd><span class="dot warn"></span>Codes fehlen</dd>
            </div>
          </dl>
          <div class="acts">
            <button class="btn" type="button">Passwort ändern</button>
            <button class="btn" type="button">Codes erzeugen</button>
          </div>
        </section>

        <section id="Geräte">
          <div class="sec">
            <h2>Geräte</h2>
            <span class="n">03</span>
          </div>
          <table>
            <thead>
              <tr><th>Gerät</th><th>Ort</th><th>Zuletzt</th><th>Status</th></tr>
            </thead>
            <tbody>
              {#each devices as device}
                <tr>
                  <td>{device.name}</td>
                  <td>{device.place}</td>
                  <td class="val">{device.last}</td>
                  <td>
                    <span class="dot" class:ok={device.active} class:warn={!device.active}></span>
                    {device.active ? 'aktiv' : 'inaktiv'}
                  </td>
                </tr>
              {/each}
            </tbody>
          </table>
        </section>

        <section id="Verlauf">
          <div class="sec">
            <h2>Verlauf</h2>
            <span class="n">04</span>
          </div>
          <ul class="log">
            {#each events as event}
              <li>
                <span class="dot" class:ok={event.tone === 'ok'} class:warn={event.tone === 'warn'} class:danger={event.tone === 'danger'}></span>
                <span>{event.label}</span>
                <span class="val">{event.date}</span>
              </li>
            {/each}
          </ul>
        </section>

        <section id="Abrechnung" class="danger">
          <div class="sec">
            <h2>Konto löschen</h2>
            <span class="n">05</span>
          </div>
          <p class="sub">Entfernt alle Daten endgültig. Das lässt sich nicht rückgängig machen.</p>
          <button class="btn danger" type="button">Konto löschen</button>
        </section>
      </div>
    </div>
  </div>
</div>

<style>
  .screen {
    --ink: #ffffff;
    --dim: #c9c9c9;
    --line: rgba(255, 255, 255, 0.16);
    --line-soft: rgba(255, 255, 255, 0.07);
    --surf: #0b0b0b;
    --ok: #ffffff;
    --warn: #ffbf5c;
    --danger: #ff7b7b;

    min-height: 100dvh;
    background: #000;
    color: var(--ink);
    font-size: 15px;
  }

  .wrap {
    width: min(100% - 2 * var(--ds-space-6), 1100px);
    margin-inline: auto;
    padding: var(--ds-space-5) 0 var(--ds-space-11);
  }

  .crumb {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--ds-space-4);
    padding-bottom: var(--ds-space-4);
    border-bottom: 1px solid var(--line);
    font-family: var(--ds-font-mono);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
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
    align-items: flex-end;
    justify-content: space-between;
    gap: var(--ds-space-6);
    padding: var(--ds-space-6) 0 var(--ds-space-5);
    border-bottom: 1px solid var(--line);
  }

  .kicker {
    font-family: var(--ds-font-mono);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--dim);
    margin-bottom: var(--ds-space-2);
  }

  h1 {
    font-size: 34px;
    line-height: 1.05;
    letter-spacing: -0.03em;
  }

  .sub {
    margin-top: var(--ds-space-2);
    font-size: 14px;
    color: var(--dim);
  }

  .cols {
    display: grid;
    grid-template-columns: 180px 1fr;
    gap: var(--ds-space-8);
    padding-top: var(--ds-space-6);
  }

  .rail {
    display: grid;
    gap: 2px;
    align-content: start;
    position: sticky;
    top: var(--ds-space-5);
  }

  .rail button {
    display: flex;
    align-items: center;
    width: 100%;
    min-height: var(--ds-tap-min);
    padding: 0 var(--ds-space-3);
    border: 0;
    border-left: 2px solid transparent;
    background: transparent;
    color: var(--dim);
    font-size: 14px;
    font-weight: 700;
    text-align: left;
    text-decoration: none;
  }

  .rail button:hover {
    color: var(--ink);
    background: #0e0e0e;
  }

  .rail button.on {
    color: var(--ink);
    border-left-color: var(--ink);
    background: #0e0e0e;
  }

  section {
    padding: var(--ds-space-5) 0;
    border-top: 1px solid var(--line);
  }

  section:first-child {
    border-top: 0;
    padding-top: 0;
  }

  .sec {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: var(--ds-space-4);
    margin-bottom: var(--ds-space-3);
  }

  h2 {
    font-size: 18px;
    letter-spacing: -0.01em;
  }

  .n {
    font-family: var(--ds-font-mono);
    font-size: 11px;
    font-weight: 700;
    color: var(--dim);
  }

  .rows {
    display: grid;
  }

  .rows > div {
    display: grid;
    grid-template-columns: 190px 1fr;
    gap: var(--ds-space-4);
    align-items: center;
    min-height: 44px;
    border-bottom: 1px solid var(--line-soft);
  }

  dt {
    font-family: var(--ds-font-mono);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--dim);
  }

  dd {
    margin: 0;
    display: flex;
    align-items: center;
    gap: var(--ds-space-2);
    font-size: 15px;
  }

  .val {
    font-weight: 700;
  }

  .dot {
    width: 9px;
    height: 9px;
    flex: none;
    border: 1.5px solid currentColor;
    background: transparent;
  }

  .dot.ok {
    background: var(--ok);
    color: var(--ok);
    border-radius: 1px;
  }

  .dot.warn {
    background: var(--warn);
    color: var(--warn);
    transform: rotate(45deg);
  }

  .dot.danger {
    background: var(--danger);
    color: var(--danger);
    border-radius: 999px;
  }

  .acts {
    display: flex;
    flex-wrap: wrap;
    gap: var(--ds-space-2);
    margin-top: var(--ds-space-4);
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: var(--ds-tap-min);
    padding: 0 var(--ds-space-4);
    border: 1px solid rgba(255, 255, 255, 0.36);
    border-radius: 6px;
    background: transparent;
    color: var(--ink);
    font-size: 14px;
    font-weight: 700;
  }

  .btn:hover {
    border-color: var(--ink);
    background: #121212;
  }

  .btn.primary {
    background: var(--ink);
    border-color: var(--ink);
    color: #000;
  }

  .btn.danger {
    border-color: rgba(255, 123, 123, 0.5);
    color: var(--danger);
  }

  table {
    font-size: 14px;
  }

  th {
    padding: 0 0 var(--ds-space-2);
    border-bottom: 1px solid var(--line);
    font-family: var(--ds-font-mono);
    font-size: 10.5px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--dim);
    text-align: left;
  }

  td {
    padding: var(--ds-space-3) 0;
    border-bottom: 1px solid var(--line-soft);
    vertical-align: middle;
  }

  td:last-child {
    display: flex;
    align-items: center;
    gap: var(--ds-space-2);
  }

  .log li {
    display: grid;
    grid-template-columns: 14px 1fr auto;
    gap: var(--ds-space-3);
    align-items: center;
    min-height: 40px;
    border-bottom: 1px solid var(--line-soft);
    font-size: 14px;
  }

  .danger .sub {
    max-width: 48ch;
    margin-bottom: var(--ds-space-4);
  }

  @media (max-width: 860px) {
    .cols {
      grid-template-columns: 1fr;
      gap: var(--ds-space-5);
    }

    .rail {
      display: flex;
      overflow-x: auto;
      position: static;
      gap: 0;
      border-bottom: 1px solid var(--line);
    }

    .rail button {
      white-space: nowrap;
      border-left: 0;
      border-bottom: 2px solid transparent;
      padding: 0 var(--ds-space-4);
    }

    .rail button.on {
      border-left: 0;
      border-bottom-color: var(--ink);
    }

    .head {
      flex-direction: column;
      align-items: flex-start;
    }

    .rows > div {
      grid-template-columns: 1fr;
      gap: 2px;
      padding: var(--ds-space-3) 0;
      min-height: 0;
    }
  }
</style>
