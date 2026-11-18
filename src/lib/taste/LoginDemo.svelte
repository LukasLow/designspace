<script lang="ts">
  import Button from '#lib/components/Button.svelte';
  import Field from '#lib/components/Field.svelte';
  import type { LoginVariant } from './login-routes';

  let { variant }: { variant: LoginVariant } = $props();
</script>

<div class="demo" data-l={variant}>
  {#if variant === 'zwei-spalten' || variant === 'geteilt'}
    <div class="claim">
      <p class="kicker">DesignSpace</p>
      <h2>Design, das man anfassen kann.</h2>
      <p class="csub">Eine Bibliothek für Flächen, Kanten und Zustände.</p>
    </div>
  {/if}

  <div class="panel">
    {#if variant !== 'kompakt'}
      <div class="brand">
        <span class="logo" aria-hidden="true"></span>
        <span class="name">DesignSpace</span>
      </div>
    {/if}

    <h3>{variant === 'kompakt' ? 'Anmelden' : 'Willkommen zurück'}</h3>
    <p class="sub">Melde dich an, um weiterzumachen.</p>

    <div class="fields">
      <Field id={`mail-${variant}`} label="E-Mail" type="email" placeholder="name@domain" />
      <Field id={`pass-${variant}`} label="Passwort" type="password" placeholder="••••••••" />
    </div>

    <div class="forgot">
      <a href="#top">Passwort vergessen?</a>
    </div>

    <div class="actions">
      <Button>Anmelden</Button>
      {#if variant !== 'kompakt'}
        <Button variant="secondary">Mit Passkey</Button>
      {/if}
    </div>

    <p class="alt">Noch kein Konto? <a href="#top">Registrieren</a></p>
  </div>
</div>

<style>
  .demo {
    padding: var(--ds-space-6);
    background: #000;
    border: 1px solid var(--ds-line);
    border-radius: var(--ds-radius-lg);
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: var(--ds-space-5);
  }

  .logo {
    display: grid;
    place-items: center;
    width: 34px;
    height: 34px;
    border-radius: 10px;
    background: var(--ds-brand);
  }

  /* Das DesignSpace-Zeichen: aufrechter Rahmen, nur das Zeichen ist gedreht. */
  .logo::before {
    content: '';
    width: 13px;
    height: 13px;
    border: var(--ds-border-strong) solid var(--ds-brand-ink);
    border-radius: var(--ds-radius-xs);
    transform: rotate(45deg);
  }

  .name {
    font-size: var(--ds-text-sm);
    font-weight: 700;
    letter-spacing: -0.01em;
  }

  h3 {
    font-size: 32px;
    line-height: 1.02;
    letter-spacing: -0.04em;
  }

  .sub {
    margin-top: 6px;
    font-size: var(--ds-text-sm);
    color: var(--ds-fg-dim);
  }

  .fields {
    display: grid;
    gap: var(--ds-space-4);
    margin-top: var(--ds-space-5);
  }

  .forgot {
    display: flex;
    justify-content: flex-end;
    margin-top: var(--ds-space-2);
  }

  .forgot a {
    font-size: var(--ds-text-xs);
    font-weight: 700;
    color: var(--ds-info);
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  .actions {
    display: flex;
    gap: var(--ds-space-2);
    flex-wrap: wrap;
    margin-top: var(--ds-space-4);
  }

  .alt {
    margin-top: var(--ds-space-4);
    font-size: var(--ds-text-sm);
    color: var(--ds-fg-dim);
  }

  .alt a {
    color: var(--ds-brand);
    font-weight: 700;
    text-decoration: none;
  }

  .claim {
    display: grid;
    align-content: center;
    gap: var(--ds-space-3);
  }

  .kicker {
    font-size: var(--ds-text-2xs);
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--ds-brand);
  }

  .claim h2 {
    font-size: 40px;
    line-height: 1;
    letter-spacing: -0.04em;
    max-width: 16ch;
  }

  .csub {
    font-size: var(--ds-text-base);
    color: var(--ds-fg-dim);
    max-width: 34ch;
  }

  /* ------------------------------------------------------------- karte */

  .demo[data-l='karte'] {
    max-width: 440px;
    margin-inline: auto;
  }

  .demo[data-l='karte'] .brand {
    justify-content: center;
  }

  .demo[data-l='karte'] h3,
  .demo[data-l='karte'] .sub {
    text-align: center;
  }

  /* ------------------------------------------------------ zwei-spalten */

  .demo[data-l='zwei-spalten'] {
    display: grid;
    grid-template-columns: 1fr 380px;
    gap: var(--ds-space-8);
    align-items: center;
    max-width: 980px;
    margin-inline: auto;
    padding: var(--ds-space-7);
  }

  .demo[data-l='zwei-spalten'] .claim {
    padding-right: var(--ds-space-6);
    border-right: 1px solid var(--ds-line);
  }

  /* ------------------------------------------------------------- blatt */

  .demo[data-l='blatt'] {
    max-width: 420px;
    margin-inline: auto;
    padding: var(--ds-space-6) 0;
    border: 0;
    border-radius: 0;
  }

  /* ----------------------------------------------------------- geteilt */

  .demo[data-l='geteilt'] {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    padding: 0;
    overflow: hidden;
    min-height: 460px;
  }

  .demo[data-l='geteilt'] .claim {
    padding: var(--ds-space-7);
    background-color: #101010;
    background-image: var(--ds-grain);
    background-size: 140px 140px;
    background-blend-mode: overlay;
  }

  .demo[data-l='geteilt'] .panel {
    padding: var(--ds-space-7);
    display: grid;
    align-content: center;
  }

  /* ----------------------------------------------------------- kompakt */

  .demo[data-l='kompakt'] {
    max-width: 360px;
    margin-inline: auto;
    padding: var(--ds-space-5);
  }

  .demo[data-l='kompakt'] h3 {
    font-size: 24px;
  }

  .demo[data-l='kompakt'] .fields {
    gap: var(--ds-space-3);
    margin-top: var(--ds-space-4);
  }

  @media (max-width: 760px) {
    .demo[data-l='zwei-spalten'] {
      display: block;
    }

    .demo[data-l='zwei-spalten'] .claim {
      padding-right: 0;
      border-right: 0;
      margin-bottom: var(--ds-space-6);
    }

    /* Geteilt: mobil bleibt nur das Formular. */
    .demo[data-l='geteilt'] {
      display: block;
      min-height: 0;
    }

    .demo[data-l='geteilt'] .claim {
      display: none;
    }

    .demo[data-l='geteilt'] .panel {
      padding: var(--ds-space-5);
    }
  }
</style>
