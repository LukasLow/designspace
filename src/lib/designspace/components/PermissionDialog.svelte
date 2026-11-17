<script lang="ts">
  import Dialog from './Dialog.svelte';
  import Icon from '#lib/designspace/icons/Icon.svelte';

  let {
    open = $bindable(false),
    title = 'Zugriff erlauben?',
    description = 'Die App möchte auf einen Bereich zugreifen.',
    permission,
    allowLabel = 'Erlauben',
    denyLabel = 'Nicht erlauben',
    onallow,
    ondeny
  }: {
    open?: boolean;
    title?: string;
    description?: string;
    permission: string;
    allowLabel?: string;
    denyLabel?: string;
    onallow?: () => void;
    ondeny?: () => void;
  } = $props();

  function allow() {
    onallow?.();
    open = false;
  }

  function deny() {
    ondeny?.();
    open = false;
  }
</script>

{#snippet footer()}
  <button class="action deny" type="button" onclick={deny}>{denyLabel}</button>
  <button class="action allow" type="button" onclick={allow}>{allowLabel}</button>
{/snippet}

<Dialog {open} title={title} description={description} {footer}>
  <div class="permission">
    <span class="mark" aria-hidden="true"><Icon name="Schild" size={20} /></span>
    <div>
      <p class="label">Berechtigung</p>
      <p class="value">{permission}</p>
    </div>
  </div>
  <p class="note">
    Du kannst die Entscheidung später in den Einstellungen ändern. Ohne Zustimmung bleibt der
    Bereich gesperrt.
  </p>
</Dialog>

<style>
  .permission {
    display: flex;
    align-items: center;
    gap: var(--ds-space-3);
    padding: var(--ds-space-3);
    border: 1px solid var(--ds-line);
    border-radius: var(--ds-radius-md);
    background: var(--ds-surface-2);
  }

  .mark {
    display: grid;
    place-items: center;
    width: 36px;
    height: 36px;
    flex: none;
    border-radius: var(--ds-radius-pill);
    background: var(--ds-info-soft);
    color: var(--ds-info);
  }

  .label {
    font-size: var(--ds-text-2xs);
    font-weight: var(--ds-weight-bold);
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--ds-fg-dim);
  }

  .value {
    font-size: var(--ds-text-sm);
    font-weight: var(--ds-weight-bold);
    color: var(--ds-fg);
  }

  .note {
    margin-top: var(--ds-space-3);
    font-size: var(--ds-text-sm);
    color: var(--ds-fg-dim);
  }

  .action {
    min-height: var(--ds-tap-min);
    padding: 0 var(--ds-space-5);
    border: 2px solid var(--ds-line-strong);
    border-radius: var(--ds-radius-control);
    background: transparent;
    color: var(--ds-fg);
    font-family: var(--ds-font-sans);
    font-size: var(--ds-text-sm);
    font-weight: var(--ds-weight-bold);
    cursor: pointer;
  }

  .action:focus-visible {
    outline: var(--ds-border-focus) solid var(--ds-focus);
    outline-offset: 3px;
  }

  .allow {
    border-color: var(--ds-brand);
    background: var(--ds-brand-matte);
    color: var(--ds-bg);
  }
</style>
