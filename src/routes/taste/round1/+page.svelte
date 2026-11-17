<script lang="ts">
  import { resolve } from '$app/paths';
  import { directions } from '#lib/taste/registry';
</script>

<svelte:head>
  <title>Runde 1 — Taste — DesignSpace</title>
</svelte:head>

<div class="screen">
  <div class="wrap">
    <nav class="crumb">
      <a href={resolve('/taste')}>← Alle Runden</a>
      <span>Runde 1 · Richtungen</span>
    </nav>

    <header class="head">
      <p class="kicker">Die erste Frage</p>
      <h1>Welche Richtung?</h1>
      <p class="lede">
        Fünf komplette Screens derselben Aufgabe, jede mit eigener Formensprache. Diese Runde ist
        entschieden: drei bleiben, zwei sind raus.
      </p>
    </header>

    <ol class="list">
      {#each directions as direction}
        <li class:out={direction.status === 'verworfen'}>
          <div class="top">
            <span class="no">{String(direction.index).padStart(2, '0')}</span>
            <h2>{direction.title}</h2>
            <span class="verdict" class:nein={direction.status === 'verworfen'}>
              {direction.status === 'verworfen' ? 'verworfen' : 'bleibt'}
            </span>
          </div>
          <p class="thesis">{direction.thesis}</p>
          <a class="open" href={`${resolve('/taste')}/${direction.slug}/`}>
            Screen ansehen <span aria-hidden="true">→</span>
          </a>
        </li>
      {/each}
    </ol>

    <footer class="foot">
      <p class="kicker">Begründung</p>
      <ul class="out">
        <li><strong>Instrument</strong> — langweilig. Zu wenig eigene Haltung.</li>
        <li><strong>Formwerk</strong> — Hintergrundraster und Punkte stören die Augen.</li>
        <li><strong>Membrane, Editorial, Signal</strong> — bleiben im Vergleich.</li>
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
    font-size: clamp(2.2rem, 5vw, 3.6rem);
    line-height: 1;
    letter-spacing: -0.04em;
    margin-bottom: var(--ds-space-4);
  }

  .lede {
    max-width: 62ch;
    font-size: 16px;
    line-height: 1.6;
    color: #d0d0d0;
  }

  .list {
    display: grid;
    gap: var(--ds-space-3);
  }

  .list > li {
    padding: var(--ds-space-5);
    border: 1px solid rgba(255, 255, 255, 0.16);
  }

  .list > li.out {
    border-color: rgba(255, 123, 123, 0.35);
  }

  .top {
    display: flex;
    align-items: baseline;
    gap: var(--ds-space-3);
    flex-wrap: wrap;
  }

  .no {
    font-family: var(--ds-font-mono);
    font-size: 12px;
    font-weight: 700;
    color: #d0d0d0;
  }

  h2 {
    font-size: 22px;
    letter-spacing: -0.02em;
  }

  .verdict {
    margin-left: auto;
    padding: 3px 9px;
    border: 1px solid #fff;
    border-radius: 999px;
    background: #fff;
    color: #000;
    font-family: var(--ds-font-mono);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .verdict.nein {
    border-color: #ff7b7b;
    background: transparent;
    color: #ff7b7b;
  }

  .thesis {
    margin-top: var(--ds-space-2);
    max-width: 68ch;
    font-size: 14px;
    line-height: 1.55;
    color: #d0d0d0;
  }

  .open {
    display: inline-flex;
    align-items: center;
    gap: var(--ds-space-2);
    min-height: var(--ds-tap-min);
    margin-top: var(--ds-space-3);
    border-bottom: 2px solid #fff;
    font-size: 13px;
    font-weight: 700;
    color: #fff;
    text-decoration: none;
  }

  .open:hover {
    background: #fff;
    color: #000;
    padding: 0 var(--ds-space-3);
    margin-inline: calc(-1 * var(--ds-space-3));
  }

  .foot {
    margin-top: var(--ds-space-9);
    padding-top: var(--ds-space-6);
    border-top: 2px solid rgba(255, 255, 255, 0.4);
  }

  .out {
    display: grid;
    gap: var(--ds-space-2);
    max-width: 72ch;
    font-size: 14px;
    color: #d0d0d0;
  }

  .out strong {
    color: #fff;
  }
</style>
