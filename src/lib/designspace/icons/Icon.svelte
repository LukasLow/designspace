<script lang="ts">
  import { iconsByName, type IconName } from './index';

  let {
    name,
    size = 20,
    stroke = 1.8,
    label
  }: {
    name: IconName;
    size?: 16 | 20 | 24 | number;
    stroke?: number;
    /** Nur setzen, wenn das Icon allein eine Bedeutung trägt. */
    label?: string;
  } = $props();

  const icon = $derived(iconsByName[name]);
</script>

<svg
  viewBox="0 0 24 24"
  width={size}
  height={size}
  fill={icon.fill ? 'currentColor' : 'none'}
  stroke="currentColor"
  stroke-width={stroke}
  stroke-linecap="round"
  stroke-linejoin="round"
  role={label ? 'img' : undefined}
  aria-label={label}
  aria-hidden={label ? undefined : 'true'}
  focusable="false"
>
  <path d={icon.path}></path>
</svg>

<style>
  svg {
    display: block;
    flex: none;
    overflow: visible;
  }
</style>
