<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements"
  import { type WithElementRef } from "$lib/utils.js"
  import Title from "../common/title.svelte"
  import { getContext } from "svelte"
  import { CARD_CTX, type CardContext } from "./card-context"
  let {
    id,
    ref = $bindable(null),
    class: className = "",
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props()

  // Get the setter from context (no-op fallback for safety)
  const { setTitleId } = getContext<CardContext>(CARD_CTX) ?? {
    setTitleId: () => {},
  }

  // Register this title's id with the root whenever `id` changes
  $effect(() => {
    if (id) {
      setTitleId(id)
    }
  })
</script>

<div
  {id}
  bind:this={ref}
  data-slot="card-title"
  class={`${className}`}
  {...restProps}
>
  <Title variant="h3">
    {@render children?.()}
  </Title>
</div>
