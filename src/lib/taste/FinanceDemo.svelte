<script lang="ts">
  import type { FinanceVariant } from './finance-routes';

  let { variant }: { variant: FinanceVariant } = $props();

  const figures = [
    { label: 'Eröffnung', value: '131,20' },
    { label: 'Hoch', value: '144,10' },
    { label: 'Tief', value: '130,05' },
    { label: 'Volumen', value: '1,24 Mio.' },
    { label: 'Marktkap.', value: '3,8 Mrd.' },
    { label: 'KGV', value: '18,4' }
  ];

  const news = [
    { title: 'Nordlicht hebt Prognose für das Gesamtjahr an', time: '09:42' },
    { title: 'Neuer Auftrag aus Hamburg: 240 Millionen', time: 'gestern' },
    { title: 'Vorstand verkauft 12.000 Aktien', time: 'vor 2 Tagen' }
  ];

  const points =
    '0,128 40,120 80,124 120,96 160,104 200,84 240,90 280,66 320,72 360,52 400,58 440,40 480,46 520,28 560,34 600,18';
</script>

<div class="demo" data-f={variant}>
  <header class="head">
    <div class="who">
      <p class="tick">NLG · Xetra</p>
      <h3>Nordlicht AG</h3>
    </div>
    <div class="quote">
      <strong>142,80 €</strong>
      <span class="chg">+12,40 · +9,5 %</span>
    </div>
  </header>

  <div class="chart" aria-hidden="true">
    <svg viewBox="0 0 600 160" preserveAspectRatio="none">
      <polyline points={points} vector-effect="non-scaling-stroke" />
    </svg>
  </div>

  <dl class="figs">
    {#each figures as fig}
      <div>
        <dt>{fig.label}</dt>
        <dd>{fig.value}</dd>
      </div>
    {/each}
  </dl>

  <ul class="news">
    {#each news as item}
      <li>
        <span class="nt">{item.title}</span>
        <span class="nm">{item.time}</span>
      </li>
    {/each}
  </ul>
</div>

<style>
  .demo {
    padding: var(--ds-space-6);
    background: #000;
    border: 1px solid var(--ds-line);
    border-radius: var(--ds-radius-lg);
  }

  .head {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: var(--ds-space-4);
    flex-wrap: wrap;
  }

  .tick {
    font-size: var(--ds-text-2xs);
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--ds-fg-dim);
  }

  h3 {
    margin-top: 4px;
    font-size: 32px;
    line-height: 1;
    letter-spacing: -0.04em;
  }

  .quote {
    display: grid;
    gap: 2px;
    text-align: right;
  }

  .quote strong {
    font-size: 36px;
    line-height: 1;
    letter-spacing: -0.04em;
  }

  .chg {
    font-size: var(--ds-text-sm);
    font-weight: 700;
    color: var(--ds-success);
  }

  .chart {
    margin-top: var(--ds-space-5);
  }

  .chart svg {
    display: block;
    width: 100%;
    height: 160px;
  }

  .chart polyline {
    fill: none;
    stroke: var(--ds-brand);
    stroke-width: 2.5;
    stroke-linejoin: round;
    stroke-linecap: round;
  }

  .figs {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--ds-space-4) var(--ds-space-5);
    margin-top: var(--ds-space-6);
  }

  .figs div {
    display: grid;
    gap: 2px;
    padding-top: 8px;
    border-top: 1px solid var(--ds-line);
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
    font-size: var(--ds-text-base);
    font-weight: 700;
  }

  .news {
    margin-top: var(--ds-space-6);
    border-top: 1px solid var(--ds-line);
  }

  .news li {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: var(--ds-space-3);
    align-items: baseline;
    padding: 14px 0;
    border-bottom: 1px solid var(--ds-line-faint);
  }

  .nt {
    font-size: var(--ds-text-sm);
    font-weight: 700;
    line-height: 1.4;
  }

  .nm {
    font-size: var(--ds-text-2xs);
    font-weight: 700;
    color: var(--ds-fg-dim);
    white-space: nowrap;
  }

  /* ---------------------------------------------------------- detail */

  .demo[data-f='detail'] {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 250px;
    grid-template-areas:
      'head head'
      'chart figs'
      'news figs';
    gap: var(--ds-space-5);
  }

  .demo[data-f='detail'] .head {
    grid-area: head;
  }

  .demo[data-f='detail'] .chart {
    grid-area: chart;
    margin-top: 0;
  }

  .demo[data-f='detail'] .figs {
    grid-area: figs;
    grid-template-columns: 1fr;
    gap: 0;
    margin-top: 0;
    border-left: 1px solid var(--ds-line);
    padding-left: var(--ds-space-5);
  }

  .demo[data-f='detail'] .figs div {
    padding: 10px 0;
    border-top: 0;
    border-bottom: 1px solid var(--ds-line-faint);
  }

  .demo[data-f='detail'] .news {
    grid-area: news;
    margin-top: 0;
  }

  /* ---------------------------------------------------------- karten */

  .demo[data-f='karten'] {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'head head'
      'chart figs'
      'news news';
    gap: var(--ds-space-5);
  }

  .demo[data-f='karten'] .head {
    grid-area: head;
  }

  .demo[data-f='karten'] .chart,
  .demo[data-f='karten'] .figs {
    margin-top: 0;
    padding: var(--ds-space-4);
    border: 1px solid var(--ds-line);
    border-radius: var(--ds-radius-lg);
    background: var(--ds-surface);
  }

  .demo[data-f='karten'] .chart {
    grid-area: chart;
  }

  .demo[data-f='karten'] .figs {
    grid-area: figs;
    grid-template-columns: 1fr 1fr;
    gap: var(--ds-space-3);
  }

  .demo[data-f='karten'] .figs div {
    border-top: 0;
    border-bottom: 1px solid var(--ds-line-faint);
  }

  .demo[data-f='karten'] .news {
    grid-area: news;
    margin-top: 0;
  }

  /* ----------------------------------------------------------- fokus */

  .demo[data-f='fokus'] {
    max-width: 520px;
    margin-inline: auto;
  }

  .demo[data-f='fokus'] .quote strong {
    font-size: 48px;
  }

  .demo[data-f='fokus'] .chart svg {
    height: 110px;
  }

  .demo[data-f='fokus'] .figs {
    grid-template-columns: 1fr 1fr;
  }

  .demo[data-f='fokus'] .news {
    display: none;
  }

  /* ----------------------------------------------------------- liste */

  .demo[data-f='liste'] .chart svg {
    height: 110px;
  }

  .demo[data-f='liste'] .figs {
    grid-template-columns: 1fr 1fr;
    gap: 0;
    margin-top: var(--ds-space-4);
  }

  .demo[data-f='liste'] .figs div {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    padding: 8px 0;
    border-top: 0;
    border-bottom: 1px solid var(--ds-line-faint);
  }

  .demo[data-f='liste'] .news li {
    padding: 9px 0;
  }

  /* ----------------------------------------------------------- kombi */

  .demo[data-f='kombi'] {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 340px;
    grid-template-areas:
      'head head'
      'chart chart'
      'figs news';
    gap: var(--ds-space-5);
  }

  .demo[data-f='kombi'] .head {
    grid-area: head;
  }

  .demo[data-f='kombi'] .chart {
    grid-area: chart;
    margin-top: 0;
  }

  .demo[data-f='kombi'] .figs {
    grid-area: figs;
    margin-top: 0;
    padding: var(--ds-space-4);
    border: 1px solid var(--ds-line);
    border-radius: var(--ds-radius-lg);
    background: var(--ds-surface);
  }

  .demo[data-f='kombi'] .figs div {
    padding: 10px 0;
    border-top: 0;
    border-bottom: 1px solid var(--ds-line-faint);
  }

  .demo[data-f='kombi'] .news {
    grid-area: news;
    margin-top: 0;
    border-top: 0;
    padding: var(--ds-space-4);
    border: 1px solid var(--ds-line);
    border-radius: var(--ds-radius-lg);
    background: var(--ds-surface);
  }

  @media (max-width: 820px) {
    .demo[data-f='detail'],
    .demo[data-f='karten'],
    .demo[data-f='kombi'] {
      display: block;
    }

    .demo[data-f='detail'] .figs,
    .demo[data-f='karten'] .figs {
      border-left: 0;
      padding-left: 0;
      margin-top: var(--ds-space-5);
    }

    .demo[data-f='detail'] .news,
    .demo[data-f='karten'] .news {
      margin-top: var(--ds-space-5);
    }
  }
</style>
