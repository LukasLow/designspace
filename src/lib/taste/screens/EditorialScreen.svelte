<script lang="ts">
  import { resolve } from '$app/paths';
  import { account, devices, events, sections, sessions } from '#lib/taste/demo';
</script>

<div class="screen">
  <div class="wrap">
    <nav class="crumb">
      <a href={resolve('/taste')}>← Vergleich</a>
      <span>04 · Editorial</span>
    </nav>

    <header class="masthead">
      <p class="kicker">Konto · {account.plan}</p>
      <h1>Lena<br /><em>Hoffmann.</em></h1>
      <p class="stand">Berlin · Mitglied seit {account.memberSince} · {account.email}</p>
    </header>

    <div class="cols">
      <div class="main">
        <section>
          <p class="no">01</p>
          <h2>Profil</h2>
          <dl class="deflist">
            <div><dt>Name</dt><dd>Lena Hoffmann</dd></div>
            <div><dt>E-Mail</dt><dd>{account.email}</dd></div>
            <div><dt>Plan</dt><dd>{account.plan} · {account.memberSince}</dd></div>
          </dl>
        </section>

        <section>
          <p class="no">02</p>
          <h2>Sicherheit</h2>
          <p class="lede">
            Das Konto ist geschützt. Ein Punkt bleibt offen: die Wiederherstellungscodes fehlen.
          </p>
          <ul class="lines">
            <li>
              <span class="mark">Passwort</span>
              <span class="val">zuletzt geändert am 12. November 2026</span>
              <span class="state">in Ordnung</span>
            </li>
            <li>
              <span class="mark">Zwei Faktoren</span>
              <span class="val">Authenticator-App, aktiv</span>
              <span class="state">in Ordnung</span>
            </li>
            <li>
              <span class="mark">Wiederherstellung</span>
              <span class="val">keine Codes hinterlegt</span>
              <span class="state warn">offen</span>
            </li>
          </ul>
          <div class="acts">
            <button class="link" type="button">Passwort ändern</button>
            <button class="link" type="button">Codes erzeugen</button>
          </div>
        </section>

        <section>
          <p class="no">03</p>
          <h2>Geräte</h2>
          <table>
            <thead>
              <tr><th>Gerät</th><th>Ort</th><th>Zuletzt</th></tr>
            </thead>
            <tbody>
              {#each devices as device}
                <tr>
                  <td>{device.name}</td>
                  <td>{device.place}</td>
                  <td class="num">{device.last}</td>
                </tr>
              {/each}
            </tbody>
          </table>
        </section>

        <section>
          <p class="no">04</p>
          <h2>Verlauf</h2>
          <ul class="log">
            {#each events as event}
              <li>
                <span class="date">{event.date}</span>
                <span class="val">{event.label}</span>
                <span class="state" class:warn={event.tone === 'warn'} class:danger={event.tone === 'danger'}>
                  {event.tone === 'ok' ? 'in Ordnung' : event.tone === 'warn' ? 'beobachten' : 'fehlgeschlagen'}
                </span>
              </li>
            {/each}
          </ul>
        </section>

        <section class="closing">
          <p class="no">05</p>
          <h2>Konto löschen</h2>
          <p class="lede">Entfernt alle Daten endgültig. Das lässt sich nicht rückgängig machen.</p>
          <button class="link danger" type="button">Konto löschen</button>
        </section>
      </div>

      <aside class="margin">
        <div class="box">
          <p class="kicker">Bereiche</p>
          <ol>
            {#each sections as section, i}
              <li><span>{String(i + 1).padStart(2, '0')}</span>{section}</li>
            {/each}
          </ol>
        </div>

        <div class="box">
          <p class="kicker">Sitzungen</p>
          <p class="big">{sessions[0].value}</p>
          <p class="note">Anmeldungen in dieser Woche. Vorwoche: {sessions[1].value}.</p>
        </div>

        <blockquote>
          „Weniger Fläche, mehr Aussage." — die Regel, an der sich diese Richtung messen muss.
        </blockquote>
      </aside>
    </div>
  </div>
</div>

<style>
  .screen {
    --ink: #f7f3ea;
    --dim: #d9d2c2;
    --sand: #dcc9a3;
    --rule: rgba(247, 243, 234, 0.22);
    --rule-soft: rgba(247, 243, 234, 0.1);
    --red: #ff8a8a;

    min-height: 100dvh;
    background: #000;
    color: var(--ink);
  }

  .wrap {
    width: min(100% - 2 * var(--ds-space-7), 1140px);
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

  .masthead {
    padding: var(--ds-space-9) 0 var(--ds-space-8);
    border-bottom: 1px solid var(--rule);
  }

  .kicker {
    font-family: var(--ds-font-mono);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--sand);
  }

  h1 {
    margin: var(--ds-space-5) 0 var(--ds-space-6);
    font-size: clamp(3.4rem, 9vw, 7.4rem);
    font-weight: 700;
    line-height: 0.86;
    letter-spacing: -0.05em;
  }

  h1 em {
    font-style: normal;
    color: var(--sand);
  }

  .stand {
    max-width: 60ch;
    font-size: 15px;
    color: var(--dim);
  }

  .cols {
    display: grid;
    grid-template-columns: 1fr 300px;
    gap: var(--ds-space-10);
    padding-top: var(--ds-space-8);
  }

  section {
    padding: 0 0 var(--ds-space-8);
    margin-bottom: var(--ds-space-8);
    border-bottom: 1px solid var(--rule-soft);
  }

  .no {
    font-family: var(--ds-font-mono);
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.16em;
    color: var(--sand);
    margin-bottom: var(--ds-space-2);
  }

  h2 {
    font-size: clamp(1.7rem, 3vw, 2.4rem);
    letter-spacing: -0.03em;
    margin-bottom: var(--ds-space-4);
  }

  .lede {
    max-width: 56ch;
    font-size: 17px;
    line-height: 1.6;
    margin-bottom: var(--ds-space-5);
  }

  .deflist > div {
    display: grid;
    grid-template-columns: 130px 1fr;
    gap: var(--ds-space-4);
    padding: var(--ds-space-3) 0;
    border-top: 1px solid var(--rule-soft);
  }

  dt {
    font-family: var(--ds-font-mono);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--dim);
    padding-top: 3px;
  }

  dd {
    margin: 0;
    font-size: 16px;
  }

  .lines li {
    display: grid;
    grid-template-columns: 170px 1fr auto;
    gap: var(--ds-space-4);
    align-items: baseline;
    padding: var(--ds-space-3) 0;
    border-top: 1px solid var(--rule-soft);
  }

  .mark {
    font-size: 13px;
    font-weight: 700;
    color: var(--dim);
  }

  .val {
    font-size: 16px;
  }

  .state {
    font-family: var(--ds-font-mono);
    font-size: 10.5px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--ink);
  }

  .state.warn {
    color: var(--sand);
  }

  .state.danger {
    color: var(--red);
  }

  .acts {
    display: flex;
    flex-wrap: wrap;
    gap: var(--ds-space-6);
    margin-top: var(--ds-space-5);
  }

  .link {
    display: inline-flex;
    align-items: center;
    min-height: var(--ds-tap-min);
    padding: 0;
    border: 0;
    border-bottom: 1.5px solid var(--ink);
    background: none;
    color: var(--ink);
    font-size: 14px;
    font-weight: 700;
  }

  .link:hover {
    color: var(--sand);
    border-color: var(--sand);
  }

  .link.danger {
    color: var(--red);
    border-color: var(--red);
  }

  table {
    font-size: 15px;
  }

  th {
    padding: 0 0 var(--ds-space-2);
    font-family: var(--ds-font-mono);
    font-size: 10.5px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--dim);
    text-align: left;
    border-bottom: 1px solid var(--rule);
  }

  td {
    padding: var(--ds-space-3) 0;
    border-bottom: 1px solid var(--rule-soft);
  }

  .num {
    font-family: var(--ds-font-mono);
    font-size: 13px;
    white-space: nowrap;
  }

  .log li {
    display: grid;
    grid-template-columns: 190px 1fr auto;
    gap: var(--ds-space-4);
    align-items: baseline;
    padding: var(--ds-space-3) 0;
    border-top: 1px solid var(--rule-soft);
  }

  .date {
    font-family: var(--ds-font-mono);
    font-size: 12px;
    color: var(--dim);
    white-space: nowrap;
  }

  .margin {
    display: grid;
    gap: var(--ds-space-6);
    align-content: start;
    padding-top: var(--ds-space-2);
  }

  .box {
    border-top: 1px solid var(--rule);
    padding-top: var(--ds-space-3);
  }

  .box ol {
    margin-top: var(--ds-space-3);
  }

  .box li {
    display: flex;
    gap: var(--ds-space-3);
    padding: 6px 0;
    font-size: 14px;
    border-bottom: 1px solid var(--rule-soft);
  }

  .box li span {
    font-family: var(--ds-font-mono);
    font-size: 11px;
    color: var(--dim);
  }

  .big {
    font-size: 64px;
    font-weight: 700;
    line-height: 0.9;
    letter-spacing: -0.05em;
    margin-top: var(--ds-space-2);
    color: var(--sand);
  }

  .note {
    margin-top: var(--ds-space-3);
    font-size: 13px;
    line-height: 1.5;
    color: var(--dim);
  }

  blockquote {
    margin: 0;
    padding-top: var(--ds-space-4);
    border-top: 1px solid var(--rule);
    font-size: 15px;
    line-height: 1.5;
    color: var(--sand);
  }

  .closing {
    border-bottom: 0;
  }

  @media (max-width: 900px) {
    .cols {
      grid-template-columns: 1fr;
      gap: var(--ds-space-7);
    }

    .margin {
      border-top: 1px solid var(--rule);
      padding-top: var(--ds-space-6);
    }

    .lines li,
    .log li,
    .deflist > div {
      grid-template-columns: 1fr;
      gap: 2px;
    }

    .stand {
      font-size: 14px;
    }
  }
</style>
