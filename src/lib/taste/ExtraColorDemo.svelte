<script lang="ts">
  let { hex, ink }: { hex: string; ink: string } = $props();
</script>

<div class="demo" style="--x: {hex}; --x-ink: {ink}">
  <div class="chart" aria-hidden="true">
    <span class="col a" style="height: 46px"></span>
    <span class="col b" style="height: 74px"></span>
    <span class="col c" style="height: 58px"></span>
  </div>

  <div class="row">
    <span class="chip">Kategorie</span>
    <span class="value">+3</span>
    <a class="link" href="#top">Reihe ansehen →</a>
  </div>

  <div class="line" aria-hidden="true"></div>
</div>

<style>
  .demo {
    padding: var(--ds-space-4);
    border: 1px solid rgba(255, 255, 255, 0.12);
    background: #060606;
  }

  .chart {
    display: flex;
    align-items: flex-end;
    gap: 6px;
    height: 80px;
    margin-bottom: var(--ds-space-4);
  }

  .col {
    flex: 1;
    display: block;
  }

  .col.a {
    background: #00e89a;
  }

  .col.b {
    background: #00a8e8;
  }

  .col.c {
    background: var(--x);
  }

  .row {
    display: flex;
    align-items: center;
    gap: var(--ds-space-3);
    flex-wrap: wrap;
  }

  .chip {
    padding: 4px 10px;
    border: 1px solid var(--x);
    background: color-mix(in srgb, var(--x) 16%, transparent);
    color: var(--x);
    font-family: var(--ds-font-mono);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .value {
    font-size: 20px;
    font-weight: 700;
    letter-spacing: -0.03em;
    color: var(--x);
  }

  .link {
    display: inline-flex;
    align-items: center;
    min-height: var(--ds-tap-min);
    margin-left: auto;
    color: var(--x);
    font-size: 13px;
    font-weight: 700;
    text-decoration: none;
    border-bottom: 1.5px solid var(--x);
  }

  .line {
    margin-top: var(--ds-space-4);
    height: 3px;
    background: var(--x);
  }
</style>
