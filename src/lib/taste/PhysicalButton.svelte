<script lang="ts">
  import type { ButtonPhysics } from './button-physics';

  let { variant, label }: { variant: ButtonPhysics; label: string } = $props();
</script>

{#if variant === 'doppelt' || variant === 'doppelt-y'}
  <span class="stack">
    <span class="slab" class:below={variant === 'doppelt-y'} aria-hidden="true"></span>
    <button class="btn {variant}" type="button">{label}</button>
  </span>
{:else}
  <button class="btn {variant}" type="button">{label}</button>
{/if}

<style>
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 190px;
    min-height: 52px;
    padding: 0 22px;
    border: 2px solid #fff;
    border-radius: 0;
    background: #000;
    color: #fff;
    font: inherit;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    transition:
      transform 90ms ease,
      box-shadow 90ms ease,
      background 120ms ease,
      color 120ms ease;
  }

  .btn:focus-visible {
    outline: 3px solid #fff;
    outline-offset: 3px;
  }

  /* ------------------------------------------------------------- flach */

  .btn.flach:hover {
    background: #141414;
  }

  .btn.flach:active {
    background: #fff;
    color: #000;
  }

  /* ----------------------------------------------------------- stempel */

  .btn.stempel {
    background: #fff;
    color: #000;
    box-shadow: 5px 5px 0 rgba(255, 255, 255, 0.85);
  }

  .btn.stempel:hover {
    transform: translate(-1px, -1px);
    box-shadow: 6px 6px 0 #fff;
  }

  .btn.stempel:active {
    transform: translate(4px, 4px);
    box-shadow: 1px 1px 0 rgba(255, 255, 255, 0.85);
  }

  /* ---------------------------------------------------------- gesenkt */

  .btn.gesenkt {
    background: #050505;
    border-color: rgba(255, 255, 255, 0.45);
    box-shadow:
      inset 2px 2px 0 rgba(0, 0, 0, 0.95),
      inset -1px -1px 0 rgba(255, 255, 255, 0.16);
  }

  .btn.gesenkt:hover {
    background: #0e0e0e;
  }

  .btn.gesenkt:active {
    transform: translateY(2px);
    box-shadow:
      inset 4px 4px 0 rgba(0, 0, 0, 1),
      inset -1px -1px 0 rgba(255, 255, 255, 0.08);
  }

  /* ------------------------------------------------------------ feder */

  .btn.feder {
    box-shadow:
      0 10px 24px rgba(0, 0, 0, 0.8),
      inset 0 1px 0 rgba(255, 255, 255, 0.18);
  }

  .btn.feder:hover {
    transform: translateY(-1px);
    box-shadow:
      0 16px 30px rgba(0, 0, 0, 0.9),
      inset 0 1px 0 rgba(255, 255, 255, 0.24);
  }

  .btn.feder:active {
    transform: translateY(2px) scale(0.994);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.9);
  }

  /* ---------------------------------------------------------- doppelt */

  .stack {
    position: relative;
    display: inline-flex;
  }

  .slab {
    position: absolute;
    inset: 4px -4px -4px 4px;
    background: #fff;
  }

  /* Senkrecht: gleiche Breite, nur nach unten versetzt. */
  .slab.below {
    inset: 4px 0 -4px 0;
  }

  .btn.doppelt,
  .btn.doppelt-y {
    position: relative;
    z-index: 1;
  }

  .btn.doppelt:hover {
    transform: translate(-1px, -1px);
  }

  .btn.doppelt:active {
    transform: translate(4px, 4px);
  }

  .btn.doppelt-y:hover {
    transform: translateY(-1px);
  }

  .btn.doppelt-y:active {
    transform: translateY(4px);
  }

  /* ------------------------------------------------------------ taste */

  .btn.taste {
    box-shadow: inset 0 -6px 0 #fff;
  }

  .btn.taste:hover {
    box-shadow: inset 0 -7px 0 #fff;
  }

  .btn.taste:active {
    transform: translateY(4px);
    box-shadow: inset 0 -2px 0 #fff;
  }

  /* --------------------------------------------------------- schrumpf */

  .btn.schrumpf:hover {
    background: #141414;
  }

  .btn.schrumpf:active {
    transform: scale(0.96);
    background: #fff;
    color: #000;
  }

  @media (prefers-reduced-motion: reduce) {
    .btn {
      transition: none;
    }
  }
</style>
