<script lang="ts">
  import { resolve } from '$app/paths';
  import ShapeDemo from './ShapeDemo.svelte';
  import type { ShapeVariant, Verdict } from './shape-variants';

  interface Item {
    key: ShapeVariant;
    no: string;
    title: string;
    spec: string;
    note: string;
    keeps: string;
    verdict: Verdict;
  }

  let {
    round,
    title,
    lede,
    items,
    out = []
  }: {
    round: string;
    title: string;
    lede: string;
    items: Item[];
    out?: string[];
  } = $props();

  const label: Record<Verdict, string> = {
    gut: 'bleibt',
    nein: 'nein',
    offen: 'offen'
  };
</script>

<svelte:head>
  <title>{round} — Taste — DesignSpace</title>
  <meta name="description" content={title} />
</svelte:head>

<div class="screen">
  <div class="wrap">
    <nav class="crumb">
      <a href={resolve('/taste')}>← Alle Runden</a>
      <span>{round}</span>
    </nav>

    <header class="head">
      <p class="kicker">Eine Entscheidung</p>
      <h1>{title}</h1>
      <p class="lede">{lede}</p>
    </header>

    <ol class="variants">
      {#each items as v}
        <li>
          <div class="vhead">
            <span class="no">{v.no}</span>
            <h2>{v.title}</h2>
            <span class="spec">{v.spec}</span>
            <span class="verdict {v.verdict}">{label[v.verdict]}</span>
          </div>
          <p class="note">{v.note}</p>
          <ShapeDemo variant={v.key} />
          <p class="keeps"><span>Was bleibt:</span> {v.keeps}</p>
        </li>
      {/each}
    </ol>

    {#if out.length > 0}
      <footer class="foot">
        <p class="kicker">Aus dieser Runde verworfen</p>
        <ul class="out">
          {#each out as line}
            <li>{line}</li>
          {/each}
        </ul>
      </footer>
    {/if}
  </div>
</div>

<style>
  .screen {
    min-height: 100dvh;
    background: #000;
    color: #fff;
  }

  .wrap {
    width: min(100% - 2 * var(--ds-space-6), 1060px);
    margin-inline: auto;
    padding: var(--ds-space-5) 0 var(--ds-space-11);
  }

  .crumb {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: var(--ds-font-mono);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #d0d0d0;
    padding-bottom: var(--ds-space-4);
    border-bottom: 1px solid rgba(255, 255, 255, 0.16);
  }

  .crumb a {
    display: inline-flex;
    align-items: center;
    min-height: var(--ds-tap-min);
    color: #d0d0d0;
    text-decoration: none;
  }

  .crumb a:hover {
    color: #fff;
  }

  .head {
    padding: var(--ds-space-8) 0 var(--ds-space-7);
  }

  .kicker {
    font-family: var(--ds-font-mono);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #d0d0d0;
    margin-bottom: var(--ds-space-3);
  }

  h1 {
    font-size: clamp(2.2rem, 5vw, 3.6rem);
    line-height: 1;
    letter-spacing: -0.04em;
    margin-bottom: var(--ds-space-4);
  }

  .lede {
    max-width: 62ch;
    font-size: 16px;
    line-height: 1.6;
    color: #d0d0d0;
  }

  .variants {
    display: grid;
    gap: var(--ds-space-9);
  }

  .variants > li {
    padding-top: var(--ds-space-6);
    border-top: 1px solid rgba(255, 255, 255, 0.16);
  }

  .vhead {
    display: flex;
    align-items: baseline;
    gap: var(--ds-space-3);
    flex-wrap: wrap;
    margin-bottom: var(--ds-space-2);
  }

  .no {
    font-family: var(--ds-font-mono);
    font-size: 12px;
    font-weight: 700;
    color: #d0d0d0;
  }

  h2 {
    font-size: 24px;
    letter-spacing: -0.02em;
  }

  .spec {
    margin-left: auto;
    font-family: var(--ds-font-mono);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.06em;
    color: #d0d0d0;
  }

  .verdict {
    padding: 3px 9px;
    border: 1px solid rgba(255, 255, 255, 0.36);
    border-radius: 999px;
    font-family: var(--ds-font-mono);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .verdict.gut {
    background: #fff;
    border-color: #fff;
    color: #000;
  }

  .verdict.nein {
    border-color: #ff7b7b;
    color: #ff7b7b;
  }

  .note {
    max-width: 66ch;
    font-size: 14px;
    line-height: 1.55;
    color: #d0d0d0;
    margin-bottom: var(--ds-space-4);
  }

  .keeps {
    margin-top: var(--ds-space-3);
    font-size: 13px;
    color: #d0d0d0;
  }

  .keeps span {
    font-family: var(--ds-font-mono);
    font-size: 10.5px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-right: 6px;
  }

  .foot {
    margin-top: var(--ds-space-10);
    padding-top: var(--ds-space-7);
    border-top: 2px solid rgba(255, 255, 255, 0.4);
  }

  .out {
    display: grid;
    gap: var(--ds-space-2);
    max-width: 72ch;
    font-size: 14px;
    color: #d0d0d0;
  }

  @media (max-width: 700px) {
    .spec {
      margin-left: 0;
      width: 100%;
    }
  }
</style>
