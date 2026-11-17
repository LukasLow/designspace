<script lang="ts">
  import { resolve } from '$app/paths';
  import ColorDemo from '#lib/taste/ColorDemo.svelte';

  const palette = [
    { name: 'Petrol', hex: '#37B5BE', role: 'Handlung, Marke (Fläche)', contrast: '8,5:1' },
    { name: 'Powerade', hex: '#00A8E8', role: 'Information, Link (Linie/Text)', contrast: '7,8:1' },
    { name: 'Neon', hex: '#00E89A', role: 'Erfolg, bestätigt', contrast: '13,0:1' },
    { name: 'Violett', hex: '#C4A4FF', role: 'Kategorie, Datenreihe', contrast: '10,1:1' },
    { name: 'Gold', hex: '#FFC24B', role: 'Warnung, Hinweis', contrast: '13,1:1' },
    { name: 'Rot', hex: '#FF0000', role: 'Fehler, Gefahr', contrast: '5,3:1' },
    { name: 'Weiß', hex: '#FFFFFF', role: 'Text, Hauptaktion', contrast: '21,0:1' },
    { name: 'Sekundär', hex: '#D4D4D4', role: 'Sekundärtext', contrast: '14,6:1' }
  ];

  const stats = [
    { hex: '#00E89A', value: '3', label: 'bestätigt' },
    { hex: '#00A8E8', value: '2', label: 'laufen' },
    { hex: '#FFC24B', value: '1', label: 'Achtung' },
    { hex: '#FF0000', value: '1', label: 'Fehler' }
  ];

  const rows = [
    { hex: '#00E89A', label: 'Passwort geändert', meta: '12.11.2026' },
    { hex: '#00A8E8', label: 'Neues Gerät angemeldet', meta: '03.11.2026' },
    { hex: '#FFC24B', label: 'Wiederherstellungscodes fehlen', meta: 'offen' },
    { hex: '#FF0000', label: 'Anmeldung fehlgeschlagen', meta: '28.10.2026' }
  ];
</script>

<svelte:head>
  <title>Runde 8 — Taste — DesignSpace</title>
</svelte:head>

<div class="screen">
  <div class="wrap">
    <nav class="crumb">
      <a href={resolve('/taste')}>← Alle Runden</a>
      <span>Runde 8 · Satz</span>
    </nav>

    <header class="head">
      <p class="kicker">Alle drei bleiben</p>
      <h1>Petrol, Powerade, Neon</h1>
      <p class="lede">
        Petrol ist wieder drin — zusammen mit Powerade und Neon. Die drei sind sich im Farbton nah,
        deshalb bekommt jede eine eigene Rolle und eine eigene Form: Petrol füllt Flächen, Powerade
        lebt in Linie und Text, Neon bleibt der Punkt.
      </p>
    </header>

    <section aria-labelledby="sheet-title">
      <h2 id="sheet-title">Der Satz</h2>
      <ul class="sheet">
        {#each palette as color}
          <li>
            <span class="swatch" style="background: {color.hex}"></span>
            <span class="name">{color.name}</span>
            <span class="hex">{color.hex}</span>
            <span class="role">{color.role}</span>
            <span class="ratio">{color.contrast}</span>
          </li>
        {/each}
      </ul>
    </section>

    <section aria-labelledby="all-title">
      <h2 id="all-title">Alle Farben im Einsatz</h2>
      <p class="note">
        Ein Screen, alle sechs Töne. Jede Farbe trägt genau eine Bedeutung: Erfolg, Vorgang,
        Warnung, Fehler, Kategorie, Text.
      </p>

      <div class="all">
        <div class="all-head">
          <span class="k">Konto</span>
          <span class="all-chip" style="color: #00a8e8; border-color: #00a8e8">Pro</span>
        </div>

        <div class="all-stats">
          {#each stats as s}
            <div>
              <span class="dot" style="background: {s.hex}"></span>
              <span class="v" style="color: {s.hex}">{s.value}</span>
              <span class="l">{s.label}</span>
            </div>
          {/each}
        </div>

        <div class="all-chart" aria-hidden="true">
          <span style="height: 42px; background: #00e89a"></span>
          <span style="height: 66px; background: #00e89a"></span>
          <span style="height: 30px; background: #37b5be"></span>
          <span style="height: 78px; background: #37b5be"></span>
          <span style="height: 54px; background: #00a8e8"></span>
          <span style="height: 38px; background: #00a8e8"></span>
          <span style="height: 62px; background: #c4a4ff"></span>
          <span style="height: 46px; background: #c4a4ff"></span>
        </div>

        <ul class="all-rows">
          {#each rows as row}
            <li>
              <span class="dot" style="background: {row.hex}"></span>
              <span class="label">{row.label}</span>
              <span class="meta">{row.meta}</span>
            </li>
          {/each}
        </ul>

        <div class="all-actions">
          <button class="primary" type="button">Speichern</button>
          <button class="ghost" type="button">Abbrechen</button>
          <a class="all-link" href="#all-title">Alle ansehen →</a>
        </div>
      </div>
    </section>

    <section aria-labelledby="gr-title">
      <h2 id="gr-title">Grün und Rot</h2>
      <p class="note">
        Du bist rot-grün-farbenblind. Diese vier Zeilen zeigen Neon und Rot in vier Größen — als
        Fläche, als Chip, als Punkt und als Kante. Wenn du hier keinen Unterschied siehst, wird das
        Rot ersetzt.
      </p>

      <div class="gr">
        <div class="gr-row">
          <span class="gr-block" style="background: #00e89a">Erfolg</span>
          <span class="gr-block" style="background: #ff0000">Fehler</span>
        </div>

        <div class="gr-row">
          <span class="gr-chip" style="color: #00e89a; border-color: #00e89a">gespeichert</span>
          <span class="gr-chip" style="color: #ff0000; border-color: #ff0000">fehlgeschlagen</span>
        </div>

        <div class="gr-row dots">
          <span class="gr-dot" style="background: #00e89a"></span>
          <span class="gr-txt" style="color: #00e89a">Erfolg</span>
          <span class="gr-dot" style="background: #ff0000"></span>
          <span class="gr-txt" style="color: #ff0000">Fehler</span>
        </div>

        <div class="gr-row">
          <span class="gr-brd" style="border-color: #00e89a; color: #00e89a">Erfolg</span>
          <span class="gr-brd" style="border-color: #ff0000; color: #ff0000">Fehler</span>
        </div>
      </div>

      <p class="note hint">
        Blindtest mit 6 Durchgängen und je 5 Paaren: <strong>29 von 30 richtig</strong>, auch bei
        18 px noch fehlerfrei. Rot #FF0000 trennt sich nicht nur im Farbton, sondern über die
        Helligkeit (0,21 gegen 0,60 von Neon). Deshalb bleibt es.
      </p>
    </section>

    <section aria-labelledby="use-title">
      <h2 id="use-title">Powerade im Einsatz</h2>
      <ColorDemo variant="powerade" />
    </section>

    <footer class="foot">
      <p class="kicker">Was gilt</p>
      <ul class="out">
        <li><strong>Petrol ist die Handlung.</strong> Gefüllte Buttons, aktive Flächen, Fokus — immer als Fläche.</li>
        <li><strong>Powerade ist Information.</strong> Links, Werte, Linien — immer als Text oder Kante, nie als Fläche neben Petrol.</li>
        <li><strong>Neon ist Erfolg.</strong> Nur Punkt, Chip und Icon — nie als Handlungsfarbe.</li>
        <li><strong>Regel gegen die Nähe:</strong> Petrol und Powerade treten nie als gleichartige Flächen nebeneinander auf. Die Form trennt, was der Farbton nicht trennt.</li>
        <li><strong>Offen:</strong> das Rollenmodell aus Runde 6 und das Rot aus dem Test unten.</li>
      </ul>
    </footer>
  </div>
</div>

<style>
  .screen {
    min-height: 100dvh;
    background: #000;
    color: #fff;
  }

  .wrap {
    width: min(100% - 2 * var(--ds-space-6), 1060px);
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
    color: #d0d0d0;
    padding-bottom: var(--ds-space-4);
    border-bottom: 1px solid rgba(255, 255, 255, 0.16);
  }

  .crumb a {
    display: inline-flex;
    align-items: center;
    min-height: var(--ds-tap-min);
    color: #d0d0d0;
    text-decoration: none;
  }

  .crumb a:hover {
    color: #fff;
  }

  .head {
    padding: var(--ds-space-8) 0 var(--ds-space-7);
  }

  .kicker {
    font-family: var(--ds-font-mono);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #d0d0d0;
    margin-bottom: var(--ds-space-3);
  }

  h1 {
    font-size: clamp(2.2rem, 5vw, 3.4rem);
    line-height: 1;
    letter-spacing: -0.04em;
    margin-bottom: var(--ds-space-4);
    max-width: 24ch;
  }

  h2 {
    font-size: 24px;
    letter-spacing: -0.02em;
    margin-bottom: var(--ds-space-3);
  }

  .lede,
  .note {
    max-width: 68ch;
    font-size: 15px;
    line-height: 1.6;
    color: #d0d0d0;
  }

  .note.hint {
    margin-top: var(--ds-space-4);
    padding: var(--ds-space-3) var(--ds-space-4);
    border-left: 3px solid #00a8e8;
    background: #080808;
  }

  section {
    padding: var(--ds-space-6) 0;
    border-top: 1px solid rgba(255, 255, 255, 0.16);
  }

  .sheet {
    display: grid;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
  }

  .sheet li {
    display: grid;
    grid-template-columns: 36px 110px 90px 1fr auto;
    gap: var(--ds-space-3);
    align-items: center;
    min-height: 52px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    font-size: 13px;
  }

  .swatch {
    width: 24px;
    height: 24px;
  }

  .name {
    font-weight: 700;
  }

  .hex,
  .ratio {
    font-family: var(--ds-font-mono);
    font-size: 11px;
    font-weight: 700;
    color: #d0d0d0;
  }

  .role {
    color: #d0d0d0;
  }

  /* ------------------------------------------------------- alle Farben */

  .all {
    margin-top: var(--ds-space-4);
    padding: var(--ds-space-5);
    border: 1px solid rgba(255, 255, 255, 0.16);
    background: #060606;
  }

  .all-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--ds-space-3);
  }

  .k {
    font-family: var(--ds-font-mono);
    font-size: 10.5px;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: #d0d0d0;
  }

  .all-chip {
    padding: 3px 9px;
    border: 1px solid;
    font-family: var(--ds-font-mono);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .all-stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--ds-space-3);
    margin-top: var(--ds-space-4);
  }

  .all-stats > div {
    display: grid;
    grid-template-columns: 10px auto;
    grid-template-rows: auto auto;
    gap: 2px var(--ds-space-2);
    align-items: center;
    padding: var(--ds-space-3);
    border: 1px solid rgba(255, 255, 255, 0.12);
  }

  .all-stats .dot {
    grid-row: span 2;
  }

  .v {
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -0.03em;
    line-height: 1;
  }

  .l {
    font-size: 11px;
    color: #d0d0d0;
  }

  .dot {
    width: 10px;
    height: 10px;
    display: inline-block;
    flex: none;
  }

  .all-chart {
    display: flex;
    align-items: flex-end;
    gap: 6px;
    height: 90px;
    margin-top: var(--ds-space-4);
  }

  .all-chart span {
    flex: 1;
    display: block;
  }

  .all-rows {
    margin-top: var(--ds-space-4);
  }

  .all-rows li {
    display: grid;
    grid-template-columns: 10px 1fr auto;
    gap: var(--ds-space-3);
    align-items: center;
    min-height: 40px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    font-size: 13px;
  }

  .label {
    font-weight: 700;
  }

  .meta {
    font-family: var(--ds-font-mono);
    font-size: 11px;
    font-weight: 700;
    color: #d0d0d0;
    white-space: nowrap;
  }

  .all-actions {
    display: flex;
    align-items: center;
    gap: var(--ds-space-2);
    flex-wrap: wrap;
    margin-top: var(--ds-space-4);
  }

  .primary,
  .ghost {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: var(--ds-tap-min);
    padding: 0 var(--ds-space-4);
    border-radius: 0;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
  }

  .primary {
    border: 2px solid #37b5be;
    background: #37b5be;
    color: #001416;
  }

  .ghost {
    border: 2px solid rgba(255, 255, 255, 0.28);
    background: transparent;
    color: #fff;
  }

  .all-link {
    display: inline-flex;
    align-items: center;
    min-height: var(--ds-tap-min);
    margin-left: auto;
    color: #00a8e8;
    font-size: 13px;
    font-weight: 700;
    text-decoration: none;
    border-bottom: 1.5px solid #00a8e8;
  }

  /* ------------------------------------------------------ grün und rot */

  .gr {
    display: grid;
    gap: var(--ds-space-3);
    margin-top: var(--ds-space-4);
  }

  .gr-row {
    display: flex;
    flex-wrap: wrap;
    gap: var(--ds-space-3);
    align-items: center;
  }

  .gr-block {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 220px;
    min-height: 96px;
    color: #000;
    font-size: 18px;
    font-weight: 700;
  }

  .gr-chip {
    display: inline-flex;
    align-items: center;
    min-height: 40px;
    padding: 0 14px;
    border: 1px solid;
    font-family: var(--ds-font-mono);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .gr-row.dots {
    gap: var(--ds-space-2) var(--ds-space-3);
  }

  .gr-dot {
    width: 10px;
    height: 10px;
    display: inline-block;
  }

  .gr-txt {
    font-size: 13px;
    font-weight: 700;
    margin-right: var(--ds-space-3);
  }

  .gr-brd {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    padding: 0 14px;
    border: 2px solid;
    font-size: 13px;
    font-weight: 700;
  }

  .foot {
    margin-top: var(--ds-space-8);
    padding-top: var(--ds-space-6);
    border-top: 2px solid rgba(255, 255, 255, 0.4);
  }

  .out {
    display: grid;
    gap: var(--ds-space-2);
    max-width: 74ch;
    font-size: 14px;
    color: #d0d0d0;
  }

  .out strong {
    color: #fff;
  }

  @media (max-width: 760px) {
    .sheet li {
      grid-template-columns: 28px 1fr auto;
      row-gap: 2px;
    }

    .role {
      grid-column: 2 / -1;
    }

    .hex {
      display: none;
    }

    .all-stats {
      grid-template-columns: repeat(2, 1fr);
    }

    .gr-block {
      min-width: 0;
      flex: 1;
    }
  }
</style>
