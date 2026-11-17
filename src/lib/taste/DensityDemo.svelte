<script lang="ts">
  import Chip from '#lib/components/Chip.svelte';
  import type { DensityVariant } from './density-variants';

  let { variant }: { variant: DensityVariant } = $props();

  const events = [
    { state: 'done', title: 'Angenommen', meta: '12.11. · 09:14 · Berlin' },
    { state: 'done', title: 'Sortierzentrum', meta: '12.11. · 18:02 · Hannover' },
    { state: 'now', title: 'In Zustellung', meta: 'heute · 08:40 · Hamburg' },
    { state: 'next', title: 'Zugestellt', meta: 'erwartet 14:20' }
  ];

  const facts = [
    { label: 'Von', value: 'Nordlicht GmbH, Berlin' },
    { label: 'An', value: 'Lena Hoffmann, Hamburg' },
    { label: 'Gewicht', value: '1,2 kg · 3 Pakete' }
  ];
</script>

<div class="demo" data-d={variant}>
  <div class="top">
    <p class="id">1Z999AA10123456784</p>
    <Chip tone="info">Unterwegs</Chip>
  </div>

  <h3>Zustellung heute</h3>
  <p class="sub">Erwartet 14:20 · Hamburg</p>

  <ol class="track">
    {#each events as event}
      <li class={event.state}>
        <span class="mark" aria-hidden="true"></span>
        <span class="entry">
          <span class="t">{event.title}</span>
          <span class="m">{event.meta}</span>
        </span>
      </li>
    {/each}
  </ol>

  <dl class="facts">
    {#each facts as fact}
      <div>
        <dt>{fact.label}</dt>
        <dd>{fact.value}</dd>
      </div>
    {/each}
  </dl>
</div>

<style>
  .demo {
    padding: var(--ds-space-6);
    background: #000;
    border: 1px solid var(--ds-line);
    border-radius: var(--ds-radius-lg);
  }

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--ds-space-3);
  }

  .id {
    font-size: var(--ds-text-2xs);
    font-weight: 700;
    letter-spacing: 0.08em;
    color: var(--ds-fg-dim);
  }

  h3 {
    margin-top: 8px;
    font-size: 32px;
    line-height: 1;
    letter-spacing: -0.04em;
  }

  .sub {
    margin-top: 6px;
    font-size: var(--ds-text-sm);
    color: var(--ds-fg-dim);
  }

  .track {
    margin-top: var(--ds-space-6);
  }

  .track li {
    position: relative;
    display: grid;
    grid-template-columns: 18px 1fr;
    gap: var(--ds-space-3);
    align-items: start;
  }

  .track li::before {
    content: '';
    position: absolute;
    left: 8px;
    top: 18px;
    bottom: 0;
    width: 1px;
    background: var(--ds-line);
  }

  .track li:last-child::before {
    display: none;
  }

  .mark {
    width: 17px;
    height: 17px;
    margin-top: 12px;
    border: 2px solid var(--ds-line-strong);
    border-radius: 999px;
    background: #000;
  }

  .done .mark {
    border-color: var(--ds-success);
    background: var(--ds-success);
  }

  .now .mark {
    border-color: var(--ds-info);
    box-shadow: inset 0 0 0 3px #000, inset 0 0 0 8px var(--ds-info);
  }

  .entry {
    display: grid;
    gap: 2px;
    padding: 10px 0;
    border-bottom: 1px solid var(--ds-line-faint);
  }

  .t {
    font-size: var(--ds-text-sm);
    font-weight: 700;
  }

  .next .t {
    color: var(--ds-fg-dim);
  }

  .m {
    font-size: var(--ds-text-xs);
    color: var(--ds-fg-dim);
  }

  .facts {
    display: grid;
    gap: 6px;
    margin-top: var(--ds-space-5);
    padding-top: var(--ds-space-4);
    border-top: 1px solid var(--ds-line);
  }

  .facts > div {
    display: grid;
    grid-template-columns: 90px 1fr;
    gap: var(--ds-space-3);
    align-items: baseline;
  }

  dt {
    font-size: var(--ds-text-2xs);
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--ds-fg-dim);
  }

  dd {
    margin: 0;
    font-size: var(--ds-text-sm);
    font-weight: 700;
  }

  /* ---------------------------------------------------------- kompakt */

  .demo[data-d='kompakt'] {
    padding: var(--ds-space-4);
  }

  .demo[data-d='kompakt'] h3 {
    font-size: 26px;
    margin-top: 4px;
  }

  .demo[data-d='kompakt'] .sub {
    margin-top: 3px;
  }

  .demo[data-d='kompakt'] .track {
    margin-top: 16px;
  }

  .demo[data-d='kompakt'] .entry {
    padding: 6px 0;
  }

  .demo[data-d='kompakt'] .mark {
    margin-top: 8px;
    width: 15px;
    height: 15px;
  }

  .demo[data-d='kompakt'] .track li::before {
    left: 7px;
    top: 14px;
  }

  .demo[data-d='kompakt'] .facts {
    margin-top: 14px;
    padding-top: 10px;
    gap: 2px;
  }

  .demo[data-d='kompakt'] .facts > div {
    grid-template-columns: 80px 1fr;
  }

  /* ----------------------------------------------------------- normal */

  .demo[data-d='normal'] .track {
    margin-top: var(--ds-space-6);
  }

  .demo[data-d='normal'] .entry {
    padding: 12px 0;
  }

  /* ----------------------------------------------------------- luftig */

  .demo[data-d='luftig'] {
    padding: var(--ds-space-7);
  }

  .demo[data-d='luftig'] h3 {
    font-size: 38px;
    margin-top: 12px;
  }

  .demo[data-d='luftig'] .sub {
    margin-top: 10px;
  }

  .demo[data-d='luftig'] .track {
    margin-top: 40px;
  }

  .demo[data-d='luftig'] .entry {
    padding: 20px 0;
  }

  .demo[data-d='luftig'] .mark {
    margin-top: 20px;
  }

  .demo[data-d='luftig'] .facts {
    margin-top: 32px;
    padding-top: 20px;
    gap: 10px;
  }

  /* --------------------------------------------------------- gemischt */

  .demo[data-d='gemischt'] h3 {
    font-size: 40px;
    margin-top: 14px;
  }

  .demo[data-d='gemischt'] .track {
    margin-top: 40px;
  }

  .demo[data-d='gemischt'] .entry {
    padding: 6px 0;
  }

  .demo[data-d='gemischt'] .mark {
    margin-top: 8px;
  }

  .demo[data-d='gemischt'] .facts {
    margin-top: 28px;
    padding-top: 10px;
    gap: 2px;
  }

  /* ------------------------------------------------------------- grob */

  .demo[data-d='grob'] {
    padding: var(--ds-space-7);
  }

  .demo[data-d='grob'] h3 {
    font-size: 34px;
    margin-top: 10px;
  }

  .demo[data-d='grob'] .sub {
    margin-top: 8px;
    font-size: var(--ds-text-base);
  }

  .demo[data-d='grob'] .track {
    margin-top: 32px;
  }

  .demo[data-d='grob'] .entry {
    padding: 22px 0;
  }

  .demo[data-d='grob'] .t {
    font-size: var(--ds-text-base);
  }

  .demo[data-d='grob'] .m {
    font-size: var(--ds-text-sm);
  }

  .demo[data-d='grob'] .mark {
    width: 20px;
    height: 20px;
    margin-top: 22px;
  }

  .demo[data-d='grob'] .track li {
    grid-template-columns: 22px 1fr;
  }

  .demo[data-d='grob'] .track li::before {
    left: 10px;
    top: 20px;
  }

  .demo[data-d='grob'] .facts {
    margin-top: 24px;
    padding-top: 16px;
    gap: 8px;
  }

  .demo[data-d='grob'] dd {
    font-size: var(--ds-text-base);
  }
</style>
