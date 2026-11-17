<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    left,
    right,
    initial = 45,
    min = 20,
    max = 80,
    label = 'Bereiche'
  }: {
    left: Snippet;
    right: Snippet;
    initial?: number;
    min?: number;
    max?: number;
    label?: string;
  } = $props();

  // svelte-ignore state_referenced_locally — die Trennung startet einmal aus der Prop.
  let split = $state(initial);
  let box: HTMLDivElement;
  let dragging = $state(false);

  function moveTo(clientX: number) {
    if (!box) return;
    const rect = box.getBoundingClientRect();
    if (rect.width === 0) return;
    const percent = ((clientX - rect.left) / rect.width) * 100;
    split = Math.min(max, Math.max(min, percent));
  }

  function down(event: PointerEvent) {
    dragging = true;
    (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
  }

  function move(event: PointerEvent) {
    if (!dragging) return;
    moveTo(event.clientX);
  }

  function up() {
    dragging = false;
  }

  function onKey(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') split = Math.max(min, split - 2);
    else if (event.key === 'ArrowRight') split = Math.min(max, split + 2);
    else if (event.key === 'Home') split = min;
    else if (event.key === 'End') split = max;
    else return;
    event.preventDefault();
  }
</script>

<div class="resizable" bind:this={box} style="--split: {split}%">
  <div class="pane">{@render left()}</div>
  <div
    class="divider"
    class:dragging
    role="slider"
    aria-orientation="vertical"
    aria-label={label}
    aria-valuenow={Math.round(split)}
    aria-valuemin={min}
    aria-valuemax={max}
    tabindex="0"
    onpointerdown={down}
    onpointermove={move}
    onpointerup={up}
    onpointercancel={up}
    onkeydown={onKey}
  >
    <span class="grip" aria-hidden="true"></span>
  </div>
  <div class="pane">{@render right()}</div>
</div>

<style>
  .resizable {
    display: grid;
    grid-template-columns: var(--split) 16px minmax(0, 1fr);
    align-items: stretch;
    min-height: 200px;
    border: 1px solid var(--ds-line);
    border-radius: var(--ds-radius-md);
    overflow: hidden;
  }

  .pane {
    min-width: 0;
    padding: var(--ds-space-4);
    background: var(--ds-surface);
    font-size: var(--ds-text-sm);
    overflow: auto;
  }

  .divider {
    position: relative;
    display: grid;
    place-items: center;
    background: var(--ds-surface-2);
    border-inline: 1px solid var(--ds-line);
    cursor: col-resize;
    touch-action: none;
  }

  .divider:focus-visible {
    outline: var(--ds-border-focus) solid var(--ds-focus);
    outline-offset: -3px;
  }

  /* 48-px-Ziel, obwohl der sichtbare Griff schmal bleibt. */
  .divider::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 48px;
    height: 48px;
    transform: translate(-50%, -50%);
  }

  .grip {
    width: 4px;
    height: 32px;
    border-radius: var(--ds-radius-pill);
    background: var(--ds-line-strong);
  }

  .dragging .grip,
  .divider:hover .grip {
    background: var(--ds-brand);
  }
</style>
