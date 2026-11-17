<script lang="ts">
  import Button from '#lib/components/Button.svelte';
  import type { LandingVariant } from './landing-routes';

  let { variant }: { variant: LandingVariant } = $props();

  const features = [
    {
      title: '92 Bausteine',
      text: 'Komponenten, Screens, Icons, Bewegung und Paletten — an einem Ort.'
    },
    {
      title: 'Eine Entscheidung pro Runde',
      text: 'Jede Regel ist getestet und belegt, nicht geraten.'
    },
    {
      title: 'Low Vision zuerst',
      text: '13,5 px Minimum, 48 px Ziele, Atkinson Hyperlegible.'
    }
  ];
</script>

<div class="page" data-l={variant}>
  <header class="nav">
    <span class="brand"><span class="logo" aria-hidden="true">N</span> DesignSpace</span>
    <nav class="links" aria-hidden="true">
      <span>Produkt</span>
      <span>Bibliothek</span>
      <span>Preise</span>
    </nav>
    <span class="navcta"><Button>Loslegen</Button></span>
  </header>

  <div class="top">
    <section class="hero">
      <p class="kick">Design-Bibliothek · 92 Bausteine</p>
      <h2>Design, das man anfassen kann.</h2>
      <p class="lead">
        Flächen, Kanten und Zustände, die zusammen funktionieren — gebaut für Low Vision,
        nicht für den Durchschnitt.
      </p>
      <div class="acts">
        <Button>Loslegen</Button>
        <Button variant="secondary">Bibliothek ansehen</Button>
      </div>
    </section>

    <div class="visual" aria-hidden="true">
      <span class="big">18</span>
      <span class="caption">Radius · entschieden in Runde 9</span>
    </div>
  </div>

  <ul class="features">
    {#each features as feature, i}
      <li>
        <span class="no">{String(i + 1).padStart(2, '0')}</span>
        <h3>{feature.title}</h3>
        <p>{feature.text}</p>
      </li>
    {/each}
  </ul>

  <footer class="foot">
    <span>DesignSpace</span>
    <span>Berlin · 2026</span>
  </footer>
</div>

<style>
  .page {
    padding: var(--ds-space-6);
    background: #000;
    border: 1px solid var(--ds-line);
    border-radius: var(--ds-radius-lg);
  }

  .nav {
    display: flex;
    align-items: center;
    gap: var(--ds-space-5);
    padding-bottom: var(--ds-space-4);
    border-bottom: 1px solid var(--ds-line);
  }

  .brand {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: var(--ds-text-sm);
    font-weight: 700;
  }

  .logo {
    display: grid;
    place-items: center;
    width: 30px;
    height: 30px;
    border-radius: 9px;
    background: var(--ds-brand);
    color: #000;
    font-size: 16px;
    font-weight: 700;
  }

  .links {
    display: flex;
    gap: var(--ds-space-4);
    font-size: var(--ds-text-sm);
    font-weight: 700;
    color: var(--ds-fg-dim);
  }

  .navcta {
    margin-left: auto;
  }

  .top {
    display: grid;
    gap: var(--ds-space-7);
    padding: var(--ds-space-7) 0;
  }

  .kick {
    font-size: var(--ds-text-2xs);
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--ds-brand);
  }

  h2 {
    margin-top: 10px;
    font-size: 52px;
    line-height: 0.98;
    letter-spacing: -0.045em;
    max-width: 18ch;
  }

  .lead {
    margin-top: var(--ds-space-4);
    max-width: 52ch;
    font-size: var(--ds-text-lg);
    line-height: 1.55;
    color: var(--ds-fg-dim);
  }

  .acts {
    display: flex;
    gap: var(--ds-space-2);
    flex-wrap: wrap;
    margin-top: var(--ds-space-5);
  }

  .visual {
    display: grid;
    place-items: center;
    gap: 6px;
    min-height: 220px;
    border: 1px solid var(--ds-line);
    border-radius: var(--ds-radius-lg);
    background-color: #101010;
    background-image: var(--ds-grain);
    background-size: 140px 140px;
    background-blend-mode: overlay;
  }

  .big {
    font-size: 120px;
    font-weight: 700;
    line-height: 0.8;
    letter-spacing: -0.06em;
    color: var(--ds-brand);
  }

  .caption {
    font-size: var(--ds-text-2xs);
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--ds-fg-dim);
  }

  .features {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--ds-space-5);
    padding-top: var(--ds-space-6);
    border-top: 1px solid var(--ds-line);
  }

  .features .no {
    font-size: var(--ds-text-2xs);
    font-weight: 700;
    color: var(--ds-fg-dim);
  }

  .features h3 {
    margin-top: 6px;
    font-size: var(--ds-text-lg);
    letter-spacing: -0.02em;
  }

  .features p {
    margin-top: 6px;
    font-size: var(--ds-text-sm);
    line-height: 1.55;
    color: var(--ds-fg-dim);
  }

  .foot {
    display: flex;
    justify-content: space-between;
    gap: var(--ds-space-4);
    margin-top: var(--ds-space-7);
    padding-top: var(--ds-space-4);
    border-top: 1px solid var(--ds-line);
    font-size: var(--ds-text-2xs);
    font-weight: 700;
    color: var(--ds-fg-dim);
  }

  /* --------------------------------------------------------- zentriert */

  .page[data-l='zentriert'] .hero {
    text-align: center;
    max-width: 720px;
    margin-inline: auto;
  }

  .page[data-l='zentriert'] h2,
  .page[data-l='zentriert'] .lead {
    margin-inline: auto;
  }

  .page[data-l='zentriert'] .acts {
    justify-content: center;
  }

  /* ----------------------------------------------------------- geteilt */

  .page[data-l='geteilt'] .top {
    grid-template-columns: 1.05fr 1fr;
    align-items: center;
  }

  .page[data-l='geteilt'] .visual {
    min-height: 300px;
  }

  /* --------------------------------------------------------- editorial */

  .page[data-l='editorial'] h2 {
    font-size: 64px;
    max-width: 16ch;
  }

  .page[data-l='editorial'] .features {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .page[data-l='editorial'] .features li {
    display: grid;
    grid-template-columns: 48px 1fr 1.4fr;
    gap: var(--ds-space-4);
    align-items: baseline;
    padding: var(--ds-space-4) 0;
    border-bottom: 1px solid var(--ds-line-faint);
  }

  .page[data-l='editorial'] .features h3,
  .page[data-l='editorial'] .features p {
    margin-top: 0;
  }

  /* ------------------------------------------------------------- bento */

  .page[data-l='bento'] .features,
  .page[data-l='bento-mitte'] .features {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--ds-space-3);
    padding-top: 0;
    border-top: 0;
  }

  .page[data-l='bento'] .features li,
  .page[data-l='bento-mitte'] .features li {
    padding: var(--ds-space-5);
    border: 1px solid var(--ds-line);
    border-radius: var(--ds-radius-lg);
    background: var(--ds-surface);
  }

  .page[data-l='bento'] .features li:first-child,
  .page[data-l='bento-mitte'] .features li:first-child {
    grid-row: span 2;
    display: grid;
    align-content: end;
  }

  /* ------------------------------------------------------ bento mittig */

  .page[data-l='bento-mitte'] .hero {
    text-align: center;
    max-width: 720px;
    margin-inline: auto;
  }

  .page[data-l='bento-mitte'] h2,
  .page[data-l='bento-mitte'] .lead {
    margin-inline: auto;
  }

  .page[data-l='bento-mitte'] .acts {
    justify-content: center;
  }

  /* ------------------------------------------------------------- ruhig */

  .page[data-l='ruhig'] h2 {
    font-size: 40px;
  }

  .page[data-l='ruhig'] .lead {
    font-size: var(--ds-text-sm);
  }

  .page[data-l='ruhig'] .top {
    gap: var(--ds-space-5);
    padding: var(--ds-space-5) 0;
  }

  .page[data-l='ruhig'] .visual {
    min-height: 140px;
  }

  .page[data-l='ruhig'] .big {
    font-size: 72px;
  }

  .page[data-l='ruhig'] .features {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .page[data-l='ruhig'] .features li {
    display: grid;
    grid-template-columns: 40px 1fr;
    gap: 4px var(--ds-space-4);
    padding: 12px 0;
    border-bottom: 1px solid var(--ds-line-faint);
  }

  .page[data-l='ruhig'] .features h3 {
    margin-top: 0;
  }

  .page[data-l='ruhig'] .features p {
    grid-column: 2;
    margin-top: 2px;
  }

  @media (max-width: 820px) {
    .page[data-l='geteilt'] .top {
      grid-template-columns: 1fr;
    }

    .page[data-l] .features {
      grid-template-columns: 1fr;
    }

    .page[data-l='editorial'] .features li {
      grid-template-columns: 40px 1fr;
    }

    .page[data-l='editorial'] .features p {
      grid-column: 2;
    }

    .page[data-l='bento'] .features li:first-child {
      grid-row: auto;
    }

    h2 {
      font-size: 40px;
    }
  }
</style>
