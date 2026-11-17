<script lang="ts">
  let { vertical = false }: { vertical?: boolean } = $props();
</script>

<div class="sep" class:vertical role="separator" aria-orientation={vertical ? 'vertical' : 'horizontal'}></div>

<style>
  .sep {
    border: 0;
    margin: 0;
    background: var(--ds-line);
    height: 1px;
    width: 100%;
  }

  .vertical {
    width: 1px;
    height: 100%;
    min-height: 24px;
  }
</style>
