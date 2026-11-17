<script lang="ts">
  import Chip from '#lib/components/Chip.svelte';
  import type { FeedVariant } from './feed-routes';

  let { variant }: { variant: FeedVariant } = $props();

  const posts = [
    {
      name: 'Mira Vogt',
      initials: 'MV',
      time: 'vor 2 Std.',
      tag: 'Raster',
      text: 'Die neue Rasterung ist im Druck angekommen. 18 px waren die richtige Entscheidung — die Kante trägt, ohne zu schreien.',
      likes: '24',
      comments: '6'
    },
    {
      name: 'Jonas Kern',
      initials: 'JK',
      time: 'gestern',
      tag: 'Schrift',
      text: 'Atkinson bei 13,5 px: besser lesbar als jede Grotesk bei 16. Warum tun wir uns das mit anderen Schriften noch an?',
      likes: '41',
      comments: '12'
    },
    {
      name: 'Lena Hoffmann',
      initials: 'LH',
      time: 'vor 3 Tagen',
      tag: 'Prozess',
      text: 'Drei Stunden Kantenradius diskutiert. Ergebnis: 18. Manchmal ist die kleinste Zahl die längste Entscheidung.',
      likes: '18',
      comments: '3'
    }
  ];
</script>

<div class="demo" data-f={variant}>
  <header class="top">
    <h3>Start</h3>
    <div class="filters">
      <Chip tone="brand">Alle</Chip>
      <Chip>Freunde</Chip>
      <Chip>Design</Chip>
    </div>
  </header>

  <div class="posts">
    {#each posts as post}
      <article class="post">
        <div class="phead">
          <span class="pa" aria-hidden="true">{post.initials}</span>
          <div class="who">
            <p class="pname">{post.name}</p>
            <p class="ptime">{post.time}</p>
          </div>
          <span class="ptag">{post.tag}</span>
        </div>

        <p class="ptext">{post.text}</p>

        <div class="pactions" aria-hidden="true">
          <span class="act">
            <svg viewBox="0 0 24 24">
              <path d="M12 20s-7-4.5-7-9a4 4 0 0 1 7-2.5A4 4 0 0 1 19 11c0 4.5-7 9-7 9z" />
            </svg>
            {post.likes}
          </span>
          <span class="act">
            <svg viewBox="0 0 24 24">
              <path d="M21 12a8 8 0 0 1-8 8H7l-4 2V12a8 8 0 0 1 8-8h2a8 8 0 0 1 8 8z" />
            </svg>
            {post.comments}
          </span>
          <span class="act">
            <svg viewBox="0 0 24 24">
              <path d="M12 16V4M8 8l4-4 4 4M5 14v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4" />
            </svg>
            Teilen
          </span>
        </div>
      </article>
    {/each}
  </div>
</div>

<style>
  .demo {
    padding: var(--ds-space-6);
    background: #000;
    border: 1px solid var(--ds-line);
    border-radius: var(--ds-radius-lg);
  }

  .top {
    display: flex;
    align-items: center;
    gap: var(--ds-space-4);
    flex-wrap: wrap;
    padding-bottom: var(--ds-space-4);
  }

  h3 {
    font-size: 28px;
    letter-spacing: -0.03em;
  }

  .filters {
    display: flex;
    gap: 6px;
    margin-left: auto;
    flex-wrap: wrap;
  }

  .post {
    display: grid;
    gap: 10px;
    padding: var(--ds-space-5) 0;
    border-top: 1px solid var(--ds-line-faint);
  }

  .phead {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .pa {
    display: grid;
    place-items: center;
    width: 36px;
    height: 36px;
    flex: none;
    border-radius: 10px;
    background: var(--ds-surface-2);
    color: var(--ds-fg-dim);
    font-size: var(--ds-text-2xs);
    font-weight: 700;
  }

  .who {
    min-width: 0;
  }

  .pname {
    font-size: var(--ds-text-sm);
    font-weight: 700;
  }

  .ptime {
    font-size: var(--ds-text-2xs);
    color: var(--ds-fg-dim);
  }

  .ptag {
    margin-left: auto;
    padding: 3px 9px;
    border: 1px solid var(--ds-line-strong);
    border-radius: var(--ds-radius-control);
    font-size: var(--ds-text-2xs);
    font-weight: 700;
    color: var(--ds-fg-dim);
  }

  .ptext {
    font-size: var(--ds-text-sm);
    line-height: 1.6;
    max-width: 60ch;
  }

  .pactions {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
  }

  .act {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    min-height: 40px;
    padding: 0 10px;
    border: 1px solid var(--ds-line-strong);
    border-radius: 12px;
    font-size: var(--ds-text-xs);
    font-weight: 700;
  }

  .act svg {
    width: 16px;
    height: 16px;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.8;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  /* ------------------------------------------------------------ karten */

  .demo[data-f='karten'] .post,
  .demo[data-f='raster'] .post {
    padding: var(--ds-space-4);
    border: 1px solid var(--ds-line);
    border-radius: var(--ds-radius-lg);
    background: var(--ds-surface);
  }

  .demo[data-f='karten'] .posts {
    display: grid;
    gap: var(--ds-space-3);
  }

  /* ------------------------------------------------------------ raster */

  .demo[data-f='raster'] .posts {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--ds-space-3);
  }

  /* ------------------------------------------------------------- fokus */

  .demo[data-f='fokus'] .post {
    border-top: 0;
    padding-top: 0;
  }

  .demo[data-f='fokus'] .post:not(:first-child) {
    display: none;
  }

  .demo[data-f='fokus'] .ptext {
    font-size: var(--ds-text-lg);
    line-height: 1.55;
    max-width: 46ch;
    margin: var(--ds-space-4) 0;
  }

  .demo[data-f='fokus'] h3 {
    font-size: 40px;
  }

  /* ------------------------------------------------------------- dicht */

  .demo[data-f='dicht'] .post {
    padding: var(--ds-space-3) 0;
    gap: 6px;
  }

  .demo[data-f='dicht'] .ptext {
    font-size: var(--ds-text-xs);
    line-height: 1.55;
  }

  .demo[data-f='dicht'] .pactions {
    margin-top: 2px;
  }

  @media (max-width: 820px) {
    .demo[data-f='raster'] .posts {
      grid-template-columns: 1fr;
    }

    .filters {
      margin-left: 0;
    }
  }
</style>
