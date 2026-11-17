<script lang="ts">
  let {
    keys,
    label = ''
  }: {
    keys: string[];
    label?: string;
  } = $props();
</script>

<span class="kbd" aria-label={label || keys.join(' plus ')}>
  {#each keys as key, index}
    <kbd>{key}</kbd>
    {#if index < keys.length - 1}<span class="plus" aria-hidden="true">+</span>{/if}
  {/each}
</span>

<style>
  .kbd {
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }

  kbd {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 28px;
    min-height: 28px;
    padding: 2px 6px;
    border: 1px solid var(--ds-line-strong);
    border-bottom-width: 3px;
    border-radius: var(--ds-radius-xs);
    background: var(--ds-surface-2);
    color: var(--ds-fg);
    font-family: var(--ds-font-mono);
    font-size: var(--ds-text-2xs);
    line-height: 1;
  }

  .plus {
    color: var(--ds-fg-dim);
    font-size: var(--ds-text-2xs);
  }
</style>
