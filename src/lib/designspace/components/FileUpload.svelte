<script lang="ts">
  import Icon from '#lib/designspace/icons/Icon.svelte';

  interface UploadFile {
    name: string;
    size: string;
    status?: 'bereit' | 'lädt' | 'fertig' | 'fehler';
  }

  let {
    id,
    label = 'Dateien',
    hint = '',
    accept = '',
    multiple = true,
    files = $bindable<UploadFile[]>([])
  }: {
    id: string;
    label?: string;
    hint?: string;
    accept?: string;
    multiple?: boolean;
    files?: UploadFile[];
  } = $props();

  function onPick(event: Event) {
    const input = event.currentTarget as HTMLInputElement;
    if (!input.files) return;
    const picked = Array.from(input.files).map((file) => ({
      name: file.name,
      size: `${Math.max(1, Math.round(file.size / 1024))} KB`,
      status: 'bereit' as const
    }));
    files = multiple ? [...files, ...picked] : picked;
    input.value = '';
  }

  function remove(index: number) {
    files = files.filter((_, position) => position !== index);
  }
</script>

<div class="upload">
  <label class="drop" for={id}>
    <span class="mark" aria-hidden="true"><Icon name="Hochladen" size={24} /></span>
    <span class="title">{label} ablegen oder auswählen</span>
    {#if hint}<span class="hint">{hint}</span>{/if}
    <input {id} type="file" {accept} {multiple} onchange={onPick} />
  </label>

  {#if files.length}
    <ul class="files">
      {#each files as file, index}
        <li class="file">
          <span class="icon" aria-hidden="true"><Icon name="Dokument" size={20} /></span>
          <span class="body">
            <span class="name">{file.name}</span>
            <span class="size">{file.size}</span>
          </span>
          {#if file.status}
            <span class="status {file.status}">{file.status}</span>
          {/if}
          <button type="button" aria-label={`${file.name} entfernen`} onclick={() => remove(index)}>
            <Icon name="Schließen" size={20} />
          </button>
        </li>
      {/each}
    </ul>
  {/if}
</div>

<style>
  .upload {
    display: grid;
    gap: var(--ds-space-3);
  }

  .drop {
    display: grid;
    justify-items: center;
    gap: var(--ds-space-2);
    padding: var(--ds-space-6) var(--ds-space-4);
    border: 1px dashed var(--ds-line-strong);
    border-radius: var(--ds-radius-lg);
    background: var(--ds-surface);
    text-align: center;
    cursor: pointer;
  }

  .drop:hover {
    border-color: var(--ds-brand);
    background: var(--ds-brand-soft);
  }

  .drop:focus-within {
    outline: var(--ds-border-focus) solid var(--ds-focus);
    outline-offset: 3px;
  }

  .mark {
    display: grid;
    place-items: center;
    width: var(--ds-tap-min);
    height: var(--ds-tap-min);
    border-radius: var(--ds-radius-pill);
    background: var(--ds-surface-3);
    color: var(--ds-brand);
  }

  .title {
    font-size: var(--ds-text-sm);
    font-weight: var(--ds-weight-bold);
  }

  .hint {
    font-size: var(--ds-text-xs);
    color: var(--ds-fg-dim);
  }

  input {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }

  .files {
    display: grid;
    gap: 2px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .file {
    display: flex;
    align-items: center;
    gap: var(--ds-space-3);
    min-height: var(--ds-row-normal);
    padding: 0 var(--ds-space-2);
    border-bottom: 1px solid var(--ds-line-faint);
  }

  .icon {
    display: inline-flex;
    color: var(--ds-fg-dim);
  }

  .body {
    display: grid;
    flex: 1;
    gap: 1px;
    min-width: 0;
  }

  .name {
    font-size: var(--ds-text-sm);
    overflow-wrap: anywhere;
  }

  .size {
    font-family: var(--ds-font-mono);
    font-size: var(--ds-text-2xs);
    color: var(--ds-fg-dim);
  }

  .status {
    font-size: var(--ds-text-2xs);
    font-weight: var(--ds-weight-bold);
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--ds-fg-dim);
  }

  .fertig {
    color: var(--ds-success);
  }

  .fehler {
    color: var(--ds-danger);
  }

  .lädt {
    color: var(--ds-info);
  }

  button {
    display: grid;
    place-items: center;
    width: var(--ds-tap-min);
    height: var(--ds-tap-min);
    border: 0;
    border-radius: var(--ds-radius-control);
    background: transparent;
    color: var(--ds-fg-dim);
    cursor: pointer;
  }

  button:hover {
    background: var(--ds-surface-3);
    color: var(--ds-fg);
  }

  button:focus-visible {
    outline: var(--ds-border-focus) solid var(--ds-focus);
    outline-offset: -3px;
  }
</style>
