<script lang="ts">
  import { page } from '$app/state';
  import type { Component } from 'svelte';
  import EditorialScreen from '#lib/taste/screens/EditorialScreen.svelte';
  import FormwerkScreen from '#lib/taste/screens/FormwerkScreen.svelte';
  import InstrumentScreen from '#lib/taste/screens/InstrumentScreen.svelte';
  import MembraneScreen from '#lib/taste/screens/MembraneScreen.svelte';
  import SignalScreen from '#lib/taste/screens/SignalScreen.svelte';

  const screens: Record<string, Component> = {
    instrument: InstrumentScreen,
    membrane: MembraneScreen,
    formwerk: FormwerkScreen,
    editorial: EditorialScreen,
    signal: SignalScreen
  };

  const slug = $derived(page.params.slug ?? '');
  const Screen = $derived(screens[slug]);
</script>

<svelte:head>
  <title>{slug} — Taste — DesignSpace</title>
</svelte:head>

{#if Screen}
  <Screen />
{:else}
  <p>Unbekannte Richtung: {slug}</p>
{/if}
