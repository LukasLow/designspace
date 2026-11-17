<script lang="ts">
  import type { ChatVariant } from './chat-routes';

  let { variant }: { variant: ChatVariant } = $props();

  const messages = [
    { from: 'them', initials: 'MV', author: 'Mira Vogt', text: 'Hast du die neue Rasterung gesehen?', time: '09:10', cont: false },
    { from: 'them', initials: 'MV', author: 'Mira Vogt', text: 'Die Kanten sind jetzt 18 px.', time: '09:10', cont: true },
    { from: 'me', initials: 'LH', author: 'Lena Hoffmann', text: 'Ja. Der Unterschied ist kleiner als gedacht.', time: '09:11', cont: false },
    { from: 'them', initials: 'JK', author: 'Jonas Kern', text: 'Genau richtig.', time: '09:12', cont: false }
  ];
</script>

<div class="demo" data-c={variant}>
  {#if variant === 'geteilt'}
    <aside class="list" aria-hidden="true">
      <p class="kick">Chats</p>
      <span class="conv on"><span class="cname">Mira Vogt</span><span class="clast">Genau richtig.</span></span>
      <span class="conv"><span class="cname">Jonas Kern</span><span class="clast">Bis morgen.</span></span>
      <span class="conv"><span class="cname">Team Raster</span><span class="clast">18 px.</span></span>
    </aside>
  {/if}

  <div class="main">
    <header class="head">
      <span class="avatar" aria-hidden="true">TR</span>
      <div class="who">
        <h3>Team Raster</h3>
        <p class="status">Mira, Jonas, Lena · 3 Mitglieder</p>
      </div>
      <div class="actions" aria-hidden="true">
        <span class="icon">
          <svg viewBox="0 0 24 24">
            <path d="M7 4h3l2 5-2 1a12 12 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 5 6a2 2 0 0 1 2-2z" />
          </svg>
        </span>
        <span class="icon">
          <svg viewBox="0 0 24 24">
            <rect x="3" y="6" width="12" height="12" rx="2" />
            <path d="M15 10l6-4v12l-6-4" />
          </svg>
        </span>
      </div>
    </header>

    <div class="thread">
      {#each messages as message, i}
        <div class="msg {message.from}" class:cont={message.cont}>
          <span class="mini" aria-hidden="true">{message.initials}</span>
          <div class="body">
            {#if !message.cont}
              <p class="meta">
                <span class="author">{message.author}</span>
                <span class="time">{message.time}</span>
              </p>
            {/if}
            <p class="text">{message.text}</p>
            {#if variant === 'element' && i === 0}
              <p class="reactions"><span>👍 2</span><span>🔥 1</span></p>
            {/if}
          </div>
        </div>
      {/each}
    </div>

    <div class="composer">
      <span class="icon" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <path d="M12 5v14M5 12h14" />
        </svg>
      </span>
      <input placeholder="Nachricht an Team Raster" readonly />
      <span class="send" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <path d="M12 19V5M6 11l6-6 6 6" />
        </svg>
      </span>
    </div>
  </div>
</div>

<style>
  .demo {
    display: flex;
    background: #000;
    border: 1px solid var(--ds-line);
    border-radius: var(--ds-radius-lg);
    overflow: hidden;
  }

  .main {
    display: flex;
    flex-direction: column;
    min-width: 0;
    flex: 1;
  }

  .list {
    display: grid;
    gap: 4px;
    align-content: start;
    width: 220px;
    flex: none;
    padding: 14px;
    border-right: 1px solid var(--ds-line);
  }

  .kick {
    font-size: var(--ds-text-2xs);
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--ds-fg-dim);
    margin-bottom: 8px;
  }

  .conv {
    display: grid;
    gap: 2px;
    padding: 10px;
    border-radius: 12px;
  }

  .conv.on {
    background: var(--ds-surface-2);
  }

  .cname {
    font-size: var(--ds-text-sm);
    font-weight: 700;
  }

  .clast {
    font-size: var(--ds-text-xs);
    color: var(--ds-fg-dim);
  }

  .head {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 16px;
    border-bottom: 1px solid var(--ds-line);
  }

  .avatar {
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    flex: none;
    border: 1px solid rgba(55, 181, 190, 0.5);
    border-radius: 12px;
    background: var(--ds-brand-soft);
    color: var(--ds-brand);
    font-size: 14px;
    font-weight: 700;
  }

  .who {
    min-width: 0;
  }

  h3 {
    font-size: 18px;
    line-height: 1.1;
    letter-spacing: -0.02em;
  }

  .status {
    margin-top: 2px;
    font-size: var(--ds-text-xs);
    color: var(--ds-fg-dim);
  }

  .actions {
    display: flex;
    gap: 6px;
    margin-left: auto;
  }

  .icon {
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    flex: none;
    border: 1px solid var(--ds-line-strong);
    border-radius: 12px;
    color: var(--ds-fg);
  }

  .icon svg,
  .send svg {
    width: 18px;
    height: 18px;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.8;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .thread {
    flex: 1;
    display: grid;
    gap: 12px;
    align-content: start;
    padding: 16px;
  }

  .msg {
    display: grid;
    grid-template-columns: 34px minmax(0, 1fr);
    gap: 10px;
  }

  .mini {
    display: grid;
    place-items: center;
    width: 34px;
    height: 34px;
    border-radius: 10px;
    background: var(--ds-surface-2);
    color: var(--ds-fg-dim);
    font-size: var(--ds-text-2xs);
    font-weight: 700;
  }

  .body {
    min-width: 0;
  }

  .meta {
    display: flex;
    align-items: baseline;
    gap: 8px;
    margin-bottom: 2px;
  }

  .author {
    font-size: var(--ds-text-sm);
    font-weight: 700;
  }

  .time {
    font-size: var(--ds-text-2xs);
    font-weight: 700;
    color: var(--ds-fg-dim);
  }

  /* Folgezeilen derselben Person: kein Avatar, kein Name. */
  .cont .mini {
    visibility: hidden;
  }

  .text {
    font-size: var(--ds-text-sm);
    line-height: 1.55;
  }

  .composer {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px;
    border-top: 1px solid var(--ds-line);
  }

  .composer input {
    flex: 1;
    min-width: 0;
    min-height: 48px;
    padding: 0 12px;
    border: 1px solid var(--ds-line-strong);
    border-radius: var(--ds-radius-control);
    background: #050505;
    color: var(--ds-fg);
    font: inherit;
    font-size: var(--ds-text-sm);
  }

  .send {
    display: grid;
    place-items: center;
    width: 48px;
    height: 48px;
    flex: none;
    border-radius: var(--ds-radius-control);
    background: var(--ds-brand-matte);
    color: #000;
  }

  /* ------------------------------------------------------------ blasen */

  .demo[data-c='blasen'] .msg {
    grid-template-columns: minmax(0, 1fr);
  }

  .demo[data-c='blasen'] .mini {
    display: none;
  }

  .demo[data-c='blasen'] .msg .body {
    max-width: 76%;
    padding: 10px 14px;
    border-radius: 18px;
    background: var(--ds-surface-2);
  }

  .demo[data-c='blasen'] .msg.me {
    justify-items: end;
  }

  .demo[data-c='blasen'] .msg.me .body {
    background: var(--ds-brand-soft);
    border: 1px solid rgba(55, 181, 190, 0.4);
  }

  .demo[data-c='blasen'] .composer {
    border-top: 0;
  }

  .demo[data-c='blasen'] .composer input {
    border-radius: 999px;
  }

  .demo[data-c='blasen'] .send {
    border-radius: 999px;
  }

  /* ------------------------------------------------------------ karten */

  .demo[data-c='karten'] .msg .body {
    padding: 12px 14px;
    border: 1px solid var(--ds-line);
    border-radius: 18px;
    background: var(--ds-surface);
  }

  .demo[data-c='karten'] .composer {
    margin: 12px;
    border: 1px solid var(--ds-line);
    border-radius: 18px;
    background: var(--ds-surface);
  }

  /* ----------------------------------------------------------- geteilt */

  .demo[data-c='geteilt'] .head {
    padding: 12px 16px;
  }
  /* ------------------------------------------------------------ fokus */

  .demo[data-c='fokus'] .head {
    padding: 20px 22px;
    border-bottom: 0;
  }

  .demo[data-c='fokus'] .thread {
    padding: 8px 22px 24px;
    gap: 20px;
  }

  .demo[data-c='fokus'] .text {
    font-size: var(--ds-text-base);
    line-height: 1.6;
  }

  .demo[data-c='fokus'] .composer {
    border-top: 0;
    padding: 0 22px 22px;
  }

  .demo[data-c='fokus'] .mini {
    display: none;
  }

  .demo[data-c='fokus'] .msg {
    grid-template-columns: minmax(0, 1fr);
  }

  /* ---------------------------------------------------------- element */

  .demo[data-c='element'] .msg {
    grid-template-columns: minmax(0, 1fr);
  }

  .demo[data-c='element'] .mini {
    display: none;
  }

  .demo[data-c='element'] .msg .body {
    max-width: 74%;
    padding: 10px 14px;
    border-radius: 22px;
    background: var(--ds-surface-2);
  }

  .demo[data-c='element'] .msg.me {
    justify-items: end;
  }

  .demo[data-c='element'] .msg.me .body {
    background: var(--ds-brand-soft);
    border: 1px solid rgba(55, 181, 190, 0.35);
  }

  .demo[data-c='element'] .meta {
    margin-bottom: 4px;
  }

  .demo[data-c='element'] .author {
    font-size: var(--ds-text-xs);
  }

  .demo[data-c='element'] .head {
    border-bottom: 0;
  }

  .demo[data-c='element'] .composer {
    border-top: 0;
    padding: 12px 16px 16px;
  }

  .demo[data-c='element'] .composer input,
  .demo[data-c='element'] .send {
    border-radius: 999px;
  }

  .reactions {
    display: flex;
    gap: 6px;
    margin-top: 8px;
  }

  .reactions span {
    padding: 2px 9px;
    border: 1px solid var(--ds-line);
    border-radius: 999px;
    font-size: var(--ds-text-2xs);
    font-weight: 700;
  }

  @media (max-width: 760px) {
    .demo[data-c='geteilt'] {
      display: block;
    }

    .demo[data-c='geteilt'] .list {
      display: none;
    }

    .demo[data-c='blasen'] .msg .body {
      max-width: 88%;
    }
  }
</style>
