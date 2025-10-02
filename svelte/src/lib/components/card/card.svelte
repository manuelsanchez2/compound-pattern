<script lang="ts">
  import type { WithElementRef } from "$lib/utils"
  import type { HTMLAttributes } from "svelte/elements"
  import { CARD_CTX, type CardContext } from "./card-context"
  import { setContext } from "svelte"

  type Props = WithElementRef<HTMLAttributes<HTMLElement>> & {
    size?: "small" | "medium" | "large" | "container"
    variant?: "default" | "elevated" | "outline"
  }

  let {
    size = "container",
    variant,
    ref = $bindable(null),
    class: className = "",
    children,
    ...restProps
  }: Props = $props()

  let titleId = $state<string | null>(null)

  const ctx: CardContext = {
    setTitleId: (id) => (titleId = id),
  }

  setContext(CARD_CTX, ctx)
</script>

<article
  bind:this={ref}
  data-slot="card"
  aria-labelledby={titleId ?? undefined}
  class={`bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm ${size} ${className}`}
  {...restProps}
>
  {@render children?.()}
</article>

<style>
  :root {
    --card-size-sm: 300px;
    --card-size-md: 450px;
    --card-size-lg: 600px;
    --card-size-container: 100%;
  }

  [data-slot="card"] {
    background: #fff;
    border: 1px solid var(--border);
    border-radius: 16px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    outline: none;
    height: fit-content;
    width: 100%;
  }

  [data-slot="card"].elevated {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.08);
  }
  [data-slot="card"].outline {
    border-width: 2px;
  }

  [data-slot="card"].small {
    max-width: var(--card-size-sm);
  }
  [data-slot="card"].medium {
    max-width: var(--card-size-md);
  }
  [data-slot="card"].large {
    max-width: var(--card-size-lg);
  }

  [data-slot="card"].container {
    max-width: var(--card-size-container);
  }
</style>
