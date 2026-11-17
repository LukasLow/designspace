<script lang="ts">
  import { resolve } from '$app/paths';
</script>

<svelte:head>
  <title>Runde 10 — Taste — DesignSpace</title>
</svelte:head>

<div class="screen">
  <div class="wrap">
    <nav class="crumb">
      <a href={resolve('/taste')}>← Alle Runden</a>
      <span>Runde 10 · Material</span>
    </nav>

    <header class="head">
      <p class="kicker">Entschieden</p>
      <h1>Matt, 30 % stärker</h1>
      <p class="lede">
        Drei Materialien am selben Button, überall schwarze Schrift. Glanz war die Referenz, Kreide
        der Beweis — entschieden ist <strong>02 Matt Petrol</strong>.
      </p>
    </header>

    <section aria-labelledby="spec-title">
      <h2 id="spec-title">Die drei Proben</h2>

      <div class="specs">
        <div class="spec">
          <p class="label">01 · Glanz <span>Referenz</span></p>
          <div class="stage">
            <div class="bars"><i></i><i></i><i></i></div>
            <div class="ghost">14</div>
            <span class="btn gloss">Speichern</span>
          </div>
          <p class="note">Heller Rand oben, dunkler Absatz unten, weicher Schatten.</p>
        </div>

        <div class="spec chosen">
          <p class="label">02 · Matt Petrol <span>entschieden</span></p>
          <div class="stage">
            <div class="bars"><i></i><i></i><i></i></div>
            <div class="ghost">14</div>
            <span class="btn ds-matte">Speichern</span>
          </div>
          <p class="note">Kein Glanzlicht, sichtbares Korn. Wie gestrichen.</p>
        </div>

        <div class="spec">
          <p class="label">04 · Matt Kreide <span>Beweis</span></p>
          <div class="stage">
            <div class="bars"><i></i><i></i><i></i></div>
            <div class="ghost">14</div>
            <span class="btn matte-k">Speichern</span>
          </div>
          <p class="note">Helle Fläche ohne Glanz — zeigt das Matt am klarsten.</p>
        </div>
      </div>
    </section>

    <section aria-labelledby="how-title">
      <h2 id="how-title">Wie es gebaut ist</h2>
      <ul class="out">
        <li><strong>Korn:</strong> SVG-Rauschen (feTurbulence, entsättigt, Kontrast 1,45) als
          <code>background-image</code>, per <code>background-blend-mode</code> eingerechnet.</li>
        <li><strong>Kein Glanzlicht:</strong> kein Verlauf nach oben, keine helle Innenkante.</li>
        <li><strong>Kein Wurfschatten:</strong> Tiefe entsteht nur durch Abdunkeln.</li>
        <li><strong>Schwarze Schrift:</strong> die matte Markenfarbe ist dafür heller —
          <code>#67B3B8</code>, 5,6:1 auf Schwarz.</li>
      </ul>
      <p class="note">
        Als Utility: <code>.ds-matte</code> in <code>src/lib/styles/materials.css</code>. Tokens:
        <code>--ds-brand</code> bleibt die Marke, <code>--ds-brand-matte</code> ist dieselbe
        Bedeutung in anderem Material. Das Korn wurde später um 10 % zurückgenommen (90 % Deckkraft),
        damit die Fläche ruhiger bleibt.
      </p>
      <p class="note">
        <strong>Nachtrag:</strong> Auf Buttons wurde das Korn wieder entfernt. Es bleibt als
        Option für große Flächen, nicht als Pflicht für jede Aktion.
      </p>
    </section>

    <footer class="foot">
      <p class="kicker">Was gilt</p>
      <ul class="out">
        <li><strong>Interaktive Flächen sind matt.</strong> Button, Toggle, Slider — alles, was man anfasst.</li>
        <li><strong>Glanz ist verboten.</strong> Keine Verläufe nach oben, keine Glow-Schatten.</li>
        <li><strong>Glas ist verworfen.</strong> Es wirkte wie ein Bedienteil, nicht wie ein Button.</li>
        <li><strong>Korn ist Pflicht.</strong> Ohne Korn wird Matt zu flacher Farbe.</li>
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
  }

  h2 {
    font-size: 24px;
    letter-spacing: -0.02em;
    margin-bottom: var(--ds-space-4);
  }

  .lede,
  .note {
    max-width: 68ch;
    font-size: 15px;
    line-height: 1.6;
    color: #d0d0d0;
  }

  section {
    padding: var(--ds-space-6) 0;
    border-top: 1px solid rgba(255, 255, 255, 0.16);
  }

  .specs {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--ds-space-3);
  }

  .spec {
    border: 1px solid rgba(255, 255, 255, 0.14);
    background: #050505;
  }

  .spec.chosen {
    border-color: var(--ds-brand);
  }

  .label {
    display: flex;
    justify-content: space-between;
    gap: 8px;
    padding: 7px 10px;
    font-family: var(--ds-font-mono);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .label span {
    color: #8f8f8f;
    letter-spacing: 0.02em;
  }

  .stage {
    position: relative;
    height: 132px;
    display: grid;
    place-items: center;
    background: #0b0b0b;
    overflow: hidden;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
  }

  .bars {
    position: absolute;
    inset: 16px;
    display: grid;
    gap: 9px;
    align-content: start;
  }

  .bars i {
    height: 6px;
    background: rgba(255, 255, 255, 0.13);
  }

  .bars i:nth-child(2) {
    width: 74%;
  }

  .bars i:nth-child(3) {
    width: 52%;
  }

  .ghost {
    position: absolute;
    right: 8px;
    bottom: -26px;
    font-size: 96px;
    font-weight: 700;
    letter-spacing: -0.06em;
    line-height: 1;
    color: #fff;
    opacity: 0.13;
  }

  .btn {
    position: relative;
    z-index: 2;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 232px;
    min-height: 64px;
    border-radius: 14px;
    font-size: 14px;
    font-weight: 700;
    color: #000;
  }

  .gloss {
    background: linear-gradient(180deg, #b7f7fa 0%, #5fd0d8 34%, #2e8f96 100%);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.95),
      inset 0 -3px 0 rgba(0, 0, 0, 0.28),
      0 12px 26px rgba(0, 0, 0, 0.55);
  }

  .matte-k {
    background-color: #cfd8d6;
  }

  .spec .note {
    padding: 7px 10px 9px;
    font-size: 11px;
    line-height: 1.4;
    color: #b8b8b8;
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

  code {
    font-family: var(--ds-font-mono);
    font-size: 0.92em;
  }

  section .note {
    margin-top: var(--ds-space-4);
    font-size: 13px;
  }

  .foot {
    margin-top: var(--ds-space-8);
    padding-top: var(--ds-space-6);
    border-top: 2px solid rgba(255, 255, 255, 0.4);
  }

  @media (max-width: 820px) {
    .specs {
      grid-template-columns: 1fr;
    }
  }
</style>
