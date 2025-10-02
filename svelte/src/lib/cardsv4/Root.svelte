<script lang="ts">
  const { variant = "default" } = $props<{
    variant?: "default" | "elevated" | "outline"
    focusable?: number
  }>()
  import { setContext } from "svelte"
  type Ctx = { registerLabel: (id: string) => void }
  let labelledBy: string | undefined = $state()
  setContext<Ctx>("card-ctx", { registerLabel: (id) => (labelledBy = id) })
  const cls = [
    "card",
    variant === "elevated" && "elevated",
    variant === "outline" && "outline",
  ]
    .filter(Boolean)
    .join(" ")
</script>

<article class={cls} aria-labelledby={labelledBy}>
  <div class="py-3"><slot name="header" /></div>
  <div><slot /></div>
  <div class="pt-3"><slot name="footer" /></div>
</article>

<style>
  .card {
    background: #fff;
    border: 1px solid var(--border);
    border-radius: 16px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    outline: none;
    height: fit-content;
  }
  .card.elevated {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.08);
  }
  .card.outline {
    border-width: 2px;
  }
  .p-4 {
    padding: 1rem;
  }
  .pb-0 {
    padding-bottom: 0;
  }
  .pt-3 {
    padding-top: 0.75rem;
  }
  .border-top {
    border-top: 1px solid var(--border);
  }
</style>
