<script lang="ts">
  import Icon from '#lib/designspace/icons/Icon.svelte';

  let {
    playing = $bindable(false),
    position = $bindable(0),
    duration = 180,
    label = 'Aufnahme'
  }: {
    playing?: boolean;
    position?: number;
    duration?: number;
    label?: string;
  } = $props();

  function time(value: number) {
    const total = Math.max(0, Math.round(value));
    const minutes = Math.floor(total / 60);
    const seconds = total % 60;
    return `${minutes}:${String(seconds).padStart(2, '0')}`;
  }

  function skip(amount: number) {
    position = Math.min(duration, Math.max(0, position + amount));
  }
</script>

<div class="media">
  <div class="buttons">
    <button type="button" aria-label="Zehn Sekunden zurück" onclick={() => skip(-10)}>
      <Icon name="Rücklauf" size={20} />
    </button>
    <button
      type="button"
      class="play"
      aria-label={playing ? 'Pause' : 'Abspielen'}
      onclick={() => (playing = !playing)}
    >
      <Icon name={playing ? 'Pause' : 'Play'} size={20} />
    </button>
    <button type="button" aria-label="Zehn Sekunden vor" onclick={() => skip(10)}>
      <Icon name="Vorlauf" size={20} />
    </button>
  </div>
  <div class="track">
    <span class="title">{label}</span>
    <input
      type="range"
      name="position"
      min="0"
      max={duration}
      bind:value={position}
      aria-label="Position"
    />
    <span class="times"><span>{time(position)}</span><span>{time(duration)}</span></span>
  </div>
</div>

<style>
  .media {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--ds-space-3);
    padding: var(--ds-space-3);
    border: 1px solid var(--ds-line);
    border-radius: var(--ds-radius-md);
    background: var(--ds-surface);
  }

  .buttons {
    display: flex;
    align-items: center;
    gap: 2px;
  }

  button {
    display: grid;
    place-items: center;
    width: var(--ds-tap-min);
    height: var(--ds-tap-min);
    border: 0;
    border-radius: var(--ds-radius-control);
    background: transparent;
    color: var(--ds-fg);
    cursor: pointer;
  }

  button:hover {
    background: var(--ds-surface-3);
  }

  button:focus-visible {
    outline: var(--ds-border-focus) solid var(--ds-focus);
    outline-offset: 3px;
  }

  .play {
    background: var(--ds-brand-matte);
    color: var(--ds-bg);
  }

  .track {
    display: grid;
    flex: 1;
    gap: 2px;
    min-width: 180px;
  }

  .title {
    font-size: var(--ds-text-2xs);
    font-weight: var(--ds-weight-bold);
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--ds-fg-dim);
  }

  input[type='range'] {
    width: 100%;
    height: 32px;
    margin: 0;
    accent-color: var(--ds-brand);
  }

  input[type='range']:focus-visible {
    outline: var(--ds-border-focus) solid var(--ds-focus);
    outline-offset: 3px;
    border-radius: var(--ds-radius-pill);
  }

  .times {
    display: flex;
    justify-content: space-between;
    font-family: var(--ds-font-mono);
    font-size: var(--ds-text-2xs);
    color: var(--ds-fg-dim);
  }
</style>
