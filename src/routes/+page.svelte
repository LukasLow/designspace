<script lang="ts">
  import { resolve } from '$app/paths';
  import Button from '#lib/components/Button.svelte';
  import { components } from '#lib/components/manifest';
  import { directions } from '#lib/taste/registry';

  const meta = [
    { label: 'Komponenten', value: String(components.length) },
    { label: 'Richtungen', value: String(directions.length) },
    { label: 'Hintergrund', value: '#000000' },
    { label: 'Schrift', value: 'Atkinson' }
  ];
</script>

<svelte:head>
  <title>DesignSpace</title>
  <meta
    name="description"
    content="Design-Bibliothek auf 100 % Schwarz: Tokens, Formen und Komponenten für Low Vision."
  />
</svelte:head>

<section class="hero">
  <p class="ds-eyebrow">Design-Bibliothek · Phase 0</p>
  <h1>DesignSpace</h1>
  <p class="lead">
    Eine eigene Formensprache statt eines gerenderten Durchschnitts. Schwarz, klar, für Low
    Vision gebaut — und so sortiert, dass andere Projekte sie übernehmen können.
  </p>
</section>

<dl class="meta">
  {#each meta as item}
    <div>
      <dt>{item.label}</dt>
      <dd>{item.value}</dd>
    </div>
  {/each}
</dl>

<section class="directions" aria-labelledby="directions-title">
  <div class="head">
    <p class="ds-eyebrow">Schritt 1</p>
    <h2 id="directions-title">Fünf Richtungen, eine Entscheidung pro Runde</h2>
  </div>

  <ol class="list">
    {#each directions as direction}
      <li>
        <span class="idx">{String(direction.index).padStart(2, '0')}</span>
        <span class="name">{direction.title}</span>
        <span class="thesis">{direction.thesis}</span>
        <span class="state">{direction.status}</span>
      </li>
    {/each}
  </ol>

  <div class="cta">
    <Button href={resolve('/components')}>Komponenten</Button>
    <Button href={resolve('/vorlagen')} variant="secondary">Vorlagen</Button>
    <Button href={resolve('/icons')} variant="secondary">Icons</Button>
    <Button href={resolve('/rules')} variant="secondary">Regeln</Button>
  </div>
</section>

<section class="fundament" aria-labelledby="fundament-title">
  <div class="head">
    <p class="ds-eyebrow">Fundament</p>
    <h2 id="fundament-title">Was jetzt schon feststeht</h2>
  </div>

  <div class="two">
    <div>
      <div class="bars" aria-hidden="true">
        <span style="background: var(--ds-bg)"></span>
        <span style="background: var(--ds-surface)"></span>
        <span style="background: var(--ds-surface-2)"></span>
        <span style="background: var(--ds-surface-3)"></span>
        <span style="background: var(--ds-fg)"></span>
      </div>
      <p class="caption">
        Fünf Flächen, ein Text. Der Akzent ist noch offen — er wird nicht vor der Taste-Phase
        gesetzt.
      </p>
    </div>

    <div class="type">
      <p class="aaa">Aa</p>
      <p class="caption">
        <strong>Atkinson Hyperlegible</strong><br />
        400 / 700 · 17 px Grundgröße · Mindestgröße 13,5 px
      </p>
      <p class="caption dim">
        Kein Mittelgrau. Sekundäres wird über Größe und Gewicht unterschieden, nie über #666.
      </p>
    </div>
  </div>
</section>

<section class="rules" aria-labelledby="rules-title">
  <h2 id="rules-title">Regeln</h2>
  <ol>
    <li><strong>100 % Schwarz.</strong> Der Seitenhintergrund ist immer #000.</li>
    <li><strong>Kein Mittelgrau für Text.</strong> Größe und Gewicht tragen die Hierarchie.</li>
    <li><strong>Mindestens fünf echte Varianten</strong> pro Entscheidung.</li>
    <li><strong>Nichts wird festgelegt</strong>, bevor es gerendert und gewählt wurde.</li>
  </ol>
</section>

<style>
  .hero {
    padding: var(--ds-space-10) 0 var(--ds-space-8);
  }

  .hero h1 {
    margin: var(--ds-space-4) 0 var(--ds-space-5);
    font-size: var(--ds-text-display);
    line-height: 0.95;
    letter-spacing: -0.04em;
  }

  .lead {
    max-width: 54ch;
    font-size: var(--ds-text-lg);
    line-height: var(--ds-leading-normal);
  }

  /* Kennzahlen als eine Zeile mit Trennlinien statt drei gleicher Karten. */
  .meta {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border-top: var(--ds-border-hairline) solid var(--ds-line);
    border-bottom: var(--ds-border-hairline) solid var(--ds-line);
  }

  .meta > div {
    padding: var(--ds-space-4) var(--ds-space-5);
    border-left: var(--ds-border-hairline) solid var(--ds-line-faint);
  }

  .meta > div:first-child {
    border-left: 0;
    padding-left: 0;
  }

  .meta dt {
    font-size: var(--ds-text-2xs);
    font-weight: var(--ds-weight-bold);
    letter-spacing: var(--ds-tracking-wide);
    text-transform: uppercase;
  }

  .meta dd {
    margin: var(--ds-space-1) 0 0;
    font-size: var(--ds-text-lg);
    font-weight: var(--ds-weight-bold);
    letter-spacing: -0.02em;
  }

  section {
    padding: var(--ds-space-10) 0 0;
  }

  .head {
    margin-bottom: var(--ds-space-6);
  }

  h2 {
    margin-top: var(--ds-space-2);
    max-width: 26ch;
    font-size: var(--ds-text-2xl);
    letter-spacing: -0.025em;
  }

  .list {
    border-top: var(--ds-border-hairline) solid var(--ds-line);
  }

  .list li {
    display: grid;
    grid-template-columns: 3.5rem minmax(9rem, 0.8fr) 2fr auto;
    gap: var(--ds-space-4);
    align-items: baseline;
    padding: var(--ds-space-4) 0;
    border-bottom: var(--ds-border-hairline) solid var(--ds-line-faint);
  }

  .idx {
    font-family: var(--ds-font-mono);
    font-size: var(--ds-text-xs);
    font-weight: var(--ds-weight-bold);
    color: var(--ds-fg-dim);
  }

  .name {
    font-size: var(--ds-text-lg);
    font-weight: var(--ds-weight-bold);
    letter-spacing: -0.01em;
  }

  .thesis {
    font-size: var(--ds-text-sm);
    color: var(--ds-fg-dim);
  }

  .state {
    padding: 3px var(--ds-space-2);
    border: var(--ds-border-hairline) solid var(--ds-line-strong);
    border-radius: var(--ds-radius-pill);
    font-size: var(--ds-text-2xs);
    font-weight: var(--ds-weight-bold);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .cta {
    display: flex;
    flex-wrap: wrap;
    gap: var(--ds-space-3);
    margin-top: var(--ds-space-6);
  }

  .two {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: var(--ds-space-9);
    align-items: start;
  }

  .bars {
    display: flex;
    height: 84px;
    border: var(--ds-border-hairline) solid var(--ds-line-strong);
    border-radius: var(--ds-radius-sm);
    overflow: hidden;
  }

  .bars span {
    flex: 1;
  }

  .caption {
    margin-top: var(--ds-space-4);
    max-width: 44ch;
    font-size: var(--ds-text-sm);
    line-height: var(--ds-leading-normal);
    color: var(--ds-fg-dim);
  }

  .caption.dim {
    margin-top: var(--ds-space-3);
  }

  .aaa {
    font-size: clamp(4rem, 9vw, 7rem);
    font-weight: var(--ds-weight-bold);
    line-height: 0.9;
    letter-spacing: -0.05em;
  }

  .type .caption {
    margin-top: var(--ds-space-5);
  }

  .rules {
    margin-top: var(--ds-space-10);
    padding-top: var(--ds-space-7);
    border-top: var(--ds-border-hairline) solid var(--ds-line);
  }

  .rules h2 {
    font-size: var(--ds-text-xl);
    margin: 0 0 var(--ds-space-5);
  }

  .rules ol {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--ds-space-4) var(--ds-space-7);
    max-width: 70rem;
    counter-reset: rule;
  }

  .rules li {
    counter-increment: rule;
    padding-left: var(--ds-space-7);
    position: relative;
    font-size: var(--ds-text-sm);
    line-height: var(--ds-leading-normal);
  }

  .rules li::before {
    content: "0" counter(rule);
    position: absolute;
    left: 0;
    top: 0;
    font-family: var(--ds-font-mono);
    font-size: var(--ds-text-xs);
    font-weight: var(--ds-weight-bold);
    color: var(--ds-fg-dim);
  }

  @media (max-width: 900px) {
    .meta {
      grid-template-columns: repeat(2, 1fr);
    }

    .meta > div:nth-child(3) {
      border-left: 0;
      padding-left: 0;
    }

    .meta > div:nth-child(n + 3) {
      border-top: var(--ds-border-hairline) solid var(--ds-line-faint);
    }

    .list li {
      grid-template-columns: 2.5rem 1fr auto;
      grid-template-areas:
        'idx name state'
        'idx thesis thesis';
      row-gap: var(--ds-space-2);
    }

    .idx {
      grid-area: idx;
    }

    .name {
      grid-area: name;
    }

    .thesis {
      grid-area: thesis;
    }

    .state {
      grid-area: state;
      align-self: start;
    }

    .two {
      grid-template-columns: 1fr;
      gap: var(--ds-space-7);
    }

    .rules ol {
      grid-template-columns: 1fr;
    }
  }
</style>
