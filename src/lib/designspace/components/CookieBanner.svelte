<script lang="ts">
  let {
    open = $bindable(true),
    id = 'ds-cookie-banner',
    title = 'Cookies und Daten',
    description = 'Wir speichern nur, was für den Betrieb nötig ist. Alles andere braucht deine Zustimmung.',
    acceptLabel = 'Alle akzeptieren',
    declineLabel = 'Nur notwendige',
    settingsLabel = 'Einstellungen',
    settingsHref,
    inline = false,
    onaccept,
    ondecline
  }: {
    open?: boolean;
    id?: string;
    title?: string;
    description?: string;
    acceptLabel?: string;
    declineLabel?: string;
    settingsLabel?: string;
    settingsHref?: string;
    inline?: boolean;
    onaccept?: () => void;
    ondecline?: () => void;
  } = $props();

  function accept() {
    open = false;
    onaccept?.();
  }

  function decline() {
    open = false;
    ondecline?.();
  }
</script>

{#if open}
  <section
    class="banner"
    class:inline
    aria-labelledby={`${id}-title`}
    aria-describedby={`${id}-desc`}
  >
    <div class="copy">
      <h2 id={`${id}-title`}>{title}</h2>
      <p id={`${id}-desc`}>{description}</p>
      {#if settingsHref}
        <a class="settings" href={settingsHref}>{settingsLabel}</a>
      {/if}
    </div>

    <div class="actions">
      <button class="accept" type="button" onclick={accept}>{acceptLabel}</button>
      <button class="decline" type="button" onclick={decline}>{declineLabel}</button>
    </div>
  </section>
{/if}

<style>
  /* Einwilligung: zwei gleich große Handlungen, keine versteckte Ablehnung.
     Der Banner ist eine Region, kein modaler Dialog — er blockiert nicht. */
  .banner {
    position: fixed;
    right: var(--ds-space-4);
    bottom: var(--ds-space-4);
    left: var(--ds-space-4);
    z-index: 50;
    display: grid;
    gap: var(--ds-space-4);
    max-width: 720px;
    margin-inline: auto;
    padding: var(--ds-space-5);
    border: 1px solid var(--ds-line-strong);
    border-radius: var(--ds-radius-lg);
    background: var(--ds-surface-2);
    color: var(--ds-fg);
    animation: banner-in var(--ds-dur-2) var(--ds-ease-out);
  }

  .inline {
    position: static;
    max-width: 720px;
    margin: 0;
  }

  .copy {
    display: grid;
    gap: var(--ds-space-2);
  }

  h2 {
    font-size: var(--ds-text-lg);
  }

  p {
    max-width: 62ch;
    font-size: var(--ds-text-sm);
    color: var(--ds-fg-dim);
  }

  .settings {
    display: inline-flex;
    align-items: center;
    min-height: var(--ds-tap-min);
    font-size: var(--ds-text-sm);
    font-weight: var(--ds-weight-bold);
    color: var(--ds-info);
  }

  .settings:focus-visible {
    outline: var(--ds-border-focus) solid var(--ds-focus);
    outline-offset: 3px;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: var(--ds-space-3);
  }

  .actions button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: var(--ds-tap-min);
    padding: 0 var(--ds-space-5);
    flex: 1 1 190px;
    border: 2px solid transparent;
    border-radius: var(--ds-radius-control);
    font-family: var(--ds-font-sans);
    font-size: var(--ds-text-sm);
    font-weight: var(--ds-weight-bold);
    line-height: 1;
    transition:
      transform var(--ds-dur-1) var(--ds-ease-out),
      background var(--ds-dur-1) var(--ds-ease-out);
  }

  .actions button:focus-visible {
    outline: var(--ds-border-focus) solid var(--ds-focus);
    outline-offset: 3px;
  }

  .actions button:hover {
    transform: translateY(-1px);
  }

  .actions button:active {
    transform: translateY(2px) scale(0.994);
  }

  .accept {
    background: var(--ds-brand-matte);
    color: var(--ds-brand-ink);
  }

  .decline {
    border-color: var(--ds-line-strong);
    background: var(--ds-surface-3);
    color: var(--ds-fg);
  }

  @keyframes banner-in {
    from {
      opacity: 0;
      transform: translateY(16px);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .banner {
      animation: none;
    }

    .actions button {
      transition: none;
    }

    .actions button:hover,
    .actions button:active {
      transform: none;
    }
  }
</style>
