<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements"
  import { type WithElementRef } from "$lib/utils.js"

  type Props = WithElementRef<HTMLAttributes<HTMLHeadingElement>> & {
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  }

  let {
    variant = "h2",
    ref = $bindable(null),
    class: className = "",
    children,
    ...restProps
  }: Props = $props()
</script>

<svelte:element
  this={variant}
  bind:this={ref}
  class={`${className}`}
  {...restProps}
>
  {@render children?.()}
</svelte:element>
