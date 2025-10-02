<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements"
  import { type WithElementRef } from "$lib/utils.js"
  let {
    ref = $bindable(null),
    class: className = "",
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props()
</script>

<div
  bind:this={ref}
  data-slot="card-content"
  class={`px-6 ${className}`}
  {...restProps}
>
  {@render children?.()}
</div>

<style>
  [data-slot="card-content"] {
    padding: var(--spacing-lg);
  }
</style>
