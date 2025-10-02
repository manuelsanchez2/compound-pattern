<script lang="ts">
  import { type WithElementRef } from "$lib/utils.js"
  import type { HTMLAttributes } from "svelte/elements"

  type Props = WithElementRef<HTMLAttributes<HTMLElement>> & {
    separable?: boolean
  }

  let {
    separable = true,
    ref = $bindable(null),
    class: className = "",
    children,
    ...restProps
  }: Props = $props()
</script>

<footer
  bind:this={ref}
  data-slot="card-footer"
  class={`${separable ? "borderTop" : ""} ${className}`}
  {...restProps}
>
  {@render children?.()}
</footer>

<style>
  [data-slot="card-footer"] {
    padding: var(--spacing-lg);
    padding-top: var(--spacing-xl);
  }
  [data-slot="card-footer"].borderTop {
    border-top: 1px solid var(--border);
    padding-top: var(--spacing-xl);
  }
</style>
