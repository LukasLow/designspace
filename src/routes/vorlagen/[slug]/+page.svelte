<script lang="ts">
  import { page } from '$app/state';
  import ArticleDemo from '#lib/taste/ArticleDemo.svelte';
  import ChatDemo from '#lib/taste/ChatDemo.svelte';
  import DirectoryDemo from '#lib/taste/DirectoryDemo.svelte';
  import FeedDemo from '#lib/taste/FeedDemo.svelte';
  import FinancePage from '#lib/taste/FinancePage.svelte';
  import LandingDemo from '#lib/taste/LandingDemo.svelte';
  import LoginDemo from '#lib/taste/LoginDemo.svelte';
  import ProfileDemo from '#lib/taste/ProfileDemo.svelte';
  import RegisterDemo from '#lib/taste/RegisterDemo.svelte';
  import KontoScreen from '#lib/screens/KontoScreen.svelte';
  import { vorlageBySlug, vorlagen } from '#lib/vorlagen';

  const slug = $derived(page.params.slug ?? '');
  const entry = $derived(vorlageBySlug(slug));
</script>

<svelte:head>
  <title>{entry ? entry.title : 'Vorlage'} — DesignSpace</title>
</svelte:head>

{#if slug === 'einstellungen'}
  <KontoScreen />
{:else if slug === 'login'}
  <div class="wrap"><LoginDemo variant="geteilt" /></div>
{:else if slug === 'registrieren'}
  <div class="wrap"><RegisterDemo variant="geteilt" /></div>
{:else if slug === 'profil'}
  <div class="wrap"><ProfileDemo variant="twitter" /></div>
{:else if slug === 'artikel'}
  <div class="wrap"><ArticleDemo variant="dreispaltig" /></div>
{:else if slug === 'kurs'}
  <div class="wrap"><FinancePage variant="umbau" /></div>
{:else if slug === 'chat'}
  <div class="wrap"><ChatDemo variant="zeilen" /></div>
{:else if slug === 'feed'}
  <div class="wrap"><FeedDemo variant="dicht" /></div>
{:else if slug === 'verzeichnis'}
  <div class="wrap"><DirectoryDemo variant="umschalter" /></div>
{:else if slug === 'landing'}
  <div class="wrap"><LandingDemo variant="bento-mitte" /></div>
{:else}
  <div class="wrap">
    <h1>Diese Vorlage gibt es nicht.</h1>
    <ul>
      {#each vorlagen as item}
        <li><a href={`/vorlagen/${item.slug}/`}>{item.title}</a></li>
      {/each}
    </ul>
  </div>
{/if}

<style>
  .wrap {
    width: min(100% - 2 * var(--ds-space-6), 1060px);
    margin-inline: auto;
    padding: var(--ds-space-6) 0;
  }

  @media (max-width: 640px) {
    .wrap {
      width: calc(100% - 2 * var(--ds-space-4));
      padding: var(--ds-space-4) 0;
    }
  }
</style>
