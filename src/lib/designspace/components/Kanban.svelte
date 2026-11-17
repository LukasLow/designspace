<script lang="ts">
  interface Task {
    id: string;
    title: string;
    meta?: string;
    tone?: 'neutral' | 'brand' | 'info' | 'success' | 'warning' | 'danger';
  }

  interface Column {
    id: string;
    title: string;
    items: Task[];
  }

  let {
    columns: initialColumns,
    label = 'Aufgaben'
  }: {
    columns: Column[];
    label?: string;
  } = $props();

  function clone(columns: Column[]): Column[] {
    return columns.map((column) => ({ ...column, items: [...column.items] }));
  }

  // svelte-ignore state_referenced_locally — das Board startet einmal aus den Props.
  let board = $state(clone(initialColumns));
  let dragged = $state('');

  function move(taskId: string, fromId: string, toId: string) {
    if (fromId === toId) return;
    const from = board.find((column) => column.id === fromId);
    const to = board.find((column) => column.id === toId);
    const task = from?.items.find((item) => item.id === taskId);
    if (!from || !to || !task) return;
    from.items = from.items.filter((item) => item.id !== taskId);
    to.items = [...to.items, task];
  }

  function onDrop(event: DragEvent, columnId: string) {
    event.preventDefault();
    const from = board.find((column) => column.items.some((task) => task.id === dragged));
    if (from) move(dragged, from.id, columnId);
    dragged = '';
  }

  function onKey(event: KeyboardEvent, columnId: string, task: Task) {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    const index = board.findIndex((column) => column.id === columnId);
    const next = event.key === 'ArrowRight' ? index + 1 : index - 1;
    if (next < 0 || next >= board.length) return;
    event.preventDefault();
    move(task.id, columnId, board[next].id);
    requestAnimationFrame(() => document.getElementById(`task-${task.id}`)?.focus());
  }
</script>

<div class="board" aria-label={label} role="group">
  {#each board as column}
    <section
      class="column"
      role="group"
      aria-label={column.title}
      ondragover={(event) => event.preventDefault()}
      ondrop={(event) => onDrop(event, column.id)}
    >
      <h3>{column.title} <span class="count">{column.items.length}</span></h3>
      <div class="cards">
        {#each column.items as task (task.id)}
          <div
            id={`task-${task.id}`}
            class="card {task.tone ?? 'neutral'}"
            role="button"
            aria-label={`${task.title} — mit Pfeiltasten verschieben`}
            draggable="true"
            tabindex="0"
            ondragstart={() => (dragged = task.id)}
            onkeydown={(event) => onKey(event, column.id, task)}
          >
            <p class="title">{task.title}</p>
            {#if task.meta}<p class="meta">{task.meta}</p>{/if}
          </div>
        {/each}
        {#if column.items.length === 0}
          <p class="empty">Nichts offen</p>
        {/if}
      </div>
    </section>
  {/each}
</div>

<style>
  .board {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: minmax(220px, 1fr);
    gap: var(--ds-space-3);
    overflow-x: auto;
    padding-bottom: var(--ds-space-2);
  }

  .column {
    display: grid;
    align-content: start;
    gap: var(--ds-space-3);
    padding: var(--ds-space-3);
    border: 1px solid var(--ds-line);
    border-radius: var(--ds-radius-lg);
    background: var(--ds-surface);
    min-height: 200px;
  }

  h3 {
    font-size: var(--ds-text-2xs);
    font-weight: var(--ds-weight-bold);
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--ds-fg-dim);
  }

  .count {
    color: var(--ds-fg);
  }

  .cards {
    display: grid;
    gap: var(--ds-space-2);
  }

  .card {
    padding: var(--ds-space-3);
    border: 1px solid var(--ds-line-strong);
    border-left: 4px solid var(--ds-line-strong);
    border-radius: var(--ds-radius-md);
    background: var(--ds-surface-2);
    cursor: grab;
  }

  .card:active {
    cursor: grabbing;
  }

  .card:focus-visible {
    outline: var(--ds-border-focus) solid var(--ds-focus);
    outline-offset: 3px;
  }

  .title {
    font-size: var(--ds-text-sm);
    font-weight: var(--ds-weight-bold);
  }

  .meta {
    margin-top: 2px;
    font-size: var(--ds-text-2xs);
    color: var(--ds-fg-dim);
  }

  .empty {
    padding: var(--ds-space-3);
    font-size: var(--ds-text-xs);
    color: var(--ds-fg-dim);
    text-align: center;
  }

  .brand {
    border-left-color: var(--ds-brand);
  }

  .info {
    border-left-color: var(--ds-info);
  }

  .success {
    border-left-color: var(--ds-success);
  }

  .warning {
    border-left-color: var(--ds-warning);
  }

  .danger {
    border-left-color: var(--ds-danger);
  }
</style>
