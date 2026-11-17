<script lang="ts">
  import Chip from '#lib/components/Chip.svelte';
  import type { StateVariant } from './state-routes';

  let { variant }: { variant: StateVariant } = $props();
</script>

<div class="demo" data-s={variant}>
  <header class="top">
    <p class="kick">Sendungen</p>
    <Chip tone="warning">1 Fehler</Chip>
  </header>

  {#if variant === 'band'}
    <div class="band">
      <span>Eine Sendung konnte nicht geladen werden.</span>
      <button type="button">Erneut</button>
    </div>
  {/if}

  <ul class="rows">
    <li class="loading">
      <span class="dot" aria-hidden="true"></span>
      <span class="body">
        <span class="t">1Z999AA10123456784</span>
        {#if variant === 'still'}
          <span class="m">Wird geladen</span>
        {:else}
          <span class="skel" aria-hidden="true"></span>
        {/if}
      </span>
      <span class="state">lädt</span>
    </li>

    <li class="error">
      <span class="dot" aria-hidden="true"></span>
      <span class="body">
        <span class="t">1Z999AA10123456785</span>
        {#if variant === 'inline'}
          <span class="m">Fehlgeschlagen · <a href="#top">Neu laden</a></span>
        {:else}
          <span class="m">Fehlgeschlagen</span>
        {/if}
      </span>
      <span class="state">Fehler</span>
    </li>

    <li class="ok">
      <span class="dot" aria-hidden="true"></span>
      <span class="body">
        <span class="t">1Z999AA10123456786</span>
        <span class="m">Zugestellt 12:04</span>
      </span>
      {#if variant === 'inline'}
        <Chip tone="success">zugestellt</Chip>
      {:else}
        <span class="state">ok</span>
      {/if}
    </li>
  </ul>

  {#if variant === 'karte'}
    <div class="card" role="status">
      <p class="ct">Eine Sendung fehlt</p>
      <p class="cm">Die Nummer 1Z999AA10123456785 existiert nicht mehr.</p>
      <button class="ca" type="button">Erneut versuchen</button>
    </div>
  {/if}

  {#if variant === 'toast'}
    <div class="toast" role="status">
      <span class="dot ok" aria-hidden="true"></span>
      <span>Zugestellt · gerade eben</span>
    </div>
  {/if}
</div>

<style>
  .demo {
    position: relative;
    padding: var(--ds-space-6);
    background: #000;
    border: 1px solid var(--ds-line);
    border-radius: var(--ds-radius-lg);
    overflow: hidden;
  }

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--ds-space-3);
  }

  .kick {
    font-size: var(--ds-text-2xs);
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--ds-fg-dim);
  }

  .rows {
    margin-top: var(--ds-space-5);
    border-top: 1px solid var(--ds-line);
  }

  .rows li {
    display: grid;
    grid-template-columns: 12px 1fr auto;
    gap: var(--ds-space-3);
    align-items: center;
    min-height: var(--ds-row-large);
    padding: 12px 0;
    border-bottom: 1px solid var(--ds-line-faint);
  }

  .body {
    display: grid;
    gap: 4px;
    min-width: 0;
  }

  .t {
    font-size: var(--ds-text-sm);
    font-weight: 700;
  }

  .m {
    font-size: var(--ds-text-xs);
    color: var(--ds-fg-dim);
  }

  .m a {
    color: var(--ds-info);
    font-weight: 700;
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  .state {
    font-size: var(--ds-text-2xs);
    font-weight: 700;
    color: var(--ds-fg-dim);
  }

  .dot {
    width: 10px;
    height: 10px;
    border-radius: 999px;
    border: 2px solid var(--ds-line-strong);
  }

  .loading .dot {
    border-color: var(--ds-fg-dim);
  }

  .error .dot {
    border-color: var(--ds-danger);
    background: var(--ds-danger);
  }

  .ok .dot {
    border-color: var(--ds-success);
    background: var(--ds-success);
  }

  .error .state {
    color: var(--ds-danger);
  }

  .ok .state {
    color: var(--ds-success);
  }

  /* Lade-Platzhalter: Korn statt Shimmer. */
  .skel {
    display: block;
    width: 180px;
    height: 10px;
    border-radius: 3px;
    background-color: #1a1a1a;
    background-image: var(--ds-grain);
    background-size: 140px 140px;
    background-blend-mode: overlay;
  }

  /* ------------------------------------------------------------- band */

  .band {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--ds-space-3);
    margin-top: var(--ds-space-4);
    padding: 12px 14px;
    border: 1px solid var(--ds-danger);
    border-radius: var(--ds-radius-control);
    background: rgba(255, 0, 0, 0.08);
    font-size: var(--ds-text-sm);
    font-weight: 700;
  }

  .band button {
    min-height: 40px;
    padding: 0 12px;
    border: 1px solid var(--ds-danger);
    border-radius: var(--ds-radius-control);
    background: transparent;
    color: var(--ds-danger);
    font: inherit;
    font-size: var(--ds-text-xs);
    font-weight: 700;
    cursor: pointer;
  }

  /* ------------------------------------------------------------ karte */

  .card {
    margin-top: var(--ds-space-5);
    padding: var(--ds-space-5);
    border: 1px solid var(--ds-line-strong);
    border-radius: var(--ds-radius-lg);
    background: var(--ds-surface);
  }

  .ct {
    font-size: var(--ds-text-lg);
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  .cm {
    margin-top: 6px;
    font-size: var(--ds-text-sm);
    color: var(--ds-fg-dim);
  }

  .ca {
    margin-top: var(--ds-space-4);
    min-height: var(--ds-tap-min);
    padding: 0 var(--ds-space-4);
    border: 2px solid var(--ds-brand);
    border-radius: var(--ds-radius-control);
    background-color: var(--ds-brand-matte);
    color: #000;
    font: inherit;
    font-size: var(--ds-text-sm);
    font-weight: 700;
    cursor: pointer;
  }

  /* ------------------------------------------------------------ toast */

  .toast {
    position: absolute;
    right: 16px;
    bottom: 16px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 16px;
    border: 1px solid var(--ds-line-strong);
    border-left: 4px solid var(--ds-success);
    border-radius: var(--ds-radius-control);
    background: var(--ds-surface-3);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.6);
    font-size: var(--ds-text-sm);
    font-weight: 700;
  }
</style>
