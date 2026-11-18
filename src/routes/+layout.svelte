<script lang="ts">
  import '../app.css';
  import { resolve } from '$app/paths';
  import { page } from '$app/state';

  let { children } = $props();

  const nav = [
    { href: resolve('/'), label: 'Start' },
    { href: resolve('/components'), label: 'Komponenten' },
    { href: resolve('/vorlagen'), label: 'Vorlagen' },
    { href: resolve('/icons'), label: 'Icons' },
    { href: resolve('/rules'), label: 'Regeln' },
    { href: resolve('/taste'), label: 'Archiv' }
  ] as const;

  const path = $derived(page.url.pathname);
  const segments = $derived(path.split('/').filter(Boolean));

  // Der Vergleich läuft ohne Website-Rahmen: die Richtungen sind komplette
  // Screens und sollen nicht wie Unterseiten der Bibliothek wirken.
  // Der Konto-Screen ist die erste echte Fläche und steht ebenfalls frei.
  const isLab = $derived(
    (segments.length >= 2 && segments[segments.length - 2] === 'taste') ||
      segments[0] === 'konto' ||
      (segments[0] === 'vorlagen' && segments.length >= 2)
  );

  function isActive(href: string): boolean {
    const target = resolve(href);
    if (href === '/') return path === target;
    return path.startsWith(target);
  }
</script>

{#if isLab}
  {@render children()}
{:else}
  <a class="skip" href="#main">Zum Inhalt springen</a>

<div class="shell">
  <header class="bar">
    <a class="brand" href={resolve('/')} aria-label="DesignSpace — Start">
      <span class="mark" aria-hidden="true"></span>
      <span>DesignSpace</span>
    </a>

    <nav aria-label="Hauptnavigation">
      <ul class="nav">
        {#each nav as item}
          <li>
            <a
              href={resolve(item.href)}
              class="nav-link"
              aria-current={isActive(item.href) ? 'page' : undefined}
            >
              {item.label}
            </a>
          </li>
        {/each}
      </ul>
    </nav>

    <span class="phase">Phase 0</span>
  </header>

  <main id="main">
    {@render children()}
  </main>

  <footer class="foot">
    <span>DesignSpace · Design-Bibliothek</span>
    <span class="dim">100 % Schwarz · Low Vision · statischer Export</span>
  </footer>
</div>
{/if}

<style>
  .shell {
    width: min(100% - 2 * var(--ds-space-6), var(--ds-content-width));
    margin-inline: auto;
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    padding-bottom: var(--ds-space-8);
  }

  .skip {
    position: absolute;
    left: -9999px;
    top: 0;
  }

  .skip:focus {
    left: var(--ds-space-4);
    top: var(--ds-space-4);
    z-index: 10;
    display: inline-flex;
    align-items: center;
    min-height: var(--ds-tap-min);
    padding: 0 var(--ds-space-4);
    background: var(--ds-fg);
    color: var(--ds-bg);
    font-weight: var(--ds-weight-bold);
  }

  .bar {
    display: flex;
    align-items: center;
    gap: var(--ds-space-6);
    flex-wrap: wrap;
    padding: var(--ds-space-6) 0;
    border-bottom: var(--ds-border-hairline) solid var(--ds-line);
  }

  .brand {
    display: inline-flex;
    align-items: center;
    gap: var(--ds-space-3);
    min-height: var(--ds-tap-min);
    font-size: var(--ds-text-lg);
    font-weight: var(--ds-weight-bold);
    letter-spacing: var(--ds-tracking-tight);
    text-decoration: none;
  }

  .brand:hover {
    text-decoration: none;
  }

  .mark {
    width: 18px;
    height: 18px;
    border: var(--ds-border-strong) solid var(--ds-fg);
    border-radius: var(--ds-radius-xs);
    transform: rotate(45deg);
    flex: none;
  }

  .nav {
    display: flex;
    align-items: center;
    gap: var(--ds-space-1);
  }

  .nav-link {
    display: inline-flex;
    align-items: center;
    min-height: var(--ds-tap-min);
    padding: 0 var(--ds-space-4);
    border-radius: var(--ds-radius-sm);
    color: var(--ds-fg-dim);
    font-size: var(--ds-text-sm);
    font-weight: var(--ds-weight-bold);
    text-decoration: none;
  }

  .nav-link:hover {
    color: var(--ds-fg);
    background: var(--ds-surface-2);
    text-decoration: none;
  }

  .nav-link[aria-current='page'] {
    color: var(--ds-fg);
    background: var(--ds-surface-3);
  }

  .phase {
    margin-left: auto;
    padding: var(--ds-space-2) var(--ds-space-3);
    border: var(--ds-border-hairline) solid var(--ds-line-strong);
    border-radius: var(--ds-radius-pill);
    font-size: var(--ds-text-2xs);
    font-weight: var(--ds-weight-bold);
    letter-spacing: var(--ds-tracking-wide);
    text-transform: uppercase;
    white-space: nowrap;
  }

  main {
    flex: 1;
    padding: var(--ds-space-11) 0 var(--ds-space-10);
  }

  .foot {
    display: flex;
    flex-wrap: wrap;
    gap: var(--ds-space-2) var(--ds-space-6);
    justify-content: space-between;
    padding-top: var(--ds-space-6);
    border-top: var(--ds-border-hairline) solid var(--ds-line);
    font-size: var(--ds-text-xs);
    font-weight: var(--ds-weight-bold);
  }

  .dim {
    color: var(--ds-fg-dim);
    font-weight: var(--ds-weight-regular);
  }

  @media (max-width: 720px) {
    .bar {
      gap: var(--ds-space-3);
    }

    .phase {
      order: -1;
      margin-left: 0;
    }

    .nav {
      flex-wrap: wrap;
    }
  }
</style>
