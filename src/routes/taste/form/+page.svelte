<script lang="ts">
  import { resolve } from '$app/paths';
</script>

<svelte:head>
  <title>Umgezogen — Taste — DesignSpace</title>
</svelte:head>

<div class="screen">
  <div class="wrap">
    <p class="kicker">Umgezogen</p>
    <h1>Jede Runde hat jetzt eine eigene Adresse</h1>
    <p class="lede">
      Diese Seite hieß vorher <code>/taste/form</code> und wurde pro Runde überschrieben. Das war
      falsch: damit war der alte Stand weg. Die Form-Runden liegen jetzt getrennt.
    </p>
    <div class="acts">
      <a href={resolve('/taste/round2')}>Runde 2 · Fünf Formen</a>
      <a href={resolve('/taste/round3')}>Runde 3 · Kante und Tiefe</a>
      <a href={resolve('/taste')}>Alle Runden</a>
    </div>
  </div>
</div>

<style>
  .screen {
    min-height: 100dvh;
    background: #000;
    color: #fff;
  }

  .wrap {
    width: min(100% - 2 * var(--ds-space-6), 760px);
    margin-inline: auto;
    padding: var(--ds-space-10) 0 var(--ds-space-11);
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
    font-size: clamp(2rem, 5vw, 3rem);
    line-height: 1.02;
    letter-spacing: -0.04em;
    margin-bottom: var(--ds-space-4);
  }

  .lede {
    font-size: 16px;
    line-height: 1.6;
    color: #d0d0d0;
  }

  code {
    font-family: var(--ds-font-mono);
    font-size: 0.92em;
  }

  .acts {
    display: flex;
    flex-wrap: wrap;
    gap: var(--ds-space-3);
    margin-top: var(--ds-space-6);
  }

  .acts a {
    display: inline-flex;
    align-items: center;
    min-height: var(--ds-tap-min);
    padding: 0 var(--ds-space-4);
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 0;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    text-decoration: none;
  }

  .acts a:hover {
    background: #fff;
    color: #000;
  }
</style>
