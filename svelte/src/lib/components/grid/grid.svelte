<script lang="ts">
  import type { WithElementRef } from "$lib/utils"
  import type { HTMLAttributes } from "svelte/elements"

  /**
   * Grid with auto-fit columns and minmax( --grid-min, 1fr )
   * - `min` controls the minimum column width (via class -> CSS variable)
   * - `gap` controls the spacing
   * - `align` controls align-items for the grid items
   */
  type MinVariant = "min-200" | "min-250" | "min-300" | "min-350" | "min-400"
  type Gap = "sm" | "md" | "lg"
  type Align = "start" | "center" | "end" | "stretch"

  type Props = WithElementRef<HTMLAttributes<HTMLElement>> & {
    /** Minimum column width (e.g. 200px -> auto-fit minmax(200px, 1fr)) */
    min?: MinVariant
    /** Gap size between cells */
    gap?: Gap
    /** align-items */
    align?: Align
  }

  let {
    min = "min-300",
    gap = "md",
    align = "stretch",
    ref = $bindable<HTMLElement | null>(null),
    class: className = "",
    children,
    ...restProps
  }: Props = $props()
</script>

<div
  bind:this={ref}
  data-slot="grid"
  class={`grid ${min} gap-${gap} align-${align} ${className}`}
  {...restProps}
>
  {@render children?.()}
</div>

<style>
  /* Defaults (can be overridden by .min-* / .gap-* / .align-*) */
  [data-slot="grid"] {
    --grid-min: 300px; /* default if no .min-* */
    --grid-gap: 1rem; /* md */
    --grid-align: stretch; /* align-items */

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(var(--grid-min), 1fr));
    gap: var(--grid-gap);
    align-items: var(--grid-align);
    width: 100%;
  }

  /* Min width variants */
  [data-slot="grid"].min-200 {
    --grid-min: 200px;
  }
  [data-slot="grid"].min-250 {
    --grid-min: 250px;
  }
  [data-slot="grid"].min-300 {
    --grid-min: 300px;
  }
  [data-slot="grid"].min-350 {
    --grid-min: 350px;
  }
  [data-slot="grid"].min-400 {
    --grid-min: 400px;
  }

  /* Gaps */
  [data-slot="grid"].gap-sm {
    --grid-gap: 0.5rem;
  }
  [data-slot="grid"].gap-md {
    --grid-gap: 1rem;
  }
  [data-slot="grid"].gap-lg {
    --grid-gap: 1.5rem;
  }

  /* Item alignment */
  [data-slot="grid"].align-start {
    --grid-align: start;
  }
  [data-slot="grid"].align-center {
    --grid-align: center;
  }
  [data-slot="grid"].align-end {
    --grid-align: end;
  }
  [data-slot="grid"].align-stretch {
    --grid-align: stretch;
  }
</style>
