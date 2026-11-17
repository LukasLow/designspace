<script lang="ts">
  import type { FinanceVariant } from './finance-routes';

  let { variant }: { variant: FinanceVariant } = $props();

  const company = {
    name: 'Nordlicht AG',
    ticker: 'NLG',
    wkn: 'NLG100',
    isin: 'DE000NLG1001',
    market: 'Xetra'
  };

  const quote = { price: '142,80', change: '+12,40', pct: '+9,5 %' };

  const ranges = [
    { label: 'Tagestief', value: '131,20' },
    { label: 'Tageshoch', value: '144,10' },
    { label: '52W-Tief', value: '98,40' },
    { label: '52W-Hoch', value: '151,20' }
  ];

  const depth = [
    { label: 'Geld', price: '142,70', size: '320 Stk.' },
    { label: 'Brief', price: '142,85', size: '500 Stk.' }
  ];

  const figures = [
    { label: 'Eröffnung', value: '131,20' },
    { label: 'Volumen', value: '1,24 Mio.' },
    { label: 'Marktkap.', value: '3,8 Mrd.' },
    { label: 'KGV', value: '18,4' },
    { label: 'Div.-Rendite', value: '2,1 %' },
    { label: 'Gewinn/Aktie', value: '7,76' }
  ];

  const news = [
    { title: 'Nordlicht hebt Prognose für das Gesamtjahr an', time: '09:42' },
    { title: 'Neuer Auftrag aus Hamburg: 240 Millionen', time: 'gestern' },
    { title: 'Vorstand verkauft 12.000 Aktien', time: 'vor 2 Tagen' }
  ];

  const tabs = ['Übersicht', 'Chart', 'Kennzahlen', 'News'];

  const points =
    '0,128 40,120 80,124 120,96 160,104 200,84 240,90 280,66 320,72 360,52 400,58 440,40 480,46 520,28 560,34 600,18';
</script>

<div class="page" data-f={variant}>
  <header class="top">
    <span class="logo" aria-hidden="true">N</span>
    <div class="id">
      <h3>{company.name}</h3>
      <p class="meta">{company.ticker} · {company.wkn} · {company.market}</p>
    </div>

    {#if variant === 'umbau'}
      <div class="trade">
        <button class="sell" type="button">Verkaufen</button>
        <button class="buy" type="button">Kaufen</button>
      </div>
    {/if}

    <div class="quote">
      <strong>{quote.price} €</strong>
      <span class="chg">{quote.change} · {quote.pct}</span>
    </div>
  </header>

  <nav class="tabs" aria-hidden="true">
    {#each tabs as tab, i}
      <span class:on={i === 0}>{tab}</span>
    {/each}
  </nav>

  {#if variant === 'onvista' || variant === 'terminal'}
    <div class="depth">
      {#each depth as row}
        <div>
          <span>{row.label}</span>
          <strong>{row.price}</strong>
          <span class="size">{row.size}</span>
        </div>
      {/each}
      <div class="trade">
        <button class="sell" type="button">Verkaufen</button>
        <button class="buy" type="button">Kaufen</button>
      </div>
    </div>
  {/if}

  <div class="grid">
    <div class="ranges">
      {#each ranges as range}
        <div>
          <span>{range.label}</span>
          <strong>{range.value}</strong>
        </div>
      {/each}
    </div>

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
</div>

<style>
  .page {
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
  }

  .logo {
    display: grid;
    place-items: center;
    width: 44px;
    height: 44px;
    flex: none;
    border-radius: 12px;
    background: var(--ds-brand);
    color: #000;
    font-size: 22px;
    font-weight: 700;
  }

  .id {
    min-width: 0;
  }

  h3 {
    font-size: 26px;
    line-height: 1;
    letter-spacing: -0.04em;
  }

  .meta {
    margin-top: 4px;
    font-size: var(--ds-text-2xs);
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--ds-fg-dim);
  }

  .quote {
    margin-left: auto;
    display: grid;
    gap: 2px;
    text-align: right;
  }

  .quote strong {
    font-size: 34px;
    line-height: 1;
    letter-spacing: -0.04em;
  }

  .chg {
    font-size: var(--ds-text-sm);
    font-weight: 700;
    color: var(--ds-success);
  }

  .tabs {
    display: flex;
    gap: var(--ds-space-1);
    flex-wrap: wrap;
    margin-top: var(--ds-space-5);
    border-bottom: 1px solid var(--ds-line);
  }

  .tabs span {
    padding: 10px 14px;
    font-size: var(--ds-text-sm);
    font-weight: 700;
    color: var(--ds-fg-dim);
    border-bottom: 2px solid transparent;
  }

  .tabs .on {
    color: var(--ds-fg);
    border-bottom-color: var(--ds-brand);
  }

  .ranges {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--ds-space-3);
    margin-top: var(--ds-space-4);
  }

  .ranges div {
    display: grid;
    gap: 2px;
  }

  .ranges span {
    font-size: var(--ds-text-2xs);
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--ds-fg-dim);
  }

  .ranges strong {
    font-size: var(--ds-text-sm);
  }

  .depth {
    display: flex;
    align-items: center;
    gap: var(--ds-space-5);
    flex-wrap: wrap;
    margin-top: var(--ds-space-4);
    padding: var(--ds-space-3) 0;
    border-top: 1px solid var(--ds-line);
    border-bottom: 1px solid var(--ds-line);
  }

  .depth > div {
    display: flex;
    align-items: baseline;
    gap: 8px;
  }

  .depth .size {
    font-size: var(--ds-text-2xs);
    color: var(--ds-fg-dim);
  }

  .trade {
    margin-left: auto;
    display: flex;
    gap: 8px;
  }

  .trade button {
    min-height: 44px;
    padding: 0 16px;
    border-radius: var(--ds-radius-control);
    font: inherit;
    font-size: var(--ds-text-sm);
    font-weight: 700;
    cursor: pointer;
  }

  .sell {
    border: 1px solid var(--ds-danger);
    background: transparent;
    color: var(--ds-danger);
  }

  .buy {
    border: 1px solid var(--ds-brand);
    background: var(--ds-brand-matte);
    color: #000;
  }

  .grid {
    display: grid;
    gap: var(--ds-space-5);
    margin-top: var(--ds-space-4);
  }

  .chart svg {
    display: block;
    width: 100%;
    height: 180px;
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

  .news li {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: var(--ds-space-3);
    align-items: baseline;
    padding: 12px 0;
    border-top: 1px solid var(--ds-line-faint);
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

  /* ------------------------------------------------------------ karte */

  .page[data-f='karte'] {
    max-width: 980px;
    margin-inline: auto;
  }

  .page[data-f='karte'] .grid {
    grid-template-columns: minmax(0, 1fr) 300px;
    grid-template-areas:
      'ranges ranges'
      'chart news'
      'figs news';
    align-items: start;
  }

  .page[data-f='karte'] .chart {
    grid-area: chart;
  }

  .page[data-f='karte'] .figs {
    grid-area: figs;
  }

  .page[data-f='karte'] .news {
    grid-area: news;
    border-left: 1px solid var(--ds-line);
    padding-left: var(--ds-space-5);
  }

  .page[data-f='karte'] .news li:first-child {
    border-top: 0;
    padding-top: 0;
  }

  /* ---------------------------------------------------------- onvista */

  .page[data-f='onvista'] .chart svg {
    height: 200px;
  }

  .page[data-f='onvista'] .news {
    margin-top: var(--ds-space-2);
    border-top: 1px solid var(--ds-line);
  }

  /* ------------------------------------------------------------ tabs */

  .page[data-f='tabs'] .tabs {
    margin-top: var(--ds-space-5);
  }

  .page[data-f='tabs'] .tabs span {
    padding: 12px 16px;
    border-bottom: 0;
    border-radius: var(--ds-radius-control) var(--ds-radius-control) 0 0;
  }

  .page[data-f='tabs'] .tabs .on {
    background: var(--ds-surface-2);
  }

  .page[data-f='tabs'] .grid {
    grid-template-columns: minmax(0, 1fr) 320px;
    grid-template-areas:
      'ranges ranges'
      'chart news'
      'figs news';
  }

  .page[data-f='tabs'] .chart {
    grid-area: chart;
  }

  .page[data-f='tabs'] .figs {
    grid-area: figs;
  }

  .page[data-f='tabs'] .news {
    grid-area: news;
    border-left: 1px solid var(--ds-line);
    padding-left: var(--ds-space-5);
  }

  /* -------------------------------------------------------- terminal */

  .page[data-f='terminal'] .grid {
    grid-template-columns: minmax(0, 1fr) 340px;
    grid-template-areas:
      'ranges ranges'
      'chart news'
      'figs news';
  }

  .page[data-f='terminal'] .chart {
    grid-area: chart;
  }

  .page[data-f='terminal'] .figs {
    grid-area: figs;
    grid-template-columns: 1fr 1fr;
    gap: 0;
  }

  .page[data-f='terminal'] .figs div {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    padding: 8px 0;
    border-top: 0;
    border-bottom: 1px solid var(--ds-line-faint);
  }

  .page[data-f='terminal'] .news {
    grid-area: news;
    border-left: 1px solid var(--ds-line);
    padding-left: var(--ds-space-5);
  }

  .page[data-f='terminal'] .news li {
    padding: 9px 0;
  }

  /* ------------------------------------------------------------ umbau */

  .page[data-f='umbau'] .top .trade {
    margin-left: auto;
  }

  .page[data-f='umbau'] .quote {
    margin-left: 0;
  }

  .page[data-f='umbau'] .grid {
    grid-template-columns: minmax(0, 1fr) 300px;
    grid-template-areas:
      'chart ranges'
      'figs news';
  }

  .page[data-f='umbau'] .chart {
    grid-area: chart;
  }

  .page[data-f='umbau'] .ranges {
    grid-area: ranges;
    grid-template-columns: 1fr;
    gap: 10px;
    margin-top: 0;
    padding-left: var(--ds-space-5);
    border-left: 1px solid var(--ds-line);
    align-content: start;
  }

  .page[data-f='umbau'] .figs {
    grid-area: figs;
  }

  .page[data-f='umbau'] .news {
    grid-area: news;
    border-top: 1px solid var(--ds-line);
    padding-top: var(--ds-space-3);
  }

  /* ----------------------------------------------------------- mobil */

  .page[data-f='mobil'] {
    max-width: 420px;
    margin-inline: auto;
  }

  .page[data-f='mobil'] .top {
    gap: var(--ds-space-3);
  }

  .page[data-f='mobil'] .quote {
    margin-left: 0;
    text-align: left;
    width: 100%;
  }

  .page[data-f='mobil'] .quote strong {
    font-size: 40px;
  }

  .page[data-f='mobil'] .tabs {
    display: flex;
    gap: 6px;
    border-bottom: 0;
    overflow-x: auto;
  }

  .page[data-f='mobil'] .tabs span {
    border: 1px solid var(--ds-line-strong);
    border-radius: var(--ds-radius-control);
    padding: 8px 12px;
    white-space: nowrap;
  }

  .page[data-f='mobil'] .tabs .on {
    border-color: var(--ds-brand);
    color: var(--ds-brand);
  }

  .page[data-f='mobil'] .ranges {
    grid-template-columns: 1fr 1fr;
  }

  .page[data-f='mobil'] .chart svg {
    height: 140px;
  }

  .page[data-f='mobil'] .figs {
    grid-template-columns: 1fr 1fr;
    gap: var(--ds-space-3);
  }

  .page[data-f='mobil'] .news {
    border-top: 1px solid var(--ds-line);
  }

  @media (max-width: 860px) {
    .page[data-f] .grid,
    .page[data-f='karte'] .grid,
    .page[data-f='tabs'] .grid,
    .page[data-f='terminal'] .grid,
    .page[data-f='umbau'] .grid {
      grid-template-columns: 1fr;
      grid-template-areas: none;
    }

    .page[data-f] .news,
    .page[data-f='karte'] .news,
    .page[data-f='tabs'] .news,
    .page[data-f='terminal'] .news,
    .page[data-f='umbau'] .news {
      border-left: 0;
      padding-left: 0;
      border-top: 1px solid var(--ds-line);
      padding-top: var(--ds-space-3);
    }

    /* Unter 860 px wird jede Kurseite zur Mobilfassung (10). */
    .page[data-f] .top {
      gap: var(--ds-space-3);
    }

    .page[data-f] .quote,
    .page[data-f='umbau'] .quote {
      margin-left: 0;
      text-align: left;
      width: 100%;
    }

    .page[data-f] .quote strong {
      font-size: 40px;
    }

    .page[data-f] .tabs {
      display: flex;
      gap: 6px;
      border-bottom: 0;
      overflow-x: auto;
    }

    .page[data-f] .tabs span {
      border: 1px solid var(--ds-line-strong);
      border-radius: var(--ds-radius-control);
      padding: 8px 12px;
      white-space: nowrap;
    }

    .page[data-f] .tabs .on {
      border-color: var(--ds-brand);
      color: var(--ds-brand);
      background: transparent;
    }

    .page[data-f] .ranges,
    .page[data-f='umbau'] .ranges {
      grid-template-columns: 1fr 1fr;
      padding-left: 0;
      border-left: 0;
    }

    .page[data-f] .figs,
    .page[data-f='umbau'] .figs {
      grid-template-columns: 1fr 1fr;
    }

    .page[data-f] .chart svg {
      height: 140px;
    }
  }
</style>
