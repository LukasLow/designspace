<script lang="ts">
  import { resolve } from '$app/paths';
  import { profileEntries } from '#lib/taste/profile-routes';

  const hypotheses = [
    {
      title: 'Bildfläche',
      question: 'Titelbild oder ruhiger Kopf?',
      test: 'layout.md · shapes.md'
    },
    {
      title: 'Hierarchie',
      question: 'Wie laut darf der Name sein, wenn ein Bild daneben steht?',
      test: 'type.md'
    },
    {
      title: 'Aktionen',
      question: 'Folgen als Fläche, Kante oder Zeile?',
      test: 'colors.md · shapes.md'
    }
  ];
</script>

<svelte:head>
  <title>Runde 15 · Social Profile — DesignSpace</title>
</svelte:head>

<header class="head">
  <p class="ds-eyebrow">Runde 15 · Social Profile</p>
  <h1>Wie sieht ein Mensch aus?</h1>
  <p class="ds-measure ds-dim">
    Fünf Profile, gleicher Inhalt, gleiche Farben. Es ändert sich, wie viel Bild, wie laut der
    Name und wo die Aktionen sitzen.
  </p>
</header>

<section class="hyp" aria-labelledby="hyp-title">
  <h2 id="hyp-title">Drei Hypothesen</h2>
  <ol>
    {#each hypotheses as hypothesis}
      <li>
        <p class="h-title">{hypothesis.title}</p>
        <p class="h-question">{hypothesis.question}</p>
        <p class="h-test">{hypothesis.test}</p>
      </li>
    {/each}
  </ol>
</section>

<ol class="list">
  {#each profileEntries as entry}
    <li>
      <a href={`${resolve('/taste/15')}/${entry.slug}/`}>
        <span class="no">{entry.no}</span>
        <span class="body">
          <span class="title">{entry.title}</span>
          <span class="note">{entry.note}</span>
        </span>
        <span class="arrow" aria-hidden="true">→</span>
      </a>
    </li>
  {/each}
</ol>

<style>
  .head {
    padding-bottom: var(--ds-space-7);
  }

  h1 {
    margin: var(--ds-space-3) 0 var(--ds-space-4);
    font-size: var(--ds-text-3xl);
    letter-spacing: -0.03em;
    max-width: 20ch;
  }

  .hyp {
    margin-bottom: var(--ds-space-8);
    padding: var(--ds-space-5);
    border: 1px solid var(--ds-line);
    background: var(--ds-surface);
  }

  .hyp h2 {
    font-size: var(--ds-text-2xs);
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--ds-fg-dim);
    margin-bottom: var(--ds-space-4);
  }

  .hyp ol {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--ds-space-5);
  }

  .h-title {
    font-size: var(--ds-text-base);
    font-weight: 700;
  }

  .h-question {
    margin-top: 4px;
    font-size: var(--ds-text-sm);
    color: var(--ds-fg-dim);
    line-height: 1.5;
  }

  .h-test {
    margin-top: var(--ds-space-2);
    font-size: var(--ds-text-2xs);
    font-weight: 700;
    color: var(--ds-fg-dim);
  }

  .list {
    display: grid;
    border-top: var(--ds-border-hairline) solid var(--ds-line);
  }

  .list li {
    border-bottom: var(--ds-border-hairline) solid var(--ds-line);
  }

  .list a {
    display: grid;
    grid-template-columns: 3.5rem 1fr auto;
    gap: var(--ds-space-4);
    align-items: center;
    min-height: 96px;
    padding: var(--ds-space-4) 0;
    color: var(--ds-fg);
    text-decoration: none;
  }

  .list a:hover {
    background: var(--ds-surface);
    padding-inline: var(--ds-space-4);
    margin-inline: calc(-1 * var(--ds-space-4));
  }

  .no {
    font-size: var(--ds-text-sm);
    font-weight: 700;
    color: var(--ds-fg-dim);
  }

  .body {
    display: grid;
    gap: 2px;
  }

  .title {
    font-size: var(--ds-text-xl);
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  .note {
    font-size: var(--ds-text-sm);
    color: var(--ds-fg-dim);
    max-width: 70ch;
  }

  .arrow {
    font-size: var(--ds-text-xl);
  }

  @media (max-width: 820px) {
    .hyp ol {
      grid-template-columns: 1fr;
      gap: var(--ds-space-4);
    }

    .list a {
      grid-template-columns: 2.5rem 1fr;
    }

    .arrow {
      display: none;
    }
  }
</style>
