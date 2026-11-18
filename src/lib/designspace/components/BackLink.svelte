<script lang="ts">
  import Icon from '#lib/designspace/icons/Icon.svelte';

  let {
    href = '#',
    label = 'Zurück'
  }: {
    href?: string;
    label?: string;
  } = $props();
</script>

<a class="back" {href}>
  <Icon name="Zurück" size={20} />
  <span>{label}</span>
</a>

<style>
  .back {
    display: inline-flex;
    align-items: center;
    gap: var(--ds-space-2);
    min-height: var(--ds-tap-min);
    padding: 0 var(--ds-space-3);
    border-radius: var(--ds-radius-control);
    color: var(--ds-fg-dim);
    font-size: var(--ds-text-sm);
    font-weight: var(--ds-weight-bold);
    text-decoration: none;
  }

  .back:hover {
    background: var(--ds-surface-2);
    color: var(--ds-fg);
  }

  .back:focus-visible {
    outline: var(--ds-border-focus) solid var(--ds-focus);
    outline-offset: 3px;
  }
</style>
