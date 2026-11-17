<script lang="ts">
  import Icon from '#lib/designspace/icons/Icon.svelte';

  interface Step {
    id: string;
    label: string;
    description?: string;
  }

  let {
    steps,
    value = $bindable(steps[0]?.id ?? ''),
    label = 'Schritte'
  }: {
    steps: Step[];
    value?: string;
    label?: string;
  } = $props();

  const current = $derived(steps.findIndex((step) => step.id === value));
</script>

<nav class="stepper" aria-label={label}>
  <ol>
    {#each steps as step, index}
      {@const state = index < current ? 'done' : index === current ? 'current' : 'next'}
      <li class={state}>
        <button
          type="button"
          aria-current={state === 'current' ? 'step' : undefined}
          onclick={() => (value = step.id)}
        >
          <span class="number" aria-hidden="true">
            {#if state === 'done'}<Icon name="Haken" size={16} />{:else}{index + 1}{/if}
          </span>
          <span class="text">
            <span class="label">{step.label}</span>
            {#if step.description}<span class="desc">{step.description}</span>{/if}
          </span>
        </button>
      </li>
    {/each}
  </ol>
</nav>

<style>
  ol {
    display: flex;
    flex-wrap: wrap;
    gap: var(--ds-space-2);
    margin: 0;
    padding: 0;
    list-style: none;
    counter-reset: step;
  }

  li {
    flex: 1;
    min-width: 150px;
  }

  button {
    display: flex;
    align-items: center;
    gap: var(--ds-space-3);
    width: 100%;
    min-height: var(--ds-tap-min);
    padding: var(--ds-space-2) var(--ds-space-3);
    border: 1px solid var(--ds-line);
    border-radius: var(--ds-radius-md);
    background: var(--ds-surface);
    color: var(--ds-fg-dim);
    text-align: left;
    cursor: pointer;
  }

  button:hover {
    border-color: var(--ds-line-strong);
    color: var(--ds-fg);
  }

  button:focus-visible {
    outline: var(--ds-border-focus) solid var(--ds-focus);
    outline-offset: 3px;
  }

  .number {
    display: grid;
    place-items: center;
    width: 30px;
    height: 30px;
    flex: none;
    border: 1px solid var(--ds-line-strong);
    border-radius: var(--ds-radius-pill);
    font-family: var(--ds-font-mono);
    font-size: var(--ds-text-2xs);
    font-weight: var(--ds-weight-bold);
  }

  .text {
    display: grid;
    gap: 1px;
    min-width: 0;
  }

  .label {
    font-size: var(--ds-text-sm);
    font-weight: var(--ds-weight-bold);
  }

  .desc {
    font-size: var(--ds-text-2xs);
    color: var(--ds-fg-dim);
  }

  .done .number {
    border-color: var(--ds-success);
    background: var(--ds-success);
    color: var(--ds-success-ink);
  }

  .current {
    border-color: var(--ds-brand);
    background: var(--ds-brand-soft);
    color: var(--ds-fg);
  }

  .current .number {
    border-color: var(--ds-brand);
    background: var(--ds-brand-matte);
    color: var(--ds-bg);
  }

  @media (prefers-reduced-motion: no-preference) {
    button {
      transition:
        background var(--ds-dur-1) var(--ds-ease-out),
        border-color var(--ds-dur-1) var(--ds-ease-out);
    }
  }
</style>
