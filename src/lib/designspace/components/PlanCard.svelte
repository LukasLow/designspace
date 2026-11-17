<script lang="ts">
  import type { Snippet } from 'svelte';
  import Icon from '#lib/designspace/icons/Icon.svelte';

  let {
    name,
    price,
    period = 'Monat',
    description = '',
    features = [],
    highlighted = false,
    current = false,
    cta
  }: {
    name: string;
    price: string;
    period?: string;
    description?: string;
    features?: string[];
    highlighted?: boolean;
    current?: boolean;
    cta?: Snippet;
  } = $props();
</script>

<article class="plan" class:highlighted class:current>
  <header>
    <div class="head">
      <h2>{name}</h2>
      {#if current}<span class="flag">Aktuell</span>{/if}
    </div>
    {#if description}<p class="desc">{description}</p>{/if}
  </header>

  <p class="price">
    <span class="amount">{price}</span>
    <span class="period">/ {period}</span>
  </p>

  {#if features.length}
    <ul class="features">
      {#each features as feature}
        <li><Icon name="Haken" size={16} /><span>{feature}</span></li>
      {/each}
    </ul>
  {/if}

  {#if cta}<div class="cta">{@render cta()}</div>{/if}
</article>

<style>
  .plan {
    display: grid;
    align-content: start;
    gap: var(--ds-space-4);
    padding: var(--ds-space-5);
    border: 1px solid var(--ds-line-strong);
    border-radius: var(--ds-radius-lg);
    background: var(--ds-surface);
  }

  .highlighted {
    border-color: var(--ds-brand);
    background: var(--ds-brand-soft);
  }

  .current {
    border-color: var(--ds-success);
  }

  .head {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--ds-space-2);
  }

  h2 {
    font-size: var(--ds-text-lg);
    font-weight: var(--ds-weight-bold);
  }

  .flag {
    padding: 2px 8px;
    border-radius: var(--ds-radius-pill);
    background: var(--ds-success);
    color: var(--ds-success-ink);
    font-size: var(--ds-text-2xs);
    font-weight: var(--ds-weight-bold);
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  .desc {
    margin-top: 4px;
    font-size: var(--ds-text-sm);
    color: var(--ds-fg-dim);
  }

  .price {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 6px;
  }

  .amount {
    font-size: var(--ds-text-2xl);
    font-weight: var(--ds-weight-bold);
    letter-spacing: var(--ds-tracking-tight);
  }

  .period {
    font-size: var(--ds-text-sm);
    color: var(--ds-fg-dim);
  }

  .features {
    display: grid;
    gap: var(--ds-space-2);
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .features li {
    display: flex;
    gap: var(--ds-space-2);
    align-items: flex-start;
    font-size: var(--ds-text-sm);
    color: var(--ds-fg-dim);
  }

  .features :global(svg) {
    color: var(--ds-success);
    margin-top: 2px;
  }

  .cta {
    display: flex;
    margin-top: var(--ds-space-2);
  }

  .cta :global(a),
  .cta :global(button) {
    flex: 1;
  }
</style>
