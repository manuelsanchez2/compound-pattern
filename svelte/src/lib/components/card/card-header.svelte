<script lang="ts">
  import { type WithElementRef } from "$lib/utils.js"
  import type { HTMLAttributes } from "svelte/elements"

  type Props = WithElementRef<HTMLAttributes<HTMLElement>> & {
    separated?: boolean
  }

  let {
    separated = true,
    ref = $bindable(null),
    class: className = "",
    children,
    ...restProps
  }: Props = $props()
</script>

<header
  bind:this={ref}
  data-slot="card-header"
  class:borderBottom={separated}
  class={`${className}`}
  {...restProps}
>
  {@render children?.()}
</header>

<style>
  [data-slot="card-header"] {
    padding: var(--spacing-lg);
    padding-bottom: var(--spacing-xl);
  }
  [data-slot="card-header"].borderBottom {
    border-bottom: 1px solid var(--border);
  }
</style>
