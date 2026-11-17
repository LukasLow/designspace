<script lang="ts">
  let {
    name = 'DesignSpace',
    tagline = '',
    href,
    size = 'md'
  }: {
    name?: string;
    tagline?: string;
    href?: string;
    size?: 'sm' | 'md' | 'lg';
  } = $props();

  const mark = $derived(name.trim().charAt(0).toUpperCase() || 'D');
</script>

{#if href}
  <a class="lockup {size}" {href}>
    <span class="mark" aria-hidden="true">{mark}</span>
    <span class="text">
      <span class="name">{name}</span>
      {#if tagline}<span class="tagline">{tagline}</span>{/if}
    </span>
  </a>
{:else}
  <span class="lockup {size}">
    <span class="mark" aria-hidden="true">{mark}</span>
    <span class="text">
      <span class="name">{name}</span>
      {#if tagline}<span class="tagline">{tagline}</span>{/if}
    </span>
  </span>
{/if}

<style>
  .lockup {
    display: inline-flex;
    align-items: center;
    gap: var(--ds-space-3);
    min-height: var(--ds-tap-min);
    color: var(--ds-fg);
    text-decoration: none;
  }

  .mark {
    display: grid;
    place-items: center;
    width: 36px;
    height: 36px;
    border-radius: var(--ds-radius-sm);
    background: var(--ds-brand-matte);
    color: var(--ds-bg);
    font-size: var(--ds-text-lg);
    font-weight: var(--ds-weight-bold);
    line-height: 1;
  }

  .text {
    display: grid;
    gap: 1px;
  }

  .name {
    font-size: var(--ds-text-base);
    font-weight: var(--ds-weight-bold);
    letter-spacing: var(--ds-tracking-tight);
    line-height: 1.1;
  }

  .tagline {
    font-size: var(--ds-text-2xs);
    font-weight: var(--ds-weight-bold);
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--ds-fg-dim);
  }

  .sm .mark {
    width: 28px;
    height: 28px;
    font-size: var(--ds-text-sm);
  }

  .sm .name {
    font-size: var(--ds-text-sm);
  }

  .lg {
    gap: var(--ds-space-4);
  }

  .lg .mark {
    width: 52px;
    height: 52px;
    font-size: var(--ds-text-xl);
  }

  .lg .name {
    font-size: var(--ds-text-xl);
  }

  a.lockup:focus-visible {
    outline: var(--ds-border-focus) solid var(--ds-focus);
    outline-offset: 3px;
    border-radius: var(--ds-radius-sm);
  }
</style>
