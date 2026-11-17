<script lang="ts">
  import type { ArticleVariant } from './article-routes';

  let { variant }: { variant: ArticleVariant } = $props();

  const toc = ['Ausgangslage', 'Messung', 'Entscheidung', 'Folgen'];
</script>

<div class="demo" data-a={variant}>
  <header class="head">
    <p class="kick">DesignSpace · Notizen</p>
    <h3>Kantenradius in Designsystemen</h3>
    <p class="lead">Warum 18 Pixel keine Willkür sind.</p>
  </header>

  <div class="body">
    <nav class="toc" aria-hidden="true">
      <p class="tt">Inhalt</p>
      <ol>
        {#each toc as item}
          <li>{item}</li>
        {/each}
      </ol>
    </nav>

    <article class="text">
      <h4><span class="no">1</span> Ausgangslage</h4>
      <p>
        Ein Radius ist keine Verzierung. Er sagt, wie ein Gegenstand gedacht ist: scharf wie ein
        Werkzeug, weich wie ein Polster. Wer ihn ändert, ändert die Aussage.
      </p>

      <h4><span class="no">2</span> Messung</h4>
      <p>
        Acht Kandidaten, ein Turnier, drei Runden. Gewonnen hat der Radius, der sich beim Drücken
        wie ein Gegenstand anfühlt, ohne die Kante zu verlieren.
      </p>

      <table>
        <thead>
          <tr><th>Radius</th><th>Wirkung</th><th>Einsatz</th></tr>
        </thead>
        <tbody>
          <tr><td>0 px</td><td>technisch</td><td>nie</td></tr>
          <tr><td>18 px</td><td>ruhig</td><td>Controls</td></tr>
          <tr><td>22 px</td><td>weich</td><td>Karten</td></tr>
        </tbody>
      </table>
    </article>

    <aside class="facts">
      <dl>
        <div><dt>System</dt><dd>DesignSpace</dd></div>
        <div><dt>Runde</dt><dd>9</dd></div>
        <div><dt>Status</dt><dd>entschieden</dd></div>
      </dl>
    </aside>
  </div>
</div>

<style>
  .demo {
    padding: var(--ds-space-6);
    background: #000;
    border: 1px solid var(--ds-line);
    border-radius: var(--ds-radius-lg);
  }

  .kick {
    font-size: var(--ds-text-2xs);
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--ds-fg-dim);
  }

  h3 {
    margin-top: 8px;
    font-size: 34px;
    line-height: 1.02;
    letter-spacing: -0.04em;
  }

  .lead {
    margin-top: 8px;
    font-size: var(--ds-text-lg);
    color: var(--ds-fg-dim);
  }

  .body {
    display: grid;
    gap: var(--ds-space-6);
    align-items: start;
    margin-top: var(--ds-space-6);
  }

  .toc {
    min-width: 0;
  }

  .tt {
    font-size: var(--ds-text-2xs);
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--ds-fg-dim);
    margin-bottom: 8px;
  }

  .toc li {
    padding: 6px 0;
    font-size: var(--ds-text-sm);
    font-weight: 700;
    color: var(--ds-fg-dim);
    border-bottom: 1px solid var(--ds-line-faint);
  }

  .text {
    min-width: 0;
  }

  h4 {
    display: flex;
    align-items: baseline;
    gap: 10px;
    margin: 26px 0 8px;
    font-size: var(--ds-text-xl);
    letter-spacing: -0.02em;
  }

  .no {
    font-size: var(--ds-text-2xs);
    font-weight: 700;
    color: var(--ds-fg-dim);
  }

  .text p {
    margin-bottom: var(--ds-space-4);
    font-size: var(--ds-text-sm);
    line-height: 1.7;
  }

  table {
    width: 100%;
    margin-top: var(--ds-space-4);
    border-collapse: collapse;
  }

  th {
    padding: 8px 0;
    border-bottom: 1px solid var(--ds-line);
    font-size: var(--ds-text-2xs);
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--ds-fg-dim);
    text-align: left;
  }

  td {
    padding: 10px 0;
    border-bottom: 1px solid var(--ds-line-faint);
    font-size: var(--ds-text-sm);
  }

  .facts {
    padding: var(--ds-space-4);
    border: 1px solid var(--ds-line);
    border-radius: var(--ds-radius-control);
  }

  .facts dl {
    display: grid;
    gap: 8px;
  }

  .facts div {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: var(--ds-space-3);
  }

  dt {
    font-size: var(--ds-text-2xs);
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--ds-fg-dim);
  }

  dd {
    margin: 0;
    font-size: var(--ds-text-sm);
    font-weight: 700;
  }

  /* ---------------------------------------------------------- klassisch */

  .demo[data-a='klassisch'] .body {
    grid-template-columns: 170px 1fr;
    grid-template-areas:
      'toc text'
      'toc facts';
  }

  .demo[data-a='klassisch'] .toc {
    grid-area: toc;
    position: sticky;
    top: 16px;
  }

  .demo[data-a='klassisch'] .text {
    grid-area: text;
    max-width: 62ch;
  }

  .demo[data-a='klassisch'] .facts {
    grid-area: facts;
    max-width: 62ch;
  }

  /* --------------------------------------------------------------- buch */

  .demo[data-a='buch'] .body {
    grid-template-columns: 1fr;
    max-width: 45ch;
    margin-inline: auto;
  }

  .demo[data-a='buch'] .toc {
    display: none;
  }

  /* -------------------------------------------------------- zwei-spalten */

  .demo[data-a='zwei-spalten'] .body {
    grid-template-columns: 1fr 220px;
    grid-template-areas:
      'text toc'
      'text facts';
  }

  .demo[data-a='zwei-spalten'] .text {
    grid-area: text;
    max-width: 62ch;
  }

  .demo[data-a='zwei-spalten'] .toc {
    grid-area: toc;
  }

  .demo[data-a='zwei-spalten'] .facts {
    grid-area: facts;
  }

  /* ---------------------------------------------------------- fliessend */

  .demo[data-a='fliessend'] .body {
    grid-template-columns: 1fr;
    max-width: 720px;
  }

  .demo[data-a='fliessend'] .toc {
    order: -1;
    padding: 12px 14px;
    border: 1px solid var(--ds-line);
    border-radius: var(--ds-radius-control);
  }

  /* -------------------------------------------------------------- dicht */

  .demo[data-a='dicht'] {
    padding: var(--ds-space-4);
  }

  .demo[data-a='dicht'] .body {
    grid-template-columns: 1fr;
    max-width: 720px;
    margin-top: var(--ds-space-4);
  }

  .demo[data-a='dicht'] .toc {
    order: -1;
  }

  .demo[data-a='dicht'] .toc ol {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .demo[data-a='dicht'] .toc li {
    padding: 4px 10px;
    border: 1px solid var(--ds-line-strong);
    border-radius: var(--ds-radius-control);
  }

  .demo[data-a='dicht'] .tt {
    display: none;
  }

  .demo[data-a='dicht'] .text p {
    margin-bottom: 10px;
  }

  .demo[data-a='dicht'] td,
  .demo[data-a='dicht'] th {
    padding: 6px 0;
  }

  /* --------------------------------------------------------------- kombi */

  .demo[data-a='kombi'] .body {
    grid-template-columns: minmax(0, 1fr) 200px;
    grid-template-areas:
      'text toc'
      'facts toc';
  }

  .demo[data-a='kombi'] .text {
    grid-area: text;
    max-width: 45ch;
  }

  .demo[data-a='kombi'] .facts {
    grid-area: facts;
    max-width: 45ch;
  }

  .demo[data-a='kombi'] .toc {
    grid-area: toc;
    position: sticky;
    top: 16px;
  }

  /* ---------------------------------------------------------- dreispaltig */

  .demo[data-a='dreispaltig'] .body {
    grid-template-columns: 160px minmax(0, 45ch) 210px;
    grid-template-areas: 'toc text facts';
    justify-content: center;
  }

  .demo[data-a='dreispaltig'] .toc {
    grid-area: toc;
    position: sticky;
    top: 16px;
  }

  .demo[data-a='dreispaltig'] .text {
    grid-area: text;
  }

  .demo[data-a='dreispaltig'] .facts {
    grid-area: facts;
    position: sticky;
    top: 16px;
  }

  @media (max-width: 900px) {
    .demo[data-a='dreispaltig'] .body {
      grid-template-columns: minmax(0, 1fr) 180px;
      grid-template-areas:
        'text facts'
        'toc toc';
    }
  }

  @media (max-width: 760px) {
    .demo[data-a] .body {
      grid-template-columns: 1fr;
      grid-template-areas: none;
      max-width: none;
    }

    .demo[data-a='buch'] .body {
      max-width: 100%;
    }
  }
</style>
