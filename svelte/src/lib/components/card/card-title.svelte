<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements"
  import { type WithElementRef } from "$lib/utils.js"
  import Title from "../common/title.svelte"
  let {
    ref = $bindable(null),
    class: className = "",
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props()
</script>

<div
  bind:this={ref}
  data-slot="card-title"
  class={`${className}`}
  {...restProps}
>
  <Title variant="h3">
    {@render children?.()}
  </Title>
</div>
