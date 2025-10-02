<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements"
  import { type WithElementRef } from "$lib/utils.js"
  let {
    ref = $bindable(null),
    class: className = "",
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLParagraphElement>> = $props()
</script>

<p
  bind:this={ref}
  data-slot="card-description"
  class={`${className}`}
  {...restProps}
>
  {@render children?.()}
</p>

<style>
  [data-slot="card-description"] {
    color: var(--muted-foreground);
    font-size: 0.875rem;
    line-height: 1.6;
    padding-bottom: 0.5rem;
  }
</style>
