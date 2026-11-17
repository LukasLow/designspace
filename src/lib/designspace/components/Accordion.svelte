<script lang="ts">
  import Icon from '#lib/designspace/icons/Icon.svelte';

  interface AccordionItem {
    id: string;
    title: string;
    content: string;
  }

  let {
    items,
    multiple = false,
    open = $bindable<string[]>([])
  }: {
    items: AccordionItem[];
    multiple?: boolean;
    open?: string[];
  } = $props();

  function toggle(id: string) {
    if (open.includes(id)) {
      open = open.filter((entry) => entry !== id);
      return;
    }
    open = multiple ? [...open, id] : [id];
  }
</script>

<div class="accordion">
  {#each items as item}
    {@const isOpen = open.includes(item.id)}
    <div class="item">
      <h3>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={`acc-${item.id}`}
          onclick={() => toggle(item.id)}
        >
          <span>{item.title}</span>
          <span class="mark" class:open={isOpen} aria-hidden="true">
            <Icon name="Aufklappen" size={20} />
          </span>
        </button>
      </h3>
      {#if isOpen}
        <div class="panel" id={`acc-${item.id}`}>
          <p>{item.content}</p>
        </div>
      {/if}
    </div>
  {/each}
</div>

<style>
  .accordion {
    border-top: 1px solid var(--ds-line);
  }

  .item {
    border-bottom: 1px solid var(--ds-line);
  }

  h3 {
    margin: 0;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--ds-space-4);
    width: 100%;
    min-height: var(--ds-tap-min);
    padding: var(--ds-space-3) 0;
    border: 0;
    background: transparent;
    color: var(--ds-fg);
    font-family: var(--ds-font-sans);
    font-size: var(--ds-text-base);
    font-weight: var(--ds-weight-bold);
    text-align: left;
    cursor: pointer;
  }

  button:hover {
    color: var(--ds-brand);
  }

  button:focus-visible {
    outline: var(--ds-border-focus) solid var(--ds-focus);
    outline-offset: 3px;
  }

  .mark {
    display: inline-flex;
    color: var(--ds-fg-dim);
    transition: transform var(--ds-dur-1) var(--ds-ease-out);
  }

  .mark.open {
    transform: rotate(180deg);
    color: var(--ds-brand);
  }

  .panel {
    padding-bottom: var(--ds-space-4);
  }

  .panel p {
    max-width: var(--ds-measure);
    font-size: var(--ds-text-sm);
    color: var(--ds-fg-dim);
  }

  @media (prefers-reduced-motion: reduce) {
    .mark {
      transition: none;
    }
  }
</style>
