<script lang="ts">
  import { resolve } from '$app/paths';

  import { rounds } from '#lib/taste/rounds';

  const rules = [
    'Gleicher Inhalt, gleiche Daten. Sonst vergleicht man Text statt Form.',
    'Eine Runde = eine Entscheidung. Nicht alles gleichzeitig.',
    'Mindestens fünf echte Varianten. Varianten, die nur den Akzent tauschen, zählen nicht.',
    'Erst sehen, dann reden. Jede Variante ist ein gerenderter Screen, keine Beschreibung.'
  ];
</script>

<svelte:head>
  <title>Taste — DesignSpace</title>
</svelte:head>

<header class="head">
  <p class="ds-eyebrow">Geschmack · Runden</p>
  <h1>Jede Runde eine Entscheidung</h1>
  <p class="ds-measure ds-dim">
    Abstrakte Begriffe wie „modern" oder „clean" helfen nicht. Deshalb wird dieselbe Aufgabe in
    fünf echten Varianten gebaut und verglichen. Jede Runde behält ihre eigene Adresse — nichts
    wird überschrieben.
  </p>
</header>

<ol class="rounds">
  {#each rounds as round}
    <li class:open={round.open}>
      <a href={`${resolve('/taste')}/${round.slug}/`}>
        <span class="no">{round.no}</span>
        <span class="body">
          <span class="title">{round.title}</span>
          <span class="question">{round.question}</span>
          <span class="result">{round.result}</span>
        </span>
        <span class="arrow" aria-hidden="true">→</span>
      </a>
    </li>
  {/each}
</ol>

<section class="method" aria-labelledby="method-title">
  <h2 id="method-title">Wie verglichen wird</h2>
  <ol>
    {#each rules as rule}
      <li>{rule}</li>
    {/each}
  </ol>
</section>

<style>
  .head {
    padding-bottom: var(--ds-space-8);
  }

  h1 {
    margin: var(--ds-space-3) 0 var(--ds-space-4);
    font-size: var(--ds-text-3xl);
    letter-spacing: -0.03em;
    max-width: 22ch;
  }

  .rounds {
    display: grid;
    border-top: var(--ds-border-hairline) solid var(--ds-line);
  }

  .rounds li {
    border-bottom: var(--ds-border-hairline) solid var(--ds-line);
  }

  .rounds a {
    display: grid;
    grid-template-columns: 3.5rem 1fr auto;
    gap: var(--ds-space-4);
    align-items: center;
    min-height: 96px;
    padding: var(--ds-space-4) 0;
    color: var(--ds-fg);
    text-decoration: none;
  }

  .rounds a:hover {
    background: var(--ds-surface);
    padding-inline: var(--ds-space-4);
    margin-inline: calc(-1 * var(--ds-space-4));
  }

  .no {
    font-family: var(--ds-font-mono);
    font-size: var(--ds-text-sm);
    font-weight: var(--ds-weight-bold);
    color: var(--ds-fg-dim);
  }

  .body {
    display: grid;
    gap: 2px;
  }

  .title {
    font-size: var(--ds-text-xl);
    font-weight: var(--ds-weight-bold);
    letter-spacing: -0.02em;
  }

  .question {
    font-size: var(--ds-text-sm);
    color: var(--ds-fg-dim);
  }

  .result {
    font-family: var(--ds-font-mono);
    font-size: var(--ds-text-2xs);
    font-weight: var(--ds-weight-bold);
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .open .result {
    color: var(--ds-fg);
  }

  .arrow {
    font-size: var(--ds-text-xl);
  }

  .method {
    margin-top: var(--ds-space-10);
  }

  .method h2 {
    font-size: var(--ds-text-2xl);
    margin-bottom: var(--ds-space-5);
  }

  .method ol {
    display: grid;
    gap: var(--ds-space-4);
    max-width: var(--ds-measure);
    counter-reset: step;
  }

  .method li {
    counter-increment: step;
    padding-left: var(--ds-space-7);
    position: relative;
    font-size: var(--ds-text-sm);
  }

  .method li::before {
    content: counter(step);
    position: absolute;
    left: 0;
    top: 0;
    font-family: var(--ds-font-mono);
    font-weight: var(--ds-weight-bold);
    color: var(--ds-fg-dim);
  }

  @media (max-width: 700px) {
    .rounds a {
      grid-template-columns: 2.5rem 1fr;
      min-height: 0;
      padding: var(--ds-space-5) 0;
    }

    .arrow {
      display: none;
    }

    .title {
      font-size: var(--ds-text-lg);
    }
  }
</style>
