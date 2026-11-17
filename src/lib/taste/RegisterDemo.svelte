<script lang="ts">
  import Button from '#lib/components/Button.svelte';
  import Checkbox from '#lib/components/Checkbox.svelte';
  import Field from '#lib/components/Field.svelte';
  import type { RegisterVariant } from './register-routes';

  let { variant }: { variant: RegisterVariant } = $props();
</script>

<div class="demo" data-r={variant}>
  {#if variant === 'geteilt'}
    <div class="claim">
      <p class="kicker">DesignSpace</p>
      <h2>Ein Konto, das mitwächst.</h2>
      <p class="csub">Flächen, Kanten und Zustände — an einem Ort.</p>
    </div>
  {/if}

  <div class="panel">
    {#if variant !== 'kompakt'}
      <div class="brand">
        <span class="logo" aria-hidden="true">N</span>
        <span class="name">DesignSpace</span>
      </div>
    {/if}

    {#if variant === 'schritte'}
      <div class="steps" aria-hidden="true">
        <span class="step on">1</span>
        <span class="bar on"></span>
        <span class="step">2</span>
        <span class="steplabel">Schritt 1 von 2</span>
      </div>
    {/if}

    <h3>Konto anlegen</h3>
    <p class="sub">
      {variant === 'schritte'
        ? 'Zuerst deine Daten, dann das Passwort.'
        : 'Drei Felder, dann bist du drin.'}
    </p>

    <div class="fields">
      <Field id={`name-${variant}`} label="Name" placeholder="Vor- und Nachname" />
      <Field id={`mail-${variant}`} label="E-Mail" type="email" placeholder="name@domain" />
      <Field
        id={`pass-${variant}`}
        label="Passwort"
        type="password"
        placeholder="mindestens 10 Zeichen"
        hint="Mindestens 10 Zeichen, keine Sonderregeln."
      />
    </div>

    <div class="terms">
      <Checkbox id={`terms-${variant}`} label="AGB und Datenschutz akzeptieren" checked />
    </div>

    <div class="actions">
      <Button>{variant === 'schritte' ? 'Weiter' : 'Konto anlegen'}</Button>
    </div>

    <p class="alt">Schon ein Konto? <a href="#top">Anmelden</a></p>
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
    color: #000;
    font-size: 18px;
    font-weight: 700;
  }

  .name {
    font-size: var(--ds-text-sm);
    font-weight: 700;
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

  .steps {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: var(--ds-space-4);
  }

  .step {
    display: grid;
    place-items: center;
    width: 28px;
    height: 28px;
    border: 1px solid var(--ds-line-strong);
    border-radius: 999px;
    font-size: var(--ds-text-2xs);
    font-weight: 700;
    color: var(--ds-fg-dim);
  }

  .step.on {
    background: var(--ds-brand);
    border-color: var(--ds-brand);
    color: #000;
  }

  .bar {
    width: 32px;
    height: 2px;
    background: var(--ds-line-strong);
  }

  .bar.on {
    background: var(--ds-brand);
  }

  .steplabel {
    margin-left: 4px;
    font-size: var(--ds-text-2xs);
    font-weight: 700;
    color: var(--ds-fg-dim);
  }

  .fields {
    display: grid;
    gap: var(--ds-space-4);
    margin-top: var(--ds-space-5);
  }

  .terms {
    margin-top: var(--ds-space-4);
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

  /* ----------------------------------------------------------- geteilt */

  .demo[data-r='geteilt'] {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    padding: 0;
    overflow: hidden;
    min-height: 520px;
  }

  .demo[data-r='geteilt'] .claim {
    padding: var(--ds-space-7);
    background-color: #101010;
    background-image: var(--ds-grain);
    background-size: 140px 140px;
    background-blend-mode: overlay;
  }

  .demo[data-r='geteilt'] .panel {
    display: grid;
    align-content: center;
    padding: var(--ds-space-7);
  }

  /* ------------------------------------------------------------- karte */

  .demo[data-r='karte'],
  .demo[data-r='schritte'] {
    max-width: 460px;
    margin-inline: auto;
  }

  /* ------------------------------------------------------------- blatt */

  .demo[data-r='blatt'] {
    max-width: 420px;
    margin-inline: auto;
    padding: var(--ds-space-6) 0;
    border: 0;
    border-radius: 0;
  }

  /* ----------------------------------------------------------- kompakt */

  .demo[data-r='kompakt'] {
    max-width: 360px;
    margin-inline: auto;
    padding: var(--ds-space-5);
  }

  .demo[data-r='kompakt'] h3 {
    font-size: 24px;
  }

  .demo[data-r='kompakt'] .fields {
    gap: var(--ds-space-3);
    margin-top: var(--ds-space-4);
  }

  @media (max-width: 760px) {
    .demo[data-r='geteilt'] {
      display: block;
      min-height: 0;
    }

    .demo[data-r='geteilt'] .claim {
      display: none;
    }

    .demo[data-r='geteilt'] .panel {
      padding: var(--ds-space-5);
    }
  }
</style>
