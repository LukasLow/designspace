<script lang="ts">
  import type { ProfileVariant } from './profile-routes';

  let { variant }: { variant: ProfileVariant } = $props();

  const profile = {
    name: 'Lena Hoffmann',
    handle: '@lena',
    initials: 'LH',
    bio: 'Produktdesign, Typografie und Dinge, die man anfassen kann. Berlin.',
    stats: [
      { label: 'Beiträge', value: '128' },
      { label: 'Follower', value: '2,4k' },
      { label: 'Folgt', value: '318' }
    ],
    posts: [
      {
        text: 'Heute das erste Mal die neue Rasterung im Druck gesehen. Der Unterschied ist kleiner als gedacht — und genau richtig.',
        time: 'vor 2 Std.'
      },
      {
        text: 'Atkinson Hyperlegible ist keine Kompromiss-Schrift. Sie ist bei 13 px besser lesbar als die meisten bei 16.',
        time: 'gestern'
      },
      {
        text: 'Drei Stunden Kantenradius diskutiert. Ergebnis: 18.',
        time: 'vor 3 Tagen'
      }
    ]
  };
</script>

<div class="demo" data-v={variant}>
  {#if variant === 'twitter'}
    <div class="cover" aria-hidden="true"></div>
  {/if}

  <div class="wrap">
    <div class="id">
      <span class="avatar" aria-hidden="true">{profile.initials}</span>
      <div class="who">
        <h3>{profile.name}</h3>
        <p class="handle">{profile.handle}</p>
      </div>
      {#if variant !== 'karte'}
        <div class="acts">
          <button class="pbtn" type="button">Folgen</button>
          <button class="sbtn" type="button">Nachricht</button>
        </div>
      {/if}
    </div>

    <p class="bio">{profile.bio}</p>

    <dl class="stats">
      {#each profile.stats as stat}
        <div>
          <dt>{stat.label}</dt>
          <dd>{stat.value}</dd>
        </div>
      {/each}
    </dl>

    {#if variant === 'karte'}
      <div class="acts full">
        <button class="pbtn" type="button">Folgen</button>
        <button class="sbtn" type="button">Nachricht</button>
      </div>
    {/if}

    <ul class="posts">
      {#each profile.posts as post}
        <li>
          <p class="pt">{post.text}</p>
          <p class="pm">{post.time}</p>
        </li>
      {/each}
    </ul>
  </div>
</div>

<style>
  .demo {
    background: #000;
    border: 1px solid var(--ds-line);
    border-radius: var(--ds-radius-lg);
    overflow: hidden;
  }

  .cover {
    height: 120px;
    background-color: #121212;
    background-image: var(--ds-grain);
    background-size: 140px 140px;
    background-blend-mode: overlay;
    border-bottom: 1px solid var(--ds-line);
  }

  .wrap {
    padding: var(--ds-space-6);
  }

  .id {
    display: flex;
    align-items: center;
    gap: var(--ds-space-4);
    flex-wrap: wrap;
  }

  .avatar {
    display: grid;
    place-items: center;
    flex: none;
    width: 72px;
    height: 72px;
    border: 1px solid rgba(55, 181, 190, 0.5);
    border-radius: var(--ds-radius-control);
    background: var(--ds-brand-soft);
    color: var(--ds-brand);
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  .who {
    min-width: 0;
  }

  h3 {
    font-size: 32px;
    line-height: 1;
    letter-spacing: -0.04em;
  }

  .handle {
    margin-top: 4px;
    font-size: var(--ds-text-sm);
    color: var(--ds-fg-dim);
  }

  .acts {
    display: flex;
    gap: var(--ds-space-2);
    margin-left: auto;
  }

  .pbtn,
  .sbtn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: var(--ds-tap-min);
    padding: 0 var(--ds-space-4);
    border-radius: var(--ds-radius-control);
    font: inherit;
    font-size: var(--ds-text-sm);
    font-weight: 700;
    cursor: pointer;
  }

  .pbtn {
    border: 2px solid var(--ds-brand);
    background-color: var(--ds-brand-matte);
    color: #000;
  }

  .sbtn {
    border: 1px solid rgba(0, 168, 232, 0.3);
    background: rgba(0, 168, 232, 0.05);
    color: var(--ds-fg);
  }

  .bio {
    margin-top: var(--ds-space-4);
    max-width: 56ch;
    font-size: var(--ds-text-sm);
    line-height: 1.6;
    color: #e6e6e6;
  }

  .stats {
    display: flex;
    gap: var(--ds-space-6);
    margin-top: var(--ds-space-5);
  }

  .stats div {
    display: grid;
    gap: 2px;
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
    font-size: var(--ds-text-base);
    font-weight: 700;
  }

  .posts {
    margin-top: var(--ds-space-6);
    border-top: 1px solid var(--ds-line);
  }

  .posts li {
    padding: var(--ds-space-4) 0;
    border-bottom: 1px solid var(--ds-line-faint);
  }

  .pt {
    font-size: var(--ds-text-sm);
    line-height: 1.6;
  }

  .pm {
    margin-top: 6px;
    font-size: var(--ds-text-2xs);
    font-weight: 700;
    color: var(--ds-fg-dim);
  }

  /* ------------------------------------------------------------ twitter */

  .demo[data-v='twitter'] .avatar {
    margin-top: -52px;
    border: 4px solid #000;
  }

  .demo[data-v='twitter'] .id {
    align-items: flex-end;
  }

  .demo[data-v='twitter'] h3 {
    font-size: 28px;
  }

  /* -------------------------------------------------------------- ruhig */

  .demo[data-v='ruhig'] .wrap {
    padding: var(--ds-space-7);
  }

  .demo[data-v='ruhig'] .stats {
    display: grid;
    gap: 0;
    margin-top: var(--ds-space-5);
    border-top: 1px solid var(--ds-line);
  }

  .demo[data-v='ruhig'] .stats div {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: var(--ds-space-4);
    min-height: var(--ds-row-normal);
    border-bottom: 1px solid var(--ds-line-faint);
  }

  .demo[data-v='ruhig'] .acts {
    margin-left: 0;
    width: 100%;
    margin-top: var(--ds-space-4);
  }

  /* --------------------------------------------------------- editorial */

  .demo[data-v='editorial'] .wrap {
    padding: var(--ds-space-7);
  }

  .demo[data-v='editorial'] .id {
    display: grid;
    gap: var(--ds-space-5);
  }

  .demo[data-v='editorial'] .avatar {
    width: 160px;
    height: 160px;
    font-size: 48px;
  }

  .demo[data-v='editorial'] h3 {
    font-size: 44px;
  }

  .demo[data-v='editorial'] .bio {
    font-size: var(--ds-text-lg);
    line-height: 1.5;
    color: var(--ds-fg);
  }

  .demo[data-v='editorial'] .acts {
    margin-left: 0;
  }

  /* --------------------------------------------------------------- dicht */

  .demo[data-v='dicht'] .wrap {
    padding: var(--ds-space-4);
  }

  .demo[data-v='dicht'] .avatar {
    width: 48px;
    height: 48px;
    font-size: 16px;
  }

  .demo[data-v='dicht'] h3 {
    font-size: 24px;
  }

  .demo[data-v='dicht'] .bio {
    margin-top: var(--ds-space-3);
  }

  .demo[data-v='dicht'] .stats {
    gap: var(--ds-space-2);
    margin-top: var(--ds-space-3);
  }

  .demo[data-v='dicht'] .stats div {
    display: inline-flex;
    align-items: baseline;
    gap: 6px;
    padding: 4px 10px;
    border: 1px solid var(--ds-line-strong);
    border-radius: var(--ds-radius-control);
  }

  .demo[data-v='dicht'] .posts li {
    padding: var(--ds-space-3) 0;
  }

  /* --------------------------------------------------------------- karte */

  .demo[data-v='karte'] {
    max-width: 560px;
    margin-inline: auto;
    border-color: var(--ds-line-strong);
    background: var(--ds-surface);
  }

  .demo[data-v='karte'] .id {
    align-items: flex-start;
  }

  .demo[data-v='karte'] .acts.full {
    margin-left: 0;
    margin-top: var(--ds-space-5);
  }

  .demo[data-v='karte'] .acts.full .pbtn,
  .demo[data-v='karte'] .acts.full .sbtn {
    flex: 1;
  }

  @media (max-width: 640px) {
    .acts {
      margin-left: 0;
      width: 100%;
    }

    .demo[data-v='editorial'] .avatar {
      width: 112px;
      height: 112px;
      font-size: 34px;
    }

    .demo[data-v='editorial'] h3 {
      font-size: 34px;
    }
  }
</style>
