<script lang="ts">
  let {
    name = '',
    src,
    size = 'md',
    tone = 'brand'
  }: {
    name?: string;
    src?: string;
    size?: 'sm' | 'md' | 'lg';
    tone?: 'brand' | 'neutral';
  } = $props();

  const initials = $derived(
    name
      .split(' ')
      .filter(Boolean)
      .map((part) => part[0])
      .join('')
      .slice(0, 2)
      .toUpperCase()
  );
</script>

<span class="avatar {size} {tone}" aria-label={name}>
  {#if src}
    <img {src} alt="" />
  {:else}
    <span aria-hidden="true">{initials}</span>
  {/if}
</span>

<style>
  .avatar {
    display: inline-grid;
    place-items: center;
    flex: none;
    overflow: hidden;
    border: 1px solid var(--ds-line-strong);
    border-radius: var(--ds-radius-control);
    background: var(--ds-surface-2);
    color: var(--ds-fg);
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  .sm {
    width: 32px;
    height: 32px;
    font-size: 12px;
  }

  .md {
    width: 48px;
    height: 48px;
    font-size: 16px;
  }

  .lg {
    width: 72px;
    height: 72px;
    font-size: 24px;
  }

  .brand {
    border-color: rgba(55, 181, 190, 0.5);
    background: var(--ds-brand-soft);
    color: var(--ds-brand);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
