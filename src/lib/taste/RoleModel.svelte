<script lang="ts">
  import type { RoleModel } from './role-models';

  let { model }: { model: RoleModel } = $props();
</script>

<div class="model" data-m={model}>
  <div class="row">
    <button class="primary" type="button">Speichern</button>
    <span class="chip ok">gespeichert</span>
    <span class="chip warn">Codes fehlen</span>
    <span class="chip danger">Fehler</span>
    <a class="link" href="#top">Details</a>
  </div>
</div>

<style>
  .row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--ds-space-2);
  }

  .primary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: var(--ds-tap-min);
    padding: 0 var(--ds-space-4);
    border-radius: 0;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
  }

  .chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    min-height: 32px;
    padding: 0 10px;
    border-radius: 0;
    font-family: var(--ds-font-mono);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .link {
    display: inline-flex;
    align-items: center;
    min-height: var(--ds-tap-min);
    padding: 0 6px;
    font-size: 13px;
    font-weight: 700;
    text-decoration: none;
    border-bottom: 1.5px solid currentColor;
  }

  /* ------------------------------------------------------- 1 Marke führt */

  .model[data-m='marke'] .primary {
    border: 2px solid #00e89a;
    background: #00e89a;
    color: #00170f;
  }

  .model[data-m='marke'] .ok {
    border: 1px solid rgba(0, 232, 154, 0.5);
    background: rgba(0, 232, 154, 0.14);
    color: #00e89a;
  }

  .model[data-m='marke'] .warn {
    border: 1px solid rgba(255, 194, 75, 0.5);
    background: rgba(255, 194, 75, 0.14);
    color: #ffc24b;
  }

  .model[data-m='marke'] .danger {
    border: 1px solid rgba(255, 107, 107, 0.5);
    background: rgba(255, 107, 107, 0.14);
    color: #ff6b6b;
  }

  .model[data-m='marke'] .link {
    color: #00a8e8;
  }

  /* -------------------------------------------------------- 2 Weiß führt */

  .model[data-m='weiss'] .primary {
    border: 2px solid #fff;
    background: #fff;
    color: #000;
  }

  .model[data-m='weiss'] .ok {
    border: 1px solid rgba(0, 232, 154, 0.5);
    background: rgba(0, 232, 154, 0.14);
    color: #00e89a;
  }

  .model[data-m='weiss'] .warn {
    border: 1px solid rgba(255, 194, 75, 0.5);
    background: rgba(255, 194, 75, 0.14);
    color: #ffc24b;
  }

  .model[data-m='weiss'] .danger {
    border: 1px solid rgba(255, 107, 107, 0.5);
    background: rgba(255, 107, 107, 0.14);
    color: #ff6b6b;
  }

  .model[data-m='weiss'] .link {
    color: #00a8e8;
  }

  /* -------------------------------------------------------- 3 Blau führt */

  .model[data-m='blau'] .primary {
    border: 2px solid #00a8e8;
    background: #00a8e8;
    color: #001018;
  }

  .model[data-m='blau'] .ok {
    border: 1px solid rgba(0, 232, 154, 0.5);
    background: rgba(0, 232, 154, 0.14);
    color: #00e89a;
  }

  .model[data-m='blau'] .warn {
    border: 1px solid rgba(255, 194, 75, 0.5);
    background: rgba(255, 194, 75, 0.14);
    color: #ffc24b;
  }

  .model[data-m='blau'] .danger {
    border: 1px solid rgba(255, 107, 107, 0.5);
    background: rgba(255, 107, 107, 0.14);
    color: #ff6b6b;
  }

  .model[data-m='blau'] .link {
    color: #fff;
  }

  /* ------------------------------------------------ 4 Ränder statt Flächen */

  .model[data-m='raender'] .primary {
    border: 2px solid #00e89a;
    background: #000;
    color: #00e89a;
  }

  .model[data-m='raender'] .chip {
    background: transparent;
  }

  .model[data-m='raender'] .ok {
    border: 1px solid #00e89a;
    color: #00e89a;
  }

  .model[data-m='raender'] .warn {
    border: 1px solid #ffc24b;
    color: #ffc24b;
  }

  .model[data-m='raender'] .danger {
    border: 1px solid #ff6b6b;
    color: #ff6b6b;
  }

  .model[data-m='raender'] .link {
    color: #00a8e8;
  }

  /* ------------------------------------------------------- 5 Punkte statt */

  .model[data-m='punkte'] .primary {
    border: 2px solid #fff;
    background: #fff;
    color: #000;
  }

  .model[data-m='punkte'] .chip {
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: transparent;
    color: #fff;
  }

  .model[data-m='punkte'] .chip::before {
    content: "";
    width: 8px;
    height: 8px;
    flex: none;
  }

  .model[data-m='punkte'] .ok::before {
    background: #00e89a;
  }

  .model[data-m='punkte'] .warn::before {
    background: #ffc24b;
  }

  .model[data-m='punkte'] .danger::before {
    background: #ff6b6b;
  }

  .model[data-m='punkte'] .link {
    color: #fff;
  }
</style>
