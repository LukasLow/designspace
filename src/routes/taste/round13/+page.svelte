<script lang="ts">
  import { resolve } from '$app/paths';
</script>

<svelte:head>
  <title>Dichte — umgezogen — DesignSpace</title>
</svelte:head>

<header class="head">
  <p class="ds-eyebrow">Runde 13 · Dichte</p>
  <h1>Jede Dichte hat jetzt eine eigene Seite</h1>
  <p class="ds-measure ds-dim">
    Statt fünf Kästen auf einer Seite gibt es fünf Seiten. Du gehst sie einzeln durch und sagst,
    welche sich richtig anfühlt.
  </p>
</header>

<div class="acts">
  <a class="button primary" href={resolve('/taste/13')}>Zu den fünf Dichten</a>
</div>

<style>
  .head {
    padding: var(--ds-space-8) 0 var(--ds-space-6);
  }

  h1 {
    margin: var(--ds-space-3) 0 var(--ds-space-4);
    font-size: var(--ds-text-3xl);
    letter-spacing: -0.03em;
    max-width: 24ch;
  }

  .acts {
    display: flex;
    gap: var(--ds-space-3);
    flex-wrap: wrap;
  }

  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: var(--ds-tap-min);
    padding: 0 var(--ds-space-5);
    border: 2px solid var(--ds-brand);
    border-radius: var(--ds-radius-control);
    background-color: var(--ds-brand-matte);
    color: #000000;
    font-size: var(--ds-text-sm);
    font-weight: var(--ds-weight-bold);
    text-decoration: none;
  }
</style>
