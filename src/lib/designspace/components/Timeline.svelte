<script lang="ts">
  interface TimelineItem {
    id: string;
    title: string;
    time?: string;
    description?: string;
    tone?: 'neutral' | 'brand' | 'success' | 'warning' | 'danger';
  }

  let {
    items,
    label = 'Verlauf'
  }: {
    items: TimelineItem[];
    label?: string;
  } = $props();
</script>

<ol class="timeline" aria-label={label}>
  {#each items as item}
    <li class={item.tone ?? 'neutral'}>
      <span class="marker" aria-hidden="true"></span>
      <div class="body">
        <div class="head">
          <p class="title">{item.title}</p>
          {#if item.time}<span class="time">{item.time}</span>{/if}
        </div>
        {#if item.description}<p class="text">{item.description}</p>{/if}
      </div>
    </li>
  {/each}
</ol>

<style>
  .timeline {
    display: grid;
    gap: 0;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    position: relative;
    display: grid;
    grid-template-columns: 24px 1fr;
    gap: var(--ds-space-3);
    padding-bottom: var(--ds-space-5);
  }

  li::before {
    content: '';
    position: absolute;
    top: 14px;
    bottom: 0;
    left: 11px;
    width: 2px;
    background: var(--ds-line);
  }

  li:last-child::before {
    display: none;
  }

  .marker {
    position: relative;
    z-index: 1;
    width: 14px;
    height: 14px;
    margin-top: 5px;
    margin-left: 5px;
    border: 2px solid var(--ds-fg-dim);
    border-radius: var(--ds-radius-pill);
    background: var(--ds-bg);
  }

  .head {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: var(--ds-space-2);
  }

  .title {
    font-size: var(--ds-text-sm);
    font-weight: var(--ds-weight-bold);
  }

  .time {
    font-family: var(--ds-font-mono);
    font-size: var(--ds-text-2xs);
    color: var(--ds-fg-dim);
  }

  .text {
    margin-top: 2px;
    font-size: var(--ds-text-sm);
    color: var(--ds-fg-dim);
  }

  .brand .marker {
    border-color: var(--ds-brand);
    background: var(--ds-brand);
  }

  .success .marker {
    border-color: var(--ds-success);
    background: var(--ds-success);
  }

  .warning .marker {
    border-color: var(--ds-warning);
    background: var(--ds-warning);
  }

  .danger .marker {
    border-color: var(--ds-danger);
    background: var(--ds-danger);
  }
</style>
